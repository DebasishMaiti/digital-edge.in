"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandLogosList } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import AnimatedWords from "@/components/AnimatedWords";
import Marquee from "react-fast-marquee";

export default function AppDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const appImages = [
    "/app-development-img/aladeen.png",
    "/app-development-img/instayaar.png",
    "/app-development-img/kaam-dham.png",
    "/app-development-img/noend.png",
    "/app-development-img/publix.png",
    "/app-development-img/sabjiKing.png",
    "/app-development-img/hubfit.png",
    "/app-development-img/recipe-keeper.png",
    "/app-development-img/velvet-box.png",
  ];

  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(226, 232, 240, 0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
    `,
    backgroundSize: "48px 48px",
    maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
  };

  const faqs = [
    {
      q: "How much does ecommerce app development cost?",
      a: "Cost depends on whether the app is native or cross-platform, the size of the product catalog, and which custom features are included. Cross-platform builds using React Native or Flutter are generally faster and less expensive than fully native iOS and Android apps built separately."
    },
    {
      q: "How do I hire an ecommerce app developer?",
      a: "Start with a discovery call to walk through your business goals, product catalog, and whether you need native or cross-platform development. A development team should scope the project — design, build, app store submission, and timeline — before any commitment is made."
    },
    {
      q: "Should I build a native app or a cross-platform app?",
      a: "Native apps (built separately for iOS and Android) offer the best performance and deepest platform integration, but cost more and take longer. Cross-platform frameworks like React Native or Flutter let you launch on both platforms from a single codebase, which is usually faster and more cost-effective for most ecommerce apps."
    },
    {
      q: "How long does it take to build an ecommerce app?",
      a: "Timeline depends on platform choice and feature complexity. Cross-platform apps with standard ecommerce functionality typically take less time than fully native builds or apps with custom features like multi-vendor marketplace support."
    },
    {
      q: "Do you handle app store submission for iOS and Android?",
      a: "Yes — submitting to the App Store and Google Play, and handling each platform’s review and compliance requirements, is part of the standard ecommerce app development process."
    },
    {
      q: "Can you add push notifications and loyalty features to my ecommerce app?",
      a: "Yes — push notifications, loyalty programs, saved payment methods, and other engagement features are common additions built into ecommerce apps to improve repeat purchase rates."
    },
    {
      q: "Can you redesign or migrate my existing ecommerce app?",
      a: "Yes — app redesigns and framework migrations (for example, moving from native to cross-platform to reduce long-term maintenance costs) are available, with a focus on preserving existing user data and app store rankings built up over time."
    }
  ];

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.com/app-development" />
      <div className="w-full bg-[#fafbfc] min-h-screen pb-24 text-slate-800">
        
        {/* Hero Section */}
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
            <div className="absolute top-[10%] left-[10%] w-[35%] aspect-square rounded-full bg-gradient-to-br from-[#0ea5e9]/8 via-[#3b82f6]/6 to-transparent blur-[80px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#60a5fa]/8 via-transparent to-transparent blur-[90px]" />
          </div>

          {/* SVG Custom Graphics - Isometric smartphone structures & diagonal dots */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-45">
            <svg className="w-full h-full min-w-[1000px] min-h-[500px]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              {/* Isometric phone card 1 */}
              <g transform="translate(150, 100) rotate(15)">
                <rect x="0" y="0" width="120" height="220" rx="18" fill="none" stroke="rgba(14, 165, 233, 0.2)" strokeWidth="3" />
                <rect x="10" y="10" width="100" height="170" rx="10" fill="none" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1.5" />
                <circle cx="60" cy="195" r="8" fill="none" stroke="rgba(14, 165, 233, 0.2)" strokeWidth="2" />
              </g>

              {/* Isometric phone card 2 */}
              <g transform="translate(950, 180) rotate(-15)">
                <rect x="0" y="0" width="110" height="200" rx="16" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2.5" />
                <rect x="8" y="8" width="94" height="150" rx="8" fill="rgba(14, 165, 233, 0.03)" />
                <line x1="40" y1="175" x2="70" y2="175" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="3" strokeLinecap="round" />
              </g>

              {/* Scattered dot arrays */}
              <g transform="translate(450, 60) rotate(30)">
                {Array.from({ length: 4 }).map((_, r) =>
                  Array.from({ length: 10 }).map((_, c) => (
                    <circle
                      key={`appdev-dot-${r}-${c}`}
                      cx={c * 15}
                      cy={r * 15}
                      r={1.5}
                      fill="rgb(14, 165, 233)"
                      opacity={0.15}
                    />
                  ))
                )}
              </g>
            </svg>
          </div>

          <div className="relative z-10 max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <h1 className="inline-flex items-center gap-1.5 rounded-full border border-gray-600 bg-white px-6 py-3.5 text-sm sm:text-base md:text-sm font-extrabold tracking-[0.2em] text-gray-600 uppercase shadow-sm mb-6">
                Ecommerce App Development Company
              </h1>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
                Ecommerce App Development
              </h2>
              
              <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-2xl">
                Native and cross-platform ecommerce apps for growing businesses, with live apps already running on the App Store and Google Play.
              </p>
              
              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-2xl">
                An ecommerce app development company builds shopping apps for iOS and Android — covering everything from UI/UX design and payment gateway integration to app store deployment and post-launch support. We build using both native and cross-platform frameworks, so the app matches your budget, timeline, and long-term scaling plans rather than a one-size-fits-all approach.
              </p>

              {/* Full Width Line Divider */}
              <div className="w-full border-t border-slate-200/60 my-3"></div>

              {/* CTA and Ratings */}
              <div className="flex flex-col items-start gap-4 mb-8 text-left w-full">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] text-white text-xs font-extrabold rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(36,67,171,0.25)] hover:shadow-[0_10px_24px_rgba(64,21,158,0.4)] hover:opacity-95 flex items-center justify-center gap-2 uppercase tracking-wider mt-4"
                >
                  <span>Book a Strategy Call</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>

              {/* Brand Logos circular slider */}
              <div className="w-full max-w-xl overflow-hidden relative mt-4">
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#fafbfc] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#f5f5fa] to-transparent z-10 pointer-events-none" />

                <Marquee speed={30} gradient={false} play={true}>
                  {brandLogosList.concat(brandLogosList).map((logo, index) => (
                    <div key={index} className="w-16 h-16 rounded-full border border-slate-200/80 bg-white flex items-center justify-center p-2.5 shadow-[0_4px_10px_-4px_rgba(0,0,0,0.05)] hover:border-slate-300 hover:shadow-md transition-all duration-300 mx-2 flex-shrink-0">
                      <div className="w-10 h-10 relative">
                        <Image src={logo.src} alt={logo.name} fill className="object-contain" />
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

        {/* App Showcase Slider */}
        <section className="relative z-10 w-full py-16 bg-[#fafbfc] overflow-hidden">
          <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#a855f7] uppercase shadow-sm">
              App Showcase
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight mt-4">
              Designed for Pure Dominance
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-semibold leading-relaxed mt-4 max-w-2xl mx-auto">
              Glance through our high-converting mobile interfaces. We engineer blazing fast, responsive layouts with custom interactive flows.
            </p>
          </div>

          <div className="w-full relative">
            <Marquee speed={100} gradient={false} play={true} pauseOnHover={true}>
              {appImages.map((src, index) => (
                <div key={index} className="w-[280px] mx-4 flex-shrink-0 flex flex-col items-center py-12 group">
                  {/* Phone Mockup Frame */}
                  <div className="w-[250px] h-[500px] rounded-[42px] bg-[#0c101a] p-2 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] border border-[#1f293d] relative overflow-visible transition-all duration-300 group-hover:shadow-[0_30px_60px_-15px_rgba(36,67,171,0.35)] group-hover:border-[#2443ab]/50 group-hover:scale-[1.03]">
                    {/* Top Camera Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0c101a] rounded-b-[20px] z-30 flex items-center justify-center gap-2 pb-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-800" />
                    </div>

                    {/* Inner Screen */}
                    <div className="w-full h-full rounded-[32px] overflow-hidden bg-slate-950 relative border border-black/40 py-[5px]">
                      <div className="w-full h-full overflow-hidden relative">
                        <Image src={src} alt={`App Screen ${index}`} fill className="object-cover object-top" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* Key Takeaways Section */}
        <section className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="bg-gradient-to-br from-[#0d1b3e] to-[#1e293b] rounded-[32px] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <span className="text-[#a855f7] text-xs font-black tracking-widest uppercase block mb-4">Summary</span>
            <h3 className="text-2xl sm:text-3xl font-black mb-8">Key Takeaways</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "We build ecommerce apps for both iOS and Android, using native or cross-platform frameworks depending on the project.",
                "We have live, published apps already running on the App Store and Google Play.",
                "Pricing depends on platform choice, feature scope, and whether the app is native or cross-platform — a proper quote comes after a scoping call, not a flat rate.",
                "We handle the full app lifecycle: design, development, app store submission, and ongoing maintenance."
              ].map((takeaway, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#a855f7]/20 border border-[#a855f7]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#a855f7]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <p className="text-slate-200 font-semibold leading-relaxed">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-gradient-to-br from-red-50/40 via-white to-amber-50/20 text-slate-800 border-y border-red-100/60 overflow-hidden">
          {/* Subtle warm glow accents */}
          <div className="absolute top-[20%] left-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-br from-red-500/5 to-transparent blur-[100px] pointer-events-none z-0" />
          
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side info */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50/80 px-4 py-1.5 text-xs font-black tracking-widest text-red-600 uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Critical Leak
              </span>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                The Problem:<br />
                A Website Isn’t<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                  Enough Anymore
                </span>
              </h3>
              
              <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed">
                Ecommerce customers increasingly expect a dedicated app, not just a mobile-friendly website. A website that works fine on mobile still isn’t the same experience as a native app — slower load times between sessions, no push notifications to bring customers back, and a checkout flow that has to be re-authenticated every visit instead of stored securely on-device.
              </p>
              
              <div className="p-6 bg-red-50/60 border border-red-100 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-red-500" />
                <p className="text-sm sm:text-base text-red-950 font-bold leading-relaxed pl-2">
                  An ecommerce app isn’t just a mobile version of your website — it’s a different product built around repeat engagement and faster, stickier purchasing.
                </p>
              </div>
            </div>

            {/* Right side: Vertical Stacked warning cards */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              {[
                {
                  title: "No Push Retention",
                  desc: "No way to send push notifications for cart reminders, restocks, or promotions.",
                  border: "border-red-100 hover:border-red-300"
                },
                {
                  title: "High Checkout Friction",
                  desc: "Checkout friction because saved payment details and addresses don’t persist the way they would in a native app.",
                  border: "border-red-100 hover:border-red-300"
                },
                {
                  title: "No Offline Browsing",
                  desc: "No offline browsing or slow reloads on weaker mobile connections.",
                  border: "border-orange-100 hover:border-orange-300"
                },
                {
                  title: "Wrapped Browser Limits",
                  desc: "A website that “sort of” works as an app via a wrapped browser view, without any of the actual performance benefits.",
                  border: "border-orange-100 hover:border-orange-300"
                }
              ].map((gap, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col sm:flex-row items-start gap-5 p-6 bg-white border rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_32px_rgba(239,68,68,0.05)] hover:-translate-y-0.5 relative overflow-hidden group ${gap.border}`}
                >
                  {/* Left visual strip indicator */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/40 group-hover:bg-red-500 transition-colors duration-300" />
                  
                  {/* Warning Hexagon/Icon */}
                  <div className="w-12 h-12 rounded-xl bg-red-50/50 border border-red-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5.5 h-5.5 text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-lg sm:text-xl font-bold text-[#0d1b3e] tracking-tight group-hover:text-red-600 transition-colors duration-200">
                      {gap.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                      {gap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Platform & Expertise Section (Pyramid Structure with Deeper Gradients) */}
        <section className="relative w-full z-10 py-24 bg-gradient-to-br from-indigo-100 via-slate-50 to-emerald-100 overflow-hidden">
          
          {/* Deeper floating glowing orbs corresponding to the pyramid nodes */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-purple-500/15 blur-[80px] sm:blur-[110px] pointer-events-none z-0" />
          <div className="absolute bottom-[20%] left-[15%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-blue-500/15 blur-[70px] sm:blur-[90px] pointer-events-none z-0" />
          <div className="absolute bottom-[20%] right-[15%] w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] rounded-full bg-emerald-500/15 blur-[70px] sm:blur-[90px] pointer-events-none z-0" />

          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <span className="text-blue-700 text-xs font-black tracking-widest uppercase">Our Framework Strategy</span>
              <h3 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight">
                What We Do: Ecommerce App Development, Built Around Your Platform
              </h3>
              <p className="text-base sm:text-lg text-slate-600 font-bold leading-relaxed">
                We’re an ecommerce mobile app development team, and the tech stack decision comes after understanding your product catalog, budget, and timeline — not before.
              </p>
            </div>

            {/* Pyramid Structure Container */}
            <div className="max-w-5xl mx-auto flex flex-col items-center relative">
              
              {/* TIER 1: The Apex (Strategy & Custom Architecture) */}
              <div className="relative z-10 w-full max-w-2xl text-center pb-12">
                <div className="inline-flex flex-col items-center">
                  <span className="text-xs font-black text-purple-700 uppercase tracking-widest bg-purple-200/80 px-4 py-1.5 rounded-full border border-purple-300 mb-4">
                    Tier 1 — Core Strategy & Architecture (Apex)
                  </span>
                  <h4 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight mb-4">
                    Custom Ecommerce App Development
                  </h4>
                  <p className="text-base text-slate-700 font-semibold leading-relaxed max-w-xl mx-auto">
                    Every app we build is structured around how your specific customers browse and buy — product discovery, cart flow, checkout, and post-purchase experience are all mapped out before a single screen gets designed. This is custom ecommerce app development in the real sense: architecture that matches how your product actually sells, not a repurposed template.
                  </p>
                </div>

                {/* Graphical Connecting Lines (Visualizing Pyramid flow) */}
                <div className="hidden md:flex justify-center items-center gap-24 mt-8 relative w-full h-8">
                  <svg className="w-full h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 400 50">
                    <path strokeWidth="2.5" strokeDasharray="6 6" d="M200 0 L50 50 M200 0 L350 50" />
                    <polygon points="50,50 57,43 47,45" className="fill-slate-400 stroke-none" />
                    <polygon points="350,50 353,45 343,43" className="fill-slate-400 stroke-none" />
                  </svg>
                </div>
              </div>

              {/* TIER 2: The Base (Implementation & Platforms) */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 pt-8 border-t border-slate-300 md:border-t-0 text-left">
                
                {/* Left Base Piece: Native */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                      2A
                    </div>
                    <span className="text-xs font-black text-blue-700 uppercase tracking-widest">
                      Platform Specific
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-[#0d1b3e] tracking-tight">
                    Native iOS & Android Development
                  </h4>
                  <p className="text-base text-slate-600 font-semibold leading-relaxed">
                    Native iOS development gives the smoothest possible performance and full access to Apple’s platform features, and it’s the right call when performance and polish matter most. Native Android development follows the same logic on Google’s side — deep platform integration, built specifically for Android devices and the Play Store ecosystem.
                  </p>
                </div>

                {/* Right Base Piece: Cross-Platform */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm shrink-0">
                      2B
                    </div>
                    <span className="text-xs font-black text-emerald-700 uppercase tracking-widest">
                      Hybrid & Lightweight
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-[#0d1b3e] tracking-tight">
                    Cross-Platform & PWAs
                  </h4>
                  <p className="text-base text-slate-600 font-semibold leading-relaxed">
                    For most ecommerce apps, cross-platform frameworks like React Native or Flutter make more sense — one codebase, both platforms, faster to build and easier to maintain long-term. And for brands that want their website and app pulling from the same backend without maintaining two separate systems, we also build progressive web apps as a lighter alternative.
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-20 text-center p-6 bg-slate-200/60 border border-slate-300/80 rounded-3xl max-w-2xl mx-auto">
              <p className="text-sm sm:text-base text-slate-700 font-semibold">
                We help you choose based on your catalog size, budget, and how fast you need to launch — not what we happen to prefer building.
              </p>
            </div>
          </div>
        </section>


        {/* Full-Stack Deliverable & Support */}
        <section className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-20 bg-white border-y border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[#a855f7] text-xs font-black tracking-widest uppercase">Start-to-Finish Lifecycle</span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                What’s Included From Start to Finish
              </h3>
              <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed">
                Building an ecommerce app means handling the full stack: UI/UX design tailored to how your customers actually shop, product catalog and search functionality, secure payment gateway integration, push notification setup, order tracking and management, app store submission and compliance (App Store and Google Play both have their own review requirements), and a testing process across devices before anything goes live.
              </p>
              
              <div className="w-full border-t border-slate-200/60 pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] to-[#2443ab] px-8 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get a Free Quote &rarr;
                </Link>
              </div>
            </div>

            {/* Right side support offers */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="p-8 bg-gradient-to-br from-blue-100 to-indigo-200 border border-blue-300 rounded-[32px] hover:shadow-md transition-shadow duration-300">
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight mb-4">
                  Full-Service Ecommerce App Support
                </h4>
                <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
                  New app builds are only part of what we handle. Businesses that already have an app but are seeing high uninstall rates or poor reviews come to us for a redesign rather than starting over. Others need to migrate from one framework to another — moving from a native build to cross-platform to cut long-term maintenance costs, for example — without losing existing user data or app store rankings built up over time.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-purple-100 to-violet-200 border border-purple-300 rounded-[32px] hover:shadow-md transition-shadow duration-300">
                <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight mb-4">
                  Narrow Scope Engineering
                </h4>
                <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed">
                  Some projects are narrower: fixing a payment gateway that’s failing too many transactions at checkout, adding multi-vendor marketplace functionality to an existing app, or ongoing maintenance so app updates, OS compatibility, and security patches don’t fall behind. We scope each engagement to what the app actually needs.
                </p>
              </div>
            </div>
            
          </div>
        </section>

        {/* The Workflow Timeline (How it Works) */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          <div className="relative z-10 max-w-5xl mx-auto space-y-16">
            
            <div className="space-y-4 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
                <span>OUR WORKFLOW</span>
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                How It Works: Our Process
              </h2>
            </div>

            <div className="relative flex flex-col gap-0 max-w-4xl mx-auto mt-20 text-left">
              {/* Timeline Dashed Connecting Line */}
              <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />

              {[
                {
                  num: "01",
                  title: "Discovery Call",
                  desc: "We learn your business, product catalog, target customers, and goals, and whether you already have an existing website or backend to connect to.",
                  lineColor: "bg-blue-500",
                  borderColor: "border-blue-100 hover:border-blue-300",
                  circleBg: "bg-gradient-to-br from-blue-400 to-indigo-600",
                  grad: "from-white via-white to-blue-50/10"
                },
                {
                  num: "02",
                  title: "Platform & Framework Recommendation",
                  desc: "Based on budget, timeline, and catalog complexity, we recommend native iOS/Android or a cross-platform build.",
                  lineColor: "bg-purple-500",
                  borderColor: "border-purple-100 hover:border-purple-300",
                  circleBg: "bg-gradient-to-br from-purple-400 to-violet-600",
                  grad: "from-white via-white to-purple-50/10"
                },
                {
                  num: "03",
                  title: "Design",
                  desc: "UX wireframes and UI design reviewed and refined with you before development starts.",
                  lineColor: "bg-pink-500",
                  borderColor: "border-rose-100 hover:border-rose-300",
                  circleBg: "bg-gradient-to-br from-pink-400 to-rose-600",
                  grad: "from-white via-white to-rose-50/10"
                },
                {
                  num: "04",
                  title: "Development",
                  desc: "App build, payment gateway integration, push notifications, and QA testing across real devices.",
                  lineColor: "bg-orange-500",
                  borderColor: "border-orange-100 hover:border-orange-300",
                  circleBg: "bg-gradient-to-br from-amber-400 to-orange-500",
                  grad: "from-white via-white to-orange-50/10"
                },
                {
                  num: "05",
                  title: "App Store Submission",
                  desc: "Handling the submission and review process for both the App Store and Google Play.",
                  lineColor: "bg-emerald-500",
                  borderColor: "border-emerald-100 hover:border-emerald-300",
                  circleBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
                  grad: "from-white via-white to-emerald-50/10"
                },
                {
                  num: "06",
                  title: "Ongoing Support",
                  desc: "Maintenance, OS compatibility updates, and feature additions based on real usage data after launch.",
                  lineColor: "bg-indigo-500",
                  borderColor: "border-indigo-100 hover:border-indigo-300",
                  circleBg: "bg-gradient-to-br from-indigo-400 to-slate-600",
                  grad: "from-white via-white to-indigo-50/10"
                }
              ].map((step, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <div key={idx} className={`flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-12 relative z-10 py-0.5 lg:-my-2.5 ${isLeft ? "" : "lg:flex-row-reverse"}`}>
                    
                    {/* Node point */}
                    <div className={`absolute left-6 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 ${step.lineColor.replace('bg-', 'border-')} flex items-center justify-center z-20 shadow-sm transition-transform duration-300 hover:scale-125`}>
                      <div className={`w-2.5 h-2.5 rounded-full ${step.lineColor}`} />
                    </div>

                    {/* Content Box */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full lg:w-[45%] pl-14 lg:pl-0 ${isLeft ? "lg:text-right" : "lg:text-left"}`}
                    >
                      <div className={`p-5 rounded-[24px] border bg-gradient-to-br ${step.grad} ${step.borderColor} shadow-sm hover:shadow-md transition-all duration-300 group`}>
                        <div className={`flex items-center gap-3 mb-2.5 ${isLeft ? "lg:justify-end" : "lg:justify-start"}`}>
                          {isLeft && <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight">{step.title}</h3>}
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 ${step.circleBg} group-hover:scale-110 transition-transform duration-300`}>
                            {step.num}
                          </div>
                          {!isLeft && <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight">{step.title}</h3>}
                        </div>
                        <div className={`w-12 h-1 rounded mt-2 mb-4 ${step.lineColor} ${isLeft ? "lg:ml-auto" : "lg:mr-auto"}`} />
                        <p className="text-sm sm:text-[15px] text-slate-500 font-semibold leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>

                    {/* Spacer Column */}
                    <div className="hidden lg:block lg:w-[45%]" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Digital Edge 360 */}
        <section className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-24 bg-white border-y border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Sticky/Fixed Title Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 text-left space-y-4">
              <span className="text-[#2443ab] text-xs font-black tracking-widest uppercase">The Client Advantage</span>
              <h3 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e]">Digital Edge 360°</span>
              </h3>
            </div>

            {/* Values Grid with phase-styled gradient cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              {[
                {
                  num: "01",
                  title: "Shipped & Live Applications",
                  desc: "We’ve built and shipped ecommerce apps that are live on the App Store and Google Play today, not just prototypes or portfolio mockups.",
                  grad: "from-blue-50 to-indigo-100/50 border-blue-200/60 hover:border-blue-300",
                  textCol: "text-blue-600"
                },
                {
                  num: "02",
                  title: "Framework Agnostic approach",
                  desc: "We’re not locked into one framework, so the recommendation you get is based on what your catalog and budget actually need, not what we’re most comfortable building.",
                  grad: "from-purple-50 to-violet-100/50 border-purple-200/60 hover:border-purple-300",
                  textCol: "text-[#a855f7]"
                },
                {
                  num: "03",
                  title: "Engineered for Conversion",
                  desc: "Every design decision gets made with checkout completion and repeat engagement in mind — push notifications, saved payment details, and fast reloads aren’t afterthoughts; they’re the whole point of building an app instead of relying on a website.",
                  grad: "from-pink-50 to-rose-100/50 border-pink-200/60 hover:border-pink-300",
                  textCol: "text-rose-500"
                },
                {
                  num: "04",
                  title: "Long-Term Partnership",
                  desc: "And we don’t disappear after launch — app store compliance requirements and OS updates mean ecommerce apps need ongoing maintenance, and that’s part of how we work with clients long-term.",
                  grad: "from-amber-50 to-orange-100/50 border-amber-200/60 hover:border-amber-300",
                  textCol: "text-amber-600"
                }
              ].map((card, idx) => (
                <div 
                  key={idx} 
                  className={`p-8 rounded-[32px] border bg-gradient-to-br ${card.grad} shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden min-h-[220px]`}
                >
                  {/* Huge Background Number */}
                  <div className={`absolute right-4 bottom-2 text-[6rem] font-black opacity-10 select-none pointer-events-none ${card.textCol}`}>
                    {card.num}
                  </div>

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <span className={`text-xs font-black uppercase tracking-wider ${card.textCol}`}>
                      Advantage {card.num}
                    </span>
                    <h4 className="text-xl font-bold text-[#0d1b3e] mt-4 mb-2 tracking-tight">
                      {card.title}
                    </h4>
                    <p className="text-sm text-slate-600 font-semibold leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </section>

        {/* Pricing / Estimates Section */}
        <section className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-24 bg-[#fafbfc]">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[#a855f7] text-xs font-black tracking-widest uppercase">Budget & Scoping</span>
            <h3 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight">
              Pricing: What Does an Ecommerce App Cost?
            </h3>
            <p className="text-base text-slate-500 font-semibold leading-relaxed">
              Ecommerce app development pricing depends heavily on a few factors: native vs. cross-platform, the size of your product catalog, and how many custom features (multi-vendor support, loyalty programs, advanced search, AR product previews, etc.) you need beyond a standard shopping flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left items-stretch">
            
            {/* Tier 1 */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 15h9.75M9 9.75h3.75m-3.75 3h3.75" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-[#0d1b3e] tracking-tight">Cross-Platform Apps</h4>
                <p className="text-sm text-slate-400 font-extrabold tracking-widest uppercase">Fast & Agile</p>
                <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                  React Native / Flutter, standard shopping features: faster to build, lower cost, one codebase for both iOS and Android.
                </p>
              </div>
            </div>

            {/* Tier 2 */}
            <div className="bg-white p-8 rounded-[32px] border-2 border-[#2443ab] shadow-md flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#2443ab] text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-4 rounded-full">
                High Performance
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-[#2443ab]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-[#0d1b3e] tracking-tight">Native Apps</h4>
                <p className="text-sm text-slate-400 font-extrabold tracking-widest uppercase">Platform Polish</p>
                <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                  iOS and Android built separately: higher investment, longer timeline, but maximum performance and platform-specific polish.
                </p>
              </div>
            </div>

            {/* Tier 3 */}
            <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-[#0d1b3e] tracking-tight">Custom/Enterprise</h4>
                <p className="text-sm text-slate-400 font-extrabold tracking-widest uppercase">Scalable Ecosystem</p>
                <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                  Multi-vendor marketplace, advanced integrations: highest investment, scoped individually based on requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center space-y-6">
            <p className="text-base text-slate-500 font-bold leading-relaxed max-w-xl mx-auto">
              We don’t quote flat pricing without understanding the project first. Get a quote for your ecommerce app, and we’ll scope it based on your actual catalog and feature requirements.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] to-[#2443ab] px-8 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Get a Free Quote &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* The FAQ Accordion Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] border-t border-slate-100/80 text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          <div className="relative z-10 max-w-6xl mx-auto space-y-16">
            
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-500 text-base sm:text-lg font-semibold tracking-wide">
                You have highly specific questions. We have exact answers.
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[32px] border border-slate-100/80 shadow-[0_10px_45px_rgba(0,0,0,0.02)] p-6 sm:p-10 text-left">
              {faqs.map((faq, index) => {
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
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-500 text-base sm:text-lg font-semibold leading-relaxed mt-4">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100/45 text-slate-800 border-t border-slate-200/60 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.04)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto space-y-8 flex flex-col justify-center items-center">
            <span className="block text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#2443ab] uppercase select-none">
              The Next Step
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] max-w-5xl">
              Ready to Build an Ecommerce App<br />That Actually Sells?
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed max-w-2xl">
              We build ecommerce apps engineered around real purchasing behavior — checkout speed, repeat engagement, and platform performance — not just a launch date.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
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
                className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-8 py-4 text-xs font-black text-[#0d1b3e] uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group whitespace-nowrap"
              >
                <span>Book a Discovery Call</span>
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
