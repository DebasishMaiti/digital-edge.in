import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance Marketing Agency in India | DE360",
  description: "Google Ads & Meta Ads management by a performance marketing agency in India — data-driven campaigns that lower CAC and grow ROI.",
  alternates: {
    canonical: "https://digitaledge360.in/performance-marketing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
