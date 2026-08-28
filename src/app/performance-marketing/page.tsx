"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandLogosList } from "@/data";
import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import AnimatedWords from "@/components/AnimatedWords";
import Marquee from "react-fast-marquee";
import { Rocket, Search, Puzzle, Zap, Code, Shield, ChevronRight, ArrowRight } from "lucide-react";
import ArchitectureTimeline from "@/components/ArchitectureTimeline";
import { section } from "framer-motion/client";

const perfMarketingShowcases = [
  {
    name: "Jiva",
    link: "/company-details/jiva",
    image: "/brand-card-images/Jiva.png",
    logo: "/logos/jiva.jpg"
  },
  {
    name: "Chris Louis",
    link: "/company-details/chris-louis",
    image: "/brand-card-images/Chris-Louis.jpg",
    logo: "/logos/20.jpg"
  },
  {
    name: "Ducati",
    link: "/company-details/ducati",
    image: "/brand-card-images/Ducati-home.jpg",
    logo: "/logos/28.jpg"
  },
  {
    name: "JetChoice",
    link: "/company-details/jetchoice",
    image: "/brand-card-images/jet-choice.jpg",
    logo: "/logos/18.jpg"
  },
  {
    name: "EdefyHome",
    link: "/company-details/edefyhome",
    image: "/brand-card-images/Edify-home.png",
    logo: "/logos/16.jpg"
  },
  {
    name: "Dash Capital",
    link: "/company-details/dash-capital",
    image: "/brand-card-images/Dash-Capital.jpg",
    logo: "/logos/17.jpg"
  },
  {
    name: "IBT Behala",
    link: "/company-details/ibt-behala",
    image: "/brand-card-images/IBT-behala.jpg",
    logo: "/logos/13.jpg"
  },
  {
    name: "Royal Enfield",
    link: "/company-details/royal-enfield",
    image: "/brand-card-images/ROYAL-ENFIELD.jpg",
    logo: "/logos/royal enfiled.jpg"
  }
];

export default function PerformanceMarketing() {
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
      <link rel="canonical" href="https://digitaledge360.in/performance-marketing/" />

      <div className="w-full bg-[#fafbfc] min-h-screen pb-24 text-slate-800">
        {/* Hero Section with custom Blue light mode gradient */}
        <section className="relative w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[160px] pb-24 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd]/30 to-[#fafbfc] border-b border-slate-100/80 overflow-hidden">
          {/* Light Grid Scrolling Background */}
          <div
            className="animate-grid-scroll opacity-60 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(14, 165, 233, 0.12) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(14, 165, 233, 0.12) 1px, transparent 1px)
              `
            }}
          />

          {/* Glow backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] w-[35%] aspect-square rounded-full bg-gradient-to-br from-[#0ea5e9]/8 via-[#2563eb]/6 to-transparent blur-[80px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#60a5fa]/10 via-transparent to-transparent blur-[90px]" />
          </div>

          {/* SVG Custom Graphics - Performance Marketing Themed (Ad posts, Conversion Funnels, ROI targets - No Letters) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-45">
            <svg className="w-full h-full min-w-[1000px] min-h-[500px]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">

              {/* Ad Campaign Mockup Card Left */}
              <g transform="translate(60, 60) rotate(-5)" opacity="0.55">
                <rect width="220" height="150" rx="10" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                <rect width="220" height="24" rx="10" fill="#f8fafc" />
                <circle cx="15" cy="12" r="3" fill="#ef4444" />
                <circle cx="25" cy="12" r="3" fill="#eab308" />
                <circle cx="35" cy="12" r="3" fill="#22c55e" />

                {/* Ad creative visual placeholder */}
                <rect x="15" y="38" width="190" height="60" rx="6" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 50,75 C 90,45 130,95 170,55" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
                <circle cx="170" cy="55" r="4" fill="#3b82f6" />

                {/* Sponsored text line placeholder */}
                <rect x="15" y="112" width="90" height="6" rx="3" fill="#64748b" opacity="0.4" />
                <rect x="15" y="126" width="130" height="6" rx="3" fill="#64748b" opacity="0.25" />

                {/* CTR Action button */}
                <rect x="155" y="114" width="50" height="20" rx="10" fill="#3b82f6" opacity="0.9" />
              </g>

              {/* Conversion Funnel Mockup Right */}
              <g transform="translate(940, 110) rotate(4)" opacity="0.55">
                <rect width="210" height="170" rx="12" fill="white" stroke="#bae6fd" strokeWidth="1.5" />

                {/* Funnel Level 1 (Top - Awareness) */}
                <polygon points="25,35 185,35 155,70 55,70" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1" />
                <line x1="105" y1="35" x2="105" y2="70" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />

                {/* Funnel Level 2 (Middle - Consideration) */}
                <polygon points="57,75 153,75 133,110 77,110" fill="#3b82f6" opacity="0.4" stroke="#3b82f6" strokeWidth="1" />
                <line x1="105" y1="75" x2="105" y2="110" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />

                {/* Funnel Level 3 (Bottom - Conversion) */}
                <polygon points="79,115 131,115 116,145 94,145" fill="#2563eb" stroke="#2563eb" strokeWidth="1" />
                <line x1="105" y1="115" x2="105" y2="145" stroke="#2563eb" strokeWidth="1" opacity="0.3" />

                {/* Downward conversion arrow */}
                <path d="M 105,150 L 105,160 M 101,156 L 105,160 L 109,156" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
              </g>

              {/* Floating Megaphone (Ad reach) */}
              <g transform="translate(540, 40) rotate(12)" opacity="0.3">
                <path d="M15,30 L30,25 L45,15 L50,15 L50,45 L45,45 L30,35 Z" fill="none" stroke="#6366f1" strokeWidth="1.8" />
                <path d="M15,30 L10,32 L10,38 L15,36" fill="none" stroke="#6366f1" strokeWidth="1.8" />
                <path d="M30,35 L30,45 L25,45 L25,37" fill="none" stroke="#6366f1" strokeWidth="1.8" />
              </g>

              {/* Floating Bullseye Target */}
              <g transform="translate(180, 260) rotate(8)" opacity="0.45">
                <circle cx="25" cy="25" r="20" fill="none" stroke="#10b981" strokeWidth="1.5" />
                <circle cx="25" cy="25" r="14" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="25" cy="25" r="8" fill="none" stroke="#10b981" strokeWidth="2" />
                {/* Arrow */}
                <line x1="5" y1="45" x2="22" y2="28" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                <polygon points="22,28 17,29 21,33" fill="#ef4444" />
              </g>

              {/* Floating ROI Spurge line */}
              <g transform="translate(860, 310) rotate(-8)" opacity="0.45">
                <rect width="90" height="40" rx="8" fill="#10b981" opacity="0.1" stroke="#10b981" strokeWidth="1" />
                <path d="M10,30 L30,25 L50,32 L80,10" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                <circle cx="80" cy="10" r="3" fill="#10b981" />
              </g>

              {/* Scatter particle matrix */}
              <g transform="translate(70, 240)">
                {Array.from({ length: 4 }).map((_, r) =>
                  Array.from({ length: 5 }).map((_, c) => (
                    <circle
                      key={`perf-dot-l-${r}-${c}`}
                      cx={c * 18}
                      cy={r * 18}
                      r={1.5}
                      fill="rgb(14, 165, 233)"
                      opacity={0.2}
                    />
                  ))
                )}
              </g>

              <g transform="translate(1080, 40)">
                {Array.from({ length: 6 }).map((_, r) =>
                  Array.from({ length: 3 }).map((_, c) => (
                    <circle
                      key={`perf-dot-r-${r}-${c}`}
                      cx={c * 20}
                      cy={r * 20}
                      r={1.5}
                      fill="rgb(99, 102, 241)"
                      opacity={0.18}
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
                Performance Marketing
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
                Paid Ads Built Around Profit, Not Just Impressions
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl">
                We plan and run ROI-focused Google and Meta ad campaigns for businesses across India — startups, service providers, D2C brands, and enterprises alike. Backed by clean tracking and real attribution data, we scale campaigns that bring in customers at a cost that actually makes sense for your business.
              </p>
              {/* Full Width Line Divider */}
              <div className="w-full border-t border-slate-200/60 my-3"></div>
              {/* Rating markers */}
              <div className="flex flex-col items-start gap-4 mb-8 text-left">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] text-white text-xs font-extrabold rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(36,67,171,0.25)] hover:shadow-[0_10px_24px_rgba(64,21,158,0.4)] hover:opacity-95 flex items-center justify-center gap-2 flex-shrink-0 uppercase tracking-wider mt-4"
                >
                  <span>Book a Free Ad Account Audit</span>
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

        {/* Marketing Showcase Marquee Section */}
        <section className="relative z-10 py-16 bg-white border-b border-slate-100/80 overflow-hidden">
          <div className="w-full">
            <Marquee speed={95} gradient={true} gradientColor="white" gradientWidth={80} pauseOnHover={true} play={true}>
              {[
                { src: "/marketing-slider/Chris-Louis.png", alt: "Chris Louis" },
                { src: "/marketing-slider/Ducati.png", alt: "Ducati" },
                { src: "/marketing-slider/Edify-Home-Decore.png", alt: "Edify Home Decore" },
                { src: "/marketing-slider/Ellixt-8.png", alt: "Ellixt 8" },
                { src: "/marketing-slider/Hotel-JIva.png", alt: "Hotel Jiva" },
                { src: "/marketing-slider/Jet-Choice.png", alt: "Jet Choice" },
                { src: "/marketing-slider/TLS.png", alt: "TLS" },
                { src: "/marketing-slider/dashCapital.png", alt: "Dash Capital" },
              ].map((slide, index) => (
                <div key={index} className="mx-4 sm:mx-6 transition-all duration-300 hover:-translate-y-1">
                  <div className="relative w-[280px] h-[160px] sm:w-[480px] sm:h-[270px] md:w-[700px] md:h-[390px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/60 shadow-[0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] bg-white">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover p-2"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
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
                text="&quot;Most businesses judge their ad campaigns by clicks and impressions — numbers that look good in a report but say nothing about whether the business actually made money. Meanwhile, broad targeting, generic creative, and broken tracking are quietly wasting a large share of the budget every single month. The businesses that actually scale profitably are the ones tracking one number above all others: what a customer costs to acquire versus what that customer is worth. Everything else is just noise on a dashboard.&quot;"
                delay={0.25}
              />
            </p>
          </div>
        </section>

        {/* Brand Showcase Grid Section */}
        <section className="relative z-10 py-32 sm:py-40 bg-gradient-to-b from-[#fafbfc] to-white overflow-hidden border-t border-slate-100">
          <div className="w-full mx-auto px-8 sm:px-16 lg:px-24 relative z-10">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-250 bg-purple-50/80 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-purple-700 uppercase shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-purple-600">
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192L12 .587z" />
                </svg>
                <span>Brands Thrive with Digital Edge</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight mt-4">
                Bespoke Digital Success Stories
              </h2>
              {/* Short styled underline line */}
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full mt-2" />
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {perfMarketingShowcases.map((brand, idx) => (
                <Link href={brand.link || "/contact"} key={idx} className="block w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-100/80 flex flex-col justify-between group transition-all duration-300 cursor-pointer h-full"
                  >
                    {/* Top Image wrapper */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="relative p-6 flex flex-col items-center justify-center min-h-[130px]">
                      <div className="flex items-center justify-center h-16 w-full">
                        {brand.logo ? (
                          typeof brand.logo === "string" ? (
                            <img
                              src={brand.logo}
                              alt={brand.name}
                              className="max-h-full max-w-[170px] object-contain"
                            />
                          ) : (
                            brand.logo
                          )
                        ) : null}
                      </div>

                      {/* Company Name & Arrow */}
                      <div className="mt-2 flex items-center justify-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-[#2443ab] transition-colors duration-300">
                        <span>{brand.name}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1 text-slate-400 group-hover:text-[#2443ab]" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* The Architecture Section */}
        <ArchitectureTimeline
          title="The Framework"
          subtitle="How We Engineer Ad Performance"
          tagline="A proven process. Relentless quality. Built for scale, designed to maximize ROI."
          codeFile="src/app/performance.ts"
          codeLines={[
            "import { AdCampaign, Attribution, Creative } from 'digital-edge';",
            "// High-ROI Performance Marketing Pipeline",
            "export default async function BudgetEscalator() {",
            "  const tracking = await initServerAttribution();",
            "  return (",
            "    <AdCampaign platform='Meta+Google' roas='4.5x'>",
            "      <Creative testCount={50} videoOnly={true} />",
            "      <Attribution CAPI={true} iOS14Bypass={tracking} />",
            "    </AdCampaign>",
            "  );",
            "}"
          ]}
          floatingBadge1Text="ROAS Index"
          floatingBadge1Sub="Algorithmic Spend Scaling"
          floatingBadge1Value="4.5x"
          floatingBadge2Text="CAPI Tracking"
          floatingBadge2Sub="Server-Side Attribution"
          floatingBadge2Icon="Target"
          phases={[
            {
              num: "01",
              phase: "PHASE 01",
              text: "Profit-First Media Buying: We treat every rupee of ad spend as an investment that has to earn its return — not a budget to burn through for reach. Campaigns are structured around your actual business economics, not platform defaults.",
              borderCol: "border-l-[#2443ab]",
              dotCol: "border-blue-500 bg-white",
              shadowCol: "shadow-blue-500/5",
              iconColor: "text-blue-600 bg-blue-50 border-blue-100",
              iconAlign: "left",
              iconName: "TrendingUp"
            },
            {
              num: "02",
              phase: "PHASE 02",
              text: "Continuous Creative Testing: We test multiple ad variations every month — video, static, and copy — to consistently find the small number of “winning” ads that carry disproportionate performance.",
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
              text: "Full-Funnel Optimization: We don’t stop at the click. We look at the entire journey — ad, landing page, form, or checkout — because a great ad sending traffic to a weak page is money left on the table.",
              borderCol: "border-l-[#ec4899]",
              dotCol: "border-pink-500 bg-white",
              shadowCol: "shadow-pink-500/5",
              iconColor: "text-pink-600 bg-pink-50 border-pink-100",
              iconAlign: "left",
              iconName: "Target"
            },
            {
              num: "04",
              phase: "PHASE 04",
              text: "Accurate, Privacy-Proof Tracking: We set up server-side and enhanced conversion tracking so your data stays accurate even with growing privacy restrictions on ad platforms.",
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
              text: "Disciplined Scaling: Once we find what works, we scale spend carefully — across audiences, platforms, and campaign types — without breaking performance or wasting your budget chasing scale too fast.",
              borderCol: "border-l-[#10b981]",
              dotCol: "border-emerald-500 bg-white",
              shadowCol: "shadow-emerald-500/5",
              iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
              iconAlign: "left",
              iconName: "Cpu"
            },
            {
              num: "06",
              phase: "PHASE 06",
              text: "Transparent, Real Reporting: You get regular reporting showing exactly what your ad spend is doing — no vanity metrics, no jargon, just numbers tied to leads and revenue.",
              borderCol: "border-l-[#6366f1]",
              dotCol: "border-indigo-500 bg-white",
              shadowCol: "shadow-indigo-500/5",
              iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
              iconAlign: "right",
              iconName: "BarChart3"
            }
          ]}
        />

        {/* See It In Action Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-white text-slate-800 overflow-hidden px-6 sm:px-8 lg:px-12 border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.015)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-4 max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-sky-600 uppercase shadow-sm">
                <span>See It In Action</span>
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                How We Scale Ad Accounts Profitably
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                From fixing broken conversion tracking to finding the one ad creative that outperforms a dozen others, here’s how we turn ad spend into a predictable growth channel.
              </p>
            </div>

            {/* Interactive Tabs Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
              {/* Left side: Tabs Selector */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
                {[
                  {
                    title: "Ad Account Audit",
                    desc: "We review your account structure, past spend, creative history, and tracking setup to find exactly where performance is being left on the table."
                  },
                  {
                    title: "Creative Testing & Production",
                    desc: "We produce and test a steady stream of ad creative — because campaign fatigue is one of the fastest ways ad accounts lose performance over time."
                  },
                  {
                    title: "Attribution & Tracking Setup",
                    desc: "We implement clean, accurate tracking so you can trust the numbers you’re making decisions on, instead of guessing at what’s actually driving results."
                  }
                ].map((tab, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group flex flex-col gap-2 ${isActive
                          ? "bg-gradient-to-br from-sky-500/10 to-indigo-500/10 border-sky-500/30 shadow-md shadow-sky-500/5"
                          : "bg-slate-50/50 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabPillPm"
                          className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-sky-500 to-indigo-600 rounded-r"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-black tracking-wider ${isActive ? "text-sky-600" : "text-slate-400 group-hover:text-slate-600"}`}>
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
                        key="tabpm0"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full space-y-6"
                      >
                        <div className="flex justify-between items-center bg-white border border-slate-200 p-4 rounded-xl shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-500">Ad Account Leakage</p>
                              <p className="text-sm font-black text-slate-800">Overlap & Bidding Waste</p>
                            </div>
                          </div>
                          <span className="text-xs font-extrabold bg-amber-50 text-amber-600 border border-amber-100 px-2.5 py-1 rounded-full uppercase tracking-wider">Warning</span>
                        </div>
                        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm space-y-4">
                          <p className="text-xs font-black text-slate-800 uppercase tracking-widest">Audit Metric Findings</p>
                          <div className="space-y-3">
                            {[
                              { label: "Wasted Budget (Broad Overlap)", val: "38%", color: "bg-red-500" },
                              { label: "Unoptimized Creative Placements", val: "54%", color: "bg-amber-500" },
                              { label: "Cost-Per-Acquisition Optimization", val: "72%", color: "bg-emerald-500" }
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
                        key="tabpm1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full space-y-4"
                      >
                        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm space-y-4">
                          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                            <div>
                              <h5 className="text-sm font-black text-[#0d1b3e]">Creative Testing matrix</h5>
                              <p className="text-xs font-semibold text-slate-500">Testing variants to fight ad fatigue</p>
                            </div>
                            <span className="text-[10px] font-black text-slate-400">BATCH 04</span>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            {[
                              { label: "UGC Video A", ctr: "4.8%", status: "Winner", color: "border-emerald-500 bg-emerald-50/20" },
                              { label: "Carousel B", ctr: "1.2%", status: "Fatigued", color: "border-red-200 opacity-60 bg-red-50/10" },
                              { label: "Static Hook C", ctr: "3.5%", status: "Testing", color: "border-sky-300 bg-sky-50/10" }
                            ].map((creative, i) => (
                              <div key={i} className={`border p-3 rounded-lg text-center ${creative.color}`}>
                                <span className="block text-[10px] text-slate-400 font-bold uppercase mb-1">{creative.label}</span>
                                <span className="block text-base font-black text-[#0d1b3e]">{creative.ctr}</span>
                                <span className="block text-[9px] font-extrabold uppercase mt-1 tracking-wider">{creative.status}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 2 && (
                      <motion.div
                        key="tabpm2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full space-y-4"
                      >
                        <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Attribution Modeling comparison</span>
                            <span className="text-[10px] font-extrabold bg-sky-50 text-sky-600 border border-sky-100 px-2 py-0.5 rounded-full uppercase tracking-wider">CAPI Verified</span>
                          </div>
                          <div className="space-y-4 text-xs font-semibold">
                            <div className="flex items-center justify-between p-3 bg-red-50/20 border border-red-100 rounded-lg">
                              <div>
                                <span className="block text-red-600 font-bold">Standard Browser Pixel</span>
                                <span className="text-[10px] text-slate-400">Data Loss due to AdBlockers / iOS 14+</span>
                              </div>
                              <span className="text-lg font-black text-red-500">~65% Acc.</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-emerald-50/20 border border-emerald-100 rounded-lg">
                              <div>
                                <span className="block text-emerald-600 font-bold">Server-Side Conversion API</span>
                                <span className="text-[10px] text-slate-400">1:1 Server Handshake & First-Party Data</span>
                              </div>
                              <span className="text-lg font-black text-emerald-600">99.2% Acc.</span>
                            </div>
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
                  text: "Campaigns structured around your real business goals, not platform defaults"
                },
                {
                  text: "Creative testing designed to fight fatigue before it hurts performance"
                },
                {
                  text: "Tracking built to stay accurate through privacy and platform restrictions"
                }
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3.5 bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
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
                <span>Why Businesses Choose Us</span>
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zm10.5-11.25h.008v.008h-.008V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 12.75h.008v.008H12v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM12 18.75h.008v.008H12v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">01</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">Profitable ROI Campaigns</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Built around your bottom line — not just impressions or reach, but a real return on every rupee spent.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m0-3l-3-3m0 0l-3 3m3-3v11.25M18 10.5h.008v.008H18V10.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">03</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Accurate Attribution Tracking</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Holds up even as browser and platform-level restrictions keep changing.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">05</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Protected Brand Search</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Your branded search terms defended and captured, so competitors don’t quietly steal your highest-intent traffic.
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
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#0d1b3e]/60 uppercase mb-2">WHY WE SCALE</span>
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-2.224 2.397l-.34 2.037a.75.75 0 00.912.853l2.037-.34a3 3 0 002.397-2.224l.018-.097a3 3 0 00-.727-2.787l-1.816-1.816zm10.585-9.852a3 3 0 00-4.242 0l-8 8a3 3 0 000 4.242l1.816 1.816a3 3 0 004.242 0l8-8a3 3 0 000-4.242l-1.816-1.816z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">02</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Fresh Creative</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Always a continuous pipeline of ad variants so your account never stalls out from creative fatigue.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9s2.015-9 4.5-9m0 0a9.003 9.003 0 017.2 3.6M12 3a9.003 9.003 0 00-7.2 3.6" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">04</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">Full Coverage</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Coordinated campaigns across Google, Meta, and other platforms where your customers actually spend time.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-rose-500 transition-colors duration-300">Real-Time Visibility</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Regular access to performance data, so you always know exactly what’s working and what isn’t.
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
                Our Scaling Roadmap
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
                Our proven step-by-step engineering journey to scale your digital presence and compound returns.
              </p>
            </div>

            {/* Timeline Journey Wrapper */}
            <div className="relative flex flex-col gap-0 max-w-4xl mx-auto mt-20 text-left">
              {/* Central Timeline Dashed Connecting Line */}
              <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />

              {[
                {
                  num: "01",
                  title: "Forensic Account Audit",
                  desc: "Reviewing historical ad data and business economics to find exactly where performance is being lost.",
                  circleBg: "bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_6px_20_rgba(59,130,246,0.35)]",
                  lineColor: "bg-blue-500",
                  textColor: "text-blue-500",
                  borderColor: "border-blue-100 hover:border-blue-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]",
                  grad: "from-white via-white to-blue-50/10"
                },
                {
                  num: "02",
                  title: "Creative Sprint",
                  desc: "Producing a first batch of high-impact ad creative built for your first testing cycle.",
                  circleBg: "bg-gradient-to-br from-purple-400 to-violet-600 shadow-[0_6px_20px_rgba(139,92,246,0.35)]",
                  lineColor: "bg-purple-500",
                  textColor: "text-purple-600",
                  borderColor: "border-purple-100 hover:border-purple-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]",
                  grad: "from-white via-white to-purple-50/10"
                },
                {
                  num: "03",
                  title: "Tracking & Platform Setup",
                  desc: "Rigorous setup of tracking and campaign structure so every number you see is trustworthy.",
                  circleBg: "bg-gradient-to-br from-pink-400 to-rose-600 shadow-[0_6px_20px_rgba(244,63,94,0.35)]",
                  lineColor: "bg-rose-500",
                  textColor: "text-rose-500",
                  borderColor: "border-rose-100 hover:border-rose-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)]",
                  grad: "from-white via-white to-rose-50/10"
                },
                {
                  num: "04",
                  title: "Test & Optimize",
                  desc: "Running structured tests, cutting underperformers early, and protecting budget for what’s actually working.",
                  circleBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_6px_20px_rgba(249,115,22,0.35)]",
                  lineColor: "bg-orange-500",
                  textColor: "text-orange-500",
                  borderColor: "border-orange-100 hover:border-orange-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]",
                  grad: "from-white via-white to-orange-50/10"
                },
                {
                  num: "05",
                  title: "Scale",
                  desc: "Aggressively scaling proven winners across budget, audiences, and platforms to compound growth.",
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
                  q: "What’s the minimum ad spend to work with you?",
                  a: "We typically recommend a minimum monthly ad spend that gives the platforms enough data to optimize properly — this varies by industry and goals, and we’ll give you an exact number on your strategy call based on your business."
                },
                {
                  q: "Do you provide the ad creative, or do we need our own?",
                  a: "We handle creative end-to-end — scripting, producing, and testing video, static, and copy variations — so you don’t need an in-house creative team to run high-performing campaigns."
                },
                {
                  q: "How long until I see results?",
                  a: "Tracking and account setup improvements can show impact within the first 1–2 weeks. Meaningful improvement in cost per lead or cost per acquisition typically shows in the first 30–45 days as we identify and scale winning combinations."
                },
                {
                  q: "Which platforms do you run ads on?",
                  a: "Primarily Google and Meta, since that covers the widest reach across most industries — with LinkedIn added for B2B businesses and other platforms considered depending on where your specific audience spends time."
                },
                {
                  q: "Do you work with service businesses, or only product-based businesses?",
                  a: "Both. We run performance campaigns for service businesses, local businesses, SaaS companies, and D2C brands alike — each with a strategy built around how that type of business actually generates leads or sales."
                },
                {
                  q: "Will you take over our existing ad accounts, or start fresh?",
                  a: "Either works. We can audit and optimize your existing accounts to preserve their performance history, or set up new accounts if your current structure has deeper issues worth rebuilding."
                },
                {
                  q: "How do you measure success beyond clicks and impressions?",
                  a: "We track what actually matters — cost per lead, cost per acquisition, and where possible, revenue or booked calls attributed to your campaigns. Vanity metrics alone don’t tell you if the spend is working."
                },
                {
                  q: "How is this different from a generic ad agency?",
                  a: "Every campaign, tracking setup, and creative test is built around your specific business model and economics — not a templated approach applied the same way to every client regardless of industry."
                },
                {
                  q: "What’s included in the free ad account audit?",
                  a: "A live review of your current account structure, spend efficiency, and tracking setup, plus 2–3 specific opportunities we spot immediately — no generic slide deck, no pressure to sign anything."
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
              Ready to Make Every Ad Rupee Work Harder?
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-semibold max-w-3xl leading-relaxed">
              Book your free, no-obligation 30-minute ad account audit. No generic slide decks — just a clear look at where your ad spend is leaking and how to fix it.
            </p>

            {/* Button Link */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap"
              >
                <span>Schedule Strategy Call</span>
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
