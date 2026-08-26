import Link from "next/link";
import Image from "next/image";
 
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-[#0c89c7] via-[#2450b3] to-[#3d199f] border-t border-white/10 text-white/80 pt-16 pb-8 relative overflow-hidden">

      {/* Subtle background glow overlays for a premium modern feel */}
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-20 -right-16 w-56 h-56 bg-purple-500/25 rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="mx-auto max-w-[1700px] px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Modern Dark CTA Section */}
        <div className="w-full rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-md p-6 md:py-10 md:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none" />
          <div className="flex flex-col max-w-2xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-widest text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 uppercase mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Ready to scale?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Let's Build Your Next <span className="bg-gradient-to-r from-[#22d3ee] via-[#60a5fa] to-[#c084fc] bg-clip-text text-transparent">Growth Story</span>
            </h2>
            <p className="text-slate-200 text-sm font-semibold mt-3 max-w-lg">
              Get in touch today to schedule your free, comprehensive 30-minute ecommerce audit. No generic slide decks, just real opportunities.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-black text-slate-900 uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <span>Book Free Strategy Call</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Footer Links & Info Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 pb-5 border-b border-white/10">

          {/* Column 1: Brand Intro */}
          <div className="flex flex-col items-start gap-5 text-left">
            <Link href="/" className="flex items-center">
              <Image
                src="/DE360-LOGO.png"
                alt="DE360 Logo"
                width={150}
                height={42}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/70 max-w-[320px]">
              Full-Stack Digital Growth & Engineering Agency. We build high-converting storefronts, launch native apps, and scale brand acquisition systems.
            </p>

            {/* Social Icons */}
            <div>
              <span className="text-sm font-black text-white tracking-tight uppercase">Socials</span>
              <div className="flex items-center gap-3 pt-4">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/digitaledge360", icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl border border-white/15 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 shadow-sm transition-all duration-300 hover:scale-105"
                    aria-label={social.label}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="flex flex-col gap-5 text-left">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Solutions
            </h3>
            <ul className="flex flex-col gap-3.5 text-xs font-semibold text-white/70">
              {[
                { label: "Web Development", href: "/web-development" },
                { label: "App Development", href: "/app-development" },
                { label: "WooCommerce Builds", href: "/woocommerce" },
                { label: "Performance Marketing", href: "/performance-marketing" },
                { label: "SEO & Content Strategy", href: "/seo-smm" },
                { label: "Photography & Videography", href: "/photography-videography" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="flex flex-col gap-5 text-left">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">
              Contact Coordinates
            </h3>
            <ul className="flex flex-col gap-5 text-xs text-white/70 font-semibold">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contactus@digitaledge360.in" className="hover:text-white transition-colors break-all">
                  contactus@digitaledge360.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.122-4.1-6.924-6.924l1.293-.97a1.248 1.248 0 0 0 .417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+918961973950" className="hover:text-white transition-colors">
                    +91 98300 24746
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div className="flex flex-col gap-3.5 leading-normal text-white/70">
                  <div>
                    <span className="block font-black text-white/90 text-[10px] uppercase tracking-wider mb-1">India Office</span>
                    9B Everest House, 9th Floor, Parkstreet Area, Kolkata-700071
                  </div>
                  <div>
                    <span className="block font-black text-white/90 text-[10px] uppercase tracking-wider mb-1">USA Office</span>
                    100 Church Street, Manhattan, New York City, 100071
                  </div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-semibold">
          <div>
            &copy; {currentYear} Digital Edge 360. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
