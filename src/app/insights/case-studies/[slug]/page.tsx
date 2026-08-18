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

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <CaseStudyDetailClient slug={slug} />;
}
