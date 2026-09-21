import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Store Optimization Company in India | ASO Services That Drive Downloads",
  description: "Rank higher on the App Store & Google Play with data-driven ASO services. Keyword research, listing optimization, conversion rate optimization & review management. Book a free ASO audit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
