"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles, BookOpen } from "lucide-react";

const items = [
  {
    id: 1,
    title: "How Do I Know Whether a Service Should Be SEO, AEO, or GEO?",
    category: "Blogs",
    tag: "Search Strategy",
    readTime: "6 min read",
    date: "Aug 17, 2026",
    desc: "As search behaviors expand to featured snippets, voice, and AI search engines, we break down how to classify and optimize your search campaigns for SEO, AEO, and GEO.",
    details: [
      "Target environments & platform differences",
      "Nuances of keyword vs. question optimization",
      "Strategic alignment for modern AI-led search behaviors"
    ]
  },
  {
    id: 2,
    title: "The Ecommerce Growth Roadmap: How a Store Goes From Launch to Market Leader",
    category: "Blogs",
    tag: "Ecommerce",
    readTime: "7 min read",
    date: "Aug 02, 2026",
    desc: "We detail the 6-stage lifecycle process required to scale an ecommerce brand from foundation audits to global multi-channel market dominance.",
    details: [
      "Discovery & auditing technical bottlenecks",
      "Autoscaling stacks, launch triggers & app rollouts",
      "Optimizing CRO pipelines and marketplace expansion"
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
        <section className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 pt-[180px] pb-16 text-center font-sans">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-[#2443ab]/30 shadow-[0_30px_60px_rgba(36,67,171,0.12)] overflow-hidden flex flex-col justify-between group -translate-y-1.5 scale-[1.01] transition-all duration-300"
              >
                <div>
                  {/* Color-shifting top accent bar - active by default */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e]" />
                  
                  <div className="p-8 sm:p-10 space-y-5">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#2443ab]/10 text-[#2443ab] font-bold uppercase tracking-wider text-[10px] transition-all duration-300">
                        {item.tag}
                      </span>
                      <span className="flex items-center gap-1 text-slate-600 transition-colors">
                        <Clock className="w-3.5 h-3.5 text-[#2443ab] transition-colors" />
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] leading-snug group-hover:text-[#2443ab] transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-semibold">
                      {item.desc}
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold text-slate-400 mb-2.5 uppercase tracking-wider">Key Takeaways:</div>
                      <ul className="space-y-2">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-semibold">
                            <BookOpen className="w-3.5 h-3.5 text-[#2443ab] mt-0.5 shrink-0 scale-110" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-8 sm:px-10 pb-8 sm:pb-10 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">Published {item.date}</span>
                  <Link
                    href={`/insights/blogs/${item.id}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#2443ab] uppercase tracking-wider group/link hover:text-[#40159e] transition-colors duration-200"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
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
