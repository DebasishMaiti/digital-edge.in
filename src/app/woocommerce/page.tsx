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
import { Terminal, Shield, Cpu, RefreshCw, CheckCircle2, Code2, ShoppingCart, HeartHandshake } from "lucide-react";

export default function WooCommerce() {
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
      <link rel="canonical" href="https://digitaledge360.in/woocommerce/" />

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
                WooCommerce & CMS Development
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
                A WordPress Website Built to Grow With Your Business, Not Slow It Down
              </h2>
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl">
                We build enterprise-grade WooCommerce stores and custom WordPress websites for businesses across India — whether you’re selling products online, running a content-heavy site, or managing a business website your team updates daily. Engineered for speed, security, and a backend your team can actually use.
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

            {/* Right Column: CTA Card */}
            <div className="lg:col-span-6 flex justify-center relative w-full">
              <LeadForm 
                showDecorations={false} 
                initialServiceType="development" 
                customTargets={[
                  { id: "store-setup", label: "Custom WooCommerce Store Setup" },
                  { id: "payment-gateway", label: "Payment Gateway & Logistics Integration" },
                  { id: "checkout-optimization", label: "Checkout & Conversion Rate Optimization" },
                  { id: "plugin-dev", label: "Custom WooCommerce Plugin Development" },
                  { id: "store-migration", label: "Shopify / Magento to WooCommerce Migration" },
                  { id: "speed-sec", label: "WooCommerce Speed & Security Hardening" }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Current Reality Section */}
        <section
          className="relative min-h-[500px] flex items-center z-10 w-full py-28 sm:py-36 overflow-hidden text-center px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100/40"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.06)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto space-y-10">
            {/* Badge */}
            <span className="block text-[10px] sm:text-xs font-black tracking-[0.3em] text-[#2443ab] uppercase select-none">
              <AnimatedWords text="The Current Reality" />
            </span>
            {/* Quote text */}
            <p className="font-elms text-2xl sm:text-4xl md:text-[2.65rem] text-center leading-relaxed text-[#0d1b3e]/85 max-w-6xl mx-auto">
              <AnimatedWords
                text="&quot;Most WordPress sites are running on bloated themes, conflicting plugins, and a backend nobody on the team actually enjoys using. The result shows up as slow load times, security gaps, and a website that becomes harder to update the longer it’s been live. Whether you’re running a WooCommerce store or a content-driven business site, you don’t need another plugin duct-taped on top — you need a clean, well-built core that stays fast, stays secure, and stays easy for your team to manage.&quot;"
                delay={0.25}
              />
            </p>
          </div>
        </section>

        <ArchitectureTimeline
          title="The Framework"
          subtitle="How We Engineer Your Website"
          tagline="A proven process. Relentless quality. Built for WooCommerce, designed to scale."
          codeFile="src/app/woocommerce.tsx"
          codeLines={[
            "import { WooStore, Checkout } from 'digital-edge';",
            "// Bespoke E-Commerce Architecture",
            "export default async function ShopifyKiller() {",
            "  const security = await loadFirewall();",
            "  return (",
            "    <WooStore performance='100%' cache={true}>",
            "      <Checkout customFlow={true} frictionless />",
            "      <Security ImmutableBackups monitor={security} />",
            "    </WooStore>",
            "  );",
            "}"
          ]}
          floatingBadge1Text="Speed Index"
          floatingBadge1Sub="Frictionless Checkout Flow"
          floatingBadge1Value="0.8s"
          floatingBadge2Text="Woo Security"
          floatingBadge2Sub="Military-Grade Hardening"
          floatingBadge2Icon="Shield"
          phases={[
            {
              num: "01",
              phase: "Phase 01 — Bloat-Free Foundation",
              text: "We strip away everything a typical WordPress build carries by default — generic themes, unnecessary plugins, unused code — and build a lean, custom setup designed around exactly what your business needs.",
              borderCol: "border-l-[#2443ab]",
              dotCol: "border-blue-500 bg-white",
              shadowCol: "shadow-blue-500/5",
              iconColor: "text-blue-600 bg-blue-50 border-blue-100",
              iconAlign: "left",
              iconName: "Rocket"
            },
            {
              num: "02",
              phase: "Phase 02 — Enterprise-Grade Security",
              text: "We harden your site against attacks with proper access controls, immutable backups, and ongoing monitoring — protecting your data, your customers’ data, and your brand's reputation.",
              borderCol: "border-l-[#a855f7]",
              dotCol: "border-purple-500 bg-white",
              shadowCol: "shadow-purple-500/5",
              iconColor: "text-purple-600 bg-purple-50 border-purple-100",
              iconAlign: "right",
              iconName: "Shield"
            },
            {
              num: "03",
              phase: "Phase 03 — Conversion-Focused Structure",
              text: "Whether it’s a checkout flow for a WooCommerce store or a contact and inquiry flow for a service website, we design every key page to move visitors toward taking action.",
              borderCol: "border-l-[#ec4899]",
              dotCol: "border-pink-500 bg-white",
              shadowCol: "shadow-pink-500/5",
              iconColor: "text-pink-600 bg-pink-50 border-pink-100",
              iconAlign: "left",
              iconName: "ShoppingCart"
            },
            {
              num: "04",
              phase: "Phase 04 — Seamless System Integrations",
              text: "We connect your site cleanly to the tools that run your business — payment gateways, CRM, inventory, booking systems — so information stays in sync without manual work.",
              borderCol: "border-l-[#f97316]",
              dotCol: "border-orange-500 bg-white",
              shadowCol: "shadow-orange-500/5",
              iconColor: "text-orange-600 bg-orange-50 border-orange-100",
              iconAlign: "right",
              iconName: "Zap"
            },
            {
              num: "05",
              phase: "Phase 05 — Built for Traffic Growth",
              text: "Your site is architected to handle growing traffic over time — whether that’s a sale-day spike for a store or a surge from a successful marketing campaign — without slowing down.",
              borderCol: "border-l-[#10b981]",
              dotCol: "border-emerald-500 bg-white",
              shadowCol: "shadow-emerald-500/5",
              iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
              iconAlign: "left",
              iconName: "TrendingUp"
            },
            {
              num: "06",
              phase: "Phase 06 — You Own Everything",
              text: "Unlike locked-in platforms, your WordPress website is entirely yours — your code, your data, your decisions, with no forced fees or platform lock-in down the line.",
              borderCol: "border-l-[#6366f1]",
              dotCol: "border-indigo-500 bg-white",
              shadowCol: "shadow-indigo-500/5",
              iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
              iconAlign: "right",
              iconName: "Globe"
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
                How We Build Websites That Perform Under Pressure
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
                From rescuing sites buckling under traffic spikes to rebuilding checkout and inquiry flows that were quietly losing leads, here’s how we turn WordPress into a real growth engine for your business.
              </p>
            </div>

            {/* Split Interactive Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch pt-6">
              
              {/* Tab Selectors & Bullets (Left side) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  {[
                    {
                      title: "Website Audit & Diagnostics",
                      desc: "We review your current site’s speed, plugin health, security, and content structure to find exactly what’s slowing your site down or costing you leads and sales."
                    },
                    {
                      title: "Custom Development",
                      desc: "We write clean, purpose-built code — custom plugins, themes, and integrations — instead of relying on generic marketplace solutions that add bloat and break easily."
                    },
                    {
                      title: "Migration & Launch",
                      desc: "Whether you’re moving from another platform or rebuilding an existing WordPress site, we handle the migration carefully so you don’t lose data, rankings, or uptime."
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
                          borderLeftColor: isActive ? "#3b82f6" : "transparent"
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
                      "Sites built to stay fast under real traffic, not just in a demo",
                      "Checkout and inquiry flows engineered specifically to reduce drop-off",
                      "Clean integrations with the business tools you already use"
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
                          ? "radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.05) 0%, transparent 60%)" 
                          : activeShowcaseTab === 1 
                          ? "radial-gradient(circle at 70% 30%, rgba(6, 182, 212, 0.05) 0%, transparent 60%)" 
                          : "radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.05) 0%, transparent 60%)"
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
                    <div className="text-xs font-mono text-slate-400">
                      {activeShowcaseTab === 0 ? "diagnostics_panel.sh" : activeShowcaseTab === 1 ? "wp-custom-plugin.php" : "live_deployment.log"}
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
                          {/* Diagnostics Metric visualization */}
                          <div className="grid grid-cols-3 gap-4">
                            {[
                              { label: "TTFB", value: "85ms", status: "Optimal", color: "text-emerald-600" },
                              { label: "FID", value: "11ms", status: "Excellent", color: "text-emerald-600" },
                              { label: "CLS", value: "0.01", status: "Optimal", color: "text-emerald-600" }
                            ].map((metric, midx) => (
                              <div key={midx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center shadow-sm">
                                <span className="text-[10px] tracking-widest text-slate-400 font-bold uppercase">{metric.label}</span>
                                <div className={`text-2xl font-black my-1 ${metric.color}`}>{metric.value}</div>
                                <span className="text-[10px] text-slate-500 font-semibold">{metric.status}</span>
                              </div>
                            ))}
                          </div>
                          
                          {/* Progress/Metric Bars */}
                          <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 font-mono text-xs text-slate-600 shadow-sm">
                            <div className="flex justify-between">
                              <span>Database Queries Optimized</span>
                              <span className="text-emerald-600 font-black">100%</span>
                            </div>
                            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                              <div className="w-full bg-emerald-500 h-full rounded-full" />
                            </div>
                            <div className="flex justify-between pt-2">
                              <span>Unused CSS/JS Purged</span>
                              <span className="text-emerald-600 font-black">94%</span>
                            </div>
                            <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                              <div className="w-[94%] bg-emerald-500 h-full rounded-full" />
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
                          className="w-full space-y-4 font-mono text-xs sm:text-[13px] text-slate-700 bg-slate-50 p-5 rounded-2xl border border-slate-100 leading-relaxed text-left overflow-x-auto shadow-sm"
                        >
                          <div><span className="text-indigo-600">class</span> <span className="text-purple-600 font-semibold">BespokeCore</span> &#123;</div>
                          <div className="pl-4 text-slate-400 italic">// Zero external bloat logic</div>
                          <div className="pl-4"><span className="text-indigo-600">public function</span> <span className="text-blue-600">initializeTheme</span>() &#123;</div>
                          <div className="pl-8"><span className="text-indigo-600">this</span>-&gt;<span className="text-blue-600">disableUnusedScripts</span>();</div>
                          <div className="pl-8"><span className="text-indigo-600">this</span>-&gt;<span className="text-blue-600">enforceHardenedFirewall</span>();</div>
                          <div className="pl-4">&#125;</div>
                          <div>&#125;</div>
                        </motion.div>
                      )}

                      {activeShowcaseTab === 2 && (
                        <motion.div
                          key="tab2"
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -15 }}
                          transition={{ duration: 0.3 }}
                          className="w-full space-y-4 font-mono text-xs text-slate-500 bg-slate-50 p-5 rounded-2xl border border-slate-100 leading-relaxed text-left shadow-sm"
                        >
                          <div className="flex items-center gap-2 text-emerald-600 font-bold">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                            <span>System Status: 100% Uptime Preserved</span>
                          </div>
                          <div className="space-y-1 text-slate-400">
                            <div>[INFO] Scanning databases... Done (0 integrity errors)</div>
                            <div>[INFO] Remapping SEO redirect rules... 412 rules verified</div>
                            <div>[INFO] Caching system warmed up successfully</div>
                            <div className="text-emerald-600 font-bold">[SUCCESS] Switchover complete. 0ms downtime.</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Panel Footer */}
                  <div className="border-t border-slate-200/80 pt-4 flex items-center justify-between text-xs text-slate-400 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-blue-600" />
                      <span>Security: Impregnable</span>
                    </div>
                    <span>Performance Score: 100/100</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-white text-slate-800 overflow-hidden px-6 sm:px-8 lg:px-12 border-b border-slate-100">
          {/* Ambient decorative elements */}
          <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-[30%] right-[-10%] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto space-y-16">
            {/* Header */}
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
                <span>What We Build</span>
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight mt-2">
                WordPress & WooCommerce Services
              </h2>
            </div>

            {/* 3x2 Grid for the 6 Service items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {[
                {
                  title: "WooCommerce Development",
                  desc: "Custom WooCommerce stores built for smooth checkout flows, product discovery, and mobile-first shopping — for businesses that sell products online.",
                  icon: ShoppingCart,
                  bgGlow: "from-blue-50 to-indigo-50/10",
                  borderColor: "hover:border-blue-300",
                  iconBg: "bg-blue-50 text-blue-600",
                  iconGlow: "shadow-blue-500/10"
                },
                {
                  title: "Custom WordPress Development",
                  desc: "Business and content-driven websites built on WordPress, with clean custom themes and full backend and frontend development — ideal for service businesses, SaaS companies, and content publishers.",
                  icon: Code2,
                  bgGlow: "from-purple-50 to-violet-50/10",
                  borderColor: "hover:border-purple-300",
                  iconBg: "bg-purple-50 text-purple-600",
                  iconGlow: "shadow-purple-500/10"
                },
                {
                  title: "CMS Migration",
                  desc: "Careful migration of your existing website to WordPress, preserving your content, SEO rankings, and uptime throughout the switch.",
                  icon: RefreshCw,
                  bgGlow: "from-pink-50 to-rose-50/10",
                  borderColor: "hover:border-pink-300",
                  iconBg: "bg-pink-50 text-pink-600",
                  iconGlow: "shadow-pink-500/10"
                },
                {
                  title: "Custom Plugin Development",
                  desc: "Purpose-built plugins for requirements that off-the-shelf solutions don’t cover cleanly, keeping your site lightweight instead of bloated with generic add-ons.",
                  icon: Cpu,
                  bgGlow: "from-orange-50 to-amber-50/10",
                  borderColor: "hover:border-orange-300",
                  iconBg: "bg-orange-50 text-orange-500",
                  iconGlow: "shadow-orange-500/10"
                },
                {
                  title: "Security & Performance Optimization",
                  desc: "Hardening, caching, and database optimization for existing WordPress sites that have become slow, vulnerable, or difficult to maintain over time.",
                  icon: Shield,
                  bgGlow: "from-teal-50 to-emerald-50/10",
                  borderColor: "hover:border-teal-300",
                  iconBg: "bg-teal-50 text-teal-600",
                  iconGlow: "shadow-teal-500/10"
                },
                {
                  title: "Support & Maintenance",
                  desc: "Ongoing updates, security monitoring, and performance checks so your website keeps working as hard as it did on day one.",
                  icon: HeartHandshake,
                  bgGlow: "from-indigo-50 to-blue-50/10",
                  borderColor: "hover:border-indigo-300",
                  iconBg: "bg-indigo-50 text-indigo-600",
                  iconGlow: "shadow-indigo-500/10"
                }
              ].map((service, sidx) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={sidx}
                    className={`p-6 sm:p-8 rounded-[32px] border border-slate-100 bg-gradient-to-br ${service.bgGlow} transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl ${service.borderColor} group cursor-default`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${service.iconBg} ${service.iconGlow} shadow-md group-hover:scale-110 transition-transform duration-300 mb-6`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

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
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0114 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-blue-600 tracking-wider">01</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">Hardened Security</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Enterprise-grade protection and ongoing monitoring, built to keep your site and data safe.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Custom-Built Plugins</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Lightweight, purpose-built extensions made for your exact requirements — nothing generic, nothing bloated.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Complete Ownership</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Full control over your platform, your data, and your long-term technical roadmap — no vendor lock-in.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Real Speed</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Advanced caching and optimized code so your site feels instant, not like a typical WordPress site.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">A Site That Converts</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Whether it’s a checkout or a contact form, every key flow is designed specifically to reduce drop-off and drive action.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-rose-500 transition-colors duration-300">A CMS Your Team Can Actually Use</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    An easy, intuitive backend for your team to manage day-to-day, backed by a high-performance engine underneath.
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
                Our Build Roadmap
              </h2>
              <p className="text-slate-500 font-semibold text-sm sm:text-base leading-relaxed">
                Our proven step-by-step roadmap to transform your vision into a fast, secure, and conversion-optimized WordPress website.
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
                  desc: "Reviewing your existing WordPress setup, or scoping your requirements from scratch if you’re starting new.",
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
                  desc: "Building a cohesive UI kit that fits naturally within the WordPress ecosystem and your brand.",
                  circleBg: "bg-gradient-to-br from-purple-400 to-violet-600 shadow-[0_6px_20px_rgba(139,92,246,0.35)]",
                  lineColor: "bg-purple-500",
                  textColor: "text-purple-600",
                  borderColor: "border-purple-100 hover:border-purple-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)]",
                  grad: "from-white via-white to-purple-50/10"
                },
                {
                  num: "03",
                  title: "Bespoke Development",
                  desc: "Writing clean, custom code to power your site — built for your exact content, catalog, or feature needs.",
                  circleBg: "bg-gradient-to-br from-pink-400 to-rose-600 shadow-[0_6px_20px_rgba(244,63,94,0.35)]",
                  lineColor: "bg-rose-500",
                  textColor: "text-rose-500",
                  borderColor: "border-rose-100 hover:border-rose-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(244,63,94,0.08)]",
                  grad: "from-white via-white to-rose-50/10"
                },
                {
                  num: "04",
                  title: "Migration & Training",
                  desc: "Handling a seamless transition to your new platform, with your team trained to manage it confidently from day one.",
                  circleBg: "bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_6px_20px_rgba(249,115,22,0.35)]",
                  lineColor: "bg-orange-500",
                  textColor: "text-orange-500",
                  borderColor: "border-orange-100 hover:border-orange-300",
                  hoverGlow: "hover:shadow-[0_20px_50px_rgba(249,115,22,0.08)]",
                  grad: "from-white via-white to-orange-50/10"
                },
                {
                  num: "05",
                  title: "Support & Growth",
                  desc: "Ongoing maintenance and improvements post-launch, so your website keeps evolving alongside your business.",
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
              <span className="block text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#2443ab] uppercase select-none">
                Common Questions
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
                  q: "Do I need WooCommerce, or just a regular WordPress website?",
                  a: "It depends on whether you’re selling products directly on your site. If you need online checkout and product catalog management, WooCommerce is the right fit. If your site is more about services, content, or generating inquiries, a standard WordPress build without WooCommerce is usually simpler and faster to manage."
                },
                {
                  q: "Can you fix my slow WordPress site?",
                  a: "Yes — this is one of the most common projects we take on. Slow WordPress sites are almost always caused by bloated themes, conflicting plugins, unoptimized databases, or poor hosting, and all of these are fixable without necessarily rebuilding from scratch. We’ll audit your site first and tell you honestly whether it needs optimization or a deeper rebuild."
                },
                {
                  q: "Do I need to rebuild my entire website, or can you improve what I already have?",
                  a: "It depends on the audit. Many sites need targeted fixes — plugin cleanup, database tuning, security hardening, content restructuring. Others have deeper structural issues where a rebuild is genuinely faster and cheaper long-term. We’ll tell you which situation you’re in before recommending anything."
                },
                {
                  q: "How long does a WordPress build or migration take?",
                  a: "A typical business website build takes 3–5 weeks. A WooCommerce store usually takes 5–8 weeks depending on catalog size and features. Migrations from another platform usually take 3–6 weeks, planned carefully to avoid downtime or data loss."
                },
                {
                  q: "Will my website go down during migration?",
                  a: "No. We plan migrations to run in parallel with your live site, testing everything on a staging environment first, and only switching over once everything is verified — so your site stays live throughout the process."
                },
                {
                  q: "Do you provide ongoing maintenance after launch?",
                  a: "Yes. We offer ongoing support plans covering security monitoring, backups, plugin updates, and performance checks, so your site stays fast and protected long after launch — not just on day one."
                },
                {
                  q: "Can you integrate WordPress with our CRM, payment gateway, or booking system?",
                  a: "Yes. We regularly build custom integrations between WordPress or WooCommerce and the business tools our clients already use, so information stays accurate and synced automatically."
                },
                {
                  q: "Is WordPress a good fit for non-ecommerce businesses too?",
                  a: "Yes. WordPress is one of the most flexible platforms available and works well for service businesses, content publishers, SaaS companies, and local businesses — not just online stores. We tailor the build entirely around your specific business type."
                },
                {
                  q: "What makes this different from a regular WordPress developer?",
                  a: "Every decision — theme structure, plugin choices, hosting setup, and conversion flow — is made around your specific business goals and performance, not a generic template applied the same way to every client."
                },
                {
                  q: "What’s included in the free website audit?",
                  a: "A live review of your site’s speed, security, plugin health, and structure, plus 2–3 specific issues we spot immediately — no generic slide deck, no pressure to sign anything."
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

          <div className="relative z-10 max-w-6xl mx-auto space-y-6 flex flex-col justify-center items-center">
            {/* Badge */}
            <span className="block text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#2443ab] uppercase select-none">
              The Final Step
            </span>
            {/* Header */}
            <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.15] max-w-5xl">
              Ready to Stop Losing Visitors to a Slow, Fragile Website?
            </h2>
            {/* Subheading */}
            <p className="text-slate-500 font-semibold text-sm sm:text-lg max-w-3xl leading-relaxed">
              Book your free, no-obligation 30-minute website audit. No generic slide decks — just a clear look at what’s slowing you down and how to fix it.
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
