import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { FounderInsightModel } from "@/models/FounderInsight";
import { verifyAdminRequest } from "@/lib/auth";

// GET /api/founders-insights/[id] - Get single insight by ID or slug
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();

    let insight = null;

    // Check by Mongoose ObjectId or slug, excluding deleted
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      insight = await FounderInsightModel.findOne({
        _id: id,
        status: { $ne: "deleted" },
      });
    }

    if (!insight) {
      insight = await FounderInsightModel.findOne({
        slug: decodeURIComponent(id),
        status: { $ne: "deleted" },
      });
    }

    if (!insight) {
      return NextResponse.json(
        { success: false, error: "Founder Insight not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, insight }, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/founders-insights/[id] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch founder insight." },
      { status: 500 }
    );
  }
}

// PUT /api/founders-insights/[id] - Update founder insight
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const data = await req.json();

    let insight = await FounderInsightModel.findById(id);
    if (!insight) {
      insight = await FounderInsightModel.findOne({ slug: decodeURIComponent(id) });
    }

    if (!insight) {
      return NextResponse.json(
        { success: false, error: "Founder Insight not found for update." },
        { status: 404 }
      );
    }

    if (data.slug && data.slug !== insight.slug) {
      const existingSlug = await FounderInsightModel.findOne({
        slug: data.slug,
        _id: { $ne: insight._id },
      });
      if (existingSlug) {
        return NextResponse.json(
          { success: false, error: "Another founder insight already has this slug." },
          { status: 409 }
        );
      }
    }

    if (data.title !== undefined) insight.title = data.title;
    if (data.slug !== undefined) insight.slug = data.slug;
    if (data.founderName !== undefined) insight.founderName = data.founderName;
    if (data.founderRole !== undefined) insight.founderRole = data.founderRole;
    if (data.topic !== undefined) insight.topic = data.topic;
    if (data.quote !== undefined) insight.quote = data.quote;
    if (data.desc !== undefined) insight.desc = data.desc;
    if (data.content !== undefined) insight.content = data.content;
    if (data.publishDate !== undefined) insight.publishDate = data.publishDate;
    if (data.featuredImage !== undefined) insight.featuredImage = data.featuredImage;
    if (data.metaTitle !== undefined) insight.metaTitle = data.metaTitle;
    if (data.metaDescription !== undefined) insight.metaDescription = data.metaDescription;
    if (data.status !== undefined) {
      const lower = String(data.status).toLowerCase().trim();
      if (lower === "draft" || lower === "published" || lower === "deleted") {
        insight.status = lower as "draft" | "published" | "deleted";
      }
    }

    await insight.save();

    return NextResponse.json(
      { success: true, message: "Founder Insight updated successfully.", insight },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("PUT /api/founders-insights/[id] Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to update founder insight." },
      { status: 500 }
    );
  }
}

// DELETE /api/founders-insights/[id] - Soft delete founder insight
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
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

    let filter: any = {};
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      filter = { _id: id };
    } else {
      filter = { slug: decodeURIComponent(id) };
    }

    const deleted = await FounderInsightModel.findOneAndUpdate(
      filter,
      { $set: { status: "deleted" } },
      { new: true }
    );

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: "Founder Insight not found for deletion." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Founder Insight deleted successfully." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("DELETE /api/founders-insights/[id] Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete founder insight." },
      { status: 500 }
    );
  }
}
