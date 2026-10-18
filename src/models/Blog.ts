import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  content: string;
  publishDate: string;
  featuredImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  status: "draft" | "published" | "deleted";
  author?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
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
    author: {
      type: String,
      default: "Digital Edge Team",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BlogModel: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
