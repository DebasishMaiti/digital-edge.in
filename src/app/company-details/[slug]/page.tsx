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
  "wire-communication": {
    title: "Wire Communication Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built Wire Communication a modern B2B telecom platform with 350% increase in enterprise customer inquiries."
  },
  "arcesium": {
    title: "Arcesium Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built Arcesium a high-performance web platform for its institutional investment technology and post-trade software solutions."
  },
  "era-residence": {
    title: "Era Residence Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built Era Residence an immersive luxury real estate digital platform with 410% growth in qualified buyer inquiries."
  },
  "genesis": {
    title: "Genesis Eduzone Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built an interactive learning platform and website for Genesis Eduzone, driving 310% growth in student inquiries."
  },
  "clean-max": {
    title: "CleanMax Solar Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built a high-performance web platform for CleanMax Solar, Asia's premier corporate renewable energy provider."
  },
  "riangle": {
    title: "Riangle Studio Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built a sleek, high-conversion web experience for Riangle Studio, elevating their digital product design portfolio."
  },
  "venturesoul": {
    title: "VentureSoul Partners Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built a high-performance web platform for VentureSoul Partners, a SEBI-registered Category II AIF debt fund."
  },
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
  "kayrah": {
    title: "Kayrah Case Study | Digital Edge 360°",
    description: "How Digital Edge 360 built a high-performance Next.js e-commerce storefront for Kayrah luxury fashion brand."
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
