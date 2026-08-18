"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles, Quote } from "lucide-react";

const items = [
  {
    id: 1,
    title: "What Include in Complete Ecommerce Solution",
    category: "Founder's Insights",
    tag: "Ecommerce Strategy",
    date: "Aug 17, 2026",
    author: "Shomak Mitra",
    role: "Co-Founder & CTO",
    quote: "A complete ecommerce solution isn't just about launching a website; it is about building a scalable system where Strategy, Technology, Growth Marketing, and Omnichannel execution work together to drive transaction volume.",
    desc: "A comprehensive breakdown of the core service pillars, key deliverables, and growth metrics that transition a standard online storefront into a market-leading brand."
  },
  {
    id: 2,
    title: "Why We Turned Down a ₹40 Lakh Retainer",
    category: "Founder's Insights",
    tag: "Specialization",
    date: "Aug 17, 2026",
    author: "Shomak Mitra",
    role: "Co-Founder & CTO",
    quote: "Today, the rule is simple. If a brand isn’t in e-commerce or D2C, we don’t take them on — regardless of how attractive the retainer looks. Not because the money isn’t good, but because we’ve learned that depth beats width every time it actually matters.",
    desc: "A raw note on why Digital Edge 360 shifted away from the full-service generalist model to specialize exclusively in e-commerce and D2C scaling, and what depth actually buys a client."
  }
];

export default function FoundersInsightsPage() {
  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(36, 67, 171, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(36, 67, 171, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '56px 56px',
    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  };

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.com/insights/founders-insights" />
      <div className="w-full bg-[#f8fafc] bg-gradient-to-tr from-[#0a8bc7]/16 via-white to-[#40159e]/16 min-h-screen pb-24 text-slate-800 relative overflow-hidden font-sans">
        
        {/* Grid Background decoration */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={gridBackgroundStyle}
        />
        
        {/* Glow Spheres - Spread in wider area */}
        <div className="absolute top-[5%] left-[-15%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.18)_0%,transparent_70%)] pointer-events-none blur-[120px]" />
        <div className="absolute top-[35%] right-[-15%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(64,21,158,0.12)_0%,transparent_70%)] pointer-events-none blur-[120px]" />

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 pt-[180px] pb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto space-y-6 flex flex-col items-center justify-center"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#2443ab] animate-pulse" />
              Direct thoughts & principles
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] max-w-3xl mx-auto">
              Founder's <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">Insights</span>
            </h1>

            <p className="text-slate-500 font-semibold text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              No buzzwords. No sugarcoating. Raw strategies, engineering principles, and observations on scaling online stores.
            </p>
          </motion.div>
        </section>

        {/* Items Grid */}
        <section className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl border border-[#2443ab]/30 shadow-[0_30px_60px_rgba(36,67,171,0.12)] overflow-hidden flex flex-col justify-between group -translate-y-1.5 scale-[1.01] transition-all duration-300"
              >
                <div>
                  {/* Accent Top Gradient Line */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e]" />
                  
                  <div className="p-8 sm:p-10 space-y-6 relative">
                    <div className="absolute top-8 right-8 text-slate-100">
                      <Quote className="w-16 h-16 stroke-[1.5]" />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-400">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#2443ab]/10 text-[#2443ab] font-bold uppercase tracking-wider text-[10px]">
                        {item.tag}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-[#2443ab]" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] leading-snug group-hover:text-[#2443ab] transition-colors duration-200">
                      {item.title}
                    </h3>

                    <div className="relative pl-4 border-l-2 border-[#2443ab] py-1 text-slate-700 italic text-sm sm:text-base font-semibold leading-relaxed bg-[#2443ab]/5 pr-4 rounded-r-xl">
                      "{item.quote}"
                    </div>

                    <p className="text-slate-500 font-semibold text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Founder Info Footer */}
                <div className="px-8 sm:px-10 pb-8 sm:pb-10 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {item.author === "Shomak Mitra" ? (
                      <img 
                        src="/shomak.png" 
                        alt="Shomak Mitra" 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-slate-200 shadow-sm"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2443ab]/10 flex items-center justify-center font-black text-sm text-[#2443ab]">
                        {item.author.split(" ").map(n => n[0]).join("")}
                      </div>
                    )}
                    <div className="space-y-0.5">
                      <div className="text-sm sm:text-base font-black text-[#0d1b3e]">{item.author}</div>
                      <div className="text-[11px] sm:text-xs font-bold text-slate-550">{item.role}</div>
                    </div>
                  </div>
                  <Link
                    href={`/insights/founders-insights/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2443ab] hover:text-[#40159e] uppercase tracking-wider transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
