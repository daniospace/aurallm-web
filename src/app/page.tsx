"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"openai" | "aurallm">("aurallm");

  const openaiCode = `import OpenAI from "openai";

// Standard direct connection to OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Analyze Q4 budget." }],
});`;

  const aurallmCode = `import OpenAI from "openai";

// Swap 2 lines to instantly activate FinOps & local PII scrub!
const openai = new OpenAI({
  baseURL: "http://localhost:8085/v1", // <-- Swapped baseURL
  apiKey: process.env.AURA_API_KEY,     // <-- Swapped key
});

const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "Analyze Q4 budget." }],
});`;

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative text-center py-20 sm:py-32 flex flex-col items-center justify-center">
        {/* Glow behind Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary mb-6 animate-fade-in">
          <span>⚡</span>
          <span>AuraLLM v1.0 is now live and generally available</span>
        </div>

        <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-none">
          The Developer-Friendly AI Gateway That{" "}
          <span className="bg-gradient-to-r from-primary via-emerald-400 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            Finance & Security
          </span>{" "}
          Actually Approve.
        </h1>

        <p className="mt-8 max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed">
          The cloud-native FinOps AI Gateway. Stop LLM budget leaks, redact PII locally, and run shadow parallel routing—all self-hosted in your secure private VPC.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
          <a
            href="https://github.com/daniospace/aurallm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto relative inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-bold text-black hover:bg-primary-hover shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_35px_rgba(16,185,129,0.4)] transition-all duration-300"
          >
            Deploy Free on GitHub
          </a>
          <Link
            href="/features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-panel px-8 py-4 text-base font-bold text-zinc-200 hover:text-primary hover:border-primary/40 transition-all"
          >
            Read the Docs
          </Link>
        </div>

        {/* Hero Features Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full border border-border bg-panel/50 backdrop-blur-sm rounded-2xl p-6 text-left">
          <div className="p-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Latency</p>
            <p className="text-xl font-bold text-white mt-1">&lt; 1.5ms overhead</p>
          </div>
          <div className="p-2 border-l border-border/50 pl-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">PII Redaction</p>
            <p className="text-xl font-bold text-white mt-1">Local & Compiled</p>
          </div>
          <div className="p-2 border-l border-border/50 pl-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Self-Hosted</p>
            <p className="text-xl font-bold text-white mt-1">Docker & Helm</p>
          </div>
          <div className="p-2 border-l border-border/50 pl-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Security</p>
            <p className="text-xl font-bold text-white mt-1">Zero-Data Retention</p>
          </div>
        </div>
      </section>

      {/* Code Comparison Section */}
      <section className="border border-border bg-panel/50 rounded-3xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              ⚡ Zero Code Rewrite
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
              Swap Just Two Lines. Keep Your Existing SDKs.
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              AuraLLM acts as a drop-in replacement for OpenAI, Anthropic, or Cohere. You don't need to rebuild your applications—simply change the baseURL and key, and immediately gain enterprise grade budget enforcement, audit logging, and local security.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex gap-3 items-start">
                <span className="text-primary font-bold">✔</span>
                <span className="text-sm text-zinc-300 font-medium">Use any standard library (OpenAI Node/Python, LangChain, LlamaIndex)</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-primary font-bold">✔</span>
                <span className="text-sm text-zinc-300 font-medium">Inject instant token-level and cost-level budgeting</span>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-primary font-bold">✔</span>
                <span className="text-sm text-zinc-300 font-medium">Asynchronous local telemetry with zero performance hits</span>
              </div>
            </div>
          </div>

          {/* Interactive Code IDE */}
          <div className="lg:col-span-7 flex flex-col border border-border bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-border bg-panel/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="text-xs text-zinc-500 font-mono ml-2">app.ts</span>
              </div>
              {/* Tab Selector */}
              <div className="flex rounded-lg border border-border bg-black p-0.5">
                <button
                  onClick={() => setActiveTab("openai")}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    activeTab === "openai"
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  Standard OpenAI
                </button>
                <button
                  onClick={() => setActiveTab("aurallm")}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    activeTab === "aurallm"
                      ? "bg-primary text-black shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  With AuraLLM
                </button>
              </div>
            </div>

            {/* Code editor content */}
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-black/90">
              <pre className="text-zinc-300">
                {activeTab === "openai" ? (
                  <code>
                    <span className="text-zinc-500">// Standard direct connection</span>{"\n"}
                    <span className="text-emerald-400">import</span> OpenAI from <span className="text-amber-300">"openai"</span>;{"\n"}
                    {"\n"}
                    <span className="text-emerald-400">const</span> openai = <span className="text-emerald-400">new</span> <span className="text-blue-400">OpenAI</span>({"{"}{"\n"}
                    {"  "}apiKey: process.env.OPENAI_API_KEY,{"\n"}
                    {"}"});{"\n"}
                    {"\n"}
                    <span className="text-emerald-400">const</span> completion = <span className="text-emerald-400">await</span> openai.chat.completions.<span className="text-blue-400">create</span>({"{"}{"\n"}
                    {"  "}model: <span className="text-amber-300">"gpt-4o"</span>,{"\n"}
                    {"  "}messages: [{"{"} role: <span className="text-amber-300">"user"</span>, content: <span className="text-amber-300">"Analyze Q4 budget."</span> {"}"}],{"\n"}
                    {"}"});
                  </code>
                ) : (
                  <code>
                    <span className="text-primary font-semibold">// Swap 2 lines to instantly activate FinOps &amp; local PII scrub!</span>{"\n"}
                    <span className="text-emerald-400">import</span> OpenAI from <span className="text-amber-300">"openai"</span>;{"\n"}
                    {"\n"}
                    <span className="text-emerald-400">const</span> openai = <span className="text-emerald-400">new</span> <span className="text-blue-400">OpenAI</span>({"{"}{"\n"}
                    <span className="bg-primary/10 border-l-2 border-primary px-1 block w-full">{"  "}baseURL: <span className="text-amber-300">"http://localhost:8085/v1"</span>, <span className="text-primary font-semibold">// &lt;-- Swapped baseURL</span></span>
                    <span className="bg-primary/10 border-l-2 border-primary px-1 block w-full">{"  "}apiKey: process.env.AURA_API_KEY,     <span className="text-primary font-semibold">// &lt;-- Swapped key</span></span>
                    {"}"});{"\n"}
                    {"\n"}
                    <span className="text-emerald-400">const</span> completion = <span className="text-emerald-400">await</span> openai.chat.completions.<span className="text-blue-400">create</span>({"{"}{"\n"}
                    {"  "}model: <span className="text-amber-300">"gpt-4o"</span>,{"\n"}
                    {"  "}messages: [{"{"} role: <span className="text-amber-300">"user"</span>, content: <span className="text-amber-300">"Analyze Q4 budget."</span> {"}"}],{"\n"}
                    {"}"});
                  </code>
                )}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive DX Pipeline Diagram Section */}
      <section className="space-y-12 relative overflow-hidden py-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            🛡️ Zero Trust &amp; FinOps Governance
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Comprehensive LLM Gateway Architecture
          </h2>
          <p className="text-zinc-400 text-sm">
            Enforce strict budget limits, block PII data leaks locally, and perform non-blocking model audits synchronously inside your secure private cloud network.
          </p>
        </div>

        {/* CSS-Animated Diagram Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-11 items-center gap-4 max-w-5xl mx-auto relative px-4">
          
          {/* Node 1: AI Applications & Agents */}
          <div className="lg:col-span-3 border border-border bg-panel/70 p-6 rounded-2xl relative group hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤖</span>
                <div>
                  <h4 className="text-sm font-bold text-white">AI Applications</h4>
                  <p className="text-[10px] text-zinc-500 font-mono">Apps &amp; Autonomous Agents</p>
                </div>
              </div>
              <div className="bg-black/90 p-3 rounded-xl border border-border/50 text-[11px] leading-relaxed text-zinc-400">
                User Prompts, Autonomous Tool Calls, or LLM Orchestrations (LangChain, LlamaIndex, MCP Clients).
              </div>
            </div>
            <div className="text-[10px] text-zinc-500 font-semibold mt-4">
              📤 Outgoing traffic enters the secure gateway
            </div>
          </div>

          {/* Connection 1: Client to Gateway (Animated Arrow) */}
          <div className="lg:col-span-1 h-12 lg:h-auto flex lg:flex-col items-center justify-center relative">
            {/* Horizontal Line for Large screens, Vertical for Mobile */}
            <div className="hidden lg:block w-full h-[2px] bg-gradient-to-r from-border via-primary to-primary relative">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-[ping_1.5s_infinite] shadow-[0_0_10px_#10b981]" style={{ animationDelay: '0s' }} />
            </div>
            <div className="lg:hidden w-[2px] h-full bg-gradient-to-b from-border via-primary to-primary relative min-h-[48px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-[ping_1.5s_infinite] shadow-[0_0_10px_#10b981]" style={{ animationDelay: '0s' }} />
            </div>
          </div>

          {/* Node 2: AuraLLM Security Gateway */}
          <div className="lg:col-span-3 border border-primary/30 bg-black p-6 rounded-2xl relative shadow-[0_0_30px_rgba(16,185,129,0.08)] hover:border-primary/60 transition-all duration-300 group">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-[9px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow-[0_0_10px_rgba(16,185,129,0.4)]">
              Local VPC Gateway
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🟢</span>
              <div>
                <h4 className="text-sm font-bold text-white">AuraLLM Proxy</h4>
                <p className="text-[10px] text-primary font-mono">port:8085</p>
              </div>
            </div>

            {/* Sub-nodes of the gateway pipeline */}
            <div className="space-y-2">
              {/* Sub-node 1: Local Privacy Guard */}
              <div className="border border-border/85 bg-panel/80 p-2.5 rounded-xl flex items-center justify-between text-xs cursor-help relative group/tooltip">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">🔒</span>
                  <span className="font-semibold text-zinc-300">Local Privacy Guard</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Protected</span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-black border border-border text-[10px] leading-normal rounded-lg shadow-xl opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 pointer-events-none z-50">
                  <span className="text-primary font-bold">PII Redaction:</span> Instantly hides credit cards, SSNs, and secrets locally so cloud providers never see them.
                </div>
              </div>

              {/* Sub-node 2: Cost Control Engine */}
              <div className="border border-border/85 bg-panel/80 p-2.5 rounded-xl flex items-center justify-between text-xs cursor-help relative group/tooltip">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">💵</span>
                  <span className="font-semibold text-zinc-300">Cost Control Engine</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Budget Safe</span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-black border border-border text-[10px] leading-normal rounded-lg shadow-xl opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 pointer-events-none z-50">
                  <span className="text-primary font-bold">Spend Limits:</span> Stops runaway AI costs by locking spending caps globally across all your developer teams.
                </div>
              </div>

              {/* Sub-node 3: Unified Model Access */}
              <div className="border border-border/85 bg-panel/80 p-2.5 rounded-xl flex items-center justify-between text-xs cursor-help relative group/tooltip">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">🔄</span>
                  <span className="font-semibold text-zinc-300">Unified Model Access</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Multi-Model</span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-black border border-border text-[10px] leading-normal rounded-lg shadow-xl opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 pointer-events-none z-50">
                  <span className="text-primary font-bold">Unified Integration:</span> Allows developers to call OpenAI, Anthropic, or Gemini using a single, unified coding format.
                </div>
              </div>

              {/* Sub-node 4: Rate & Token Limiter */}
              <div className="border border-border/85 bg-panel/80 p-2.5 rounded-xl flex items-center justify-between text-xs cursor-help relative group/tooltip">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">🚦</span>
                  <span className="font-semibold text-zinc-300">Rate &amp; Token Limiter</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Rate Safe</span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-black border border-border text-[10px] leading-normal rounded-lg shadow-xl opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 pointer-events-none z-50">
                  <span className="text-primary font-bold">Rate Limiting:</span> Enforces limits on requests and tokens to prevent teams from overloading your API thresholds.
                </div>
              </div>

              {/* Sub-node 5: Outage Auto-Failover */}
              <div className="border border-border/85 bg-panel/80 p-2.5 rounded-xl flex items-center justify-between text-xs cursor-help relative group/tooltip">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-400">🛡️</span>
                  <span className="font-semibold text-zinc-300">Outage Failover</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">High Avail</span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-black border border-border text-[10px] leading-normal rounded-lg shadow-xl opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 pointer-events-none z-50">
                  <span className="text-primary font-bold">Auto-Failover:</span> Automatically switches models or API providers if OpenAI or Anthropic suffers an outage.
                </div>
              </div>

              {/* Sub-node 6: Live Cost Analytics */}
              <div className="border border-border/85 bg-panel/80 p-2.5 rounded-xl flex items-center justify-between text-xs cursor-help relative group/tooltip">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400">📊</span>
                  <span className="font-semibold text-zinc-300">Live Cost Analytics</span>
                </div>
                <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Real-Time</span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-black border border-border text-[10px] leading-normal rounded-lg shadow-xl opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 pointer-events-none z-50">
                  <span className="text-primary font-bold">Analytics Tracking:</span> Tracks exact token use, speed, and dollar spend per team with zero latency.
                </div>
              </div>
            </div>
          </div>

          {/* Connection 2: Gateway to LLM (Animated Arrow) */}
          <div className="lg:col-span-1 h-12 lg:h-auto flex lg:flex-col items-center justify-center relative">
            <div className="hidden lg:block w-full h-[2px] bg-gradient-to-r from-primary via-border to-border relative">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 rounded-full bg-primary animate-[ping_1.5s_infinite] shadow-[0_0_10px_#10b981]" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="lg:hidden w-[2px] h-full bg-gradient-to-b from-primary via-border to-border relative min-h-[48px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-[ping_1.5s_infinite] shadow-[0_0_10px_#10b981]" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Node 3: Models, Servers & Agents */}
          <div className="lg:col-span-3 border border-border bg-panel/70 p-6 rounded-2xl relative group hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between min-h-[220px]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-2xl pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">☁️</span>
                <div>
                  <h4 className="text-sm font-bold text-white">Models &amp; Servers</h4>
                  <p className="text-[10px] text-zinc-500 font-mono">LLM Providers, MCPs, &amp; Tools</p>
                </div>
              </div>
              <div className="bg-black/90 p-3 rounded-xl border border-border/50 text-[11px] leading-relaxed text-zinc-400">
                Secure, cost-optimized routing to public models (OpenAI, Claude), local LLMs (LLaMA), or autonomous MCP servers and tool registries.
              </div>
            </div>
            <div className="text-[10px] text-zinc-500 font-semibold mt-4">
              🔒 Zero-retention &amp; complete spend transparency
            </div>
          </div>

        </div>

        {/* Global Keyframes CSS injection inside JSX */}
        <style>{`
          @keyframes ping {
            0% { left: 0%; opacity: 1; }
            100% { left: 100%; opacity: 0; }
          }
        `}</style>
      </section>

      {/* Target Audiences / High Contrast Value Propositions */}
      <section className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            One Gateway. Alignment for Your Entire Suite.
          </h2>
          <p className="text-zinc-400">
            AuraLLM bridges the structural gaps between business cost enforcement, cybersecurity protocols, and high-performance development operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CFO / FinOps */}
          <div className="border border-border bg-panel hover:border-primary/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(16,185,129,0.05)]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl text-primary font-bold group-hover:scale-110 transition-transform">
                💵
              </div>
              <h3 className="text-xl font-bold text-white">CFO &amp; FinOps</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Define and enforce granular budget limits per team, per developer, or per model in real-time. Block expensive runaway prompts with immediate automated token quotas.
              </p>
            </div>
            <div className="border-t border-border mt-6 pt-4 text-xs font-semibold text-primary">
              KEY METRIC: 40%+ Cost Savings
            </div>
          </div>

          {/* CISO / Security */}
          <div className="border border-border bg-panel hover:border-primary/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(16,185,129,0.05)]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl text-emerald-400 font-bold group-hover:scale-110 transition-transform">
                🛡
              </div>
              <h3 className="text-xl font-bold text-white">CISO &amp; Compliance</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Scrub Social Security Numbers, API Keys, and credit cards locally via lightning-fast compiled rust/regex before data leaves your network. Maintain complete audit log controls.
              </p>
            </div>
            <div className="border-t border-border mt-6 pt-4 text-xs font-semibold text-emerald-400">
              SECURITY: Zero-Data-Transit SOC2 Ready
            </div>
          </div>

          {/* CTO / DevOps */}
          <div className="border border-border bg-panel hover:border-primary/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-[0_4px_30px_rgba(16,185,129,0.05)]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-xl text-teal-400 font-bold group-hover:scale-110 transition-transform">
                ⚙
              </div>
              <h3 className="text-xl font-bold text-white">CTO &amp; DevOps</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Self-host a single compiled, low-overhead binary. Achieve sub-1.5ms latency overhead, background shadow parallel routing for testing models, and high throughput.
              </p>
            </div>
            <div className="border-t border-border mt-6 pt-4 text-xs font-semibold text-teal-400">
              PERFORMANCE: &lt; 1.5ms Added Latency
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/10 to-transparent p-12 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
          Ready to Reclaim Control of Your AI Spend?
        </h2>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto text-base">
          Get started in under five minutes. Deploy AuraLLM locally, connect to your existing providers, and start enforcing compliance immediately.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/daniospace/aurallm"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-black hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all duration-200"
          >
            Get Started (Free)
          </a>
          <Link
            href="/compare"
            className="rounded-xl border border-border bg-panel px-6 py-3 text-sm font-bold text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
          >
            Compare with LiteLLM
          </Link>
        </div>
      </section>
    </div>
  );
}
