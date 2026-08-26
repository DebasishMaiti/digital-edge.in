import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Development Company in India| Digital Edge 360",
  description: "Native & cross-platform ecommerce apps built for iOS and Android — engineered for checkout speed, retention and repeat purchases.",
  alternates: {
    canonical: "https://digitaledge360.in/app-development",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
