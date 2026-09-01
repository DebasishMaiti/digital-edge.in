import { notFound } from "next/navigation";
import CompanyDetailsClient from "./CompanyDetailsClient";
import { storiesData } from "@/data/successStories";

import { Metadata } from "next";

export function generateStaticParams() {
  return Object.keys(storiesData).map((slug) => ({
    slug: slug,
  }));
}

const caseStudiesMetadata: Record<string, { title: string; description: string }> = {
  "creative-ecotech": {
    title: "Creative Ecotech Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 helped Creative Ecotech, an eco-friendly plastics brand, build a clearer, trust-building digital presence."
  },
  "dooli": {
    title: "Dooli Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built Dooli, a versatile ride-hailing, parcel delivery, and JCB rental mobile application."
  },
  "ducati": {
    title: "Ducati Kolkata Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 grew Ducati Kolkata's showroom footfall through influencer marketing, social storytelling & events."
  },
  "earthbags": {
    title: "EarthBags Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 helped EarthBags, a sustainable bag brand, boost visibility and connect with eco-conscious shoppers."
  },
  "earthy-line": {
    title: "Earthyline Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 strengthened Earthyline's digital presence through SEO and performance marketing for its handloom sarees."
  },
  "edefyhome": {
    title: "Edify Home Decor Case Study | Digital Edge 360",
    description: "How Digital Edge 360 helped Edify Home Decor generate quality leads through SEO, social content and performance ads."
  },
  "edgeringtone": {
    title: "Edge Ringtones App Case Study | Digital Edge 360",
    description: "How Digital Edge 360 built Edge Ringtones, a premium custom ringtone app with fast CDN delivery and seamless UI."
  },
  "hubfit": {
    title: "HubFit Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built HubFit, a fitness coaching app with real-time tracking, wearable sync and coach messaging."
  },
  "jetchoice": {
    title: "JetChoice Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 boosted visibility and lead generation for JetChoice, a premier international travel company."
  },
  "jiva": {
    title: "Hotel JIVA Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 boosted direct bookings for Hotel JIVA, a 4-star boutique hotel in Jamshedpur, through local SEO."
  },
  "likeson": {
    title: "Likeson Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 grew Likeson, a healthcare appointment booking platform, through performance marketing and outreach."
  },
  "momentum": {
    title: "Momentum Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built Momentum, an all-in-one EdTech app with live classes, mock tests and doubt-solving tools."
  },
  "nayantara": {
    title: "Nayantara Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built Nayantara a premium website and SEO strategy for its luxury saree and ethnic fashion collection."
  },
  "omniastra": {
    title: "OmniAstra Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 grew OmniAstra's search volume 286% and retailer enquiries 318% for this luxury eyewear distributor."
  },
  "priyanka-khaitan": {
    title: "Priyanka Khaitan Case Study | Digital Edge 360",
    description: "How Digital Edge 360 turned Priyanka Khaitan's bridal jewelry salon into an immersive digital showroom with virtual try-ons."
  },
  "publix": {
    title: "Publix Grocery App Case Study | Digital Edge 360",
    description: "How Digital Edge 360 built the Publix grocery delivery app with real-time inventory sync and curbside pickup logistics."
  },
  "recipe-keeper": {
    title: "Recipe Keeper Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built Recipe Keeper, a digital cookbook app with OCR scanning, meal planning and voice control."
  },
  "ring-my-stylist": {
    title: "Ring My Stylist Case Study | Digital Edge 360",
    description: "How Digital Edge 360 built Ring My Stylist, a salon booking app with real-time sync, online payments and reminders."
  },
  "roughells": {
    title: "RougHells Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 boosted brand visibility and sales for RougHells, a contemporary comfort-first shirt brand."
  },
  "sacred-suta": {
    title: "Sacred Suta Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 grew Sacred Suta's online visibility and sales for its handcrafted ethnic fashion collection."
  },
  "sree-vedics": {
    title: "Sree Vedics Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 boosted Sree Vedics' online visibility and customer engagement for its skincare and wellness line."
  },
  "truboy-bbq": {
    title: "TruBoy BBQ Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 helped TruBoy BBQ boost Average Order Value from $30 to $250 through strategic upselling and combos."
  },
  "o2bodmas": {
    title: "O2 BODMAS Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built the O2 BODMAS EdTech app with live classes, test series, and low-latency video streaming."
  },
  "gamp-wheels": {
    title: "Gamp Wheels Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built Gamp Wheels, an enterprise blood delivery management system for logistics staff, riders, and administrators."
  },
  "amp-wheels": {
    title: "Gamp Wheels Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built Gamp Wheels, an enterprise blood delivery management system for logistics staff, riders, and administrators."
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const story = storiesData[slug];
  if (!story) return {};

  const custom = caseStudiesMetadata[slug];
  return {
    title: custom ? custom.title : `${story.title} Case Study | Digital Edge 360`,
    description: custom ? custom.description : (story.description || `Case study for ${story.title} by Digital Edge 360`),
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
