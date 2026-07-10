import React from "react";
import Link from "next/link";

interface FeatureRow {
  feature: string;
  description: string;
  aurallm: { status: "yes" | "no" | "partial"; text: string };
  litellm: { status: "yes" | "no" | "partial"; text: string };
  portkey: { status: "yes" | "no" | "partial"; text: string };
  awsbedrock: { status: "yes" | "no" | "partial"; text: string };
}

export default function ComparePage() {
  const comparisonData: FeatureRow[] = [
    {
      feature: "Memory Footprint",
      description: "Baseline memory overhead of running the self-hosted gateway gateway instance.",
      aurallm: { status: "yes", text: "< 15 MB (Go)" },
      litellm: { status: "no", text: "~250 MB (Python)" },
      portkey: { status: "partial", text: "~150 MB (Node.js)" },
      awsbedrock: { status: "no", text: "Cloud Only (N/A)" },
    },
    {
      feature: "Binary Architecture",
      description: "Format of the deployment target for orchestration & serverless tasks.",
      aurallm: { status: "yes", text: "Single Static Binary" },
      litellm: { status: "no", text: "Python interpreter required" },
      portkey: { status: "partial", text: "Node/Docker runtime" },
      awsbedrock: { status: "no", text: "Proprietary AWS API" },
    },
    {
      feature: "Local PII Scrubbing",
      description: "Ability to redact SSNs, Credit Cards, and keys in-line at the edge locally without third-party APIs.",
      aurallm: { status: "yes", text: "Yes (Compiled native regex)" },
      litellm: { status: "partial", text: "Requires MS Presidio container" },
      portkey: { status: "no", text: "Cloud-dependent filtering" },
      awsbedrock: { status: "partial", text: "Cloud-only Guardrails" },
    },
    {
      feature: "Background Shadow Routing",
      description: "Asynchronous replication of prompts to test secondary models with zero impact on user response latency.",
      aurallm: { status: "yes", text: "Yes (Native async queue)" },
      litellm: { status: "no", text: "Sync failovers only" },
      portkey: { status: "partial", text: "Configurable in SaaS plane" },
      awsbedrock: { status: "no", text: "Not supported" },
    },
    {
      feature: "Cost / Quota Enforcement",
      description: "Real-time token and dollar-level budgets enforced at the gateway with no database roundtrips.",
      aurallm: { status: "yes", text: "Yes (In-memory token bucket)" },
      litellm: { status: "yes", text: "Yes (Redis based lookup)" },
      portkey: { status: "partial", text: "Requires SaaS cloud" },
      awsbedrock: { status: "no", text: "Cloud-delayed billing alerts" },
    },
    {
      feature: "Cold Start Overhead",
      description: "Time required for the gateway service to spin up and process the very first request.",
      aurallm: { status: "yes", text: "< 5ms (Instant)" },
      litellm: { status: "no", text: "> 800ms (Python VM boot)" },
      portkey: { status: "partial", text: "~100ms (Node.js VM boot)" },
      awsbedrock: { status: "yes", text: "Instant (Serverless API)" },
    },
    {
      feature: "Data Privacy Guarantee",
      description: "Proof that zero keys, logs, or raw prompt content ever leave your secure VPC environment.",
      aurallm: { status: "yes", text: "100% (Air-gapped ready)" },
      litellm: { status: "yes", text: "100% (If entirely self-hosted)" },
      portkey: { status: "no", text: "Telemetry goes to Portkey SaaS" },
      awsbedrock: { status: "partial", text: "AWS environment lock-in" },
    },
  ];

  const renderStatus = (status: "yes" | "no" | "partial", text: string) => {
    let badgeClass = "";
    let icon = "";
    if (status === "yes") {
      badgeClass = "bg-primary/10 text-primary border-primary/30";
      icon = "🟢";
    } else if (status === "partial") {
      badgeClass = "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      icon = "🟡";
    } else {
      badgeClass = "bg-rose-500/10 text-rose-400 border-rose-500/20";
      icon = "🔴";
    }

    return (
      <div className="flex flex-col gap-1">
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-bold w-fit ${badgeClass}`}>
          <span>{icon}</span>
          <span>{status === "yes" ? "Optimized" : status === "partial" ? "Supported" : "Deficient"}</span>
        </span>
        <span className="text-xs sm:text-sm text-zinc-300 font-medium">{text}</span>
      </div>
    );
  };

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          ⚖ Deep Technical Analysis
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Architectural Compare: AuraLLM vs the Alternatives
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Why build a Go-based gateway? Most tools are built in interpreter-heavy Python or Node.js, introducing latency and bloating memory. AuraLLM is built from the ground up for strict FinOps compliance and military-grade performance.
        </p>
      </div>

      {/* Main Table */}
      <div className="border border-border bg-panel rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-black/40">
                <th className="p-6 text-sm font-bold uppercase tracking-wider text-zinc-400 w-1/4">Specification</th>
                <th className="p-6 text-sm font-bold uppercase tracking-wider text-primary bg-primary/5 w-1/4">🟢 AuraLLM</th>
                <th className="p-6 text-sm font-bold uppercase tracking-wider text-zinc-400 w-1/4">LiteLLM</th>
                <th className="p-6 text-sm font-bold uppercase tracking-wider text-zinc-400 w-1/4">Portkey / Bedrock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {comparisonData.map((row, index) => (
                <tr key={index} className="hover:bg-white/[0.01] transition-colors">
                  {/* Spec */}
                  <td className="p-6 space-y-1">
                    <p className="font-bold text-white text-base">{row.feature}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed max-w-xs">{row.description}</p>
                  </td>
                  {/* AuraLLM */}
                  <td className="p-6 bg-primary/5 border-x border-primary/10">
                    {renderStatus(row.aurallm.status, row.aurallm.text)}
                  </td>
                  {/* LiteLLM */}
                  <td className="p-6">
                    {renderStatus(row.litellm.status, row.litellm.text)}
                  </td>
                  {/* Portkey & Bedrock Combine columns to show best of breed */}
                  <td className="p-6">
                    {/* Choose Portkey or Bedrock's status, let's represent both */}
                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Portkey:</span>
                        {renderStatus(row.portkey.status, row.portkey.text)}
                      </div>
                      <div className="border-t border-border/40 pt-2">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Bedrock:</span>
                        {renderStatus(row.awsbedrock.status, row.awsbedrock.text)}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Narrative block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="border border-border bg-panel p-8 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>🚀</span> The Compiled Go Edge
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Running Python gateways like LiteLLM in highly distributed environments (such as Kubernetes or serverless edge pods) forces you to allocate significant compute budgets just to load the runtime interpreter and standard libraries. 
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            AuraLLM compiles into a static binary under 15MB. It launches in 3 milliseconds and requires virtually zero CPU or memory idling, meaning you can run it on micro-vms (e.g. AWS Fargate with 0.25 vCPU) for practically $0/month.
          </p>
        </div>

        <div className="border border-border bg-panel p-8 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>🔒</span> In-VPC Data Sovereign Guard
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Many developers choose cloud gateway products, but transmitting raw LLM prompt streams outside your network introduces massive compliance overhead. Standard HIPAA, PCI-DSS, and GDPR audits require raw prompt content and internal secrets to be scrubbed before network egress.
          </p>
          <p className="text-sm text-zinc-400 leading-relaxed">
            By running AuraLLM locally inside your VPC, raw prompts are processed through a highly optimized regex compiler that identifies SSNs, phone numbers, and keys instantly, redacting them *before* standard API headers are fired off to remote LLM provider systems.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-8">
        <Link 
          href="/features" 
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-black hover:bg-primary-hover shadow-lg shadow-primary/25 transition-all"
        >
          Explore Detailed Features
        </Link>
      </div>
    </div>
  );
}
