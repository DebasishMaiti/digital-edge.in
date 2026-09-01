"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandLogosList } from "@/data";
import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import AnimatedWords from "@/components/AnimatedWords";
import Marquee from "react-fast-marquee";
import ArchitectureTimeline from "@/components/ArchitectureTimeline";

export default function MarketplaceOptimization() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(226, 232, 240, 0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
  };

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.in/marketplace-optimization/" />

      <div className="w-full bg-[#fafbfc] min-h-screen pb-24 text-slate-800">
        {/* Hero Section with custom Sage/Teal light mode gradient (1 shade deeper) */}
        <section className="relative w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[160px] pb-24 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center bg-gradient-to-b from-[#cffafe] via-[#a5f3fc] to-[#fafbfc] border-b border-slate-200 overflow-hidden">
          {/* Light Grid Scrolling Background */}
          <div
            className="animate-grid-scroll opacity-70 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.16) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.16) 1px, transparent 1px)
              `
            }}
          />

          {/* Glow backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#06b6d4]/12 via-[#0891b2]/8 to-transparent blur-[80px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[45%] aspect-square rounded-full bg-gradient-to-br from-[#22d3ee]/10 via-transparent to-transparent blur-[90px]" />
          </div>

          {/* SVG Custom Graphics - Nested Box Outlines, Growth curves, Tags & Cascading grids */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-50">
            <svg className="w-full h-full min-w-[1000px] min-h-[500px]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              {/* Nested Box contours (Product Card representations) */}
              <g transform="translate(120, 120) rotate(10)">
                <rect x="0" y="0" width="100" height="100" fill="none" stroke="rgba(6, 182, 212, 0.25)" strokeWidth="2" />
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="rgba(8, 145, 178, 0.15)" strokeWidth="1" strokeDasharray="3 3" />
              </g>

              {/* Shopping tag (Left) */}
              <g transform="translate(180, 260) rotate(-15)" stroke="rgba(6, 182, 212, 0.25)" strokeWidth="2" fill="none">
                <path d="M0,20 L40,0 L80,0 L80,50 L0,50 Z" />
                <circle cx="60" cy="25" r="4" fill="rgb(6, 182, 212)" />
              </g>

              {/* Upward Growth line graph (representing Marketplace scaling) */}
              <path d="M300,380 L450,280 L600,310 L800,180 L1000,200" fill="none" stroke="rgba(8, 145, 178, 0.2)" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="800" cy="180" r="4" fill="rgb(8, 145, 178)" />

              <g transform="translate(980, 160) rotate(-10)">
                <rect x="0" y="0" width="120" height="120" rx="6" fill="none" stroke="rgba(8, 145, 178, 0.22)" strokeWidth="2" />
                <line x1="10" y1="20" x2="110" y2="20" stroke="rgba(8, 145, 178, 0.15)" strokeWidth="1" />
                <line x1="10" y1="40" x2="110" y2="40" stroke="rgba(8, 145, 178, 0.15)" strokeWidth="1" />
                <line x1="10" y1="60" x2="80" y2="60" stroke="rgba(6, 182, 212, 0.15)" strokeWidth="1" strokeDasharray="2 2" />
              </g>

              {/* Precise dot arrays */}
              <g transform="translate(520, 80)">
                {Array.from({ length: 4 }).map((_, r) =>
                  Array.from({ length: 12 }).map((_, c) => (
                    <circle
                      key={`market-dot-${r}-${c}`}
                      cx={c * 20}
                      cy={r * 20}
                      r={1.5}
                      fill="rgb(6, 182, 212)"
                      opacity={0.25}
                    />
                  ))
                )}
              </g>
            </svg>
          </div>

          <div className="relative z-10 max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Pill Badge */}
              <h1 className="inline-flex items-center gap-1.5 rounded-full border border-gray-600 bg-white px-6 py-3.5 text-sm sm:text-base md:text-sm font-extrabold tracking-[0.2em] text-gray-600 uppercase shadow-sm mb-6">
                Marketplace Optimization for Ecommerce Brands
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
                Turn Your Marketplace Listings Into Your Best-Converting Sales Channel
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl">
                We specialize in Amazon growth — from listing architecture and PPC efficiency to catalog health and ranking strategy — while applying the same performance system across other major marketplaces your brand sells on.
              </p>
              {/* Full Width Line Divider */}
              <div className="w-full border-t border-slate-200/60 my-3"></div>
              {/* Rating markers */}
              <div className="flex flex-col items-start gap-4 mb-8 text-left">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] text-white text-xs font-extrabold rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(36,67,171,0.25)] hover:shadow-[0_10px_24px_rgba(64,21,158,0.4)] hover:opacity-95 flex items-center justify-center gap-2 flex-shrink-0 uppercase tracking-wider mt-4"
                >
                  <span>Book a Free Marketplace Audit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* Brand Logos Circular Slider */}
              <div className="w-full max-w-xl overflow-hidden relative mt-4">
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#fafbfc] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f5f5fa] to-transparent z-10 pointer-events-none" />

                <Marquee speed={30} gradient={false} play={true}>
                  {brandLogosList.concat(brandLogosList).map((logo, index) => (
                    <div key={index} className="w-16 h-16 rounded-full border border-slate-200/80 bg-white flex items-center justify-center p-2.5 shadow-[0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:border-slate-300 hover:shadow-md transition-all duration-300 mx-2 flex-shrink-0">
                      <div className="w-10 h-10 relative">
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>

            {/* Right Column: CTA Card */}
            <div className="lg:col-span-6 flex justify-center relative w-full">
              <LeadForm showDecorations={false} initialServiceType="marketing" />
            </div>
          </div>
        </section>

        {/* Current Reality Section */}
        <section
          className="relative z-10 w-full py-28 sm:py-36 overflow-hidden text-center px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100/40"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto space-y-10">
            {/* Badge */}
            <span className="block text-[10px] sm:text-xs font-black tracking-[0.3em] text-[#2443ab] uppercase select-none">
              <AnimatedWords text="The Current Reality" />
            </span>
            {/* Quote text */}
            <p className="font-elms text-3xl sm:text-5xl md:text-[3.5rem] text-center leading-relaxed text-[#0d1b3e]/85">
              <AnimatedWords
                text="&quot;Most brands treat marketplace selling as “list it and hope.” Meanwhile, their competitors are running structured PPC campaigns, optimizing for search algorithms most sellers never study, and protecting their listings from suppression, hijacking, and buy box loss. On a marketplace, visibility isn’t given — it’s engineered. Without a deliberate optimization strategy, you’re paying the platform’s fees while leaving its biggest advantage, built-in buyer intent, completely on the table.&quot;"
                delay={0.25}
              />
            </p>
          </div>
        </section>

        <ArchitectureTimeline
          title="The Framework"
          subtitle="How We Engineer Marketplace Performance"
          tagline="A proven process. Relentless quality. Built for marketplaces, designed to scale."
          codeFile="src/app/marketplace-pipeline.ts"
          codeLines={[
            "import { Marketplace, A9Optimizer, Ads } from 'digital-edge';",
            "// High-Converting Marketplace Optimization",
            "export default async function BuyBoxDominator() {",
            "  const priceSync = await initPricingEngine();",
            "  return (",
            "    <Marketplace channel='Amazon+Flipkart' buyBox={true}>",
            "      <A9Optimizer keywords='high-intent' schema={priceSync} />",
            "      <Ads sponsorType='Brands' targetACOS='15%' />",
            "    </Marketplace>",
            "  );",
            "}"
          ]}
          floatingBadge1Text="ACOS Target"
          floatingBadge1Sub="Sponsored Ads Optimization"
          floatingBadge1Value="12%"
          floatingBadge2Text="BuyBox Health"
          floatingBadge2Sub="Automated Pricing Engine"
          floatingBadge2Icon="Target"
          phases={[
            {
              num: "01",
              phase: "PHASE 01",
              text: "Amazon-First Expertise: Amazon is our core specialization. We understand its search algorithm, advertising auction dynamics, and account health rules deeply — and we apply that same rigor to every other marketplace your brand operates on.",
              borderCol: "border-l-[#2443ab]",
              dotCol: "border-blue-500 bg-white",
              shadowCol: "shadow-blue-500/5",
              iconColor: "text-blue-600 bg-blue-50 border-blue-100",
              iconAlign: "left",
              iconName: "Search"
            },
            {
              num: "02",
              phase: "PHASE 02",
              text: "Listing Architecture That Ranks. We rebuild your titles, bullet points, backend keywords, and images around what the marketplace’s own search algorithm and your actual buyers are looking for — not guesswork.",
              borderCol: "border-l-[#a855f7]",
              dotCol: "border-purple-500 bg-white",
              shadowCol: "shadow-purple-500/5",
              iconColor: "text-purple-600 bg-purple-50 border-purple-100",
              iconAlign: "right",
              iconName: "Sparkles"
            },
            {
              num: "03",
              phase: "PHASE 03",
              text: "Advertising That Pays for Itself: We run and optimize on-platform ad campaigns with a profit-first approach, cutting wasted spend and scaling the keywords and placements that actually convert.",
              borderCol: "border-l-[#ec4899]",
              dotCol: "border-pink-500 bg-white",
              shadowCol: "shadow-pink-500/5",
              iconColor: "text-pink-600 bg-pink-50 border-pink-100",
              iconAlign: "left",
              iconName: "TrendingUp"
            },
            {
              num: "04",
              phase: "PHASE 04",
              text: "Catalog & Account Health: We monitor your listings for suppressions, policy violations, and compliance issues before they cost you sales, keeping your account in good standing.",
              borderCol: "border-l-[#f97316]",
              dotCol: "border-orange-500 bg-white",
              shadowCol: "shadow-orange-500/5",
              iconColor: "text-orange-600 bg-orange-50 border-orange-100",
              iconAlign: "right",
              iconName: "Database"
            },
            {
              num: "05",
              phase: "PHASE 05",
              text: "Review & Reputation Management: We build a structured approach to generating genuine reviews and managing your seller reputation, since trust signals directly influence both rankings and conversion rates.",
              borderCol: "border-l-[#10b981]",
              dotCol: "border-emerald-500 bg-white",
              shadowCol: "shadow-emerald-500/5",
              iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
              iconAlign: "left",
              iconName: "Globe"
            },
            {
              num: "06",
              phase: "PHASE 06",
              text: "Multi-Marketplace Expansion: Once your core marketplace is performing, we help you expand into additional marketplaces using the same proven playbook, adapted to each platform’s specific rules and buyer behavior.",
              borderCol: "border-l-[#6366f1]",
              dotCol: "border-indigo-500 bg-white",
              shadowCol: "shadow-indigo-500/5",
              iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
              iconAlign: "right",
              iconName: "Shield"
            }
          ]}
        />

        {/* See It In Action Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-white text-slate-800 overflow-hidden px-6 sm:px-8 lg:px-12 border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.015)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-4 max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200 bg-cyan-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-cyan-600 uppercase shadow-sm">
                <span>See It In Action</span>
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                How We Grow Marketplace Sales
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                From rescuing suppressed listings to rebuilding underperforming ad campaigns, here’s how we turn marketplace selling into a predictable, scalable revenue channel.
              </p>
            </div>

            {/* Interactive Tabs Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
              {/* Left side: Tabs Selector */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                {[
                  {
                    title: "Marketplace Audit & Strategy",
                    desc: "We review your current listings, keyword rankings, ad spend, and account health to find exactly where you’re losing visibility or margin."
                  },
                  {
                    title: "Listing & Catalog Optimization",
                    desc: "We rebuild your product listings for both search ranking and conversion — clear titles, compelling imagery, and backend keyword coverage that actually gets found."
                  },
                  {
                    title: "Advertising Management",
                    desc: "We manage and optimize your on-platform advertising with a focus on profitable growth, not just spend volume."
                  }
                ].map((tab, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group flex flex-col gap-2 ${
                        isActive
                          ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 shadow-md shadow-cyan-500/5"
                          : "bg-slate-50/50 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabPill"
                          className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-r"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-black tracking-wider ${isActive ? "text-cyan-600" : "text-slate-400 group-hover:text-slate-600"}`}>
                          0{idx + 1}
                        </span>
                        <h4 className={`font-black text-lg tracking-tight ${isActive ? "text-[#0d1b3e]" : "text-slate-600 group-hover:text-slate-800"}`}>
                          {tab.title}
                        </h4>
                      </div>
                      <p className={`text-sm leading-relaxed font-medium transition-colors duration-300 ${isActive ? "text-slate-600" : "text-slate-400 group-hover:text-slate-500"}`}>
                        {tab.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right side: Modern Visual Preview Card */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="bg-slate-50/60 rounded-[32px] border border-slate-200/60 p-6 sm:p-8 relative min-h-[380px] flex flex-col justify-between overflow-hidden shadow-inner">
                  {/* Visualizer content based on activeTab */}
                  <div className="relative z-10 flex-grow flex flex-col justify-center items-center">
                    {activeTab === 0 && (
                      <motion.div
                        key="tab0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full space-y-6"
                      >
                        <div className="flex justify-between items-center bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-500">BuyBox Health</p>
                              <p className="text-sm font-black text-slate-800">2 Listings Suppressed</p>
                            </div>
                          </div>
                          <span className="text-xs font-extrabold bg-red-50 text-red-600 border border-red-100 px-2.5 py-1 rounded-full uppercase tracking-wider">Critical</span>
                        </div>
                        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm space-y-4">
                          <p className="text-xs font-black text-slate-800 uppercase tracking-widest">Audit Findings Preview</p>
                          <div className="space-y-3">
                            {[
                              { label: "Competitor Price Match Ratio", val: "68%", color: "bg-amber-500" },
                              { label: "High-Intent Keyword Indexing", val: "42%", color: "bg-red-500" },
                              { label: "Ad Spend Efficiency (ACOS)", val: "48%", color: "bg-red-500" }
                            ].map((item, i) => (
                              <div key={i} className="space-y-1">
                                <div className="flex justify-between text-xs font-bold">
                                  <span className="text-slate-500">{item.label}</span>
                                  <span className="text-slate-800">{item.val}</span>
                                </div>
                                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div className={`h-full rounded-full ${item.color}`} style={{ width: item.val }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 1 && (
                      <motion.div
                        key="tab1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full space-y-4"
                      >
                        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm space-y-4">
                          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                            <div className="w-12 h-12 bg-cyan-50 border border-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center font-black">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="text-sm font-black text-[#0d1b3e]">Listing Architecture Pipeline</h5>
                              <p className="text-xs font-semibold text-slate-500">Automated Indexing & Creative Rebuild</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="border border-slate-100 p-3 rounded-lg bg-slate-50/50">
                              <span className="block text-slate-400 font-bold mb-1">BEFORE</span>
                              <p className="font-extrabold text-[#0d1b3e] line-through decoration-red-400 opacity-60">Premium Leather Wallet - Brown</p>
                              <span className="block text-[10px] text-red-500 font-bold mt-2">No backend search terms</span>
                            </div>
                            <div className="border border-cyan-100 p-3 rounded-lg bg-cyan-50/30">
                              <span className="block text-cyan-600 font-bold mb-1">AFTER (OPTIMIZED)</span>
                              <p className="font-extrabold text-[#0d1b3e]">Full Grain Leather Wallet for Men | RFID Blocking Slim Bi-Fold Wallet</p>
                              <span className="block text-[10px] text-emerald-600 font-bold mt-2">124 Indexed Keywords Added</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 2 && (
                      <motion.div
                        key="tab2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full space-y-4"
                      >
                        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-black text-slate-800 uppercase tracking-widest">PPC Campaign Performance</span>
                            <span className="text-[10px] font-extrabold bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-0.5 rounded-full uppercase tracking-wider">Live Live Optimization</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-3 bg-slate-50/60 rounded-lg border border-slate-100">
                              <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">ACOS</span>
                              <span className="text-lg font-black text-emerald-600">14.8%</span>
                            </div>
                            <div className="p-3 bg-slate-50/60 rounded-lg border border-slate-100">
                              <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">ROAS</span>
                              <span className="text-lg font-black text-[#0d1b3e]">6.7x</span>
                            </div>
                            <div className="p-3 bg-slate-50/60 rounded-lg border border-slate-100">
                              <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">Ad Sales</span>
                              <span className="text-lg font-black text-cyan-600">+142%</span>
                            </div>
                          </div>
                          <div className="h-24 bg-gradient-to-r from-cyan-50 to-blue-50/30 border border-slate-100 rounded-lg flex items-end justify-between p-2 pt-6">
                            <div className="w-1/12 h-[20%] bg-cyan-200 rounded-t" />
                            <div className="w-1/12 h-[35%] bg-cyan-300 rounded-t" />
                            <div className="w-1/12 h-[30%] bg-cyan-300 rounded-t" />
                            <div className="w-1/12 h-[55%] bg-cyan-400 rounded-t" />
                            <div className="w-1/12 h-[75%] bg-cyan-500 rounded-t" />
                            <div className="w-1/12 h-[70%] bg-cyan-500 rounded-t" />
                            <div className="w-1/12 h-[95%] bg-gradient-to-t from-cyan-600 to-blue-600 rounded-t" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bullet Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-8 border-t border-slate-100/80">
              {[
                {
                  text: "Amazon specialists applying deep platform expertise to every listing"
                },
                {
                  text: "Advertising structured around real profitability, not just visibility"
                },
                {
                  text: "Account health monitored proactively to prevent listing suppression"
                }
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3.5 bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                    {bullet.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Tangible Output Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12 border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.02)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-4 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
                <span>Why Ecommerce Brands Choose Us</span>
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                What You Actually Get
              </h2>
            </div>

            {/* Circular/Orbital Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto pt-8">

              {/* Left Spokes (01, 03, 05) */}
              <div className="lg:col-span-4 space-y-12 lg:text-right">
                {/* Feature 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-3 group text-left lg:text-right"
                >
                  <div className="flex lg:flex-row-reverse items-center gap-3 justify-start lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">01</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">Amazon Specialization</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Deep, focused expertise in the marketplace that drives the largest share of global ecommerce sales — not a generalist approach spread thin.
                  </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-3 group text-left lg:text-right"
                >
                  <div className="flex lg:flex-row-reverse items-center gap-3 justify-start lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h.007v.008H3.75V4.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3 10.5h.008v.008H3V10.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3 16.5h.008v.008H3v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">03</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Profitable Advertising</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Ad campaigns built and managed around real return on spend, not just impressions or clicks.
                  </p>
                </motion.div>

                {/* Feature 5 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-3 group text-left lg:text-right"
                >
                  <div className="flex lg:flex-row-reverse items-center gap-3 justify-start lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 017.2 3.6M12 3a9.003 9.003 0 00-7.2 3.6" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">05</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Stronger Buyer Trust</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    A structured approach to reviews and reputation that improves both conversion rates and rankings.
                  </p>
                </motion.div>
              </div>

              {/* Central Hub (Orbiting Center Circle with Color-Changing Glow) */}
              <div className="lg:col-span-4 flex items-center justify-center py-8 lg:py-0 relative">
                {/* Animated Color-Changing Glow Background Circle */}
                <motion.div
                  animate={{
                    scale: [1.5, 2.5, 1.5],
                    opacity: [0.4, 0.8, 0.4],
                    backgroundColor: [
                      "rgba(239, 68, 68, 0.25)",
                      "rgba(34, 197, 94, 0.25)",
                      "rgba(59, 130, 246, 0.25)",
                      "rgba(239, 68, 68, 0.25)"
                    ],
                    filter: [
                      "drop-shadow(0 0 35px rgba(239, 68, 68, 0.85)) blur(24px)",
                      "drop-shadow(0 0 55px rgba(34, 197, 94, 0.85)) blur(32px)",
                      "drop-shadow(0 0 35px rgba(59, 130, 246, 0.85)) blur(24px)",
                      "drop-shadow(0 0 55px rgba(239, 68, 68, 0.85)) blur(32px)"
                    ]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-[242px] h-[242px] rounded-full pointer-events-none"
                />

                {/* Core Hub Circle */}
                <motion.div
                  animate={{
                    borderColor: [
                      "#ef4444",
                      "#22c55e",
                      "#3b82f6",
                      "#ef4444"
                    ]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="w-[240px] h-[240px] rounded-full bg-white flex flex-col items-center justify-center p-6 relative z-10 shadow-lg"
                >
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#0d1b3e]/60 uppercase mb-2">WHY WE OPTIMIZE</span>
                  <h3 className="text-2xl font-black text-[#0d1b3e] tracking-tight text-center leading-tight">
                    What You<br />Actually Get<span className="text-blue-600">.</span>
                  </h3>
                  <motion.div
                    animate={{
                      backgroundColor: [
                        "#ef4444",
                        "#22c55e",
                        "#3b82f6",
                        "#ef4444"
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-1 rounded mt-4"
                  />
                </motion.div>
              </div>

              {/* Right Spokes (02, 04, 06) */}
              <div className="lg:col-span-4 space-y-12 text-left">
                {/* Feature 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-3 group text-left"
                >
                  <div className="flex items-center gap-3 justify-start">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">02</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Higher Organic Rankings</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Listings optimized for the marketplace’s actual search algorithm, so you show up for the searches that matter most.
                  </p>
                </motion.div>

                {/* Feature 4 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-3 group text-left"
                >
                  <div className="flex items-center gap-3 justify-start">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">04</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">Protected Account Health</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Proactive monitoring that catches compliance risks and listing issues before they cost you sales.
                  </p>
                </motion.div>

                {/* Feature 6 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-3 group text-left"
                >
                  <div className="flex items-center gap-3 justify-start">
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">06</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-rose-500 transition-colors duration-300">Scalable Multi-Marketplace Growth</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    A proven system that extends cleanly to additional marketplaces as your brand grows beyond your first platform.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* The Blueprint Section (Interactive Journey) */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          {/* Decorative background gradients */}
          <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.03)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-4 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
                <span>How We Work</span>
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                Our Marketplace Growth Roadmap
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
                Our proven step-by-step engineering journey to optimize your catalog and scale your marketplace sales.
              </p>
            </div>

            {/* Timeline Journey Wrapper */}
            <div className="relative flex flex-col gap-0 max-w-4xl mx-auto mt-20 text-left">
              {/* Central Timeline Dashed Connecting Line */}
              <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />

              {[
                {
                  num: "01",
                  title: "Marketplace Audit",
                  desc: "Reviewing your current listings, rankings, advertising, and account health to identify exactly where growth is being left behind.",
                  circleBg: "bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_6px_20_rgba(59,130,246,0.35)]",
                  lineColor: "bg-blue-500",
                  textColor: "text-blue-500",
                  borderColor: "border-blue-100 hover:border-blue-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]",
                  grad: "from-white via-white to-blue-50/10"
                },
                {
                  num: "02",
                  title: "Listing Optimization",
                  desc: "Rebuilding your product content — titles, images, keywords, and descriptions — to perform for both search and conversion.",
                  circleBg: "bg-gradient-to-br from-purple-400 to-violet-600 shadow-[0_6px_20_rgba(139,92,246,0.35)]",
                  lineColor: "bg-purple-500",
                  textColor: "text-purple-600",
                  borderColor: "border-purple-100 hover:border-purple-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]",
                  grad: "from-white via-white to-purple-50/10"
                },
                {
                  num: "03",
                  title: "Advertising Setup & Testing",
                  desc: "Structuring and launching ad campaigns built around profitability, then testing to find your most efficient keywords and placements.",
                  circleBg: "bg-gradient-to-br from-pink-400 to-rose-600 shadow-[0_6px_20_rgba(244,63,94,0.35)]",
                  lineColor: "bg-rose-500",
                  textColor: "text-rose-500",
                  borderColor: "border-rose-100 hover:border-rose-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)]",
                  grad: "from-white via-white to-rose-50/10"
                },
                {
                  num: "04",
                  title: "Scale & Expand",
                  desc: "Scaling what’s working and, where it makes sense, extending the same playbook to additional marketplaces your brand sells on.",
                  circleBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_6px_20_rgba(249,115,22,0.35)]",
                  lineColor: "bg-orange-500",
                  textColor: "text-orange-500",
                  borderColor: "border-orange-100 hover:border-orange-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]",
                  grad: "from-white via-white to-orange-50/10"
                }
              ].map((step, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={`flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12 relative z-10 py-0.5 lg:-my-2.5 ${isLeft ? "" : "lg:flex-row-reverse"
                      }`}
                  >
                    {/* Timeline Node Point */}
                    <div className={`absolute left-6 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 ${step.lineColor.replace('bg-', 'border-')} flex items-center justify-center z-20 shadow-sm transition-transform duration-300 hover:scale-125`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${step.lineColor}`} />
                    </div>

                    {/* Journey Content Box */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full lg:w-[45%] pl-14 lg:pl-0 ${isLeft ? "lg:text-right" : "lg:text-left"}`}
                    >
                      <div className={`p-4 sm:p-5 rounded-[24px] border bg-gradient-to-br ${step.grad} ${step.borderColor} ${step.hoverGlow} shadow-sm transition-all duration-500 ease-out group cursor-default`}>
                        <div className={`flex items-center gap-3 mb-2.5 ${isLeft ? "lg:justify-end" : "lg:justify-start"}`}>
                          {isLeft && (
                            <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight">
                              {step.title}
                            </h3>
                          )}
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 ${step.circleBg} group-hover:scale-110 transition-transform duration-300`}>
                            {step.num}
                          </div>
                          {!isLeft && (
                            <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight">
                              {step.title}
                            </h3>
                          )}
                        </div>

                        {/* Colored line below title */}
                        <div className={`w-12 h-1 rounded mt-2 mb-4 ${step.lineColor} ${isLeft ? "lg:ml-auto" : "lg:mr-auto"}`} />

                        <p className="text-sm sm:text-[15px] text-slate-500 font-semibold leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>

                    {/* Empty Spacer Column for Desktop balance */}
                    <div className="hidden lg:block lg:w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The FAQ Accordion Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] border-t border-slate-100/80 text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          <div className="relative z-10 max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-4">
              <span className="block text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase select-none">
                Common Questions
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                Straight Answers, No Fluff
              </h2>
            </div>

            {/* Accordion Container */}
            <div className="max-w-5xl mx-auto bg-white rounded-[32px] border border-slate-100/80 shadow-[0_10px_45px_rgba(0,0,0,0.02)] p-6 sm:p-10 text-left">
              {[
                {
                  q: "Do you only work with Amazon sellers?",
                  a: "Amazon is our specialization and where we have the deepest expertise, but we work across other major marketplaces too, applying the same core system — listing optimization, advertising management, and account health monitoring — adapted to each platform’s specific rules."
                },
                {
                  q: "We’re not on Amazon yet — can you help us launch?",
                  a: "Yes. We handle account setup, catalog creation, and listing optimization for brands launching on Amazon for the first time, building your presence correctly from day one instead of fixing avoidable mistakes later."
                },
                {
                  q: "How long until I see results?",
                  a: "Listing optimization and account health fixes can show impact within the first 2–3 weeks. Meaningful ranking and sales growth from advertising optimization typically builds over 30–60 days as we identify and scale what’s working."
                },
                {
                  q: "Can you help if my listings have been suppressed or flagged?",
                  a: "Yes. We regularly help brands diagnose and resolve listing suppressions and account health issues, then put monitoring in place to catch problems before they escalate again."
                },
                {
                  q: "Do you manage advertising, or just listings?",
                  a: "Both. We handle listing optimization and on-platform advertising together, since the two directly affect each other — a well-optimized listing makes every advertising rupee work harder."
                },
                {
                  q: "What if we’re already selling well — do we still need this?",
                  a: "Often, yes. Many established sellers are leaving significant revenue on the table through inefficient ad spend, incomplete listing optimization, or unmanaged account health risks. We’ll tell you honestly in the audit if there’s meaningful upside before recommending anything."
                },
                {
                  q: "How is this different from a generic marketplace agency?",
                  a: "We go deep on Amazon specifically rather than spreading thin across every marketplace equally, which means sharper strategy and faster results on the platform that matters most for ecommerce brands — while still supporting your presence on other marketplaces as needed."
                },
                {
                  q: "What’s included in the free marketplace audit?",
                  a: "A live review of your current listings, rankings, ad performance, and account health, plus 2–3 specific opportunities we spot immediately — no generic slide deck, no pressure to sign anything."
                }
              ].map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    key={index}
                    className="border-b border-slate-100 last:border-0 py-6 first:pt-2 last:pb-2"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex justify-between items-center text-left gap-4 group"
                    >
                      <span className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight transition-all duration-200 group-hover:text-[#2443ab] group-hover:translate-x-1.5">
                        {faq.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-[#2443ab]/10 group-hover:text-[#2443ab] transition-all duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-[#2443ab]/10 text-[#2443ab]' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </button>

                    {/* Expandable Content Container */}
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-500 text-base sm:text-lg font-semibold leading-relaxed mt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* The Final Step CTA Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100/45 text-slate-800 border-t border-slate-200/60 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.04)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto space-y-8 flex flex-col justify-center items-center">
            {/* Badge */}
            <span className="block text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#2443ab] uppercase select-none">
              The Final Step
            </span>
            {/* Header */}
            <h2 className="text-5xl sm:text-7xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] max-w-5xl">
              Ready to Turn Your Marketplace Presence Into Real Revenue?
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-semibold max-w-3xl leading-relaxed">
              Book your free, no-obligation 30-minute marketplace audit. No generic slide decks — just a clear look at what’s holding your listings back and how to fix it.
            </p>

            {/* Button Link */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap"
              >
                <span>Schedule Free Strategy Call</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Reassurance Line */}
            <p className="text-xs text-slate-400 font-semibold tracking-wide mt-2">
              No commitment. No generic pitch. Just real opportunities for your brand.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
