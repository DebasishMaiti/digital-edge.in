"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
  LineChart,
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
}

export default function CompanyDetailsClient({ story }: { story: SuccessStoryData }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  // Approach section icons mapping using brand blue/indigo gradient styling
  const approachIcons = [
    <Globe key="1" className="w-6 h-6 text-[#0c89c7]" />,
    <Layers key="2" className="w-6 h-6 text-[#2450b3]" />,
    <Settings key="3" className="w-6 h-6 text-[#3d199f]" />,
    <Rocket key="4" className="w-6 h-6 text-[#0c89c7]" />
  ];

  // Timeline section icons mapping using brand style colors
  const timelineIcons = [
    <Clock key="1" className="w-5 h-5 text-[#0c89c7]" />,
    <PenTool key="2" className="w-5 h-5 text-[#2450b3]" />,
    <Settings key="3" className="w-5 h-5 text-[#3d199f]" />,
    <Search key="4" className="w-5 h-5 text-[#0c89c7]" />,
    <Rocket key="5" className="w-5 h-5 text-[#2450b3]" />
  ];

  return (
    <div className="relative min-h-screen bg-[#FBFBF9] text-slate-800 pb-24 overflow-hidden font-sans antialiased">
      {/* Light background meshes and decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4dd_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[55%] h-[600px] bg-gradient-to-b from-[#0c89c7]/10 via-[#2450b3]/5 to-transparent -z-10" />

      {/* Ambient background glow matching the brand colors */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(12,137,199,0.06)_0%,transparent_70%)] pointer-events-none blur-[40px] -z-10" />
      <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(36,80,179,0.05)_0%,transparent_70%)] pointer-events-none blur-[45px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-12 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#0c89c7] hover:text-[#2450b3] transition-colors mb-12 text-xs font-black uppercase tracking-wider group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Dynamic Content Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-2 text-[#0c89c7]">
                <span className="text-xl font-bold">{story.emoji}</span>
                <span className="text-xs font-black uppercase tracking-widest">{story.title}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                {story.heroHeadingBlack || "Success"}{" "}
                <span className="bg-gradient-to-r from-[#0c89c7] via-[#2450b3] to-[#3d199f] bg-clip-text text-transparent block sm:inline">
                  {story.heroHeadingGreen || "Story"}
                </span>
              </h1>

              <p className="text-md sm:text-lg font-bold text-slate-500 max-w-xl">
                {story.subtitle}
              </p>

              <p className="text-sm sm:text-base text-slate-655 leading-relaxed font-semibold max-w-2xl">
                {story.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                {story.websiteUrl && (
                  <a
                    href={story.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#0c89c7] via-[#2450b3] to-[#3d199f] hover:brightness-110 text-white text-xs font-black rounded-full transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider"
                  >
                    <span>Visit Website</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                )}
                {story.websiteUrl && (
                  <a
                    href={story.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-slate-700 hover:text-slate-955 transition-colors"
                  >
                    <span>{new URL(story.websiteUrl).hostname}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                )}
              </div>

              {/* Industry Badges row */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-[#e2e2da] max-w-xl">
                {story.industry && (
                  <div className="flex items-center gap-2 text-slate-600">
                    <Home className="w-4 h-4 text-[#0c89c7] opacity-80" />
                    <span className="text-[11px] font-black uppercase tracking-wider">Industry</span>
                    <span className="text-xs font-bold text-slate-900 border-l border-[#e2e2da] pl-2">{story.industry}</span>
                  </div>
                )}
                {story.projectType && (
                  <div className="flex items-center gap-2 text-slate-600">
                    <Tag className="w-4 h-4 text-[#2450b3] opacity-80" />
                    <span className="text-[11px] font-black uppercase tracking-wider">Project Type</span>
                    <span className="text-xs font-bold text-slate-900 border-l border-[#e2e2da] pl-2">{story.projectType}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Hero Right Image Mockup */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[380px] aspect-[4/3] sm:aspect-square rounded-[32px] overflow-hidden shadow-2xl border border-white/80 p-2 bg-white/40 backdrop-blur-md">
                <img
                  src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop"
                  alt="Skincare cosmetics arrange"
                  className="w-full h-full rounded-[24px] object-cover"
                />
                
                {/* Floating circular badge with gradient theme */}
                <div className="absolute top-6 right-6 w-24 h-24 rounded-full bg-gradient-to-r from-[#0c89c7] via-[#2450b3] to-[#3d199f] text-white flex flex-col items-center justify-center text-center p-2 backdrop-blur-sm border border-white/10 shadow-lg">
                  <span className="text-[7px] font-black uppercase tracking-widest leading-none">Nature</span>
                  <span className="text-[7px] font-black uppercase tracking-widest leading-none mt-1">Science</span>
                  <span className="text-[7px] font-black uppercase tracking-widest leading-none mt-1">Care</span>
                </div>
              </div>
            </div>

          </div>

          {/* Dynamic 6-Stats Ribbon bar */}
          <div className="w-full bg-white border border-[#e4e4dd]/80 rounded-3xl p-6 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#e4e4dd]/80">
              {[
                { label: "Estimated Time", val: story.stats.estimatedTime, icon: <Clock className="w-4.5 h-4.5 text-[#2450b3]" /> },
                { label: "Bugs Fixing", val: story.stats.bugsFixing, icon: <Bug className="w-4.5 h-4.5 text-[#2450b3]" /> },
                { label: "Security & Reliability", val: story.stats.security, icon: <ShieldCheck className="w-4.5 h-4.5 text-[#2450b3]" /> },
                { label: "Project Completion", val: story.stats.projectCompletion, icon: <CheckCircle2 className="w-4.5 h-4.5 text-[#2450b3]" /> },
                { label: story.stats.trafficSpikesLabel || "Load Time", val: story.stats.trafficSpikes, icon: <Gauge className="w-4.5 h-4.5 text-[#2450b3]" /> },
                { label: "Traffic & Engagement", val: "Higher", icon: <TrendingUp className="w-4.5 h-4.5 text-[#2450b3]" /> }
              ].map((stat, i) => (
                <div key={i} className={`flex flex-col items-center text-center px-4 ${i > 0 && "pt-4 md:pt-0"}`}>
                  <div className="flex items-center gap-1.5 justify-center">
                    {stat.icon}
                    <span className="text-lg font-black text-slate-900 leading-none">{stat.val}</span>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider mt-2 block">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About The Brand & Challenge side-by-side with Dropper Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
            
            {/* About Narrative Center Column */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 block">
                About {story.title}
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-snug">
                {story.aboutHeadline || "Nurturing Beauty. Enhancing Confidence."}
              </h3>
              <p className="text-slate-655 text-sm sm:text-base leading-relaxed font-semibold">
                {story.about}
              </p>
            </div>

            {/* The Challenge Card Right Column */}
            <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#e4e4dd]/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 block">
                The Challenge
              </span>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                {story.challengeHeadline || "Standing Out in a Competitive Market"}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-bold">
                {story.challenge}
              </p>
              
              {/* Challenge bullet checkmarks */}
              {story.challengeBullets && story.challengeBullets.length > 0 && (
                <ul className="space-y-2.5 pt-2">
                  {story.challengeBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-bold leading-tight">
                      <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>

          {/* Workflow & Timeline Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Approach column */}
            {story.workflow && story.workflow.length > 0 && (
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 block">
                  Our Workflow
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  {story.workflowTitle || "Our Approach"}
                </h3>

                <div className="space-y-4">
                  {story.workflow.map((desc, i) => (
                    <div
                      key={i}
                      className="flex gap-4 items-center bg-white p-4 sm:p-5 rounded-2xl border border-[#e4e4dd]/60 shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
                    >
                      <div className="w-12 h-12 rounded-xl bg-teal-50/60 border border-teal-100 flex items-center justify-center shrink-0 shadow-inner">
                        {approachIcons[i % approachIcons.length]}
                      </div>
                      <div className="flex-1 min-w-0 pr-4">
                        <p className="text-slate-700 text-xs sm:text-sm font-bold leading-relaxed">{desc}</p>
                      </div>
                      <span className="text-2xl font-black text-slate-200 leading-none select-none">
                        0{i + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline column */}
            {story.timeline && story.timeline.length > 0 && (
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 block">
                  Project Timeline
                </span>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  From Planning to Launch
                </h3>

                <div className="bg-white border border-[#e4e4dd]/60 rounded-3xl p-6 sm:p-8 space-y-8 shadow-sm">
                  {/* Timeline Graphic Nodes */}
                  <div className="relative pt-6">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-5 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                      {story.timeline.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center space-y-2">
                          <div className="w-10 h-10 rounded-full bg-white border border-teal-200 flex items-center justify-center shadow-md relative">
                            {timelineIcons[i % timelineIcons.length]}
                            <span className="absolute bottom-[-14px] w-1.5 h-1.5 rounded-full bg-teal-500 hidden md:block" />
                          </div>

                          <div className="pt-2">
                            <span className="block text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">
                              {step.label}
                            </span>
                            <span className="block text-xs font-black text-slate-900 mt-1">
                              {step.day}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight completion status banner */}
                  <div className="flex items-center gap-4 bg-[#f4f7f5] border border-teal-100 rounded-2xl p-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="font-black text-[13px] text-slate-900 leading-tight">
                        {story.timelineBanner || "Project Successfully Delivered"}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-semibold mt-0.5">On time. On point. Beyond expectations.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* The Impact Section */}
          {story.impactCards && story.impactCards.length > 0 && (
            <div className="space-y-8 pt-8 border-t border-[#e4e4dd]/80 text-left">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-teal-600 block">
                  The Impact
                </span>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                  {story.impactHeadline || "Stronger Brand. Higher Growth."}
                </h3>
                <p className="text-sm sm:text-base text-slate-550 max-w-3xl font-semibold">
                  {story.impactDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {story.impactCards.map((card, idx) => {
                  const impactIcons = [
                    <Eye key="1" className="w-5 h-5 text-teal-500" />,
                    <Users key="2" className="w-5 h-5 text-teal-500" />,
                    <ShieldCheck key="3" className="w-5 h-5 text-teal-500" />,
                    <TrendingUp key="4" className="w-5 h-5 text-teal-500" />
                  ];
                  return (
                    <div key={idx} className="bg-white border border-[#e4e4dd]/60 rounded-3xl p-6 space-y-4 shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center shadow-inner">
                        {impactIcons[idx % impactIcons.length]}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-black text-slate-900 text-sm">{card.title}</h4>
                        <p className="text-slate-500 text-xs font-bold leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Footer Call-To-Action Banner */}
          <div className="bg-gradient-to-r from-[#0c89c7] via-[#2450b3] to-[#3d199f] rounded-[32px] p-8 sm:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden shadow-xl text-left">
            <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-teal-600/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-teal-600/20 blur-3xl pointer-events-none" />
            
            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Ready to Grow Your Brand Like {story.title}?
              </h3>
              <p className="text-xs sm:text-sm text-cyan-100/80 font-bold">
                Let's build your digital success story together.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-900 text-xs font-black rounded-full transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider relative z-10 shrink-0"
            >
              <span>Let's Talk</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

        </motion.div>

      </div>
    </div>
  );
}
