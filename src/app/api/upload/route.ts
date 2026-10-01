import { NextResponse } from "next/server";
import ImageKit from "imagekit";
import { verifyAdminRequest } from "@/lib/auth";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY || "",
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "",
});

export async function POST(req: Request) {
  try {
    const auth = verifyAdminRequest(req);
    if (!auth.authorized) {
      return NextResponse.json(
        { success: false, error: auth.error },
        { status: auth.status }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file provided for upload." },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Clean file name and ensure uniqueness with timestamp
    const sanitizeFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filename = `${Date.now()}-${sanitizeFilename}`;

    // Upload directly to ImageKit
    const uploadResponse = await imagekit.upload({
      file: buffer,
      fileName: filename,
      folder: "/blogs",
      useUniqueFileName: true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Image uploaded successfully to ImageKit.",
        url: uploadResponse.url,
        fileId: uploadResponse.fileId,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST /api/upload ImageKit Error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to upload file to ImageKit." },
      { status: 500 }
    );
  }
}

