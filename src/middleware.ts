import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "digital-edge-super-secure-jwt-secret-key-2026";

/**
 * Base64 URL decoding helper compatible with Next.js Edge runtime
 */
function base64UrlDecode(str: string): string {
  let b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (b64.length % 4) {
    b64 += "=";
  }
  return atob(b64);
}

/**
 * Verifies HS256 JWT in Edge runtime without Node.js crypto dependencies
 */
async function verifyJwtInEdge(
  token: string,
  secret: string
): Promise<{ id: string; email: string; role: string; name?: string } | null> {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [headerB64, payloadB64, signatureB64] = parts;

    // Verify signature using Web Crypto HMAC-SHA256
    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      enc.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );

    const sigDecoded = base64UrlDecode(signatureB64);
    const sigBytes = new Uint8Array(sigDecoded.length);
    for (let i = 0; i < sigDecoded.length; i++) {
      sigBytes[i] = sigDecoded.charCodeAt(i);
    }

    const isValid = await crypto.subtle.verify(
      "HMAC",
      key,
      sigBytes,
      enc.encode(`${headerB64}.${payloadB64}`)
    );

    if (!isValid) return null;

    const payload = JSON.parse(base64UrlDecode(payloadB64));
    if (payload.exp && Date.now() >= payload.exp * 1000) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const method = request.method.toUpperCase();

  // Extract token from cookie or Authorization header
  let token = request.cookies.get("in_token")?.value || request.cookies.get("auth_token")?.value;
  if (!token) {
    const authHeader = request.headers.get("authorization");
    if (authHeader && authHeader.toLowerCase().startsWith("bearer ")) {
      token = authHeader.substring(7).trim();
    }
  }

  // 1. Protect all Admin UI routes (/admin, /admin/blogs, /admin/dashboard, etc.)
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    if (!token) {
      const loginUrl = new URL("/portal-access", request.url);
      return NextResponse.redirect(loginUrl);
    }

    const user = await verifyJwtInEdge(token, JWT_SECRET);
    if (!user || (user.role !== "admin" && user.role !== "editor")) {
      const loginUrl = new URL("/portal-access", request.url);
      const res = NextResponse.redirect(loginUrl);
      // Clear invalid cookie
      res.cookies.delete("in_token");
      res.cookies.delete("auth_token");
      return res;
    }

    // If navigating to root /admin or legacy /admin/dashboard, redirect directly to /admin/blogs
    if (
      pathname === "/admin" ||
      pathname === "/admin/" ||
      pathname === "/admin/dashboard" ||
      pathname === "/admin/dashboard/"
    ) {
      return NextResponse.redirect(new URL("/admin/blogs", request.url));
    }

    return NextResponse.next();
  }

  // 2. Protect Admin / Content Mutation APIs (POST, PUT, DELETE, PATCH)
  const isApiMutation =
    (pathname.startsWith("/api/blogs") ||
      pathname.startsWith("/api/founders-insights") ||
      pathname === "/api/upload") &&
    ["POST", "PUT", "DELETE", "PATCH"].includes(method);

  if (isApiMutation) {
    if (!token) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized: Missing authentication token. Please log in to perform this action.",
        },
        { status: 401 }
      );
    }

    const user = await verifyJwtInEdge(token, JWT_SECRET);
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized: Invalid or expired session token. Please log in again.",
        },
        { status: 401 }
      );
    }

    if (user.role !== "admin" && user.role !== "editor") {
      return NextResponse.json(
        {
          success: false,
          error: "Forbidden: Administrator role required to create, modify, or delete content.",
        },
        { status: 403 }
      );
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/admin/:path*",
    "/api/blogs",
    "/api/blogs/:path*",
    "/api/founders-insights",
    "/api/founders-insights/:path*",
    "/api/upload",
  ],
};
