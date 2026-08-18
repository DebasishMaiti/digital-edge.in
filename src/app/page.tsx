"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandLogos, portfolioItems, services, testimonials, faqItems, deliversFeatures } from "@/data";
import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import { section } from "framer-motion/client";

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const [isMobileSectionVisible, setIsMobileSectionVisible] = useState(false);
  const mobileSectionRef = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<"elite" | "luxury">("elite");
  const codeRef = useRef<HTMLPreElement>(null);

  const codeElite = `export async function FashionEngine(brand) {
  const store = await Shopify.load(brand);
  const stack = ['Next.js', 'React', 'GraphQL'];

  // Maximize conversion rate
  await store.optimizeCRO({
    layout: 'mobile-first',
    checkout: 'one-page',
    speed: 'instant'
  });

  return {
    lighthouseScore: 100,
    loadTime: '0.8s',
    status: 'ready'
  };
}`;

  const codeLuxury = `export async function LuxuryScale(revenue) {
  const channel = await ShopifyPlus.scale(revenue);
  const growth = ['Headless', 'Omnichannel', 'ERP'];

  // Maximize brand equity
  await channel.maximizeROI({
    loadBalancing: 'global',
    latency: 'sub-100ms',
    conversion: 'optimized'
  });

  return {
    roasIncrease: '3.8x',
    scaleFactor: '10x',
    status: 'scaled'
  };
}`;

  useEffect(() => {
    const sectionInterval = setInterval(() => {
      setActiveSection(prev => (prev === "elite" ? "luxury" : "elite"));
    }, 7000);
    return () => clearInterval(sectionInterval);
  }, []);

  useEffect(() => {
    const currentCode = activeSection === "elite" ? codeElite : codeLuxury;
    if (codeRef.current) {
      codeRef.current.textContent = "";
    }
    let index = 0;
    const typeInterval = setInterval(() => {
      if (codeRef.current) {
        codeRef.current.textContent = currentCode.slice(0, index);
      }
      index++;
      if (index > currentCode.length) {
        clearInterval(typeInterval);
      }
    }, 20);
    return () => clearInterval(typeInterval);
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMobileSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (mobileSectionRef.current) {
      observer.observe(mobileSectionRef.current);
    }

    return () => {
      if (mobileSectionRef.current) {
        observer.unobserve(mobileSectionRef.current);
      }
    };
  }, []);

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
      <link rel="canonical" href="https://digitaledge360.com" />
      <div className="relative w-full bg-[#fafbfc] min-h-screen text-slate-800 overflow-hidden">

        {/* Hero Section Container */}
        <section className="relative z-10 w-full min-h-screen lg:min-h-[950px] flex flex-col items-stretch justify-between overflow-hidden bg-[linear-gradient(135deg,_#0f358a_0%,_#1a265c_50%,_#2a1768_100%)] text-white">
          {/* Moving Grid Background Layer */}
          <div className="absolute inset-0 animate-grid-scroll opacity-30 pointer-events-none z-0" />

          {/* Left and Right Columns Wrapper */}
          <div className="w-full flex flex-col xl:flex-row items-stretch flex-grow z-10">
            {/* Left Column: Content */}
            <div className="w-full xl:w-[48%] relative flex flex-col justify-center items-center xl:items-start text-center xl:text-left px-6 sm:px-12 xl:pl-16 xl:pr-8 pt-32 pb-12 xl:pt-40 xl:pb-16 z-40">
              <motion.div
                className="w-full max-w-[620px] flex flex-col items-center xl:items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.12 }}
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-bold tracking-widest text-[#00c2eb] uppercase mb-8 shadow-sm backdrop-blur-md"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00c2eb] animate-pulse" />
                  Full-Stack E-Commerce Marketing Agency
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl sm:text-5xl xl:text-[56px] font-black text-white leading-[1.1] tracking-tight mb-6"
                >
                  Engineered Growth for
                  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00c2eb] via-[#00e5ff] to-[#00a3c4]">
                    DTC, Shopify & Retail Brands
                  </span>
                </motion.h1>

                {/* Description */}
                {/* <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
                  Digital Edge 360° is a full-stack e-commerce marketing agency built by performance marketers and developers - not just strategists. For 7+ years, we’ve helped 75+ online stores turn their vision into reality. From storefront development to SEO, paid marketing to conversion rate optimization, and app development, we run every growth lever under one roof — backed by real attribution data. So your success isn’t just measurable at the finish line, but visible and trackable at every stage of your e-commerce branding journey.
                </p> */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-2 font-medium font-mono mx-auto xl:mx-0"
                >
                  Digital Edge 360° is a full-stack e-commerce marketing agency built by performance marketers and developers - not just strategists. For 7+ years, we’ve helped 75+ online stores turn their vision into reality.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-medium font-mono mx-auto xl:mx-0"
                >
                  From storefront development to SEO, paid marketing to conversion rate optimization, and app development, we run every growth lever under one roof — backed by real attribution data. So your success isn’t just measurable at the finish line, but visible and trackable at every stage of your e-commerce branding journey.
                </motion.p>

                {/* Call to Action Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-[#00a3c4] hover:bg-[#008ba8] text-white text-sm font-extrabold rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(0,163,196,0.35)] hover:shadow-[0_15px_30px_rgba(0,163,196,0.5)] hover:-translate-y-0.5 uppercase tracking-wider"
                  >
                    <span>Book a Strategy Call</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column: Centered Large Video Mockup */}
            <div className="w-full xl:w-[52%] mt-2 relative flex items-center justify-center p-4 sm:p-8 xl:p-8 z-30 min-h-[450px] xl:min-h-full">
              {/* Ambient Background Glows */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  x: [0, 15, 0],
                  y: [0, -15, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#00c2eb]/15 rounded-full blur-[100px] pointer-events-none"
              />
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  x: [0, -20, 0],
                  y: [0, 20, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#1d4ed8]/15 rounded-full blur-[120px] pointer-events-none"
              />

              {/* Video Player styled like a Safari window */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 24 }}
                whileHover={{ y: 16, scale: 1.015 }}
                transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[940px] lg:max-w-[calc(100dvh-200px)] aspect-square rounded-2xl bg-slate-900/90 border border-slate-700/60 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden cursor-pointer"
              >
                {/* Window header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800/80 bg-slate-950/40">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="text-xs text-slate-400 font-mono tracking-wider truncate max-w-[200px]">
                    live-results.mp4
                  </div>
                  <div className="w-12" /> {/* Spacer */}
                </div>
                {/* Video container */}
                <div className="relative  opacity-95 bg-black">
                  <video
                    src="/videos/hero-section.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-95"
                  />
                  {/* Subtle scanline overlay for cool retro-modern vibe */}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Partner Logos Marquee - Full Width Center Bottom */}
          <div className="w-full relative z-40 pb-16 pt-8 px-6 sm:px-12 flex flex-col items-center justify-center text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-black mb-5">Our Partners & Accreditations</p>
            <div className="relative w-full max-w-[960px] overflow-hidden flex [mask-image:_linear-gradient(to_right,_transparent_0%,_black_10%,_black_90%,_transparent_100%)] flex-row">
              <div className="flex gap-12 items-center animate-marquee-infinite py-4 pr-12">
                {[
                  "/brand-logos/google-partner.png",
                  "/brand-logos/meta-logo.png",
                  "/brand-logos/shopify-plus.png",
                  "/brand-logos/aws-genai.png",
                  "/brand-logos/iso.png",
                  "/brand-logos/msme-logo.png",
                  "/brand-logos/startup-india.png",
                ].map((src, index) => (
                  <div key={index} className="w-24 h-24 rounded-full bg-white/5 border border-white/10 shadow-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300 backdrop-blur-sm flex-shrink-0">
                    <div className="relative w-full h-full">
                      <Image src={src} alt="Brand Accreditations" fill className="object-contain filter brightness-110" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-12 items-center animate-marquee-infinite py-4 pr-12">
                {[
                  "/brand-logos/google-partner.png",
                  "/brand-logos/meta-logo.png",
                  "/brand-logos/shopify-plus.png",
                  "/brand-logos/aws-genai.png",
                  "/brand-logos/iso.png",
                  "/brand-logos/msme-logo.png",
                  "/brand-logos/startup-india.png",
                ].map((src, index) => (
                  <div key={`dup-${index}`} className="w-24 h-24 rounded-full bg-white/5 border border-white/10 shadow-lg flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300 backdrop-blur-sm flex-shrink-0">
                    <div className="relative w-full h-full">
                      <Image src={src} alt="Brand Accreditations" fill className="object-contain filter brightness-110" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Elite Build Section */}
        <section className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-24 py-20 bg-gradient-to-b from-white to-[#fafbfc] overflow-hidden">
          {/* Background text */}
          <div className="absolute left-[5%] top-[20%] lg:top-[10%] z-0 font-black text-slate-100 text-[9rem] sm:text-[14rem] md:text-[18rem] uppercase pointer-events-none select-none tracking-tighter leading-none">
            FULL
          </div>
          <div className="absolute right-[5%] bottom-[0%] lg:-bottom-[5%] z-0 font-black text-slate-100 text-[9rem] sm:text-[14rem] md:text-[18rem] uppercase pointer-events-none select-none tracking-tighter leading-none">
            STACK
          </div>
          {/* Section Header */}
          <div className="text-center mb-16 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-extrabold tracking-[0.2em] text-slate-500 uppercase shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 w-3 text-emerald-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Verified Results</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight mt-4">
                Live <span className="text-[#2443ab]">Experiences</span>
              </h2>
            </div>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-400 font-semibold leading-relaxed mt-4">
              We build high-performance Shopify storefronts that bridge technical excellence with world-class design. See how our code translates to premium retail experiences.
            </p>
          </div>

          {/* Grid Wrapper containing Stats + Mockup Window */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center relative z-10 max-w-6xl mx-auto">

            {/* Left Stats Column (aligned right) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col gap-12 justify-center items-end text-right">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div>
                  <span className="block text-[9px] font-extrabold text-slate-400 tracking-wider uppercase">STORE LAUNCHES</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center flex-shrink-0 text-sm font-black text-[#0d1b3e]">
                  75+
                </div>
              </div>
              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <div>
                  <span className="block text-[9px] font-extrabold text-slate-400 tracking-wider uppercase">ROI DELIVERY</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center flex-shrink-0 text-sm font-black text-[#0d1b3e]">
                  10x
                </div>
              </div>
              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <div>
                  <span className="block text-[9px] font-extrabold text-slate-400 tracking-wider uppercase">SHOPIFY CERTIFIED</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center flex-shrink-0 text-emerald-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Central Mockup Window */}
            <div className="col-span-12 lg:col-span-8 bg-white/70 backdrop-blur-md border border-slate-200/60 rounded-[32px] p-4 sm:p-5 shadow-2xl relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch min-h-[400px]">
                {/* Left: Code Editor panel */}
                <div className="bg-[#fafbfc] border border-slate-100 rounded-2xl p-5 shadow-inner flex flex-col justify-start min-h-[300px] text-left relative overflow-hidden">
                  {/* Editor Top buttons */}
                  <div className="flex items-center gap-1.5 mb-6 overflow-hidden">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] font-extrabold text-[#2443ab] font-mono tracking-wider ml-3 uppercase transition-all duration-300">
                      {activeSection === 'elite' ? 'FASHIONENGINE.TS' : 'LUXURYSCALE.TS'}
                    </span>
                  </div>
                  {/* Code viewport */}
                  <div className="relative font-mono text-[10px] sm:text-[10px] md:text-[12px] leading-relaxed text-slate-700 select-none flex items-start">
                    <pre ref={codeRef} className="whitespace-pre-wrap flex-1 min-h-[220px]"></pre>
                  </div>
                </div>

                {/* Right: Scrolling Mockups preview panel (Single Column Layout) */}
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-[320px] md:h-auto bg-slate-50 relative group/mockup p-2 flex items-stretch">
                  {/* Single Screen Frame container */}
                  <div className="w-full overflow-hidden relative bg-white rounded-xl shadow-inner min-h-[300px] flex-1">
                    {/* Long Scrolling Strip containing all 3 mockups stacked */}
                    <div className="absolute inset-x-0 top-0 w-full flex flex-col gap-0 animate-scroll-mockup-single transition-all duration-500 cursor-pointer">
                      <img src="/portfolio/chrislouis.png" alt="Fashion Store Mockup" className="w-full h-auto" />
                      <img src="/portfolio/truboybbq.png" alt="Eyewear Store Mockup" className="w-full h-auto" />
                      <img src="/portfolio/sacredsuta.png" alt="Ecommerce Store Mockup" className="w-full h-auto" />
                      {/* Repeat first one for seamless looping */}
                      <img src="/portfolio/chrislouis.png" alt="Fashion Store Mockup Repeat" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Stats Column (aligned left) */}
            <div className="hidden lg:flex lg:col-span-2 flex-col gap-12 justify-center items-start text-left">
              {/* Stat 4 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center flex-shrink-0 text-sm font-black text-[#0d1b3e]">
                  7+
                </div>
                <div>
                  <span className="block text-[9px] font-extrabold text-slate-400 tracking-wider uppercase">YEARS EXPERIENCE</span>
                </div>
              </div>
              {/* Stat 5 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center flex-shrink-0 text-sm font-black text-[#0d1b3e]">
                  20+
                </div>
                <div>
                  <span className="block text-[9px] font-extrabold text-slate-400 tracking-wider uppercase">PARTNER CERTS</span>
                </div>
              </div>
              {/* Stat 6 */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center flex-shrink-0 text-sm font-black text-[#0d1b3e]">
                  98%
                </div>
                <div>
                  <span className="block text-[9px] font-extrabold text-slate-400 tracking-wider uppercase">CLIENT RETENTION</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Stats Row (fallback) */}
          <div className="flex lg:hidden flex-wrap items-center justify-center gap-6 mt-12 relative z-10 border-t border-slate-100 pt-8 max-w-lg mx-auto">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-[#0d1b3e]">50+</span>
              <span className="text-[9px] font-extrabold text-slate-400 tracking-wider uppercase">STORE LAUNCHES</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-[#0d1b3e]">10x</span>
              <span className="text-[9px] font-extrabold text-slate-400 tracking-wider uppercase">ROI DELIVERY</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-[#0d1b3e]">7+</span>
              <span className="text-[9px] font-extrabold text-slate-400 tracking-wider uppercase">YRS EXP</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-300" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-[#0d1b3e]">98%</span>
              <span className="text-[9px] font-extrabold text-slate-400 tracking-wider uppercase">CLIENT RET</span>
            </div>
          </div>

        </section>

        {/* Beyond Tradition Tech Section */}
        <section className="relative w-full mx-2 py-28 md:py-36 bg-[#fafbfc] overflow-hidden flex flex-col items-center justify-center border-t border-slate-100/80">
          {/* Scattered Rotated tech names background (moveable) */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-[0.06] sm:opacity-[0.08] rotate-[-10deg] scale-110 flex flex-col justify-between py-6">
            <motion.div
              animate={{ x: [-60, 60, -60] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-around text-slate-400 font-black text-xl sm:text-3xl tracking-widest"
            >
              <span>DOCKER</span>
              <span>VERCEL</span>
              <span>AWS</span>
              <span>PYTHON</span>
              <span>NEXT.JS</span>
              <span>SHOPIFY</span>
              <span>SWIFT</span>
            </motion.div>
            <motion.div
              animate={{ x: [50, -50, 50] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-around text-slate-400 font-black text-2xl sm:text-4xl tracking-widest pl-12"
            >
              <span>TAILWIND</span>
              <span>TYPESCRIPT</span>
              <span>REDIS</span>
              <span>FLUTTER</span>
              <span>GOLANG</span>
              <span>KAFKA</span>
            </motion.div>
            <motion.div
              animate={{ x: [-55, 55, -55] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-around text-slate-400 font-black text-xl sm:text-3xl tracking-widest pr-16"
            >
              <span>NODE.JS</span>
              <span>STRIPE</span>
              <span>FLUTTER</span>
              <span>MONGODB</span>
              <span>POSTGRES</span>
              <span>GITHUB</span>
            </motion.div>
            <motion.div
              animate={{ x: [60, -60, 60] }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-around text-slate-400 font-black text-2xl sm:text-4xl tracking-widest pl-20"
            >
              <span>KUBERNETES</span>
              <span>REACT</span>
              <span>AWS</span>
              <span>PYTHON</span>
              <span>FIGMA</span>
              <span>VERCEL</span>
            </motion.div>
            <motion.div
              animate={{ x: [-45, 45, -45] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-around text-slate-400 font-black text-xl sm:text-3xl tracking-widest"
            >
              <span>PYTHON</span>
              <span>TAILWIND</span>
              <span>VERCEL</span>
              <span>NEXT.JS</span>
              <span>SHOPIFY</span>
              <span>REDIS</span>
            </motion.div>
            <motion.div
              animate={{ x: [40, -40, 40] }}
              transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-around text-slate-400 font-black text-2xl sm:text-4xl tracking-widest pl-16"
            >
              <span>NEXT.JS</span>
              <span>TYPESCRIPT</span>
              <span>DOCKER</span>
              <span>STRIPE</span>
              <span>PYTHON</span>
              <span>REACT</span>
            </motion.div>
            <motion.div
              animate={{ x: [-50, 50, -50] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="flex justify-around text-slate-400 font-black text-xl sm:text-3xl tracking-widest"
            >
              <span>SHOPIFY</span>
              <span>TAILWIND</span>
              <span>VERCEL</span>
              <span>FLUTTER</span>
              <span>REDIS</span>
              <span>NODE.JS</span>
            </motion.div>
          </div>

          {/* Core Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 max-w-[90rem] mx-auto flex flex-col items-center justify-center">
            <h3 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw] 2xl:text-[110px] font-black italic text-slate-900 leading-none tracking-tight select-none">
              BEYOND
            </h3>
            <h4 className="text-[13.5vw] sm:text-[11.5vw] md:text-[9.5vw] lg:text-[8.5vw] xl:text-[7.5vw] 2xl:text-[130px] font-black bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent leading-none tracking-tighter select-none mt-[-2vw] sm:mt-[-1.5vw] md:mt-[-2vw] lg:mt-[-1.5vw] 2xl:mt-[-30px] pb-2">
              TRADITION.
            </h4>

            {/* Subtext Quote Box */}
            <div className="relative group max-w-xl mx-auto mt-12 sm:mt-16 md:mt-20 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03]">
              {/* Glowing Aura Background (visible in normal state, intensifies on hover) */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a8bc7]/25 via-[#2443ab]/25 to-[#40159e]/25 rounded-[22px] blur-xl opacity-90 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 pointer-events-none" />

              {/* Glassmorphic Container with Vibrant Multi-Colored Layered Shadow */}
              <div className="relative bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-[22px] px-6 py-5 sm:px-10 sm:py-8 shadow-[0_20px_50px_rgba(10,139,199,0.15),_0_10px_30px_rgba(64,21,158,0.12),_0_0_40px_rgba(36,67,171,0.08)]  group-hover:border-[#2443ab]/40 transition-all duration-300 text-center">
                <p className="text-[12px] sm:text-[15px] md:text-[18px] font-black text-slate-800 uppercase tracking-[0.15em] sm:tracking-[0.2em] leading-relaxed">
                  "We don't follow the tech stack. <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">We define it.</span> Our tools are selected for pure dominance."
                </p>
                <div className="w-12 sm:w-16 h-[3.5px] bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] mx-auto mt-4 sm:mt-5 rounded-full shadow-sm" />
              </div>
            </div>
          </div>
        </section>

        {/* Five Vendors & Growth Help Section */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-[#fafbfc] via-white to-[#fafbfc] border-t border-b border-slate-100 overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-[20%] left-[-5%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.02)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-[20%] right-[-5%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.02)_0%,transparent_70%)] pointer-events-none" />

          <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">

            {/* H2 Heading & H3 Subheading */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-red-500 uppercase shadow-sm">
                <span>The Core Problem</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                Running an <span className="text-[#2443ab]">Online Store</span> Shouldn’t Feel Like Managing <span className="text-[#9203ff]">Five Different Vendors</span>
              </h2>
              <p className="text-slate-500 font-bold text-sm sm:text-base leading-relaxed">
                If any of this sounds familiar, you’re not alone - and it’s not your fault.
              </p>
            </div>

            {/* Connected Vertical Timeline Step-by-Step Layout */}
            <div className="relative max-w-5xl mx-auto mt-20">
              {/* Central dashed line */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />

              {[
                {
                  title: "Siloed Communication",
                  text: "Your SEO agency, ad manager, creative team, and dev team don’t talk to each other. So nobody actually owns your results, and you’re stuck playing translator between four different Slack channels.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641l-.318 1.235c-.083.323.238.614.545.506l1.235-.432c.504-.176.999-.085 1.488.132A8.96 8.96 0 0 0 12 20.25Z" />
                    </svg>
                  ),
                  circleBg: "bg-gradient-to-br from-pink-400 to-rose-600 shadow-[0_6px_20px_rgba(244,63,94,0.35)]",
                  lineColor: "bg-rose-500",
                  textColor: "text-rose-500",
                  borderColor: "border-rose-100",
                  step: "Step 01",
                  slideLeft: true,
                  illustration: (
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 pointer-events-none select-none">
                      <defs>
                        <linearGradient id="bubbleGrad1" x1="25" y1="25" x2="95" y2="80" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#ffb3c6" />
                          <stop offset="40%" stopColor="#ff7096" />
                          <stop offset="100%" stopColor="#ff477e" />
                        </linearGradient>
                        <linearGradient id="bubbleGrad2" x1="60" y1="60" x2="110" y2="110" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#ff85a2" />
                          <stop offset="100%" stopColor="#ff0a54" />
                        </linearGradient>
                        <filter id="shadowBubble" x="-10" y="-10" width="140" height="140" filterUnits="userSpaceOnUse">
                          <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#ff0a54" floodOpacity="0.25" />
                        </filter>
                      </defs>
                      <g filter="url(#shadowBubble)">
                        <circle cx="95" cy="85" r="18" fill="url(#bubbleGrad2)" />
                        <path d="M95 100 L88 108 L100 102 Z" fill="url(#bubbleGrad2)" />
                        <circle cx="89" cy="85" r="2" fill="white" opacity="0.9" />
                        <circle cx="95" cy="85" r="2" fill="white" opacity="0.9" />
                        <circle cx="101" cy="85" r="2" fill="white" opacity="0.9" />
                        <rect x="25" y="25" width="70" height="55" rx="24" fill="url(#bubbleGrad1)" />
                        <path d="M75 78 L85 92 L65 80 Z" fill="url(#bubbleGrad1)" />
                        <circle cx="45" cy="52" r="4.5" fill="white" opacity="0.95" />
                        <circle cx="60" cy="52" r="4.5" fill="white" opacity="0.95" />
                        <circle cx="75" cy="52" r="4.5" fill="white" opacity="0.95" />
                      </g>
                    </svg>
                  )
                },
                {
                  title: "Vanity Metrics",
                  text: "Your monthly reports are packed with impressions and click-through rates - but nobody can tell you how much actual revenue any of it produced.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                    </svg>
                  ),
                  circleBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_6px_20px_rgba(249,115,22,0.35)]",
                  lineColor: "bg-orange-500",
                  textColor: "text-orange-500",
                  borderColor: "border-orange-100",
                  step: "Step 02",
                  slideLeft: false,
                  illustration: (
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 pointer-events-none select-none">
                      <defs>
                        <linearGradient id="chartBarGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ffcc80" />
                          <stop offset="100%" stopColor="#ff8f00" />
                        </linearGradient>
                        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#ffe082" />
                          <stop offset="100%" stopColor="#ffb300" />
                        </linearGradient>
                        <filter id="shadowChart" x="-10" y="-10" width="140" height="140" filterUnits="userSpaceOnUse">
                          <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#ff8f00" floodOpacity="0.25" />
                        </filter>
                      </defs>
                      <g filter="url(#shadowChart)">
                        <rect x="40" y="70" width="10" height="25" rx="5" fill="url(#chartBarGrad)" />
                        <rect x="60" y="50" width="10" height="45" rx="5" fill="url(#chartBarGrad)" />
                        <rect x="80" y="35" width="10" height="60" rx="5" fill="url(#chartBarGrad)" />
                        <rect x="100" y="60" width="10" height="35" rx="5" fill="url(#chartBarGrad)" />
                        <path d="M45 65 L65 45 L85 30 L105 55" stroke="url(#lineGrad)" strokeWidth="5" strokeLinecap="round" />
                        <circle cx="45" cy="65" r="4.5" fill="white" stroke="#ff8f00" strokeWidth="2.5" />
                        <circle cx="65" cy="45" r="4.5" fill="white" stroke="#ff8f00" strokeWidth="2.5" />
                        <circle cx="85" cy="30" r="4.5" fill="white" stroke="#ff8f00" strokeWidth="2.5" />
                        <circle cx="105" cy="55" r="4.5" fill="white" stroke="#ff8f00" strokeWidth="2.5" />
                      </g>
                    </svg>
                  )
                },
                {
                  title: "Slow Loading Times",
                  text: "Your website takes 6+ seconds to load - which means half your ad spend is bringing shoppers to a storefront that loses them before they even see your product.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                  circleBg: "bg-gradient-to-br from-red-400 to-rose-600 shadow-[0_6px_20px_rgba(244,63,94,0.35)]",
                  lineColor: "bg-rose-500",
                  textColor: "text-rose-500",
                  borderColor: "border-rose-100",
                  step: "Step 03",
                  slideLeft: true,
                  illustration: (
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 pointer-events-none select-none">
                      <defs>
                        <linearGradient id="speedBg" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#ffb3c6" />
                          <stop offset="100%" stopColor="#ff477e" />
                        </linearGradient>
                        <filter id="shadowSpeed" x="-10" y="-10" width="140" height="140" filterUnits="userSpaceOnUse">
                          <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#ff477e" floodOpacity="0.25" />
                        </filter>
                      </defs>
                      <g filter="url(#shadowSpeed)">
                        <circle cx="75" cy="75" r="35" stroke="url(#speedBg)" strokeWidth="6" strokeDasharray="140 280" strokeLinecap="round" transform="rotate(-90 75 75)" fill="none" />
                        <path d="M75 75 L95 55" stroke="#ff477e" strokeWidth="5" strokeLinecap="round" />
                        <circle cx="75" cy="75" r="6" fill="#0d1b3e" />
                      </g>
                    </svg>
                  )
                },
                {
                  title: "Blame Game",
                  text: "Every agency blames someone else when growth stalls- the SEO team blames the site speed, the dev team blames the ad targeting, and you’re left with no clear answer.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                    </svg>
                  ),
                  circleBg: "bg-gradient-to-br from-yellow-400 to-amber-500 shadow-[0_6px_20px_rgba(234,179,8,0.35)]",
                  lineColor: "bg-yellow-500",
                  textColor: "text-yellow-600",
                  borderColor: "border-yellow-100",
                  step: "Step 04",
                  slideLeft: false,
                  illustration: (
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 pointer-events-none select-none">
                      <defs>
                        <linearGradient id="shieldBg" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#ffe082" />
                          <stop offset="100%" stopColor="#ffb300" />
                        </linearGradient>
                        <filter id="shadowShield" x="-10" y="-10" width="140" height="140" filterUnits="userSpaceOnUse">
                          <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#ffb300" floodOpacity="0.25" />
                        </filter>
                      </defs>
                      <g filter="url(#shadowShield)">
                        <path d="M75 35 C90 35 98 40 98 40 C98 40 98 75 75 95 C52 75 52 40 52 40 C52 40 60 35 75 35 Z" fill="url(#shieldBg)" />
                        <circle cx="75" cy="58" r="4.5" fill="white" />
                        <path d="M75 66 L75 78" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
                      </g>
                    </svg>
                  )
                },
                {
                  title: "Fragmented Invoices",
                  text: "You’re paying five separate invoices for tools and services that should be working as one system - not five disconnected pieces pretending to be a strategy.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5c.621 0 1.125.504 1.125 1.125v12.75c0 .621-.504 1.125-1.125 1.125H3.75A1.125 1.125 0 0 1 2.25 17.25V5.625C2.25 5.004 2.754 4.5 3.75 4.5Z" />
                    </svg>
                  ),
                  circleBg: "bg-gradient-to-br from-pink-400 to-rose-600 shadow-[0_6px_20px_rgba(244,63,94,0.35)]",
                  lineColor: "bg-rose-500",
                  textColor: "text-rose-500",
                  borderColor: "border-rose-100",
                  step: "Step 05",
                  slideLeft: true,
                  illustration: (
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 pointer-events-none select-none">
                      <defs>
                        <linearGradient id="invGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#ffb3c6" />
                          <stop offset="100%" stopColor="#ff477e" />
                        </linearGradient>
                        <filter id="shadowInv" x="-10" y="-10" width="140" height="140" filterUnits="userSpaceOnUse">
                          <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#ff477e" floodOpacity="0.25" />
                        </filter>
                      </defs>
                      <g filter="url(#shadowInv)">
                        <rect x="50" y="35" width="45" height="60" rx="8" fill="white" stroke="url(#invGrad)" strokeWidth="3" />
                        <line x1="58" y1="48" x2="87" y2="48" stroke="url(#invGrad)" strokeWidth="3" strokeLinecap="round" />
                        <line x1="58" y1="58" x2="77" y2="58" stroke="url(#invGrad)" strokeWidth="3" strokeLinecap="round" />
                        <line x1="58" y1="68" x2="87" y2="68" stroke="url(#invGrad)" strokeWidth="3" strokeLinecap="round" />
                        <text x="75" y="86" fill="#ff477e" fontSize="14" fontWeight="900" fontFamily="sans-serif">$</text>
                      </g>
                    </svg>
                  )
                },
                {
                  title: "One Team. One Dashboard. One Line of Accountability.",
                  text: "That’s exactly why we built Digital Edge 360 differently - one team, one dashboard, one clear line of accountability from click to conversion.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.75a3 3 0 0 0 3 3h1.75M9 9h.01M12 12h.01M15 15h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  ),
                  circleBg: "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_6px_20px_rgba(37,99,235,0.35)]",
                  lineColor: "bg-blue-500",
                  textColor: "text-blue-500",
                  borderColor: "border-blue-100",
                  step: "Step 06",
                  slideLeft: false,
                  illustration: (
                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-28 pointer-events-none select-none">
                      <defs>
                        <linearGradient id="targetInnerGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#809cff" />
                          <stop offset="100%" stopColor="#1a4bff" />
                        </linearGradient>
                        <filter id="shadowTarget" x="-10" y="-10" width="140" height="140" filterUnits="userSpaceOnUse">
                          <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#1a4bff" floodOpacity="0.3" />
                        </filter>
                      </defs>
                      <g filter="url(#shadowTarget)">
                        <circle cx="70" cy="70" r="32" stroke="white" strokeWidth="3" fill="url(#targetInnerGrad)" />
                        <circle cx="70" cy="70" r="22" stroke="white" strokeWidth="3" />
                        <circle cx="70" cy="70" r="12" stroke="white" strokeWidth="3" fill="#ff4d4d" />
                        <path d="M95 45 L72 68" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
                        <path d="M95 45 L85 45 M95 45 L95 55" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
                      </g>
                    </svg>
                  )
                }
              ].map((item, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={`flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 relative z-10 py-12 ${isLeft ? "" : "lg:flex-row-reverse"
                      }`}
                  >
                    {/* Central Timeline Dot */}
                    <div className={`absolute left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 ${item.lineColor.replace('bg-', 'border-')} hidden lg:flex items-center justify-center z-20 shadow-md`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${item.lineColor}`} />
                    </div>

                    {/* Content Column */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full lg:w-[45%] pl-10 lg:pl-0 ${isLeft ? "lg:text-right" : "lg:text-left"}`}
                    >
                      {/* Step Pill */}
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border bg-white shadow-sm mb-4 ${item.borderColor} ${item.textColor}`}>
                        {item.step}
                      </span>

                      <div className={`flex items-center gap-4 mb-4 ${isLeft ? "lg:justify-end" : "lg:justify-start"}`}>
                        {isLeft && (
                          <h4 className="text-2xl font-black text-[#0d1b3e] tracking-tight">
                            {item.title}
                          </h4>
                        )}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.circleBg}`}>
                          {item.icon}
                        </div>
                        {!isLeft && (
                          <h4 className="text-2xl font-black text-[#0d1b3e] tracking-tight">
                            {item.title}
                          </h4>
                        )}
                      </div>

                      {/* Accent Divider Line */}
                      <div className={`w-12 h-1 rounded mb-6 ${item.lineColor} ${isLeft ? "lg:ml-auto" : "lg:mr-auto"}`} />

                      <p className="text-[15px] sm:text-base text-slate-500 font-semibold leading-relaxed">
                        {item.text}
                      </p>
                    </motion.div>

                    {/* Illustration Column */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full lg:w-[45%] flex justify-center pl-10 lg:pl-0"
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="p-8 rounded-[32px] bg-gradient-to-br from-white/90 to-slate-50/50 border border-slate-100/80 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-500 flex items-center justify-center overflow-hidden"
                      >
                        {item.illustration}
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* How We Help You Grow Section */}
            <div className="mt-40 space-y-20">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
                  <span>OUR CAPABILITIES</span>
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                  How We Help You Grow
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Launch faster",
                    desc: "We build your website, your app, and your WooCommerce store — and we build them to convert, not just to look good in a portfolio. Speed and structure get baked in from the first sprint.",
                    grad: "from-blue-50 to-blue-100/50 border-blue-100 text-[#0a8bc7]",
                    badge: "Development",
                    watermark: "Launch",
                    slideDir: -50
                  },
                  {
                    title: "Grow revenue",
                    desc: "Meta and Google ads, technical SEO, marketplace listings on Amazon and beyond. This is the part most agencies split across three vendors. We run it as one operation, and every report ties back to actual revenue, not impressions.",
                    grad: "from-purple-50 to-purple-100/50 border-purple-100 text-purple-600",
                    badge: "Acquisition",
                    watermark: "Grow",
                    slideDir: 0
                  },
                  {
                    title: "Automate and scale",
                    desc: "As your store grows, so does the manual work behind it. We use AI for personalization and support automation to cut that down, and we produce the video content that keeps your brand looking like one brand across every channel — not five different ones stitched together.",
                    grad: "from-emerald-50 to-emerald-100/50 border-emerald-100 text-emerald-600",
                    badge: "Retention & AI",
                    watermark: "Scale",
                    slideDir: 50
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50, x: item.slideDir }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className={`bg-gradient-to-br ${item.grad.split(' ').slice(0, 3).join(' ')} rounded-[32px] p-10 border ${item.grad.split(' ')[3]} shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between min-h-[340px] relative overflow-hidden ${idx === 1 ? "lg:translate-y-8" : ""
                      }`}
                  >
                    {/* Large Background Watermark */}
                    <div className={`absolute -right-3 -bottom-5 text-[5rem] font-black opacity-[0.05] select-none pointer-events-none tracking-tighter leading-none uppercase ${item.grad.split(' ').pop()}`}>
                      {item.watermark}
                    </div>

                    <div className="relative z-10">
                      <div className={`w-fit px-3.5 py-1.5 rounded-full text-[10px] font-black bg-white shadow-sm border border-slate-100 ${item.grad.split(' ').pop()} mb-8 uppercase tracking-wider`}>
                        {item.badge}
                      </div>
                      <h4 className="text-2xl font-black text-[#0d1b3e] tracking-tight mb-4">
                        {item.title}
                      </h4>
                      <p className="text-sm sm:text-[15px] text-slate-600 font-semibold leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* our works Section */}
        <section ref={mobileSectionRef} className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12 py-16">

          {/* What Makes Us Different Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[10px] font-extrabold tracking-[0.25em] text-[#2443ab] uppercase shadow-sm mb-4">
                WHY WORK WITH US
              </span>
              <h3 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight mt-2">
                What Makes Us Different
              </h3>
            </div>

            {/* Editorial Row Layout - Stairs Style */}
            <div className="space-y-6">
              {/* Row 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-10 items-start group bg-indigo-100/60 border border-indigo-100/50 hover:bg-indigo-100 transition-all duration-300 px-8 rounded-[24px] text-left lg:max-w-[85%] shadow-sm">
                <div className="lg:col-span-2 text-3xl sm:text-5xl font-black text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">
                  01
                </div>
                <div className="lg:col-span-4 text-xl sm:text-2xl font-black text-[#0d1b3e] leading-tight transition-colors duration-300 group-hover:text-indigo-900">
                  One team, one accountability chain.
                </div>
                <div className="lg:col-span-6 text-slate-600 font-semibold text-sm sm:text-[15px] leading-relaxed">
                  <div className="mb-3">
                    <span className="text-[#0d1b3e] font-bold">Zero handoffs</span> between dev and marketing. The team that <span className="underline decoration-indigo-500/60 decoration-2 font-bold text-slate-800">builds your storefront</span> sits in the exact same room as the specialists <span className="underline decoration-indigo-500/60 decoration-2 font-bold text-slate-800">optimizing your ads</span>.
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-indigo-200/50 text-indigo-800 border border-indigo-300/40">
                      🤝 Dev + Marketing Aligned
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-indigo-50/60 text-indigo-700 border border-indigo-200/40">
                      ⚡ Direct Accountability
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-10 items-start group bg-purple-100/60 border border-purple-100/50 hover:bg-purple-100 transition-all duration-300 px-8 rounded-[24px] text-left lg:max-w-[85%] lg:ml-[7.5%] shadow-sm">
                <div className="lg:col-span-2 text-3xl sm:text-5xl font-black text-purple-500 group-hover:text-purple-700 transition-colors duration-300">
                  02
                </div>
                <div className="lg:col-span-4 text-xl sm:text-2xl font-black text-[#0d1b3e] leading-tight transition-colors duration-300 group-hover:text-purple-900">
                  Certified across the platforms that matter.
                </div>
                <div className="lg:col-span-6 text-slate-600 font-semibold text-sm sm:text-[15px] leading-relaxed">
                  <div className="mb-3">
                    Enterprise-grade execution built for brands demanding absolute security, strict compliance standards, and scaling speed.
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-purple-200/50 text-purple-800 border border-purple-300/40">
                      Shopify Plus
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-purple-200/50 text-purple-800 border border-purple-300/40">
                      Google & Meta Premier
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-purple-200/50 text-purple-800 border border-purple-300/40">
                      Adobe
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                      🔒 ISO 27001 Security
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 py-10 items-start group bg-amber-100/60 border border-amber-100/40 hover:bg-amber-100 transition-all duration-300 px-8 rounded-[24px] text-left lg:max-w-[85%] lg:ml-[15%] shadow-sm">
                <div className="lg:col-span-2 text-3xl sm:text-5xl font-black text-amber-500 group-hover:text-amber-700 transition-colors duration-300">
                  03
                </div>
                <div className="lg:col-span-4 text-xl sm:text-2xl font-black text-[#0d1b3e] leading-tight transition-colors duration-300 group-hover:text-amber-900">
                  Built for e-commerce only.
                </div>
                <div className="lg:col-span-6 text-slate-600 font-semibold text-sm sm:text-[15px] leading-relaxed">
                  <div className="mb-3">
                    We focus <span className="text-amber-700 font-bold">100% on online retail</span>. No wasted onboarding or generic strategies. Our team understands how to move your needle.
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-amber-200/50 text-amber-800 border border-amber-300/40">
                      📈 Margin Economics
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-amber-50/60 text-amber-700 border border-amber-200/40">
                      🎯 Funnel Optimization
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Works Section */}
        <section ref={mobileSectionRef} className="relative z-10 w-full py-16 overflow-hidden bg-gradient-to-b from-white to-[#fafbfc]">
          {/* Section Header */}
          <div className="text-center mb-12 px-6 sm:px-8 lg:px-12">
            <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight mt-4">
              Our <span className="text-[#2443ab]">Works</span>
            </h2>
          </div>

          {/* Mockups Marquee */}
          <div className="relative w-full overflow-hidden pt-4 pb-16">
            {/* Edge Fades for Premium Design */}

            <div className="w-full animate-marquee-left flex gap-12 py-8">
              {/* Single map with duplicated items for infinite scroll */}
              {[...portfolioItems, ...portfolioItems].map((item, index) => (
                <div
                  key={index}
                  className="w-[240px] sm:w-[320px] shrink-0 group relative pb-8 transition-all duration-300 transform hover:scale-105"
                >
                  {/* Phone Mockup Frame */}
                  <div className="w-full aspect-[1/2] rounded-[36px] sm:rounded-[48px] bg-[#0c101a] p-2 sm:p-2.5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-[#1f293d] relative overflow-visible transition-all duration-300 group-hover:shadow-[0_40px_80px_-20px_rgba(36,67,171,0.4)] group-hover:border-[#2443ab]/50">
                    {/* Top Camera Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-5 sm:h-6 bg-[#0c101a] rounded-b-[14px] sm:rounded-b-[24px] z-30 flex items-center justify-center gap-1.5 sm:gap-2 pb-0.5 sm:pb-1">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-slate-900 border border-slate-800" />
                      <div className="w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-slate-900 border border-slate-800" />
                    </div>

                    {/* Inner Screen */}
                    <div className="w-full h-full rounded-[28px] sm:rounded-[38px] overflow-hidden bg-slate-950 relative border border-black/40">
                      {/* Long Scrolling Screenshot */}
                      <div className="w-full h-full overflow-y-auto no-scrollbar relative">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-auto object-cover object-top pointer-events-none select-none"
                        />
                      </div>
                    </div>

                    {/* Bottom Card Tag overlapping the bezel */}
                    <div className="absolute -bottom-8 left-3 right-3 sm:left-6 sm:right-6 bg-[#fafbfc] rounded-[18px] sm:rounded-[24px] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_40px_-5px_rgba(0,0,0,0.18)] border border-slate-200/80 z-30 transition-all duration-300 group-hover:bg-white">
                      <span className="text-xs sm:text-base font-extrabold text-[#0d1b3e] tracking-tight text-center">{item.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="relative z-10 w-full py-24 bg-gradient-to-b from-[#fafbfc] to-white border-b border-slate-100 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#ff477e]/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">

            {/* Badge & Header */}
            <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#2443ab] uppercase shadow-sm">
                <span>03. The Problem</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mt-2">
                Most Marketing Spend Doesn’t Fail Because of Bad Ideas. <br className="hidden md:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500">
                  It Fails Because of Fragmentation.
                </span>
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed pt-4">
                Your website vendor doesn’t talk to your ad agency. Your ad agency doesn’t know what your branding team shipped last quarter. Nobody owns the number that actually matters — <span className="text-[#0d1b3e] font-black underline decoration-rose-500 decoration-2">revenue</span>.
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

              {/* "From This" Card - Problem */}
              <div className="bg-gradient-to-br from-red-50/50 via-white to-white border border-red-100 rounded-[32px] p-8 sm:p-10 shadow-[0_15px_40px_rgba(239,68,68,0.03)] hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-black text-sm">
                      ✕
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-red-950 tracking-tight">
                      From This...
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Marketing spend with no clear line to ROI",
                      "Four or five disconnected vendors, each blaming the others",
                      "Leads coming in, but not converting",
                      "A website that looks fine but doesn’t generate enquiries",
                      "No one telling you what to fix next — just what to pay for next"
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm sm:text-[15px] font-semibold leading-relaxed">
                        <span className="text-red-500 shrink-0 mt-1">✕</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* "To This" Card - Solution */}
              <div className="bg-gradient-to-br from-emerald-50/60 via-white to-white border border-emerald-100 rounded-[32px] p-8 sm:p-10 shadow-[0_15px_40px_rgba(16,185,129,0.05)] hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-sm">
                      ✓
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-emerald-950 tracking-tight">
                      To This!
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "One team accountable for the entire growth number",
                      "Predictable, qualified leads instead of random spikes",
                      "A website built to convert, not just to exist",
                      "Lower cost per acquisition over time, not higher",
                      "A clear plan for what’s next — before you have to ask"
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-[15px] font-semibold leading-relaxed">
                        <span className="text-emerald-500 shrink-0 mt-1">✓</span>
                        <span className="bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* What We Do - Full-Stack Growth & Digital Architecture Section */}
        <section className="relative z-10 w-full py-24 bg-gradient-to-br from-indigo-100/40 via-purple-100/40 to-indigo-50/40 border-y border-slate-200/60 overflow-hidden">
          <div className="mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12">

            {/* Header container */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
              <div className="text-left max-w-2xl">
                {/* Badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-900 bg-white px-5 py-2.5 text-xs sm:text-sm font-extrabold tracking-[0.2em] text-slate-800 uppercase shadow-sm mb-3">
                  <span>WHAT WE OFFER</span>
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-[1.1]">
                  Full-Stack E-Commerce Growth, Engineered Under One Roof
                </h2>
              </div>
              <div className="lg:max-w-[280px] text-left lg:text-right mb-2">
                <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed">
                  From storefront builds to performance marketing — every lever that drives your online revenue, handled by one team.              </p>
              </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(280px,_auto)]">
              {services.map((service, index) => {
                let gridClass = "";
                let cardBg = "bg-white";
                let isSolidBrand = false;

                if (index === 0) {
                  // Web Dev: 1x1 Square Image
                  gridClass = "lg:col-start-1 lg:row-start-1 lg:col-span-1 lg:row-span-1 min-h-[260px]";
                } else if (index === 1) {
                  // WooCommerce: 1x1 Solid Blue Card
                  gridClass = "lg:col-start-2 lg:row-start-1 lg:col-span-1 lg:row-span-1 min-h-[260px]";
                  isSolidBrand = false;
                } else if (index === 2) {
                  // App Dev: 2x1 Wide Image Card
                  gridClass = "lg:col-start-3 lg:row-start-1 lg:col-span-2 lg:row-span-1 min-h-[310px]";
                } else if (index === 3) {
                  // Performance Ads: 1x2 Tall Vertical Card
                  gridClass = "lg:col-start-1 lg:row-start-2 lg:col-span-1 lg:row-span-2 min-h-[500px]";
                } else if (index === 4) {
                  // SEO: 2x1 Wide Dark Card
                  gridClass = "lg:col-start-2 lg:row-start-2 lg:col-span-2 lg:row-span-1 min-h-[310px]";
                } else if (index === 5) {
                  // Marketplace: 1x1 Square Image
                  gridClass = "lg:col-start-4 lg:row-start-2 lg:col-span-1 lg:row-span-1 min-h-[240px]";
                } else if (index === 6) {
                  // AI Integration: 2x1 Wide Image Card
                  gridClass = "lg:col-start-2 lg:row-start-3 lg:col-span-2 lg:row-span-1 min-h-[310px]";
                } else if (index === 7) {
                  // Creative Studio: 1x1 Solid Purple Card
                  gridClass = "lg:col-start-4 lg:row-start-3 lg:col-span-1 lg:row-span-1 min-h-[240px]";
                  isSolidBrand = false;
                }

                return (
                  <Link
                    key={index}
                    href={service.href}
                    className={`rounded-[32px] p-6 pb-1 border border-slate-100 shadow-lg hover:shadow-2xl hover:border-slate-200/80 transition-all duration-500 ease-out flex flex-col justify-between group relative overflow-hidden cursor-pointer transform-gpu will-change-transform text-left ${cardBg} ${gridClass}`}
                  >
                    {/* Image Background */}
                    <div
                      className="absolute inset-0 bg-[length:100%_100%] bg-center bg-no-repeat transition-transform duration-700 ease-out z-0 group-hover:scale-105 after:content-[''] after:absolute after:inset-0"
                      style={{ backgroundImage: `url('${service.bgImage}')` }}
                    />

                    {/* Content Wrapper */}
                    <div className="relative z-10 flex flex-col justify-end h-full w-full transform transition-transform duration-500 ease-out will-change-transform">

                      {/* Bottom Explore Topic button */}
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-black text-slate-800 bg-white/95 backdrop-blur-sm border border-slate-200/80 px-4 py-2 rounded-lg shadow-md group-hover:bg-[#0210d9] group-hover:text-white group-hover:border-[#0210d9] transition-all duration-300">
                          Explore Topic <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                      </div>

                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="relative z-10 py-32 bg-gradient-to-b from-white via-slate-50 to-white border-t border-slate-100/80 overflow-hidden">
          {/* Decorative background gradients */}
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.03)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.03)_0%,transparent_70%)] pointer-events-none" />

          <div className="max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-28">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] font-extrabold tracking-[0.25em] text-[#2443ab] uppercase shadow-sm mb-4">
                HOW WE WORK
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                Here’s Exactly How We Get You Results
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-base mt-4 leading-relaxed">
                We’re not going to throw a bunch of buzzwords at you. Here’s what actually happens when you work with us.
              </p>
            </div>

            {/* Alternating Steps Section */}
            <div className="space-y-32">

              {/* Step 1: Audit (Left Image, Right Content) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left: Image styled like top section of mockup */}
                <div className="lg:col-span-6 flex justify-center relative">
                  {/* Outer yellow-red gradient circle ring */}
                  <div className="w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-blue-500 p-1 flex items-center justify-center relative shadow-[0_20px_50px_rgba(13,27,62,0.15)] sm:shadow-[0_25px_60px_rgba(13,27,62,0.2)]">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-cover bg-center opacity-90 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop')` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                      {/* Laptop Mockup Overlay */}
                      <div className="absolute w-[80%] h-auto bottom-6 left-1/2 -translate-x-1/2 transform drop-shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1581291518655-9523c932dedf?q=80&w=800&auto=format&fit=crop" className="rounded-xl border border-white/60 shadow-lg object-cover" alt="Laptop Dashboard" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute top-[8%] left-[2%] bg-white rounded-full px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-[10px] font-black text-[#0d1b3e] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Certified Experts
                    </span>
                  </div>

                  <div className="absolute top-[20%] right-[-5%] bg-white rounded-full px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      100+ Client Reviews
                    </span>
                  </div>

                  <div className="absolute bottom-[20%] left-[-8%] bg-white rounded-full px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Mobile-friendly
                    </span>
                  </div>
                </div>

                {/* Right: Text Content */}
                <div className="lg:col-span-6 text-left space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[40px] font-black text-[#2443ab]/10 leading-none">01</span>
                    <span className="text-xs font-black text-[#2443ab] uppercase tracking-[0.2em]">Step One: Audit</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                    Audit: Finding Where Your Funnel Bleeds Money
                  </h3>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    First thing we do is go through your entire funnel with a fine-tooth comb. That means checking your traffic sources, how people move through checkout, whether your site’s loading fast enough, and where your ad budget’s actually going. By the end of this, we’ll know precisely where you’re bleeding money.
                  </p>
                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a8bc7] hover:bg-[#0a8bc7]/90 text-white text-xs font-bold rounded-full transition-all duration-300 shadow-md uppercase tracking-wider"
                    >
                      <span>Get in Touch</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Step 2: Strategy (Right Image, Left Content) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left: Text Content (order-2 lg:order-1) */}
                <div className="lg:col-span-6 text-left space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[40px] font-black text-[#2443ab]/10 leading-none">02</span>
                    <span className="text-xs font-black text-[#2443ab] uppercase tracking-[0.2em]">Step Two: Strategy</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                    Strategy: Customized Scale Architecture Built for You
                  </h3>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Now that we know the problem areas, we sit down and build a plan around your store specifically. This isn’t some recycled template we hand every client — your business has different customers, different margins, different goals, so the strategy reflects that.
                  </p>
                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#2443ab] hover:bg-[#2443ab]/90 text-white text-xs font-bold rounded-full transition-all duration-300 shadow-md uppercase tracking-wider"
                    >
                      <span>Build Your Strategy</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right: Image (order-1 lg:order-2) */}
                <div className="lg:col-span-6 flex justify-center relative order-1 lg:order-2">
                  {/* Double rounded rectangle layout like the woman holding tablet section */}
                  <div className="relative w-[280px] h-[360px] sm:w-[350px] sm:h-[450px]">
                    {/* Back decorative rectangle */}
                    <div className="absolute top-[8%] left-[-10%] w-[80%] h-[90%] bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-100 rounded-[32px] -z-10 shadow-inner" />

                    {/* Main Image Frame with smooth rounded corners */}
                    <div className="w-full h-full rounded-[40px] overflow-hidden shadow-[0_25px_55px_rgba(13,27,62,0.18)] border border-slate-100 relative bg-slate-100">
                      <Image
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
                        alt="Digital Strategy Planning Board"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Small plant pot decorative element */}
                    <div className="absolute bottom-[-15px] left-[-25px] w-20 h-20 drop-shadow-xl z-25">
                      <img src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-contain rounded-full bg-white p-1 border border-slate-200/60" alt="Plant pot" />
                    </div>

                    {/* Floating Pill: Digital Strategy */}
                    <div className="absolute top-[12%] left-[-15%] bg-white rounded-full px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-[10px] font-black text-rose-500 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        Digital Strategy
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Execute (Left Image, Right Content) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left: Image */}
                <div className="lg:col-span-6 flex justify-center relative">
                  <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 flex items-center justify-center shadow-[0_20px_50px_rgba(13,27,62,0.15)] sm:shadow-[0_25px_60px_rgba(13,27,62,0.2)]">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-cover bg-center opacity-90 scale-105" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop')` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                      {/* Code overlay popup card */}
                      <div className="absolute bottom-8 left-6 right-6 bg-[#0a0f1d]/90 backdrop-blur-md rounded-2xl p-4 border border-slate-800 text-left font-mono text-[9px] text-emerald-400 shadow-xl max-w-[80%] mx-auto">
                        <div className="flex gap-1.5 mb-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-white font-bold mb-1">deploy_storefront.yml</p>
                        <p className="text-slate-400">✓ build assets [production]</p>
                        <p className="text-[#2443ab]">✓ api sync complete [success]</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Pill: Development */}
                  <div className="absolute top-[10%] right-[5%] bg-white rounded-full px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" />
                      In-House Build
                    </span>
                  </div>
                </div>

                {/* Right: Text Content */}
                <div className="lg:col-span-6 text-left space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[40px] font-black text-[#2443ab]/10 leading-none">03</span>
                    <span className="text-xs font-black text-[#2443ab] uppercase tracking-[0.2em]">Step Three: Execute</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                    Execute: Handcrafted Code, Zero Outsourcing
                  </h3>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    This is where our team actually gets to work. Everything gets built, launched, and tested in-house — we don’t hand things off to freelancers or third-party vendors halfway through. You’re dealing with the same developers and marketing specialists from day one.
                  </p>
                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#40159e] hover:bg-[#40159e]/90 text-white text-xs font-bold rounded-full transition-all duration-300 shadow-md uppercase tracking-wider"
                    >
                      <span>Get in Touch</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Step 4: Report (Right Image, Left Content) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left: Text Content (order-2 lg:order-1) */}
                <div className="lg:col-span-6 text-left space-y-6 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[40px] font-black text-[#2443ab]/10 leading-none">04</span>
                    <span className="text-xs font-black text-[#2443ab] uppercase tracking-[0.2em]">Step Four: Report</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                    Report: Clean Attribution Data and Real Accountability
                  </h3>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    You’ll get updates every week with proper KPI metrics. Just straight answers on what’s working, what isn’t, and where your money’s actually going, without the fluff or vanity statistics.
                  </p>
                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d1b3e] hover:bg-[#0d1b3e]/90 text-white text-xs font-bold rounded-full transition-all duration-300 shadow-md uppercase tracking-wider"
                    >
                      <span>Request a Report</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Right: Image (order-1 lg:order-2) */}
                <div className="lg:col-span-6 flex justify-center relative order-1 lg:order-2">
                  <div className="relative w-[280px] h-[360px] sm:w-[350px] sm:h-[450px]">
                    <div className="absolute top-[8%] right-[-10%] w-[80%] h-[90%] bg-gradient-to-br from-indigo-100 to-indigo-50 border border-indigo-100 rounded-[32px] -z-10 shadow-inner" />

                    <div className="w-full h-full rounded-[40px] overflow-hidden shadow-[0_25px_55px_rgba(13,27,62,0.18)] border border-slate-100 relative bg-slate-100">
                      <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
                        alt="Analytics and Reporting"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Floating Pill: Transparent Reporting */}
                    <div className="absolute top-[12%] right-[-15%] bg-white rounded-full px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
                      <span className="text-[10px] font-black text-indigo-500 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        Weekly ROI Reports
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Shopify Trust Badge Section */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-[#fafbfc] via-white to-[#fafbfc] overflow-hidden">
          {/* Glow Effects */}
          <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,128,96,0.06)_0%,transparent_70%)] pointer-events-none blur-[40px]" />
          <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none blur-[40px]" />

          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

            {/* Main Glorified Glass Container */}
            <div className="bg-white/90 border border-slate-100/90 rounded-[40px] sm:rounded-[64px] p-8 sm:p-12 lg:p-16 backdrop-blur-xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
              {/* Subtle inner card radial gradients */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,128,96,0.03)_0%,transparent_50%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.03)_0%,transparent_50%)] pointer-events-none" />

              {/* Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Column: Title and details */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5 flex flex-col text-left space-y-6"
                >
                  {/* Badge */}
                  <div className="self-start inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.15em] text-emerald-600 uppercase shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Shopify Plus Partner</span>
                  </div>

                  {/* H2 Title with beautiful gradient */}
                  <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-[#0d1b3e]">
                    Built for <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">Growth.</span><br />
                    Backed by <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Experience.</span>
                  </h2>

                  {/* Subheading */}
                  <p className="text-slate-500 font-semibold text-base sm:text-lg leading-relaxed max-w-md">
                    We architect next-generation enterprise stores optimized for speed, conversion, and global scale.
                  </p>

                  {/* Bottom Badge */}
                  <div className="self-start inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2.5 text-[10px] sm:text-xs font-black text-blue-600 border border-blue-100 tracking-wider uppercase">
                    <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Enterprise Grade Solutions</span>
                  </div>
                </motion.div>

                {/* Middle Column: Shopify Logo Illustration (Glorified rotating aura) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-3 flex justify-center relative"
                >
                  {/* Outer spin gradient rings */}
                  <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-emerald-500/10 animate-spin-slow pointer-events-none opacity-40" />
                  <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full border border-dashed border-blue-500/10 animate-spin-reverse pointer-events-none opacity-30" />

                  {/* Pulsing Backlight */}
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-40 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,128,96,0.25)_0%,transparent_70%)] pointer-events-none filter blur-[12px]"
                  />

                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center bg-white rounded-full shadow-[0_15px_45px_rgba(0,128,96,0.12)] border border-slate-100 p-8 group hover:scale-105 transition-transform duration-500">
                    {/* Conic rotating border overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <Image
                      src="/shopify-plus-logo.png"
                      alt="Shopify Plus Partner"
                      width={160}
                      height={160}
                      className="object-contain relative z-10 animate-bounce-slow"
                    />
                  </div>
                </motion.div>

                {/* Right Column: Three lists with circular line icon badges (Glorified and Color Coded) */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-4 flex flex-col gap-10"
                >
                  {/* Item 1 - Gold/Amber theme */}
                  <div className="group relative pl-16">
                    <div className="absolute left-0 top-0.5 w-11 h-11 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.08)] group-hover:scale-110 group-hover:bg-amber-500/15 transition-all duration-300">
                      <span className="font-black text-lg">$</span>
                    </div>
                    <h4 className="text-xl font-bold text-[#0d1b3e] mb-1.5 group-hover:text-amber-600 transition-colors duration-300">
                      8-Figure Brand Experience
                    </h4>
                    <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                      Engineered high-converting systems driving over $100M+ in cumulative ecommerce revenue.
                    </p>
                  </div>

                  {/* Item 2 - Emerald/Green theme */}
                  <div className="group relative pl-16">
                    <div className="absolute left-0 top-0.5 w-11 h-11 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.08)] group-hover:scale-110 group-hover:bg-emerald-500/15 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.173-.439.817-.439.99 0l3.028 7.636 8.243.68c.478.04.667.627.312.928l-6.177 5.23 1.83 8.045c.106.467-.391.828-.821.57l-7.14-4.225-7.14 4.225c-.43.257-.927-.103-.821-.57l1.83-8.045-6.176-5.23c-.355-.3-.166-.888.312-.928l8.243-.68 3.029-7.636Z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-[#0d1b3e] mb-1.5 group-hover:text-emerald-600 transition-colors duration-300">
                      Top 1% Ecommerce Agency
                    </h4>
                    <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                      Elite certified specialists leading custom architecture, headless commerce, and deep integrations.
                    </p>
                  </div>

                  {/* Item 3 - Blue/Cyan theme */}
                  <div className="group relative pl-16">
                    <div className="absolute left-0 top-0.5 w-11 h-11 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.08)] group-hover:scale-110 group-hover:bg-blue-500/15 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-[#0d1b3e] mb-1.5 group-hover:text-blue-600 transition-colors duration-300">
                      Google & Meta Partner
                    </h4>
                    <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                      Certified growth partners scaling media buying and CRM setups to maximize digital marketing ROI.
                    </p>
                  </div>

                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* The Offer / Digital Growth Audit Section */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-[#fafbfc] via-[#f1f5f9] to-[#fafbfc] text-slate-800 overflow-hidden border-t border-b border-slate-100">
          {/* Soft Glow Effects */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,transparent_70%)] pointer-events-none blur-[60px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.06)_0%,transparent_70%)] pointer-events-none blur-[60px]" />

          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-sky-600 uppercase shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                <span>THE OFFER</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] text-[#0d1b3e]"
              >
                The{" "}
                <span className="bg-gradient-to-r from-sky-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                  Digital Growth Audit
                </span>
              </motion.h2>

              {/* Body Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-slate-500 font-semibold text-base sm:text-xl leading-relaxed max-w-3xl mx-auto"
              >
                We’ll identify the three biggest leaks preventing your business from generating more revenue online — and hand you a plan to fix them, whether or not you ever work with us.
              </motion.p>
            </div>

            {/* What you'll get Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {[
                {
                  title: "A full marketing funnel audit",
                  desc: "Deconstruct your entire customer acquisition path and find drop-offs.",
                  icon: (
                    <svg className="w-6 h-6 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 3l9 9-9 9M12 3L3 12l9 9" />
                    </svg>
                  ),
                },
                {
                  title: "A paid advertising audit",
                  desc: "Analyze structure, targeting, and creative performance to stop budget waste.",
                  icon: (
                    <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  ),
                },
                {
                  title: "A website & conversion audit",
                  desc: "Speed diagnostics, UX leaks, and friction points blocking conversions.",
                  icon: (
                    <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: "A competitor benchmark",
                  desc: "See exactly where you stand against market leaders in search and traffic.",
                  icon: (
                    <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                    </svg>
                  ),
                },
                {
                  title: "Your 3 highest-impact growth opportunities, ranked",
                  desc: "Clear prioritization of the highest leverage changes for immediate lift.",
                  icon: (
                    <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  ),
                },
                {
                  title: "A 30-day action plan",
                  desc: "A step-by-step roadmap to implement the findings and scale revenue.",
                  icon: (
                    <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ),
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group relative bg-white border border-slate-100 hover:border-slate-200/80 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/30"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#0d1b3e] tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed font-semibold">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Value comparison & CTA Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-2xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col items-center gap-6"
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <span className="text-slate-400 font-bold text-sm tracking-wider uppercase">Value:</span>
                <span className="text-slate-400/80 font-bold line-through text-lg">₹25,000</span>
                <span className="hidden sm:inline text-slate-300 font-bold">•</span>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider text-emerald-600 uppercase">
                  Today: Free for qualified businesses
                </span>
              </div>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white text-sm font-extrabold rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(14,165,233,0.15)] hover:shadow-[0_15px_30px_rgba(14,165,233,0.3)] hover:-translate-y-0.5 uppercase tracking-wider"
              >
                <span>Get My Free Growth Audit →</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-[#fafbfc] via-[#f8fafc] to-white border-b border-slate-100 overflow-hidden">
          {/* Subtle decoration elements */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
          <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_60%)] pointer-events-none blur-[60px]" />
          <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.04)_0%,transparent_60%)] pointer-events-none blur-[60px]" />

          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-150 bg-blue-50/80 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>CASE STUDIES</span>
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight leading-none">
                Real Businesses. Real Numbers.<br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">Real Proof.</span>
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {[
                {
                  client: "TruBoy BBQ",
                  stat: "200%",
                  statLabel: "Increase in AOV",
                  problem: "Strong product, inconsistent online discovery, and low repeat order value.",
                  action: "Rebuilt their digital presence and ran targeted campaigns focused on order value, not just traffic.",
                  result: "200% increase in average order value, with measurably more customers discovering the brand online.",
                  badgeBg: "bg-amber-50 text-amber-700 border-amber-100",
                  themeColor: "group-hover:border-amber-400 group-hover:shadow-[0_20px_50px_rgba(245,158,11,0.08)]",
                  statBg: "bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 text-white shadow-amber-500/20"
                },
                {
                  client: "Nayantara",
                  stat: "305%",
                  statLabel: "Growth in First-Time Users",
                  problem: "Limited visibility among first-time buyers in a competitive fashion category.",
                  action: "Built tailored digital marketing strategies focused on new-customer acquisition.",
                  result: "305% growth in first-time users, with stronger long-term customer relationships.",
                  badgeBg: "bg-rose-50 text-rose-700 border-rose-100",
                  themeColor: "group-hover:border-rose-400 group-hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)]",
                  statBg: "bg-gradient-to-br from-rose-500 via-rose-650 to-red-600 text-white shadow-rose-500/20"
                },
                {
                  client: "Creative Ecotech",
                  stat: "90%",
                  statLabel: "Organic Traffic Growth",
                  problem: "Organic search wasn't bringing qualified B2B traffic.",
                  action: "Built targeted content pages with clear CTAs.",
                  result: "90% growth in organic traffic.",
                  badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
                  themeColor: "group-hover:border-emerald-400 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]",
                  statBg: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 text-white shadow-emerald-500/20"
                },
                {
                  client: "Jet Choice",
                  stat: "ROI Boost",
                  statLabel: "Campaign Performance Lift",
                  problem: "Performance marketing spend wasn’t translating into measurable ROI.",
                  action: "Rebuilt Google & Meta campaign structure around ROI, not just reach.",
                  result: "Significant, measurable improvement in ROI.",
                  badgeBg: "bg-sky-50 text-sky-700 border-sky-100",
                  themeColor: "group-hover:border-sky-400 group-hover:shadow-[0_20px_50px_rgba(14,165,233,0.08)]",
                  statBg: "bg-gradient-to-br from-sky-500 via-sky-600 to-indigo-600 text-white shadow-sky-500/20"
                }
              ].map((cs, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`group bg-white border border-slate-200/60 rounded-3xl p-8 shadow-[0_15px_40px_rgba(0,0,0,0.015)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row gap-6 relative overflow-hidden ${cs.themeColor}`}
                >
                  {/* Content Left */}
                  <div className="flex-1 space-y-5 relative z-10">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black tracking-wider uppercase ${cs.badgeBg}`}>
                        {cs.client}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* Problem */}
                      <div className="space-y-1">
                        <span className="block text-[10px] font-black text-slate-400 tracking-wider uppercase">Problem</span>
                        <p className="text-slate-650 text-sm font-semibold leading-relaxed">{cs.problem}</p>
                      </div>

                      {/* What We Changed */}
                      <div className="space-y-1">
                        <span className="block text-[10px] font-black text-blue-500/80 tracking-wider uppercase">What We Changed</span>
                        <p className="text-slate-700 text-sm font-semibold leading-relaxed">{cs.action}</p>
                      </div>

                      {/* Result */}
                      <div className="space-y-1 pt-3 border-t border-slate-100">
                        <span className="block text-[10px] font-black text-emerald-600 tracking-wider uppercase">Result</span>
                        <p className="text-[#0d1b3e] text-sm sm:text-base font-bold leading-relaxed">{cs.result}</p>
                      </div>
                    </div>
                  </div>

                  {/* Stat Display Right */}
                  <div className={`sm:w-36 flex flex-col items-center justify-center text-center p-6 rounded-2xl flex-shrink-0 relative z-10 transition-all duration-300 shadow-md ${cs.statBg}`}>
                    <span className="text-3xl sm:text-4xl font-black tracking-tight">{cs.stat}</span>
                    <span className="text-[10px] font-bold mt-1.5 uppercase tracking-wider leading-tight opacity-90">{cs.statLabel}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-white to-[#fafbfc] border-t border-slate-100 overflow-hidden">
          {/* Subtle dot grid background texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0" />

          <div className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12 mb-12">

            {/* Header Row */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 max-w-6xl mx-auto">
              <div className="text-left space-y-3">
                <span className="block text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#2443ab] uppercase">TESTIMONIALS</span>
                <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                  Founders & CMOs<br />Love Us.
                </h2>
              </div>


            </div>

          </div>

          {/* Testimonials Grid */}
          <div className="relative z-10 mx-auto max-w-[1700px] px-6 sm:px-8 lg:px-12 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
              {testimonials.map((t, idx) => {
                const accent = [
                  { cardBorder: "border-blue-200/80 border-t-[4px] border-t-blue-500", gradient: "from-blue-400 to-indigo-600", quoteColor: "text-blue-500/10", glowColor: "from-blue-500/40 via-blue-50/10 to-white" },
                  { cardBorder: "border-purple-200/80 border-t-[4px] border-t-purple-500", gradient: "from-purple-400 to-violet-600", quoteColor: "text-purple-500/10", glowColor: "from-purple-500/40 via-purple-50/10 to-white" },
                  { cardBorder: "border-teal-200/80 border-t-[4px] border-t-teal-500", gradient: "from-teal-400 to-cyan-600", quoteColor: "text-teal-500/10", glowColor: "from-teal-500/40 via-teal-50/10 to-white" },
                  { cardBorder: "border-rose-200/80 border-t-[4px] border-t-rose-500", gradient: "from-rose-400 to-pink-600", quoteColor: "text-rose-500/10", glowColor: "from-rose-500/40 via-rose-50/10 to-white" }
                ][idx % 4];

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    whileHover={{ y: -6, boxShadow: "0 25px 50px rgba(36,67,171,0.06)" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`bg-white rounded-[28px] p-6 sm:p-8 border shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between text-left transition-all duration-500 hover:border-slate-300 relative overflow-hidden group ${accent.cardBorder}`}
                  >
                    {/* Hover Top-Right Glow */}
                    <div className={`absolute top-0 right-0 w-56 h-56 bg-gradient-to-bl ${accent.glowColor} rounded-bl-[160px] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 z-0`} />

                    {/* Oversized Quote Mark Background */}
                    <span className="absolute -top-1 right-4 text-[9rem] font-black select-none pointer-events-none leading-none opacity-[0.06] text-slate-400 font-serif z-0">
                      “
                    </span>

                    <div className="flex-grow flex flex-col justify-between relative z-10">
                      <div>
                        {/* Rating & Metric Header */}
                        <div className="flex items-center justify-between gap-4">
                          {/* Rating Pill */}
                          <div className="inline-flex items-center gap-0.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                            {Array.from({ length: t.stars }).map((_, i) => (
                              <span key={i} className="text-amber-500 text-xs sm:text-sm font-bold">★</span>
                            ))}
                          </div>
                          {/* Metric Pill */}
                          {t.metric && (
                            <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${t.metricColor} shadow-[0_1px_2px_rgba(0,0,0,0.02)]`}>
                              {t.metric}
                            </div>
                          )}
                        </div>
                        {/* Quote */}
                        <p className="text-[14px] sm:text-[15px] text-slate-700 font-medium leading-[1.7] mt-6 italic">
                          "{t.quote}"
                        </p>
                      </div>

                      {/* Profile Handoff */}
                      <div className="flex items-center gap-4 mt-8 pt-5 border-t border-slate-100/80">
                        {/* Refined gradient avatar with white border ring */}
                        <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${accent.gradient} flex items-center justify-center text-sm font-bold text-white shadow-md ring-2 ring-white`}>
                          {t.avatarText}
                        </div>
                        <div>
                          <h4 className="text-[14px] font-extrabold text-[#0d1b3e] tracking-tight">{t.author}</h4>
                          <span className="block text-[11px] font-semibold text-slate-400 mt-0.5">{t.role}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trusted by Category Kings Section (Grid Format) */}
        <section className="relative z-10 py-16 bg-[#fafbfc] border-t border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center mb-12">
            {/* Header Icon */}
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 bg-blue-50/50 rounded-full flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m0 0a8.967 8.967 0 0 1-2.29-1.052 3 3 0 0 1 4.838-1.752m-1.608 2.804a.11.11 0 0 1-.014-.002 4.902 4.902 0 0 1-.59-1.993c0-.306.013-.61.038-.91M4 11a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm8-3a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm8 3a3 3 0 1 1-3-3 3 3 0 0 1 3 3Zm-4 9.28a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72M6 16.28a9.094 9.094 0 0 0-3.741-.479 3 3 0 0 1 4.682-2.72" />
                </svg>
              </div>
            </div>

            <span className="block text-sm font-extrabold text-[#2443ab] tracking-wide mb-1 uppercase">Our Clients</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight">
              75+ Active Clients
            </h2>
          </div>

          {/* Desktop Grid Container */}
          <div className="hidden md:block max-w-full mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                7, 33, 28, 21, 14,
                30, 20, 22, 15, 12,
                1, 3, 4, 5, 6,
                8, 10, 13, 16, 17,
                18, 19, 23, 24, 25,
                26, 27, 29, 31, 32,
              ].map((id) => (
                <div
                  key={id}
                  className="bg-white border border-slate-400 hover:border-[#2443ab] hover:bg-[#2443ab]/[0.01] rounded-xl p-4 flex items-center justify-center h-24 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 hover:scale-[1.03]"
                >
                  <img
                    src={`/logos/${id}.jpg`}
                    alt={`Client Logo ${id}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Triple Marquee (only visible on mobile screens < 768px) */}
          <div className="block md:hidden space-y-4 overflow-hidden max-w-full relative">
            {/* Row 1: Right to Left */}
            <div className="relative w-full overflow-hidden">
              <div className="animate-marquee-left flex gap-3 py-1">
                {[
                  7, 33, 28, 21, 14, 30, 20, 22, 15, 12,
                  7, 33, 28, 21, 14, 30, 20, 22, 15, 12
                ].map((id, index) => (
                  <div
                    key={`mob-r1-${id}-${index}`}
                    className="bg-white border border-slate-400 rounded-xl p-3 flex items-center justify-center h-20 w-32 shrink-0 shadow-sm"
                  >
                    <img
                      src={`/logos/${id}.jpg`}
                      alt={`Client Logo ${id}`}
                      className="max-h-full max-w-full object-contain pointer-events-none select-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Left to Right */}
            <div className="relative w-full overflow-hidden">
              <div className="animate-marquee-right flex gap-3 py-1">
                {[
                  1, 3, 4, 5, 6, 8, 10, 13, 16, 17,
                  1, 3, 4, 5, 6, 8, 10, 13, 16, 17
                ].map((id, index) => (
                  <div
                    key={`mob-r2-${id}-${index}`}
                    className="bg-white border border-slate-400 rounded-xl p-3 flex items-center justify-center h-20 w-32 shrink-0 shadow-sm"
                  >
                    <img
                      src={`/logos/${id}.jpg`}
                      alt={`Client Logo ${id}`}
                      className="max-h-full max-w-full object-contain pointer-events-none select-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Left to Right */}
            <div className="relative w-full overflow-hidden">
              <div className="animate-marquee-left flex gap-3 py-1">
                {[
                  18, 19, 23, 24, 25, 26, 27, 29, 31, 32,
                  18, 19, 23, 24, 25, 26, 27, 29, 31, 32
                ].map((id, index) => (
                  <div
                    key={`mob-r3-${id}-${index}`}
                    className="bg-white border border-slate-400 rounded-xl p-3 flex items-center justify-center h-20 w-32 shrink-0 shadow-sm"
                  >
                    <img
                      src={`/logos/${id}.jpg`}
                      alt={`Client Logo ${id}`}
                      className="max-h-full max-w-full object-contain pointer-events-none select-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="relative z-10 py-32 bg-white border-t border-slate-100 overflow-hidden">
          <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-[#2443ab]" />
                <span className="block text-xs font-black tracking-[0.25em] text-[#2443ab] uppercase">WHY US</span>
                <span className="w-8 h-[2px] bg-[#2443ab]" />
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-[-0.02em] leading-tight">
                Why Brands Choose Digital Edge 360<br />Over Other Agencies
              </h2>
            </motion.div>

            {/* Comparison Table - Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="hidden md:block w-full bg-[#fafbfc] rounded-[32px] border border-slate-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-visible mt-8"
            >
              <table className="w-full border-collapse text-left table-fixed">
                <thead>
                  <tr className="border-b border-slate-200/60">
                    <th className="py-10 px-8 text-[13px] font-bold text-slate-400 uppercase tracking-widest w-[20%]">Features</th>
                    {/* Winning Column Header with badge */}
                    <th className="py-10 px-8 bg-[#2443ab] text-white relative w-[32%] rounded-t-[24px] shadow-[0_-10px_25px_rgba(36,67,171,0.1)]">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#2443ab] text-[9px] font-black tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-blue-200 flex items-center gap-1 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-[#2443ab]">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <span>OUR APPROACH</span>
                      </div>
                      <span className="block text-base font-black tracking-widest uppercase text-center mt-2.5">Digital Edge 360</span>
                    </th>
                    <th className="py-10 px-8 text-[13px] font-semibold text-slate-400 uppercase tracking-widest w-[24%]">Typical Agency</th>
                    <th className="py-10 px-8 text-[13px] font-semibold text-slate-400 uppercase tracking-widest w-[24%]">Freelancers / Offshore</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/50">
                  {[
                    {
                      feature: "Campaign strategy",
                      us: {
                        title: "Built Around Profit, Not Clicks",
                        desc: "We structure campaigns around your margins and AOV — not a generic \"boost sales\" template applied to every client."
                      },
                      typical: {
                        title: "Same Playbook for Everyone",
                        desc: "Runs the same ad structure for a store as for a service business — traffic goes up, profitability doesn't."
                      },
                      freelance: {
                        title: "Optimizes for Cheap Clicks",
                        desc: "Chases low cost-per-click with no understanding of what a sale actually costs you to fulfil."
                      }
                    },
                    {
                      feature: "Store performance",
                      us: {
                        title: "We Fix the Store, Not Just the Ads",
                        desc: "Checkout flow, cart abandonment, and product page conversion — built and improved by the same team running your ads."
                      },
                      typical: {
                        title: "Disconnected Web Team",
                        desc: "Hands you off to a separate team with no coordination between what the ads promise and what the site delivers."
                      },
                      freelance: {
                        title: "Portfolio-Ready, Not Conversion-Tested",
                        desc: "Builds a store that looks good but was never stress-tested for real checkout drop-off."
                      }
                    },
                    {
                      feature: "Attribution & reporting",
                      us: {
                        title: "Profitability by Product",
                        desc: "We track cost of acquisition against real product profitability, so you know which SKUs are worth scaling."
                      },
                      typical: {
                        title: "One Blended ROAS Number",
                        desc: "Reports overall ROAS with no breakdown by product — a bestseller and a loss-leader look identical."
                      },
                      freelance: {
                        title: "No Attribution Setup",
                        desc: "You find out a product line is unprofitable only after months of spend."
                      }
                    }
                  ].map((row, rIdx) => {
                    const isLastRow = rIdx === 2;
                    const bgClass = rIdx % 2 === 1 ? "bg-slate-50/20" : "bg-white";
                    return (
                      <tr key={rIdx} className={`${bgClass} hover:bg-slate-50/30 transition-colors`}>
                        {/* Feature name column */}
                        <td className="py-12 px-8 text-[17px] font-bold text-[#0d1b3e] align-top">{row.feature}</td>

                        {/* Winning Column (Us) */}
                        <td className={`py-12 px-8 bg-[#2443ab] text-white align-top shadow-[0_15px_35px_rgba(36,67,171,0.12)] relative ${isLastRow ? "rounded-b-[24px]" : ""}`}>
                          <div className="flex gap-4">
                            <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#2443ab] font-bold text-xs shadow-sm">✓</span>
                            <div>
                              <p className="font-extrabold text-white text-base sm:text-lg tracking-tight">{row.us.title}</p>
                              <p className="text-[14px] sm:text-[15px] text-white/85 font-medium leading-[1.6] mt-2">{row.us.desc}</p>
                            </div>
                          </div>
                        </td>

                        {/* Typical Agency column */}
                        <td className="py-12 px-8 align-top">
                          <div className="flex gap-4">
                            <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-50/80 text-rose-500/70 font-bold text-xs border border-rose-100/50">✕</span>
                            <div>
                              <p className="font-semibold text-slate-500 text-base sm:text-lg tracking-tight">{row.typical.title}</p>
                              <p className="text-[14px] sm:text-[15px] text-[#6b7280] font-medium leading-[1.6] mt-2">{row.typical.desc}</p>
                            </div>
                          </div>
                        </td>

                        {/* Freelancer column */}
                        <td className="py-12 px-8 align-top">
                          <div className="flex gap-4">
                            <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-50/80 text-rose-500/70 font-bold text-xs border border-rose-100/50">✕</span>
                            <div>
                              <p className="font-semibold text-slate-500 text-base sm:text-lg tracking-tight">{row.freelance.title}</p>
                              <p className="text-[14px] sm:text-[15px] text-[#6b7280] font-medium leading-[1.6] mt-2">{row.freelance.desc}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>

            {/* Comparison Cards - Mobile */}
            <div className="block md:hidden space-y-12">
              {[
                {
                  feature: "Campaign strategy",
                  us: {
                    title: "Built Around Profit, Not Clicks",
                    desc: "We structure campaigns around your margins and AOV — not a generic \"boost sales\" template applied to every client."
                  },
                  typical: {
                    title: "Same Playbook for Everyone",
                    desc: "Runs the same ad structure for a store as for a service business — traffic goes up, profitability doesn't."
                  },
                  freelance: {
                    title: "Optimizes for Cheap Clicks",
                    desc: "Chases low cost-per-click with no understanding of what a sale actually costs you to fulfil."
                  }
                },
                {
                  feature: "Store performance",
                  us: {
                    title: "We Fix the Store, Not Just the Ads",
                    desc: "Checkout flow, cart abandonment, and product page conversion — built and improved by the same team running your ads."
                  },
                  typical: {
                    title: "Disconnected Web Team",
                    desc: "Hands you off to a separate team with no coordination between what the ads promise and what the site delivers."
                  },
                  freelance: {
                    title: "Portfolio-Ready, Not Conversion-Tested",
                    desc: "Builds a store that looks good but was never stress-tested for real checkout drop-off."
                  }
                },
                {
                  feature: "Attribution & reporting",
                  us: {
                    title: "Profitability by Product",
                    desc: "We track cost of acquisition against real product profitability, so you know which SKUs are worth scaling."
                  },
                  typical: {
                    title: "One Blended ROAS Number",
                    desc: "Reports overall ROAS with no breakdown by product — a bestseller and a loss-leader look identical."
                  },
                  freelance: {
                    title: "No Attribution Setup",
                    desc: "You find out a product line is unprofitable only after months of spend."
                  }
                }
              ].map((row, rIdx) => (
                <div key={rIdx} className="space-y-4">
                  {/* Feature Label Header */}
                  <h3 className="text-base font-extrabold text-[#0d1b3e] px-2 border-l-4 border-[#2443ab]">
                    {row.feature}
                  </h3>

                  <div className="space-y-3.5">
                    {/* Winning Column (Us) Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="p-6 bg-[#2443ab] text-white rounded-3xl shadow-lg border border-[#2443ab] relative overflow-hidden"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-black tracking-widest uppercase bg-white text-[#2443ab] px-3 py-1 rounded-full border border-blue-200">
                          DIGITAL EDGE 360
                        </span>
                        <span className="w-6 h-6 rounded-full bg-white text-[#2443ab] flex items-center justify-center font-bold text-xs shadow-sm">✓</span>
                      </div>
                      <h4 className="font-extrabold text-base text-white tracking-tight">{row.us.title}</h4>
                      <p className="text-xs text-white/80 font-medium mt-1.5 leading-relaxed">{row.us.desc}</p>
                    </motion.div>

                    {/* Typical Agency Card */}
                    <div className="p-6 bg-white rounded-3xl border border-slate-200/60 shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                          TYPICAL AGENCY
                        </span>
                        <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500/70 flex items-center justify-center font-bold text-xs border border-rose-100/50">✕</span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-600 tracking-tight">{row.typical.title}</h4>
                      <p className="text-xs text-[#6b7280] mt-1.5 leading-relaxed font-medium">{row.typical.desc}</p>
                    </div>

                    {/* Freelancers / Offshore Card */}
                    <div className="p-6 bg-white rounded-3xl border border-slate-200/60 shadow-sm">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">
                          FREELANCERS / OFFSHORE
                        </span>
                        <span className="w-5 h-5 rounded-full bg-rose-50 text-rose-500/70 flex items-center justify-center font-bold text-xs border border-rose-100/50">✕</span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-600 tracking-tight">{row.freelance.title}</h4>
                      <p className="text-xs text-[#6b7280] mt-1.5 leading-relaxed font-medium">{row.freelance.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-[#fafbfc] to-white border-t border-slate-100 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-16"
            >
              <span className="block text-[30px] font-extrabold text-[#2443ab] tracking-[0.25em] uppercase mb-3">FAQS</span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
            </motion.div>

            {/* Accordion List */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="space-y-4"
            >
              {faqItems.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border-b border-slate-100 pb-4 transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between py-4 text-left group focus:outline-none"
                    >
                      <span className="text-base sm:text-lg font-bold text-[#0d1b3e] group-hover:text-[#2443ab] transition-colors duration-200">
                        {item.question}
                      </span>
                      <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#2443ab]/5 group-hover:text-[#2443ab] group-hover:border-[#2443ab]/10 transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0
                      }}
                      transition={{
                        height: { duration: 0.35, ease: "easeInOut" },
                        opacity: { duration: 0.25, ease: "easeInOut" }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-4 text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

          </div>
        </section>

        {/* Final CTA Section */}
        <section id="strategy-call" className="relative z-10 mx-auto w-full px-6 sm:px-8 lg:px-12 py-24 bg-white border-t border-slate-100">

          {/* Container */}
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">

            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-900 bg-white px-4 py-2 text-[9px] font-extrabold tracking-[0.2em] text-slate-800 uppercase shadow-sm mb-6">
              <span>LIMITED SPOTS AVAILABLE</span>
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
              Ready to see where you're leaving revenue on the table?
            </h2>

            {/* Subheading */}
            <p className="max-w-2xl text-sm sm:text-base text-slate-400 font-semibold leading-relaxed mt-6">
              Get a free audit of your store, ads, and growth funnel — no commitment, just a clear picture.
            </p>

            {/* CTA Link Button */}
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 mt-8 bg-[#2443ab] hover:bg-[#1546b3] text-white text-xs font-extrabold rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 flex-shrink-0 uppercase tracking-wider"
            >
              <span>Get My Free Growth Audit</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>

          </div>
        </section>
        {/* Trust line/images beneath button */}
        <div className="flex flex-wrap items-center bg-white justify-center gap-32 opacity-95 transition-opacity duration-300">
          <img src="/brand-logos/shopify-plus.png" alt="Shopify Plus Certified" className="h-20 w-auto object-contain" />
          <img src="/brand-logos/google-partner.png" alt="Google Premier Partner" className="h-20 w-auto object-contain" />
          <img src="/brand-logos/meta-logo.png" alt="Meta Business Partner" className="h-20 w-auto object-contain" />
          <img src="/brand-logos/iso.png" alt="ISO 27001 Certified" className="h-20 w-auto object-contain" />
        </div>
      </div>
    </>
  );
}
