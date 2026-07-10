import React from "react";
import Link from "next/link";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarInitials: string;
}

export default function CustomersPage() {
  const logos = [
    { name: "Acme Corp", industry: "Financial Services" },
    { name: "Sentinel Security", industry: "Cybersecurity" },
    { name: "Apex FinTech", industry: "Banking & Finance" },
    { name: "Horizon Cloud", industry: "Infrastructure" },
    { name: "Sovereign Health", industry: "Healthcare Providers" },
    { name: "OmniAI Labs", industry: "Machine Learning Solutions" },
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "Before AuraLLM, our development team had complete access to our raw OpenAI master keys, and prompts containing customer email databases and transaction records were slipping through unredacted. AuraLLM solved our compliance audits in a weekend by letting us self-host a secure gateway local proxy in our VPC.",
      author: "Marcus Vance",
      role: "VP of Enterprise Cybersecurity",
      company: "Sentinel Security",
      avatarInitials: "MV",
    },
    {
      quote: "Our AI-spend was growing exponentially at 35% month-over-month. Standard cloud gateways introduced unacceptable latency, but AuraLLM's compiled Go engine had sub-2ms overhead. We set hard token limits per developer key and immediately saw a 40% reduction in runaway prompt loops on our very first week.",
      author: "Sarah Jenkins",
      role: "Director of cloud FinOps",
      company: "Apex FinTech",
      avatarInitials: "SJ",
    },
    {
      quote: "We needed to benchmark Anthropic's Claude-3.5-Sonnet against our standard OpenAI deployment on production prompts. AuraLLM's background shadow parallel routing streamed 100% of our active traffic to Sonnet asynchronously without adding a single millisecond of latency to our users.",
      author: "Dr. David Wu",
      role: "Head of Generative AI",
      company: "OmniAI Labs",
      avatarInitials: "DW",
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          🤝 Trusted Internationally
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Empowering the World's Most Regulated Teams
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          From high-frequency trading platforms to strictly compliant healthcare portals, developers trust AuraLLM to provide cost controls and local data residency guards.
        </p>
      </div>

      {/* Enterprise Logo Grid */}
      <div className="space-y-6">
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 text-center">
          Pioneering companies running self-hosted AuraLLM nodes
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="border border-border bg-panel/30 hover:border-zinc-800 transition-colors p-6 rounded-xl flex flex-col items-center justify-center text-center gap-1 group"
            >
              <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">
                {logo.name}
              </span>
              <span className="text-[10px] text-zinc-500 font-medium">
                {logo.industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="space-y-8 pt-8">
        <h2 className="text-2xl font-bold text-white tracking-tight text-center">
          Direct Reports from the Frontlines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <div 
              key={index} 
              className="border border-border bg-panel hover:border-zinc-800 transition-all rounded-2xl p-8 flex flex-col justify-between space-y-6"
            >
              <p className="text-sm text-zinc-300 leading-relaxed italic">
                "{test.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {test.avatarInitials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{test.author}</h4>
                  <p className="text-[11px] text-zinc-400">
                    {test.role}, <span className="text-primary">{test.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer numbers */}
      <div className="border border-border bg-gradient-to-b from-panel to-black p-8 sm:p-12 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <p className="text-4xl font-extrabold text-white">40%+</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mt-1">Average Cost Savings</p>
        </div>
        <div className="border-t md:border-t-0 md:border-x border-border/60 py-4 md:py-0">
          <p className="text-4xl font-extrabold text-primary">100%</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mt-1">In-VPC Data Sovereignty</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-white">&lt; 1.5ms</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider font-bold mt-1">Gateway Egress Latency</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link 
          href="/compare" 
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-black hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all"
        >
          Compare Technical Details
        </Link>
      </div>
    </div>
  );
}
