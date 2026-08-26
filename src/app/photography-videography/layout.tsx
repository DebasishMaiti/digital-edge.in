import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography & Videography Agency in India | DE360",
  description: "Professional photography & videography agency in India — corporate, drone, product, event and ecommerce shoots plus expert video editing services.",
  alternates: {
    canonical: "https://digitaledge360.in/photography-videography/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
