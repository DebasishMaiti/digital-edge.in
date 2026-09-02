"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  Bug,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  ArrowLeft,
  ExternalLink,
  Globe,
  PenTool,
  Settings,
  Rocket,
  Layers,
  Search,
  Gauge,
  Eye,
  Users,
  CheckCircle,
  Home,
  Tag,
  ChevronRight
} from "lucide-react";

interface SuccessStoryData {
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  playStoreUrl?: string;
  websiteUrl?: string;
  stats: {
    estimatedTime: string;
    bugsFixing: string;
    security: string;
    projectCompletion: string;
    trafficSpikes: string;
    trafficSpikesLabel?: string;
  };
  customStats?: {
    label: string;
    val: string;
  }[];
  about: string;
  challenge: string;
  workflowTitle?: string;
  workflow?: string[];
  timeline?: { label: string; day: string; color: string }[];
  heroHeadingBlack?: string;
  heroHeadingGreen?: string;
  industry?: string;
  projectType?: string;
  aboutHeadline?: string;
  challengeHeadline?: string;
  challengeBullets?: string[];
  timelineBanner?: string;
  impactHeadline?: string;
  impactDescription?: string;
  impactCards?: { title: string; desc: string; icon: string }[];
  image?: string;
  logo?: string;
}

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract number and suffix/prefix
  const match = value.match(/([\d.,]+)/);
  if (!match) {
    return <span>{value}</span>;
  }

  const numericString = match[0].replace(/,/g, '');
  const isFloat = numericString.includes('.');
  const decimalMatches = numericString.split('.');
  const decimals = decimalMatches.length > 1 ? decimalMatches[1].length : 0;
  const targetNumber = parseFloat(numericString);
  const prefix = value.substring(0, match.index);
  const suffix = value.substring((match.index || 0) + match[0].length);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2500; // ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (easeOutQuad)
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * targetNumber;

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, targetNumber]);

  const formattedCount = isFloat
    ? count.toFixed(decimals)
    : Math.floor(count).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
}

export default function CompanyDetailsClient({ story, slug }: { story: SuccessStoryData; slug: string }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  // Approach section icons mapping using brand blue/indigo gradient styling
  const approachIcons = [
    <Globe key="1" className="w-5 h-5 text-sky-500" />,
    <Layers key="2" className="w-5 h-5 text-indigo-500" />,
    <Settings key="3" className="w-5 h-5 text-violet-500" />,
    <Rocket key="4" className="w-5 h-5 text-emerald-500" />
  ];

  // Timeline section icons mapping using brand style colors
  const timelineIcons = [
    <Clock key="1" className="w-4 h-4 text-sky-500" />,
    <PenTool key="2" className="w-4 h-4 text-indigo-500" />,
    <Settings key="3" className="w-4 h-4 text-violet-500" />,
    <Search key="4" className="w-4 h-4 text-emerald-500" />,
    <Rocket key="5" className="w-4 h-4 text-rose-500" />
  ];

  return (
    <div className="relative min-h-screen bg-[#fafbfc] text-slate-800 pb-32 overflow-hidden font-sans antialiased">
      {/* Canonical Link */}
      <link rel="canonical" href={`https://digitaledge360.in/company-details/${slug}/`} />
      {/* Moving Grid Background Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(226,232,240,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.4)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Modern ambient glowing background blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[55%] aspect-square rounded-full bg-gradient-to-br from-cyan-400/8 via-blue-500/5 to-purple-600/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[20%] left-[-15%] w-[45%] aspect-square rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.06)_0%,transparent_70%)] pointer-events-none blur-[90px] -z-10" />
      <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-28 sm:pt-32 lg:pt-36 relative z-10">
        {/* Dynamic Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-28"
        >
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
 
            {/* Hero Left Content */}
            <motion.div variants={itemVariants} className="lg:col-span-6 space-y-8 text-left">
              <div className="flex items-center gap-3">
                {story.logo ? (
                  <div className="bg-white/95 border border-slate-200/60 p-2.5 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.04)] flex items-center justify-center h-14 w-32 md:h-16 md:w-36 transition-all duration-300">
                    <img src={story.logo} alt={story.title} className="max-h-full max-w-full object-contain" />
                  </div>
                ) : (
                  <span className="text-2xl drop-shadow-sm select-none">{story.emoji}</span>
                )}
                <span className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">{story.title}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.05] tracking-tight">
                {story.heroHeadingBlack || "Success"}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent block sm:inline">
                  {story.heroHeadingGreen || "Story"}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl font-extrabold text-slate-800 leading-relaxed max-w-2xl">
                {story.subtitle}
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-semibold max-w-3xl">
                {story.description}
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                {story.websiteUrl && (
                  <a
                    href={story.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:brightness-110 text-white text-xs font-extrabold rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(79,70,229,0.25)] hover:shadow-[0_12px_28px_rgba(79,70,229,0.4)] uppercase tracking-wider group"
                  >
                    <span>Visit Website</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                )}
                {story.websiteUrl && (
                  <a
                    href={story.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-400 hover:text-indigo-600 transition-colors duration-300"
                  >
                    <span>{(() => { try { return new URL(story.websiteUrl).hostname; } catch { return story.websiteUrl; } })()}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                )}
              </div>

              {/* Industry Badges row */}
              <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-200/60 max-w-xl">
                {story.industry && (
                  <div className="flex items-center gap-2 text-slate-500">
                    <Home className="w-4 h-4 text-blue-500 opacity-80" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Industry</span>
                    <span className="text-xs font-bold text-slate-900 border-l border-slate-200 pl-2.5">{story.industry}</span>
                  </div>
                )}
                {story.projectType && (
                  <div className="flex items-center gap-2 text-slate-500">
                    <Tag className="w-4 h-4 text-indigo-500 opacity-80" />
                    <span className="text-[10px] font-black uppercase tracking-wider">Project Type</span>
                    <span className="text-xs font-bold text-slate-900 border-l border-slate-200 pl-2.5">{story.projectType}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Hero Right Image Mockup */}
            <motion.div variants={itemVariants} className="lg:col-span-6 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square rounded-[40px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-white p-2.5 bg-white/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 group">
                <img
                  src={story.image || "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop"}
                  alt={story.title}
                  className="w-full h-full rounded-[30px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </motion.div>
          </div>

          {/* Dynamic 6-Stats Ribbon bar */}
          <motion.div variants={itemVariants} className="w-full bg-gradient-to-r from-blue-100/60 via-white/80 to-indigo-100/60 backdrop-blur-md border border-slate-200/55 rounded-[32px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
              {[
                { label: "Estimated Time", val: story.stats.estimatedTime, icon: <Clock className="w-5 h-5 text-blue-500" />, colorClass: "from-blue-600 to-sky-500" },
                { label: "Bugs Fixing", val: story.stats.bugsFixing, icon: <Bug className="w-5 h-5 text-violet-500" />, colorClass: "from-violet-600 to-fuchsia-500" },
                { label: "Security & Reliability", val: story.stats.security, icon: <ShieldCheck className="w-5 h-5 text-pink-500" />, colorClass: "from-pink-600 to-rose-500" },
                { label: "Project Completion", val: story.stats.projectCompletion, icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />, colorClass: "from-emerald-600 to-green-500" },
                { label: story.stats.trafficSpikesLabel || "Load Time", val: story.stats.trafficSpikes, icon: <Gauge className="w-5 h-5 text-amber-500" />, colorClass: "from-amber-600 to-yellow-500" },
                { label: "Traffic & Engagement", val: "Higher", icon: <TrendingUp className="w-5 h-5 text-indigo-500" />, colorClass: "from-indigo-600 to-blue-500" }
              ].map((stat, i) => (
                <div key={i} className={`flex flex-col items-center text-center px-4 ${i > 0 && "pt-4 md:pt-0"}`}>
                  <div className="flex items-center gap-1.5 justify-center">
                    {stat.icon}
                    <span className={`text-xl font-black leading-none bg-gradient-to-r ${stat.colorClass} bg-clip-text text-transparent`}>
                      <AnimatedCounter value={stat.val} />
                    </span>
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-2.5 block">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* About The Brand & Challenge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch text-left">

            {/* About Narrative Center Column */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="lg:col-span-6 bg-gradient-to-r from-blue-100/60 via-white/80 to-indigo-100/60 border border-slate-200/55 rounded-[32px] p-8 sm:p-10 space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/60 text-[9px] font-black uppercase tracking-widest text-blue-600">
                    <Home className="w-3 h-3" />
                    About {story.title}
                  </span>
                </div>
                {story.aboutHeadline && (
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug border-l-4 border-blue-500 pl-4">
                    {story.aboutHeadline}
                  </h3>
                )}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  {story.about}
                </p>
              </div>
            </motion.div>

            {/* The Challenge Card Right Column */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="lg:col-span-6 bg-gradient-to-r from-blue-100/60 via-white/80 to-indigo-100/60 border border-slate-200/55 rounded-[32px] p-8 sm:p-10 space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300"
            >
              <div className="space-y-5">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100/60 text-[9px] font-black uppercase tracking-widest text-indigo-600">
                    <Tag className="w-3 h-3" />
                    The Challenge
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug border-l-4 border-indigo-500 pl-4">
                  {story.challengeHeadline || "Standing Out in a Competitive Market"}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                  {story.challenge}
                </p>

                {/* Challenge bullet checkmarks */}
                {story.challengeBullets && story.challengeBullets.length > 0 && (
                  <ul className="grid grid-cols-1 gap-3 pt-3">
                    {story.challengeBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-xs text-slate-700 font-bold leading-normal">
                        <div className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-inner">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-600" />
                        </div>
                        <span className="pt-0.5">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </div>

          {/* Workflow & Timeline Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Timeline column */}
            {story.timeline && story.timeline.length > 0 && (
              <motion.div variants={itemVariants} className="lg:col-span-12 space-y-6 text-left">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50/80 border border-indigo-100/60 text-[9px] font-black uppercase tracking-widest text-indigo-600">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Project Timeline
                  </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  From Planning to <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Launch</span>
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">
                  A clear and structured process to ensure timely delivery and outstanding results.
                </p>

                <div ref={timelineRef} className="bg-white border border-slate-200/60 rounded-[32px] p-10 sm:p-12 space-y-8 shadow-sm relative overflow-hidden z-10">
                  {/* Timeline Graphic Nodes */}
                  <div className="relative pt-7 z-10">
                    {/* The connecting line with dynamic gradient tracer growth */}
                    <div className="absolute top-[60px] left-[10%] right-[10%] h-[3px] bg-slate-100 hidden md:block z-0 overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isTimelineInView ? { scaleX: 1 } : { scaleX: 0 }}
                        style={{ originX: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                      />
                      {/* Desktop Glow (Outer Blurred Layer) */}
                      <motion.div
                        initial={{ left: "-50%" }}
                        animate={isTimelineInView ? { left: "150%" } : { left: "-50%" }}
                        transition={{
                          duration: 2.5,
                          ease: "linear",
                          repeat: Infinity,
                          delay: 1.8
                        }}
                        className="absolute top-[-3px] bottom-[-3px] w-2/5 bg-gradient-to-r from-transparent via-cyan-300 via-sky-300 to-transparent blur-[3px]"
                      />
                      {/* Desktop Core (Inner Bright Layer) */}
                      <motion.div
                        initial={{ left: "-50%" }}
                        animate={isTimelineInView ? { left: "150%" } : { left: "-50%" }}
                        transition={{
                          duration: 2.5,
                          ease: "linear",
                          repeat: Infinity,
                          delay: 1.8
                        }}
                        className="absolute top-0 bottom-0 w-2/5 bg-gradient-to-r from-transparent via-white via-cyan-400 to-transparent"
                      />
                    </div>

                    {/* Vertical connecting line for mobile screens */}
                    <div className="absolute left-1/2 top-[32px] bottom-[32px] w-[3px] bg-slate-100 md:hidden z-0 -translate-x-1/2 overflow-hidden">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isTimelineInView ? { scaleY: 1 } : { scaleY: 0 }}
                        style={{ originY: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"
                      />
                      {/* Mobile Glow (Outer Blurred Layer) */}
                      <motion.div
                        initial={{ top: "-50%" }}
                        animate={isTimelineInView ? { top: "150%" } : { top: "-50%" }}
                        transition={{
                          duration: 2.5,
                          ease: "linear",
                          repeat: Infinity,
                          delay: 1.8
                        }}
                        className="absolute left-[-3px] right-[-3px] h-2/5 bg-gradient-to-b from-transparent via-cyan-300 via-sky-300 to-transparent blur-[3px]"
                      />
                      {/* Mobile Core (Inner Bright Layer) */}
                      <motion.div
                        initial={{ top: "-50%" }}
                        animate={isTimelineInView ? { top: "150%" } : { top: "-50%" }}
                        transition={{
                          duration: 2.5,
                          ease: "linear",
                          repeat: Infinity,
                          delay: 1.8
                        }}
                        className="absolute left-0 right-0 h-2/5 bg-gradient-to-b from-transparent via-white via-cyan-400 to-transparent"
                      />
                    </div>

                    {/* Glowing colored segment dots appearing sequentially and then pulsing infinitely */}
                    <div className="absolute top-[55px] left-0 right-0 hidden md:block z-10 pointer-events-none">
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isTimelineInView ? {
                          scale: [1, 1.35, 1],
                          opacity: 1,
                          boxShadow: [
                            "0 0 6px rgba(59,130,246,0.3)",
                            "0 0 18px rgba(59,130,246,0.7)",
                            "0 0 6px rgba(59,130,246,0.3)"
                          ]
                        } : { scale: 0, opacity: 0 }}
                        transition={{
                          scale: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.7 },
                          boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.7 },
                          default: { type: "spring", stiffness: 180, damping: 12, delay: 0.7 }
                        }}
                        className="absolute left-[20%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#3b82f6] border-2 border-white"
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isTimelineInView ? {
                          scale: [1, 1.35, 1],
                          opacity: 1,
                          boxShadow: [
                            "0 0 6px rgba(139,92,246,0.3)",
                            "0 0 18px rgba(139,92,246,0.7)",
                            "0 0 6px rgba(139,92,246,0.3)"
                          ]
                        } : { scale: 0, opacity: 0 }}
                        transition={{
                          scale: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.1 },
                          boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.1 },
                          default: { type: "spring", stiffness: 180, damping: 12, delay: 1.1 }
                        }}
                        className="absolute left-[40%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#8b5cf6] border-2 border-white"
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isTimelineInView ? {
                          scale: [1, 1.35, 1],
                          opacity: 1,
                          boxShadow: [
                            "0 0 6px rgba(236,72,153,0.3)",
                            "0 0 18px rgba(236,72,153,0.7)",
                            "0 0 6px rgba(236,72,153,0.3)"
                          ]
                        } : { scale: 0, opacity: 0 }}
                        transition={{
                          scale: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.5 },
                          boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.5 },
                          default: { type: "spring", stiffness: 180, damping: 12, delay: 1.5 }
                        }}
                        className="absolute left-[60%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#ec4899] border-2 border-white"
                      />
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isTimelineInView ? {
                          scale: [1, 1.35, 1],
                          opacity: 1,
                          boxShadow: [
                            "0 0 6px rgba(245,158,11,0.3)",
                            "0 0 18px rgba(245,158,11,0.7)",
                            "0 0 6px rgba(245,158,11,0.3)"
                          ]
                        } : { scale: 0, opacity: 0 }}
                        transition={{
                          scale: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.9 },
                          boxShadow: { repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1.9 },
                          default: { type: "spring", stiffness: 180, damping: 12, delay: 1.9 }
                        }}
                        className="absolute left-[80%] -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#f59e0b] border-2 border-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-6 relative z-10">
                      {story.timeline.map((step, i) => {
                        const nodeColors = [
                          "from-blue-600 to-sky-400 shadow-[0_15px_30px_-5px_rgba(59,130,246,0.45),_0_10px_15px_-6px_rgba(59,130,246,0.3)] border-blue-400/50",
                          "from-violet-600 to-fuchsia-400 shadow-[0_15px_30px_-5px_rgba(139,92,246,0.45),_0_10px_15px_-6px_rgba(139,92,246,0.3)] border-violet-400/50",
                          "from-pink-600 to-rose-400 shadow-[0_15px_30px_-5px_rgba(236,72,153,0.45),_0_10px_15px_-6px_rgba(236,72,153,0.3)] border-pink-400/50",
                          "from-emerald-600 to-green-400 shadow-[0_15px_30px_-5px_rgba(16,185,129,0.45),_0_10px_15px_-6px_rgba(16,185,129,0.3)] border-emerald-400/50",
                          "from-amber-600 to-yellow-400 shadow-[0_15px_30px_-5px_rgba(245,158,11,0.45),_0_10px_15px_-6px_rgba(245,158,11,0.3)] border-amber-400/50"
                        ];
                        return (
                          <div key={i} className="flex flex-col items-center text-center relative z-10">
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={isTimelineInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                              transition={{ type: "spring", stiffness: 180, damping: 12, delay: i * 0.35 }}
                              className={`w-16 h-16 rounded-full bg-white bg-gradient-to-tr ${nodeColors[i % 5]} border flex items-center justify-center relative transition-all duration-300 hover:scale-110 group/node cursor-pointer`}
                            >
                              <span className="text-white relative z-10">
                                {React.cloneElement(timelineIcons[i % timelineIcons.length], { className: "w-6 h-6 text-white" })}
                              </span>
                            </motion.div>

                            {/* Desktop only text (below circle) */}
                            <div className="hidden md:block pt-5">
                              <span className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.25em] leading-none">
                                {step.label}
                              </span>
                              <span className="block text-base sm:text-lg font-black text-slate-800 mt-2.5">
                                {step.day}
                              </span>
                            </div>

                            {/* Mobile only text (Step label on left of circle, Day on right of circle) */}
                            <div className="md:hidden absolute inset-0 flex items-center justify-between pointer-events-none px-4">
                              <div className="w-[calc(50%-45px)] text-right pr-2">
                                <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest leading-normal">
                                  {step.label}
                                </span>
                              </div>
                              <div className="w-[calc(50%-45px)] text-left pl-2">
                                <span className="block text-sm font-black text-slate-800 leading-normal">
                                  {step.day}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>


              </motion.div>
            )}
            {/* Approach column */}
            {story.workflow && story.workflow.length > 0 && (
              <motion.div variants={itemVariants} className="lg:col-span-12 space-y-6 text-left">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100/60 text-[9px] font-black uppercase tracking-widest text-blue-600">
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18m-3-6L6 18M6 6l12 12" /></svg>
                    Our Workflow
                  </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  Our <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Approach</span>
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">
                  We follow a <span className="text-blue-600 font-extrabold">design-led approach</span> to deliver solutions that are simple, impactful, and built to create lasting value.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 pt-2">
                  {(() => {
                    const cardConfigs = [
                      {
                        leftBorder: "border-l-[3px] border-l-blue-600",
                        iconBg: "bg-blue-600 shadow-[0_4px_12px_rgba(37,99,235,0.25)]",
                        numColor: "text-blue-600/10",
                        arrowBg: "bg-blue-600 shadow-[0_4px_10px_rgba(37,99,235,0.2)]",
                        glowColor: "bg-blue-600"
                      },
                      {
                        leftBorder: "border-l-[3px] border-l-emerald-500",
                        iconBg: "bg-emerald-500 shadow-[0_4px_12px_rgba(16,185,129,0.25)]",
                        numColor: "text-emerald-500/10",
                        arrowBg: "bg-emerald-500 shadow-[0_4px_10px_rgba(16,185,129,0.2)]",
                        glowColor: "bg-emerald-500"
                      },
                      {
                        leftBorder: "border-l-[3px] border-l-violet-500",
                        iconBg: "bg-violet-500 shadow-[0_4px_12px_rgba(139,92,246,0.25)]",
                        numColor: "text-violet-500/10",
                        arrowBg: "bg-violet-500 shadow-[0_4px_10px_rgba(139,92,246,0.2)]",
                        glowColor: "bg-violet-500"
                      },
                      {
                        leftBorder: "border-l-[3px] border-l-teal-500",
                        iconBg: "bg-teal-500 shadow-[0_4px_12px_rgba(20,184,166,0.25)]",
                        numColor: "text-teal-500/10",
                        arrowBg: "bg-teal-500 shadow-[0_4px_10px_rgba(20,184,166,0.2)]",
                        glowColor: "bg-teal-500"
                      }
                    ];

                    return story.workflow.map((desc, i) => {
                      const cfg = cardConfigs[i % cardConfigs.length];

                      return (
                        <div
                          key={i}
                          className={`flex flex-col justify-between p-7 sm:p-8 rounded-[28px] bg-white border border-slate-200/50 shadow-[0_15px_35px_rgba(0,0,0,0.03)] -translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-2.5 transition-all duration-300 relative group/item min-h-[290px] overflow-hidden ${cfg.leftBorder}`}
                        >
                          {/* Ambient Glow at bottom-left corner with blur */}
                          <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full ${cfg.glowColor} opacity-[0.12] scale-110 pointer-events-none group-hover/item:opacity-[0.22] group-hover/item:scale-135 transition-all duration-500 blur-2xl`} />

                          {/* Top Row: Icon container on left, faded number on right */}
                          <div className="flex justify-between items-start w-full relative z-10">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white transition-all duration-300 group-hover/item:scale-110 ${cfg.iconBg}`}>
                              {React.cloneElement(approachIcons[i % approachIcons.length], { className: "w-5 h-5 text-white" })}
                            </div>
                            <span className={`text-4xl font-extrabold tracking-tight select-none leading-none transition-all duration-300 group-hover/item:scale-105 ${cfg.numColor}`}>
                              0{i + 1}
                            </span>
                          </div>

                          {/* Headline and body content in the middle */}
                          <div className="flex-grow pt-8 relative z-10">
                            <h4 className="text-slate-900 font-bold text-[17px] leading-snug tracking-tight text-left">
                              {desc}
                            </h4>
                          </div>

                          {/* Bottom-Right arrow button */}
                          <div className="flex justify-end w-full pt-6 relative z-10">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover/item:scale-115 group-hover/item:rotate-12 cursor-pointer ${cfg.arrowBg}`}>
                              <ChevronRight className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              </motion.div>
            )}
          </div>
          {/* Bottom Centered Logo */}
          {story.logo && (
            <div className="flex flex-col items-center justify-center pt-20 border-t border-slate-200/50 mt-16 max-w-sm mx-auto space-y-4">
              <img src={story.logo} alt={story.title} className="h-20 md:h-28 w-auto object-contain transition-all duration-300 hover:scale-105" />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]">
                {story.title} Case Study
              </span>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
