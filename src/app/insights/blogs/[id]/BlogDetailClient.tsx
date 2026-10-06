"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, BookOpen, User, Sparkles, Share2, Check } from "lucide-react";

interface BlogPostContent {
  heading?: string;
  text?: string;
}

interface BlogPost {
  title: string;
  slug?: string;
  tag?: string;
  readTime?: string;
  date?: string;
  publishDate?: string;
  author?: string;
  desc?: string;
  metaTitle?: string;
  metaDescription?: string;
  featuredImage?: string;
  content: BlogPostContent[] | string[] | string;
}

interface BlogDetailClientProps {
  id: string;
  post: BlogPost;
}

const otherPosts = [
  {
    id: "how-to-know-whether-service-should-be-seo-aeo-geo",
    title: "How Do I Know Whether a Service Should Be SEO, AEO, or GEO?",
    image: "https://ik.imagekit.io/digitaledge360/digitaledge-in/logs/ecommerce_seo_aeo_geo.png",
  },
  {
    id: "ecommerce-growth-roadmap-launch-to-market-leader",
    title: "The Ecommerce Growth Roadmap: How a Store Goes From Launch to Market Leader",
    image: "https://ik.imagekit.io/digitaledge360/digitaledge-in/logs/ecommerce_growth_roadmap.png",
  },
  {
    id: "boosting-brand-credibility-trust-through-seo",
    title: "Boosting Brand Credibility and Trust Through SEO: Why It’s Worth the Investment",
    image: "https://ik.imagekit.io/digitaledge360/digitaledge-in/logs/ecommerce_growth_roadmap.jpg",
  },
  {
    id: "mobile-app-effective-for-small-businesses",
    title: "Mobile App: How effective is it for Small Businesses?",
    image: "https://ik.imagekit.io/digitaledge360/digitaledge-in/logs/mobileapp.jpg",
  },
  {
    id: "choosing-digital-marketing-agency-12-red-flags",
    title: "Choosing a Digital Marketing Agency: 12 Red Flags to Avoid",
    image: "https://ik.imagekit.io/digitaledge360/digitaledge-in/logs/digital-marketing.jpg",
  }
];

export default function BlogDetailClient({ id, post }: BlogDetailClientProps) {
  const [copied, setCopied] = useState(false);
  const [recentBlogs, setRecentBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const res = await fetch("/api/blogs?status=Published");
        const data = await res.json();
        if (data.success && Array.isArray(data.blogs) && data.blogs.length > 0) {
          setRecentBlogs(data.blogs);
        }
      } catch (err) {
        console.error("Failed to load sidebar blogs:", err);
      }
    };
    fetchRecentBlogs();
  }, []);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(36, 67, 171, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(36, 67, 171, 0.05) 1px, transparent 1px)
    `,
    backgroundSize: '56px 56px',
    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
  };

  const canonicalSlug = post.slug || decodeURIComponent(id);

  return (
    <>
      <link rel="canonical" href={`https://digitaledge360.in/insights/blogs/${canonicalSlug}/`} />
      <div className="w-full bg-[#f8fafc] bg-gradient-to-tr from-[#0a8bc7]/16 via-white to-[#40159e]/16 text-[#2d3748] min-h-screen pb-24 relative overflow-x-clip font-sans">
        
        {/* Soft Background Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none" style={gridBackgroundStyle} />
        
        {/* Soft Light Colored Glow Spheres - Spread in wider area */}
        <div className="absolute top-[5%] left-[-20%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(36,67,171,0.18)_0%,transparent_70%)] pointer-events-none blur-[120px]" />
        <div className="absolute top-[35%] right-[-20%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle_at_center,rgba(10,139,199,0.18)_0%,transparent_70%)] pointer-events-none blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-15%] w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle_at_center,rgba(64,21,158,0.12)_0%,transparent_70%)] pointer-events-none blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-[180px] pb-16">
          {/* Breadcrumb / Back Link & Share */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              href="/insights/blogs" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#2443ab] uppercase tracking-[0.2em] hover:text-[#40159e] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all articles</span>
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-xs hover:shadow-md text-xs font-bold text-slate-600 hover:text-[#2443ab] transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
          </div>

          {/* Article Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-semibold tracking-wider">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2443ab] font-black uppercase tracking-[0.2em] text-[10px] border border-blue-100">
                {post.tag || "Blog"}
              </span>
              <span className="flex items-center gap-1 tracking-wide">
                <Clock className="w-3.5 h-3.5 text-[#2443ab]" />
                {post.readTime || "5 min read"}
              </span>
              <span className="flex items-center gap-1 tracking-wide">
                <Calendar className="w-3.5 h-3.5 text-[#2443ab]" />
                {post.date || post.publishDate || "Digital Edge"}
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
                <p className="text-xs font-black text-[#0d1b3e] tracking-wide">{post.author || "Digital Edge Team"}</p>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">Industry Expert, Digital Edge 360°</p>
              </div>
            </div>

            {/* Featured Image - Dynamic or Static */}
            {post.featuredImage ? (
              <div className="relative max-w-[960px] mx-auto w-full aspect-[16/9] max-h-[540px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <>
                {id === "how-to-know-whether-service-should-be-seo-aeo-geo" && (
                  <div className="relative max-w-[960px] mx-auto w-full aspect-[4/3] max-h-[720px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                    <Image
                      src="https://ik.imagekit.io/digitaledge360/digitaledge-in/logs/ecommerce_seo_aeo_geo.png"
                      alt="E-commerce SEO, AEO, and GEO search strategy illustration"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                {id === "ecommerce-growth-roadmap-launch-to-market-leader" && (
                  <div className="relative max-w-[960px] mx-auto w-full aspect-[4/3] max-h-[720px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                    <Image
                      src="https://ik.imagekit.io/digitaledge360/digitaledge-in/logs/ecommerce_growth_roadmap.png"
                      alt="E-commerce growth roadmap strategy illustration"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                {id === "boosting-brand-credibility-trust-through-seo" && (
                  <div className="relative max-w-[960px] mx-auto w-full aspect-[4/3] max-h-[720px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                    <Image
                      src="https://ik.imagekit.io/digitaledge360/digitaledge-in/logs/ecommerce_growth_roadmap.jpg"
                      alt="Boosting Brand Credibility and Trust Through SEO illustration"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                {id === "mobile-app-effective-for-small-businesses" && (
                  <div className="relative max-w-[960px] mx-auto w-full aspect-[4/3] max-h-[720px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                    <Image
                      src="https://ik.imagekit.io/digitaledge360/digitaledge-in/logs/mobileapp.jpg"
                      alt="Mobile App: How effective is it for Small Businesses? illustration"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
                {id === "choosing-digital-marketing-agency-12-red-flags" && (
                  <div className="relative max-w-[960px] mx-auto w-full aspect-[4/3] max-h-[720px] overflow-hidden rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)] my-6">
                    <Image
                      src="https://ik.imagekit.io/digitaledge360/digitaledge-in/logs/digital-marketing.jpg"
                      alt="Choosing a Digital Marketing Agency: 12 Red Flags to Avoid illustration"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                )}
              </>
            )}
          </motion.div>

          {/* Main Grid: Article vs. Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
            
            {/* Left Column: Article Content */}
            <div className="lg:col-span-8">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12 tracking-wide font-sans text-left"
              >
                {post.desc && (
                  <p className="text-[#0d1b3e] font-extrabold mb-8 text-xl sm:text-2xl md:text-3xl leading-relaxed tracking-tight border-b border-slate-100 pb-6">
                    {post.desc}
                  </p>
                )}

                {/* Render Article Content: HTML String or Structured Sections */}
                {typeof post.content === "string" ? (
                  <div
                    className="blog-rich-text text-slate-700 font-normal leading-[1.8] text-base sm:text-lg space-y-6
                      [&_h1]:text-2xl [&_h1]:sm:text-3xl [&_h1]:font-black [&_h1]:text-[#0d1b3e] [&_h1]:mt-8 [&_h1]:mb-4 [&_h1]:tracking-tight
                      [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-extrabold [&_h2]:text-[#0d1b3e] [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:pt-4 [&_h2]:border-t [&_h2]:border-slate-100 [&_h2]:tracking-tight
                      [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-bold [&_h3]:text-[#0d1b3e] [&_h3]:mt-6 [&_h3]:mb-3
                      [&_p]:mb-5 [&_p]:text-slate-600 [&_p]:leading-relaxed
                      [&_strong]:font-bold [&_strong]:text-[#0d1b3e]
                      [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_ul]:text-slate-600
                      [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2 [&_ol]:text-slate-600
                      [&_li]:pl-1
                      [&_a]:text-[#2443ab] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-[#2443ab]/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-[#2443ab]
                      [&_blockquote]:border-l-4 [&_blockquote]:border-[#2443ab] [&_blockquote]:bg-slate-50 [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:rounded-r-2xl [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:text-slate-700
                      [&_img]:rounded-2xl [&_img]:shadow-md [&_img]:my-6 [&_img]:w-full [&_img]:object-cover"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                ) : Array.isArray(post.content) ? (
                  post.content.map((sec: any, idx: number) => {
                    if (typeof sec === "string") {
                      return (
                        <p 
                          key={idx} 
                          className={idx === 0 
                            ? "text-lg sm:text-xl md:text-2xl text-slate-700 font-bold leading-relaxed border-l-2 border-[#2443ab]/40 pl-4 py-1 mb-6" 
                            : "text-base sm:text-lg md:text-xl text-slate-600 font-semibold leading-relaxed"
                          }
                        >
                          {sec}
                        </p>
                      );
                    }
                    return (
                      <div key={idx} className="space-y-4">
                        {sec.heading && (
                          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide flex items-center gap-2">
                            <span className="text-[#2443ab] font-bold">→</span>
                            <span className="bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] bg-clip-text text-transparent">
                              {sec.heading}
                            </span>
                          </h2>
                        )}
                        {sec.text && (
                          <p className={idx === 0 
                            ? "text-lg sm:text-xl md:text-2xl text-slate-700 font-bold leading-relaxed border-l-2 border-[#2443ab]/40 pl-4 py-1 mb-6" 
                            : "text-base sm:text-lg md:text-xl text-slate-600 font-semibold leading-relaxed"
                          }>
                            {sec.text}
                          </p>
                        )}
                      </div>
                    );
                  })
                ) : null}
              </motion.article>
            </div>

            {/* Right Column: "More Posts" Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6 text-left border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-8">
              <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight border-b border-slate-100 pb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#2443ab]" />
                More Posts
              </h3>
              <div className="space-y-6">
                {recentBlogs.length > 0 ? (
                  recentBlogs
                    .filter((p) => p.slug !== id && p._id !== id)
                    .slice(0, 5)
                    .map((otherPost) => (
                      <Link 
                        key={otherPost._id || otherPost.slug} 
                        href={`/insights/blogs/${otherPost.slug || otherPost._id}`}
                        className="flex gap-4 items-center group/sidebar hover:opacity-90 transition-all duration-300"
                      >
                        {otherPost.featuredImage ? (
                          <div className="relative w-24 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden bg-slate-50 border border-slate-100/85 flex-shrink-0">
                            <img 
                              src={otherPost.featuredImage} 
                              alt={otherPost.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/sidebar:scale-105"
                            />
                          </div>
                        ) : null}
                        <h4 className="text-sm font-extrabold text-[#0d1b3e] leading-snug group-hover/sidebar:text-[#2443ab] transition-colors duration-200 line-clamp-3">
                          {otherPost.title}
                        </h4>
                      </Link>
                    ))
                ) : (
                  otherPosts.filter(p => p.id !== id).map((otherPost) => (
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
                  ))
                )}
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
              <p className="text-sm text-slate-600 font-semibold max-w-xl mx-auto tracking-wide">
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
