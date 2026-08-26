import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Digital Edge 360° India",
  description: "Terms and conditions governing your use of Digital Edge 360's website and digital marketing, web and app development services.",
  alternates: {
    canonical: "https://digitaledge360.in/terms/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
