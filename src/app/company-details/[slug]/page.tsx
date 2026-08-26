import { notFound } from "next/navigation";
import CompanyDetailsClient from "./CompanyDetailsClient";
import { storiesData } from "@/data/successStories";

export function generateStaticParams() {
  return Object.keys(storiesData).map((slug) => ({
    slug: slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = storiesData[slug];

  if (!story) {
    notFound();
  }

  return <CompanyDetailsClient story={story} slug={slug} />;
}
