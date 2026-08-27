"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandLogosList } from "@/data";
import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import AnimatedWords from "@/components/AnimatedWords";
import Marquee from "react-fast-marquee";
import { Rocket, Search, Puzzle, Zap, Code, Shield, ChevronRight, Globe, Layers, Settings, Sparkles, Smartphone, Cpu, ArrowRight } from "lucide-react";
import ArchitectureTimeline from "@/components/ArchitectureTimeline";

const webDevShowcases = [
  {
    name: "Likeson",
    link: "/company-details/likeson",
    image: "/brand-card-images/likeson.jpg",
    logo: "/logos/likeson.jpg"
  },
  {
    name: "OmniAstra",
    link: "/company-details/omniastra",
    image: "/brand-card-images/astra.jpg",
    logo: "/logos/astra.jpg"
  },
  {
    name: "Earthy Line",
    link: "/company-details/earthy-line",
    image: "/brand-card-images/earthline.jpg",
    logo: "/logos/earthyline.jpg"
  },
  {
    name: "EdefyHome",
    link: "/company-details/edefyhome",
    image: "/brand-card-images/Edify-home.png",
    logo: "/logos/16.jpg"
  },
  {
    name: "JIVA",
    link: "/company-details/jiva",
    image: "/brand-card-images/Jiva.png",
    logo: "/logos/jiva.jpg"
  },
  {
    name: "Nayantara",
    link: "/company-details/nayantara",
    image: "/brand-card-images/Nayantara.jpg",
    logo: "/logos/nayantara.jpg"
  },
  {
    name: "Truboy BBQ",
    link: "/company-details/truboy-bbq",
    image: "/brand-card-images/Trueboybbq.jpg",
    logo: "/logos/7.jpg",
 
  },
  {
    name: "Creative Ecotech",
    link: "/company-details/creative-ecotech",
    image: "/brand-card-images/creative-echotech.jpg",
    logo: "/logos/3.jpg",
 
  },
  {
    name: "JetChoice",
    link: "/company-details/jetchoice",
    image: "/brand-card-images/jet-choice.jpg",
    logo: "/logos/18.jpg"
  },
  {
    name: "Sacred Suta",
    link: "/company-details/sacred-suta",
    image: "/brand-card-images/sacred-suta.jpg",
    logo: "/logos/sacred-suta.jpg"
  },
  {
    name: "RougHells",
    link: "/company-details/roughells",
    image: "/brand-card-images/roughells.jpg",
    logo: "/logos/roughells.jpg"
  },
  {
    name: "Sree Vedics",
    link: "/company-details/sree-vedics",
    image: "/brand-card-images/sreevadic.jpg",
    logo: "/logos/Sree_Vedics_Logo.jpg"
  }
];

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const webDevImages = [
    { src: "/web-development-img/True Boy BBQ.png", title: "True Boy BBQ" },
    { src: "/web-development-img/Chris Louis.png", title: "Chris Louis" },
    { src: "/web-development-img/Aladeen Bangkok.png", title: "Aladeen Bangkok" },
    { src: "/web-development-img/Earth Bags.png", title: "Earth Bags" },
    { src: "/web-development-img/no-end.png", title: "No End Fashion" },
    { src: "/web-development-img/united by blue.png", title: "United by Blue" },
  ];

  // Infinite Slider Logic
  const slides = [
    webDevImages[webDevImages.length - 1], // Clone of last slide at index 0
    ...webDevImages,
    webDevImages[0], // Clone of first slide at index length + 1
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionEnabled(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTransitionEnabled(true);
    setCurrentIndex(index + 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;

    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (currentIndex === slides.length - 1) {
        setTransitionEnabled(false);
        setCurrentIndex(1);
      } else if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(slides.length - 2);
      }
    }, 600); // 700ms matches duration-700 transition class

    return () => clearTimeout(timer);
  }, [currentIndex, isTransitioning, slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(226, 232, 240, 0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  };

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.in/web-development/" />

      <div className="relative w-full bg-[#fafbfc] min-h-screen text-slate-800 overflow-hidden">

        {/* Hero Background Layer with Sky Blue gradient */}
        <section className="relative z-10 w-full pt-[160px] pb-12 bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd] to-[#fafbfc] border-b border-slate-200 overflow-hidden">
          {/* Light Grid Scrolling Background */}
          <div
            className="animate-grid-scroll opacity-70 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(14, 165, 233, 0.12) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(14, 165, 233, 0.12) 1px, transparent 1px)
              `
            }}
          />

          {/* Ambient Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#0ea5e9]/15 via-[#3b82f6]/10 to-transparent blur-[80px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[45%] aspect-square rounded-full bg-gradient-to-br from-[#818cf8]/10 via-transparent to-transparent blur-[90px]" />
          </div>

          {/* SVG Custom Graphics - Web Development/Coding Themed Graphics */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-60">
            <svg className="w-full h-full min-w-[1000px] min-h-[500px]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sky-capsule-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(14, 165, 233, 0.25)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
                </linearGradient>
              </defs>

              {/* Floating Code Editor Graphic Left */}
              <g transform="translate(40, 70) rotate(-5)" opacity="0.45">
                <rect width="220" height="140" rx="8" fill="white" stroke="#bae6fd" strokeWidth="1.5" />
                <rect width="220" height="24" rx="8" fill="#f8fafc" />
                <line x1="0" y1="24" x2="220" y2="24" stroke="#bae6fd" strokeWidth="1" />
                {/* Window Dots */}
                <circle cx="12" cy="12" r="3" fill="#ef4444" />
                <circle cx="22" cy="12" r="3" fill="#eab308" />
                <circle cx="32" cy="12" r="3" fill="#22c55e" />

                {/* Code wireframe lines */}
                <rect x="15" y="38" width="60" height="6" rx="3" fill="#0ea5e9" opacity="0.7" />
                <rect x="80" y="38" width="100" height="6" rx="3" fill="#94a3b8" opacity="0.4" />
                <rect x="15" y="52" width="120" height="6" rx="3" fill="#6366f1" opacity="0.6" />
                <rect x="15" y="66" width="40" height="6" rx="3" fill="#3b82f6" opacity="0.7" />
                <rect x="60" y="66" width="90" height="6" rx="3" fill="#94a3b8" opacity="0.4" />
                <rect x="30" y="80" width="150" height="6" rx="3" fill="#06b6d4" opacity="0.5" />
                <rect x="30" y="94" width="80" height="6" rx="3" fill="#94a3b8" opacity="0.4" />
                <rect x="15" y="108" width="50" height="6" rx="3" fill="#10b981" opacity="0.6" />
              </g>

              {/* Floating Layout Grid Graphic Right */}
              <g transform="translate(940, 120) rotate(5)" opacity="0.4">
                <rect width="240" height="150" rx="10" fill="white" stroke="#bae6fd" strokeWidth="2" />
                <line x1="0" y1="25" x2="240" y2="25" stroke="#bae6fd" strokeWidth="1" />
                <circle cx="12" cy="12" r="3" fill="#3b82f6" />
                {/* Grid layout representation */}
                <rect x="15" y="38" width="60" height="40" rx="4" fill="#3b82f6" opacity="0.08" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" />
                <rect x="85" y="38" width="60" height="40" rx="4" fill="#3b82f6" opacity="0.08" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" />
                <rect x="155" y="38" width="70" height="40" rx="4" fill="#3b82f6" opacity="0.08" stroke="#3b82f6" strokeWidth="1" strokeDasharray="2 2" />

                <rect x="15" y="90" width="130" height="8" rx="4" fill="#3b82f6" opacity="0.4" />
                <rect x="15" y="104" width="210" height="6" rx="3" fill="#94a3b8" opacity="0.3" />
                <rect x="15" y="115" width="170" height="6" rx="3" fill="#94a3b8" opacity="0.3" />

                <circle cx="205" cy="94" r="10" fill="#3b82f6" opacity="0.2" />
              </g>

              {/* Giant tag </ > in background */}
              <text x="260" y="380" fill="#0ea5e9" fontSize="160" fontFamily="monospace" fontWeight="900" opacity="0.06" transform="rotate(-12)">&lt;/&gt;</text>

              {/* Giant brackets { } in background */}
              <text x="820" y="180" fill="#6366f1" fontSize="190" fontFamily="monospace" fontWeight="900" opacity="0.05" transform="rotate(12)">{"{"}{"}"}</text>

              {/* Rotated technical capsules */}
              <g transform="rotate(-25 600 250)" opacity="0.8">
                <rect x="250" y="80" width="260" height="24" rx="12" fill="url(#sky-capsule-1)" />
                <rect x="580" y="160" width="200" height="20" rx="10" fill="rgba(14, 165, 233, 0.15)" />
                <rect x="400" y="280" width="150" height="16" rx="8" fill="rgba(99, 102, 241, 0.12)" />
              </g>

              {/* Binary-like square dot grids on the sides */}
              <g transform="translate(60, 260)">
                {Array.from({ length: 5 }).map((_, r) =>
                  Array.from({ length: 6 }).map((_, c) => (
                    <circle
                      key={`webdev-dot-l-${r}-${c}`}
                      cx={c * 16}
                      cy={r * 16}
                      r={1.5}
                      fill="rgb(14, 165, 233)"
                      opacity={0.3}
                    />
                  ))
                )}
              </g>

              <g transform="translate(1060, 60)">
                {Array.from({ length: 7 }).map((_, r) =>
                  Array.from({ length: 5 }).map((_, c) => (
                    <circle
                      key={`webdev-dot-r-${r}-${c}`}
                      cx={c * 18}
                      cy={r * 18}
                      r={1.5}
                      fill="rgb(99, 102, 241)"
                      opacity={0.25}
                    />
                  ))
                )}
              </g>
            </svg>
          </div>

          <div className="relative z-10 mx-auto w-full px-6 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Pill Badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-600 bg-white px-6 py-3.5 text-sm sm:text-base md:text-sm font-extrabold tracking-[0.2em] text-gray-600 uppercase shadow-sm mb-6">
                  Website & Ecommerce Development
                </span>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
                  Website Development Company Built to Turn Visitors Into Customers
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl text-slate-500 font-bold leading-relaxed mb-6 max-w-2xl">
                  Expert WordPress, Shopify, and custom website development for businesses across India — from local service brands to D2C stores to growing SaaS companies. We design and build websites that don’t just look good; they generate leads and sales.
                </p>

                {/* Full Width Line Divider */}
                <div className="w-full border-t border-slate-200/60 my-3"></div>
                {/* Rating markers */}
                <div className="flex flex-col items-start gap-4 mb-8 text-left">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] text-white text-xs font-extrabold rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(36,67,171,0.25)] hover:shadow-[0_10px_24px_rgba(64,21,158,0.4)] hover:opacity-95 flex items-center justify-center gap-2 flex-shrink-0 uppercase tracking-wider mt-4"
                  >
                    <span>Book a Free Website Audit</span>
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

              {/* Right Column (Form Card) */}
              <div className="lg:col-span-6 flex justify-center relative w-full">
                <LeadForm showDecorations={false} />
              </div>
            </div>
          </div>
        </section>

        {/* Premium Web Showcases Slider */}
        <section className="relative z-10 w-full py-16 bg-[#fafbfc] border-b border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <div className="mb-12 max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1 text-[9px] font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
                Live Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight mt-3">
                Crafting Digital Masterpieces
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mt-3">
                Explore our recent custom high-performance web builds. Fully responsive, lightweight, and optimized for maximum conversions.
              </p>
            </div>

            {/* Slider Container */}
            <div className="relative mx-auto max-w-7xl">
              {/* Main Slide Card */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-200/50">
                <div
                  className={`flex w-full h-full ${transitionEnabled ? "transition-transform duration-700 ease-in-out" : ""}`}
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {slides.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full h-full flex-shrink-0"
                    >
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        priority={index === 1}
                        className="object-cover"
                      />
                      {/* Shadow overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {/* Caption */}
                      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-left z-20">
                        <h3 className="text-xl sm:text-2xl font-black text-white mt-1">{image.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Prev Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full text-[#5c5b5b] shadow-[0_6px_20px_rgba(36,67,171,0.4)] hover:scale-110 transition-all duration-300 border border-white/10"
                  aria-label="Previous slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full text-[#5c5b5b] shadow-[0_6px_20px_rgba(36,67,171,0.4)] hover:scale-110 transition-all duration-300 border border-white/10"
                  aria-label="Next slide"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

              {/* Pagination Indicator Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {webDevImages.map((_, index) => {
                  const isActive =
                    currentIndex === index + 1 ||
                    (currentIndex === 0 && index === webDevImages.length - 1) ||
                    (currentIndex === slides.length - 1 && index === 0);
                  return (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${isActive ? "bg-[#2443ab] w-6" : "bg-slate-300 hover:bg-slate-400"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Current Reality Section */}
        <section
          className="relative min-h-[500px] z-10 w-full py-28 sm:py-36 overflow-hidden text-center px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100/40"
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
                text="&quot;Most businesses treat their website as a one-time task — build it, launch it, forget it. Meanwhile, it’s slowly costing them customers: slow load times drive visitors away before the page even finishes loading, confusing navigation buries the one thing a visitor came to find, and a design that doesn’t build trust sends leads straight to a competitor. Your website should be your hardest-working salesperson, available 24 hours a day. If it isn’t converting visitors into leads or customers, it isn’t doing its job — no matter how good it looks.&quot;"
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
              {webDevShowcases.map((brand, idx) => (
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

                    {/* Bottom details block */}
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

        <ArchitectureTimeline
          title="The Framework"
          subtitle="How We Engineer Your Website"
          tagline="“The System” — How We Build Websites That Convert"
          codeFile="src/app/architecture.tsx"
          codeLines={[
            "import { NextApp, Optimize } from 'digital-edge';",
            "// Bespoke Web Engineering Architecture",
            "export default async function Pipeline() {",
            "  const analytics = await fetchMetrics();",
            "  return (",
            "    <Optimize speed='blazing' seo={true}>",
            "      <NextApp metrics={analytics}>",
            "        <UIComponent performance='100%' />",
            "      </NextApp>",
            "    </Optimize>",
            "  );",
            "}"
          ]}
          floatingBadge1Text="Lighthouse"
          floatingBadge1Sub="Performance Audit Passed"
          floatingBadge1Value="99"
          floatingBadge2Text="SEO Core"
          floatingBadge2Sub="Total Dominance Architecture"
          floatingBadge2Icon="Search"
          phases={[
            {
              num: "01",
              phase: "Phase 01 — Website Strategy",
              text: "Before a single page is designed, we map out a strategy tied to your actual business goals — whether that’s generating leads, selling products, or building brand credibility — so your website has a clear job to do from day one.",
              borderCol: "border-l-[#2443ab]",
              dotCol: "border-blue-500 bg-white",
              shadowCol: "shadow-blue-500/5",
              iconColor: "text-blue-600 bg-blue-50 border-blue-100",
              iconAlign: "left",
              iconName: "Rocket"
            },
            {
              num: "02",
              phase: "Phase 02 — UI/UX Design",
              text: "We design around how your real visitors think and behave, not just what looks trendy — making sure every page guides someone naturally toward the action you want them to take.",
              borderCol: "border-l-[#a855f7]",
              dotCol: "border-purple-500 bg-white",
              shadowCol: "shadow-purple-500/5",
              iconColor: "text-purple-600 bg-purple-50 border-purple-100",
              iconAlign: "right",
              iconName: "Search"
            },
            {
              num: "03",
              phase: "Phase 03 — Wireframing",
              text: "We map the skeletal structure of every page before visual design begins, defining exactly what appears where and why — so nothing on your site is there by accident.",
              borderCol: "border-l-[#ec4899]",
              dotCol: "border-pink-500 bg-white",
              shadowCol: "shadow-pink-500/5",
              iconColor: "text-pink-600 bg-pink-50 border-pink-100",
              iconAlign: "left",
              iconName: "Puzzle"
            },
            {
              num: "04",
              phase: "Phase 04 — Prototyping",
              text: "We build working prototypes from the wireframes so you and real users can interact with the site before development starts, catching usability issues early instead of after launch.",
              borderCol: "border-l-[#f97316]",
              dotCol: "border-orange-500 bg-white",
              shadowCol: "shadow-orange-500/5",
              iconColor: "text-orange-600 bg-orange-50 border-orange-100",
              iconAlign: "right",
              iconName: "Zap"
            },
            {
              num: "05",
              phase: "Phase 05 — Development",
              text: "Whether it’s WordPress, Shopify, or a fully custom build, we handle complete backend and frontend development — clean code, proper structure, and a site built to perform, not just exist.",
              borderCol: "border-l-[#10b981]",
              dotCol: "border-emerald-500 bg-white",
              shadowCol: "shadow-emerald-500/5",
              iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
              iconAlign: "left",
              iconName: "Code"
            },
            {
              num: "06",
              phase: "Phase 06 — Support & Maintenance",
              text: "Launch isn’t the finish line. We provide ongoing updates, security monitoring, and performance checks so your website keeps working as hard as it did on day one.",
              borderCol: "border-l-[#6366f1]",
              dotCol: "border-indigo-500 bg-white",
              shadowCol: "shadow-indigo-500/5",
              iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
              iconAlign: "right",
              iconName: "Shield"
            }
          ]}
        />

        {/* Services Section */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-white via-slate-50/40 to-[#fafbfc] border-t border-slate-100 overflow-hidden">
          {/* Ambient Glow Backdrops */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[20%] left-[-10%] w-[35%] aspect-square rounded-full bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 blur-[120px]" />
            <div className="absolute bottom-[20%] right-[-10%] w-[35%] aspect-square rounded-full bg-gradient-to-tr from-purple-500/5 to-pink-500/5 blur-[120px]" />
          </div>

          <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/60 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
                What We Build
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight mt-4">
                Website Development Services
              </h2>
              {/* Short styled underline line */}
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-2" />
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                {
                  title: "WordPress Development",
                  desc: "Custom-built or theme-based WordPress websites with complete wireframing, design, backend, and frontend development — built for businesses that need flexibility, easy content management, and strong SEO foundations.",
                  icon: <Globe className="w-6 h-6 text-blue-600" />,
                  accent: "bg-blue-500",
                  bgGlow: "group-hover:bg-blue-50",
                  borderCol: "hover:border-blue-400/80 hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)]"
                },
                {
                  title: "Shopify Development",
                  desc: "Shopify stores designed and built for conversion, from theme customization to app integrations and custom features — ideal for D2C and product-based businesses that want a fast, reliable ecommerce platform.",
                  icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
                  accent: "bg-emerald-500",
                  bgGlow: "group-hover:bg-emerald-50",
                  borderCol: "hover:border-emerald-400/80 hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)]"
                },
                {
                  title: "Ecommerce Websites",
                  desc: "Full ecommerce builds across WooCommerce, Shopify, or custom platforms — designed around smooth checkout flows, product discovery, and mobile-first shopping experiences that turn browsers into buyers.",
                  icon: <Layers className="w-6 h-6 text-indigo-600" />,
                  accent: "bg-indigo-500",
                  bgGlow: "group-hover:bg-indigo-50",
                  borderCol: "hover:border-indigo-400/80 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)]"
                },
                {
                  title: "Custom Website Development",
                  desc: "For businesses with specific needs a template can’t solve — custom-coded websites and web applications built exactly around your workflow, integrations, and growth plans.",
                  icon: <Code className="w-6 h-6 text-purple-600" />,
                  accent: "bg-purple-500",
                  bgGlow: "group-hover:bg-purple-50",
                  borderCol: "hover:border-purple-400/80 hover:shadow-[0_20px_40px_rgba(168,85,247,0.08)]"
                },
                {
                  title: "Business & Corporate Websites",
                  desc: "Professional websites for service businesses, agencies, and corporates — built to establish credibility, explain your offering clearly, and convert inquiries into client conversations.",
                  icon: <Cpu className="w-6 h-6 text-sky-600" />,
                  accent: "bg-sky-500",
                  bgGlow: "group-hover:bg-sky-50",
                  borderCol: "hover:border-sky-400/80 hover:shadow-[0_20px_40px_rgba(14,165,233,0.08)]"
                },
                {
                  title: "Landing Pages & Microsites",
                  desc: "Focused, high-conversion landing pages for campaigns, product launches, or lead generation — built fast and optimized specifically around a single goal.",
                  icon: <Zap className="w-6 h-6 text-amber-600" />,
                  accent: "bg-amber-500",
                  bgGlow: "group-hover:bg-amber-50",
                  borderCol: "hover:border-amber-400/80 hover:shadow-[0_20px_40px_rgba(245,158,11,0.08)]"
                },
                {
                  title: "Support & Maintenance",
                  desc: "Ongoing website care — security updates, performance monitoring, bug fixes, and content updates — so your site stays fast, safe, and current without you having to think about it.",
                  icon: <Settings className="w-6 h-6 text-rose-600" />,
                  accent: "bg-rose-500",
                  bgGlow: "group-hover:bg-rose-50",
                  borderCol: "hover:border-rose-400/80 hover:shadow-[0_20px_40px_rgba(244,63,94,0.08)]"
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`bg-white rounded-[24px] p-8 border border-slate-100/85 shadow-sm flex flex-col justify-between group transition-all duration-500 cursor-default relative overflow-hidden ${service.borderCol}`}
                >
                  {/* Top Color Accent Line */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${service.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="space-y-6">
                    {/* Icon container */}
                    <div className={`w-12 h-12 rounded-2xl bg-slate-50/80 flex items-center justify-center transition-all duration-300 ${service.bgGlow} group-hover:scale-110 group-hover:rotate-3 shadow-sm border border-slate-100`}>
                      {service.icon}
                    </div>
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight text-left group-hover:translate-x-0.5 transition-transform duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed text-left">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools & Technologies Section */}
        <section className="relative z-10 py-24 bg-white border-t border-b border-slate-100/80 overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <span className="block text-[10px] sm:text-xs font-black tracking-[0.3em] text-[#2443ab] uppercase mb-3">
              TECH STACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
              Tools & Technologies We Use
            </h2>
            <p className="text-slate-500 font-semibold text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
              We build with the most powerful, modern, and reliable tools to guarantee scalable architecture and blistering performance.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-16">
              {[
                { name: "HTML5", icon: "/programing-icons/html.svg", desc: "Structure" },
                { name: "CSS3", icon: "/programing-icons/css.svg", desc: "Styling" },
                { name: "JavaScript", icon: "/programing-icons/javascript.svg", desc: "Interactivity" },
                { name: "TypeScript", icon: "/programing-icons/typescript.svg", desc: "Type Safety" },
                { name: "React.js", icon: "/programing-icons/reactjs.svg", desc: "UI Library" },
                { name: "Node.js", icon: "/programing-icons/nodejs.svg", desc: "Runtime" },
                { name: "Express.js", icon: "/programing-icons/expressjs.svg", desc: "Backend" },
                { name: "MongoDB", icon: "/programing-icons/mongodb.svg", desc: "Database" },
                { name: "Shopify", icon: "/programing-icons/shopify.svg", desc: "E-Commerce" },
                { name: "WordPress", icon: "/programing-icons/wordpress.svg", desc: "CMS" },
                { name: "Git", icon: "/programing-icons/git.svg", desc: "Version Control" },
                { name: "GitHub", icon: "/programing-icons/github.svg", desc: "Collaboration" },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col items-center p-6 bg-slate-50/50 hover:bg-white rounded-3xl border border-slate-100 hover:border-[#2443ab]/20 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative p-3">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-[#0d1b3e] mt-4 tracking-tight">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-semibold tracking-wider uppercase mt-1">
                    {tech.desc}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">01</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">Built for Business Goals</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Every design and development decision tied back to what you actually need the site to achieve — leads, sales, or brand credibility.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">03</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Design That Builds Trust</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Visual design and user experience crafted to make visitors feel confident doing business with you.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.008v.008H12V18zm0-3h.008v.008H12V15zm0-3h.008v.008H12V12zm0-3h.008v.008H12V9zm0-3h.008v.008H12V6zm0-3h.008v.008H12V3zm0 18a9 9 0 110-18 9 9 0 010 18z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">05</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Mobile-First Experience</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Every build is designed to work flawlessly on phones first, since that’s where most of your visitors are coming from.
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
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#0d1b3e]/60 uppercase mb-2">Why Businesses Choose Us</span>
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">02</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Fast, Reliable Performance</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Clean code and proper optimization so your site loads quickly and works smoothly across devices, not just on launch day.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">04</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">SEO-Ready Foundations</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Sites structured cleanly from the ground up, so you’re not fighting technical issues later when you invest in SEO.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">06</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-rose-500 transition-colors duration-300">Ongoing Support</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    A team that stays available after launch, so small issues get fixed before they become bigger problems.
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
                Our Website Build Roadmap
              </h2>
            </div>

            {/* Timeline Journey Wrapper */}
            <div className="relative flex flex-col gap-0 max-w-4xl mx-auto mt-20 text-left">
              {/* Central Timeline Dashed Connecting Line */}
              <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />

              {[
                {
                  num: "01",
                  title: "Discovery & Strategy",
                  desc: "Understanding your business, goals, and audience to shape a website strategy that actually supports how you grow.",
                  circleBg: "bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_6px_20px_rgba(59,130,246,0.35)]",
                  lineColor: "bg-blue-500",
                  textColor: "text-blue-500",
                  borderColor: "border-blue-100 hover:border-blue-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]",
                  grad: "from-white via-white to-blue-50/10"
                },
                {
                  num: "02",
                  title: "Design & Wireframing",
                  desc: "Mapping out the structure and designing the look and feel of every page before development begins.",
                  circleBg: "bg-gradient-to-br from-purple-400 to-violet-600 shadow-[0_6px_20px_rgba(139,92,246,0.35)]",
                  lineColor: "bg-purple-500",
                  textColor: "text-purple-600",
                  borderColor: "border-purple-100 hover:border-purple-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]",
                  grad: "from-white via-white to-purple-50/10"
                },
                {
                  num: "03",
                  title: "Prototyping & Review",
                  desc: "Building interactive prototypes so you can review and refine the experience before a single line of final code is written.",
                  circleBg: "bg-gradient-to-br from-pink-400 to-rose-600 shadow-[0_6px_20px_rgba(244,63,94,0.35)]",
                  lineColor: "bg-rose-500",
                  textColor: "text-rose-500",
                  borderColor: "border-rose-100 hover:border-rose-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)]",
                  grad: "from-white via-white to-rose-50/10"
                },
                {
                  num: "04",
                  title: "Development",
                  desc: "Writing clean, structured code — whether WordPress, Shopify, or custom — to bring the approved design to life.",
                  circleBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_6px_20px_rgba(249,115,22,0.35)]",
                  lineColor: "bg-orange-500",
                  textColor: "text-orange-500",
                  borderColor: "border-orange-100 hover:border-orange-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]",
                  grad: "from-white via-white to-orange-50/10"
                },
                {
                  num: "05",
                  title: "Testing & Launch",
                  desc: "Thoroughly testing across devices and browsers before going live, so your launch day is smooth, not stressful.",
                  circleBg: "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_6px_20px_rgba(16,185,129,0.35)]",
                  lineColor: "bg-emerald-500",
                  textColor: "text-emerald-500",
                  borderColor: "border-emerald-100 hover:border-emerald-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]",
                  grad: "from-white via-white to-emerald-50/10"
                },
                {
                  num: "06",
                  title: "Support & Growth",
                  desc: "Ongoing maintenance and improvements post-launch, so your website keeps evolving alongside your business.",
                  circleBg: "bg-gradient-to-br from-indigo-400 to-blue-600 shadow-[0_6px_20px_rgba(79,70,229,0.35)]",
                  lineColor: "bg-indigo-500",
                  textColor: "text-indigo-650",
                  borderColor: "border-indigo-100 hover:border-indigo-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(79,70,229,0.08)]",
                  grad: "from-white via-white to-indigo-50/10"
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
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                Common Questions
              </h2>
            </div>

            {/* Accordion Container */}
            <div className="max-w-5xl mx-auto bg-white rounded-[32px] border border-slate-100/80 shadow-[0_10px_45px_rgba(0,0,0,0.02)] p-6 sm:p-10 text-left">
              {[
                {
                  q: "How much does a website cost?",
                  a: "It depends on complexity — a business website, an ecommerce store, and a fully custom web application all have very different scopes. We’ll give you a clear, honest quote after understanding your requirements on the free strategy call, with no hidden costs added later."
                },
                {
                  q: "How long does it take to build a website?",
                  a: "A standard business website typically takes 3–5 weeks. Ecommerce builds usually take 5–8 weeks depending on catalog size and features. Fully custom web applications can take longer depending on complexity — we’ll give you a realistic timeline upfront."
                },
                {
                  q: "Should I choose WordPress, Shopify, or a custom build?",
                  a: "It depends on your business type and goals. WordPress works well for content-heavy sites and businesses that want flexibility and easy content management. Shopify is built specifically for ecommerce and works well for product-based businesses that want a fast, reliable store. Custom development makes sense when your needs go beyond what either platform offers out of the box. We’ll recommend honestly based on your business, not push whichever platform is easiest for us."
                },
                {
                  q: "Will my website work well on mobile phones?",
                  a: "Yes. Every website we build is designed mobile-first, since the majority of visitors to most Indian websites come from phones, not desktops. We test thoroughly across screen sizes before launch."
                },
                {
                  q: "Is my website going to be SEO-friendly?",
                  a: "Yes. We build every site on clean, technically sound foundations — proper page structure, fast load times, and mobile responsiveness — so it’s ready to rank well and doesn’t create obstacles for your future SEO efforts."
                },
                {
                  q: "Can I update the website content myself after launch?",
                  a: "Yes. We build on content management systems like WordPress and Shopify specifically so your team can update text, images, and products without needing a developer for every small change. We’ll also walk you through how to use it."
                },
                {
                  q: "Do you provide ongoing support after the website goes live?",
                  a: "Yes. We offer maintenance plans covering security updates, performance monitoring, bug fixes, and content support, so your website stays reliable long after launch, not just on day one."
                },
                {
                  q: "Can you redesign my existing website instead of building from scratch?",
                  a: "Yes. Many projects start as a redesign rather than a rebuild. We’ll audit your current site first and tell you honestly whether a redesign, a partial rebuild, or a full rebuild makes the most sense for your situation and budget."
                },
                {
                  q: "Do you only work with ecommerce businesses?",
                  a: "No. We build for businesses across industries — service providers, D2C brands, SaaS companies, local businesses, and more. Every website is designed around your specific business model and goals, not a one-size-fits-all template."
                },
                {
                  q: "What’s included in the free website audit?",
                  a: "A live review of your current website’s speed, design, usability, and SEO foundation (or a discovery conversation if you don’t have a site yet), plus 2–3 specific recommendations we spot immediately — no generic slide deck, no pressure to sign anything."
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
            <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] max-w-5xl">
              Ready for a Website That Actually Works for Your Business?
            </h2>
            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg font-semibold tracking-wide max-w-3xl leading-relaxed">
              Book your free, no-obligation 30-minute website audit. No generic slide decks — just a clear look at what’s holding your website back and how to fix it.
            </p>

            {/* Button Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center">
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
