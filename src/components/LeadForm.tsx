"use client";

import { useState } from "react";

interface LeadFormProps {
  showDecorations?: boolean;
}

export default function LeadForm({ showDecorations = false }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    goal: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    if (id === "whatsapp") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, [id]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          whatsapp: "",
          goal: "",
          budget: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[680px] mx-auto rounded-[28px] overflow-hidden shadow-[0_25px_60px_-12px_rgba(15,23,42,0.3)] border border-slate-200/50">
      <div className="flex flex-col lg:flex-row min-h-[640px]">
        {/* ───────────────────── LEFT PANEL ───────────────────── */}
        <div className="relative lg:w-[38%] xl:w-[42%] px-8 py-10 lg:px-6 xl:px-10 lg:py-10 xl:py-12 text-white overflow-hidden">
          {/* New Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c89c7] via-[#2450b3] to-[#3d199f]" />

          {/* Soft glow overlays */}
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-[100px]" />
          <div className="absolute top-20 -right-16 w-56 h-56 bg-purple-500/25 rounded-full blur-[80px]" />

          {/* Dot pattern - top right */}
          <div className="absolute top-6 right-6 grid grid-cols-4 gap-1.5 opacity-25">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-white" />
            ))}
          </div>

          {/* Wave decoration at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-40 opacity-30 pointer-events-none">
            <svg
              viewBox="0 0 400 160"
              fill="none"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0 100 C80 60 120 120 200 90 C280 60 320 110 400 80 V160 H0 Z"
                fill="url(#wave1)"
              />
              <path
                d="M0 120 C100 90 140 140 220 110 C300 80 340 130 400 100 V160 H0 Z"
                fill="url(#wave2)"
              />
              <defs>
                <linearGradient id="wave1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="wave2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-3.5 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                100% FREE • NO COMMITMENT
              </span>
            </div>

            {/* Headline */}
            <div className="mb-5">
              <h2 className="text-[30px] sm:text-[36px] lg:text-[26px] xl:text-[36px] font-black tracking-tight leading-[1.15] text-white">
                Book Your
                <br />
                <span className="text-white/90">Strategy Call</span>
              </h2>

              {/* Thin accent line */}
              <div className="mt-4 w-12 h-[3px] rounded-full bg-white/70" />
            </div>

            {/* Description */}
            <p className="text-[13px] text-white/80 leading-relaxed max-w-[280px] mb-10">
              Tell us about your business — we&apos;ll show you where your growth is being left.
            </p>

            {/* Feature Cards - No Icons */}
            <div className="space-y-3.5 mt-auto">
              {/* Strategic Insights */}
              <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 backdrop-blur-sm">
                <h4 className="text-[13px] font-bold text-white leading-tight">
                  Strategic Insights
                </h4>
                <p className="text-[11px] text-white/70 mt-1 leading-snug">
                  Get expert insights tailored to your business goals.
                </p>
              </div>
 
              {/* 100% Confidential */}
              <div className="rounded-2xl bg-white/10 border border-white/15 px-5 py-4 backdrop-blur-sm">
                <h4 className="text-[13px] font-bold text-white leading-tight">
                  100% Confidential
                </h4>
                <p className="text-[11px] text-white/70 mt-1 leading-snug">
                  Your information is safe and never shared.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ───────────────────── RIGHT PANEL (FORM) ───────────────────── */}
        <div className="lg:w-[62%] xl:w-[58%] bg-white px-8 py-10 lg:px-8 xl:px-12 lg:py-10 xl:py-12 flex flex-col">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <svg
                  className="w-4.5 h-4.5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d1b3e]">
                Let&apos;s Talk Strategy
              </h3>
            </div>
            <p className="text-sm text-slate-500">
              Fill in your details and we&apos;ll schedule your free strategy session.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
            <div className="space-y-5 flex-1">
              {/* Full Name */}
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    className="w-4.5 h-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 py-3 text-sm font-medium text-[#0d1b3e] placeholder-slate-400 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Company */}
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    className="w-4.5 h-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <input
                  id="company"
                  type="text"
                  placeholder="Company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 py-3 text-sm font-medium text-[#0d1b3e] placeholder-slate-400 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Business Email */}
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    className="w-4.5 h-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="Business Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 py-3 text-sm font-medium text-[#0d1b3e] placeholder-slate-400 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* WhatsApp Number */}
              <div className="relative">
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg
                    className="w-4.5 h-4.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  id="whatsapp"
                  type="tel"
                  placeholder="WhatsApp Number"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit WhatsApp number"
                  maxLength={10}
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/60 pl-11 pr-4 py-3 text-sm font-medium text-[#0d1b3e] placeholder-slate-400 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Goal + Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    id="goal"
                    required
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm font-medium text-[#0d1b3e] outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="" disabled>
                     Select Goal
                    </option>
                    <option value="digitalMarketing">Digital Marketing</option>
                    <option value="webDevelopment">Web Development</option>
                    <option value="appDevelopment">App Development</option>
                    <option value="performanceAds">Performance Ads</option>
                    <option value="seoContentMarketing">SEO & Content Marketing</option>
                    <option value="aiStrategy">AI Strategy</option>
                  </select>
                  <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <div className="relative">
                  <select
                    id="budget"
                    required
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-sm font-medium text-[#0d1b3e] outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="" disabled>
                    Select Budget
                    </option>
                    <option value="under-50k">Under 50k/month</option>
                    <option value="50k-1lac">50k – 1 Lac/month</option>
                    <option value="1lac-5lac">1 Lac – 5 Lac/month</option>
                    <option value="5lac-10lac">5 Lac – 10 Lac/month</option>
                    <option value="10lac+">10 Lac+/month</option>
                  </select>
                  <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time note */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <svg
                className="w-4 h-4 text-blue-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>We typically respond within 24 hours to schedule your call.</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#0c89c7] via-[#2450b3] to-[#3d199f] py-3 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_25px_rgba(36,67,171,0.35)] hover:opacity-95 hover:shadow-[0_12px_30px_rgba(64,21,158,0.45)] transition-all flex items-center justify-center gap-2.5 group disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? "Sending..." : "Book Strategy Call"}</span>
 
            </button>

            {/* Status messages */}
            {submitStatus === "success" && (
              <p className="mt-3 text-center text-sm font-semibold text-emerald-600">
                Strategy Call Booked Successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-3 text-center text-sm font-semibold text-red-600">
                Failed to send. Please try again.
              </p>
            )}

            {/* Security footer */}
            <div className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Your data is secure and will never be shared.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}