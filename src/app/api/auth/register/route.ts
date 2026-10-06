import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import { UserModel } from "@/models/User";
import { createToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let name = "";
    let email = "";
    let password = "";
    let role = "admin";

    if (contentType.includes("application/json")) {
      const body = await req.json();
      name = body.name;
      email = body.email;
      password = body.password;
      if (body.role) role = body.role;
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const formData = await req.formData();
      name = (formData.get("name") as string) || "";
      email = (formData.get("email") as string) || "";
      password = (formData.get("password") as string) || "";
      if (formData.get("role")) role = formData.get("role") as string;
    } else {
      // Fallback: try json, then text
      const text = await req.text();
      try {
        const body = JSON.parse(text);
        name = body.name;
        email = body.email;
        password = body.password;
        if (body.role) role = body.role;
      } catch {
        const params = new URLSearchParams(text);
        name = params.get("name") || "";
        email = params.get("email") || "";
        password = params.get("password") || "";
        if (params.get("role")) role = params.get("role") || "admin";
      }
    }

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    await connectDB();

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await UserModel.findOne({ email: normalizedEmail });
    if (existingUser) {
      return NextResponse.json(
        { error: "An account with this email address already exists." },
        { status: 409 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await UserModel.create({
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      role: role === "editor" ? "editor" : "admin",
    });

    // Generate JWT
    const token = createToken({
      id: newUser._id.toString(),
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    });

    const response = NextResponse.json(
      {
        message: "Registration successful",
        user: {
          id: newUser._id.toString(),
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    );

    // Set HTTP-Only Cookie
    response.cookies.set("in_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return response;
  } catch (error: any) {
    console.error("MongoDB Register Error:", error);
    return NextResponse.json(
      { error: "Database error or service unavailable. Ensure MongoDB is running." },
      { status: 500 }
    );
  }
}
