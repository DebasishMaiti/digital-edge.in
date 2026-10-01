"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function FoundersInsightsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/founders-insights?status=Published");
        const data = await res.json();
        if (data.success && Array.isArray(data.insights)) {
          const dbItems = data.insights.map((item: any) => ({
            id: item.slug || item._id,
            title: item.title,
            category: "Founder's Insights",
            tag: item.topic || "Founder Insight",
            date: item.publishDate || "Digital Edge",
            author: item.founderName || "Digital Edge Founder",
            role: item.founderRole || "Co-Founder",
            quote: item.quote || item.desc || "",
            featuredImage: item.featuredImage || "https://ik.imagekit.io/digitaledge360/digitaledge-in/shomak.png",
          }));
          setItems(dbItems);
        }
      } catch (err) {
        console.error("Error fetching founder insights:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

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
      <link rel="canonical" href="https://digitaledge360.in/insights/founders-insights/" />
      <div className="w-full bg-[#f8fafc] bg-gradient-to-tr from-[#0a8bc7]/16 via-white to-[#40159e]/16 min-h-screen pb-24 text-slate-800 relative overflow-hidden font-sans">
        
        {/* Grid Background decoration */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={gridBackgroundStyle}
        />
        
        {/* Glow Spheres */}
        <div className="absolute top-[5%] left-[-15%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.18)_0%,transparent_70%)] pointer-events-none blur-[120px]" />
        <div className="absolute top-[35%] right-[-15%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(64,21,158,0.12)_0%,transparent_70%)] pointer-events-none blur-[120px]" />

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[180px] pb-16 text-center">
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
        <section className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
          {loading ? (
            <div className="text-center py-12 text-slate-500 font-semibold text-sm">
              Loading founder insights...
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 text-slate-500 font-semibold text-sm">
              No founder insights published yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl border border-[#2443ab]/20 shadow-[0_10px_30px_rgba(36,67,171,0.06)] overflow-hidden flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(36,67,171,0.12)] transition-all duration-300"
                >
                  <div>
                    {/* Top Image Banner */}
                    <div className="relative h-48 sm:h-52 w-full border-b border-slate-100 overflow-hidden bg-[#f1f5f9] flex items-center justify-center">
                      <img 
                        src={item.featuredImage} 
                        alt={item.author} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-5 space-y-3">
                      {/* Tag & Date */}
                      <div className="flex items-center gap-2.5 text-[11px] font-semibold text-slate-400">
                        <span className="px-2.5 py-1 rounded-full bg-[#2443ab]/10 text-[#2443ab] font-bold uppercase tracking-wider text-[9px]">
                          {item.tag}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500">
                          <Calendar className="w-3 h-3 text-[#2443ab]" />
                          {item.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-black text-[#0d1b3e] leading-snug group-hover:text-[#2443ab] transition-colors duration-200 truncate" title={item.title}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom Section containing author metadata and Read button */}
                  <div className="px-5 pb-5 pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2">
                      <div className="space-y-0.5 min-w-0">
                        <div className="text-xs font-black text-[#0d1b3e] truncate">{item.author}</div>
                        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider truncate">{item.role}</div>
                      </div>
                      <Link
                        href={`/insights/founders-insights/${item.id}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] text-white text-[10px] font-black rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:opacity-95 uppercase tracking-wider whitespace-nowrap shrink-0"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
