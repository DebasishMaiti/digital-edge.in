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
  Briefcase,
  HelpCircle
} from "lucide-react";

interface SuccessStoryData {
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  playStoreUrl?: string;
  stats: {
    estimatedTime: string;
    bugsFixing: string;
    security: string;
    projectCompletion: string;
    trafficSpikes: string;
  };
  about: string;
  challenge: string;
  workflow: string[];
  timeline: { label: string; day: string; color: string }[];
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

  return (
    <div className="relative min-h-screen bg-[#fafbfc] text-slate-800 pb-24 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none z-0" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50/50 via-indigo-50/20 to-transparent -z-10" />

      {/* Floating Glowing ambient light */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0%,transparent_70%)] pointer-events-none blur-[40px]" />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)] pointer-events-none blur-[40px]" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 relative z-10">

        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-505 hover:text-slate-900 transition-colors mb-12 text-sm font-bold uppercase tracking-wider group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-black tracking-widest text-blue-600 uppercase shadow-sm">
                Success Story
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-black text-slate-900 leading-tight tracking-tight"
            >
              {story.title} - <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Success Story</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl font-bold text-slate-500 italic"
            >
              "{story.subtitle}"
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium"
            >
              {story.description}
            </motion.p>

            {/* Play store Link */}
            {story.playStoreUrl && (
              <motion.div variants={itemVariants} className="pt-4">
                <a
                  href={story.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0f172a] hover:bg-[#1e293b] text-white text-sm font-extrabold rounded-2xl transition-all duration-300 shadow-lg shadow-slate-900/10 hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wider"
                >
                  <span>View Google Play App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </div>

          {/* Hero Right image mockups / placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-[340px] aspect-[1/2] rounded-[48px] bg-slate-950 p-3 shadow-2xl border border-slate-800"
            >
              {/* Screen Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-20 flex items-center justify-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 border border-slate-800" />
              </div>

              {/* Screen Glass */}
              <div className="w-full h-full rounded-[38px] overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 relative border border-slate-900 flex flex-col justify-between p-6">

                {/* Simulated Screen Header */}
                <div className="flex justify-between items-center mt-4">
                  <span className="font-extrabold text-[15px] text-white tracking-tight">{story.title}</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Simulated Screen Center Illustration */}
                <div className="my-auto space-y-4">
                  <div className="w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-3xl mx-auto shadow-md backdrop-blur-sm border border-white/5">
                    {story.emoji}
                  </div>
                  <div className="text-center space-y-1">
                    <p className="text-white text-lg font-black tracking-tight">Growth Catalyst</p>
                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">Active Solutions</p>
                  </div>
                </div>

                {/* Simulated Screen Map snippet */}
                <div className="h-28 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden backdrop-blur-md flex flex-col justify-end p-3 text-left">
                  {/* Small route lines */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.8)_0%,transparent_70%)]" />
                  <div className="relative z-10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Status update</p>
                    <p className="text-white text-xs font-black mt-0.5">Campaign Configured</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Dashboard / Metrics Grid */}
        <div className="mt-24">
          <div className="text-left mb-8">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Project Dashboard</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { label: "Estimated Time", val: story.stats.estimatedTime, icon: <Clock className="w-5 h-5 text-amber-500" />, bg: "bg-amber-50 border-amber-100/60" },
              { label: "Bugs Fixing", val: story.stats.bugsFixing, icon: <Bug className="w-5 h-5 text-rose-500" />, bg: "bg-rose-50 border-rose-100/60" },
              { label: "Security Standards", val: story.stats.security, icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />, bg: "bg-emerald-50 border-emerald-100/60" },
              { label: "Project Completion", val: story.stats.projectCompletion, icon: <CheckCircle2 className="w-5 h-5 text-indigo-500" />, bg: "bg-indigo-50 border-indigo-100/60" },
              { label: "Traffic Spikes Handled", val: story.stats.trafficSpikes, icon: <TrendingUp className="w-5 h-5 text-blue-500" />, bg: "bg-blue-50 border-blue-100/60" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`p-6 rounded-3xl border ${stat.bg} shadow-sm flex flex-col justify-between text-left min-h-[140px]`}
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-inner shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <span className="block text-[11px] font-black text-slate-400 uppercase tracking-wider">{stat.label}</span>
                  <span className="block text-2xl font-black text-slate-900 mt-1">{stat.val}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Sections: About & Challenge */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-24">

          {/* About The Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.01)] text-left space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">About The Brand</h3>
            </div>
            <p className="text-slate-650 text-[15px] sm:text-base leading-relaxed font-medium">
              {story.about}
            </p>
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100/80 shadow-[0_10px_30px_rgba(0,0,0,0.01)] text-left space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">The Challenge</h3>
            </div>
            <p className="text-slate-650 text-[15px] sm:text-base leading-relaxed font-medium">
              {story.challenge}
            </p>
          </motion.div>
        </div>

        {/* Development Pillars & Roadmap Milestone Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-24 items-start">

          {/* Development Section (Left) */}
          <div className="lg:col-span-6 text-left space-y-6">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Development Workflow</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8" />

            <div className="space-y-6">
              {story.workflow.map((desc, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 items-start bg-white p-5 rounded-2xl border border-slate-100/80 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[15px] text-slate-900">Task Phase</h4>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1 leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Planning Milestone Section (Right) */}
          <div className="lg:col-span-6 text-left space-y-6">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Timeline & Roadmap</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-8" />

            <div className="relative pl-6 space-y-8 border-l-2 border-dashed border-slate-200">
              {story.timeline.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-center justify-between bg-white px-6 py-4 rounded-2xl border border-slate-100/85 shadow-sm"
                >
                  {/* Timeline Dot icon */}
                  <span className={`absolute left-[-32px] w-4.5 h-4.5 rounded-full border-4 border-white bg-slate-200 shadow-sm flex items-center justify-center shrink-0`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  </span>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Phase 0{i + 1}</span>
                    <h4 className="font-extrabold text-[15px] text-slate-900 mt-0.5">{step.label}</h4>
                  </div>
                  <span className={`px-4 py-1.5 rounded-xl border text-xs font-black tracking-wider uppercase ${step.color}`}>
                    {step.day}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
