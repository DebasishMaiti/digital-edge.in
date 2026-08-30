"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, BookOpen, User, Sparkles } from "lucide-react";

interface BlogPostContent {
  heading: string;
  text: string;
}

interface BlogPost {
  title: string;
  tag: string;
  readTime: string;
  date: string;
  author: string;
  desc: string;
  content: BlogPostContent[];
}

interface BlogDetailClientProps {
  id: string;
  post: BlogPost;
}

const otherPosts = [
  {
    id: "how-to-know-whether-service-should-be-seo-aeo-geo",
    title: "How Do I Know Whether a Service Should Be SEO, AEO, or GEO?",
    image: "/logs/ecommerce_seo_aeo_geo.png",
  },
  {
    id: "ecommerce-growth-roadmap-launch-to-market-leader",
    title: "The Ecommerce Growth Roadmap: How a Store Goes From Launch to Market Leader",
    image: "/logs/ecommerce_growth_roadmap.png",
  },
  {
    id: "boosting-brand-credibility-trust-through-seo",
    title: "Boosting Brand Credibility and Trust Through SEO: Why It’s Worth the Investment",
    image: "/logs/ecommerce_growth_roadmap.jpg",
  },
  {
    id: "mobile-app-effective-for-small-businesses",
    title: "Mobile App: How effective is it for Small Businesses?",
    image: "/logs/mobileapp.jpg",
  },
  {
    id: "choosing-digital-marketing-agency-12-red-flags",
    title: "Choosing a Digital Marketing Agency: 12 Red Flags to Avoid",
    image: "/logs/digital-marketing.jpg",
  }
];

export default function BlogDetailClient({ id, post }: BlogDetailClientProps) {
  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(36, 67, 171, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(36, 67, 171, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '56px 56px',
    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  };

  return (
    <>
      <link rel="canonical" href={`https://digitaledge360.in/insights/blogs/${id}/`} />
      <div className="w-full bg-[#f8fafc] bg-gradient-to-tr from-[#0a8bc7]/16 via-white to-[#40159e]/16 text-[#2d3748] min-h-screen pb-24 relative overflow-x-clip font-sans">
        
        {/* Soft Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={gridBackgroundStyle} />
        
        {/* Soft Light Colored Glow Spheres - Spread in wider area */}
        <div className="absolute top-[5%] left-[-20%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.18)_0%,transparent_70%)] pointer-events-none blur-[120px]" />
        <div className="absolute top-[35%] right-[-20%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.18)_0%,transparent_70%)] pointer-events-none blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-15%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(64,21,158,0.12)_0%,transparent_70%)] pointer-events-none blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1150px] px-6 sm:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[180px] pb-16">
          {/* Breadcrumb / Back Link */}
          <Link 
            href="/insights/blogs" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#2443ab] uppercase tracking-[0.2em] mb-8 hover:text-[#40159e] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all articles</span>
          </Link>

          {/* Article Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-semibold tracking-wider">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2443ab] font-black uppercase tracking-[0.2em] text-[10px] border border-blue-100">
                {post.tag}
              </span>
              <span className="flex items-center gap-1 tracking-wide">
                <Clock className="w-3.5 h-3.5 text-[#2443ab]" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 tracking-wide">
                <Calendar className="w-3.5 h-3.5 text-[#2443ab]" />
                {post.date}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d1b3e] tracking-wide leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 pt-2 pb-6 border-b border-slate-200/80">
              <div className="w-10 h-10 rounded-full bg-[#2443ab]/10 flex items-center justify-center text-[#2443ab] font-bold">
                <User className="w-5 h-5" />
              </div>
              <div className="tracking-wide">
                <p className="text-xs font-black text-[#0d1b3e] tracking-wide">{post.author}</p>
                <p className="text-[10px] text-slate-405 font-semibold uppercase tracking-wider mt-0.5">Industry Expert, Digital Edge 360°</p>
              </div>
            </div>

            {/* Light Brand-Aligned Blog Header Banners */}
            {id === "how-to-know-whether-service-should-be-seo-aeo-geo" && (
              <div className="relative w-full h-[350px] sm:h-[650px] md:h-[750px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                <Image
                  src="/logs/ecommerce_seo_aeo_geo.png"
                  alt="E-commerce SEO, AEO, and GEO search strategy illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            {id === "ecommerce-growth-roadmap-launch-to-market-leader" && (
              <div className="relative w-full h-[350px] sm:h-[650px] md:h-[750px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                <Image
                  src="/logs/ecommerce_growth_roadmap.png"
                  alt="E-commerce growth roadmap strategy illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            {id === "boosting-brand-credibility-trust-through-seo" && (
              <div className="relative w-full h-[350px] sm:h-[650px] md:h-[750px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                <Image
                  src="/logs/ecommerce_growth_roadmap.jpg"
                  alt="Boosting Brand Credibility and Trust Through SEO illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            {id === "mobile-app-effective-for-small-businesses" && (
              <div className="relative w-full h-[350px] sm:h-[650px] md:h-[750px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                <Image
                  src="/logs/mobileapp.jpg"
                  alt="Mobile App: How effective is it for Small Businesses? illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            {id === "choosing-digital-marketing-agency-12-red-flags" && (
              <div className="relative w-full h-[350px] sm:h-[650px] md:h-[750px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                <Image
                  src="/logs/digital-marketing.jpg"
                  alt="Choosing a Digital Marketing Agency: 12 Red Flags to Avoid illustration"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </motion.div>

          {/* Main Grid: Article vs. Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
            
            {/* Left Column: Article Content */}
            <div className="lg:col-span-7">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12 tracking-wide font-sans text-left"
              >
                <p className="text-[#0d1b3e] font-extrabold mb-8 text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-tight border-b border-slate-100 pb-6">
                  {post.desc}
                </p>

                {post.content.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide flex items-center gap-2">
                      <span className="text-[#2443ab] font-bold">→</span>
                      <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">
                        {sec.heading}
                      </span>
                    </h2>
                    <p className={idx === 0 
                      ? "text-lg sm:text-xl md:text-2xl text-slate-700 font-bold leading-relaxed border-l-2 border-[#2443ab]/40 pl-4 py-1 mb-6" 
                      : "text-base sm:text-lg md:text-xl text-slate-505 font-semibold leading-relaxed"
                    }>
                      {sec.text}
                    </p>
                  </div>
                ))}
              </motion.article>
            </div>

            {/* Right Column: "More Posts" Sidebar */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start space-y-6 text-left border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-8">
              <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight border-b border-slate-100 pb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#2443ab]" />
                More Posts
              </h3>
              <div className="space-y-6">
                {otherPosts.filter(p => p.id !== id).map((otherPost) => (
                  <Link 
                    key={otherPost.id} 
                    href={`/insights/blogs/${otherPost.id}`}
                    className="flex gap-5 items-center group/sidebar hover:opacity-90 transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-28 h-20 sm:w-36 sm:h-24 rounded-xl overflow-hidden bg-slate-50 border border-slate-100/85 flex-shrink-0">
                      <Image 
                        src={otherPost.image} 
                        alt={otherPost.title} 
                        fill
                        className="object-cover transition-transform duration-500 group-hover/sidebar:scale-105"
                      />
                    </div>
                    {/* Title */}
                    <h4 className="text-sm sm:text-base font-extrabold text-[#0d1b3e] leading-snug group-hover/sidebar:text-[#2443ab] transition-colors duration-200 line-clamp-3">
                      {otherPost.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Article Footer / CTA */}
          <div className="mt-16 pt-12 border-t border-slate-200/80">
            <div className="bg-white border border-slate-100 rounded-3xl p-8 text-center space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
              <Sparkles className="w-8 h-8 text-[#2443ab] mx-auto animate-pulse" />
              <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-wide">
                Want to implement these strategies for your business?
              </h3>
              <p className="text-sm text-slate-550 font-semibold max-w-xl mx-auto tracking-wide">
                Get in touch with our specialists to review your digital marketing performance or app stack capabilities today.
              </p>
              <div className="pt-2">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-8 py-4 text-xs font-black text-white uppercase tracking-[0.2em] shadow-lg hover:opacity-95 transition-all duration-300"
                >
                  <span>Schedule a consultation</span>
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
