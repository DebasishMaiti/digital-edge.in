"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Reset scroll position on page transition
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  // 2. Manage floating button visibility and track progress on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circular progress math
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.3, y: 40, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.3, y: 40, rotate: 180 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          whileHover={{ 
            scale: 1.12,
            boxShadow: "0 0 25px rgba(36, 67, 171, 0.55)",
          }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#0d1b3e]/85 border border-slate-700/30 text-white shadow-2xl backdrop-blur-md flex items-center justify-center group focus:outline-none cursor-pointer"
          aria-label="Scroll to top"
        >
          {/* Circular progress SVG */}
          <svg className="absolute -top-px -left-px w-12 h-12 -rotate-90 pointer-events-none" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-slate-700/20 fill-none"
              strokeWidth="2.5"
            />
            <motion.circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-white fill-none"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ ease: "easeOut", duration: 0.1 }}
              strokeLinecap="round"
            />
          </svg>

          {/* Up arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
