import React from "react";

interface ChangelogRelease {
  version: string;
  date: string;
  title: string;
  description: string;
  features: string[];
}

export default function ChangelogPage() {
  const releases: ChangelogRelease[] = [
    {
      version: "v1.0.0",
      date: "Today",
      title: "🚀 AuraLLM General Availability (GA)",
      description: "After months of rigorous testing in high-volume clusters, AuraLLM v1.0 is generally available as a single compiled Go binary. Zero external runtime requirements, pure performance, and enterprise-grade cost boundaries.",
      features: [
        "In-flight local PII Redaction for SSNs, Cards, and API Keys.",
        "Asynchronous Shadow Routing: Replicate prompts to alternative models with zero latency impact.",
        "In-Memory Token Bucket rate limiting: Millisecond response times under peak request load.",
        "Beautiful self-hosted admin console interface.",
        "Ready-to-deploy Helm charts for simple Kubernetes installation."
      ]
    },
    {
      version: "v0.9.2",
      date: "2 weeks ago",
      title: "📈 ClickHouse Audit Telemetry",
      description: "Added native ClickHouse logging integration, allowing high-throughput database insertions for organizations analyzing millions of prompt events per day.",
      features: [
        "ClickHouse logging adapter with configurable batch intervals.",
        "Prompt token size histograms inside the Admin Dashboard.",
        "Improved streaming chunk buffers for smoother Server-Sent Events (SSE)."
      ]
    },
    {
      version: "v0.8.0",
      date: "1 month ago",
      title: "🛡 Fallbacks & Multi-Node Replication",
      description: "Introduced advanced fallback routes to keep your applications running even during upstream provider rate limits or total outages.",
      features: [
        "Automatic failover matching (e.g. fallback from OpenAI to Azure OpenAI instantly).",
        "Encrypted state syncing across multiple local cluster nodes via Redis.",
        "Environment variable isolation for sensitive upstream API keys."
      ]
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          📢 Product Changelog
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Continuous Innovation at the Edge
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          See the latest updates, architectural improvements, and feature rollouts designed to keep your AI gateways lightning-fast and bulletproof.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-zinc-800 ml-4 pl-8 sm:ml-6 sm:pl-10 space-y-12 max-w-4xl">
        
        {releases.map((release, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <span className="absolute -left-[41px] sm:-left-[49px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black border border-primary text-[10px] shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              🟢
            </span>

            {/* Content card */}
            <div className="border border-border bg-panel/40 hover:border-zinc-800 transition-colors rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs bg-primary/20 text-primary border border-primary/30 px-2.5 py-0.5 rounded-full font-bold">
                    {release.version}
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">{release.title}</h3>
                </div>
                <span className="text-xs text-zinc-500 font-medium font-mono">{release.date}</span>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {release.description}
              </p>

              <div className="border-t border-border/60 my-4" />

              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500">Key Updates:</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                  {release.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">✔</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
