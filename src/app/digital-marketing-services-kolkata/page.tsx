"use client";

import { useState } from "react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import {
  MapPin,
  TrendingUp,
  Award,
  PhoneCall,
  Mail,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Search,
  Megaphone,
  Smartphone,
  ChevronDown,
  Layers,
  ShoppingBag,
  Camera,
  ExternalLink,
  ShieldCheck,
  Building2,
} from "lucide-react";

export default function DigitalMarketingServicesKolkata() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const services = [
    {
      icon: Search,
      title: "SEO Services in Kolkata",
      desc: "Search is where buyers with a clear need show up, so it is usually the slowest to start and the cheapest to keep running. We begin with a technical check of your site (speed, crawl errors, page structure), then work out which searches your customers really use and build or fix pages to match them. For businesses that serve Kolkata and nearby areas, we also set up and maintain your Google Business Profile, so you appear when people search locally.",
      accent: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: Megaphone,
      title: "Social Media Marketing in Kolkata",
      desc: "We plan the content, write the captions, design the creatives, and manage the community across Instagram, Facebook, and LinkedIn. The aim is not a busy feed. It is a feed that makes someone remember your name when they are ready to buy. For D2C and fashion brands, we also work with influencers and run paid social alongside organic posts.",
      accent: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing: Google Ads and Meta Ads",
      desc: "Paid ads should be judged on profit, not clicks. Before we spend your money, we look at your margins and your average order value, then build campaigns around what a customer is worth to you. Every account we manage is set up to track sales, so you can see which campaigns pay for themselves and which ones are quietly burning budget.",
      accent: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      icon: ShoppingBag,
      title: "Marketplace Optimization",
      desc: "If you sell on Amazon or other marketplaces, your listing is your shop window. We rework titles, images, descriptions, and keywords, and we help with advertising inside the marketplace so your products show up where shoppers are already searching.",
      accent: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: Smartphone,
      title: "Website, WooCommerce and App Development",
      desc: "Good marketing sends people to a website, and a slow or confusing website wastes that effort. Our developers build custom sites, WooCommerce and Shopify stores, and mobile apps, and the same team that builds them understands how they will be marketed. That means fewer surprises at launch and fewer fixes later.",
      accent: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      icon: Camera,
      title: "Photography, Videography and App Store Optimization",
      desc: "Weak product photos and poor video quietly lower conversion rates. We shoot and edit photos and video for websites, ads, and social channels so everything looks like it came from one brand. If you have a mobile app, we also optimize its App Store and Play Store listing to bring in more installs.",
      accent: "bg-sky-50 text-sky-600 border-sky-100",
    },
  ];

  const steps = [
    {
      step: "1",
      name: "Audit",
      desc: "We go through your whole path from first click to final sale: where traffic comes from, how fast your pages load, where visitors drop off, and where your ad budget actually goes. By the end, we know where money is leaking.",
    },
    {
      step: "2",
      name: "Strategy",
      desc: "We write a plan for your business, not a template we use for everyone. Your margins, customers, and goals shape which channels we pick and in what order.",
    },
    {
      step: "3",
      name: "Execution",
      desc: "Your website, ads, content, and search work are handled by our own team in-house. You deal with the same people from the first week, not a changing cast of freelancers.",
    },
    {
      step: "4",
      name: "Reporting",
      desc: "You get a weekly update with the numbers that matter: leads, sales, cost per customer, and what we plan to change next. If something is not working, we say so.",
    },
  ];

  const results = [
    {
      client: "TruBoy BBQ",
      metric: "+200%",
      label: "Average Order Value",
      desc: "TruBoy BBQ. The product was strong, but few people found the brand online, and customers ordered small amounts. We rebuilt their online presence and ran campaigns aimed at order value instead of raw traffic. Average order value went up by 200%.",
    },
    {
      client: "Nayantara",
      metric: "+305%",
      label: "First-Time Users",
      desc: "Nayantara. A fashion label in a crowded category, struggling to reach first-time buyers. We built a strategy around new-customer acquisition, and first-time users grew by 305%.",
    },
    {
      client: "Creative Ecotech",
      metric: "+90%",
      label: "Organic Traffic Growth",
      desc: "Creative Ecotech. A manufacturing business whose website was not bringing in useful B2B visitors. We built focused content pages with clear next steps, and organic traffic grew by 90%.",
    },
    {
      client: "Jet Choice",
      metric: "ROI",
      label: "Measurable Returns",
      desc: "Jet Choice. Their ad spend was not producing measurable returns. We rebuilt the Google and Meta account structure around ROI, and campaign performance improved noticeably.",
    },
  ];

  const whyChooseUs = [
    {
      title: "We are based in Kolkata",
      desc: "We are based in Kolkata. Our India office is at Park Street. You can walk in, meet the team, and talk face to face.",
    },
    {
      title: "One team for everything",
      desc: "One team for everything. Developers and marketers work together, so the website and the ads are built to support each other.",
    },
    {
      title: "We report on revenue",
      desc: "We report on revenue. Impressions and reach look nice in a deck, but they do not pay salaries. Our reports start from sales and work backwards.",
    },
    {
      title: "No lock-in",
      desc: "No lock-in. We would rather earn your business each month than hold you to a contract.",
    },
    {
      title: "Certified partners",
      desc: "Certified partners. We hold Google Partner, Meta Business Partner, and Shopify Plus partner status, and our systems are ISO 27001 certified.",
    },
  ];

  const faqs = [
    {
      q: "What does a digital marketing agency in Kolkata do?",
      a: "A digital marketing agency helps a business get found and chosen online. That usually means SEO, paid ads on Google and Meta, social media management, content, and a website that turns visitors into enquiries or orders. At Digital Edge 360, we also build the website and apps, so everything is handled by one team.",
    },
    {
      q: "How much do digital marketing services cost in Kolkata?",
      a: "Prices vary widely because needs vary. The cost depends on your starting point, the services you choose, and how competitive your market is. We give exact figures after a free audit, so you know what you need before you spend anything.",
    },
    {
      q: "How long does SEO take to show results?",
      a: "It depends on your niche and the current state of your site. Some of our clients saw movement within two months, and others needed closer to five. Most people start noticing real change from the third month. If you need sales sooner, running paid ads alongside SEO is the usual approach.",
    },
    {
      q: "Which service should a small business start with?",
      a: "It depends on how you sell. If customers search for what you offer, start with SEO and a solid Google Business Profile. If you need sales quickly, start with Google Ads or Meta Ads. If your website is slow or hard to use, fix that first; otherwise, every other rupee you spend is wasted.",
    },
    {
      q: "Do I have to sign a long contract?",
      a: "No. Most of our services run month to month. If it is not working for you, you can walk away.",
    },
    {
      q: "Can you work with my existing marketing team?",
      a: "Yes. Some clients bring us in to audit what their team is doing or to cover a channel they do not have in-house, especially when growth has stalled.",
    },
    {
      q: "Do you only work with Kolkata businesses?",
      a: "No. Our office is in Kolkata, but we work with brands across India and abroad, and we also have a New York office.",
    },
    {
      q: "What is included in the free growth audit?",
      a: "We review your website speed and checkout flow, your search position, your ad account structure if you run ads, and where your traffic comes from. You receive specific findings and a ranked list of fixes, not a generic checklist.",
    },
  ];

  return (
    <>
      <link rel="canonical" href="https://digitaledge360.in/digital-marketing-services-kolkata/" />

      <div className="w-full bg-[#fafbfc] min-h-screen text-slate-800">
        {/* Hero Section */}
        <section className="relative w-full pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 pb-16 sm:pb-20 px-6 sm:px-8 lg:px-12 flex flex-col justify-center items-center bg-gradient-to-b from-[#e0f2fe]/70 via-[#bae6fd]/25 to-[#fafbfc] border-b border-slate-200/60 overflow-hidden">
          {/* Subtle Grid Background */}
          <div
            className="animate-grid-scroll opacity-60 pointer-events-none absolute inset-0 z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(36, 67, 171, 0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(36, 67, 171, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Ambient Glow Orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[8%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#0a8bc7]/12 via-[#2443ab]/10 to-transparent blur-[90px]" />
            <div className="absolute top-[20%] right-[8%] w-[35%] aspect-square rounded-full bg-gradient-to-br from-[#ff5500]/8 via-[#2443ab]/8 to-transparent blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Kolkata Location Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#2443ab]/20 shadow-[0_4px_16px_rgba(36,67,171,0.08)] mb-6 backdrop-blur-md">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <MapPin className="h-3.5 w-3.5 text-[#2443ab]" />
                <span className="text-xs font-black uppercase tracking-wider text-[#2443ab]">
                  Park Street, Kolkata
                </span>
              </div>

              {/* Exact H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#0d1b3e] leading-[1.1] mb-6">
                Digital Marketing Services in Kolkata
              </h1>

              {/* Exact Copy Paragraphs */}
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-4">
                Most Kolkata businesses we talk to are not short of marketing vendors. They are short of someone who owns the result. One company runs the ads, another handles search, a third builds the website, and when sales slow down, each of them points at the other two.
              </p>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6">
                Digital Edge 360 is a digital marketing company in Kolkata that puts all of this under one team. We build the website, run the ads, work on search rankings, and report on revenue, so there is one group of people answerable for the number you care about.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-6">
                <a
                  href="#hero-leadform"
                  className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-[0_8px_20px_rgba(36,67,171,0.25)] hover:shadow-[0_10px_24px_rgba(64,21,158,0.4)] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  <span>Book a Free Growth Audit</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="tel:+919830024746"
                  className="w-full sm:w-auto rounded-full border border-slate-300 bg-white/90 hover:bg-white px-6 py-3.5 text-xs font-bold text-[#0d1b3e] hover:border-[#2443ab] shadow-xs hover:shadow transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <PhoneCall className="h-4 w-4 text-[#2443ab]" />
                  <span>Call +91 98300 24746</span>
                </a>
              </div>

              {/* Trust strip (exact text) */}
              <div className="rounded-2xl bg-white/80 border border-slate-200 p-3 sm:px-4 sm:py-2.5 text-xs text-slate-650 font-semibold shadow-2xs backdrop-blur-sm leading-relaxed">
                7+ years in business · 75+ clients · 98% client retention · Google Partner · Meta Business Partner · Shopify Plus · ISO 27001
              </div>
            </div>

            {/* Right Column: LeadForm in Hero Section */}
            <div id="hero-leadform" className="lg:col-span-6 flex justify-center relative w-full">
              <LeadForm showDecorations={false} initialServiceType="marketing" />
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight mb-4">
              Digital Marketing Services We Offer in Kolkata
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              You can hire us for one service or let us run the whole thing. Here is what each part looks like in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-slate-200/80 p-7 shadow-xs hover:shadow-xl hover:border-[#2443ab]/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl mb-5 border ${service.accent}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0d1b3e] mb-3 group-hover:text-[#2443ab] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-650 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50/70 border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight mb-4">
                How a Digital Marketing Project With Us Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, i) => (
                <div
                  key={i}
                  className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xs hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#2443ab] font-black text-sm">
                      {st.step}
                    </span>
                    <h3 className="text-lg font-bold text-[#0d1b3e]">{st.name}</h3>
                  </div>
                  <p className="text-sm text-slate-650 leading-relaxed font-normal">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight mb-2">
              What Our Clients Have Seen
            </h2>
            <p className="text-slate-500 text-sm font-semibold">
              Numbers from real work, shared with permission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {results.map((res, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white border border-slate-200/80 p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#0d1b3e]">{res.client}</h3>
                    <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black border border-emerald-100">
                      {res.metric} {res.label}
                    </div>
                  </div>
                  <p className="text-sm text-slate-650 leading-relaxed font-normal">{res.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/insights/case-studies"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#2443ab] hover:underline"
            >
              <span>See all case studies</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Who We Work With */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white border-y border-slate-200/60">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight">
              Businesses We Help in Kolkata and Beyond
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              We work with online stores and D2C brands, manufacturers and B2B companies, and education and service businesses. Some clients are brand-new launches. Others turn over crores every year. The plan looks different at each stage, which is why we start with an audit instead of a package.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our clients include fashion and jewellery labels, food brands, education businesses, and industrial manufacturers, from Kolkata and other cities and countries.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight mb-4">
              How Much Do Digital Marketing Services Cost in Kolkata?
            </h2>
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed">
              It depends on what you need, so we do not publish a fixed rate card. Three things drive the cost most:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow">
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                Where you are starting: a new store needs a different budget from an established business doing lakhs every month.
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow">
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                Which services you pick. A single channel like Google Ads costs less to manage than SEO, ads, content, and a website rebuild together.
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xs hover:shadow-md transition-shadow">
              <p className="text-sm text-slate-700 font-medium leading-relaxed">
                How competitive your market is. Selling in a crowded category takes more effort than a narrow niche.
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-slate-650 font-normal max-w-2xl mx-auto">
            Most of our work runs month to month, so you are not tied to a long contract. If you are not seeing value, you can leave. Before any money changes hands, we offer a free audit so you know what you actually need.
          </p>
        </section>

        {/* Why Digital Edge 360° */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white mb-4">
                Why Kolkata Businesses Choose Digital Edge 360°
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-md"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
                      <p className="text-sm text-slate-300 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Audit CTA */}
        <section id="lead-form-section" className="py-20 px-6 sm:px-8 lg:px-12 bg-white border-t border-slate-200/60">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#2443ab] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Free Audit CTA
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight leading-tight">
              Get a Free Growth Audit
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Tell us about your business, and we will review your website, your ads, and your search presence. You get the three biggest things holding back your growth and a 30-day plan to fix them, whether or not you hire us afterwards.
            </p>

            <div className="pt-2">
              <a
                href="https://digitaledge360.in/contact/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] hover:opacity-95 text-white px-8 py-4 text-xs font-black uppercase tracking-wider shadow-md transition-all duration-200 hover:scale-105"
              >
                <span>Get My Free Growth Audit</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-slate-50/70 border-t border-slate-200/60">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-2xl sm:text-4xl font-black text-[#0d1b3e] tracking-tight mb-3">
                Frequently Asked Questions About Digital Marketing in Kolkata
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border bg-white transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-[#2443ab]/40 shadow-[0_8px_24px_rgba(36,67,171,0.06)]"
                        : "border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-[#0d1b3e] pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-[#2443ab] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-650 leading-relaxed border-t border-slate-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 sm:px-8 lg:px-12 bg-white border-t border-slate-200/60">
          <div className="max-w-5xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <h2 className="text-2xl sm:text-3xl font-black text-[#0d1b3e]">Contact</h2>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                Digital Edge 360,{" "}
                <a
                  href="https://share.google/wWvTBEnoIcxmL91sl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2443ab] font-semibold underline hover:text-blue-700"
                >
                  9B Everest House, 9th Floor, Park Street Area, Kolkata 700071, India
                </a>
                . Phone:{" "}
                <a href="tel:+919830024746" className="text-[#2443ab] font-semibold hover:underline">
                  +91 98300 24746
                </a>
                . Email:{" "}
                <a href="mailto:contactus@digitaledge360.in" className="text-[#2443ab] font-semibold hover:underline">
                  contactus@digitaledge360.in
                </a>
              </p>
            </div>

            <a
              href="https://digitaledge360.in/contact/"
              className="shrink-0 rounded-full bg-gradient-to-r from-[#0a8bc7] via-[#2443ab] to-[#40159e] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-md hover:scale-105 transition-all duration-200"
            >
              Book a Free Strategy Call
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
