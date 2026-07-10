import React from "react";
import Link from "next/link";

export default function SecurityPage() {
  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          🛡 Zero-Data-Transit Guarantee
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Designed for Zero Trust Environments
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Our foundational architectural rule: <strong>We never see your data because we never touch your network.</strong> AuraLLM is built to run entirely inside your private VPC, compliance boundary, or on-prem cluster.
        </p>
      </div>

      {/* Visual Data Flow Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-6">
        
        {/* Vulnerable SaaS Architecture Card */}
        <div className="border border-border/80 bg-panel/30 rounded-2xl p-8 space-y-6 relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
          <div className="absolute top-0 right-0 bg-rose-500/10 text-rose-400 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-bl-xl border-l border-b border-rose-500/20">
            Vulnerable SaaS Model
          </div>
          
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>⚠</span> Standard Cloud Gateways
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Many gateway architectures force you to proxy your prompts through their hosted cloud infrastructure. This means your private user prompts, customer PII, and API keys are stored or routed through a third-party startup's network.
          </p>

          {/* SaaS Flow Diagram */}
          <div className="space-y-4 pt-4 font-mono text-xs">
            <div className="border border-zinc-800 bg-black/80 rounded-xl p-4 flex flex-col items-center justify-center gap-3">
              <div className="border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 rounded text-zinc-300 w-full text-center">
                Your Internal LLM Client App
              </div>
              <div className="text-rose-400 animate-pulse text-lg">↓</div>
              <div className="border border-rose-500/40 bg-rose-950/20 px-3 py-1.5 rounded text-rose-300 w-full text-center relative">
                Third-Party SaaS Servers
                <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
                </span>
                <p className="text-[10px] text-rose-400 mt-1">Telemetry &amp; Keys exposed</p>
              </div>
              <div className="text-rose-400 text-lg">↓</div>
              <div className="border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 rounded text-zinc-300 w-full text-center">
                Upstream LLM API (OpenAI / Anthropic)
              </div>
            </div>
          </div>
        </div>

        {/* AuraLLM Locked VPC Card */}
        <div className="border border-primary bg-primary/[0.02] rounded-2xl p-8 space-y-6 relative overflow-hidden shadow-[0_0_40px_rgba(16,185,129,0.05)]">
          <div className="absolute top-0 right-0 bg-primary/20 text-primary text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-bl-xl border-l border-b border-primary/30">
            Highly Secure VPC Model
          </div>
          
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>🛡</span> AuraLLM In-VPC Guard
          </h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            AuraLLM operates as a self-contained, air-gapped ready static Go service inside your own Kubernetes cluster, ECS, or EC2. Your LLM clients query the local IP. No unredacted telemetry or keys ever exit your security perimeter.
          </p>

          {/* Secure Flow Diagram */}
          <div className="space-y-4 pt-4 font-mono text-xs">
            <div className="border border-primary/20 bg-primary/5 rounded-xl p-4 flex flex-col items-center justify-center gap-3 relative">
              
              {/* VPC boundary tag */}
              <span className="absolute top-2 left-2 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20 uppercase tracking-widest">
                Your Security Perimeter (VPC / K8S)
              </span>

              <div className="border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 rounded text-zinc-300 w-full text-center mt-6">
                Your Internal LLM Client App
              </div>
              <div className="text-primary text-lg font-bold">↓</div>
              <div className="border border-primary bg-primary/10 px-3 py-1.5 rounded text-primary w-full text-center relative font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                🟢 AuraLLM Go Node (In-VPC)
                <p className="text-[9px] text-emerald-400 mt-1 normal-case font-normal">Scrub PII locally. Telemetry saved to local ClickHouse.</p>
              </div>
              <div className="text-primary text-lg font-bold">↓</div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Outbound Secure HTTPS TLS 1.3</p>
              <div className="border border-zinc-700 bg-zinc-900/50 px-3 py-1.5 rounded text-zinc-300 w-full text-center">
                Upstream LLM API (OpenAI / Anthropic)
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Security Specifications list */}
      <section className="border border-border bg-panel p-8 rounded-2xl space-y-8 pt-8 mt-12">
        <h3 className="text-2xl font-bold text-white text-center">Security &amp; Hardening Specs</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span className="text-primary">✔</span> Air-Gapped Compliance Ready
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Our binaries contain no phone-home telemetry. If you deploy in a fully air-gapped private cluster with zero outbound internet (routing prompts instead to internal self-hosted Llama models), AuraLLM requires absolutely no outside connections to validate licensing.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span className="text-primary">✔</span> In-Memory Secret Isolation
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your upstream master API keys are never written to any database. AuraLLM retrieves keys from environment variables or secure stores (HashiCorp Vault, AWS Secrets Manager) and injects them only in-memory during request forwarding.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span className="text-primary">✔</span> Multi-Tenant Client Keys
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Generate isolated API keys for separate teams or services directly in the AuraLLM Console. If a client key leaks or gets compromised, revoke it immediately in-memory with zero disruption to other applications.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span className="text-primary">✔</span> SOC2 &amp; HIPAA Data Mapping
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              AuraLLM enables you to maintain exact audits. Because logging is controlled entirely by you, your security team knows exactly when, where, and why every single LLM prompt was processed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <Link 
          href="/pricing" 
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-black hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all"
        >
          View Enterprise Compliance Pricing
        </Link>
      </div>
    </div>
  );
}
