import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration Services | Digital Edge 360° India",
  description: "Incorporate artificial intelligence solutions, machine learning models, and smart automation tools into your digital business systems.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
