import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Digital Edge 360° Founders & Mission",
  description: "Meet the founders behind Digital Edge 360 — 7+ years, 75+ projects delivered, building ecommerce sites, apps & marketing that actually convert.",
  alternates: {
    canonical: "https://digitaledge360.in/about/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
