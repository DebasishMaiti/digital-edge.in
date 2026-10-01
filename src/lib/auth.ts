import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "digital-edge-super-secure-jwt-secret-key-2026";

export interface AuthUser {
  id: string;
  email: string;
  role: string;
  name: string;
}

export function createToken(payload: AuthUser): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): AuthUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthUser;
  } catch (error) {
    return null;
  }
}

/**
 * Extracts JWT token from incoming request via:
 * 1. Authorization: Bearer <token>
 * 2. Cookie header: auth_token=<token>
 */
export function extractTokenFromRequest(req: Request): string | null {
  // Check Authorization header first
  const authHeader = req.headers.get("authorization");
  if (authHeader && authHeader.toLowerCase().startsWith("bearer ")) {
    return authHeader.substring(7).trim();
  }

  // Check Cookie header
  const cookieHeader = req.headers.get("cookie");
  if (cookieHeader) {
    const cookies = cookieHeader.split(";").map((c) => c.trim());
    for (const cookie of cookies) {
      const [name, ...val] = cookie.split("=");
      if (name.trim() === "in_token" || name.trim() === "auth_token") {
        return decodeURIComponent(val.join("=")).trim();
      }
    }
  }

  return null;
}

export type VerifyAdminResult =
  | { authorized: true; user: AuthUser }
  | { authorized: false; error: string; status: number };

/**
 * Validates request for admin or editor privileges
 */
export function verifyAdminRequest(req: Request): VerifyAdminResult {
  const token = extractTokenFromRequest(req);
  if (!token) {
    return {
      authorized: false,
      error: "Authentication required. Please provide a valid Bearer token or login session.",
      status: 401,
    };
  }

  const user = verifyToken(token);
  if (!user) {
    return {
      authorized: false,
      error: "Invalid or expired authentication token. Please log in again.",
      status: 401,
    };
  }

  if (user.role !== "admin" && user.role !== "editor") {
    return {
      authorized: false,
      error: "Forbidden: You do not have administrator permissions to perform this action.",
      status: 403,
    };
  }

  return { authorized: true, user };
}
