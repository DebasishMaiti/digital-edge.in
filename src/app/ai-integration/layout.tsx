import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Integration & Automation Services in India | DE360",
  description: "Transform your business workflows with custom AI integration, LLM deployment, neural pipelines, and RAG semantic search solutions.",
  alternates: {
    canonical: "https://digitaledge360.in/ai-integration",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
