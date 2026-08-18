export default function PrivacyPolicy() {
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
    <link rel="canonical" href="https://digitaledge360.com/privacy" />
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
            Privacy Policy
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
              Information We Collect
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              We collect information to provide better services to all our users and clients. This includes:
            </p>
            <ul className="space-y-2.5 text-sm font-semibold pl-5 list-disc marker:text-[#2443ab]">
              <li>Contact details such as your name, company name, email address, and WhatsApp or phone number.</li>
              <li>Project goals, estimated budget details, and other parameters you submit via our onboarding flows.</li>
              <li>Technical usage data, device information, IP address, and cookie identifiers during your visits.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-50 text-purple-600 text-xs font-bold border border-purple-100">02</span>
              How We Use Information
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              We use the collected information for purposes necessary to run our services and expand your brand, including:
            </p>
            <ul className="space-y-2.5 text-sm font-semibold pl-5 list-disc marker:text-[#84a93c]">
              <li>Communicating with you regarding scheduling consultations, project status, and business opportunities.</li>
              <li>Customizing your experience on our platform and engineering better tailored advertising strategies.</li>
              <li>Analyzing platform performance, improving web site loading speeds, and debugging issues.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 text-xs font-bold border border-cyan-100">03</span>
              Information Sharing & Disclosure
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              We do not sell, rent, or trade your personal data to third parties. We may share information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing your brand, so long as those parties agree to keep this information confidential.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-600 text-xs font-bold border border-amber-100">04</span>
              Data Security & Protection
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information. Secure servers, encrypted connection layers (SSL), and strict internal data controls are standard components of our infrastructure.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0d1b3e] tracking-tight flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-rose-50 text-rose-600 text-xs font-bold border border-rose-100">05</span>
              Your Rights & Choice
            </h2>
            <p className="text-sm leading-relaxed font-medium">
              Depending on your location, you may have rights under the GDPR, CCPA, or other state privacy guidelines. You have the right to request access to your data, request deletion of your information, or opt out of specific marketing communications.
            </p>
          </div>

          {/* Contact Details */}
          <div className="pt-6 border-t border-slate-100 text-center">
            <p className="text-xs sm:text-sm font-bold text-slate-500">
              Have questions about this Privacy Policy? Contact our legal team at
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
