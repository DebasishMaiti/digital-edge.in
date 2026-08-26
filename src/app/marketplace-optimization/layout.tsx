import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace Optimization Services | Amazon, Flipkart",
  description: "Amazon, Flipkart and marketplace listing optimization, SEO and ads management services for sellers across India.",
  alternates: {
    canonical: "https://digitaledge360.in/marketplace-optimization/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
