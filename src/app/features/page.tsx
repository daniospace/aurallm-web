"use client";

import React, { useState } from "react";

export default function FeaturesPage() {
  const [inputText, setInputText] = useState(
    "Hello, my email is dev@aurallm.com. My US SSN is 666-20-9981, and my secret token is sk_live_51NxyzABC999. Please analyze our cloud expenses."
  );
  const [redactedText, setRedactedText] = useState("");
  const [activePlayground, setActivePlayground] = useState<"pii" | "shadow">("pii");

  // Client-side simulation of AuraLLM's fast Go-based regex redaction engine
  const handleRedact = () => {
    let result = inputText;
    // Redact SSN: XXX-XX-XXXX or XXX XX XXXX
    result = result.replace(/\b\d{3}-\d{2}-\d{4}\b/g, "[REDACTED_SSN]");
    // Redact secret keys
    result = result.replace(/sk_(live|test)_[a-zA-Z0-9]{12,}/g, "[REDACTED_API_KEY]");
    // Redact emails
    result = result.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, "[REDACTED_EMAIL]");
    // Redact Card Numbers
    result = result.replace(/\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g, "[REDACTED_CARD_NUMBER]");
    setRedactedText(result);
  };

  // Run initial simulation on load/first render
  React.useEffect(() => {
    handleRedact();
  }, [inputText]);

  const configYaml = `# AuraLLM Routing Configuration
# /etc/aurallm/config.yaml

routes:
  - path: /v1/chat/completions
    provider: openai
    model: gpt-4o
    
    # Define shadow routing target
    # This runs 100% asynchronously in the background.
    # Latency of the shadow model will never impact the user.
    shadow_routing:
      - provider: anthropic
        model: claude-3-5-sonnet
        sampling_rate: 1.0 # Route 100% of traffic
        headers:
          X-Shadow-Request: "true"
        
      - provider: local-llama
        model: llama-3.3-70b
        sampling_rate: 0.25 # Sample 25% of traffic for evaluation
`;

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          ⚙ Capabilities &amp; Deep-Dive
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Zero-Trust Compliance. Uncompromised Speed.
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          AuraLLM was engineered with a hyper-focused design: solve the fundamental compliance, routing, and telemetry bottlenecks that plague enterprise LLM adoption.
        </p>
      </div>

      {/* Feature Selector tabs */}
      <div className="flex border-b border-border gap-6">
        <button
          onClick={() => setActivePlayground("pii")}
          className={`pb-4 text-sm font-bold tracking-tight border-b-2 transition-all ${
            activePlayground === "pii"
              ? "border-primary text-primary"
              : "border-transparent text-zinc-400 hover:text-zinc-200"
          }`}
        >
          🔒 Local PII Redaction
        </button>
        <button
          onClick={() => setActivePlayground("shadow")}
          className={`pb-4 text-sm font-bold tracking-tight border-b-2 transition-all ${
            activePlayground === "shadow"
              ? "border-primary text-primary"
              : "border-transparent text-zinc-400 hover:text-zinc-200"
          }`}
        >
          🔄 Shadow Parallel Routing
        </button>
      </div>

      {/* Main Feature Details */}
      {activePlayground === "pii" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              In-Flight Regex Redaction
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Traditional data loss prevention (DLP) engines add hundreds of milliseconds of latency by shipping your texts to external third-party classification APIs (like MS Presidio or AWS Macie). 
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              AuraLLM does this <strong>locally at the edge</strong>. Built in compiled Go, our optimized engine matches pre-compiled regular expressions against incoming token buffers in micro-seconds, scrubbing sensitive values before packing the HTTP request.
            </p>

            <div className="border border-border bg-panel p-4 rounded-xl space-y-2">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">Supported Redactions</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full border border-border">US/EU SSNs</span>
                <span className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full border border-border">Credit Cards</span>
                <span className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full border border-border">API / JWT Keys</span>
                <span className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full border border-border">Email Addresses</span>
                <span className="bg-zinc-800 text-zinc-300 text-xs px-2.5 py-1 rounded-full border border-border">Custom Regex</span>
              </div>
            </div>
          </div>

          {/* Interactive Playground Grid */}
          <div className="lg:col-span-7 border border-border bg-panel rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="border-b border-border bg-black/40 px-6 py-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">Live PII Simulation Playground</span>
              <span className="text-xs text-primary font-bold animate-pulse">● Connected to AuraLLM Local Sandbox</span>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Raw Input Text (Edit Me!)</label>
                <textarea
                  className="w-full h-24 bg-black border border-border rounded-xl p-3 text-sm text-zinc-200 font-mono focus:border-primary/50 focus:outline-none resize-none"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Redacted Egress Stream (Scrubbed)</label>
                  <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full font-bold">Processed in 0.12ms</span>
                </div>
                <div className="w-full h-24 bg-zinc-950 border border-border rounded-xl p-3 text-sm text-emerald-400 font-mono overflow-y-auto whitespace-pre-wrap">
                  {redactedText}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Background Shadow Parallel Routing
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              When migrating from expensive models like GPT-4o to highly optimized models like Claude-3-5-Sonnet or Llama-3-70b, the hardest challenge is validating that the new model produces comparable results on production inputs.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              AuraLLM solves this with <strong>Shadow Routing</strong>. When active, AuraLLM immediately responds to the user using the primary model. Concurrently, it pipes the exact same prompt to one or more background models.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              The secondary results and latencies are recorded into your self-hosted database for prompt analysis, completely in the background, with <strong>zero added latency</strong> to your client applications.
            </p>
          </div>

          {/* Code config presentation */}
          <div className="lg:col-span-7 border border-border bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="border-b border-border bg-panel px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="text-xs text-zinc-500 font-mono">/etc/aurallm/config.yaml</span>
              </div>
              <span className="text-xs text-primary font-bold">YAML Config</span>
            </div>
            <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto bg-black/90">
              <pre className="text-zinc-300">
                <code>{configYaml}</code>
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Other core features */}
      <section className="pt-8 border-t border-border/40">
        <h3 className="text-2xl font-bold text-white tracking-tight text-center mb-12">
          Engineered for Modern Enterprise Operations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-border bg-panel p-6 rounded-xl space-y-3">
            <h4 className="font-bold text-white text-lg">📈 Intelligent Fallback &amp; Retry</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Define automatic model fallbacks. If OpenAI returns a 429 Rate Limit error, immediately failover to Microsoft Azure OpenAI or Anthropic within 2 milliseconds automatically.
            </p>
          </div>

          <div className="border border-border bg-panel p-6 rounded-xl space-y-3">
            <h4 className="font-bold text-white text-lg">💰 Cost &amp; Dollar Budgets</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Set hard dollar caps on APIs. Stop teams from burning thousands on accidental loops or misconfigured long-context testing prompts instantly.
            </p>
          </div>

          <div className="border border-border bg-panel p-6 rounded-xl space-y-3">
            <h4 className="font-bold text-white text-lg">⚡ In-Memory Token Bucket</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              High-throughput leaky token bucket design. Enforce rate-limits per API key locally with sub-millisecond check speeds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
