
export default function TermsOfService() {
  const gridBackgroundStyle = {
    backgroundImage: `
      linear-gradient(to right, rgba(226, 232, 240, 0.35) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(226, 232, 240, 0.35) 1px, transparent 1px)
    `,
    backgroundSize: '48px 48px',
    maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <>
    <link rel="canonical" href="https://digitaledge360.com/terms" />
    <div className="w-full bg-[#fafbfc] min-h-screen pb-24 text-slate-800">
        {/* Hero Section with Grid Background */}
        <section className="relative w-full pt-[160px] pb-20 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={gridBackgroundStyle}
        />

        <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-br from-[#0a8bc7]/10 via-[#40159e]/10 to-transparent blur-[80px] sm:blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#2443ab] uppercase">
            Legal Information
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0d1b3e] tracking-tight leading-[1.15]">
            Terms of Service
          </h1>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider">
            Last Updated: {currentDate}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 mt-16 relative z-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.03)] space-y-10 text-slate-600">
          
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">01</span>
              Agreement to Terms
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              By accessing our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-50 text-purple-600 text-xs font-bold border border-purple-100">02</span>
              Scope of Agency Services
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              Digital Edge 360 provides digital growth engineering, web/app development, performance marketing, and creative consultation services. Specific deliverables, payment schedules, and timelines will be defined in individual Statements of Work (SOW) signed between us and the client.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 text-xs font-bold border border-cyan-100">03</span>
              Intellectual Property Rights
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              Unless otherwise specified in a custom services contract, all intellectual property developed by Digital Edge 360 for your brand (including custom Shopify themes, apps, copy, design assets, and ad campaigns) will be fully transferred to you upon final invoice settlement. All code assets provided are engineered to the highest industry standards.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-600 text-xs font-bold border border-amber-100">04</span>
              Limitation of Liability
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              In no event shall Digital Edge 360, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the services.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-50 text-rose-600 text-xs font-bold border border-rose-100">05</span>
              Governing Law
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Digital Edge 360 operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or Location.
            </p>
          </div>

          {/* Contact Details */}
          <div className="pt-6 border-t border-slate-100 text-center">
            <p className="text-xs sm:text-sm font-bold text-slate-500">
              Have questions about our Terms of Service? Reach out to our team at
            </p>
            <a href="mailto:legal@digitaledge360.com" className="inline-block mt-2 text-sm font-black text-[#2443ab] hover:underline">
              legal@digitaledge360.com
            </a>
          </div>

        </div>
      </section>
    </div>
    </>
  );
}
