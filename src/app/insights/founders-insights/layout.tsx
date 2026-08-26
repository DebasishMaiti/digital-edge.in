import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder's Insights | Digital Edge 360° India",
  description: "Direct thoughts and strategy notes from the founders of Digital Edge 360, a digital agency based in India.",
  alternates: {
    canonical: "https://digitaledge360.in/insights/founders-insights",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
