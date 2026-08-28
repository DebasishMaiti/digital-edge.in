"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandLogosList } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import AnimatedWords from "@/components/AnimatedWords";
import Marquee from "react-fast-marquee";
import ArchitectureTimeline from "@/components/ArchitectureTimeline";
import { CheckCircle2, Terminal, Search, FileText, Share2, Sparkles, TrendingUp } from "lucide-react";

export default function SeoSmm() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeShowcaseTab, setActiveShowcaseTab] = useState(0);

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
      <link rel="canonical" href="https://digitaledge360.in/seo-smm/" />

      <div className="w-full bg-[#fafbfc] min-h-screen pb-24 text-slate-800">
        {/* Hero Section with custom Gold/Sunshine light mode gradient */}
        <section className="relative w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[160px] pb-24 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center bg-gradient-to-b from-[rgba(46,89,242,0.15)] via-[rgba(46,89,242,0.06)] to-[#fafbfc] border-b border-slate-100/80 overflow-hidden">
          {/* Light Grid Scrolling Background */}
          <div 
            className="animate-grid-scroll opacity-60 pointer-events-none z-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(46, 89, 242, 0.12) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(46, 89, 242, 0.12) 1px, transparent 1px)
              `
            }}
          />

          {/* Glow backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] w-[35%] aspect-square rounded-full bg-gradient-to-br from-[#2e59f2]/8 via-[#60a5fa]/5 to-transparent blur-[80px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#2e59f2]/6 via-transparent to-transparent blur-[90px]" />
          </div>

          {/* SVG Custom Graphics - Single Organic Growth Chart in Background (No Letters) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-40">
            <svg className="w-full h-full min-w-[1000px] min-h-[500px]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="chart-area-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(46, 89, 242, 0.22)" />
                  <stop offset="100%" stopColor="rgba(46, 89, 242, 0.0)" />
                </linearGradient>
              </defs>

              {/* Coordinate Grid Lines */}
              <g stroke="rgba(46, 89, 242, 0.06)" strokeWidth="1">
                <line x1="0" y1="100" x2="1200" y2="100" />
                <line x1="0" y1="200" x2="1200" y2="200" />
                <line x1="0" y1="300" x2="1200" y2="300" />
                <line x1="0" y1="400" x2="1200" y2="400" />
                
                <line x1="200" y1="0" x2="200" y2="500" />
                <line x1="400" y1="0" x2="400" y2="500" />
                <line x1="600" y1="0" x2="600" y2="500" />
                <line x1="800" y1="0" x2="800" y2="500" />
                <line x1="1000" y1="0" x2="1000" y2="500" />
              </g>

              {/* Chart Path Area (Gradient Fill) */}
              <path 
                d="M 0,380 C 150,390 250,300 400,320 C 550,340 650,220 800,240 C 950,260 1050,110 1200,120 L 1200,500 L 0,500 Z" 
                fill="url(#chart-area-grad)" 
              />

              {/* Chart Line */}
              <path 
                d="M 0,380 C 150,390 250,300 400,320 C 550,340 650,220 800,240 C 950,260 1050,110 1200,120" 
                fill="none" 
                stroke="#2e59f2" 
                strokeWidth="3.5" 
                strokeLinecap="round"
                opacity="0.75"
              />

              {/* Data points with pulse/glow effects */}
              <circle cx="400" cy="320" r="5" fill="#2e59f2" />
              <circle cx="400" cy="320" r="10" fill="none" stroke="#2e59f2" strokeWidth="1.5" opacity="0.3" />

              <circle cx="800" cy="240" r="5" fill="#2e59f2" />
              <circle cx="800" cy="240" r="10" fill="none" stroke="#2e59f2" strokeWidth="1.5" opacity="0.3" />

              <circle cx="1200" cy="120" r="6" fill="#10b981" />
              <circle cx="1200" cy="120" r="12" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.4" />

              {/* Tiny dotted grids for technical layout styling */}
              <g transform="translate(80, 80)" opacity="0.2">
                {Array.from({ length: 5 }).map((_, r) =>
                  Array.from({ length: 8 }).map((_, c) => (
                    <circle
                      key={`chart-dot-${r}-${c}`}
                      cx={c * 20}
                      cy={r * 20}
                      r={1.5}
                      fill="rgb(46, 89, 242)"
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
              {"SEO & Social Media Marketing"}
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6.5xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
              {"SEO & Social Media Marketing Built to Bring You Customers, Not Just Traffic"}
            </h2>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl">
              {"We help businesses across India rank higher on Google and build a social presence that actually converts — through technical SEO, content that targets real buyer intent, and social strategy designed for engagement, not just impressions."}
            </p>
            {/* Full Width Line Divider */}
            <div className="w-full border-t border-slate-200/60 my-3"></div>
            {/* Rating markers */}
            <div className="flex flex-col items-start gap-4 mb-8 text-left">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] text-white text-xs font-extrabold rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(36,67,171,0.25)] hover:shadow-[0_10px_24px_rgba(64,21,158,0.4)] hover:opacity-95 flex items-center justify-center gap-2 flex-shrink-0 uppercase tracking-wider mt-4"
              >
                <span>{"Book a Free Strategy Call"}</span>
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
            <LeadForm showDecorations={false} />
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
          <p className="font-elms text-2xl sm:text-4xl md:text-[2.65rem] text-center leading-relaxed text-[#0d1b3e]/85">
            <AnimatedWords 
              text="&quot;Most businesses split their marketing budget entirely toward paid ads — and stay one algorithm change, or one paused campaign away from losing all their traffic overnight. Without organic search rankings and a real social following, you’re building your entire online presence on rented space. SEO and social media are the only channels where the audience you build today keeps working for you months and years later, without paying per click for every single visitor.&quot;" 
              delay={0.25}
            />
          </p>
        </div>
      </section>

      {/* The Architecture Section */}
      <ArchitectureTimeline
        title="The Framework"
        subtitle="How We Engineer Your Online Visibility"
        tagline="A proven process. Relentless quality. Built for organic visibility, designed to scale."
        codeFile="src/app/seo-optimization.ts"
        codeLines={[
          "import { SEO, Sitemap, Schema } from 'digital-edge';",
          "// Bespoke SEO & Analytics Pipeline",
          "export default async function CrawlerOptimizer() {",
          "  const rankings = await checkCoreWebVitals();",
          "  return (",
          "    <SEO target='Google' mobileFirst={true}>",
          "      <Sitemap dynamic={true} priority={1.0} />",
          "      <Schema type='Organization' data={rankings} />",
          "    </SEO>",
          "  );",
          "}"
        ]}
        floatingBadge1Text="SEO Audit"
        floatingBadge1Sub="Google Rankings Optimized"
        floatingBadge1Value="100"
        floatingBadge2Text="Crawler Index"
        floatingBadge2Sub="Sitemap & Schemas Active"
        floatingBadge2Icon="Search"
        phases={[
          {
            num: "01",
            phase: "Phase 01 — Technical SEO Foundation",
            text: "We fix the technical issues quietly holding your website back — crawl errors, slow load times, broken structure, and missing schema markup — so search engines can properly find, understand, and rank your pages.",
            borderCol: "border-l-[#2443ab]",
            dotCol: "border-blue-500 bg-white",
            shadowCol: "shadow-blue-500/5",
            iconColor: "text-blue-600 bg-blue-50 border-blue-100",
            iconAlign: "left",
            iconName: "Search"
          },
          {
            num: "02",
            phase: "Phase 02 — Keyword & Content Strategy",
            text: "We identify the exact searches your potential customers are typing in, then build content around those terms — written for real readers who are looking to buy or take action, not just to rank.",
            borderCol: "border-l-[#a855f7]",
            dotCol: "border-purple-500 bg-white",
            shadowCol: "shadow-purple-500/5",
            iconColor: "text-purple-600 bg-purple-50 border-purple-100",
            iconAlign: "right",
            iconName: "BookOpen"
          },
          {
            num: "03",
            phase: "Phase 03 — Authority & Link Building",
            text: "We earn genuine backlinks through outreach and digital PR, strictly white-hat, building the kind of domain authority that search engines reward with higher rankings.",
            borderCol: "border-l-[#ec4899]",
            dotCol: "border-pink-500 bg-white",
            shadowCol: "shadow-pink-500/5",
            iconColor: "text-pink-600 bg-pink-50 border-pink-100",
            iconAlign: "left",
            iconName: "Link"
          },
          {
            num: "04",
            phase: "Phase 04 — Social Content Strategy",
            text: "We build a content calendar and creative approach tailored to your industry and audience — designed to stop the scroll and build genuine engagement, not just post for the sake of posting.",
            borderCol: "border-l-[#f97316]",
            dotCol: "border-orange-500 bg-white",
            shadowCol: "shadow-orange-500/5",
            iconColor: "text-orange-600 bg-orange-50 border-orange-100",
            iconAlign: "right",
            iconName: "Zap"
          },
          {
            num: "05",
            phase: "Phase 05 — Community Management",
            text: "We manage comments, messages, and audience interaction across your social channels, turning casual followers into engaged fans and engaged fans into customers.",
            borderCol: "border-l-[#10b981]",
            dotCol: "border-emerald-500 bg-white",
            shadowCol: "shadow-emerald-500/5",
            iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
            iconAlign: "left",
            iconName: "MessageCircle"
          },
          {
            num: "06",
            phase: "Phase 06 — Reporting Tied to Real Results",
            text: "We track rankings, traffic, social engagement, and leads — so you always know exactly what your marketing spend is producing, in plain numbers, not vanity metrics.",
            borderCol: "border-l-[#6366f1]",
            dotCol: "border-indigo-500 bg-white",
            shadowCol: "shadow-indigo-500/5",
            iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
            iconAlign: "right",
            iconName: "TrendingUp"
          }
        ]}
      />

      {/* Capability Showcase Section */}
      <section className="relative z-10 w-full py-24 sm:py-32 bg-slate-50 text-slate-800 overflow-hidden px-6 sm:px-8 lg:px-12 border-t border-b border-slate-200/80">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.06)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
              <span>See It In Action</span>
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mt-2">
              How We Grow Search & Social Visibility
            </h2>
            <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
              From fixing technical SEO issues that were silently capping rankings to building social content that turns followers into paying customers, here&rsquo;s how we turn both channels into a dependable growth engine.
            </p>
          </div>

          {/* Split Interactive Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-6">
            
            {/* Tab Selectors & Bullets (Left side) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                {[
                  {
                    title: "SEO Audit & Strategy",
                    desc: "We start with a full technical and content audit — indexing issues, site structure, and competitor gap analysis — so every fix we make is backed by data, not guesswork."
                  },
                  {
                    title: "Content & Keyword Optimization",
                    desc: "We build website content and blog strategy around the exact searches your customers are already making, so you show up right when they&rsquo;re looking."
                  },
                  {
                    title: "Social Content & Engagement",
                    desc: "We plan and produce content mapped to your business goals — awareness, engagement, or direct leads — with a cadence and format built around what actually works for your industry and audience."
                  }
                ].map((tab, idx) => {
                  const isActive = activeShowcaseTab === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveShowcaseTab(idx)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "bg-white border-slate-200/80 shadow-md shadow-slate-100 translate-x-2"
                          : "bg-white/40 border-slate-200/40 hover:bg-white hover:border-slate-300 hover:shadow-sm"
                      }`}
                      style={{
                        borderLeftWidth: "4px",
                        borderLeftColor: isActive ? "#2563eb" : "transparent"
                      }}
                    >
                      <h4 className={`text-lg font-black tracking-tight mb-2 transition-colors duration-300 ${
                        isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
                      }`}>
                        {tab.title}
                      </h4>
                      <p className={`text-xs sm:text-sm font-semibold leading-relaxed transition-colors duration-300 ${
                        isActive ? "text-slate-600" : "text-slate-400"
                      }`}>
                        {tab.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Supporting Bullets */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 space-y-3.5 shadow-sm">
                <h5 className="text-xs font-black tracking-widest text-slate-400 uppercase">Core Quality Standards</h5>
                <div className="space-y-2.5">
                  {[
                    "Rank for the searches your ideal customers are actually typing",
                    "A social presence built around genuine engagement, not just follower count",
                    "Predictable organic traffic and reach that doesn&rsquo;t disappear when you stop paying for ads"
                  ].map((bullet, bidx) => (
                    <div key={bidx} className="flex items-start gap-2.5 text-slate-600 text-sm font-semibold">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dynamic Interactive Preview Panel (Right side) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="relative w-full aspect-[4/3] rounded-3xl bg-white border border-slate-200/85 overflow-hidden shadow-xl p-6 sm:p-8 flex flex-col justify-between">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] pointer-events-none" />
                
                {/* Decorative Glow corresponding to active tab */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeShowcaseTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: activeShowcaseTab === 0 
                        ? "radial-gradient(circle at 70% 30%, rgba(37, 99, 235, 0.06) 0%, transparent 60%)" 
                        : activeShowcaseTab === 1 
                        ? "radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.06) 0%, transparent 60%)" 
                        : "radial-gradient(circle at 70% 30%, rgba(244, 63, 94, 0.06) 0%, transparent 60%)"
                    }}
                  />
                </AnimatePresence>

                {/* Panel Header */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-mono text-slate-450 flex items-center gap-1 font-bold">
                    {activeShowcaseTab === 0 ? (
                      <>
                        <Search className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-blue-600">seo_audit_report.json</span>
                      </>
                    ) : activeShowcaseTab === 1 ? (
                      <>
                        <FileText className="w-3.5 h-3.5 text-purple-600" />
                        <span className="text-purple-600">content_optimizer.md</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 text-rose-500" />
                        <span className="text-rose-500">social_campaign.yml</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Panel Body Content (Varies per Tab) */}
                <div className="flex-grow flex items-center justify-center py-6 relative z-10">
                  <AnimatePresence mode="wait">
                    {activeShowcaseTab === 0 && (
                      <motion.div
                        key="tab0"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="w-full space-y-6"
                      >
                        {/* SEO Diagnostics Metric cards */}
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { label: "Crawl Health", value: "98.5%", status: "Optimal", color: "text-blue-600" },
                            { label: "Core Web Vitals", value: "Passed", status: "95ms TTFB", color: "text-emerald-600" },
                            { label: "Mobile Usability", value: "100%", status: "Excellent", color: "text-indigo-600" }
                          ].map((metric, midx) => (
                            <div key={midx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                              <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">{metric.label}</span>
                              <div className={`text-xl sm:text-2xl font-black my-1 ${metric.color}`}>{metric.value}</div>
                              <span className="text-[10px] text-slate-500 font-semibold">{metric.status}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Progress/Metric Bars */}
                        <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 font-mono text-xs text-slate-600 shadow-sm">
                          <div className="flex justify-between">
                            <span>Google Schema Integration</span>
                            <span className="text-blue-600 font-black">105 schemas validated</span>
                          </div>
                          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                            <div className="w-[100%] bg-blue-500 h-full rounded-full" />
                          </div>
                          <div className="flex justify-between pt-2">
                            <span>Technical Indexing Coverage</span>
                            <span className="text-emerald-600 font-black">99.8% mapped</span>
                          </div>
                          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                            <div className="w-[99%] bg-emerald-500 h-full rounded-full" />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeShowcaseTab === 1 && (
                      <motion.div
                        key="tab1"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="w-full space-y-4 font-mono text-xs text-slate-700 bg-slate-50 p-5 rounded-2xl border border-slate-100 leading-relaxed text-left shadow-sm"
                      >
                        <div className="border-b border-slate-200/60 pb-2 mb-2 flex items-center justify-between">
                          <span className="text-purple-650 font-bold">Keyword Intent Analysis</span>
                          <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-[10px] font-black rounded-full">High Buying Intent</span>
                        </div>
                        <div className="space-y-3.5">
                          {[
                            { term: "best financial consultant in mumbai", volume: "2,400/mo", intent: "Commercial", color: "border-purple-200 bg-purple-50/20" },
                            { term: "how to scale logistics operations india", volume: "1,850/mo", intent: "Informational", color: "border-indigo-100 bg-indigo-50/10" },
                            { term: "enterprise security systems customized", volume: "950/mo", intent: "Transactional", color: "border-emerald-200 bg-emerald-50/20" }
                          ].map((kw, kwidx) => (
                            <div key={kwidx} className={`p-3 rounded-xl border ${kw.color} flex items-center justify-between`}>
                              <div className="space-y-0.5">
                                <div className="text-slate-800 font-bold text-[13px]">{kw.term}</div>
                                <div className="text-[10px] text-slate-400 font-semibold">{kw.intent} Query</div>
                              </div>
                              <div className="space-y-0.5 text-right">
                                <div className="text-slate-700 font-black">{kw.volume}</div>
                                <div className="text-[10px] text-slate-400">Search Volume</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {activeShowcaseTab === 2 && (
                      <motion.div
                        key="tab2"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="w-full space-y-4 font-mono text-xs text-slate-700 bg-slate-50 p-5 rounded-2xl border border-slate-100 leading-relaxed text-left shadow-sm"
                      >
                        <div className="border-b border-slate-200/60 pb-2 mb-2 flex items-center justify-between">
                          <span className="text-rose-500 font-bold">Social Campaign Analytics</span>
                          <span className="px-2 py-0.5 bg-rose-50 text-rose-600 text-[10px] font-black rounded-full flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 animate-pulse" /> Live Scheduler
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                            <span className="text-[9px] font-bold text-slate-400 uppercase">Avg Engagement Rate</span>
                            <div className="text-xl font-black text-rose-500 mt-1">8.65%</div>
                            <span className="text-[9px] text-emerald-600 font-bold">↑ 2.4% vs industry avg</span>
                          </div>
                          <div className="bg-white p-3 rounded-xl border border-slate-200/60">
                            <span className="text-[9px] font-bold text-slate-400 uppercase">Organic Brand Impressions</span>
                            <div className="text-xl font-black text-purple-600 mt-1">142,500</div>
                            <span className="text-[9px] text-slate-400">Past 30 days active campaigns</span>
                          </div>
                        </div>

                        <div className="space-y-1.5 text-slate-500 pt-1 text-[11px]">
                          <div className="flex items-center gap-2 text-emerald-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>{"LinkedIn: Scheduled: \"Bespoke SaaS Architectures\" (Aug 29)"}</span>
                          </div>
                          <div className="flex items-center gap-2 text-emerald-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>{"Instagram: Carousel Campaign \"Google Ranking Secrets\" Active"}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Panel Footer */}
                <div className="border-t border-slate-200/80 pt-4 flex items-center justify-between text-xs text-slate-400 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-blue-600" />
                    <span>Data Pipeline: Secured & Active</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 font-bold">
                    <TrendingUp className="w-4 h-4" />
                    <span>Traffic Compounding</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Tangible Output Section */}
      <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.02)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
          {/* Header */}
          <div className="space-y-4 max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
              <span>Why Businesses Choose Us</span>
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight mt-2">
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h.007v.008H3.75V4.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3 10.5h.008v.008H3V10.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3 16.5h.008v.008H3v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-black text-blue-600 tracking-wider">01</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">Compounding Traffic</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Organic search traffic that grows month over month, without a matching increase in ad spend.
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                  </div>
                  <span className="text-sm font-black text-blue-600 tracking-wider">03</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Genuine Social Reach</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Content built to work with platform algorithms, reaching new audiences without paying for every impression.
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-black text-blue-600 tracking-wider">05</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Audience Loyalty</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  A social presence that turns casual followers into repeat customers and repeat customers into advocates for your brand.
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
                <span className="text-[10px] font-black tracking-[0.2em] text-[#0d1b3e]/60 uppercase mb-2">WHY WE RANK</span>
                <h3 className="text-2xl font-black text-[#0d1b3e] tracking-tight text-center leading-tight">
                  The Tangible<br />Output<span className="text-blue-600">.</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 017.2 3.6M12 3a9.003 9.003 0 00-7.2 3.6" />
                    </svg>
                  </div>
                  <span className="text-sm font-black text-blue-600 tracking-wider">02</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Category Authority</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Becoming the trusted, top-ranking source in your industry through strong technical SEO and consistent content.
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                    </svg>
                  </div>
                  <span className="text-sm font-black text-blue-600 tracking-wider">04</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">High-Intent Rankings</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  {"Visibility for the exact searches people make right before they're ready to buy or reach out — not just broad, low-value traffic."}
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5a1.5 1.5 0 001.5 1.5h1.5M12 3v18m0-18h-.75M12 21V10.5M3 12h18m-18 0H1.5M21 12H9.75" />
                    </svg>
                  </div>
                  <span className="text-sm font-black text-blue-600 tracking-wider">06</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-rose-500 transition-colors duration-300">Lower Dependency on Paid Ads</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  An owned, compounding traffic channel that reduces how much of your growth depends on rising ad costs.
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
              Our Growth Roadmap
            </h2>
            <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
              Our step-by-step roadmap to scale your brand&rsquo;s organic search visibility and social media authority.
            </p>
          </div>

          {/* Timeline Journey Wrapper */}
          <div className="relative flex flex-col gap-0 max-w-4xl mx-auto mt-20 text-left">
            {/* Central Timeline Dashed Connecting Line */}
            <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />

            {[
              {
                num: "01",
                title: "Technical Audit",
                desc: "Full diagnostic of your website’s structure, speed, and indexing — the barriers quietly capping your rankings.",
                circleBg: "bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_6px_20px_rgba(59,130,246,0.35)]",
                lineColor: "bg-blue-500",
                textColor: "text-blue-500",
                borderColor: "border-blue-100 hover:border-blue-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]",
                grad: "from-white via-white to-blue-50/10"
              },
              {
                num: "02",
                title: "Keyword & Intent Mapping",
                desc: "Identifying the exact searches your potential customers are typing in, across both informational and buying-intent queries.",
                circleBg: "bg-gradient-to-br from-purple-400 to-violet-600 shadow-[0_6px_20px_rgba(139,92,246,0.35)]",
                lineColor: "bg-purple-500",
                textColor: "text-purple-600",
                borderColor: "border-purple-100 hover:border-purple-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]",
                grad: "from-white via-white to-purple-50/10"
              },
              {
                num: "03",
                title: "Content & Social Engine",
                desc: "Publishing high-frequency, targeted content across your website and social channels on a consistent schedule.",
                circleBg: "bg-gradient-to-br from-pink-400 to-rose-600 shadow-[0_6px_20px_rgba(244,63,94,0.35)]",
                lineColor: "bg-rose-500",
                textColor: "text-rose-500",
                borderColor: "border-rose-100 hover:border-rose-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)]",
                grad: "from-white via-white to-rose-50/10"
              },
              {
                num: "04",
                title: "Authority Building",
                desc: "Running outreach to earn backlinks and placements from credible, relevant sources in your industry.",
                circleBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_6px_20px_rgba(249,115,22,0.35)]",
                lineColor: "bg-orange-500",
                textColor: "text-orange-500",
                borderColor: "border-orange-100 hover:border-orange-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]",
                grad: "from-white via-white to-orange-50/10"
              },
              {
                num: "05",
                title: "Data & Optimization Loop",
                desc: "Reviewing performance weekly across SEO and social, and doubling down on what’s actually driving traffic and leads.",
                circleBg: "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_6px_20px_rgba(16,185,129,0.35)]",
                lineColor: "bg-emerald-500",
                textColor: "text-emerald-500",
                borderColor: "border-emerald-100 hover:border-emerald-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]",
                grad: "from-white via-white to-emerald-50/10"
              }
            ].map((step, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12 relative z-10 py-0.5 lg:-my-2.5 ${
                    isLeft ? "" : "lg:flex-row-reverse"
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
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
              <span>Common Questions</span>
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight mt-2">
              Absolute Clarity.
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-semibold tracking-wide">
              You have highly specific questions. We have exact answers.
            </p>
          </div>

          {/* Accordion Container */}
          <div className="max-w-5xl mx-auto bg-white rounded-[32px] border border-slate-100/80 shadow-[0_10px_45px_rgba(0,0,0,0.02)] p-6 sm:p-10 text-left">
            {[
              {
                q: "How long until I see results from SEO?",
                a: "Technical fixes can improve site health within the first few weeks. Meaningful ranking and traffic growth typically starts showing between months 2–4, and compounds from there — SEO is a channel you build once, and it keeps paying you back, unlike ads that stop the moment you stop paying."
              },
              {
                q: "How long until I see results from social media marketing?",
                a: "Engagement improvements are usually visible within the first 3–4 weeks as content and format testing kicks in. Follower growth and social-driven leads typically build steadily over 60–90 days as we identify what resonates most with your specific audience."
              },
              {
                q: "Is SEO still relevant with AI search and AI Overviews?",
                a: "More than ever. AI-driven search still pulls its answers from well-structured, authoritative, technically sound websites — the same fundamentals we build. Businesses with strong SEO foundations are the ones getting cited and recommended inside AI search results, not the ones sitting it out."
              },
              {
                q: "Do you work with businesses outside ecommerce?",
                a: "Yes. We work across industries — service businesses, local businesses, SaaS companies, and D2C brands alike. Every SEO and social strategy is built around your specific business model, audience, and goals, not a one-size-fits-all template."
              },
              {
                q: "Which social media platforms do you manage?",
                a: "It depends on where your actual audience is. For most Indian businesses, that’s a mix of Instagram, Facebook, and LinkedIn, with YouTube and other platforms added depending on your industry and goals. We’ll recommend a focused set rather than spreading you thin everywhere at once."
              },
              {
                q: "Do you create the content, or manage the account?",
                a: "Both. We handle strategy, content creation, scheduling, and community management — you approve the direction, we handle the execution."
              },
              {
                q: "Will this replace my paid ads?",
                a: "Not immediately, and not entirely — but it will reduce how dependent you are on them. Most businesses run SEO, social, and paid ads together, using organic channels to lower overall customer acquisition cost over time."
              },
              {
                q: "How do you measure success — just rankings and followers?",
                a: "No. We track what actually matters to your business — organic traffic, keyword rankings, social engagement, leads generated, and where possible, revenue attributed to organic channels. Vanity metrics alone don’t tell you if marketing is working."
              },
              {
                q: "What makes this different from a generic digital marketing agency?",
                a: "Every SEO and social strategy we build is tailored to your specific industry and business model, backed by a technical foundation most generalist agencies skip — not a templated content calendar applied to every client the same way."
              },
              {
                q: "What’s included in the free strategy call?",
                a: "A live review of your current SEO health and social presence, 2–3 specific opportunities we spot immediately, and a rough roadmap for what working together would look like — no generic slide deck, no pressure to sign anything."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
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
          <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] max-w-5xl">
            Ready to Build a Presence That Keeps Working for You?
          </h2>
          <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed max-w-2xl">
            {"Book your free, no-obligation 30-minute SEO & social media audit. No generic slide decks — just a clear look at where you're losing visibility and how to fix it."}
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
        </div>
      </section>
    </div>
    </>
  );
}
