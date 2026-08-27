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

const perfMarketingShowcases = [
  {
    name: "Chris Louis",
    link: "/company-details/chris-louis",
    image: "/brand-card-images/Chris-Louis.jpg",
    logo: "/logos/20.jpg"
  },
  {
    name: "Jiva",
    link: "/company-details/jiva",
    image: "/brand-card-images/Jiva.png",
    logo: "/logos/jiva.jpg"
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
    name: "Ducati",
    link: "/company-details/ducati",
    image: "/brand-card-images/Ducati-home.jpg",
    logo: "/logos/28.jpg"
  }
];

export default function PerformanceMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        <section className="relative w-full pt-[160px] pb-24 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd]/30 to-[#fafbfc] border-b border-slate-100/80 overflow-hidden">
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
              Performance Marketing Solution
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
              Performance Marketing
            </h2>
            <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl">
              We design and deploy ROAS-focused paid advertising campaigns across Google, Meta@ to maximize your bottom-line profit. Driven by real attribution data and clean conversion tracking, our performance media buyers scale custom acquisition funnels that capture high-intent prospects and reduce customer acquisition costs.
            </p>
            {/* Full Width Line Divider */}
            <div className="w-full border-t border-slate-200/60 my-3"></div>
            {/* Rating markers */}
            <div className="flex flex-col items-start gap-4 mb-8 text-left">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] text-white text-xs font-extrabold rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(36,67,171,0.25)] hover:shadow-[0_10px_24px_rgba(64,21,158,0.4)] hover:opacity-95 flex items-center justify-center gap-2 flex-shrink-0 uppercase tracking-wider mt-4"
              >
                <span>Book a Strategy Call</span>
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
              text="&quot;Most marketing agencies focus on 'vanity metrics' like impressions and clicks. But clicks don't pay the bills — profit does. You're likely burning spend on unoptimized campaigns and generic creative that fails to convert at scale.&quot;" 
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
        title="The Architecture"
        subtitle="How We Engineer The Solution."
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
            text: "We are media buyers who think like investment bankers. Every dollar of ad spend is an investment that must yield a measurable return.",
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
            text: "Relentless Creative Testing. We test 20-50 unique creative variants monthly to find the 'unicorns' that drive outlier performance.",
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
            text: "Full-Funnel Ownership. We optimize everything from the ad click to the landing page journey, ensuring the highest possible conversion rate.",
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
            text: "Server-Side Attribution. We implement advanced CAPI and tracking solutions to maintain data accuracy in a post-iOS 14 world.",
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
            text: "Algorithmic Scaling. Once we find winners, we scale budgets vertically and horizontally without breaking the platform's learning phase.",
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
            text: "Transparent Reporting. Real-time dashboards and weekly deep-dives ensure you're never in the dark about your marketing performance.",
            borderCol: "border-l-[#6366f1]",
            dotCol: "border-indigo-500 bg-white",
            shadowCol: "shadow-indigo-500/5",
            iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
            iconAlign: "right",
            iconName: "BarChart3"
          }
        ]}
      />

      {/* The Tangible Output Section */}
      <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.02)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-16">
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
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">Measured ROAS Mastery</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Our primary KPI is your bottom-line profitability. We aim for 3-5x ROAS on most accounts.
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
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Advanced Tracking</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Meta CAPI and Google Enhanced Conversions for 90%+ data accuracy.
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
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Defensive Branded Search</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Protecting your brand name and capturing high-intent traffic with surgical precision.
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-2.224 2.397l-.34 2.037a.75.75 0 00.912.853l2.037-.34a3 3 0 002.397-2.224l.018-.097a3 3 0 00-.727-2.787l-1.816-1.816zm10.585-9.852a3 3 0 00-4.242 0l-8 8a3 3 0 000 4.242l1.816 1.816a3 3 0 004.242 0l8-8a3 3 0 000-4.242l-1.816-1.816z" />
                    </svg>
                  </div>
                  <span className="text-sm font-black text-blue-600 tracking-wider">02</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">High-Volume Creative</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Continuous production of unboxing videos, UGC, and premium static ads to fight fatigue.
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
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">Multi-Platform Power</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Coordinated campaigns across Meta, Google, YouTube, and TikTok for total market reach.
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
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-rose-500 transition-colors duration-300">Real-Time Transparency</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  24/7 access to live performance data and executive-level summaries.
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
              <span>OUR WORKFLOW</span>
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
              The Blueprint.
            </h2>
            <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
              Our proven step-by-step engineering journey to transform your concept into a high-performance digital asset.
            </p>
          </div>

          {/* Timeline Journey Wrapper */}
          <div className="relative flex flex-col gap-0 max-w-4xl mx-auto mt-20 text-left">
            {/* Central Timeline Dashed Connecting Line */}
            <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />

            {[
              {
                num: "01",
                title: "Forensic Audit",
                desc: "Analyzing historical ad data and unit economics to find scaling gaps.",
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
                desc: "Rapidly producing high-impact video and static assets for the first test cycle.",
                circleBg: "bg-gradient-to-br from-purple-400 to-violet-600 shadow-[0_6px_20px_rgba(139,92,246,0.35)]",
                lineColor: "bg-purple-500",
                textColor: "text-purple-600",
                borderColor: "border-purple-100 hover:border-purple-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]",
                grad: "from-white via-white to-purple-50/10"
              },
              {
                num: "03",
                title: "Platform Setup",
                desc: "Rigorous technical setup of pixels, API tracking, and campaign architecture.",
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
                desc: "Launching the testing framework and ruthlessly cutting 'winners' and 'losers' to preserve budget.",
                circleBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_6px_20px_rgba(249,115,22,0.35)]",
                lineColor: "bg-orange-500",
                textColor: "text-orange-500",
                borderColor: "border-orange-100 hover:border-orange-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]",
                grad: "from-white via-white to-orange-50/10"
              },
              {
                num: "05",
                title: "Vertical Scale",
                desc: "Aggressively scaling winning assets to drive massive revenue growth.",
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
            <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
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
                q: "What is your minimum ad spend?",
                a: "We typically work with brands spending $3,000+ per month to ensure sufficient data for algorithmic optimization."
              },
              {
                q: "Do you provide creative?",
                a: "Yes, our creative studio handles UGC scripts, video editing, and graphic design as part of our service."
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
            Ready to dominate<br />your category?
          </h2>

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
