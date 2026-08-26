import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Digital Edge 360° India",
  description: "Read how Digital Edge 360, a digital marketing and web development agency in India, collects, uses and protects your data.",
  alternates: {
    canonical: "https://digitaledge360.in/privacy/",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
