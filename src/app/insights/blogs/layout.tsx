import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Digital Marketing & Web Dev Insights India",
  description: "Guides and insights on SEO, app development, web development and digital marketing trends from Digital Edge 360, India.",
  alternates: {
    canonical: "https://digitaledge360.in/insights/blogs",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
