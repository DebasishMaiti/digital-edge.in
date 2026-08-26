import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Company in India | DE360",
  description: "Custom iOS & Android app development company in India — native and cross-platform apps built for startups and enterprises.",
  alternates: {
    canonical: "https://digitaledge360.in/app-development/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
