import { notFound } from "next/navigation";
import CompanyDetailsClient from "./CompanyDetailsClient";
import { storiesData } from "@/data/successStories";

import { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(storiesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = storiesData[slug];
  if (!story) return {};

  return {
    title: `${story.title} Case Study | Digital Edge 360`,
    description: story.description || `Case study for ${story.title} by Digital Edge 360`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = storiesData[slug];

  if (!story) {
    notFound();
  }

  return <CompanyDetailsClient story={story} slug={slug} />;
}
