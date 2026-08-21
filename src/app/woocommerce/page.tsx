"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brandLogosList } from "@/data";
import { motion } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import AnimatedWords from "@/components/AnimatedWords";
import Marquee from "react-fast-marquee";

export default function WooCommerce() {
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
      <link rel="canonical" href="https://digitaledge360.com/woocommerce" />
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

          {/* SVG Custom Graphics - WooCommerce & CMS Themed (Product Cards, Checkout Mockups, Payment/Price Tags - No Letters) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-45">
            <svg className="w-full h-full min-w-[1000px] min-h-[500px]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              
              {/* Product Detail Card Mockup Left */}
              <g transform="translate(60, 60) rotate(-6)" opacity="0.55">
                <rect width="210" height="150" rx="12" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
                {/* Product Image placeholder inside card */}
                <rect x="15" y="15" width="180" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
                <path d="M 90,35 L 75,60 L 105,60 Z" fill="#3b82f6" opacity="0.3" />
                <circle cx="115" cy="45" r="5" fill="#3b82f6" opacity="0.3" />
                
                {/* Product description placeholders */}
                <rect x="15" y="100" width="100" height="8" rx="4" fill="#1e293b" opacity="0.25" />
                <rect x="15" y="114" width="70" height="8" rx="4" fill="#1e293b" opacity="0.15" />
                <rect x="15" y="128" width="50" height="8" rx="4" fill="#3b82f6" opacity="0.8" />
                
                {/* Visual Add-to-cart button placeholder */}
                <rect x="145" y="122" width="50" height="18" rx="9" fill="#3b82f6" opacity="0.15" />
                <circle cx="170" cy="131" r="3.5" fill="#3b82f6" />
              </g>

              {/* Checkout Bill/Summary List Mockup Right */}
              <g transform="translate(940, 110) rotate(4)" opacity="0.55">
                <rect width="220" height="160" rx="12" fill="white" stroke="#bae6fd" strokeWidth="1.5" />
                <rect width="220" height="24" rx="12" fill="#f8fafc" />
                <line x1="0" y1="24" x2="220" y2="24" stroke="#bae6fd" strokeWidth="1" />
                
                {/* Window Dots */}
                <circle cx="15" cy="12" r="3" fill="#ef4444" opacity="0.85" />
                <circle cx="27" cy="12" r="3" fill="#eab308" opacity="0.85" />
                <circle cx="39" cy="12" r="3" fill="#22c55e" opacity="0.85" />
                
                {/* Checkout items lists */}
                <circle cx="25" cy="50" r="10" fill="#3b82f6" opacity="0.1" />
                <rect x="45" y="46" width="90" height="8" rx="4" fill="#475569" opacity="0.3" />
                <rect x="175" y="46" width="30" height="8" rx="4" fill="#10b981" opacity="0.4" />
                
                <circle cx="25" cy="80" r="10" fill="#3b82f6" opacity="0.1" />
                <rect x="45" y="76" width="70" height="8" rx="4" fill="#475569" opacity="0.3" />
                <rect x="175" y="76" width="30" height="8" rx="4" fill="#10b981" opacity="0.4" />
                
                <circle cx="25" cy="110" r="10" fill="#3b82f6" opacity="0.1" />
                <rect x="45" y="106" width="100" height="8" rx="4" fill="#475569" opacity="0.3" />
                <rect x="175" y="106" width="30" height="8" rx="4" fill="#10b981" opacity="0.4" />
                
                {/* Total divider line */}
                <line x1="15" y1="134" x2="205" y2="134" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
                <rect x="145" y="142" width="60" height="10" rx="5" fill="#3b82f6" opacity="0.75" />
              </g>

              {/* Floating Credit Card (Payment Theme) */}
              <g transform="translate(180, 260) rotate(8)" opacity="0.45">
                <rect width="90" height="56" rx="8" fill="#3b82f6" opacity="0.1" stroke="#3b82f6" strokeWidth="1" />
                <rect x="10" y="10" width="22" height="16" rx="3" fill="#eab308" opacity="0.6" />
                <rect x="10" y="36" width="40" height="6" rx="3" fill="#3b82f6" opacity="0.4" />
                <circle cx="75" cy="40" r="6" fill="#ef4444" opacity="0.6" />
                <circle cx="68" cy="40" r="6" fill="#eab308" opacity="0.6" />
              </g>

              {/* Floating Price Tag */}
              <g transform="translate(860, 310) rotate(-12)" opacity="0.45">
                <path d="M10,25 L35,10 L75,10 L75,40 L35,40 Z" fill="#10b981" opacity="0.1" stroke="#10b981" strokeWidth="1" />
                <circle cx="22" cy="25" r="3.5" fill="white" stroke="#10b981" strokeWidth="1" />
                <rect x="40" y="21" width="25" height="8" rx="4" fill="#10b981" opacity="0.4" />
              </g>

              {/* Floating Shopping Bag */}
              <g transform="translate(540, 40) rotate(10)" opacity="0.35">
                <path d="M15,20 L45,20 L50,60 L10,60 Z" fill="none" stroke="#6366f1" strokeWidth="1.5" />
                <path d="M22,20 C22,10 38,10 38,20" fill="none" stroke="#6366f1" strokeWidth="1.5" />
              </g>

              {/* Dot array grids */}
              <g transform="translate(70, 250)">
                {Array.from({ length: 4 }).map((_, r) =>
                  Array.from({ length: 5 }).map((_, c) => (
                    <circle
                      key={`woo-dot-l-${r}-${c}`}
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
                      key={`woo-dot-r-${r}-${c}`}
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
                WooCommerce Solution
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
                WooCommerce & CMS
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl">
                We architect enterprise-grade WooCommerce and custom WordPress setups designed specifically for scalability, speed, and high conversions. Re-engineering heavy checkouts, optimizing databases, and deploying advanced caching layers, we provide custom e-commerce solutions that eliminate cart abandonment and secure steady revenue.
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
            <p className="font-elms text-3xl sm:text-5xl md:text-[3.5rem] text-center leading-relaxed text-[#0d1b3e]/85">            <AnimatedWords
              text="&quot;Typical WordPress sites are slow, vulnerable to attacks, and cluttered with conflicting plugins. This leads to high bounce rates, security breaches, and an operational nightmare for your team. You need a clean, custom-coded core that performs flawlessly under pressure.&quot;"
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
                  text: "We approach WooCommerce with an 'un-WordPress' mindset. We eliminate the bloat, bypass generic themes, and build high-performance child themes from scratch.",
                  grad: "from-blue-50 to-indigo-100/50 border-blue-100/60 hover:border-blue-300",
                  textCol: "text-[#2443ab]",
                  slideLeft: true
                },
                {
                  num: "02",
                  text: "Security is paramount. We implement military-grade hardening, immutable backups, and continuous monitoring to protect your customer data and brand reputation.",
                  grad: "from-purple-50 to-violet-100/50 border-purple-100/60 hover:border-purple-300",
                  textCol: "text-purple-600",
                  slideLeft: false
                },
                {
                  num: "03",
                  text: "Our custom checkout flows are designed to destroy cart abandonment. We rebuild the checkout experience from the ground up to be frictionless and mobile-first.",
                  grad: "from-pink-50 to-rose-100/50 border-pink-100/60 hover:border-pink-300",
                  textCol: "text-rose-500",
                  slideLeft: true
                },
                {
                  num: "04",
                  text: "API integrations are our specialty. Whether it's ERP, CRM, or custom inventory sync, we ensure your store communicates perfectly with your entire business ecosystem.",
                  grad: "from-amber-50 to-orange-100/50 border-amber-100/60 hover:border-amber-300",
                  textCol: "text-amber-600",
                  slideLeft: false
                },
                {
                  num: "05",
                  text: "Scalability is built-in. We architect our Woo solutions to handle massive traffic spikes during sales events without breaking a sweat.",
                  grad: "from-emerald-50 to-teal-100/50 border-emerald-100/60 hover:border-emerald-300",
                  textCol: "text-emerald-600",
                  slideLeft: true
                },
                {
                  num: "06",
                  text: "Full ownership. Unlike proprietary platforms, your WooCommerce store is 100% yours. Your code, your data, your rules.",
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">01</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">Hardened Security</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Zero-vulnerability stance with enterprise-grade protection and monitoring.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">03</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Custom Plugins</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Lightweight, bespoke extensions built specifically for your unique requirements.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 20M3.12 17.776a10.744 10.744 0 013.258-2.223M6.437 15.223A4.125 4.125 0 003.25 18a10.704 10.704 0 006.839 2.25M6.437 15.223a10.584 10.584 0 014.709-2.204M11.146 13.019c-1.226-.3-2.456-.59-3.685-.873M11.146 13.019a4.125 4.125 0 006.492-3.12c0-.399-.057-.785-.163-1.15m-6.329 4.27a4.125 4.125 0 004.707-2.204M11.146 13.019v-4.13a4.12 4.12 0 00-2.613 1.053M17.475 8.749c-.29-.937-.77-1.785-1.4-2.496m-1.722 5.67A4.125 4.125 0 0110.05 10.5c0-1.285.59-2.432 1.517-3.197m0 0c.937-.77 2.122-1.233 3.413-1.233 1.285 0 2.432.463 3.197 1.189" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">05</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Total Ownership</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Complete control of your platform, data, and long-term tech roadmap.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">02</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Pure Speed</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Advanced caching and optimized code for a WordPress experience that feels native.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">04</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">Checkout Mastery</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Frictionless, high-conversion checkout journeys that drive revenue.
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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">06</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-rose-500 transition-colors duration-300">CMS Flexibility</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Easy-to-use backend for your team, powered by a high-performance engine.
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
                  title: "Code Audit",
                  desc: "Analyzing your existing WP setup or scoping your new custom requirements.",
                  circleBg: "bg-gradient-to-br from-blue-400 to-indigo-600 shadow-[0_6px_20px_rgba(59,130,246,0.35)]",
                  lineColor: "bg-blue-500",
                  textColor: "text-blue-500",
                  borderColor: "border-blue-100 hover:border-blue-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(59,130,246,0.08)]",
                  grad: "from-white via-white to-blue-50/10"
                },
                {
                  num: "02",
                  title: "Design Systems",
                  desc: "Creating a cohesive UI kit that works perfectly within the WordPress ecosystem.",
                  circleBg: "bg-gradient-to-br from-purple-400 to-violet-600 shadow-[0_6px_20px_rgba(139,92,246,0.35)]",
                  lineColor: "bg-purple-500",
                  textColor: "text-purple-600",
                  borderColor: "border-purple-100 hover:border-purple-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]",
                  grad: "from-white via-white to-purple-50/10"
                },
                {
                  num: "03",
                  title: "Bespoke Dev",
                  desc: "Writing clean PHP and React components to fuel your custom store.",
                  circleBg: "bg-gradient-to-br from-pink-400 to-rose-600 shadow-[0_6px_20px_rgba(244,63,94,0.35)]",
                  lineColor: "bg-rose-500",
                  textColor: "text-rose-500",
                  borderColor: "border-rose-100 hover:border-rose-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)]",
                  grad: "from-white via-white to-rose-50/10"
                },
                {
                  num: "04",
                  title: "Transition",
                  desc: "Seamless migration and staff training for your new enterprise platform.",
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
                  q: "Is WooCommerce better than Shopify?",
                  a: "WooCommerce offers more freedom and lower long-term costs; Shopify is more managed. We help you choose based on your specific growth goals."
                },
                {
                  q: "Can you fix my slow WordPress site?",
                  a: "Yes, we specialize in 'decrapifying' bloated WP builds and restoring them to high-speed performance."
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
