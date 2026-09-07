import { Metadata } from "next";
import { caseStudiesData } from "@/data";
import CaseStudyDetailClient from "./CaseStudyDetailClient";

// Generate static routes for build time output export mode
export async function generateStaticParams() {
  return caseStudiesData.map((study) => ({
    slug: study.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesData.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} Case Study | Digital Edge 360°`,
    description: study.description,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudyDetailClient slug={slug} />;
}
