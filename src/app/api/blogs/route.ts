import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { BlogModel } from "@/models/Blog";
import { verifyAdminRequest } from "@/lib/auth";

// GET /api/blogs - Get all blogs (supports query: ?status=published or all non-deleted blogs)
export async function GET(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");

    const query: any = {};
    if (status && status.toLowerCase() !== "all") {
      const normalizedStatus = status.toLowerCase().trim();
      query.status = { $regex: new RegExp(`^${normalizedStatus}$`, "i") };
    } else {
      query.status = { $nin: ["deleted", "Deleted"] };
    }

    const blogs = await BlogModel.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, count: blogs.length, blogs }, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/blogs Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch blogs." },
      { status: 500 }
    );
  }
}

// POST /api/blogs - Create / Add a new blog
export async function POST(req: Request) {
  try {
    const auth = verifyAdminRequest(req);
    if (!auth.authorized) {
      return NextResponse.json(
        { success: false, error: auth.error },
        { status: auth.status }
      );
    }
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

    const {
      title,
      slug,
      content,
      publishDate,
      featuredImage,
      metaTitle,
      metaDescription,
      status = "published",
      author = "Digital Edge Team",
    } = data;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, error: "Title and content are required fields." },
        { status: 400 }
      );
    }

    await connectDB();

    // Generate or format slug
    const normalizedSlug = (
      slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
    )
      .trim()
      .toLowerCase();

    // Check slug uniqueness
    const existing = await BlogModel.findOne({ slug: normalizedSlug });
    if (existing) {
      return NextResponse.json(
        { success: false, error: "A blog with this slug already exists. Please choose a unique slug or title." },
        { status: 409 }
      );
    }

    let normalizedStatus: "draft" | "published" | "deleted" = "published";
    if (status) {
      const lower = String(status).toLowerCase().trim();
      if (lower === "draft" || lower === "deleted" || lower === "published") {
        normalizedStatus = lower as "draft" | "published" | "deleted";
      }
    }

    const newBlog = await BlogModel.create({
      title: title.trim(),
      slug: normalizedSlug,
      content,
      publishDate: publishDate || new Date().toISOString().split("T")[0],
      featuredImage: featuredImage || "",
      metaTitle: metaTitle || "",
      metaDescription: metaDescription || "",
      status: normalizedStatus,
      author: author || "Digital Edge Team",
    });

    return NextResponse.json(
      { success: true, message: "Blog created successfully.", blog: newBlog },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST /api/blogs Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create blog." },
      { status: 500 }
    );
  }
}
