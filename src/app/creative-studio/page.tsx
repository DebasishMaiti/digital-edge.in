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

export default function CreativeStudio() {
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
      <link rel="canonical" href="https://digitaledge360.com/creative-studio" />
      <div className="w-full bg-[#fafbfc] min-h-screen pb-24 text-slate-800">
        {/* Hero Section with custom Sky Blue light mode gradient (1 shade deeper) */}
        <section className="relative w-full pt-[160px] pb-24 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd] to-[#fafbfc] border-b border-slate-200 overflow-hidden">
          {/* Light Grid Scrolling Background */}
          <div
            className="animate-grid-scroll opacity-70 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(14, 165, 233, 0.16) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(14, 165, 233, 0.16) 1px, transparent 1px)
              `
            }}
          />

          {/* Glow backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#0ea5e9]/12 via-[#3b82f6]/8 to-transparent blur-[80px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[45%] aspect-square rounded-full bg-gradient-to-br from-[#60a5fa]/12 via-transparent to-transparent blur-[90px]" />
          </div>

          {/* SVG Custom Graphics - Edit Crosshairs & Color Wheel overlaps */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-50">
            <svg className="w-full h-full min-w-[1000px] min-h-[500px]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              {/* Overlapping translucent creative circles */}
              <circle cx="180" cy="200" r="110" fill="rgba(14, 165, 233, 0.2)" />
              <circle cx="280" cy="200" r="110" fill="rgba(37, 99, 235, 0.15)" />
              <circle cx="230" cy="110" r="70" fill="rgba(56, 189, 248, 0.06)" />

              {/* Visual crosshairs representing precise editing */}
              <g stroke="rgba(14, 165, 233, 0.3)" strokeWidth="1.5">
                <line x1="950" y1="120" x2="950" y2="280" />
                <line x1="870" y1="200" x2="1030" y2="200" />
                <circle cx="950" cy="200" r="40" fill="none" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="950" cy="200" r="70" fill="none" strokeWidth="1.5" />
                <circle cx="950" cy="200" r="95" fill="none" strokeWidth="1" strokeDasharray="6 6" />
              </g>

              {/* Precise dot array */}
              <g transform="translate(540, 320)">
                {Array.from({ length: 4 }).map((_, r) =>
                  Array.from({ length: 12 }).map((_, c) => (
                    <circle
                      key={`edit-dot-${r}-${c}`}
                      cx={c * 20}
                      cy={r * 20}
                      r={1.5}
                      fill="rgb(14, 165, 233)"
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
                Creative Studio Solution
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
                Creative Studio
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl">
                We create high-end visual assets, custom branding, and persuasive copy that tell your brand's unique story and build immediate trust. From premium digital product rendering to high-fidelity marketing visuals, our creative studio bridges technical web structure with world-class design to elevate your market positioning.
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

        {/* Video Showcase Section */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-[#fafbfc] to-white border-b border-slate-100/80 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">

            {/* Header */}
            <div className="max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
                Creative Showreel
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight mt-4">
                Step Into Our Creative Studio
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed mt-4 max-w-2xl mx-auto">
                Watch our creative showreel to see how we blend high-fidelity 3D rendering, color grading, and cinematic motion design to define premium brand authority.
              </p>
              {/* Short styled underline line */}
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4" />
            </div>

            {/* Video Player */}
            <div className="relative max-w-7xl mx-auto rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] border border-slate-200/50 bg-black aspect-video transition-shadow duration-500">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                src="/creative-studio-video/CS.mp4"
              >
              </video>
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
                text="&quot;Most brands rely on generic, flat product renders and low-quality photos that fail to capture consumer attention. In modern visual ecosystems, only high-fidelity 3D modeling, premium photo editing, and cinematic motion graphics can define premium market authority.&quot;"
                delay={0.25}
              />
            </p>
          </div>
        </section>

        {/* The Architecture Section */}
        <ArchitectureTimeline
          title="The Architecture"
          subtitle="How We Engineer The Solution."
          tagline="A proven process. Relentless quality. Built for creative precision, designed to scale."
          codeFile="src/app/asset-pipeline.ts"
          codeLines={[
            "import { AssetPipeline, ColorGrading, Render } from 'digital-edge';",
            "// Automated Asset Processing Pipeline",
            "export default async function MediaOptimizer() {",
            "  const profile = await loadColorProfiles();",
            "  return (",
            "    <AssetPipeline compression='lossless' format='webp'>",
            "      <ColorGrading lut={profile} whiteBalance='perfect' />",
            "      <Render output='4K' raytrace={true} />",
            "    </AssetPipeline>",
            "  );",
            "}"
          ]}
          floatingBadge1Text="Asset Spec"
          floatingBadge1Sub="Retina & 4K Optimization"
          floatingBadge1Value="4K"
          floatingBadge2Text="Media CDN"
          floatingBadge2Sub="High-Speed Asset Delivery"
          floatingBadge2Icon="Globe"
          phases={[
            {
              num: "01",
              phase: "PHASE 01",
              text: "We don't produce flat assets. We create high-end visual experiences that reflect premium brand aesthetics.",
              borderCol: "border-l-[#2443ab]",
              dotCol: "border-blue-500 bg-white",
              shadowCol: "shadow-blue-500/5",
              iconColor: "text-blue-600 bg-blue-50 border-blue-100",
              iconAlign: "left",
              iconName: "Sparkles"
            },
            {
              num: "02",
              phase: "PHASE 02",
              text: "Premium color grading. Balancing highlights, contrast profiles, and color grading to ensure lifelike product presentation.",
              borderCol: "border-l-[#a855f7]",
              dotCol: "border-purple-500 bg-white",
              shadowCol: "shadow-purple-500/5",
              iconColor: "text-purple-600 bg-purple-50 border-purple-100",
              iconAlign: "right",
              iconName: "Search"
            },
            {
              num: "03",
              phase: "PHASE 03",
              text: "Custom 3D modeling. Designing high-detail 3D product renders and modeling files to showcase complex product materials.",
              borderCol: "border-l-[#ec4899]",
              dotCol: "border-pink-500 bg-white",
              shadowCol: "shadow-pink-500/5",
              iconColor: "text-pink-600 bg-pink-50 border-pink-100",
              iconAlign: "left",
              iconName: "Box"
            },
            {
              num: "04",
              phase: "PHASE 04",
              text: "Motion design loops. Producing buttery-smooth motion graphic video hooks, social clips, and interactive product details.",
              borderCol: "border-l-[#f97316]",
              dotCol: "border-orange-500 bg-white",
              shadowCol: "shadow-orange-500/5",
              iconColor: "text-orange-600 bg-orange-50 border-orange-100",
              iconAlign: "right",
              iconName: "Zap"
            },
            {
              num: "05",
              phase: "PHASE 05",
              text: "High-resolution output. Exporting assets optimized for high-density displays (Retina, 4K) without sacrificing file load speed.",
              borderCol: "border-l-[#10b981]",
              dotCol: "border-emerald-500 bg-white",
              shadowCol: "shadow-emerald-500/5",
              iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
              iconAlign: "left",
              iconName: "Code"
            },
            {
              num: "06",
              phase: "PHASE 06",
              text: "Asset delivery networks. Structuring clean cloud media libraries to store, organize, and download final brand assets.",
              borderCol: "border-l-[#6366f1]",
              dotCol: "border-indigo-500 bg-white",
              shadowCol: "shadow-indigo-500/5",
              iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
              iconAlign: "right",
              iconName: "Globe"
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">01</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">Photorealistic Renders</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Cinematic product rendering with realistic reflections and high material accuracy.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">03</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Smooth Motion Graphics</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    High-impact looping product videos and interactive display graphics.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0.621 0 1.125 0.504 1.125 1.125z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">05</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Compliant Media Library</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Structured brand libraries with organized folder paths for easy developer handoff.
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
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#0d1b3e]/60 uppercase mb-2">WHY WE EDIT</span>
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Premium Color Grading</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Meticulous detail editing to make colors pop and match physical product tones.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .83-.67 1.5-1.5 1.5h-1.5c-.83 0-1.5-.67-1.5-1.5V3.104a9.747 9.747 0 00-3.328 3.328h1.244c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5H1.472a9.747 9.747 0 003.328 3.328h1.244c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5H1.472a9.747 9.747 0 003.328 3.328h1.244c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5H1.472a9.747 9.747 0 003.328 3.328h1.244c.83 0 1.5.67 1.5 1.5v1.5c0 .83-.67 1.5-1.5 1.5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">04</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">Retina-Ready Formats</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Asset deliverables exported for ultra-high-resolution screens and print options.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">06</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-rose-500 transition-colors duration-300">Fast Load Optimization</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Image formatting and SVG vectors that preserve sharpness while optimizing site speeds.
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
                  title: "Concept & Style Selection",
                  desc: "Analyzing style attributes, selecting product angles, color palettes, and creating mood boards.",
                  circleBg: "bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_6px_20_rgba(59,130,246,0.35)]",
                  lineColor: "bg-blue-500",
                  textColor: "text-blue-500",
                  borderColor: "border-blue-100 hover:border-blue-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]",
                  grad: "from-white via-white to-blue-50/10"
                },
                {
                  num: "02",
                  title: "3D Modeling & Retouching",
                  desc: "Creating 3D modeling files, adjusting polygon counts, mapping textures, and editing source photographs.",
                  circleBg: "bg-gradient-to-br from-purple-400 to-violet-600 shadow-[0_6px_20_rgba(139,92,246,0.35)]",
                  lineColor: "bg-purple-500",
                  textColor: "text-purple-600",
                  borderColor: "border-purple-100 hover:border-purple-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]",
                  grad: "from-white via-white to-purple-50/10"
                },
                {
                  num: "03",
                  title: "Motion Graphic Design",
                  desc: "Animating transition states, product details, styling hooks, and exporting high-impact visual loops.",
                  circleBg: "bg-gradient-to-br from-pink-400 to-rose-600 shadow-[0_6px_20_rgba(244,63,94,0.35)]",
                  lineColor: "bg-rose-500",
                  textColor: "text-rose-500",
                  borderColor: "border-rose-100 hover:border-rose-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)]",
                  grad: "from-white via-white to-rose-50/10"
                },
                {
                  num: "04",
                  title: "Review & Detail Polish",
                  desc: "Fine-tuning render lighting, color balances, verifying display scales, and applying brand feedback.",
                  circleBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_6px_20_rgba(249,115,22,0.35)]",
                  lineColor: "bg-orange-500",
                  textColor: "text-orange-500",
                  borderColor: "border-orange-100 hover:border-orange-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]",
                  grad: "from-white via-white to-orange-50/10"
                },
                {
                  num: "05",
                  title: "Delivery & Archive Setup",
                  desc: "Compressing asset deliverables, uploading models and images to secure storage, and archiving projects.",
                  circleBg: "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_6px_20_rgba(16,185,129,0.35)]",
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

        {/* Full-width Image Showcase Section */}
        <section className="relative z-10 w-full overflow-hidden border-t border-b border-slate-100 bg-white">
          <div className="w-full">
            <img 
              src="/ON-WHITE.jpg" 
              alt="Creative Studio Design Showcase" 
              className="w-full h-auto object-cover block"
            />
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
                  q: "What source files do you need?",
                  a: "We typically require high-resolution raw photos, 3D CAD files, or product dimension drafts."
                },
                {
                  q: "Do you handle custom branding?",
                  a: "Yes, we design logos, choose color guidelines, and build corporate design identity styles."
                },
                {
                  q: "What formats do you deliver?",
                  a: "We deliver raw models (OBJ/FBX), layered design files (PSD/Figma), and high-quality web-ready images."
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
