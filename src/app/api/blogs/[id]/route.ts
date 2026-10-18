import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import { BlogModel } from "@/models/Blog";
import { verifyAdminRequest } from "@/lib/auth";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/blogs/[id] - Get blog by unique slug (or fallback by _id)
export async function GET(req: Request, { params }: RouteParams) {
  try {
    const { id } = await params;

    await connectDB();

    // Prioritize search by slug (case-insensitive exact match), excluding deleted
    let blog = await BlogModel.findOne({
      slug: id.toLowerCase().trim(),
      status: { $ne: "deleted" },
    });

    // Fallback: search by ObjectId if slug match yields no document
    if (!blog && mongoose.Types.ObjectId.isValid(id)) {
      blog = await BlogModel.findOne({
        _id: id,
        status: { $ne: "deleted" },
      });
    }

    if (!blog) {
      return NextResponse.json(
        { success: false, error: "Blog post not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, blog }, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/blogs/[id] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve blog." },
      { status: 500 }
    );
  }
}

// PUT /api/blogs/[id] - Edit / Update blog by ID or Slug
export async function PUT(req: Request, { params }: RouteParams) {
  try {
    const auth = verifyAdminRequest(req);
    if (!auth.authorized) {
      return NextResponse.json(
        { success: false, error: auth.error },
        { status: auth.status }
      );
    }

    const { id } = await params;

    const contentType = req.headers.get("content-type") || "";
    let data: any = {};

    if (contentType.includes("application/json")) {
      data = await req.json();
    } else {
      const formData = await req.formData();
      formData.forEach((value, key) => {
        data[key] = value;
      });
    }

    await connectDB();

    let query: any = {};
    if (mongoose.Types.ObjectId.isValid(id)) {
      query = { _id: id };
    } else {
      query = { slug: id.toLowerCase() };
    }

    const existingBlog = await BlogModel.findOne(query);
    if (!existingBlog) {
      return NextResponse.json(
        { success: false, error: "Blog post not found for updating." },
        { status: 404 }
      );
    }

    // If slug is being changed, verify uniqueness
    if (data.slug && data.slug.toLowerCase() !== existingBlog.slug) {
      const duplicateSlug = await BlogModel.findOne({
        slug: data.slug.toLowerCase(),
        _id: { $ne: existingBlog._id },
      });
      if (duplicateSlug) {
        return NextResponse.json(
          { success: false, error: "Another blog is already using this slug." },
          { status: 409 }
        );
      }
    }

    // If featuredImage is being updated or replaced, delete the old image from ImageKit
    if (
      data.featuredImage !== undefined &&
      existingBlog.featuredImage &&
      data.featuredImage !== existingBlog.featuredImage &&
      existingBlog.featuredImage.includes("ik.imagekit.io")
    ) {
      try {
        const ImageKit = (await import("imagekit")).default;
        const imagekit = new ImageKit({
          publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
          privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
          urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
        });

        // Extract filename from the URL (without query parameters)
        const urlWithoutQuery = existingBlog.featuredImage.split("?")[0];
        const fileName = urlWithoutQuery.substring(urlWithoutQuery.lastIndexOf("/") + 1);

        if (fileName) {
          const files = await imagekit.listFiles({
            name: fileName,
            limit: 1,
          });

          const targetFile = files.find((f: any) => f && f.fileId) as any;
          if (targetFile && targetFile.fileId) {
            await imagekit.deleteFile(targetFile.fileId);
          }
        }
      } catch (delErr) {
        console.warn("Failed to delete previous ImageKit image:", delErr);
      }
    }

    let normalizedStatus = existingBlog.status;
    if (data.status !== undefined) {
      const lower = String(data.status).toLowerCase().trim();
      if (lower === "draft" || lower === "published" || lower === "deleted") {
        normalizedStatus = lower as "draft" | "published" | "deleted";
      }
    }

    const updatedBlog = await BlogModel.findByIdAndUpdate(
      existingBlog._id,
      {
        $set: {
          title: data.title !== undefined ? data.title.trim() : existingBlog.title,
          slug: data.slug !== undefined ? data.slug.toLowerCase().trim() : existingBlog.slug,
          content: data.content !== undefined ? data.content : existingBlog.content,
          publishDate: data.publishDate !== undefined ? data.publishDate : existingBlog.publishDate,
          featuredImage: data.featuredImage !== undefined ? data.featuredImage : existingBlog.featuredImage,
          metaTitle: data.metaTitle !== undefined ? data.metaTitle : existingBlog.metaTitle,
          metaDescription: data.metaDescription !== undefined ? data.metaDescription : existingBlog.metaDescription,
          status: normalizedStatus,
          author: data.author !== undefined ? data.author : existingBlog.author,
        },
      },
      { new: true, runValidators: true }
    );

    return NextResponse.json(
      { success: true, message: "Blog updated successfully.", blog: updatedBlog },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("PUT /api/blogs/[id] Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update blog." },
      { status: 500 }
    );
  }
}

// DELETE /api/blogs/[id] - Soft delete a blog post (set status to deleted)
export async function DELETE(req: Request, { params }: RouteParams) {
  try {
    const auth = verifyAdminRequest(req);
    if (!auth.authorized) {
      return NextResponse.json(
        { success: false, error: auth.error },
        { status: auth.status }
      );
    }

    const { id } = await params;

    await connectDB();

    let query: any = {};
    if (mongoose.Types.ObjectId.isValid(id)) {
      query = { _id: id };
    } else {
      query = { slug: id.toLowerCase() };
    }

    const deletedBlog = await BlogModel.findOneAndUpdate(
      query,
      { $set: { status: "deleted" } },
      { new: true }
    );
    if (!deletedBlog) {
      return NextResponse.json(
        { success: false, error: "Blog post not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Blog post deleted successfully.", id: deletedBlog._id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("DELETE /api/blogs/[id] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete blog post." },
      { status: 500 }
    );
  }
}
