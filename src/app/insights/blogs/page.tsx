"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles, BookOpen } from "lucide-react";

const items = [
  {
    id: "how-to-know-whether-service-should-be-seo-aeo-geo",
    title: "How Do I Know Whether a Service Should Be SEO, AEO, or GEO?",
    category: "Blogs",
    tag: "Search Strategy",
    readTime: "6 min read",
    date: "Aug 17, 2026",
    image: "/logs/ecommerce_seo_aeo_geo.png",
    desc: "As search behaviors expand to featured snippets, voice, and AI search engines, we break down how to classify and optimize your search campaigns for SEO, AEO, and GEO.",
    details: [
      "Target environments & platform differences",
      "Nuances of keyword vs. question optimization",
      "Strategic alignment for modern AI-led search behaviors"
    ]
  },
  {
    id: "ecommerce-growth-roadmap-launch-to-market-leader",
    title: "The Ecommerce Growth Roadmap: How a Store Goes From Launch to Market Leader",
    category: "Blogs",
    tag: "Ecommerce",
    readTime: "7 min read",
    date: "Aug 02, 2026",
    image: "/logs/ecommerce_growth_roadmap.png",
    desc: "We detail the 6-stage lifecycle process required to scale an ecommerce brand from foundation audits to global multi-channel market dominance.",
    details: [
      "Discovery & auditing technical bottlenecks",
      "Autoscaling stacks, launch triggers & app rollouts",
      "Optimizing CRO pipelines and marketplace expansion"
    ]
  },
  {
    id: "boosting-brand-credibility-trust-through-seo",
    title: "Boosting Brand Credibility and Trust Through SEO: Why It’s Worth the Investment",
    category: "Blogs",
    tag: "SEO Strategy",
    readTime: "5 min read",
    date: "June 29, 2024",
    image: "/logs/ecommerce_growth_roadmap.jpg",
    desc: "In today’s digital age, establishing a brand people trust and perceive as credible is crucial for long-term success. We break down why search engine optimization (SEO) is a high-return investment for building brand authority.",
    details: [
      "Understanding search engine ranking trust signals",
      "How quality backlinks act as votes of confidence",
      "Why user experience (UX) directly impacts brand reputation"
    ]
  },
  {
    id: "mobile-app-effective-for-small-businesses",
    title: "Mobile App: How effective is it for Small Businesses?",
    category: "Blogs",
    tag: "App Development",
    readTime: "4 min read",
    date: "Nov 07, 2022",
    image: "/logs/mobileapp.jpg",
    desc: "From ordering food to getting the water tap fixed, mobile applications are everywhere. We explore how mobile apps can prove a game-changing strategy for small businesses.",
    details: [
      "Improving customer service accessibility",
      "Increasing brand awareness and lead capture",
      "Evaluating long-term cost effectiveness"
    ]
  },
  {
    id: "choosing-digital-marketing-agency-12-red-flags",
    title: "Choosing a Digital Marketing Agency: 12 Red Flags to Avoid",
    category: "Blogs",
    tag: "Marketing Agency",
    readTime: "6 min read",
    date: "July 07, 2025",
    image: "/logs/digital-marketing.jpg",
    desc: "Hiring the wrong digital marketing agency can burn budget, stall growth, and leave you chasing reports that never translate into ROI. We highlight 12 red flags to watch out for.",
    details: [
      "Spotting hidden fees and vanity metrics",
      "Demanding access to raw data and clear KPIs",
      "Vetting agency proposals the right way"
    ]
  }
];

export default function BlogsPage() {
  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(226, 232, 240, 0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
  };

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.in/insights/blogs/" />

      <div className="w-full bg-[#fafbfc] bg-gradient-to-tr from-[#0a8bc7]/16 via-white to-[#40159e]/16 min-h-screen pb-24 text-slate-800 relative overflow-hidden font-sans">

        {/* Grid Background decoration */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={gridBackgroundStyle}
        />

        {/* Glow Spheres in Brand Gradient Colors - Spread in wider area */}
        <div className="absolute top-[5%] left-[-15%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.18)_0%,transparent_70%)] pointer-events-none blur-[120px]" />
        <div className="absolute top-[35%] right-[-15%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(64,21,158,0.12)_0%,transparent_70%)] pointer-events-none blur-[120px]" />
        <div className="absolute bottom-[5%] left-[5%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.08)_0%,transparent_70%)] pointer-events-none blur-[100px]" />

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[180px] pb-16 text-center font-sans">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto space-y-6 flex flex-col items-center justify-center font-sans"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#2443ab] animate-pulse" />
              Latest news & resources
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] max-w-3xl mx-auto">
              Our <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">Blogs</span>
            </h1>

            <p className="text-slate-500 font-semibold text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Deep dives, industry updates, developer insights, and tips to grow your online footprint.
            </p>
          </motion.div>
        </section>

        {/* Items Grid */}
        <section className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-[#2443ab]/30 shadow-[0_30px_60px_rgba(36,67,171,0.12)] overflow-hidden flex flex-col justify-between group -translate-y-1.5 scale-[1.01] transition-all duration-300"
              >
                <div >
                  {/* Color-shifting top accent bar - active by default */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e]" />

                  {/* Blog Card Image Header */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#f1f5f9] border-b border-slate-100 flex items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold">
                      <span className="px-2.5 py-1 rounded-full bg-[#2443ab]/10 text-[#2443ab] font-bold uppercase tracking-wider text-[9px] transition-all duration-300">
                        {item.tag}
                      </span>
                      <span className="flex items-center gap-1 text-slate-650">
                        <Clock className="w-3 h-3 text-[#2443ab]" />
                        {item.readTime}
                      </span>
                    </div>

                    {/* Restored Title */}
                    <h3 className="text-base sm:text-md font-black text-[#0d1b3e] leading-snug group-hover:text-[#2443ab] transition-colors duration-200 line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Clamped Description */}
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-450">Published {item.date}</span>
                  <Link
                    href={`/insights/blogs/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2443ab] uppercase tracking-wider group/link hover:text-[#40159e] transition-colors duration-200"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
