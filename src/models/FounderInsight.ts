import mongoose, { Schema, Document, Model } from "mongoose";

export interface IFounderInsight extends Document {
  title: string;
  slug: string;
  founderName: string;
  founderRole: string;
  topic?: string;
  quote?: string;
  desc?: string;
  content: string;
  publishDate: string;
  featuredImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  status: "draft" | "published" | "deleted";
  createdAt: Date;
  updatedAt: Date;
}

const FounderInsightSchema = new Schema<IFounderInsight>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    founderName: {
      type: String,
      required: [true, "Founder Name is required"],
      trim: true,
    },
    founderRole: {
      type: String,
      default: "Co-Founder & CEO",
      trim: true,
    },
    topic: {
      type: String,
      default: "Founder Insight",
      trim: true,
    },
    quote: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    publishDate: {
      type: String,
      default: () => new Date().toISOString().split("T")[0],
    },
    featuredImage: {
      type: String,
      default: "",
    },
    metaTitle: {
      type: String,
      default: "",
      trim: true,
    },
    metaDescription: {
      type: String,
      default: "",
      trim: true,
    },
    status: {
      type: String,
      enum: ["draft", "published", "deleted"],
      default: "published",
    },
  },
  {
    timestamps: true,
  }
);

export const FounderInsightModel: Model<IFounderInsight> =
  mongoose.models.FounderInsight || mongoose.model<IFounderInsight>("FounderInsight", FounderInsightSchema);
