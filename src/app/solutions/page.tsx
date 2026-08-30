"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedWords from "@/components/AnimatedWords";

export default function Solutions() {
  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(226, 232, 240, 0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  };

  const solutions = [
    {
      title: "Web Development",
      description: "High-Performance Digital Architectures for Modern Brands",
      link: "/web-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
      )
    },
    {
      title: "WooCommerce & CMS",
      description: "Enterprise-Grade WordPress Architectures Built to Convert",
      link: "/woocommerce",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.5a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0-.75.75v3.75a.75.75 0 0 0 .75.75Z" />
        </svg>
      )
    },
    {
      title: "App Development",
      description: "Native-Fluid Cross-Platform Apps for iOS & Android",
      link: "/app-development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 15h9" />
        </svg>
      )
    },
    {
      title: "Performance Marketing",
      description: "Aggressive ROAS-Focused Growth Architecture",
      link: "/performance-marketing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.5 4.5L21.75 7.5M21.75 7.5H16.5M21.75 7.5v5.25" />
        </svg>
      )
    },
    {
      title: "SEO & SMM",
      description: "Compound Organic Authority & Viral Social Growth",
      link: "/seo-smm",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      )
    },
    {
      title: "Marketplace Optimization",
      description: "Total Dominance on Amazon, Flipkart & Beyond",
      link: "/marketplace-optimization",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
        </svg>
      )
    },
    {
      title: "AI Integration",
      description: "Algorithmic Efficiency for Modern Operations",
      link: "/ai-integration",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m15.75 0h-1.5m-10.5 0h8.25m-8.25 0V15.75m8.25-7.5v8.25m-8.25 0h8.25m-8.25 0V21m8.25-5.25V21m-10.5-6H3m18 0h-1.5M4.5 12h15m-12.75-9v1.5m10.5-1.5v1.5" />
        </svg>
      )
    },
    {
      title: "Creative Studio",
      description: "High-End Visual Content for Premium Brands",
      link: "/creative-studio",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
        </svg>
      )
    }
  ];

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.in/solutions/" />

      <div className="relative w-full bg-[#fafbfc] min-h-screen pb-24 text-slate-800 overflow-hidden">

        {/* Hero Section with custom pearl/platinum light mode gradient */}
        <section className="relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[180px] pb-16 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fafbfc] via-[#f1f5f9] to-[#fafbfc] border-b border-slate-100/60 overflow-hidden">
          {/* Light Grid Scrolling Background */}
          <div 
            className="animate-grid-scroll opacity-60 pointer-events-none z-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `
            }}
          />

          {/* Glow backdrop */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] w-[35%] aspect-square rounded-full bg-gradient-to-br from-[#94a3b8]/8 via-[#6366f1]/5 to-transparent blur-[80px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#e2e8f0]/10 via-transparent to-transparent blur-[90px]" />
          </div>

          {/* SVG Custom Graphics - Corporate Grid Lines & Intersections */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-40">
            <svg className="w-full h-full min-w-[1000px] min-h-[500px]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              {/* Bold structural rectangles representing scale */}
              <rect x="100" y="80" width="180" height="120" rx="10" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="1.5" />
              <rect x="220" y="140" width="180" height="120" rx="10" fill="rgba(148, 163, 184, 0.03)" stroke="rgba(148, 163, 184, 0.12)" strokeWidth="1.5" />

              {/* Intersecting alignment grids */}
              <g stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1">
                <line x1="900" y1="50" x2="900" y2="400" />
                <line x1="1050" y1="50" x2="1050" y2="400" />
                <line x1="800" y1="180" x2="1150" y2="180" />
                <line x1="800" y1="280" x2="1150" y2="280" />
              </g>

              {/* Precise target junction dots */}
              <circle cx="900" cy="180" r="4" fill="rgb(99, 102, 241)" />
              <circle cx="1050" cy="280" r="4" fill="rgb(148, 163, 184)" />

              {/* Scattered background dot matrices */}
              <g transform="translate(500, 360)">
                {Array.from({ length: 3 }).map((_, r) =>
                  Array.from({ length: 10 }).map((_, c) => (
                    <circle
                      key={`sol-dot-${r}-${c}`}
                      cx={c * 20}
                      cy={r * 20}
                      r={1.5}
                      fill="rgb(99, 102, 241)"
                      opacity={0.15}
                    />
                  ))
                )}
              </g>
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto space-y-6">
            <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-4 py-1.5 text-[10px] font-extrabold tracking-[0.2em] text-slate-500 uppercase shadow-sm select-none">
              <AnimatedWords text="Our Expertise" />
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0d1b3e] tracking-tight leading-[1.1] flex flex-col items-center">
              <AnimatedWords text="Engineered for" delay={0.25} />
              <AnimatedWords text="Pure Dominance." delay={0.55} />
            </h1>
            <p className="mx-auto max-w-3xl text-sm sm:text-base md:text-lg text-slate-500 font-semibold leading-relaxed pt-2">
              <AnimatedWords text="From complex digital architectures to aggressive performance marketing, we provide the elite infrastructure necessary to scale your brand." delay={0.85} />
            </p>
          </div>
        </section>

      {/* Solutions Cards Section */}
      <section className="relative z-10 mx-auto max-w-[1500px] px-6 sm:px-8 lg:px-12 mt-12 sm:mt-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0 20px 45px rgba(0,0,0,0.06)" }}
              className="rounded-3xl transition-all duration-300"
            >
              <Link
                href={item.link}
                className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between h-full min-h-[320px] group text-left transition-all duration-300"
              >
                <div>
                  {/* Icon wrapper */}
                  <div className="w-12 h-12 rounded-2xl border border-slate-200/80 flex items-center justify-center text-slate-800 bg-white mb-8 shadow-[0_4px_10px_rgba(0,0,0,0.02)] group-hover:bg-[#2443ab]/10 group-hover:text-[#2443ab] group-hover:border-[#2443ab]/20 transition-all duration-300">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0d1b3e] tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Link Footer */}
                <div className="flex items-center justify-between text-[9px] font-extrabold tracking-wider text-slate-400 group-hover:text-[#2443ab] transition-colors mt-8 pt-4 border-t border-slate-50">
                  <span>EXPLORE SOLUTIONS</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Growth Sprints Call to Action Section */}
      <section className="relative z-10 w-full py-24 sm:py-32 overflow-hidden border-t border-slate-100">
        {/* Soft, subtle radial gradient radiating from center, spreading full width/height */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.22)_0%,rgba(178,217,91,0.14)_60%,rgba(36,67,171,0.04)_100%)] pointer-events-none z-0" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d1b3e] tracking-tight leading-tight">
            Ready to Begin Your<br />  <span className="underline decoration-[#84a93c] decoration-4 underline-offset-[8px] sm:underline-offset-[12px]">Growth Sprints?</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
            Secure a free strategy audit today. We forensically analyze your brand, identify leaks, and hand you an execution roadmap.
          </p>

          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(36,67,171,0.22)] hover:bg-[#40159e] hover:shadow-[0_12px_28px_rgba(36,67,171,0.32)] transition-all duration-200 group"
            >
              <span>Schedule Audit Call</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>
      {/* Trust line/images beneath button */}
      <div className="flex flex-wrap items-center bg-white justify-center gap-32 py-20">
        <img src="/brand-logos/shopify-plus.png" alt="Shopify Plus Certified" className="h-20 w-auto object-contain" />
        <img src="/brand-logos/google-partner.png" alt="Google Premier Partner" className="h-20 w-auto object-contain" />
        <img src="/brand-logos/meta-logo.png" alt="Meta Business Partner" className="h-20 w-auto object-contain" />
        <img src="/brand-logos/iso.png" alt="ISO 27001 Certified" className="h-20 w-auto object-contain" />
        <img src="/brand-logos/digital-ocean.png" alt="DigitalOcean" className="h-20 w-auto object-contain" />
      </div>
    </div>
    </>
  );
}