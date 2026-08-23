"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import * as LucideIcons from "lucide-react";

export interface Phase {
  num: string;
  phase: string;
  text: string;
  borderCol: string;
  dotCol: string;
  shadowCol: string;
  iconColor: string;
  iconAlign: "left" | "right";
  iconName: string;
}

interface ArchitectureTimelineProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  phases: Phase[];
  codeFile?: string;
  codeLines?: string[];
  floatingBadge1Text?: string;
  floatingBadge1Sub?: string;
  floatingBadge1Value?: string;
  floatingBadge2Text?: string;
  floatingBadge2Sub?: string;
  floatingBadge2Icon?: string;
}

export default function ArchitectureTimeline({
  title = "The Architecture",
  subtitle = "How We Engineer The Solution.",
  tagline = "A proven process. Relentless quality. Built for performance, designed to scale.",
  phases,
  codeFile = "src/app/architecture.tsx",
  codeLines = [
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
  ],
  floatingBadge1Text = "Lighthouse",
  floatingBadge1Sub = "Performance Audit Passed",
  floatingBadge1Value = "99",
  floatingBadge2Text = "SEO Core",
  floatingBadge2Sub = "Total Dominance Architecture",
  floatingBadge2Icon = "Search"
}: ArchitectureTimelineProps) {

  // Dynamic Lucide icon resolution helper
  const resolveIcon = (name: string) => {
    const Icon = (LucideIcons as any)[name];
    return Icon || LucideIcons.HelpCircle;
  };

  const FloatingBadge2IconComponent = resolveIcon(floatingBadge2Icon);

  return (
    <section className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#fafbfc] overflow-hidden">
      {/* Local style block for ultra-smooth CSS float animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes customFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes customFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(8px); }
        }
        .smooth-float-1 {
          animation: customFloat1 5s ease-in-out infinite;
        }
        .smooth-float-2 {
          animation: customFloat2 6s ease-in-out infinite;
        }
      `}} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">

        {/* Left Column: Sticky Header + Mock IDE Graphic */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit text-left space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="block text-sm sm:text-base font-extrabold tracking-[0.25em] text-[#2443ab] uppercase">
              {title}
            </span>
            <motion.h2
              className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.1] text-[#0d1b3e]"
            >
              {subtitle.split(" ").map((word, i) => {
                const isEngineer = word.toLowerCase().includes("engineer");
                return (
                  <span key={i} className={isEngineer ? "text-[#2443ab]" : ""}>
                    {word}{" "}
                  </span>
                );
              })}
            </motion.h2>
            <p className="text-slate-500 font-medium text-lg max-w-sm leading-relaxed pt-2">
              {tagline}
            </p>
          </motion.div>

          {/* Modern Web Development themed Mock IDE / Code Graphic */}
          <div className="relative w-full aspect-[4/3] max-w-[420px] mx-auto lg:mx-0 pt-8 select-none">
            {/* Ambient glow behind the IDE */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent blur-3xl rounded-3xl" />

            {/* Main Mock IDE Window */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="relative w-full h-[340px] bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-left flex flex-col font-mono text-[10px] sm:text-xs text-slate-400"
            >
              {/* IDE Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800/80">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <div className="text-[10px] text-slate-500 font-medium tracking-wide truncate max-w-[180px] sm:max-w-none">
                  {codeFile}
                </div>
                <div className="w-10 flex-shrink-0" />
              </div>

              {/* IDE Code Content */}
              <div className="p-5 space-y-3.5 flex-grow overflow-hidden relative">
                {/* Background line numbers */}
                <div className="absolute left-3 top-5 text-[10px] text-slate-700 space-y-3 text-right w-4 select-none">
                  {codeLines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>

                <div className="pl-6 space-y-2 text-[10px] sm:text-[11px] leading-relaxed font-mono">
                  {codeLines.map((line, idx) => {
                    // Simple highlighting regex/logic for aesthetics
                    let parsedLine = <span className="text-slate-300">{line}</span>;
                    if (line.trim().startsWith("import") || line.trim().startsWith("export")) {
                      const words = line.split(" ");
                      parsedLine = (
                        <span>
                          <span className="text-purple-400">{words[0]}</span>{" "}
                          {words.slice(1).map((w, wi) => {
                            if (w === "from") return <span key={wi} className="text-purple-400">from </span>;
                            if (w.startsWith('"') || w.startsWith("'")) return <span key={wi} className="text-emerald-400">{w} </span>;
                            return <span key={wi} className="text-blue-400">{w} </span>;
                          })}
                        </span>
                      );
                    } else if (line.trim().startsWith("//")) {
                      parsedLine = <span className="text-slate-500">{line}</span>;
                    } else if (line.includes("const ") || line.includes("let ")) {
                      parsedLine = (
                        <span>
                          <span className="text-purple-400">const</span>{" "}
                          <span className="text-slate-300">{line.replace("const ", "")}</span>
                        </span>
                      );
                    } else if (line.includes("<") || line.includes(">")) {
                      parsedLine = (
                        <span className="text-slate-500">
                          {line.split(/(<[^>]+>)/g).map((part, pi) => {
                            if (part.startsWith("<") && part.endsWith(">")) {
                              const cleanTag = part.replace(/[<>]/g, "");
                              const tagParts = cleanTag.split(" ");
                              return (
                                <span key={pi}>
                                  &lt;
                                  <span className="text-rose-400">{tagParts[0]}</span>
                                  {tagParts.slice(1).map((tp, tpi) => {
                                    if (tp.includes("=")) {
                                      const [attr, val] = tp.split("=");
                                      return (
                                        <span key={tpi}>
                                          {" "}
                                          <span className="text-sky-400">{attr}</span>=
                                          <span className="text-emerald-400">{val}</span>
                                        </span>
                                      );
                                    }
                                    return <span key={tpi}> {tp}</span>;
                                  })}
                                  &gt;
                                </span>
                              );
                            }
                            return part;
                          })}
                        </span>
                      );
                    }

                    // Calculate manual indent spacing
                    const leadingSpaces = line.length - line.trimStart().length;

                    return (
                      <div key={idx} style={{ paddingLeft: `${leadingSpaces * 4}px` }}>
                        {parsedLine}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Overlapping Floating Component 1: Lighthouse Score Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-4 -top-2 bg-white/90 backdrop-blur-md border border-emerald-100 rounded-2xl p-3 shadow-xl flex items-center gap-3 cursor-default z-20 smooth-float-1"
            >
              <div className="relative w-10 h-10 rounded-full border-[3px] border-emerald-500 flex items-center justify-center text-xs font-black text-emerald-600 flex-shrink-0 font-sans">
                {floatingBadge1Value}
                <div className="absolute inset-0 rounded-full border border-emerald-300 animate-ping opacity-30" />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{floatingBadge1Text}</div>
                <div className="text-[11px] font-bold text-slate-700 whitespace-nowrap">{floatingBadge1Sub}</div>
              </div>
            </motion.div>

            {/* Overlapping Floating Component 2: SEO Meta Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -left-6 bottom-4 bg-white/90 backdrop-blur-md border border-blue-100 rounded-2xl p-3.5 shadow-xl flex items-center gap-3.5 cursor-default z-20 smooth-float-2"
            >
              <div className="p-2 bg-blue-50 border border-blue-100 rounded-xl text-blue-600 flex-shrink-0">
                <FloatingBadge2IconComponent className="w-5 h-5" />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{floatingBadge2Text}</div>
                <div className="text-[11px] font-bold text-slate-700 whitespace-nowrap">{floatingBadge2Sub}</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Timeline S-Curve and Cards */}
        <div className="lg:col-span-7 relative pl-0 md:pl-6">
          
          {/* Vertical Wavy Timeline Path (SVG) */}
          <div className="absolute left-[20px] top-0 bottom-0 w-[90px] pointer-events-none hidden md:block select-none">
            <svg className="w-full h-full" viewBox="0 0 90 900" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 15,0 
                   C 15,90 75,60 75,150 
                   C 75,240 15,210 15,300 
                   C 15,390 75,360 75,450 
                   C 75,540 15,510 15,600 
                   C 15,690 75,660 75,750 
                   C 75,840 45,860 45,900"
                stroke="url(#timeline-grad)"
                strokeWidth="2.5"
                strokeDasharray="4 4"
              />
              <defs>
                <linearGradient id="timeline-grad" x1="0" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="20%" stopColor="#a855f7" />
                  <stop offset="40%" stopColor="#ec4899" />
                  <stop offset="60%" stopColor="#f97316" />
                  <stop offset="80%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Timeline Cards Container */}
          <div className="space-y-6 relative font-sans">
            {phases.map((item, index) => {
              const IconComponent = resolveIcon(item.iconName);
              const isLeftDot = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      }
                    }
                  }}
                  className="flex flex-col md:flex-row items-center relative group min-h-[110px] md:pl-28"
                >
                  
                  {/* Timeline Dot on the wave curve - weaves left and right */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`absolute hidden md:block ${isLeftDot ? "left-[27px]" : "left-[87px]"} w-4 h-4 rounded-full border-[3px] z-20 ${item.dotCol} shadow-sm group-hover:scale-125 transition-transform duration-300`}
                  />

                  {/* Timeline horizontal connector line */}
                  {item.iconAlign === "left" && (
                    <motion.div
                      variants={{
                        hidden: { scaleX: 0 },
                        visible: { scaleX: 1 }
                      }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      style={{ originX: 0 }}
                      className="absolute hidden md:block left-[42px] w-[70px] h-[2px] bg-slate-200 group-hover:bg-slate-300 transition-colors z-10"
                    />
                  )}

                  <div className={`w-full flex items-center gap-6 ${item.iconAlign === "left" ? "flex-row" : "flex-row-reverse"}`}>
                    
                    {/* Icon Badge */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, scale: 0, rotate: -30 },
                        visible: { opacity: 1, scale: 1, rotate: 0 }
                      }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className={`w-14 h-14 rounded-full border flex items-center justify-center flex-shrink-0 shadow-lg shadow-slate-100/50 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 z-10 ${item.iconColor}`}
                    >
                      <IconComponent className="w-6 h-6 transition-all duration-500 ease-out group-hover:scale-150 group-hover:-translate-y-0.5" />
                    </motion.div>

                    {/* Card */}
                    <motion.div
                      variants={{
                        hidden: { 
                          opacity: 0, 
                          x: item.iconAlign === "left" ? 50 : -50,
                          scale: 0.95
                        },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          scale: 1
                        }
                      }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className={`flex-grow bg-white border border-slate-100 border-l-[6px] ${item.borderCol} rounded-[24px] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.02)] ${item.shadowCol} hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300 text-left cursor-pointer`}
                    >
                      <span className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-1.5 font-sans">
                        {item.phase}
                      </span>
                      <p className="text-slate-600 font-semibold leading-relaxed text-sm sm:text-base font-sans">
                        {item.text}
                      </p>
                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
