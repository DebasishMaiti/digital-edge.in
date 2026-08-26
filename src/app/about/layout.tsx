import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Digital Growth Agency in India",
  description: "Meet Digital Edge 360 — a full-service digital growth and web/app development agency in India with 7+ years of experience.",
  alternates: {
    canonical: "https://digitaledge360.in/about/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
