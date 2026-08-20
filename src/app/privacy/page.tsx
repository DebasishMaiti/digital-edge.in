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

        {/* Sky blue to purple privacy hero wrapper (1 shade deeper) */}
        <section className="relative w-full pt-[160px] pb-20 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#bae6fd] via-[#e9d5ff] to-[#fafbfc] border-b border-slate-200">
          {/* Light Grid Scrolling Background */}
          <div
            className="animate-grid-scroll opacity-75 pointer-events-none z-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(14, 165, 233, 0.16) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(14, 165, 233, 0.16) 1px, transparent 1px)
              `
            }}
          />

          {/* Ambient glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[10%] w-[40%] aspect-square rounded-full bg-gradient-to-br from-[#0ea5e9]/15 via-[#c084fc]/12 to-transparent blur-[80px]" />
            <div className="absolute bottom-[10%] right-[10%] w-[45%] aspect-square rounded-full bg-gradient-to-br from-[#818cf8]/12 via-transparent to-transparent blur-[90px]" />
          </div>

          {/* SVG Custom Graphics - Security Shields, Keys & Padlocks representing Privacy */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 opacity-50">
            <svg className="w-full h-full min-w-[1000px] min-h-[400px]" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">

              {/* Security Shield (Left) */}
              <g transform="translate(140, 100) rotate(-10)" stroke="rgb(14, 165, 233)" strokeWidth="2" fill="none">
                <path d="M0,15 L60,0 L120,15 L120,60 C120,95 60,120 60,120 C60,120 0,95 0,60 Z" />
                {/* Checkmark inside shield */}
                <path d="M40,60 L52,72 L80,44" stroke="rgb(168, 85, 247)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Padlock (Right) */}
              <g transform="translate(940, 120) rotate(10)" stroke="rgb(168, 85, 247)" strokeWidth="2" fill="none">
                {/* Shackle */}
                <path d="M25,40 L25,20 C25,8 35,8 45,8 C55,8 55,20 55,40" strokeWidth="2" />
                {/* Body */}
                <rect x="10" y="40" width="60" height="45" rx="6" fill="rgba(168, 85, 247, 0.05)" />
                {/* Keyhole */}
                <circle cx="40" cy="58" r="4" fill="rgb(14, 165, 233)" />
                <line x1="40" y1="62" x2="40" y2="72" stroke="rgb(14, 165, 233)" strokeWidth="2" />
              </g>

              {/* Security Key (Lower Right) */}
              <g transform="translate(850, 260) rotate(-35)" stroke="rgb(14, 165, 233)" strokeWidth="2" fill="none">
                <circle cx="20" cy="20" r="12" />
                <line x1="32" y1="20" x2="80" y2="20" />
                <line x1="65" y1="20" x2="65" y2="30" />
                <line x1="75" y1="20" x2="75" y2="30" />
              </g>

              {/* Concentric radar waves for secure protection */}
              <circle cx="600" cy="200" r="200" fill="none" stroke="rgba(14, 165, 233, 0.08)" strokeWidth="1.5" />
              <circle cx="600" cy="200" r="150" fill="none" stroke="rgba(168, 85, 247, 0.08)" strokeWidth="1" strokeDasharray="6 6" />

              {/* Precise dot grids */}
              <g transform="translate(540, 40)">
                {Array.from({ length: 4 }).map((_, r) =>
                  Array.from({ length: 10 }).map((_, c) => (
                    <circle
                      key={`privacy-sec-dot-${r}-${c}`}
                      cx={c * 20}
                      cy={r * 20}
                      r={1.5}
                      fill="rgb(168, 85, 247)"
                      opacity={0.25}
                    />
                  ))
                )}
              </g>
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold tracking-widest text-[#0ea5e9] uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0ea5e9] animate-pulse" />
              Legal & Trust Information
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
