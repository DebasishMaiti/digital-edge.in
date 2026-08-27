"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedWords from "@/components/AnimatedWords";
import LeadForm from "@/components/LeadForm";

export default function Contact() {
  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(226, 232, 240, 0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What exactly happens in a Growth Audit?",
      answer: "We analyze your digital presence, conversion funnels, and technical performance. Then, we look at your marketing channels and competitors. You get a direct report with 3-5 immediate 'quick wins' and a long-term scaling strategy."
    },
    {
      question: "How soon can we start?",
      answer: "Usually within 24-48 hours of your strategy call. We prioritize brands that are ready to scale and have a clear vision of their goals."
    },
    {
      question: "Is the 30-minute call really free?",
      answer: "Yes. No high-pressure sales, no generic pitches. If we aren't a good fit, we'll tell you upfront and try to point you in the right direction."
    },
    {
      question: "Do you work with startups?",
      answer: "We work with brands that have product-market fit and are looking to scale. Most of our clients are doing $10k+ in monthly recurring revenue, but we make exceptions for game-changing ideas."
    }
  ];

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.in/contact/" />

      <div className="relative w-full bg-[#fafbfc] min-h-screen pb-24 text-slate-800 overflow-hidden -mt-20 sm:-mt-24 md:-mt-[125px] pt-24 sm:pt-28 md:pt-[128px]">
        
        {/* Contact Hero Background with custom Blue light mode gradient */}
        <section className="relative z-10 w-full pt-20 sm:pt-24 lg:pt-[120px] pb-16 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd]/30 to-[#fafbfc] border-b border-slate-100/60 overflow-hidden">
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

          {/* Ambient Glow Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] w-[35%] aspect-square rounded-full bg-gradient-to-br from-[#0ea5e9]/8 via-[#2563eb]/6 to-transparent blur-[80px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#60a5fa]/10 via-transparent to-transparent blur-[90px]" />
          </div>

          {/* Radiating Soundwave Rings & Dots SVG */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-40">
            <svg className="w-full h-full min-w-[1000px] min-h-[500px]" viewBox="0 0 1200 500" xmlns="http://www.w3.org/2000/svg">
              {/* Radiating circles (soundwaves) centered in the page */}
              <circle cx="600" cy="250" r="340" fill="none" stroke="rgba(37, 99, 235, 0.08)" strokeWidth="1" />
              <circle cx="600" cy="250" r="280" fill="none" stroke="rgba(14, 165, 233, 0.22)" strokeWidth="1" />
              <circle cx="600" cy="250" r="220" fill="none" stroke="rgba(37, 99, 235, 0.15)" strokeWidth="2" strokeDasharray="8 8" />
              <circle cx="600" cy="250" r="160" fill="none" stroke="rgba(14, 165, 233, 0.15)" strokeWidth="1.5" />
              <circle cx="600" cy="250" r="100" fill="none" stroke="rgba(14, 165, 233, 0.15)" strokeWidth="1.5" />
              
              {/* Diagonal dot patterns on sides */}
              <g transform="translate(100, 100) rotate(15)">
                {Array.from({ length: 5 }).map((_, r) =>
                  Array.from({ length: 5 }).map((_, c) => (
                    <circle
                      key={`contact-dot-l-${r}-${c}`}
                      cx={c * 15}
                      cy={r * 15}
                      r={2}
                      fill="rgb(14, 165, 233)"
                      opacity={0.15}
                    />
                  ))
                )}
              </g>

              <g transform="translate(1000, 250) rotate(-15)">
                {Array.from({ length: 5 }).map((_, r) =>
                  Array.from({ length: 5 }).map((_, c) => (
                    <circle
                      key={`contact-dot-r-${r}-${c}`}
                      cx={c * 15}
                      cy={r * 15}
                      r={2}
                      fill="rgb(37, 99, 235)"
                      opacity={0.15}
                    />
                  ))
                )}
              </g>
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-extrabold tracking-[0.25em] text-gray-500 uppercase">
              <AnimatedWords text="GET IN TOUCH" />
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0d1b3e] tracking-tight leading-[1.15] flex flex-col items-center">
              <AnimatedWords text="Book Your Free" delay={0.25} />
              <span className="bg-gradient-to-r from-[#0ea5e9] via-[#3b82f6] to-[#2563eb] bg-clip-text text-transparent py-1">
                <AnimatedWords text="Ecommerce Growth Audit" delay={0.55} />
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-650 font-semibold leading-relaxed pt-2">
              <AnimatedWords text="Tell us about your store. We’ll come back with a custom roadmap to fix what’s slowing down your conversions — no fluff, straight to the opportunity." delay={0.85} />
            </p>
          </div>
        </section>

        {/* Form & Content wrapper */}
        <div className="relative w-full pb-10">
          <section className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 mt-12 sm:mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Let's Talk Ecommerce */}
              <div className="lg:col-span-5 flex flex-col text-left space-y-8 bg-white border border-slate-200/80 p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d1b3e] tracking-tight leading-tight mb-4">
                    Let’s Talk Ecommerce
                  </h2>
                  <p className="text-sm sm:text-base text-slate-550 font-semibold leading-relaxed">
                    We partner with ecommerce brands and retailers that are serious about scaling — whether that’s a new store build, an app, or fixing a platform that’s holding you back. Fill in the form, and we’ll get back to you within 24 hours.
                  </p>
                </div>

                {/* Contact details */}
                <div className="space-y-6 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full border border-slate-200 bg-slate-50/50 flex items-center justify-center text-slate-600 shadow-sm flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4.5 w-4.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">EMAIL</span>
                      <a href="mailto:contactus@digitaledge360.in" className="text-sm font-extrabold text-[#0d1b3e] hover:text-[#2443ab] transition-colors mt-0.5">
                        contactus@digitaledge360.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full border border-slate-200 bg-slate-50/50 flex items-center justify-center text-slate-600 shadow-sm flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4.5 w-4.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.248 1.248 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">PHONE</span>
                      <a href="tel:+919830024746" className="text-sm font-extrabold text-[#0d1b3e] hover:text-[#2443ab] transition-colors mt-0.5">+91 9830024746</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full border border-slate-200 bg-slate-50/50 flex items-center justify-center text-slate-600 shadow-sm flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4.5 w-4.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-xs leading-normal font-semibold text-[#0d1b3e] gap-2">
                      <span className="text-[9px] font-bold text-slate-400 tracking-wider uppercase">LOCATION</span>
                      <div>
                        <span className="block font-black text-slate-500 text-[9px] uppercase tracking-wider mb-0.5">India Office</span>
                        9B Everest House, 9th Floor, Parkstreet Area, Kolkata-700071
                      </div>
                      <div>
                        <span className="block font-black text-slate-500 text-[9px] uppercase tracking-wider mb-0.5">USA Office</span>
                        100 Church Street, Manhattan, New York City, 100071
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect Box */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.15em] text-[#0d1b3e]">
                    WHAT TO EXPECT
                  </h3>
                  <ul className="space-y-3 text-xs sm:text-sm font-bold text-[#0d1b3e]">
                    <li className="flex items-start gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span>30-minute free store audit call</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span>Full platform and conversion review</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span>Custom growth roadmap for your store or app</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span>No-obligation project proposal</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Standardized LeadForm Component */}
              <div className="lg:col-span-7 flex justify-center relative w-full">
                <LeadForm showDecorations={false} />
              </div>

            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="relative z-10 mx-auto max-w-[1100px] px-6 sm:px-8 lg:px-12 mt-28 sm:mt-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b3e] tracking-tight">
              Common Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
              Everything you need to know about working with Digital Edge 360.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-[#2443ab]/30 shadow-[0_20px_45px_-5px_rgba(36,67,171,0.08)]' 
                      : 'border-slate-200/80 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.02)] hover:border-slate-300 hover:shadow-[0_15px_40px_-5px_rgba(0,0,0,0.04)]'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-8 py-7 sm:px-10 sm:py-8 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-base sm:text-lg md:text-xl font-extrabold transition-colors duration-200 pr-6 text-[#0d1b3e]">
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#2443ab] text-white rotate-180 shadow-[0_4px_10px_rgba(36,67,171,0.25)]' 
                        : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen 
                        ? 'max-h-[300px] opacity-100 border-t border-slate-100 bg-[#fafbfc]/40' 
                        : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="px-8 py-7 sm:px-10 sm:py-8 text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </>
  );
}