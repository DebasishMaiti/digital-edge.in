"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const solutionLinks = [
  {
    name: "Web Development",
    href: "/web-development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    desc: "Custom websites & web apps",
  },

  {
    name: "WooCommerce",
    href: "/woocommerce",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
    desc: "Powerful eCommerce stores",
  },
  {
    name: "App Development",
    href: "/app-development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3m-3 3.75h3" />
      </svg>
    ),
    desc: "iOS & Android mobile apps",
  },
  {
    name: "Performance Marketing",
    href: "/performance-marketing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 1 8.835-2.535m0 0A23.74 23.74 0 0 1 18.795 3c1.167 0 2.31.084 3.43.247m-3.43-.247a24.003 24.003 0 0 1 4.615 12 24.003 24.003 0 0 1-4.615 12m-8.835-2.535a18.036 18.036 0 0 1-5.144 1.913m0 0A23.74 23.74 0 0 1 5.205 21c-1.167 0-2.31-.084-3.43-.247m3.43.247a24.003 24.003 0 0 1-4.615-12 24.003 24.003 0 0 1 4.615-12m8.835 2.535a18.036 18.036 0 0 1 5.144-1.913" />
      </svg>
    ),
    desc: "Targeted ads that convert",
  },
  {
    name: "SEO & SMM",
    href: "/seo-smm",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    desc: "Rank higher, go viral",
  },
  {
    name: "Marketplace Optimization",
    href: "/marketplace-optimization",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.016 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
    ),
    desc: "Dominate Amazon & beyond",
  },
  {
    name: "Creative Studio",
    href: "/creative-studio",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
    desc: "Design, video & photo editing",
  },
];

const insightLinks = [
  {
    name: "Founder's Insights",
    href: "/insights/founders-insights",
    desc: "Direct thoughts, reflections & strategy from our leadership",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
  {
    name: "Blogs",
    href: "/insights/blogs",
    desc: "Guides, news, & technical tips for modern businesses",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    name: "Case Studies",
    href: "/insights/case-studies",
    desc: "Real-world stories of how we scale brands & technology",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

export default function Header() {
  const pathname = usePathname();
  const normalizePath = (p: string) => p.replace(/\/$/, "") || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [isMobileInsightsOpen, setIsMobileInsightsOpen] = useState(false);

  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);



  const insightsDropdownRef = useRef<HTMLDivElement>(null);
  const insightsHoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions", hasDropdown: true },
    { name: "Insights", href: "/insights", hasInsightsDropdown: true },
    { name: "About", href: "/about" },
    { name: "FAQ's", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    let ticking = false;
    const threshold = 8;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY < 10) {
            setIsVisible(true);
          } else if (Math.abs(currentScrollY - lastScrollY.current) > threshold) {
            if (currentScrollY > lastScrollY.current) {
              setIsVisible(false);
              setIsSolutionsOpen(false);

              setIsInsightsOpen(false);
            } else {
              setIsVisible(true);
            }
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsSolutionsOpen(false);
      }

      if (insightsDropdownRef.current && !insightsDropdownRef.current.contains(e.target as Node)) {
        setIsInsightsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSolutionsMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setIsSolutionsOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setIsSolutionsOpen(false), 150);
  };



  const handleInsightsMouseEnter = () => {
    if (insightsHoverTimeout.current) clearTimeout(insightsHoverTimeout.current);
    setIsInsightsOpen(true);
  };

  const handleInsightsMouseLeave = () => {
    insightsHoverTimeout.current = setTimeout(() => setIsInsightsOpen(false), 150);
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full px-6 py-3 sm:py-3.5 lg:py-4 bg-transparent transition-all duration-300 ease-in-out ${isVisible || isMobileMenuOpen
        ? "translate-y-0 opacity-100"
        : "-translate-y-full opacity-0 pointer-events-none"
        }`}
    >
      <div className="relative mx-auto flex h-14 sm:h-16 lg:h-20 max-w-7xl lg:max-w-[90rem] items-center justify-between rounded-full border border-slate-200/50 bg-white/60 px-4 xl:px-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-lg">
        {/* Logo */}
        <div className="flex items-center pl-1 xl:pl-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/DE360-LOGO.png"
              alt="DE360 Logo"
              width={160}
              height={44}
              className="h-9 sm:h-10 lg:h-11 w-auto object-contain priority"
              priority
            />
          </Link>
        </div>

        {/* Center Capsule Navigation Links (Desktop) */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-2 rounded-full bg-slate-100/80 p-1.5 border border-slate-200/60 shadow-sm backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = normalizePath(pathname) === normalizePath(link.href) ||
              (link.hasDropdown && pathname.startsWith("/solutions")) ||
              (link.hasInsightsDropdown && pathname.startsWith("/insights"));



            if (link.hasInsightsDropdown) {
              return (
                <div
                  key={link.href}
                  ref={insightsDropdownRef}
                  className="relative"
                  onMouseEnter={handleInsightsMouseEnter}
                  onMouseLeave={handleInsightsMouseLeave}
                >
                  <button
                    onClick={() => setIsInsightsOpen((v) => !v)}
                    className={`flex items-center gap-1 xl:gap-1.5 rounded-full border px-3 py-2 xl:px-[18px] xl:py-2.5 text-xs xl:text-sm font-bold transition-all duration-200 ${isActive
                      ? "border-slate-200 bg-white text-[#2443ab] shadow-sm"
                      : "border-transparent text-slate-650 hover:bg-white/60 hover:text-[#2443ab]"
                      }`}
                    aria-expanded={isInsightsOpen}
                    aria-haspopup="true"
                    id="insights-menu-btn"
                  >
                    <span>{link.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-3 w-3 opacity-70 transition-transform duration-200 ${isInsightsOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Desktop Dropdown Panel for Insights */}
                  <div
                    className={`absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[340px] transition-all duration-200 origin-top ${isInsightsOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    onMouseEnter={handleInsightsMouseEnter}
                    onMouseLeave={handleInsightsMouseLeave}
                    role="menu"
                    aria-labelledby="insights-menu-btn"
                  >
                    {/* Arrow tip */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-slate-900 border-l border-t border-white/10 shadow-sm z-10" />

                    <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2 pb-3 border-b border-white/5">
                        Insights Hub
                      </p>
                      <div className="flex flex-col gap-1 pt-3">
                        {insightLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsInsightsOpen(false)}
                            role="menuitem"
                            className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-white/5"
                          >
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/90 transition-colors duration-150 group-hover:bg-[#ff5500] group-hover:text-white">
                              {item.icon}
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-white/90 group-hover:text-cyan-400 transition-colors">
                                {item.name}
                              </p>
                              <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (link.hasDropdown) {
              return (
                <div
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleSolutionsMouseEnter}
                  onMouseLeave={handleSolutionsMouseLeave}
                >
                  <button
                    onClick={() => setIsSolutionsOpen((v) => !v)}
                    className={`flex items-center gap-1 xl:gap-1.5 rounded-full border px-3 py-2 xl:px-[18px] xl:py-2.5 text-xs xl:text-sm font-bold transition-all duration-200 ${isActive
                      ? "border-slate-200 bg-white text-[#2443ab] shadow-sm"
                      : "border-transparent text-slate-650 hover:bg-white/60 hover:text-[#2443ab]"
                      }`}
                    aria-expanded={isSolutionsOpen}
                    aria-haspopup="true"
                    id="solutions-menu-btn"
                  >
                    <span>{link.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-3 w-3 opacity-70 transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Desktop Dropdown Panel */}
                  <div
                    className={`absolute top-[calc(100%+14px)] left-1/2 -translate-x-1/2 w-[520px] transition-all duration-200 origin-top ${isSolutionsOpen
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                      }`}
                    onMouseEnter={handleSolutionsMouseEnter}
                    onMouseLeave={handleSolutionsMouseLeave}
                    role="menu"
                    aria-labelledby="solutions-menu-btn"
                  >
                    {/* Arrow tip */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-slate-900 border-l border-t border-white/10 shadow-sm z-10" />

                    <div className="relative bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden p-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-2 pb-3 border-b border-white/5">
                        Our Services
                      </p>
                      <div className="grid grid-cols-2 gap-1 pt-3">
                        {solutionLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsSolutionsOpen(false)}
                            role="menuitem"
                            className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-white/5"
                          >
                            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/90 text-cyan-450 transition-colors duration-150 group-hover:bg-[#ff5500] group-hover:text-white">
                              {item.icon}
                            </span>
                            <div>
                              <p className="text-xs font-semibold text-white/90 group-hover:text-cyan-400 transition-colors">
                                {item.name}
                              </p>
                              <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1 xl:gap-1.5 rounded-full border px-3 py-2 xl:px-[18px] xl:py-2.5 text-xs xl:text-sm font-bold transition-all duration-200 ${isActive
                  ? "border-slate-200 bg-white text-[#2443ab] shadow-sm"
                  : "border-transparent text-slate-650 hover:bg-white/60 hover:text-[#2443ab]"
                  }`}
              >
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Outline CTA Button ("Hire Us" style) & Hamburger Toggle */}
        <div className="flex items-center gap-2 xl:gap-4">
          <Link
            href="/contact"
            className="hidden lg:flex rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-5 py-2.5 xl:px-6 xl:py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(36,67,171,0.25)] hover:shadow-[0_6px_20px_rgba(64,21,158,0.35)] transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
          >
            <span>Book Strategy Call</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex lg:hidden items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-slate-950/50 hover:bg-slate-900 text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 sm:top-24 left-4 right-4 z-40 bg-slate-950/95 backdrop-blur-lg rounded-3xl border border-white/10 p-6 shadow-2xl flex flex-col gap-2.5 text-center font-extrabold text-sm text-white">
          {navLinks.map((link) => {


            if (link.hasInsightsDropdown) {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setIsMobileInsightsOpen((v) => !v)}
                    className={`w-full flex items-center justify-between py-3.5 border-b border-white/5 text-sm font-extrabold transition-colors ${isMobileInsightsOpen ? "text-[#ff5500]" : "text-white/80"
                      }`}
                  >
                    <span className="flex-1 text-center">{link.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-4 w-4 text-white/40 transition-transform duration-200 ${isMobileInsightsOpen ? "rotate-180" : ""}`}
                    >
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {isMobileInsightsOpen && (
                    <div className="mt-2 mb-2 flex flex-col items-center gap-1.5 w-full">
                      {insightLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileInsightsOpen(false);
                          }}
                          className="flex items-center gap-2 rounded-xl bg-white/5 p-2.5 text-left hover:bg-white/10 transition-colors w-full"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#ff5500] text-white">
                            {item.icon}
                          </span>
                          <span className="text-[11px] font-semibold text-white/95 leading-tight">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (link.hasDropdown) {
              return (
                <div key={link.href}>
                  <button
                    onClick={() => setIsMobileSolutionsOpen((v) => !v)}
                    className={`w-full flex items-center justify-between py-3.5 border-b border-white/5 text-sm font-extrabold transition-colors ${isMobileSolutionsOpen ? "text-[#ff5500]" : "text-white/80"
                      }`}
                  >
                    <span className="flex-1 text-center">{link.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`h-4 w-4 text-white/40 transition-transform duration-200 ${isMobileSolutionsOpen ? "rotate-180" : ""}`}
                    >
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {isMobileSolutionsOpen && (
                    <div className="mt-2 mb-2 grid grid-cols-2 gap-2">
                      {solutionLinks.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileSolutionsOpen(false);
                          }}
                          className="flex items-center gap-2 rounded-xl bg-white/5 p-2.5 text-left hover:bg-white/10 transition-colors"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#ff5500] text-white">
                            {item.icon}
                          </span>
                          <span className="text-[11px] font-semibold text-white/95 leading-tight">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-3.5 hover:text-[#ff5500] transition-colors border-b border-white/5 last:border-0 ${normalizePath(pathname) === normalizePath(link.href) ? "text-[#ff5500]" : "text-white/80"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 rounded-full border border-white/20 hover:border-white/40 py-4 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 text-center flex items-center justify-center gap-2 group transition-all duration-300"
          >
            <span>Book a Strategy Call</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
        </div>
      )}
    </header>
  );
}