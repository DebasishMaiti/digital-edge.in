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
import { ChevronRight } from "lucide-react";

const appDevShowcases = [
  {
    name: "Publix",
    link: "/company-details/publix",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    logo: (
      <div className="flex items-center gap-1.5 text-left">
        <span className="text-xl shrink-0">🛒</span>
        <span className="font-extrabold text-[13px] text-emerald-750 tracking-wider uppercase">Publix</span>
      </div>
    ),
    metric: "300%",
    metricLabel: "Traffic Spike Handled",
    metricColor: "text-emerald-600"
  },
  {
    name: "Recipe Keeper",
    link: "/company-details/recipe-keeper",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    logo: (
      <div className="flex items-center gap-1.5 text-left">
        <span className="text-xl shrink-0">🍳</span>
        <span className="font-extrabold text-[13px] text-slate-800 tracking-wider uppercase">Recipe Keeper</span>
      </div>
    ),
    metric: "300%",
    metricLabel: "Traffic Spike Handled",
    metricColor: "text-blue-600"
  },
  {
    name: "Momentum",
    link: "/company-details/momentum",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    logo: (
      <div className="flex items-center gap-1.5 text-left">
        <span className="text-xl shrink-0">🎯</span>
        <span className="font-extrabold text-[13px] text-indigo-750 tracking-wider uppercase">Momentum</span>
      </div>
    ),
    metric: "300%",
    metricLabel: "Traffic Spikes",
    metricColor: "text-indigo-600"
  },
  {
    name: "HubFit",
    link: "/company-details/hubfit",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    logo: (
      <div className="flex items-center gap-1.5 text-left">
        <span className="text-xl shrink-0">💪</span>
        <span className="font-extrabold text-[13px] text-[#2443ab] tracking-wider uppercase">HubFit</span>
      </div>
    ),
    metric: "305%",
    metricLabel: "Users Growth",
    metricColor: "text-[#2443ab]"
  },
  {
    name: "Ring My Stylist",
    link: "/company-details/ring-my-stylist",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    logo: (
      <div className="flex items-center gap-1.5 text-left">
        <span className="text-xl shrink-0">💇‍♀️</span>
        <span className="font-extrabold text-[13px] text-rose-750 tracking-wider uppercase">Ring My Stylist</span>
      </div>
    ),
    metric: "300%",
    metricLabel: "Traffic Spikes",
    metricColor: "text-rose-500"
  }
];

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
      q: "How much does it cost to build a mobile app?",
      a: "It depends on complexity — a simple single-platform app, a feature-rich cross-platform app, and an enterprise-grade native build all have very different scopes and costs. We’ll give you a clear, honest estimate after understanding your requirements on the free strategy call, with no hidden costs added later."
    },
    {
      q: "How long does it take to build an app?",
      a: "A straightforward app typically takes 8–12 weeks from discovery to launch. More complex apps with custom features, integrations, or AI/ML components can take longer — we’ll give you a realistic timeline upfront based on your specific requirements."
    },
    {
      q: "Should I build for iOS, Android, or both?",
      a: "It depends on where your target users actually are. If budget allows, launching on both platforms via a cross-platform framework like Flutter or React Native is usually the most efficient path. If you need to launch faster or your audience skews heavily to one platform, starting native on that one platform can make more sense. We’ll recommend honestly based on your specific business and audience."
    },
    {
      q: "What’s the difference between native and cross-platform development?",
      a: "Native development (Swift for iOS, Kotlin/Java for Android) builds separately for each platform, giving you the best possible performance and access to every platform feature. Cross-platform development (Flutter, React Native) uses one shared codebase for both platforms, which is usually faster and more cost-effective, with a small trade-off in access to certain native-only features. Most businesses do well with cross-platform unless they have very specific performance or hardware needs."
    },
    {
      q: "Do you build the backend too, or just the app itself?",
      a: "We handle both. Most apps need a backend to manage data, user accounts, and business logic, and we build that alongside the app itself so everything works together as one system."
    },
    {
      q: "Will you help me publish the app on the App Store and Play Store?",
      a: "Yes. We manage the entire submission process for both stores, including preparing your listing, screenshots, and description in a way that’s optimized for approval and discoverability."
    },
    {
      q: "What happens after my app is launched?",
      a: "We offer ongoing support plans covering bug fixes, performance monitoring, OS compatibility updates, and new feature development, so your app keeps working well and evolving as your business grows."
    },
    {
      q: "Can you add features to my existing app instead of building a new one?",
      a: "Yes. We regularly take over existing apps to add features, fix performance issues, or modernize outdated code, after first auditing the current codebase to understand what we’re working with."
    },
    {
      q: "Do you only build apps for ecommerce businesses?",
      a: "No. We build apps across industries — fitness, wellness, on-demand services, productivity, astrology, food, and more. Every app is designed around your specific business model and users, not a one-size-fits-all template."
    },
    {
      q: "What’s included in the free app strategy call?",
      a: "A live discussion of your app idea or existing app, platform recommendations, a rough scope and timeline, plus 2–3 specific suggestions we spot immediately — no generic slide deck, no pressure to sign anything."
    }
  ];

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.in/app-development/" />

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
                iOS & Android App Development
              </h1>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] mb-6 flex flex-col items-start">
                Mobile App Development Company Built to Turn Downloads Into Customers
              </h2>

              <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-2xl">
                From concept to launch, we design and build iOS, Android, and cross-platform apps for businesses across India — startups, SMEs, and enterprises alike.
              </p>

              <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-2xl">
                Apps built not just to look good, but to drive real engagement, retention, and revenue. We handle the entire lifecycle including planning, UI/UX prototyping, backend integration, App Store/Play Store deployment, and post-launch support.
              </p>

              {/* Full Width Line Divider */}
              <div className="w-full border-t border-slate-200/60 my-3"></div>

              {/* CTA and Ratings */}
              <div className="flex flex-col items-start gap-4 mb-8 text-left w-full">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] text-white text-xs font-extrabold rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(36,67,171,0.25)] hover:shadow-[0_10px_24px_rgba(64,21,158,0.4)] hover:opacity-95 flex items-center justify-center gap-2 uppercase tracking-wider mt-4"
                >
                  <span>Book a Free App Strategy Call</span>
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


        {/* Brand Showcase Grid Section */}
        <section className="relative z-10 py-24 bg-gradient-to-b from-[#fafbfc] to-white overflow-hidden border-t border-slate-100">
          <div className="w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

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
                    <div className="p-6 flex items-center justify-between min-h-[90px]">
                      <div className="flex-grow text-left flex flex-col justify-center">
                        <div className="mb-1.5">{brand.logo}</div>
                        {brand.metric && (
                          <div className="flex flex-col text-left leading-none mt-2">
                            <span className={`text-2xl font-black ${brand.metricColor} leading-none`}>{brand.metric}</span>
                            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-1">{brand.metricLabel}</span>
                          </div>
                        )}
                      </div>
                      {/* Circle Chevron Indicator Button */}
                      <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-650 group-hover:bg-[#2443ab] group-hover:text-white group-hover:border-[#2443ab] transition-all duration-300 shrink-0 ml-4 shadow-sm">
                        <ChevronRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </motion.div>
                </Link>
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

        <ArchitectureTimeline
          title="The Framework"
          subtitle="How We Engineer Your App"
          tagline="“The System” — How We Build Apps That Retain Users"
          codeFile="src/app/mobile-pipeline.ts"
          codeLines={[
            "import { iOSNative, AndroidNative, CrossPlatform } from 'digital-edge';",
            "// Bespoke E-Commerce Mobile App Pipeline",
            "export default async function AppPipeline() {",
            "  const sync = await initInventorySync();",
            "  return (",
            "    <CrossPlatform framework='React Native' hotReload={true}>",
            "      <iOSNative build='SwiftUI' pushAlerts={true} />",
            "      <AndroidNative build='Jetpack Compose' biometrics={true} />",
            "      <RealTimeSync cache={true} data={sync} />",
            "    </CrossPlatform>",
            "  );",
            "}"
          ]}
          floatingBadge1Text="App Startup"
          floatingBadge1Sub="GPU-Rendered Threading"
          floatingBadge1Value="1.2s"
          floatingBadge2Text="Sync Frequency"
          floatingBadge2Sub="Instant Database State Sync"
          floatingBadge2Icon="Zap"
          phases={[
            {
              num: "01",
              phase: "Phase 01 — Discovery & Strategy",
              text: "We start by understanding your business goals, target users, and the one core problem your app needs to solve — before any design or development begins.",
              borderCol: "border-l-[#2443ab]",
              dotCol: "border-blue-500 bg-white",
              shadowCol: "shadow-blue-500/5",
              iconColor: "text-blue-600 bg-blue-50 border-blue-100",
              iconAlign: "left",
              iconName: "Compass"
            },
            {
              num: "02",
              phase: "Phase 02 — UI/UX Design",
              text: "We design every screen around how real users behave on mobile — clean navigation, intuitive flows, and interfaces people don’t need instructions to use.",
              borderCol: "border-l-[#a855f7]",
              dotCol: "border-purple-500 bg-white",
              shadowCol: "shadow-purple-500/5",
              iconColor: "text-purple-600 bg-purple-50 border-purple-100",
              iconAlign: "right",
              iconName: "Smartphone"
            },
            {
              num: "03",
              phase: "Phase 03 — Development",
              text: "Whether native iOS, native Android, or cross-platform with Flutter or React Native, we write clean, scalable code built to perform reliably as your user base grows.",
              borderCol: "border-l-[#ec4899]",
              dotCol: "border-pink-500 bg-white",
              shadowCol: "shadow-pink-500/5",
              iconColor: "text-pink-600 bg-pink-50 border-pink-100",
              iconAlign: "left",
              iconName: "Layers"
            },
            {
              num: "04",
              phase: "Phase 04 — Testing & Quality Assurance",
              text: "Rigorous testing across devices, OS versions, and real-world conditions, so bugs get caught before your users find them.",
              borderCol: "border-l-[#f97316]",
              dotCol: "border-orange-500 bg-white",
              shadowCol: "shadow-orange-500/5",
              iconColor: "text-orange-600 bg-orange-50 border-orange-100",
              iconAlign: "right",
              iconName: "Bell"
            },
            {
              num: "05",
              phase: "Phase 05 — Launch & App Store Optimization",
              text: "We handle App Store and Play Store submission and optimize your listing for discoverability, so your app doesn’t just launch — it gets found.",
              borderCol: "border-l-[#10b981]",
              dotCol: "border-emerald-500 bg-white",
              shadowCol: "shadow-emerald-500/5",
              iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
              iconAlign: "left",
              iconName: "ShieldAlert"
            },
            {
              num: "06",
              phase: "Phase 06 — Post-Launch Support",
              text: "Ongoing updates, performance monitoring, and feature improvements after launch, so your app keeps evolving instead of going stale.",
              borderCol: "border-l-[#6366f1]",
              dotCol: "border-indigo-500 bg-white",
              shadowCol: "shadow-indigo-500/5",
              iconColor: "text-indigo-600 bg-indigo-50 border-indigo-100",
              iconAlign: "right",
              iconName: "Globe"
            }
          ]}
        />



        {/* The Tangible Output Section / Outcomes */}
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-blue-600 transition-colors duration-300">An App Built for Retention</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Every design and development decision is made around keeping users engaged, not just getting an install.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-purple-600 transition-colors duration-300">Scalable Architecture</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Apps built to handle growth from day one, so a spike in users doesn’t mean a rebuild six months later.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-teal-600 transition-colors duration-300">Store-Ready Optimization</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    App Store and Play Store listings built and optimized for discoverability, not just a technical submission.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Reliable Performance</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    Clean, well-tested code so your app runs smoothly across devices instead of crashing or lagging under real usage.
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
                  <h4 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight group-hover:text-orange-500 transition-colors duration-300">End-to-End Ownership</h4>
                  <p className="text-base text-slate-500 font-semibold leading-relaxed">
                    One team handling strategy, design, development, testing, and launch — no gaps between vendors, no dropped context.
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
                    A team that stays available after launch to fix issues, ship updates, and help your app keep growing.
                  </p>
                </motion.div>
              </div>
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

        {/* The Workflow Timeline (How it Works) */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          <div className="relative z-10 max-w-5xl mx-auto space-y-16">

            <div className="space-y-4 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-blue-600 uppercase shadow-sm">
                <span>How We Work</span>
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#0d1b3e] tracking-tight">
                Our App Build Roadmap
              </h2>
            </div>

            <div className="relative flex flex-col gap-0 max-w-4xl mx-auto mt-20 text-left">
              {/* Timeline Dashed Connecting Line */}
              <div className="absolute left-6 lg:left-1/2 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200 -translate-x-1/2 z-0" />

              {[
                {
                  num: "01",
                  title: "Discovery & Requirement Mapping",
                  desc: "Understanding your business, users, and the core problem the app needs to solve.",
                  lineColor: "bg-blue-500",
                  borderColor: "border-blue-100 hover:border-blue-300",
                  circleBg: "bg-gradient-to-br from-blue-400 to-indigo-600",
                  grad: "from-white via-white to-blue-50/10"
                },
                {
                  num: "02",
                  title: "UI/UX Design",
                  desc: "Designing wireframes and visual screens focused on ease of use and clear user flows.",
                  lineColor: "bg-purple-500",
                  borderColor: "border-purple-100 hover:border-purple-300",
                  circleBg: "bg-gradient-to-br from-purple-400 to-violet-600",
                  grad: "from-white via-white to-purple-50/10"
                },
                {
                  num: "03",
                  title: "Development",
                  desc: "Building your app natively or cross-platform, with regular check-ins so you’re never in the dark on progress.",
                  lineColor: "bg-pink-500",
                  borderColor: "border-rose-100 hover:border-rose-300",
                  circleBg: "bg-gradient-to-br from-pink-400 to-rose-600",
                  grad: "from-white via-white to-rose-50/10"
                },
                {
                  num: "04",
                  title: "Testing",
                  desc: "Thorough QA across devices and scenarios to catch issues before your users ever do.",
                  lineColor: "bg-orange-500",
                  borderColor: "border-orange-100 hover:border-orange-300",
                  circleBg: "bg-gradient-to-br from-amber-400 to-orange-500",
                  grad: "from-white via-white to-orange-50/10"
                },
                {
                  num: "05",
                  title: "Launch",
                  desc: "Managing App Store and Play Store submission, optimized for approval and visibility.",
                  lineColor: "bg-emerald-500",
                  borderColor: "border-emerald-100 hover:border-emerald-300",
                  circleBg: "bg-gradient-to-br from-emerald-400 to-teal-600",
                  grad: "from-white via-white to-emerald-50/10"
                },
                {
                  num: "06",
                  title: "Support & Iteration",
                  desc: "Ongoing monitoring, updates, and feature additions based on real user feedback after launch.",
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

        {/* The FAQ Accordion Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-[#fafbfc] border-t border-slate-100/80 text-slate-800 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          <div className="relative z-10 max-w-6xl mx-auto space-y-16">

            <div className="space-y-4">
              <span className="block text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#2443ab] uppercase select-none">
                Common Questions
              </span>
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
              Ready to Build an App People Actually Use?
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed max-w-2xl">
              Book your free, no-obligation 30-minute app strategy call. No generic slide decks — just a clear look at what it takes to build your app right.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
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
