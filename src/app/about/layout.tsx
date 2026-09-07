import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Digital Growth Agency in India",
  description: "Meet Digital Edge 360 — a full-service digital growth and web/app development agency in India with 7+ years of experience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
