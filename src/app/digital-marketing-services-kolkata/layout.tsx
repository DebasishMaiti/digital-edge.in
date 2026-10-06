import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Kolkata | Digital Edge 360°",
  description:
    "Digital marketing services in Kolkata from Digital Edge 360: SEO, performance ads, social media and web. 7+ years, 75+ clients. Book a free audit.",
  alternates: {
    canonical: "https://digitaledge360.in/digital-marketing-services-kolkata/",
  },
  keywords: [
    "digital marketing services in kolkata",
    "digital marketing company in Kolkata",
    "digital marketing agency in Kolkata",
    "SEO services in Kolkata",
    "social media marketing in Kolkata",
    "Google Ads and Meta Ads in Kolkata",
    "digital marketing cost in Kolkata",
  ],
  openGraph: {
    title: "Digital Marketing Services in Kolkata | Digital Edge 360°",
    description:
      "Digital marketing services in Kolkata from Digital Edge 360: SEO, performance ads, social media and web. 7+ years, 75+ clients. Book a free audit.",
    url: "https://digitaledge360.in/digital-marketing-services-kolkata/",
    siteName: "Digital Edge 360°",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://ik.imagekit.io/digitaledge360/digitaledge-in/DE360-LOGO.png",
        width: 1200,
        height: 630,
        alt: "Digital Edge 360° Kolkata",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Kolkata | Digital Edge 360°",
    description:
      "Digital marketing services in Kolkata from Digital Edge 360: SEO, performance ads, social media and web. 7+ years, 75+ clients. Book a free audit.",
  },
};

export default function KolkataServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
