import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Digital Edge 360° India",
  description: "Get in touch with Digital Edge 360, a digital marketing and web development agency in India, for a free consultation.",
  alternates: {
    canonical: "https://digitaledge360.in/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
