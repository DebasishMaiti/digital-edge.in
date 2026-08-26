import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Social Media Marketing Agency in India",
  description: "Technical SEO, content marketing and social media marketing services from a top digital marketing agency in India.",
  alternates: {
    canonical: "https://digitaledge360.in/seo-smm/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
