"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowRight, 
  Sparkles, 
  Eye, 
  Percent, 
  ShoppingBag,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { caseStudiesData } from "@/data";

interface ClientProps {
  slug: string;
}

export default function CaseStudyDetailClient({ slug }: ClientProps) {
  const study = caseStudiesData.find((item) => item.slug === slug);
  
  if (!study) {
    notFound();
  }

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

  const getMetricIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case 1:
        return <Eye className="w-5 h-5" />;
      case 2:
        return <Percent className="w-5 h-5" />;
      case 3:
        return <ShoppingBag className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <>
      <link rel="canonical" href={study.canonicalUrl} />
      <div className="w-full bg-[#f8fafc] bg-gradient-to-tr from-[#0a8bc7]/10 via-white to-[#40159e]/10 text-[#2d3748] min-h-screen pb-24 relative overflow-hidden font-sans">
        
        {/* Soft Glow Accents */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={gridBackgroundStyle} />
        <div className="absolute top-[100px] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.15)_0%,transparent_70%)] pointer-events-none blur-[60px]" />
        <div className="absolute top-[400px] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(64,21,158,0.1)_0%,transparent_70%)] pointer-events-none blur-[60px]" />

        {/* Back navigation */}
        <div className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-32 lg:pt-[120px] pb-4">
          <Link
            href="/insights/case-studies"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-[#2443ab] transition-colors font-semibold text-sm group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Case Studies
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 pt-8 pb-16">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8 text-center max-w-4xl mx-auto"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-[11px] font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#2443ab]" />
              {study.brand} Case Study
            </motion.span>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] max-w-5xl mx-auto"
            >
              {study.title.includes("Digital-First") ? (
                study.title.split("Digital-First").map((part, index) => {
                  if (index > 0) {
                    return (
                      <React.Fragment key={index}>
                        <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">Digital-First</span>
                        {part}
                      </React.Fragment>
                    );
                  }
                  return part;
                })
              ) : (
                study.title
              )}
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-slate-500 font-semibold text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
            >
              {study.description}
            </motion.p>
          </motion.div>
        </section>

        {/* Intro Block */}
        <section className="relative z-10 mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start border-y border-slate-200/80 py-16">
            <div className="md:col-span-5 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0d1b3e] tracking-tight">
                {study.problemTitle}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#0a8bc7] to-[#2443ab]" />
            </div>
            <div className="md:col-span-7 space-y-6 text-slate-500 text-sm sm:text-base font-semibold leading-relaxed">
              {study.problemDescription.map((p, idx) => {
                const isLast = idx === study.problemDescription.length - 1;
                if (isLast) {
                  return (
                    <p key={idx} className="border-l-2 border-[#2443ab]/40 pl-4 py-1 text-slate-650 italic font-semibold">
                      {p}
                    </p>
                  );
                }
                return <p key={idx}>{p}</p>;
              })}
            </div>
          </div>
        </section>

        {/* Key Metrics Dashboard */}
        <section className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 py-12">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.03)]">
            <div className="text-center max-w-xl mx-auto mb-12">
              <h3 className="text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase mb-2">The Six-Month Performance</h3>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0d1b3e] tracking-tight">{study.metricsTitle}</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {study.metrics.map((metric, index) => (
                <div key={index} className="pt-6 md:pt-0">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#2443ab]/10 flex items-center justify-center text-[#2443ab]">
                      {getMetricIcon(index)}
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1b3e]">{metric.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1 font-semibold">{metric.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center pt-8 border-t border-slate-100">
              <p className="text-slate-500 text-sm sm:text-base italic font-semibold">
                {study.metricsFooter}
              </p>
            </div>
          </div>
        </section>

        {/* Phases */}
        {study.phases.map((phase, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section key={idx} className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className={`lg:col-span-7 space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                  <span className="text-[#2443ab] text-xs font-black tracking-[0.2em] uppercase block">{phase.phase}</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                    {phase.title}
                  </h2>
                  <div className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed space-y-4">
                    {phase.text.map((t, tIdx) => (
                      <p key={tIdx}>{t}</p>
                    ))}
                    
                    {phase.bullets && (
                      <ul className="space-y-3.5 text-slate-500 font-semibold pt-2">
                        {phase.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-[#2443ab] flex-shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {phase.extraInfo && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {phase.extraInfo.map((info, iIdx) => (
                          <div key={iIdx} className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm">
                            <div className="text-[#0d1b3e] font-black text-lg mb-1">{info.title}</div>
                            <p className="text-xs text-slate-500 font-semibold">{info.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {phase.funnel && (
                      <div className="space-y-4 pt-2">
                        {phase.funnel.map((fn, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full border border-[#2443ab]/40 bg-[#2443ab]/5 flex items-center justify-center text-[#2443ab] text-xs font-extrabold flex-shrink-0 mt-1">
                              {fn.letter}
                            </div>
                            <div>
                              <h4 className="text-[#0d1b3e] font-black text-base">{fn.title}</h4>
                              <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">{fn.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <p className="text-slate-400 text-sm font-semibold italic pt-2">
                    {phase.footerText}
                  </p>
                </div>
                
                <div className={`lg:col-span-5 flex justify-center ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative group overflow-hidden rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] w-full max-w-[400px]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
                    <Image 
                      src={phase.image} 
                      alt={phase.imageLabel} 
                      width={400} 
                      height={300} 
                      className="w-full h-auto object-cover transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="text-[10px] tracking-widest text-white/80 uppercase font-black">{phase.imageLabel}</span>
                      <h4 className="text-white font-black text-lg mt-1">{phase.imageSublabel}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Conclusion */}
        <section className="relative z-10 mx-auto max-w-[1000px] px-6 sm:px-8 lg:px-12 py-16">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-16 text-center space-y-8 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.02)_0%,transparent_60%)] pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                {study.conclusionTitle}
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
                {study.conclusionText1}
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#2443ab]/50 to-transparent mx-auto my-6" />
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
                {study.conclusionText2}
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
