import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Company in India | Digital Edge 360",
  description: "Custom website and web application development company in India — built on Next.js & React for speed, SEO and scalability.",
  alternates: {
    canonical: "https://digitaledge360.in/web-development",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
