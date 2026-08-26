import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Solutions | Digital Edge 360° India",
  description: "Explore our end-to-end digital services including web development, app development, SEO, performance marketing, and creative production.",
  alternates: {
    canonical: "https://digitaledge360.in/solutions/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
