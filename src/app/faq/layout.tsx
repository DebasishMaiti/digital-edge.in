import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Digital Edge 360°",
  description: "Answers about pricing, timelines and services offered by Digital Edge 360, a digital marketing and web development agency in India.",
  alternates: {
    canonical: "https://digitaledge360.in/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
