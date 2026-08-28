import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FoundersInsightClient from "./FoundersInsightClient";

const insightsData = {
  "what-include-complete-ecommerce-solution": {
    title: "What Include in Complete Ecommerce Solution",
    tag: "Ecommerce Strategy",
    date: "Aug 17, 2026",
    author: "Shomak Mitra",
    role: "Co-Founder & CTO",
    quote: "A complete ecommerce solution isn't just about launching a website; it is about building a scalable system where Strategy, Technology, Growth Marketing, and Omnichannel execution work together to drive monthly transaction volume and brand value.",
    desc: "A comprehensive breakdown of service pillars, key deliverables, and growth metrics that transition a standard online storefront into a market-leading brand.",
    content: [
      "Building a successful ecommerce enterprise is a multi-dimensional challenge. It goes far beyond simply setting up a shopping cart; it requires aligning strategy, technology, design, and multi-channel fulfillment into a cohesive architecture.",
      "Below is our structured matrix detailing the primary service pillars and key deliverables required for a complete, high-performing ecommerce solution:"
    ],
    pillars: [
      {
        title: "Strategy & Consulting",
        deliverables: "Digital Transformation, Market Expansion, AI Adoption, B2B and B2C Sales, and Business Revenue Model Creation (Online Platform)"
      },
      {
        title: "Content & Branding",
        deliverables: "Product Digitization, Rich Content Copy, Catalog Management, Social Media Marketing, Digital PR, Photo and Video Shoot, Video Marketing, Collateral Design and Print, Personal Branding of owners as per their relevant platform, Influencer Marketing"
      },
      {
        title: "Technology",
        deliverables: "UI and UX Design, Custom Website & Mobile App Development, Shopify Website Development, API & ERP integrations"
      },
      {
        title: "Experience",
        deliverables: "Graphic Design, Motion Graphics, Carousels, Video Content (Reels, Storytelling), Personalization, Loyalty Programmes"
      },
      {
        title: "Growth Marketing",
        deliverables: "Paid Ads (Meta Ads and Google Ads), Search Engine Optimization, Answer Engine Optimization, Local SEO (Google Business Profile Management), Conversion Rate Optimization, AI Marketing"
      },
      {
        title: "Omnichannel & Quick Commerce",
        deliverables: "Marketplace setups (Amazon, Flipkart, Myntra, Ajio, JioMart etc) (D2C, B2B, quick-commerce setups), Affiliate Marketing, and Marketplace Expansion & Management including Quick Commerce (Blinkit, Zepto, Swiggy Instamart etc)"
      }
    ],
    metrics: [
      {
        title: "Higher Sales and Revenue",
        desc: "Growing monthly transaction volume and total store or business revenue."
      },
      {
        title: "Improved Conversion Rates",
        desc: "Optimizing checkout flows and product pages so more visitors turn into buyers."
      },
      {
        title: "Stronger Customer Retention",
        desc: "Setting up automated emails and loyalty programs to bring past buyers back for repeat purchases."
      }
    ],
    results: [
      {
        title: "Immediate Sales",
        desc: "Paid search ads and social media ads put your products right in front of active buyers to generate fast revenue."
      },
      {
        title: "Higher Revenue",
        desc: "A smooth user experience and clear product pages turn casual browsers into paying customers."
      },
      {
        title: "Lower Cart Abandonment",
        desc: "Retargeting ads and automated text or email reminders bring back people who left items in their cart."
      },
      {
        title: "Higher Return Value",
        desc: "Personalized emails and special offers keep buyers coming back for more orders."
      },
      {
        title: "Stronger Brand Name",
        desc: "Helpful content, influencer shout-outs, and good reviews build trust with new shoppers."
      }
    ]
  },
  "why-we-turned-down-40-lakh-retainer": {
    title: "Why We Turned Down a ₹40 Lakh Retainer",
    tag: "Specialization",
    date: "Aug 17, 2026",
    author: "Shomak Mitra",
    role: "Co-Founder & CTO",
    quote: "Today, the rule is simple. If a brand isn’t in e-commerce or D2C, we don’t take them on — regardless of how attractive the retainer looks. Not because the money isn’t good, but because we’ve learned that depth beats width every time it actually matters.",
    desc: "A founder’s note on why depth beats breadth in agency work.",
    content: [
      "Last quarter, we said no to a ₹40 lakh retainer.",
      "The client was a wellness brand. Good budget, easy business on paper, the kind of deal most agencies would close without a second thought. We passed — not because we lacked the skill to run their marketing, but because we’ve spent the last three years going deep in exactly one space: e-commerce and D2C. Wellness as a category behaves differently enough from what we know that taking it on would have meant learning at their expense for the first few months. That’s not a trade-off we’re willing to make anymore."
    ],
    sections: [
      {
        heading: "It wasn’t always this way",
        text: "When Digital Edge 360 was four people trying to keep the lights on, we took almost any client who walked through the door. A logistics startup one month. A coaching business the next. A regional retail chain after that. Each one came with a completely different buyer psychology, a different sales cycle, a different set of unknowns — and we were building the playbook from scratch every single time. It worked, in the sense that we survived. But nothing compounded. Every new client felt like starting the business over."
      },
      {
        heading: "The line that changed how we work",
        text: "The shift happened after a founder ended her contract with a single sentence: 'I don't think you understand how people actually buy from us.' She wasn’t wrong. And it stung enough to make us rethink client selection from the ground up."
      },
      {
        heading: "What specialization actually buys you",
        text: "Working with 150+ brands in one space, rather than a handful across ten, changes what you’re capable of noticing. We know a skincare brand's repeat-purchase curve looks nothing like a homeware brand's. We know why a jewellery brand's ad creative needs a completely different emotional register than a supplements brand's. We’ve seen enough seasonality, AOV benchmarks, and return-rate patterns across this one category that we’re rarely starting from zero — we’re pattern-matching against something we’ve already lived through."
      },
      {
        heading: "No catch-up learning on your budget",
        text: "A generalist agency working across ten industries can’t build that kind of institutional memory. They’re always half a step behind on someone’s business, using your budget to catch up."
      },
      {
        heading: "The one question worth asking before you hire an agency",
        text: "If you’re evaluating agencies for your brand, skip the pitch deck questions for a moment and ask this instead: 'How many brands in my exact category have you worked with in the last twelve months?' A sharp, specific answer means the agency has already done the reps in your space. A vague one is a warning sign — it usually means you’re about to become their education, not their client."
      },
      {
        heading: "Depth-first marketing with Digital Edge 360",
        text: "Digital Edge 360 works exclusively with e-commerce and D2C brands. If you’d like to talk about what depth-first marketing could look like for your business, get in touch."
      }
    ]
  }
};

type InsightId = keyof typeof insightsData;

export async function generateStaticParams() {
  return [
    { id: "what-include-complete-ecommerce-solution" },
    { id: "why-we-turned-down-40-lakh-retainer" }
  ];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function FoundersInsightPage({ params }: PageProps) {
  const { id } = await params;
  const post = insightsData[id as InsightId];

  if (!post) {
    return (
      <div className="w-full bg-[#0d1b3e] min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[180px] pb-24 text-center text-white">
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-3xl font-black">Insight Not Found</h1>
          <p className="text-slate-400 font-semibold">The insight article you are looking for does not exist.</p>
          <Link href="/insights/founders-insights" className="inline-flex items-center gap-2 text-sm font-extrabold text-blue-400 uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return <FoundersInsightClient id={id} post={post} />;
}
