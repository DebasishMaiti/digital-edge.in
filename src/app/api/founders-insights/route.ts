import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { FounderInsightModel } from "@/models/FounderInsight";
import { verifyAdminRequest } from "@/lib/auth";

// GET /api/founders-insights - Fetch list of founder insights
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

    const insights = await FounderInsightModel.find(query).sort({ createdAt: -1 });

    return NextResponse.json({ success: true, count: insights.length, insights }, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/founders-insights Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch founder insights." },
      { status: 500 }
    );
  }
}

// POST /api/founders-insights - Create a new founder insight
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
      founderName,
      founderRole = "Co-Founder & CEO",
      topic = "Founder Insight",
      quote = "",
      desc = "",
      content,
      publishDate,
      featuredImage,
      metaTitle,
      metaDescription,
      status = "published",
    } = data;

    if (!title || !content || !founderName) {
      return NextResponse.json(
        { success: false, error: "Title, founder name, and content are required." },
        { status: 400 }
      );
    }

    await connectDB();

    const normalizedSlug = (
      slug ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
    )
      .trim()
      .toLowerCase();

    const existing = await FounderInsightModel.findOne({ slug: normalizedSlug });
    if (existing) {
      return NextResponse.json(
        { success: false, error: "An insight with this slug already exists." },
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

    const newInsight = await FounderInsightModel.create({
      title: title.trim(),
      slug: normalizedSlug,
      founderName: founderName.trim(),
      founderRole: founderRole.trim(),
      topic: topic.trim(),
      quote: quote.trim(),
      desc: desc.trim(),
      content,
      publishDate: publishDate || new Date().toISOString().split("T")[0],
      featuredImage: featuredImage || "",
      metaTitle: metaTitle || "",
      metaDescription: metaDescription || "",
      status: normalizedStatus,
    });

    return NextResponse.json(
      { success: true, message: "Founder Insight created successfully.", insight: newInsight },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST /api/founders-insights Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to create founder insight." },
      { status: 500 }
    );
  }
}
