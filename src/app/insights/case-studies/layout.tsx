import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Digital Edge 360° India",
  description: "Explore real client success stories across web development, app development, SEO and marketing from Digital Edge 360, India.",
  alternates: {
    canonical: "https://digitaledge360.in/insights/case-studies/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
