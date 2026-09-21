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

interface ShowcaseItem {
  name: string;
  link: string;
  image: string;
  logo: React.ReactNode | string | null;
}

const appDevShowcases = [
  {
    name: "Publix",
    link: "/company-details/publix",
    image: "/brand-card-images/publix.jpg",
    logo: "/logos/publix.jpg",

  },
  {
    name: "Recipe Keeper",
    link: "/company-details/recipe-keeper",
    image: "/brand-card-images/recipee-keeper.jpg",
    logo: "/logos/recipe keper.jpg",

  },
  {
    name: "Momentum",
    link: "/company-details/momentum",
    image: "/brand-card-images/momentum.jpg",
    logo: "/logos/momentum.jpg",
  },
  {
    name: "HubFit",
    link: "/company-details/hubfit",
    image: "/brand-card-images/hubfit.jpg",
    logo: "/logos/hubfit.jpg",
  },
  {
    name: "Ring My Stylist",
    link: "/company-details/ring-my-stylist",
    image: "/brand-card-images/rign-my-list.jpg",
    logo: "/logos/ring-my-list.jpg",
  },
  {
    name: "Dooli",
    link: "/company-details/dooli",
    image: "/brand-card-images/dooli.jpg",
    logo: "/logos/dooli.jpg",
  },
  {
    name: "O2 BODMAS",
    link: "/company-details/o2bodmas",
    image: "/brand-card-images/o2bodmas.jpg",
    logo: "/logos/o2bodmas.png",
  },
  {
    name: "Gamp Wheels",
    link: "/company-details/gamp-wheels",
    image: "/brand-card-images/gamp-wheels.jpg",
    logo: "/logos/gamp wheels.jpg",
  },
  {
    name: "Kaamdham",
    link: "/company-details/kaamdham",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/kaamdham-logo.jpg",
  },
  {
    name: "Instayaar",
    link: "/company-details/instayaar",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/instayaar-logo.jpg",
  },
  {
    name: "No End Fashion",
    link: "/company-details/no-end",
    image: "/web-development-img/no-end.png",
    logo: "/logos/no-end-logo.png",
  },
  {
    name: "Velvet Box",
    link: "/company-details/velvet-box",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    logo: "/logos/velvet-box-logo.jpg",
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
      <link rel="canonical" href="https://digitaledge360.in/app-store-optimization/" />
      <div className="relative w-full bg-[#fafbfc] min-h-screen text-slate-800 overflow-hidden">

        {/* Hero Background Layer with Sky Blue gradient */}
        <section className="relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[160px] pb-12 bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd] to-[#fafbfc] border-b border-slate-200 overflow-hidden">
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
            <div className="mx-auto max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column */}
              <div className="lg:col-span-6 flex flex-col items-start text-left">
                {/* Pill Badge */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-600 bg-white px-6 py-3.5 text-sm sm:text-base md:text-sm font-extrabold tracking-[0.2em] text-gray-600 uppercase shadow-sm mb-6">
                  App Store Optimization
                </span>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
                  App Store Optimization Services Built to Turn Impressions Into Installs
                </h1>

                {/* Subheadline Tagline */}
                <h2 className="text-xl sm:text-2xl text-[#2443ab] font-black tracking-tight mb-4">
                  More Visibility. More Downloads. More Paying Users. Without Increasing Ad Spend.
                </h2>

                {/* Subheadline Body */}
                <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed mb-4 max-w-2xl">
                  Ranking on page one of the App Store or Google Play doesn't happen by accident — it happens through deliberate keyword research, listing optimization, and conversion-focused creative. We help apps across India and beyond climb search rankings, convert more store visitors into installs, and reduce dependency on paid acquisition.
                </p>

                <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed mb-6 max-w-2xl">
                  Whether you're launching a new app or trying to fix a stalled growth curve, our App Store Optimization company builds a data-backed strategy around your category, competitors, and audience — not generic best practices copied from a blog post.
                </p>

                {/* Full Width Line Divider */}
                <div className="w-full border-t border-slate-200/60 my-3"></div>
                {/* Rating markers */}
                <div className="flex flex-col items-start gap-4 mb-8 text-left">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] text-white text-xs font-extrabold rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(36,67,171,0.25)] hover:shadow-[0_10px_24px_rgba(64,21,158,0.4)] hover:opacity-95 flex items-center justify-center gap-2 flex-shrink-0 uppercase tracking-wider mt-4"
                  >
                    <span>Book a Free ASO Audit</span>
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
                <LeadForm 
                  showDecorations={false} 
                  initialServiceType="seo" 
                  customTitle="Let's Find the Growth Trapped in Your App Listing"
                  customDescription="Most apps are losing installs to fixable problems — weak keyword targeting, a screenshot set that doesn't convert, or a rating average that's scaring off new users before they even tap 'Install.'"
                  customStep2Subtitle="App & Goals"
                  customStep2Title="What do you need help with?"
                  customTargets={[
                    { id: "keyword-research", label: "Keyword Research & Ranking" },
                    { id: "aso-ios", label: "App Store Listing Optimization (iOS)" },
                    { id: "aso-android", label: "Google Play Listing Optimization (Android)" },
                    { id: "cro-creative", label: "Conversion Rate Optimization (Screenshots, Icon, Video)" },
                    { id: "reviews-ratings", label: "Review & Rating Management" },
                    { id: "competitor-audit", label: "Competitor ASO Audit" }
                  ]}
                  customBudgetLabel="Monthly App Installs (Current)"
                  customBudgetOptions={[
                    { value: "Under 1,000/month", label: "Under 1,000/month" },
                    { value: "1,000 – 10,000/month", label: "1,000 – 10,000/month" },
                    { value: "10,000 – 1,00,000/month", label: "10,000 – 1,00,000/month" },
                    { value: "1,00,000+/month", label: "1,00,000+/month" }
                  ]}
                  customPrivacyNotice="Your app data and store credentials stay confidential."
                />
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
                text="&quot;Most app teams treat store listings as a one-time task — upload screenshots, add a description, and move on. Meanwhile, it’s quietly leaking growth: unoptimized keywords leave your app invisible in search, uninspiring creative loses visitors before they tap 'Install', and unaddressed negative reviews erode store conversion. Your app listing should be your highest-converting organic channel. If it isn't converting impressions into installs, you're overpaying for every single download.&quot;"
                delay={0.25}
              />
            </p>
          </div>
        </section>

        {/* Brand Showcase Grid Section */}
        <section className="relative z-10 py-32 sm:py-40 bg-gradient-to-b from-[#fafbfc] to-white overflow-hidden border-t border-slate-100">
          <div className="max-w-full mx-auto px-8 sm:px-16 lg:px-24 relative z-10">

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
              {appDevShowcases.map((brand, idx) => (
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
                        ) : (
                          <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-800 font-extrabold text-sm tracking-wide shadow-xs flex items-center justify-center">
                            {brand.name}
                          </div>
                        )}
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

        {/* The Problem Section */}
        <section className="relative z-10 py-24 sm:py-32 bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 border-t border-slate-200/60 overflow-hidden">
          {/* Subtle Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <div className="absolute top-1/4 left-[-10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-rose-200/30 via-orange-200/20 to-transparent blur-[120px]" />
            <div className="absolute bottom-1/4 right-[-10%] w-[40%] aspect-square rounded-full bg-gradient-to-tl from-indigo-200/30 via-sky-200/20 to-transparent blur-[120px]" />
          </div>

          <div className="max-w-full mx-auto px-8 sm:px-16 lg:px-24 relative z-10 text-center">
            {/* Header */}
            <div className="max-w-3xl mx-auto space-y-4 mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50/80 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-rose-600 uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span>The Problem</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                A Great App Doesn&apos;t Rank Itself
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-rose-500 via-amber-500 to-indigo-600 mx-auto rounded-full mt-2" />

              <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed pt-2">
                Most founders assume that once the app is built and live, downloads will follow. In reality, the App Store and Google Play are search engines — and like any search engine, they reward apps that are optimized for how real users search, not just apps that are well-built.
              </p>
              <p className="text-base sm:text-lg text-slate-700 font-bold leading-relaxed pt-1">
                If your app was launched without an ASO strategy, chances are it&apos;s leaking installs right now.
              </p>
            </div>

            {/* Problem Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
              {[
                {
                  title: "Invisible in Search",
                  desc: "Your app doesn't appear in the top results for the keywords your actual customers are searching for.",
                  num: "01",
                  badgeCol: "bg-rose-100 text-rose-700 border-rose-200",
                  cardGlow: "hover:border-rose-300 hover:shadow-[0_20px_40px_rgba(244,63,94,0.12)]",
                  accentLine: "bg-rose-500",
                  iconBg: "bg-rose-50 text-rose-600 border-rose-100",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  )
                },
                {
                  title: "Low Conversion Rate",
                  desc: "Thousands of people see your listing, but only a small fraction actually tap \"Install\" — usually a creative or messaging problem, not a demand problem.",
                  num: "02",
                  badgeCol: "bg-amber-100 text-amber-700 border-amber-200",
                  cardGlow: "hover:border-amber-300 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)]",
                  accentLine: "bg-amber-500",
                  iconBg: "bg-amber-50 text-amber-600 border-amber-100",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-3.182m-3.182 3.182l-2.898-.776M3 21h18" />
                    </svg>
                  )
                },
                {
                  title: "Rating Drag",
                  desc: "A handful of unanswered negative reviews are quietly dragging your average rating below the threshold users trust.",
                  num: "03",
                  badgeCol: "bg-purple-100 text-purple-700 border-purple-200",
                  cardGlow: "hover:border-purple-300 hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)]",
                  accentLine: "bg-purple-500",
                  iconBg: "bg-purple-50 text-purple-600 border-purple-100",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  )
                },
                {
                  title: "Wasted Paid Spend",
                  desc: "You're paying for installs through ads that organic search optimization could be delivering for free.",
                  num: "04",
                  badgeCol: "bg-sky-100 text-sky-700 border-sky-200",
                  cardGlow: "hover:border-sky-300 hover:shadow-[0_20px_40px_rgba(14,165,233,0.12)]",
                  accentLine: "bg-sky-500",
                  iconBg: "bg-sky-50 text-sky-600 border-sky-100",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white rounded-[28px] p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between group transition-all duration-500 relative overflow-hidden ${item.cardGlow}`}
                >
                  {/* Accent Top Line */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${item.accentLine} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="space-y-6">
                    {/* Icon & Step Number */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconBg}`}>
                        {item.icon}
                      </div>
                      <span className={`text-xs font-black px-3 py-1 rounded-full border ${item.badgeCol}`}>
                        {item.num}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:translate-x-0.5 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="relative z-10 py-24 sm:py-32 bg-gradient-to-b from-[#fafbfc] via-white to-slate-50 border-t border-slate-100 overflow-hidden">
          {/* Ambient Decorative Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <div className="absolute top-1/3 right-[-5%] w-[35%] aspect-square rounded-full bg-gradient-to-br from-blue-200/20 via-indigo-200/20 to-transparent blur-[120px]" />
            <div className="absolute bottom-1/3 left-[-5%] w-[35%] aspect-square rounded-full bg-gradient-to-tr from-purple-200/20 via-emerald-200/15 to-transparent blur-[120px]" />
          </div>

          <div className="max-w-full mx-auto px-8 sm:px-16 lg:px-24 relative z-10 text-center">
            {/* Header */}
            <div className="max-w-4xl mx-auto space-y-4 mb-16">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-xs">
                <span>WHAT WE DO</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                App Store Optimization, Built Around Your Category
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 mx-auto rounded-full mt-2" />

              <p className="text-base sm:text-lg text-slate-600 font-semibold leading-relaxed pt-2 max-w-3xl mx-auto">
                ASO isn&apos;t a one-time checklist — it&apos;s an ongoing discipline of testing, measuring, and refining. We structure every engagement around three pillars: <span className="text-[#0d1b3e] font-extrabold">getting found</span>, <span className="text-[#0d1b3e] font-extrabold">getting chosen</span>, and <span className="text-[#0d1b3e] font-extrabold">getting kept</span>.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
              {[
                {
                  tier: "Tier 1 — Foundation",
                  title: "ASO Keyword Research & Strategy",
                  desc: "We identify the exact search terms your target users type into the App Store and Google Play — balancing search volume, competition difficulty, and commercial intent. This includes competitor keyword gap analysis so you're not just chasing the same terms as everyone else in your category.",
                  badgeCol: "bg-blue-100 text-blue-800 border-blue-200",
                  iconBg: "bg-blue-50 text-blue-600 border-blue-100",
                  cardBorder: "hover:border-blue-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)]",
                  topLine: "bg-blue-500",
                  icon: <Search className="w-6 h-6" />
                },
                {
                  tier: "2A — Visibility",
                  title: "App Store & Google Play Listing Optimization",
                  desc: "Title, subtitle, keyword field (iOS), short and long description (Android), and category selection — all rewritten and structured to maximize discoverability without triggering store guideline flags.",
                  badgeCol: "bg-emerald-100 text-emerald-800 border-emerald-200",
                  iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
                  cardBorder: "hover:border-emerald-300 hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)]",
                  topLine: "bg-emerald-500",
                  icon: <Smartphone className="w-6 h-6" />
                },
                {
                  tier: "2B — Conversion",
                  title: "Creative & Conversion Rate Optimization (CRO)",
                  desc: "Icon design, screenshot sequencing, preview videos, and A/B testing of store creative to increase the percentage of visitors who convert from \"viewed\" to \"installed.\"",
                  badgeCol: "bg-purple-100 text-purple-800 border-purple-200",
                  iconBg: "bg-purple-50 text-purple-600 border-purple-100",
                  cardBorder: "hover:border-purple-300 hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)]",
                  topLine: "bg-purple-500",
                  icon: <Sparkles className="w-6 h-6" />
                },
                {
                  tier: "Ongoing — Retention & Trust",
                  title: "Review & Rating Management",
                  desc: "Prompt strategy, response frameworks for negative reviews, and rating-recovery plans to keep your average above the threshold where users stop considering competitor apps.",
                  badgeCol: "bg-amber-100 text-amber-800 border-amber-200",
                  iconBg: "bg-amber-50 text-amber-600 border-amber-100",
                  cardBorder: "hover:border-amber-300 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)]",
                  topLine: "bg-amber-500",
                  icon: <Shield className="w-6 h-6" />
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`bg-white rounded-[28px] p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between group transition-all duration-500 relative overflow-hidden ${service.cardBorder}`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-[3.5px] ${service.topLine} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${service.iconBg}`}>
                        {service.icon}
                      </div>
                      <span className={`text-xs font-black px-3.5 py-1.5 rounded-full border ${service.badgeCol}`}>
                        {service.tier}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:translate-x-0.5 transition-transform duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tailored Category & Internal Link Footer Box */}
            <div className="mt-16 max-w-5xl mx-auto rounded-[28px] bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-purple-50/70 border border-indigo-100 p-8 text-left space-y-4 shadow-xs">
              <p className="text-sm sm:text-base text-slate-700 font-bold leading-relaxed">
                We tailor the mix based on your category (utility, ecommerce, fintech, on-demand, gaming) and whether your biggest gap is visibility, conversion, or retention.
              </p>
              <div className="border-t border-indigo-100/80 pt-4 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                <span>
                  If your visibility problem is actually a product problem (app is slow, crashes, or missing features users expect), pair ASO with our{" "}
                  <Link href="/app-development" className="text-[#2443ab] font-extrabold underline hover:text-indigo-900 transition-colors">
                    iOS & Android App Development
                  </Link>{" "}
                  team to fix retention at the source.
                </span>
              </div>
            </div>
          </div>
        </section>

        <ArchitectureTimeline
          title="The Framework"
          subtitle="How We Engineer App Store Rankings"
          tagline="“The System” — Our ASO Process"
          codeFile="src/app/aso-pipeline.ts"
          codeLines={[
            "import { AppStore, GooglePlay } from 'digital-edge';",
            "// Data-Backed App Store Optimization Pipeline",
            "export default async function AsoEngine() {",
            "  const keywords = await researchAppStoreKeywords();",
            "  return (",
            "    <Optimize metadata={keywords} creativeTesting={true}>",
            "      <AppStore position='#1' conversionRate='35%' />",
            "    </Optimize>",
            "  );",
            "}"
          ]}
          floatingBadge1Text="Conversion"
          floatingBadge1Sub="Listing Audit Passed"
          floatingBadge1Value="+140%"
          floatingBadge2Text="ASO Rank"
          floatingBadge2Sub="Category Dominance Engine"
          floatingBadge2Icon="Search"
          phases={[
            {
              num: "01",
              phase: "Phase 01 — ASO Audit & Competitor Analysis",
              text: "We audit your current listing, keyword rankings, conversion rate, and review sentiment, then benchmark against your top 3–5 category competitors.",
              borderCol: "border-l-[#2443ab]",
              dotCol: "border-blue-500 bg-white",
              shadowCol: "shadow-blue-500/5",
              iconColor: "text-blue-600 bg-blue-50 border-blue-100",
              iconAlign: "left",
              iconName: "Search"
            },
            {
              num: "02",
              phase: "Phase 02 — Keyword Research & Mapping",
              text: "We build a prioritized keyword map based on search volume, difficulty, and relevance, mapped to title, subtitle, and metadata fields.",
              borderCol: "border-l-[#a855f7]",
              dotCol: "border-purple-500 bg-white",
              shadowCol: "shadow-purple-500/5",
              iconColor: "text-purple-600 bg-purple-50 border-purple-100",
              iconAlign: "right",
              iconName: "Rocket"
            },
            {
              num: "03",
              phase: "Phase 03 — Listing & Creative Optimization",
              text: "We rewrite store copy and redesign visual assets (icon, screenshots, preview video) based on the keyword map and conversion best practices for your category.",
              borderCol: "border-l-[#ec4899]",
              dotCol: "border-pink-500 bg-white",
              shadowCol: "shadow-pink-500/5",
              iconColor: "text-pink-600 bg-pink-50 border-pink-100",
              iconAlign: "left",
              iconName: "Puzzle"
            },
            {
              num: "04",
              phase: "Phase 04 — A/B Testing",
              text: "We run store listing experiments (via Google Play Experiments and third-party iOS testing tools) to validate which creative and copy variants actually convert better.",
              borderCol: "border-l-[#f97316]",
              dotCol: "border-orange-500 bg-white",
              shadowCol: "shadow-orange-500/5",
              iconColor: "text-orange-600 bg-orange-50 border-orange-100",
              iconAlign: "right",
              iconName: "Zap"
            },
            {
              num: "05",
              phase: "Phase 05 — Launch & Monitor",
              text: "We push optimized changes live and track keyword rank movement, impression volume, and conversion rate daily.",
              borderCol: "border-l-[#10b981]",
              dotCol: "border-emerald-500 bg-white",
              shadowCol: "shadow-emerald-500/5",
              iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
              iconAlign: "left",
              iconName: "Code"
            },
            {
              num: "06",
              phase: "Phase 06 — Ongoing Optimization & Reporting",
              text: "ASO is never \"done.\" We continuously refine keywords, refresh creative, and manage review sentiment as competitors and algorithm behavior shift.",
              borderCol: "border-l-[#6366f1]",
              dotCol: "border-indigo-500 bg-white",
              shadowCol: "shadow-indigo-500/5",
              iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
              iconAlign: "right",
              iconName: "Shield"
            }
          ]}
        />
 
        {/* The Tangible Output Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12 border-b border-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.02)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-full mx-auto space-y-16">
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">Category-Specific Strategy</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    No generic checklists — strategy built around how users actually search within your specific app category.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Both Platforms Covered</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Deep expertise in both Apple's App Store Connect and Google Play Console — the ranking algorithms are different, and we treat them that way.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Transparent Reporting</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Clear monthly reporting on keyword rankings, install volume, and conversion rate — no vanity metrics.
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
                  <span className="text-[10px] font-black tracking-[0.2em] text-[#0d1b3e]/60 uppercase mb-2">Why Apps Choose Us</span>
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Data-Backed, Not Guesswork</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Every keyword and creative decision is backed by search volume and competitor data, not assumptions.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">Conversion-First Creative</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Screenshots and videos designed to convert, not just look good — informed by our UI/UX design experience.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-rose-500 transition-colors duration-300">Full-Funnel Thinking</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    We connect ASO to your broader growth stack, including{" "}
                    <Link href="/performance-marketing" className="text-[#2443ab] underline hover:opacity-80">
                      performance marketing
                    </Link>{" "}
                    and{" "}
                    <Link href="/seo-smm" className="text-[#2443ab] underline hover:opacity-80">
                      SEO & content strategy
                    </Link>
                    , so paid and organic channels reinforce each other instead of competing.
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
            <div className="space-y-4 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
                <span>WHY CHOOSE US</span>
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                Why Choose Digital Edge 360° for App Store Optimization
              </h2>
            </div>

            {/* Timeline Journey Wrapper */}
            <div className="relative flex flex-col gap-0 max-w-4xl mx-auto mt-20 text-left">
              {/* Central Timeline Dashed Connecting Line */}
              <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />

              {[
                {
                  num: "01",
                  title: "Full-Stack Growth Agency",
                  desc: "We don't just optimize your store listing in isolation — as a full-stack digital growth agency, we can connect ASO to your web presence, paid campaigns, and app development roadmap.",
                  circleBg: "bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_6px_20px_rgba(59,130,246,0.35)]",
                  lineColor: "bg-blue-500",
                  textColor: "text-blue-500",
                  borderColor: "border-blue-100 hover:border-blue-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]",
                  grad: "from-white via-white to-blue-50/10"
                },
                {
                  num: "02",
                  title: "Platform Agnostic",
                  desc: "Whether your app is native iOS, native Android, or cross-platform (React Native/Flutter), our ASO recommendations are based on what actually improves your ranking — not a fixed playbook.",
                  circleBg: "bg-gradient-to-br from-purple-400 to-violet-600 shadow-[0_6px_20px_rgba(139,92,246,0.35)]",
                  lineColor: "bg-purple-500",
                  textColor: "text-purple-600",
                  borderColor: "border-purple-100 hover:border-purple-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]",
                  grad: "from-white via-white to-purple-50/10"
                },
                {
                  num: "03",
                  title: "Built for Long-Term Ranking Stability",
                  desc: "App store algorithms change. We monitor ranking factor shifts on both platforms so your keyword strategy adapts instead of degrading over time.",
                  circleBg: "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_6px_20px_rgba(16,185,129,0.35)]",
                  lineColor: "bg-emerald-500",
                  textColor: "text-emerald-500",
                  borderColor: "border-emerald-100 hover:border-emerald-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(16,185,129,0.08)]",
                  grad: "from-white via-white to-emerald-50/10"
                },
                {
                  num: "04",
                  title: "Real Apps, Real Rankings",
                  desc: "We've optimized listings for apps that are live and ranking today across ecommerce, on-demand, and fintech categories — not just theoretical case studies.",
                  circleBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_6px_20px_rgba(249,115,22,0.35)]",
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

        {/* Pricing Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-gradient-to-b from-white via-slate-50/50 to-[#fafbfc] border-t border-slate-100 text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          {/* Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <div className="absolute top-1/3 left-[-5%] w-[40%] aspect-square rounded-full bg-gradient-to-tr from-blue-200/25 via-indigo-200/20 to-transparent blur-[120px]" />
            <div className="absolute bottom-1/3 right-[-5%] w-[40%] aspect-square rounded-full bg-gradient-to-bl from-purple-200/25 via-sky-200/20 to-transparent blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-xs">
                <span>PRICING</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                What Does App Store Optimization Cost?
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 mx-auto rounded-full mt-2" />
              <p className="text-slate-600 font-semibold text-base sm:text-lg leading-relaxed pt-2">
                ASO pricing depends on your category competitiveness, current install volume, and whether you need a one-time audit or ongoing monthly optimization.
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left items-stretch">
              {/* Card 1: One-Time Audit */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="bg-white rounded-[32px] p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-blue-500" />
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 uppercase tracking-wider">
                      One-Time
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors">
                      ASO Audit
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                      One-Time Project
                    </p>
                  </div>
                  <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed">
                    A complete audit of your current listing, keyword rankings, conversion rate, and competitor positioning, with a prioritized action plan.
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Growth Retainer (Most Popular) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-b from-white via-indigo-50/30 to-white rounded-[32px] p-8 border-2 border-[#2443ab] shadow-[0_15px_45px_rgba(36,67,171,0.12)] hover:shadow-[0_20px_50px_rgba(36,67,171,0.2)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group scale-102"
              >
                <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-indigo-700 bg-indigo-50 px-3.5 py-1.5 rounded-full border border-indigo-200 uppercase tracking-wider">
                      Monthly Retainer
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-white bg-gradient-to-r from-[#0a8bc7] to-[#2443ab] px-3 py-1 rounded-full shadow-xs">
                      ★ Most Popular
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-[#2443ab] transition-colors">
                      Growth Retainer
                    </h3>
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mt-1">
                      Ongoing Monthly Optimization
                    </p>
                  </div>
                  <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
                    Ongoing keyword optimization, creative testing, and review management — built for apps actively trying to scale organic installs.
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Enterprise */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-[32px] p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-purple-600" />
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-purple-600 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-100 uppercase tracking-wider">
                      Enterprise
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors">
                      Enterprise / Multi-App
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                      Scoped Individually
                    </p>
                  </div>
                  <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed">
                    For portfolios with multiple apps, multi-market listings, or complex localization needs across regions and languages.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom Note & CTA */}
            <div className="pt-6 max-w-3xl mx-auto space-y-6 flex flex-col items-center">
              <p className="text-slate-500 font-bold text-sm sm:text-base leading-relaxed">
                We scope pricing after understanding your app category, current ranking position, and growth goals — not before.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <span>Get a Free ASO Quote</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Roadmap Section (SEO Recap) */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-white border-t border-slate-100 text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          <div className="relative z-10 max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="max-w-3xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-200 bg-indigo-50/80 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-indigo-600 uppercase shadow-xs">
                <span>OUR ROADMAP</span>
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                Our ASO Roadmap
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 mx-auto rounded-full mt-2" />
              <p className="text-slate-600 font-semibold text-base sm:text-lg leading-relaxed pt-2">
                A systematic, data-driven approach to climbing app store rankings and driving sustainable organic downloads.
              </p>
            </div>

            {/* Roadmap Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
              {[
                {
                  step: "01",
                  title: "Audit & Competitor Research",
                  desc: "Understanding your current position and category benchmarks.",
                  iconCol: "bg-blue-50 text-blue-600 border-blue-100",
                  badgeCol: "bg-blue-100 text-blue-700 border-blue-200",
                  topLine: "bg-blue-500"
                },
                {
                  step: "02",
                  title: "Keyword Strategy",
                  desc: "Building your priority keyword map.",
                  iconCol: "bg-purple-50 text-purple-600 border-purple-100",
                  badgeCol: "bg-purple-100 text-purple-700 border-purple-200",
                  topLine: "bg-purple-500"
                },
                {
                  step: "03",
                  title: "Listing & Creative Optimization",
                  desc: "Rewriting copy and redesigning visual assets.",
                  iconCol: "bg-pink-50 text-pink-600 border-pink-100",
                  badgeCol: "bg-pink-100 text-pink-700 border-pink-200",
                  topLine: "bg-pink-500"
                },
                {
                  step: "04",
                  title: "A/B Testing",
                  desc: "Validating what actually converts.",
                  iconCol: "bg-orange-50 text-orange-600 border-orange-100",
                  badgeCol: "bg-orange-100 text-orange-700 border-orange-200",
                  topLine: "bg-orange-500"
                },
                {
                  step: "05",
                  title: "Launch & Monitor",
                  desc: "Tracking rank and install movement.",
                  iconCol: "bg-emerald-50 text-emerald-600 border-emerald-100",
                  badgeCol: "bg-emerald-100 text-emerald-700 border-emerald-200",
                  topLine: "bg-emerald-500"
                },
                {
                  step: "06",
                  title: "Iterate",
                  desc: "Continuous refinement based on real performance data.",
                  iconCol: "bg-indigo-50 text-indigo-600 border-indigo-100",
                  badgeCol: "bg-indigo-100 text-indigo-700 border-indigo-200",
                  topLine: "bg-indigo-500"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-slate-50/50 hover:bg-white rounded-[28px] p-8 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-default"
                >
                  <div className={`absolute top-0 left-0 right-0 h-[3.5px] ${item.topLine} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm border ${item.iconCol} group-hover:scale-110 transition-transform`}>
                        {item.step}
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${item.badgeCol}`}>
                        Step {item.step}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The FAQ Accordion Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] border-t border-slate-100/80 text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          <div className="relative z-10 max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Accordion Container */}
            <div className="max-w-5xl mx-auto bg-white rounded-[32px] border border-slate-100/80 shadow-[0_10px_45px_rgba(0,0,0,0.02)] p-6 sm:p-10 text-left">
              {[
                {
                  q: "What is App Store Optimization (ASO)?",
                  a: "App Store Optimization is the process of improving an app's visibility and conversion rate within app store search results and browse listings — primarily on Apple's App Store and Google Play. It includes keyword research, metadata optimization, creative testing, and review management."
                },
                {
                  q: "How is ASO different from SEO?",
                  a: "SEO improves rankings on web search engines like Google Search, while ASO improves rankings inside app store search engines (App Store and Google Play). The principles overlap — keyword relevance, user intent, engagement signals — but the ranking factors, fields, and algorithms are different for each platform."
                },
                {
                  q: "How long does it take to see ASO results?",
                  a: "Most apps see initial keyword ranking movement within 4–8 weeks of implementing changes, with more significant install growth compounding over 3–6 months as rankings stabilize and creative testing identifies winning variants."
                },
                {
                  q: "Does ASO work for both iOS and Android?",
                  a: "Yes, but the strategy differs. Apple's App Store uses a dedicated keyword field and rewards keyword density in title/subtitle, while Google Play's algorithm crawls the full description text. We build platform-specific strategies for each."
                },
                {
                  q: "How much does App Store Optimization cost?",
                  a: "Cost depends on whether you need a one-time audit, an ongoing monthly retainer, or enterprise support across multiple apps and markets. We scope pricing after reviewing your app category and current performance."
                },
                {
                  q: "Can ASO replace paid app install campaigns?",
                  a: (
                    <>
                      ASO reduces dependency on paid installs over time by improving organic visibility and conversion rate, but most successful apps use both — organic ASO to lower blended acquisition cost, and{" "}
                      <Link href="/performance-marketing" className="text-[#2443ab] underline hover:opacity-80">
                        performance marketing
                      </Link>{" "}
                      to accelerate growth during launch or category-competitive periods.
                    </>
                  )
                },
                {
                  q: "Do you also redesign app screenshots and icons?",
                  a: "Yes. Creative optimization — icon design, screenshot sequencing, and preview videos — is a core part of our ASO process, since conversion rate depends as much on visual creative as on keyword ranking."
                },
                {
                  q: "What if my app's low ranking is actually a product or performance issue?",
                  a: (
                    <>
                      If users are uninstalling quickly or leaving negative reviews about bugs, crashes, or slow performance, ASO alone won't fix the underlying issue. In these cases, we recommend pairing ASO with our{" "}
                      <Link href="/app-development" className="text-[#2443ab] underline hover:opacity-80">
                        app development and maintenance
                      </Link>{" "}
                      team to address the product experience.
                    </>
                  )
                },
                {
                  q: "Do you manage app reviews and ratings?",
                  a: "Yes. We build review-prompt strategies to increase positive review volume at the right moment in the user journey, and response frameworks to handle negative reviews professionally and protect your average rating."
                },
                {
                  q: "What's included in the free ASO audit?",
                  a: "A full review of your current keyword rankings, listing copy, creative assets, conversion rate benchmarks, and a comparison against your top category competitors — with a prioritized list of quick wins and longer-term recommendations."
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
                      <div className="text-slate-500 text-base sm:text-lg font-semibold leading-relaxed mt-4">
                        {faq.a}
                      </div>
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
              Ready to Rank Higher and Convert More Installs?
            </h2>
            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg font-semibold tracking-wide max-w-3xl leading-relaxed">
              Book a free, no-obligation ASO audit call. We'll show you exactly where your listing is losing installs and what it would take to fix it.
            </p>

            {/* Button Links */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap"
              >
                <span>Schedule Your Free ASO Audit</span>
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
