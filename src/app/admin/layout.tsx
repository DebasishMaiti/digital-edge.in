import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "@/lib/auth";
import AdminAuthGuard from "@/components/AdminAuthGuard";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("in_token")?.value || cookieStore.get("auth_token")?.value;

  if (!token) {
    redirect("/portal-access");
  }

  const user = verifyToken(token);
  if (!user || (user.role !== "admin" && user.role !== "editor")) {
    redirect("/portal-access");
  }

  return <AdminAuthGuard>{children}</AdminAuthGuard>;
}
