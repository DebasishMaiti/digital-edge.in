"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandLogosList } from "@/data";
import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import AnimatedWords from "@/components/AnimatedWords";
import Marquee from "react-fast-marquee";

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
    <link rel="canonical" href="https://digitaledge360.com/web-development" />
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
                  Web Development Solution
                </span>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
                  Web Development Company
                </h1>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl text-slate-500 font-bold leading-relaxed mb-4 max-w-2xl">
                  Custom websites and web applications built on the right stack for your business — from content-driven sites to complex web apps, with real projects already live.
                </p>

                {/* Description */}
                <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-2xl">
                  A web development company designs, builds, and maintains websites and web applications — covering everything from UI/UX design and CMS setup to custom functionality, API integrations, and ongoing maintenance. The right platform depends on the business: a content site, an ecommerce store, and a custom web app all need different foundations, and we build around what the project actually requires.
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
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#2443ab] w-6" : "bg-slate-300 hover:bg-slate-400"
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
              text="&quot;Most websites are built using bloated builders that kill performance and SEO. They look generic, load slowly on mobile, and fail to turn visitors into customers. In a digital-first economy, a mediocre website is a massive liability that actively pushes your prospects toward competitors.&quot;" 
              delay={0.25}
            />
          </p>
        </div>
      </section>

      {/* The Architecture Section */}
      <section className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#fafbfc]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Sticky Header */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:col-span-4 lg:sticky lg:top-32 h-fit text-left space-y-4"
          >
            <span className="block text-sm sm:text-base font-extrabold tracking-[0.25em] text-[#2443ab] uppercase">
              The Architecture
            </span>
            <motion.h2 
              animate={{ 
                color: ["#0d1b3e", "#2443ab", "#40159e", "#0a8bc7", "#0d1b3e"],
                y: [0, -6, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut" 
              }}
              className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.1] max-w-sm"
            >
              How We Engineer The Solution.
            </motion.h2>
          </motion.div>

          {/* Right Column: Numbered List Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {[
              {
                num: "01",
                text: "We are a top-tier development agency recognized for pushing the boundaries of what's possible on the modern web. Our technical stack — primarily Next.js, React, and Tailwind CSS — is selected for one reason: pure, unadulterated performance.",
                grad: "from-blue-50 to-indigo-100/50 border-blue-100/60 hover:border-blue-300",
                textCol: "text-[#2443ab]",
                slideLeft: true
              },
              {
                num: "02",
                text: "Our process begins with an exhaustive performance audit. We analyze your existing site's core web vitals, accessibility scores, and conversion bottlenecks to create a roadmap for total digital dominance.",
                grad: "from-purple-50 to-violet-100/50 border-purple-100/60 hover:border-purple-300",
                textCol: "text-purple-600",
                slideLeft: false
              },
              {
                num: "03",
                text: "Custom architecture is non-negotiable. We don't use templates. We build bespoke UI component libraries that are lightweight, pixel-perfect, and fully aligned with your brand's unique identity.",
                grad: "from-pink-50 to-rose-100/50 border-pink-100/60 hover:border-pink-300",
                textCol: "text-rose-500",
                slideLeft: true
              },
              {
                num: "04",
                text: "Speed is our obsession. We target 95+ Lighthouse scores across the board. Every image, script, and stylesheet is optimized to ensure the fastest possible First Contentful Paint, keeping users engaged.",
                grad: "from-amber-50 to-orange-100/50 border-amber-100/60 hover:border-amber-300",
                textCol: "text-amber-600",
                slideLeft: false
              },
              {
                num: "05",
                text: "Beyond aesthetics, we focus on engineering logic. Whether it's complex API integrations, custom CMS headless setups, or real-time data visualizations, our code is clean, documented, and built to scale.",
                grad: "from-emerald-50 to-teal-100/50 border-emerald-100/60 hover:border-emerald-300",
                textCol: "text-emerald-600",
                slideLeft: true
              },
              {
                num: "06",
                text: "Security and reliability are baked into the DNA of every build. We deploy on enterprise-grade infrastructure like Vercel and AWS, ensuring 99.9% uptime and military-grade protection for your data.",
                grad: "from-indigo-50 to-slate-200/50 border-indigo-100/60 hover:border-indigo-300",
                textCol: "text-indigo-600",
                slideLeft: false
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.slideLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`rounded-[32px] p-8 border bg-gradient-to-br ${item.grad} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden min-h-[220px] ${
                  index % 2 !== 0 ? "lg:translate-y-8" : ""
                }`}
              >
                {/* Huge Background Number */}
                <div className={`absolute right-4 bottom-2 text-[6rem] font-black opacity-10 select-none pointer-events-none ${item.textCol}`}>
                  {item.num}
                </div>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <span className={`text-xs font-black uppercase tracking-wider ${item.textCol}`}>
                    Phase {item.num}
                  </span>
                  <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed mt-4">
                    {item.text}
                  </p>
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
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">Next-Gen Performance</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Sub-second load times and perfect Core Web Vitals to maximize user retention and SEO.
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <span className="text-sm font-black text-blue-600 tracking-wider">03</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Headless & Scalable</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Decoupled architectures that allow for infinite flexibility and future-proof scaling.
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
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Enterprise Reliability</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Secure, robust code deployed on the world's most reliable cloud infrastructures.
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
                <span className="text-[10px] font-black tracking-[0.2em] text-[#0d1b3e]/60 uppercase mb-2">WHY WE BUILD</span>
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
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <span className="text-sm font-black text-blue-600 tracking-wider">02</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Bespoke Modern Design</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  No templates. Every pixel is custom-crafted to reflect your brand's premium identity.
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
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">Conversion-First UX</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Data-driven interface design that guides users effortlessly toward your primary business goals.
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
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-rose-500 transition-colors duration-300">SEO-Ready Core</h4>
                <p className="text-base text-slate-500 font-semibold leading-relaxed">
                  Technical SEO built into the foundation, ensuring your site is ready to rank from day one.
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
                title: "Discovery & Audit",
                desc: "Technical forensic analysis of your current stack and deep research into your market benchmarks.",
                circleBg: "bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_6px_20px_rgba(59,130,246,0.35)]",
                lineColor: "bg-blue-500",
                textColor: "text-blue-500",
                borderColor: "border-blue-100 hover:border-blue-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]",
                grad: "from-white via-white to-blue-50/10"
              },
              {
                num: "02",
                title: "Architecture & UI/UX",
                desc: "Prototyping high-fidelity, interactive designs and mapping out the technical system architecture.",
                circleBg: "bg-gradient-to-br from-purple-400 to-violet-600 shadow-[0_6px_20px_rgba(139,92,246,0.35)]",
                lineColor: "bg-purple-500",
                textColor: "text-purple-600",
                borderColor: "border-purple-100 hover:border-purple-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]",
                grad: "from-white via-white to-purple-50/10"
              },
              {
                num: "03",
                title: "Engineering & Dev",
                desc: "Pixel-perfect frontend execution and robust backend integration by our senior engineers.",
                circleBg: "bg-gradient-to-br from-pink-400 to-rose-600 shadow-[0_6px_20px_rgba(244,63,94,0.35)]",
                lineColor: "bg-rose-500",
                textColor: "text-rose-500",
                borderColor: "border-rose-100 hover:border-rose-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)]",
                grad: "from-white via-white to-rose-50/10"
              },
              {
                num: "04",
                title: "Quality Assurance",
                desc: "Exhaustive cross-device testing, load profiling, and security hardening before launch.",
                circleBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_6px_20px_rgba(249,115,22,0.35)]",
                lineColor: "bg-orange-500",
                textColor: "text-orange-500",
                borderColor: "border-orange-100 hover:border-orange-300",
                hoverGlow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]",
                grad: "from-white via-white to-orange-50/10"
              },
              {
                num: "05",
                title: "Launch & Support",
                desc: "Meticulously managed rollout and ongoing technical optimization to ensure continued dominance.",
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
                q: "How much does web development cost?",
                a: "Cost depends on whether the site is CMS-based, custom-built, or a full web application, along with the complexity of design, functionality, and integrations required. A proper estimate comes after a scoping call, not a flat rate."
              },
              {
                q: "How do I hire a web developer?",
                a: "Start with a discovery call to walk through the business goals, existing systems, and what the site needs to do. A development team should scope the project — platform, design, development, and timeline — before any commitment is made."
              },
              {
                q: "Should I use WordPress or a custom-built website?",
                a: "WordPress and similar CMS platforms are strong choices for content-heavy sites that need to be easy to manage without ongoing developer involvement. A custom build makes more sense when the site needs unique functionality, tighter performance, or doesn’t fit a standard CMS structure."
              },
              {
                q: "How long does it take to build a website?",
                a: "Timeline depends on scope and platform. A standard CMS-based site typically takes less time than a custom-built site or a full web application with complex functionality."
              },
              {
                q: "Can you redesign or migrate my existing website?",
                a: "Yes — website redesigns and platform migrations are available for businesses moving between CMS platforms or upgrading an underperforming site, with a focus on preserving SEO rankings and existing content during the transition."
              },
              {
                q: "Do you build custom web applications, not just websites?",
                a: "Yes — for functionality that doesn’t fit into a standard website (customer portals, internal tools, booking systems, dashboards), we build custom web applications rather than trying to force it into a CMS."
              },
              {
                q: "Do you handle ongoing website maintenance after launch?",
                a: "Yes — maintenance, security updates, performance monitoring, and feature additions after launch are part of the standard engagement, not a separate afterthought."
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
            Ready to Build a Website?
          </h2>
          {/* Description */}
          <p className="text-slate-500 text-base sm:text-lg font-semibold tracking-wide max-w-3xl leading-relaxed">
            We build websites and web applications engineered around real business goals — performance, scalability, and long-term maintainability — not just a launch date.
          </p>

          {/* Button Links */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap"
            >
              <span>Get a Free Quote</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#2443ab] bg-transparent hover:bg-[#2443ab]/5 px-8 py-3.5 text-xs font-black text-[#2443ab] uppercase tracking-wider transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              <span>Book a Discovery Call</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
