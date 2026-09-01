"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(226, 232, 240, 0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
  };

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.in/about/" />

      <div className="w-full bg-[#fafbfc] min-h-screen pb-24 text-slate-800 relative overflow-hidden">
        
        {/* Hero Section Container with custom light blue-slate gradient (1 shade deeper) */}
        <section className="relative z-10 w-full pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[180px] pb-24 text-center bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd] to-[#fafbfc] border-b border-slate-200/60 overflow-hidden">
          {/* Light Grid Scrolling Background */}
          <div 
            className="animate-grid-scroll opacity-70 pointer-events-none z-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(14, 165, 233, 0.18) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(14, 165, 233, 0.18) 1px, transparent 1px)
              `
            }}
          />

          {/* Ambient Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[5%] w-[45%] aspect-square rounded-full bg-gradient-to-br from-[#0a8bc7]/15 via-[#2443ab]/12 to-transparent blur-[80px]" />
            <div className="absolute top-[20%] right-[5%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#40159e]/8 via-[#2443ab]/8 to-transparent blur-[70px]" />
          </div>

          {/* Custom SVG Graphics - Concentric Circles & Grid Arrays representing Scale/Growth */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-50">
            <svg className="w-full h-full min-w-[1000px] min-h-[600px]" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
              {/* Soft Radial Center Glow */}
              <defs>
                <radialGradient id="about-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(36, 67, 171, 0.12)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </radialGradient>
              </defs>
              <rect x="0" y="0" width="1200" height="600" fill="url(#about-glow)" />

              {/* Concentric rings at Left */}
              <circle cx="150" cy="300" r="220" fill="none" stroke="rgba(36, 67, 171, 0.06)" strokeWidth="1" />
              <circle cx="150" cy="300" r="180" fill="none" stroke="rgba(36, 67, 171, 0.12)" strokeWidth="6" />
              <circle cx="150" cy="300" r="140" fill="none" stroke="rgba(36, 67, 171, 0.08)" strokeWidth="2" strokeDasharray="6 6" />
              <circle cx="150" cy="300" r="100" fill="none" stroke="rgba(10, 139, 199, 0.1)" strokeWidth="4" />
              <circle cx="150" cy="300" r="60" fill="none" stroke="rgba(10, 139, 199, 0.06)" strokeWidth="1.5" />

              {/* Connected growth dots at Right */}
              <g transform="translate(900, 150)">
                <line x1="0" y1="0" x2="150" y2="150" stroke="rgba(36, 67, 171, 0.2)" strokeWidth="2" />
                <line x1="150" y1="150" x2="250" y2="50" stroke="rgba(10, 139, 199, 0.18)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="250" y1="50" x2="320" y2="180" stroke="rgba(64, 21, 158, 0.15)" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="8" fill="rgba(36, 67, 171, 0.2)" />
                <circle cx="150" cy="150" r="14" fill="rgba(10, 139, 199, 0.25)" />
                <circle cx="250" cy="50" r="8" fill="rgba(64, 21, 158, 0.15)" />
                <circle cx="320" cy="180" r="5" fill="rgba(36, 67, 171, 0.1)" />
              </g>

              {/* Small Precise dot grid */}
              <g transform="translate(480, 80)">
                {Array.from({ length: 5 }).map((_, r) =>
                  Array.from({ length: 15 }).map((_, c) => (
                    <circle
                      key={`grid-${r}-${c}`}
                      cx={c * 20}
                      cy={r * 20}
                      r={1.5}
                      fill="rgba(36, 67, 171, 0.3)"
                      opacity={0.35}
                    />
                  ))
                )}
              </g>
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto space-y-6 flex flex-col items-center justify-center"
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2443ab] animate-pulse" />
                ABOUT US — DIGITAL EDGE 360
              </span>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] max-w-3xl mx-auto">
                We Build Digital Products That <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">Actually Work</span> — Not Just Launch
              </h1>

              {/* Description */}
              <p className="text-slate-500 font-semibold text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                Digital Edge 360 started with a simple frustration: too many businesses were paying for websites, apps, and marketing that looked polished in a proposal deck and did nothing for the business once it went live. Seven years and 75+ projects later, that’s still the thing we care about most — not whether something ships, but whether it actually moves the needle for the people who hired us.
              </p>

              <p className="text-slate-400 font-semibold text-sm leading-relaxed max-w-xl mx-auto">
                We work across ecommerce web development, app development, and digital marketing — building products that are designed to perform, not just launch.
              </p>

              {/* Two CTA Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <span>Work With Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>


        {/* 2. Our Impact Section */}
        <section className="relative z-10 mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 py-10">
          <div className="bg-[#f0f4ff]/40 border border-[#2443ab]/10 rounded-[32px] p-8 sm:p-12 lg:p-16 backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-4 text-left space-y-4">
                <span className="text-xs font-extrabold tracking-[0.2em] text-[#2443ab] uppercase">
                  OUR IMPACT
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                  Bridging the gap between <span className="text-[#2443ab]">building</span> and <span className="text-[#40159e]">growing</span>.
                </h2>
              </div>

              <div className="lg:col-span-5 text-left text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                <p className="mb-4">
                  Digital Edge 360 was founded by Akanksha Madeshiya and Shomak Mitra.
                </p>
                <p className="mb-4">
                  Our mission is clear: building digital products that solve real business problems and deliver measurable impact.
                </p>
                <p>
                  That's the gap we set out to close — a senior team that can design and build custom systems properly, and also knows how to scale and convert people once live.
                </p>
              </div>

              <div className="lg:col-span-3 bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-center items-start text-left space-y-6 shadow-sm">
                <span className="text-[10px] font-black text-slate-400 tracking-wider uppercase">
                  BY THE NUMBERS
                </span>
                <div className="grid grid-cols-2 gap-6 w-full border-t border-slate-100 pt-6">
                  <div>
                    <span className="block text-3xl font-black text-[#2443ab] tracking-tight">
                      7+
                    </span>
                    <span className="block text-[10px] font-extrabold text-slate-500 tracking-wider uppercase mt-1 leading-tight">
                      YEARS OF EXPERIENCE
                    </span>
                  </div>
                  <div>
                    <span className="block text-3xl font-black text-[#0a8bc7] tracking-tight">
                      75+
                    </span>
                    <span className="block text-[10px] font-extrabold text-slate-500 tracking-wider uppercase mt-1 leading-tight">
                      PROJECTS DELIVERED
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Leadership Section */}
        <section className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 py-20 text-center relative z-10">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
              LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight relative pb-4">
              Meet the Founders
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#2443ab] rounded" />
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Akanksha Profile Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.015)] flex flex-col text-left transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50">
                <Image
                  src="/akanksha.jpg"
                  alt="Akanksha Madeshiya"
                  fill
                  className="object-cover"
              
                  priority
                />
              </div>
              <div className="p-8 sm:p-10 space-y-4 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e]">
                      Akanksha Madeshiya
                    </h3>
                    <span className="block text-xs font-extrabold text-[#2443ab] tracking-wider uppercase mt-1">
                      CO-FOUNDER & CEO
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Akanksha is a design thinking-led entrepreneur with a strategic mind. With a proven track record in transforming digital ideas into scalable and user-centric products, she ensures every solution we build creates impact.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="https://www.linkedin.com/in/akanksha-m-6a8a27139/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 items-center justify-center text-[#2443ab] hover:bg-[#2443ab] hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Shomak Profile Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.015)] flex flex-col text-left transition-all duration-300"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-50">
                <Image
                  src="/shomak.png"
                  alt="Shomak Mitra"
                  fill
                  className="object-cover"
                   priority
                />
              </div>
              <div className="p-8 sm:p-10 space-y-4 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e]">
                      Shomak Mitra
                    </h3>
                    <span className="block text-xs font-extrabold text-[#2443ab] tracking-wider uppercase mt-1">
                      CO-FOUNDER & CSO
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Shomak brings 15+ years of experience in digital engineering and performance marketing. He builds high-performance solutions that are scalable, reliable, and future-ready.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href="https://www.linkedin.com/in/somakmitra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 items-center justify-center text-[#2443ab] hover:bg-[#2443ab] hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* From the Founder's Desk Section */}
        <section className="relative z-10 py-20 bg-white border-t border-slate-100 overflow-hidden">
          {/* Decorative radial gradients for premium feel */}
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-35 pointer-events-none" />
          
          <div className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
              
              {/* Left Column: Image with beautiful styling */}
              <div className="lg:col-span-5 flex justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative group w-full max-w-[360px]"
                >
                  {/* Image container with no padding or border */}
                  <div className="relative w-full aspect-[4/4] rounded-[24px] overflow-hidden bg-slate-50 shadow-xl">
                    <Image
                      src="/founder.jpg"
                      alt="From the Founder's desk"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    
                    {/* Premium Label Overlay */}
                    <div className="absolute bottom-2 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg">
                      <span className="block text-[10px] font-black tracking-widest text-[#2443ab] uppercase">
                        FOUNDER'S PERSPECTIVE
                      </span>
                      <h4 className="text-sm font-black text-[#0d1b3e] mt-0.5">
                        From the Founder's Desk
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Founder's Message */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
                  LEADERSHIP LETTER
                </span>
                
                <h2 className="text-3xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                  "We don't build to ship. <br />
                  We build to <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">solve & scale</span>."
                </h2>

                <div className="space-y-4 text-slate-600 font-semibold text-sm sm:text-base leading-relaxed">
                  <p>
                    When we started Digital Edge 360, the digital landscape was cluttered with standard, templated solutions. Agency models focused on completing a checklist and handing over the keys. 
                  </p>
                  <p>
                    We wanted to write a different story. To us, every project is a partnership built on trust and alignment. We measure our success not by the launch date, but by the tangible impact we create—whether it's scaling conversion rates, optimizing infrastructure, or acquiring lifelong customers.
                  </p>
                  <p>
                    Our promise is simple: a senior-led engineering approach, fully aligned with your business goals, and a relentless focus on creating performance that lasts.
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <div className="h-px w-12 bg-slate-200" />
                  <div>
                    <span className="block text-sm font-black text-[#0d1b3e]">
                      The Digital Edge 360 Team
                    </span>
                    <span className="block text-xs font-bold text-slate-400">
                      Digital Edge 360
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. What We Do Section */}
        <section className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 py-20 text-center relative z-10 border-t border-slate-100">
          <div className="max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
              SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight">
              What We Do
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed max-w-2xl mx-auto mt-2">
              We craft awesome digital experiences, tailored to your needs and your audience. These are just a few of the areas we link.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.015)] flex flex-col items-start text-left hover:shadow-md transition-all duration-300 justify-between min-h-[300px]">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#2443ab]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0d1b3e] mb-3">
                    Web Development
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Custom websites and web applications, built for performance and scalability to bring your brand to life.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link href="/web-development" className="inline-flex w-7 h-7 rounded-full bg-blue-50 items-center justify-center text-[#2443ab] hover:bg-[#2443ab] hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.015)] flex flex-col items-start text-left hover:shadow-md transition-all duration-300 justify-between min-h-[300px]">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0d1b3e] mb-3">
                    Ecommerce Development
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    Online stores and shopping experiences that are secure, high-performing, and <strong className="text-slate-800 font-bold">designed to convert</strong>.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link href="/woocommerce" className="inline-flex w-7 h-7 rounded-full bg-blue-50 items-center justify-center text-[#2443ab] hover:bg-[#2443ab] hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.015)] flex flex-col items-start text-left hover:shadow-md transition-all duration-300 justify-between min-h-[300px]">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0d1b3e] mb-3">
                    Digital Marketing
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                    SEO, performance marketing, and app store optimization to grow traffic and <strong className="text-slate-800 font-bold">maximize results</strong>.
                  </p>
                </div>
              </div>
              <div className="pt-6">
                <Link href="/seo-smm" className="inline-flex w-7 h-7 rounded-full bg-blue-50 items-center justify-center text-[#2443ab] hover:bg-[#2443ab] hover:text-white transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How We Work (Our Process Section) */}
        <section className="mx-auto max-w-[1300px] px-6 sm:px-8 lg:px-12 py-20 border-t border-slate-100 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 text-left space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-[10px] sm:text-xs font-black tracking-[0.2em] text-[#2443ab] uppercase shadow-sm">
                OUR PROCESS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-tight">
                How We Work
              </h2>
            </div>

            {/* Step timeline details */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-8">
                {[
                  {
                    num: "01",
                    title: "Discover",
                    desc: "We start by understanding your business, audience, and goals through in-depth research and analysis."
                  },
                  {
                    num: "02",
                    title: "Plan",
                    desc: "We design a strategy and roadmap tailored to your needs with the right tech and creative approach."
                  },
                  {
                    num: "03",
                    title: "Build",
                    desc: "We develop, test, and iterate to build secure, scalable, and high-performing digital products."
                  },
                  {
                    num: "04",
                    title: "Grow",
                    desc: "We launch, optimize, and scale with data-driven strategies to ensure long-term success."
                  }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center font-black text-xs text-[#2443ab] bg-white shrink-0 shadow-sm">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#0d1b3e]">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 6. The Final Step CTA Section */}
        <section className="relative z-10 w-full py-24 sm:py-32 bg-gradient-to-br from-slate-100 via-slate-50 to-blue-100/45 text-slate-800 border-t border-slate-200/60 overflow-hidden text-center px-6 sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.04)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto space-y-8 flex flex-col justify-center items-center">
            <span className="block text-[10px] sm:text-xs font-black tracking-[0.25em] text-[#2443ab] uppercase select-none">
              Let’s Build Something That Actually Works
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0d1b3e] tracking-tight leading-[1.1] max-w-5xl">
              If you’re evaluating a digital partner, ask us the hard questions — what’s worked, what hasn’t, and what we’d actually recommend for your specific situation.
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl text-center leading-relaxed font-semibold">
              That’s the conversation we’d rather have than a sales pitch.
            </p>

            {/* Standardized Button Link */}
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-4 text-xs font-black text-white uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group whitespace-nowrap"
              >
                <span>Get in Touch</span>
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