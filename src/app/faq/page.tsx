"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedWords from "@/components/AnimatedWords";

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<{ [key: string]: number | null }>({
    about: null,
    niche: null,
    services: null,
    whitelabel: null,
    working: null,
  });

  const toggleFaq = (category: string, index: number) => {
    setOpenFaq((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index,
    }));
  };

  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(226, 232, 240, 0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
  };

  const tabs = [
    { id: "all", label: "All Questions" },
    { id: "about", label: "About Us" },
    { id: "niche", label: "Ecommerce Niche" },
    { id: "services", label: "Services" },
    { id: "whitelabel", label: "White Label" },
    { id: "working", label: "Working With Us" },
  ];

  const sections = [
    {
      id: "about",
      title: "ABOUT DIGITAL EDGE 360°",
      faqs: [
        {
          q: "What does Digital Edge 360° actually do?",
          a: "Digital Edge 360° is a full-service digital partner built exclusively for ecommerce businesses, with 7+ years of experience and 75+ projects delivered — covering website and app development, SEO, paid marketing, social media marketing, and video marketing. Everything from building the store itself to driving traffic and sales to it is handled under one roof. White-label versions of these services are also available for agencies looking to extend their own offering."
        },
        {
          q: "How much experience does Digital Edge 360° have?",
          a: "Digital Edge 360° brings 7+ years of experience and 75+ projects delivered across development and marketing for ecommerce businesses. The team includes specialists across technical SEO, on-page and off-page optimization, and the newer AEO/GEO discipline for AI-driven search, applied across the full service range."
        },
        {
          q: "Does Digital Edge 360° work with businesses outside its home market?",
          a: "Yes. Services are delivered remotely, and strategy is built around whichever market a client is targeting — home region or new market expansion alike — rather than being limited to businesses in any one location."
        },
        {
          q: "What sets Digital Edge 360° apart from other agencies?",
          a: "The focus is exclusively on ecommerce businesses, and the service range covers the full journey — building or improving the store itself through development, then driving qualified traffic and sales through SEO, paid marketing, social media, and video. Every recommendation is shaped around how online stores actually operate, not adapted from a general-purpose strategy."
        },
        {
          q: "How does an engagement with Digital Edge 360° typically start?",
          a: "It begins with a free audit or review of the client’s current site, app, ad accounts, or social presence, depending on the service of interest. From there, a scoped strategy and roadmap are built for that specific business before any ongoing work begins."
        },
        {
          q: "Are services offered individually or only as a full package?",
          a: "Both. Website development, app development, SEO, paid marketing, social media marketing, and video marketing can each be engaged on their own, or combined into a coordinated strategy where every channel shares data and works toward the same goals."
        }
      ]
    },
    {
      id: "niche",
      title: "ECOMMERCE NICHE",
      faqs: [
        {
          q: "Why does Digital Edge 360° only work with ecommerce businesses?",
          a: "Ecommerce sites carry technical and strategic needs that differ meaningfully from other website types — product variants, catalog-scale indexing issues, shopping feed optimization, and purchase-intent-driven content and campaigns. A single-niche focus means every service, from development to marketing, is built around those specifics rather than adapted from generic advice."
        },
        {
          q: "Which ecommerce platforms does Digital Edge 360° build on and optimize for?",
          a: "Development and optimization work covers major platforms, including Shopify, WooCommerce, and Magento. The specific technical approach — schema markup, URL structure, crawl handling, app integration — is adjusted based on the platform a given store runs on."
        },
        {
          q: "Does Digital Edge 360° work with small stores or only large catalogs?",
          a: "Both. A smaller catalog typically allows for a faster path to fully optimizing every product and category page, while a larger catalog requires more structured, phased prioritization — the underlying approach scales to the size of the store."
        },
        {
          q: "What product categories or ecommerce industries are covered?",
          a: "The core methodology — across development, technical SEO, and marketing — applies across ecommerce categories, since the underlying challenges (variants, feeds, purchase-intent content) are common to online stores generally rather than specific to one product type."
        },
        {
          q: "How is this different from working with a general digital agency?",
          a: "A general agency applies the same playbook across website types, which often misses ecommerce-specific issues like duplicate content from product filters, feed errors limiting Shopping visibility, or app experiences not built around a checkout flow. An ecommerce-focused approach treats the product catalog, purchase intent, and shopping behavior as the starting point for every service."
        }
      ]
    },
    {
      id: "services",
      title: "SERVICES",
      faqs: [
        {
          q: "Does Digital Edge 360° build ecommerce websites and apps, or only handle marketing?",
          a: "Both. Website and app development is a core service — building or rebuilding an ecommerce store and its companion app — alongside the marketing services that drive traffic and sales to it once it’s live."
        },
        {
          q: "What marketing services are available beyond SEO?",
          a: "Paid marketing (Google Ads, Meta Ads, and Shopping campaigns), social media marketing (content, captions, and platform strategy), and video marketing are all part of the service range, alongside SEO — allowing a business to run a coordinated strategy across every major channel."
        },
        {
          q: "What does video marketing include?",
          a: "Video marketing covers short-form video content built for platforms like Instagram Reels as well as product- and campaign-focused video content designed to support both organic reach and paid campaigns."
        },
        {
          q: "Can Digital Edge 360° handle a full site rebuild along with ongoing marketing?",
          a: "Yes. Development and marketing are structured to work together — a rebuilt or newly built store is set up with SEO and conversion best practices in mind from the start, rather than being optimized after the fact."
        }
      ]
    },
    {
      id: "whitelabel",
      title: "WHITE LABEL SERVICES",
      faqs: [
        {
          q: "Is white-label service available through Digital Edge 360°?",
          a: "Yes. Agencies can bring Digital Edge 360° in to handle development, SEO, paid marketing, social media marketing, or video marketing for their ecommerce clients, with the work carried out under the partner agency’s own brand."
        },
        {
          q: "Will end clients know a third party is doing the work?",
          a: "No. Reporting, communication, and deliverables are structured to reflect the partner agency’s branding. The partnership stays between Digital Edge 360° and the partner agency — end clients see results as coming directly from the agency they hired."
        },
        {
          q: "What does the white-label onboarding process look like?",
          a: "It starts with a conversation about the client’s needs and the partner agency’s existing workflow, so the work integrates cleanly into what’s already running. From there, strategy and execution are handled directly, with reporting and updates delivered in whatever format and cadence fits the partner agency’s own client-management process."
        },
        {
          q: "Can white-label reporting be customized to match how a partner agency already reports to clients?",
          a: "Yes. Reporting formats, communication frequency, and how deliverables are packaged can all be adapted to match a partner agency’s existing client-facing process, rather than requiring that process to change."
        },
        {
          q: "What services are available on a white-label basis?",
          a: "The full range — website and app development, SEO, paid marketing, social media marketing, and video marketing — is available white-label, either individually or combined, depending on what a partner agency’s clients need."
        },
        {
          q: "Is white-label pricing different from direct client pricing?",
          a: "White-label engagements are typically scoped and priced based on the specific workload and client needs a partner agency brings, rather than a fixed public rate — this is worked out directly during onboarding."
        },
        {
          q: "Are confidentiality or non-disclosure agreements part of white-label work?",
          a: "Yes, this is a standard part of setting up a white-label partnership, since keeping the relationship between a partner agency and its clients confidential is central to how the arrangement works."
        }
      ]
    },
    {
      id: "working",
      title: "WORKING WITH DIGITAL EDGE 360°",
      faqs: [
        {
          q: "How much do services cost?",
          a: "Pricing depends on the scope of work — the site or app’s current state, catalog size, competitiveness of the category, and which services are needed. A free audit or review is the most accurate way to get a scoped quote rather than relying on a flat, one-size-fits-all rate."
        },
        {
          q: "Are long-term contracts required?",
          a: "Engagement terms are discussed and agreed on a case-by-case basis depending on the scope of work — SEO and ongoing marketing in particular tend to work best as continuous engagements given how long organic and brand-building results take to compound."
        },
        {
          q: "How often are reports or updates provided?",
          a: "Reporting is typically monthly, covering the metrics relevant to each service — rankings and organic traffic for SEO, ROAS and CPA for paid marketing, engagement and content performance for social and video — with the cadence adjustable to fit each client’s preference."
        },
        {
          q: "How long does it take to see results?",
          a: "It depends on the channel. Paid marketing typically produces initial data within 2–4 weeks. SEO generally shows measurable ranking and traffic improvement within 3–6 months, with results compounding after that. Development projects are scoped with their own timeline, and social/video content builds brand consistency on an ongoing basis rather than a fixed schedule."
        },
        {
          q: "What happens if results aren’t meeting expectations?",
          a: "Strategy is reviewed and adjusted based on actual performance data rather than left on a fixed track regardless of outcome — underperformance is addressed directly as part of the ongoing engagement rather than left until a contract term ends."
        },
        {
          q: "Can development and marketing services be combined into one engagement?",
          a: "Yes, and it’s generally the strongest approach — a store or app built with SEO and conversion structure in mind from the start performs better once marketing drives traffic to it, and channels like SEO, paid marketing, social, and video all work better when coordinated around shared data and goals."
        },
        {
          q: "How does communication work once an engagement begins?",
          a: "Communication is set up around whatever channel and frequency works best for the client — regular calls, email updates, or a shared reporting dashboard — established during onboarding rather than fixed to a single default format."
        }
      ]
    }
  ];

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.in/faq/" />

      <div className="relative w-full bg-[#fafbfc] min-h-screen pb-24 text-slate-800 overflow-hidden">
        
        {/* FAQ Hero Wrapper with custom azure-cream light mode gradient */}
        <section className="relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[160px] pb-12 flex flex-col justify-center items-center text-center px-6 sm:px-8 bg-gradient-to-b from-[#f0fdfa] via-[#ccfbf1]/40 to-[#fafbfc] border-b border-slate-100/60 overflow-hidden">
          {/* Light Grid Scrolling Background */}
          <div 
            className="animate-grid-scroll opacity-65 pointer-events-none z-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(20, 184, 166, 0.12) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(20, 184, 166, 0.12) 1px, transparent 1px)
              `
            }}
          />

          {/* Glowing Ambient Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] w-[35%] aspect-square rounded-full bg-gradient-to-br from-[#0d9488]/8 via-[#06b6d4]/5 to-transparent blur-[80px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#99f6e4]/8 via-transparent to-transparent blur-[90px]" />
          </div>

          {/* SVG Custom Graphics - Layered Circular Bubbles representing clarity & questions */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-40">
            <svg className="w-full h-full min-w-[1000px] min-h-[500px]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              {/* Circular clean bubbles */}
              <circle cx="160" cy="180" r="45" fill="none" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="2.5" />
              <circle cx="210" cy="220" r="30" fill="none" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="120" cy="240" r="20" fill="rgba(20, 184, 166, 0.04)" />

              <circle cx="1020" cy="200" r="70" fill="none" stroke="rgba(20, 184, 166, 0.15)" strokeWidth="2" />
              <circle cx="980" cy="240" r="40" fill="none" stroke="rgba(6, 182, 212, 0.18)" strokeWidth="1.5" />

              {/* Clean structured query matrices */}
              <g transform="translate(540, 60)">
                {Array.from({ length: 4 }).map((_, r) =>
                  Array.from({ length: 8 }).map((_, c) => (
                    <circle
                      key={`faq-dot-${r}-${c}`}
                      cx={c * 18}
                      cy={r * 18}
                      r={1.5}
                      fill="rgb(20, 184, 166)"
                      opacity={0.2}
                    />
                  ))
                )}
              </g>
            </svg>
          </div>

          <div className="max-w-6xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-650 bg-white px-5 py-2.5 text-[10px] sm:text-xs font-extrabold tracking-[0.2em] text-gray-500 uppercase shadow-sm">
              STRAIGHT ANSWERS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#0d1b3e] tracking-tight leading-[1.05] flex flex-col items-center">
              <AnimatedWords text="Frequently Asked" />
              <span className="bg-gradient-to-r from-[#0d9488] via-[#06b6d4] to-[#0891b2] bg-clip-text text-transparent py-1">
                <AnimatedWords text="Questions" delay={0.2} />
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-sm sm:text-base text-slate-600 font-semibold leading-relaxed pt-2">
              Straight answers about who Digital Edge 360° works with, how engagements run, and what to expect — for ecommerce brands building their digital presence, and for agencies exploring a white-label partnership.
            </p>
          </div>
        </section>

        {/* Navigation Tabs (Desktop & Mobile Scroll) */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 mb-16 mt-12">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none justify-start lg:justify-center border-b border-slate-200/60">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex-shrink-0 border ${
                  activeTab === tab.id
                    ? "bg-[#2443ab] border-[#2443ab] text-white shadow-md"
                    : "bg-white border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ Accordion List by Section */}
        <section className="relative z-10 mx-auto max-w-6xl px-6 space-y-16">
          <AnimatePresence mode="wait">
            {sections
              .filter((sect) => activeTab === "all" || activeTab === sect.id)
              .map((section) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <h2 className="text-sm font-black text-[#2443ab] tracking-[0.2em] uppercase">
                      {section.title}
                    </h2>
                    <div className="h-[1px] flex-1 bg-slate-200/60" />
                  </div>

                  {/* Accordion Cards */}
                  <div className="space-y-4">
                    {section.faqs.map((faq, index) => {
                      const isOpen = openFaq[section.id] === index;
                      return (
                        <div
                          key={index}
                          className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                            isOpen
                              ? "border-[#2443ab]/30 shadow-[0_20px_45px_-5px_rgba(36,67,171,0.06)]"
                              : "border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-slate-350 hover:shadow-md"
                          }`}
                        >
                          <button
                            onClick={() => toggleFaq(section.id, index)}
                            className="w-full px-6 py-6 sm:px-8 sm:py-7 flex items-center justify-between text-left focus:outline-none group"
                          >
                            <span className="text-base sm:text-lg font-black text-[#0d1b3e] tracking-tight transition-colors duration-200 pr-6 group-hover:text-[#2443ab]">
                              {faq.q}
                            </span>
                            <div
                              className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                isOpen
                                  ? "bg-[#2443ab] text-white rotate-180"
                                  : "bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600"
                              }`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-3.5 h-3.5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </div>
                          </button>

                          <motion.div
                            initial={false}
                            animate={{
                              height: isOpen ? "auto" : 0,
                              opacity: isOpen ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 sm:px-8 sm:pb-7 text-sm sm:text-base text-slate-650 font-semibold leading-relaxed border-t border-slate-100 bg-[#fafbfc]/50 pt-4">
                              {faq.a}
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </section>

        {/* Final CTA Banner */}
        <section className="relative z-10 w-full py-24 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100/45 text-slate-800 border-t border-slate-200/60 overflow-hidden text-center px-6 sm:px-8 mt-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-6xl mx-auto space-y-6 flex flex-col justify-center items-center">
            <span className="block text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#2443ab] uppercase select-none">
              A Question Not Covered Here?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] max-w-5xl mx-auto text-[#0d1b3e]">
              The fastest way to get a direct answer is a conversation with Digital Edge 360° — about a store, an app, an agency’s white-label needs, or anything else specific to the situation at hand.
            </h2>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap"
              >
                <span>Get in Touch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
