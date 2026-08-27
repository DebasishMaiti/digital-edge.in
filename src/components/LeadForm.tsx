"use client";

import { useState } from "react";

interface LeadFormProps {
  showDecorations?: boolean;
}

export default function LeadForm({ showDecorations = false }: LeadFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Service selection & Address
    serviceType: "both", // "development" | "marketing" | "both"
    category: "",
    country: "Laos", // Pre-select Laos

    // Step 2: Goals / Services
    goals: [] as string[],
    budget: "",

    // Step 3: Contact details
    name: "",
    email: "",
    phone: "",
    contactMethod: "",
    callTime: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  const handleServiceTypeChange = (type: "development" | "marketing" | "both") => {
    setFormData((prev) => ({ 
      ...prev, 
      serviceType: type,
      category: "", // reset category
      goals: [] // reset selected goals on service type change
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      const goals = prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal];
      
      const newErrors = { ...errors };
      delete newErrors.goals;
      setErrors(newErrors);

      return { ...prev, goals };
    });
  };

  const validateStep = (currentStep: number) => {
    const stepErrors: { [key: string]: string } = {};

    if (currentStep === 1) {
      if (!formData.category) stepErrors.category = "Select your business/project category.";
      if (!formData.country) stepErrors.country = "Select your location/country.";
    } else if (currentStep === 2) {
      if (formData.goals.length === 0) stepErrors.goals = "Select at least one challenge or goal.";
      if (!formData.budget) stepErrors.budget = "Select your estimated budget/ad spend.";
    } else if (currentStep === 3) {
      if (!formData.name.trim()) stepErrors.name = "Enter your full name.";
      if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
        stepErrors.email = "Enter a valid business email.";
      }
      if (!formData.phone.trim()) stepErrors.phone = "Enter your phone number.";
      if (!formData.contactMethod) stepErrors.contactMethod = "Select preferred contact method.";
      if (!formData.callTime) stepErrors.callTime = "Select preferred time window.";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Maps nicely to old schema to avoid breaking send-email API
    const payload = {
      name: formData.name,
      company: `${formData.category} (Category)`,
      email: formData.email,
      whatsapp: `${formData.phone} (Via: ${formData.contactMethod}, Call at: ${formData.callTime})`,
      goal: `Service Type: ${formData.serviceType} | Targets: ${formData.goals.join(", ")} | Country: ${formData.country}`,
      budget: formData.budget,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Track Meta Pixel Lead event for contact form submission
        if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "Lead", {
            content_name: formData.serviceType,
            category: formData.category,
            value: formData.budget,
          });
        }

        setSubmitStatus("success");
        setFormData({
          serviceType: "both",
          category: "",
          country: "Laos",
          goals: [],
          budget: "",
          name: "",
          email: "",
          phone: "",
          contactMethod: "",
          callTime: "",
        });
        setStep(1);
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

  // Dynamically switch option list based on selected Service Type
  const getChallengesList = () => {
    if (formData.serviceType === "development") {
      return [
        { id: "custom-site", label: "Build Custom Website" },
        { id: "app-dev", label: "Mobile App Needed" },
      ];
    } else if (formData.serviceType === "marketing") {
      return [
        { id: "conversion", label: "Low conversion rate" },
        { id: "cart-abandonment", label: "High cart abandonment" },
        { id: "rising-ads", label: "Rising ad costs / poor ROAS" },
        { id: "low-repeat", label: "Low repeat purchase rate" },
        { id: "marketing-growth", label: "Digital Marketing & Scale" },
        { id: "seo-ranking", label: "SEO & Organic Traffic" },
        { id: "brand-identity", label: "Brand Design & UGC" },
        { id: "analytics", label: "Analytics & Attribution" },
      ];
    } else {
      // Both
      return [
        { id: "custom-dev", label: "Custom Website Dev / Code" },
        { id: "app-dev", label: "Mobile App Needed" },
        { id: "conversion", label: "Low conversion rate" },
        { id: "rising-ads", label: "Rising ad costs / poor ROAS" },
        { id: "marketing-growth", label: "Digital Marketing & Scale" },
        { id: "seo-ranking", label: "SEO & Organic Traffic" },
        { id: "headless", label: "Headless Commerce Migration" },
        { id: "uiux-redesign", label: "UI/UX & Design Overhaul" },
      ];
    }
  };

  const getCategoryOptions = () => {
    if (formData.serviceType === "development") {
      return [
        { value: "E-Commerce Dev", label: "E-Commerce Development" },
        { value: "SaaS Dev", label: "SaaS / Web Application" },
        { value: "Mobile App Dev", label: "Mobile App Development" },
        { value: "Landing Page / CMS", label: "Landing Page / CMS Site" },
      ];
    } else if (formData.serviceType === "marketing") {
      return [
        { value: "D2C Marketing", label: "D2C / E-Commerce Brand" },
        { value: "Lead Gen Marketing", label: "B2B / Lead Generation" },
        { value: "SaaS Marketing", label: "SaaS & Tech Marketing" },
        { value: "Local Business", label: "Local / Service Business" }
      ];
    } else {
      return [
        { value: "E-Commerce Growth", label: "E-Commerce (Dev + Ads)" },
        { value: "SaaS Growth", label: "SaaS / Tech (Dev + Ads)" },
        { value: "B2B growth", label: "B2B / Lead Gen (Dev + Ads)" }
      ];
    }
  };

  return (
    <div className="w-full max-w-[720px] mx-auto rounded-[32px] bg-white overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col lg:flex-row min-h-[660px]">
      
      {/* ───────────────────── LEFT BRANDING PANEL ───────────────────── */}
      <div className="relative lg:w-[38%] xl:w-[40%] px-8 py-10 lg:px-6 xl:px-8 lg:py-10 xl:py-12 text-white overflow-hidden flex flex-col justify-between">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c89c7] via-[#2450b3] to-[#3d199f]" />
        
        {/* Decorative glows */}
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-[100px]" />
        <div className="absolute top-20 -right-16 w-56 h-56 bg-purple-500/25 rounded-full blur-[80px]" />

        <div className="relative z-10 flex flex-col h-full justify-between">
          <div>
            {/* Tag / Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3.5 py-1.5 text-[9px] font-black tracking-[0.12em] text-white uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              100% FREE • NO OBLIGATION
            </span>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[24px] xl:text-[32px] font-black tracking-tight leading-[1.15] text-white">
              Let&apos;s Build Your
              <br />
              <span className="text-cyan-200">Growth Blueprint</span>
            </h2>
            <div className="mt-4 w-12 h-[3px] rounded-full bg-cyan-300" />
            
            <p className="text-[13px] text-white/80 leading-relaxed mt-5">
              Identify friction points in your tech stack, custom code development limits, and marketing leaks holding your business back.
            </p>
          </div>

          {/* Quick Value Cards */}
          <div className="space-y-3 mt-10">
            <div className="rounded-2xl bg-white/10 border border-white/10 p-4 backdrop-blur-sm">
              <h4 className="text-[12px] font-black text-white uppercase tracking-wider">
                Full-Stack Expertise
              </h4>
              <p className="text-[11px] text-white/70 mt-0.5 leading-snug">
                Covering both custom development and ROI-focused digital marketing campaigns.
              </p>
            </div>
            
            <div className="rounded-2xl bg-white/10 border border-white/10 p-4 backdrop-blur-sm">
              <h4 className="text-[12px] font-black text-white uppercase tracking-wider">
                100% Confidential
              </h4>
              <p className="text-[11px] text-white/70 mt-0.5 leading-snug">
                Your credentials, project scopes, and product details are safe with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ───────────────────── RIGHT INTERACTIVE FORM PANEL ───────────────────── */}
      <div className="lg:w-[62%] xl:w-[60%] bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-8 xl:px-10 flex flex-col justify-between">
        
        {/* Step Progress Indicators */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 1 ? "bg-indigo-600" : "bg-slate-100"}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 2 ? "bg-indigo-600" : "bg-slate-100"}`} />
            <div className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= 3 ? "bg-indigo-600" : "bg-slate-100"}`} />
          </div>

          {/* Step Metadata Header */}
          <div className="text-left">
            <span className="text-[10px] font-black tracking-wider text-indigo-600 uppercase">
              {step === 1 && "Step 1 of 3 · Service & Details"}
              {step === 2 && "Step 2 of 3 · Goals & Stack"}
              {step === 3 && "Step 3 of 3 · Reach Out"}
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-[#0d1b3e] mt-1 tracking-tight">
              {step === 1 && "Configure Your Service"}
              {step === 2 && "What are your core targets?"}
              {step === 3 && "Where should we reach you?"}
            </h3>

            <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
              {step === 1 && "Choose your service type, project category, and address below."}
              {step === 2 && "Select the main areas where you need development or marketing support."}
              {step === 3 && "We will confirm your strategy slot in your local timezone."}
            </p>
          </div>
        </div>

        {/* Form Body container */}
        <div className="mt-8 flex-1 flex flex-col justify-center">
          
          {/* STEP 1: SERVICE, CATEGORY, ADDRESS */}
          {step === 1 && (
            <div className="space-y-5 text-left">
              {/* Choose Service */}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] mb-2.5 uppercase tracking-wider">Choose Service</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleServiceTypeChange("development")}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                      formData.serviceType === "development"
                        ? "border-indigo-600 bg-indigo-50/50 text-indigo-700 font-extrabold shadow-sm"
                        : "border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50/50"
                    }`}
                  >
                    Tech & Dev
                  </button>
                  <button
                    type="button"
                    onClick={() => handleServiceTypeChange("marketing")}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                      formData.serviceType === "marketing"
                        ? "border-indigo-600 bg-indigo-50/50 text-indigo-700 font-extrabold shadow-sm"
                        : "border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50/50"
                    }`}
                  >
                    Marketing
                  </button>
                  <button
                    type="button"
                    onClick={() => handleServiceTypeChange("both")}
                    className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                      formData.serviceType === "both"
                        ? "border-indigo-600 bg-indigo-50/50 text-indigo-700 font-extrabold shadow-sm"
                        : "border-slate-200 hover:border-slate-300 text-slate-600 bg-slate-50/50"
                    }`}
                  >
                    Both
                  </button>
                </div>
              </div>

              {/* Which Category */}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] mb-1.5 uppercase tracking-wider">Which Category</label>
                <div className="relative">
                  <select
                    id="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className={`w-full appearance-none rounded-xl border ${errors.category ? "border-red-400 ring-2 ring-red-100" : "border-slate-200"} bg-slate-50/50 px-4 py-3 text-sm font-semibold text-[#0d1b3e] outline-none focus:border-indigo-600 focus:bg-white`}
                  >
                    <option value="">Select Category</option>
                    {getCategoryOptions().map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                {errors.category && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.category}</p>}
              </div>

              {/* Address / Country */}
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] mb-1.5 uppercase tracking-wider">Address / Country</label>
                <div className="relative">
                  <select
                    id="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={`w-full appearance-none rounded-xl border ${errors.country ? "border-red-400 ring-2 ring-red-100" : "border-slate-200"} bg-slate-50/50 px-4 py-3 text-sm font-semibold text-[#0d1b3e] outline-none focus:border-indigo-600 focus:bg-white`}
                  >
                    <option value="">Select Location</option>
                    <option value="Laos">Laos (Lao PDR)</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="India">India</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                {errors.country && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.country}</p>}
              </div>
            </div>
          )}

          {/* STEP 2: GOALS & SERVICES */}
          {step === 2 && (
            <div className="space-y-5 text-left">
              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] mb-2.5 uppercase tracking-wider">
                  Select Targets (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {getChallengesList().map((item) => {
                    const isSelected = formData.goals.includes(item.label);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleGoalToggle(item.label)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-xs sm:text-sm font-bold text-left transition-all ${
                          isSelected
                            ? "border-indigo-600 bg-indigo-50/40 text-indigo-700 ring-2 ring-indigo-100"
                            : "border-slate-200 hover:border-slate-300 text-slate-700 bg-white"
                        }`}
                      >
                        <div className={`w-4.5 h-4.5 rounded flex items-center justify-center border transition-all ${
                          isSelected ? "bg-indigo-600 border-indigo-600 text-white" : "border-slate-300 bg-white"
                        }`}>
                          {isSelected && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-2.5 h-2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        {item.label}
                      </button>
                    );
                  })}
                </div>
                {errors.goals && <p className="text-[11px] text-red-500 mt-1.5 font-bold">{errors.goals}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] mb-1.5 uppercase tracking-wider">
                  {formData.serviceType === "development" ? "Target Project Budget (USD)" : "Monthly Ad Spend / Target Budget"}
                </label>
                <div className="relative">
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={`w-full appearance-none rounded-xl border ${errors.budget ? "border-red-400 ring-2 ring-red-100" : "border-slate-200"} bg-slate-50/50 px-4 py-3 text-sm font-semibold text-[#0d1b3e] outline-none focus:border-indigo-600 focus:bg-white`}
                  >
                    <option value="">Select Budget Range</option>
                    {formData.serviceType === "development" ? (
                      <>
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 – $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 – $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                      </>
                    ) : (
                      <>
                        <option value="Under $1,000">Under $1,000 / month</option>
                        <option value="$1,000 - $5,000">$1,000 – $5,000 / month</option>
                        <option value="$5,000 - $20,000">$5,000 – $20,000 / month</option>
                        <option value="$20,000+">$20,000+ / month</option>
                      </>
                    )}
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                {errors.budget && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.budget}</p>}
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT & CALL TIME */}
          {step === 3 && (
            <div className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0d1b3e] mb-1.5 uppercase tracking-wider">Full name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Cooper"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl border ${errors.name ? "border-red-400 ring-2 ring-red-100" : "border-slate-200"} bg-slate-50/50 px-4 py-3 text-sm font-semibold text-[#0d1b3e] placeholder-slate-400 outline-none focus:border-indigo-600 focus:bg-white`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0d1b3e] mb-1.5 uppercase tracking-wider">Business Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="jane@yourstore.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl border ${errors.email ? "border-red-400 ring-2 ring-red-100" : "border-slate-200"} bg-slate-50/50 px-4 py-3 text-sm font-semibold text-[#0d1b3e] placeholder-slate-400 outline-none focus:border-indigo-600 focus:bg-white`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0d1b3e] mb-1.5 uppercase tracking-wider">Phone (with country code)</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+856 20 5555 5555"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl border ${errors.phone ? "border-red-400 ring-2 ring-red-100" : "border-slate-200"} bg-slate-50/50 px-4 py-3 text-sm font-semibold text-[#0d1b3e] placeholder-slate-400 outline-none focus:border-indigo-600 focus:bg-white`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0d1b3e] mb-1.5 uppercase tracking-wider">Preferred Contact Method</label>
                  <div className="relative">
                    <select
                      id="contactMethod"
                      value={formData.contactMethod}
                      onChange={handleInputChange}
                      className={`w-full appearance-none rounded-xl border ${errors.contactMethod ? "border-red-400 ring-2 ring-red-100" : "border-slate-200"} bg-slate-50/50 px-4 py-3 text-sm font-semibold text-[#0d1b3e] outline-none focus:border-indigo-600 focus:bg-white`}
                    >
                      <option value="">Select Method</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Google Meet">Google Meet</option>
                      <option value="Zoom">Zoom Call</option>
                      <option value="Direct Call">Direct Phone Call</option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>
                  {errors.contactMethod && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.contactMethod}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0d1b3e] mb-1.5 uppercase tracking-wider">Best time to call (your local time)</label>
                <div className="relative">
                  <select
                    id="callTime"
                    value={formData.callTime}
                    onChange={handleInputChange}
                    className={`w-full appearance-none rounded-xl border ${errors.callTime ? "border-red-400 ring-2 ring-red-100" : "border-slate-200"} bg-slate-50/50 px-4 py-3 text-sm font-semibold text-[#0d1b3e] outline-none focus:border-indigo-600 focus:bg-white`}
                  >
                    <option value="">Select a time window</option>
                    <option value="Morning">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="Evening">Evening (5 PM - 8 PM)</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
                {errors.callTime && <p className="text-[11px] text-red-500 mt-1 font-bold">{errors.callTime}</p>}
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation Buttons */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors py-2 flex items-center gap-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back
            </button>
          ) : (
            <span className="hidden sm:inline-block text-[11px] text-slate-400 font-medium">
              Step 1: Service & Info
            </span>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleContinue}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-sm font-bold text-white shadow-md hover:opacity-95 hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              Continue
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_25px_rgba(36,67,171,0.3)] hover:opacity-95 hover:shadow-[0_12px_30px_rgba(64,21,158,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Book Strategy Call"}
            </button>
          )}

        </div>

        {/* Global Submission Messages */}
        {submitStatus === "success" && (
          <p className="mt-3 text-center text-sm font-bold text-emerald-600">
            Strategy Call Booked Successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="mt-3 text-center text-sm font-bold text-red-600">
            Failed to send. Please try again.
          </p>
        )}

        {/* Security / Privacy notice */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          <span>Your data is secure and will never be shared.</span>
        </div>

      </div>
    </div>
  );
}