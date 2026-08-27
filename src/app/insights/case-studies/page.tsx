"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles, 
  ChevronRight,
  TrendingUp
} from "lucide-react";
import { caseStudiesData } from "@/data";

export default function CaseStudiesListingPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(36, 67, 171, 0.04) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(36, 67, 171, 0.04) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
  };

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.in/insights/case-studies/" />

      <div className="w-full bg-[#f8fafc] bg-gradient-to-tr from-[#0a8bc7]/10 via-white to-[#40159e]/10 text-[#2d3748] min-h-screen pb-24 relative overflow-hidden font-sans">
        
        {/* Soft Blue/Purple Glow Accents */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={gridBackgroundStyle} />
        <div className="absolute top-[100px] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.15)_0%,transparent_70%)] pointer-events-none blur-[60px]" />
        <div className="absolute top-[400px] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(64,21,158,0.1)_0%,transparent_70%)] pointer-events-none blur-[60px]" />

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[180px] pb-16">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-6 text-center max-w-4xl mx-auto"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-[11px] font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2443ab]" />
              Case Studies & Success Stories
            </motion.span>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] max-w-5xl mx-auto"
            >
              Real Growth, <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">Documented</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-slate-500 font-semibold text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
            >
              Explore how we partner with brands to craft bespoke digital experiences, build custom search engine optimization, and execute highly targeted user acquisition strategies that scale revenue.
            </motion.p>
          </motion.div>
        </section>

        {/* Case Studies Grid */}
        <section className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {caseStudiesData.map((study, idx) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:border-slate-200/60 transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 border-b border-slate-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none" />
                  <Image 
                    src={study.heroImage} 
                    alt={study.brand} 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 z-20">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0d1b3e]/85 backdrop-blur-md px-4 py-1.5 text-[10px] font-black tracking-widest text-white uppercase shadow-sm">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase">
                      {study.brand}
                    </h3>
                    <h2 className="text-2xl font-black text-[#0d1b3e] tracking-tight leading-snug group-hover:text-[#2443ab] transition-colors duration-300">
                      {study.title}
                    </h2>
                    <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed line-clamp-3">
                      {study.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                    {study.metrics.slice(0, 2).map((metric, mIdx) => (
                      <div key={mIdx} className="bg-slate-50 border border-slate-100/80 rounded-2xl p-4 flex flex-col justify-center">
                        <span className="text-2xl sm:text-3xl font-black text-[#0d1b3e] flex items-center gap-1">
                          <TrendingUp className="w-4 h-4 text-[#0a8bc7] flex-shrink-0" />
                          {metric.value}
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <Link 
                      href={`/insights/case-studies/${study.slug}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0d1b3e] hover:bg-[#2443ab] text-white px-6 py-3.5 font-extrabold transition-all duration-300 text-xs uppercase tracking-wider shadow-md w-full sm:w-auto"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Block */}
        <section className="relative z-10 mx-auto max-w-[1000px] px-6 sm:px-8 lg:px-12 py-16">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-16 text-center space-y-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.02)_0%,transparent_60%)] pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                Want to build your own success story?
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
                Whether you want to dominate Search Results, scale your Paid Advertising ROAS, or build a premium custom eCommerce store — we engineer revenue growth.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] text-white px-8 py-4 font-extrabold hover:opacity-95 transition-all duration-300 text-xs uppercase tracking-wider shadow-lg shadow-[#2443ab]/10"
              >
                <span>Let's talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
