"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Calendar, Quote, Sparkles, CheckCircle2, 
  TrendingUp, ShieldCheck, BarChart3, PenTool, Code2, User, 
  Megaphone, ShoppingCart, Funnel, Users, Zap, RefreshCw, Star 
} from "lucide-react";

interface Pillar {
  title: string;
  deliverables: string;
}

interface Metric {
  title: string;
  desc: string;
}

interface Result {
  title: string;
  desc: string;
}

interface Section {
  heading: string;
  text: string;
}

interface InsightPost {
  title: string;
  tag: string;
  date: string;
  author: string;
  role: string;
  quote: string;
  desc: string;
  content: string[];
  sections?: Section[];
  pillars?: Pillar[];
  metrics?: Metric[];
  results?: Result[];
}

interface FoundersInsightClientProps {
  id: string;
  post: InsightPost;
}

export default function FoundersInsightClient({ id, post }: FoundersInsightClientProps) {
  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(36, 67, 171, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(36, 67, 171, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '56px 56px',
    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  };

  // Pillar configs matching the layout screenshot
  const pillarConfigs = [
    { icon: BarChart3, iconColor: "text-white", bg: "bg-blue-600", pillBg: "bg-blue-50 text-blue-600", accentBar: "bg-blue-600", watermark: "STRATEGY" },
    { icon: PenTool, iconColor: "text-white", bg: "bg-purple-500", pillBg: "bg-purple-50 text-purple-600", accentBar: "bg-purple-500", watermark: "BRANDING" },
    { icon: Code2, iconColor: "text-white", bg: "bg-blue-600", pillBg: "bg-blue-50 text-blue-600", accentBar: "bg-blue-600", watermark: "TECH STACKS" },
    { icon: User, iconColor: "text-white", bg: "bg-emerald-500", pillBg: "bg-emerald-50 text-emerald-600", accentBar: "bg-emerald-500", watermark: "EXPERIENCE" },
    { icon: Megaphone, iconColor: "text-white", bg: "bg-amber-500", pillBg: "bg-amber-50 text-amber-600", accentBar: "bg-amber-500", watermark: "MARKETING" },
    { icon: ShoppingCart, iconColor: "text-white", bg: "bg-indigo-600", pillBg: "bg-indigo-50 text-indigo-600", accentBar: "bg-indigo-600", watermark: "OMNICHANNEL" },
  ];

  // Metrics configurations: green, purple, blue themes
  const metricConfigs = [
    { icon: TrendingUp, color: "text-emerald-500", iconBg: "bg-emerald-50", textClass: "text-emerald-500", accentBar: "bg-emerald-400", watermark: "SALES" },
    { icon: Funnel, color: "text-purple-600", iconBg: "bg-purple-50", textClass: "text-purple-600", accentBar: "bg-purple-400", watermark: "CONVERSION" },
    { icon: Users, color: "text-blue-600", iconBg: "bg-blue-50", textClass: "text-blue-600", accentBar: "bg-blue-400", watermark: "RETENTION" },
  ];

  // Outcomes configurations with matching left borders & stage tags
  const resultConfigs = [
    { icon: Zap, color: "text-blue-600", iconBg: "bg-blue-50", border: "border-l-4 border-l-blue-600", tagColor: "text-blue-600", watermark: "IMMEDIATE" },
    { icon: TrendingUp, color: "text-purple-600", iconBg: "bg-purple-50", border: "border-l-4 border-l-purple-600", tagColor: "text-purple-600", watermark: "REVENUE" },
    { icon: ShoppingCart, color: "text-indigo-600", iconBg: "bg-indigo-50", border: "border-l-4 border-l-indigo-600", tagColor: "text-indigo-600", watermark: "ABANDONMENT" },
    { icon: RefreshCw, color: "text-teal-600", iconBg: "bg-teal-50", border: "border-l-4 border-l-teal-600", tagColor: "text-teal-600", watermark: "LOYALTY" },
    { icon: Star, color: "text-violet-600", iconBg: "bg-violet-50", border: "border-l-4 border-l-violet-600", tagColor: "text-violet-600", watermark: "BRAND TRUST" }
  ];

  return (
    <>
      <link rel="canonical" href={`https://digitaledge360.com/insights/founders-insights/${id}`} />
      <div className="w-full bg-[#f8fafc] bg-gradient-to-tr from-[#0a8bc7]/16 via-white to-[#40159e]/16 text-[#2d3748] min-h-screen pb-24 relative overflow-hidden font-sans">
        
        {/* Soft Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={gridBackgroundStyle} />
        
        {/* Soft Light Colored Glow Spheres - Spread in wider area */}
        <div className="absolute top-[5%] left-[-20%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.18)_0%,transparent_70%)] pointer-events-none blur-[120px]" />
        <div className="absolute top-[35%] right-[-20%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.18)_0%,transparent_70%)] pointer-events-none blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-15%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(64,21,158,0.12)_0%,transparent_70%)] pointer-events-none blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1150px] px-6 sm:px-8 pt-[180px] pb-16">
          {/* Back Link */}
          <Link 
            href="/insights/founders-insights" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#2443ab] uppercase tracking-[0.2em] mb-8 hover:text-[#40159e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to founder insights</span>
          </Link>

          {/* Article Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-semibold tracking-wider">
              <span className="px-3.5 py-1.5 rounded-full bg-[#2443ab]/10 text-[#2443ab] font-black uppercase tracking-[0.2em] text-[10px] border border-blue-100">
                {post.tag}
              </span>
              <span className="flex items-center gap-1.5 tracking-wide">
                <Calendar className="w-3.5 h-3.5 text-[#2443ab]" />
                {post.date}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d1b3e] tracking-wide leading-tight">
              {post.title.includes("Complete Ecommerce Solution") ? (
                <>
                  What Include in <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">Complete Ecommerce Solution</span>
                </>
              ) : post.title.includes("₹40 Lakh Retainer") ? (
                <>
                  Why We Turned Down a <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">₹40 Lakh Retainer</span>
                </>
              ) : (
                post.title
              )}
            </h1>

            {/* Author details */}
            <div className="flex items-center gap-4 pt-2 pb-6 border-b border-slate-200">
              {post.author === "Shomak Mitra" ? (
                <img 
                  src="/shomak.png" 
                  alt="Shomak Mitra" 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-slate-200 shadow-sm"
                />
              ) : (
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2443ab]/10 flex items-center justify-center font-black text-sm text-[#2443ab]">
                  {post.author.split(" ").map(n => n[0]).join("")}
                </div>
              )}
              <div className="tracking-wide space-y-0.5">
                <p className="text-sm sm:text-base font-black text-[#0d1b3e] tracking-wide">{post.author}</p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider">{post.role}, Digital Edge 360°</p>
              </div>
            </div>
          </motion.div>

          {/* Quote Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-white border border-slate-100 border-l-4 border-l-[#2443ab] rounded-r-2xl p-8 my-8 shadow-sm overflow-hidden"
          >
            <div className="absolute top-4 right-4 text-slate-100">
              <Quote className="w-24 h-24 stroke-[1.5]" />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-[#0d1b3e] font-semibold leading-relaxed italic relative z-10">
              "{post.quote}"
            </p>
          </motion.div>

          {/* Article Content */}
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4 space-y-8 tracking-wide font-sans"
          >
            {post.title.includes("Complete Ecommerce Solution") ? (
              <div className="flex flex-col md:flex-row gap-6 items-center border-b border-slate-100 pb-6 mb-8">
                <p className="text-[#0d1b3e] font-extrabold text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-tight flex-1">
                  {post.desc}
                </p>
                <div className="w-full md:w-[380px] shrink-0">
                  <img 
                    src="/ecommerce_strategy.png" 
                    alt="Ecommerce Strategy and Architecture" 
                    className="w-full max-w-[380px] mx-auto rounded-2xl shadow-md border border-slate-200/60 object-cover" 
                  />
                </div>
              </div>
            ) : (
              <p className="text-[#0d1b3e] font-extrabold mb-8 text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-tight border-b border-slate-100 pb-6">
                {post.desc}
              </p>
            )}
            {post.title.includes("₹40 Lakh Retainer") ? (
              <div className="space-y-6 my-8 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#2443ab]/10 via-[#2443ab]/5 to-[#40159e]/10 border-l-4 border-l-[#2443ab] border-y border-r border-slate-200/80 relative overflow-hidden shadow-md">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0a8bc7]/10 to-[#40159e]/10 rounded-full blur-2xl -z-10" />
                <p className="text-2xl sm:text-3xl md:text-4xl text-[#0d1b3e] font-black leading-relaxed">
                  Last quarter, we said no to a <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent font-black">₹40 lakh retainer</span>.
                </p>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-semibold leading-relaxed flex-1">
                    The client was a <span className="text-[#0a8bc7] font-black">wellness brand</span>. Good budget, easy business on paper, the kind of deal most agencies would close without a second thought. We passed — not because we lacked the skill to run their marketing, but because we’ve spent the last three years going deep in exactly one space: <span className="text-[#2443ab] font-black">e-commerce and D2C</span>. Wellness as a category behaves differently enough from what we know that taking it on would have meant learning at their expense for the first few months. <span className="bg-gradient-to-r from-[#2443ab] to-[#40159e] bg-clip-text text-transparent font-black">That’s not a trade-off we’re willing to make anymore.</span>
                  </p>
                  <div className="w-full md:w-[380px] shrink-0">
                    <img 
                      src="/agency_specialization.png" 
                      alt="Agency Specialization" 
                      className="w-full max-w-[380px] mx-auto rounded-2xl shadow-md border border-slate-200/60 bg-white object-cover" 
                    />
                  </div>
                </div>
              </div>
            ) : (
              post.content.map((para, idx) => (
                <p 
                  key={idx} 
                  className={idx === 0 
                    ? "text-lg sm:text-xl md:text-2xl text-slate-700 font-bold leading-relaxed border-l-2 border-[#2443ab]/40 pl-4 py-1 mb-6" 
                    : "text-base sm:text-lg md:text-xl text-slate-500 font-semibold leading-relaxed"
                  }
                >
                  {para}
                </p>
              ))
            )}

            {/* Custom styled sections for details if present */}
            {post.sections && post.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="text-2xl sm:text-3xl font-black tracking-wide flex items-center gap-2">
                  <span className="text-[#2443ab] font-bold">→</span>
                  <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">
                    {sec.heading}
                  </span>
                </h2>
                {sec.heading.includes("What specialization actually buys you") ? (
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <p className="text-base sm:text-lg md:text-xl text-slate-550 font-semibold leading-relaxed flex-1">
                      {sec.text}
                    </p>
                    <div className="w-full md:w-[380px] shrink-0">
                      <img 
                        src="/ecommerce_focus.png" 
                        alt="Ecommerce Specialization Focus" 
                        className="w-full max-w-[380px] mx-auto rounded-2xl shadow-md border border-slate-200/60 object-cover" 
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-base sm:text-lg md:text-xl text-slate-550 font-semibold leading-relaxed">
                    {sec.text}
                  </p>
                )}
              </div>
            ))}

            {/* Service Pillars Section */}
            {post.pillars && post.pillars.length > 0 && (
              <div className="mt-16 space-y-8">
                <div className="space-y-2 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0d1b3e] flex items-center justify-center md:justify-start gap-2">
                    <span className="text-[#2443ab] font-bold">→</span>
                    Service Pillars & Deliverables
                  </h2>
                  <p className="text-slate-400 font-semibold text-xs sm:text-sm tracking-wide">
                    End-to-end solutions to build, grow and scale your brand.
                  </p>
                </div>

                {/* 2-Column Row for Pillars 1 & 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {post.pillars.slice(0, 2).map((pillar, idx) => {
                    const config = pillarConfigs[idx];
                    const PillarIcon = config.icon;
                    return (
                      <div 
                        key={idx} 
                        className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.015)] relative overflow-hidden group hover:border-[#2443ab]/20 hover:-translate-y-1 transition-all duration-300 min-h-[220px]"
                      >
                        {/* Faint Gradient Watermark */}
                        <div className="absolute right-6 bottom-4 text-4xl sm:text-5xl font-black uppercase tracking-wider bg-gradient-to-br from-[#0a8bc7]/10 to-[#40159e]/10 bg-clip-text text-transparent select-none pointer-events-none z-0 font-sans group-hover:from-[#0a8bc7]/18 group-hover:to-[#40159e]/18 transition-all duration-300">
                          {config.watermark}
                        </div>

                        {/* Short bottom accent bar at bottom-left */}
                        <div className={`absolute bottom-0 left-0 w-24 h-1 rounded-r-full ${config.accentBar}`} />
                        
                        <div className="relative z-10 space-y-4">
                          <div className="flex items-center gap-4">
                            {/* Boxed Icon */}
                            <div className={`w-12 h-12 rounded-2xl ${config.bg} flex items-center justify-center ${config.iconColor} shadow-md shrink-0`}>
                              <PillarIcon className="w-6 h-6 stroke-[2.5]" />
                            </div>
                            
                            {/* Number Pill & Title */}
                            <div className="flex items-center gap-2.5">
                              <span className={`px-2 py-0.5 rounded-md text-xs font-black uppercase tracking-wider ${config.pillBg}`}>
                                0{idx + 1}
                              </span>
                              <h3 className="text-lg font-black text-[#0d1b3e]">
                                {pillar.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-sm text-slate-500 font-semibold leading-relaxed">
                            {pillar.deliverables}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 3-Column Row for Pillars 3, 4, & 5 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-6">
                  {post.pillars.slice(2, 5).map((pillar, idx) => {
                    const realIdx = idx + 2;
                    const config = pillarConfigs[realIdx];
                    const PillarIcon = config.icon;
                    return (
                      <div 
                        key={realIdx} 
                        className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.015)] relative overflow-hidden group hover:border-[#2443ab]/20 hover:-translate-y-1 transition-all duration-300 min-h-[220px]"
                      >
                        {/* Faint Gradient Watermark */}
                        <div className="absolute right-6 bottom-4 text-2xl sm:text-3xl font-black uppercase tracking-wider bg-gradient-to-br from-[#0a8bc7]/10 to-[#40159e]/10 bg-clip-text text-transparent select-none pointer-events-none z-0 font-sans group-hover:from-[#0a8bc7]/18 group-hover:to-[#40159e]/18 transition-all duration-300">
                          {config.watermark}
                        </div>

                        {/* Short bottom accent bar */}
                        <div className={`absolute bottom-0 left-0 w-24 h-1 rounded-r-full ${config.accentBar}`} />
                        
                        <div className="relative z-10 space-y-4">
                          <div className="flex items-center gap-4">
                            {/* Boxed Icon */}
                            <div className={`w-12 h-12 rounded-2xl ${config.bg} flex items-center justify-center ${config.iconColor} shadow-md shrink-0`}>
                              <PillarIcon className="w-6 h-6 stroke-[2.5]" />
                            </div>
                            
                            {/* Number Pill & Title */}
                            <div className="flex items-center gap-2.5">
                              <span className={`px-2 py-0.5 rounded-md text-xs font-black uppercase tracking-wider ${config.pillBg}`}>
                                0{realIdx + 1}
                              </span>
                              <h3 className="text-base font-black text-[#0d1b3e] leading-tight">
                                {pillar.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">
                            {pillar.deliverables}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* 1-Column Centered Row for Pillar 6 */}
                {post.pillars[5] && (() => {
                  const config = pillarConfigs[5];
                  const PillarIcon = config.icon;
                  return (
                    <div className="w-full mt-6">
                      <div 
                        className="bg-white border border-slate-100 p-6 sm:p-8 rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.015)] relative overflow-hidden group hover:border-[#2443ab]/20 hover:-translate-y-1 transition-all duration-300"
                      >
                        {/* Faint Gradient Watermark */}
                        <div className="absolute right-6 bottom-4 text-4xl sm:text-5xl font-black uppercase tracking-wider bg-gradient-to-br from-[#0a8bc7]/10 to-[#40159e]/10 bg-clip-text text-transparent select-none pointer-events-none z-0 font-sans group-hover:from-[#0a8bc7]/18 group-hover:to-[#40159e]/18 transition-all duration-300">
                          {config.watermark}
                        </div>

                        {/* Short bottom accent bar */}
                        <div className={`absolute bottom-0 left-0 w-24 h-1 rounded-r-full ${config.accentBar}`} />
                        
                        <div className="relative z-10 space-y-4">
                          <div className="flex items-center gap-4">
                            {/* Boxed Icon */}
                            <div className={`w-12 h-12 rounded-2xl ${config.bg} flex items-center justify-center ${config.iconColor} shadow-md shrink-0`}>
                              <PillarIcon className="w-6 h-6 stroke-[2.5]" />
                            </div>
                            
                            {/* Number Pill & Title */}
                            <div className="flex items-center gap-2.5">
                              <span className={`px-2 py-0.5 rounded-md text-xs font-black uppercase tracking-wider ${config.pillBg}`}>
                                06
                              </span>
                              <h3 className="text-lg font-black text-[#0d1b3e]">
                                {post.pillars[5].title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed">
                            {post.pillars[5].deliverables}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Key Results & Growth Metrics */}
            {post.metrics && post.metrics.length > 0 && (
              <div className="mt-16 space-y-8">
                <div className="space-y-2 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0d1b3e] flex items-center justify-center md:justify-start gap-2">
                    <span className="text-[#2443ab] font-bold">
                      <BarChart3 className="w-7 h-7" />
                    </span>
                    Key Results & Growth Metrics
                  </h2>
                  <p className="text-slate-400 font-semibold text-xs sm:text-sm tracking-wide">
                    Measurable impact that drives sustainable growth.
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 w-full">
                    {post.metrics.map((metric, idx) => {
                      const config = metricConfigs[idx] || metricConfigs[0];
                      const MetricIcon = config.icon;
                      return (
                        <div 
                          key={idx} 
                          className="p-6 sm:p-8 rounded-3xl border border-slate-100 bg-white hover:border-[#2443ab]/30 shadow-sm hover:shadow-md transition-all relative overflow-hidden group min-h-[180px]"
                        >
                          {/* Styled Faint Gradient Watermark */}
                          <div className="absolute right-6 bottom-4 text-3xl sm:text-4xl font-black uppercase tracking-wider bg-gradient-to-br from-[#0a8bc7]/8 to-[#40159e]/8 bg-clip-text text-transparent select-none pointer-events-none z-0 font-sans group-hover:from-[#0a8bc7]/15 group-hover:to-[#40159e]/15 transition-all duration-300">
                            {config.watermark}
                          </div>

                          {/* Short bottom accent bar */}
                          <div className={`absolute bottom-0 left-0 w-24 h-1 rounded-r-full ${config.accentBar}`} />

                          <div className="relative z-10 flex flex-col items-start gap-4">
                            <div className={`w-12 h-12 rounded-full ${config.iconBg} flex items-center justify-center ${config.color} shrink-0 shadow-inner`}>
                              <MetricIcon className="w-6 h-6 stroke-[2.5]" />
                            </div>
                            <div className="space-y-2">
                              <h3 className={`text-lg sm:text-xl font-black leading-snug ${config.textClass}`}>{metric.title}</h3>
                              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">{metric.desc}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full lg:w-[380px] shrink-0">
                    <img 
                      src="/cro_metrics.png" 
                      alt="CRO Metrics Dashboard" 
                      className="w-full max-w-[380px] mx-auto rounded-2xl shadow-md border border-slate-200/60 object-cover" 
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Major Growth & Brand Trust Metrics */}
            {post.results && post.results.length > 0 && (
              <div className="mt-16 space-y-8">
                <div className="space-y-2 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0d1b3e] flex items-center justify-center md:justify-start gap-2">
                    <ShieldCheck className="w-7 h-7 text-[#2443ab]" />
                    Sales Results & Brand Trust Outcomes
                  </h2>
                  <p className="text-slate-400 font-semibold text-xs sm:text-sm tracking-wide">
                    Building trust, increasing revenue, and driving long-term customer loyalty.
                  </p>
                </div>
                
                {/* 2x2 Grid + Centered bottom item layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {post.results.slice(0, 4).map((res, idx) => {
                    const config = resultConfigs[idx] || resultConfigs[0];
                    const ResultIcon = config.icon;
                    return (
                      <div 
                        key={idx} 
                        className={`p-6 sm:p-8 rounded-3xl border border-slate-100 bg-white flex items-center gap-5 hover:border-[#2443ab]/20 shadow-sm hover:shadow-md transition-all relative overflow-hidden group min-h-[140px] ${config.border}`}
                      >
                        {/* Faint Gradient Watermark */}
                        <div className="absolute right-6 bottom-4 text-3xl sm:text-4xl font-black uppercase tracking-wider bg-gradient-to-br from-[#0a8bc7]/8 to-[#40159e]/8 bg-clip-text text-transparent select-none pointer-events-none z-0 font-sans group-hover:from-[#0a8bc7]/15 group-hover:to-[#40159e]/15 transition-all duration-300">
                          {config.watermark}
                        </div>

                        <div className={`w-12 h-12 rounded-full ${config.iconBg} flex items-center justify-center ${config.color} shrink-0 z-10 shadow-sm`}>
                          <ResultIcon className="w-5 h-5 stroke-[2.5]" />
                        </div>

                        <div className="relative z-10 space-y-1">
                          <div className={`text-[10px] font-black uppercase tracking-wider ${config.tagColor}`}>
                            Result Stage {idx + 1}
                          </div>
                          <h3 className="text-lg font-black text-[#0d1b3e] leading-snug">{res.title}</h3>
                          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">{res.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Star review centered block */}
                {post.results[4] && (() => {
                  const config = resultConfigs[4];
                  const ResultIcon = config.icon;
                  return (
                    <div className="w-full mt-6">
                      <div 
                        className={`p-6 sm:p-8 rounded-3xl border border-slate-100 bg-white flex items-center gap-5 hover:border-[#2443ab]/20 shadow-sm hover:shadow-md transition-all relative overflow-hidden group min-h-[140px] ${config.border}`}
                      >
                        <div className="absolute right-6 bottom-4 text-3xl sm:text-4xl font-black uppercase tracking-wider bg-gradient-to-br from-[#0a8bc7]/8 to-[#40159e]/8 bg-clip-text text-transparent select-none pointer-events-none z-0 font-sans group-hover:from-[#0a8bc7]/15 group-hover:to-[#40159e]/15 transition-all duration-300">
                          {config.watermark}
                        </div>

                        <div className={`w-12 h-12 rounded-full ${config.iconBg} flex items-center justify-center ${config.color} shrink-0 z-10 shadow-sm`}>
                          <ResultIcon className="w-5 h-5 stroke-[2.5]" />
                        </div>

                        <div className="relative z-10 space-y-1">
                          <div className={`text-[10px] font-black uppercase tracking-wider ${config.tagColor}`}>
                            Result Stage 5
                          </div>
                          <h3 className="text-lg font-black text-[#0d1b3e] leading-snug">{post.results[4].title}</h3>
                          <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed">{post.results[4].desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </motion.article>

          {/* CTA Box */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
              <Sparkles className="w-8 h-8 text-[#2443ab] mx-auto animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-wide">
                Have questions about our engineering standards or strategy?
              </h3>
              <p className="text-sm text-slate-500 font-semibold max-w-xl mx-auto tracking-wide">
                Directly consult with our founders to review how we can audit or rebuild your technology architecture.
              </p>
              <div className="pt-2">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-4 text-xs font-black text-white uppercase tracking-[0.2em] shadow-lg hover:opacity-95 transition-all duration-300"
                >
                  <span>Ask a Question</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
