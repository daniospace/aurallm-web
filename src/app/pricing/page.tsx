"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Is my API Key data safe with AuraLLM?",
      answer: "Absolutely. AuraLLM is 100% self-hosted. It runs as a lightweight compiled binary directly inside your secure private AWS, GCP, or Azure VPC network. We never receive, process, or store your keys, raw prompts, or logging telemetry.",
    },
    {
      question: "Can I run the Developer plan in production?",
      answer: "Yes, the Developer plan is licensed for production use. It is a completely stand-alone Go binary with full features including local PII redaction, background shadow routing, and token bucket budgets. The Pro and Enterprise plans add centralized team administration consoles, SSO, SAML integration, and dedicated enterprise support.",
    },
    {
      question: "What databases are supported for audit logging?",
      answer: "AuraLLM includes a highly optimized logging engine. It supports PostgreSQL, ClickHouse, and SQLite out of the box. Telemetry records are written asynchronously in the background so that log writes never block active LLM client response buffers.",
    },
    {
      question: "How do we receive updates and security patches?",
      answer: "We publish compiled binaries, Docker images, and Helm charts for every release. You can subscribe to our security mailing list or fetch the latest images from our public registries automatically.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-20 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          💎 Transparent Pricing
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Scale Responsibly. Pay for What You Run.
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Start for free with our open-source compiled core, or upgrade to our enterprise plan for advanced multi-tenant control and centralized governance.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {/* Developer */}
        <div className="border border-border bg-panel/50 rounded-2xl p-8 flex flex-col justify-between relative hover:border-zinc-700 transition-all">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-zinc-300">Developer</h3>
              <p className="text-xs text-zinc-500 mt-1">For single builders and small dev teams.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-white">$0</span>
              <span className="text-zinc-500 text-xs">/ forever</span>
            </div>
            <p className="text-xs text-zinc-400">
              Complete compiled static binary to self-host inside your VPC.
            </p>
            <div className="border-t border-border/60 my-4" />
            <ul className="space-y-3 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Single-binary deployment
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Local regex PII redaction
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Background shadow routing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> In-memory token-bucket budgets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Public community support
              </li>
            </ul>
          </div>
          <div className="pt-8">
            <a
              href="http://localhost:8085"
              className="w-full inline-flex items-center justify-center rounded-xl border border-border bg-black py-3 text-xs font-bold text-zinc-200 hover:text-white hover:border-zinc-700 transition-all"
            >
              Download Binary
            </a>
          </div>
        </div>

        {/* Pro */}
        <div className="border border-primary bg-gradient-to-b from-primary/10 to-transparent rounded-2xl p-8 flex flex-col justify-between relative shadow-[0_0_40px_rgba(16,185,129,0.1)]">
          <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-black text-[10px] uppercase tracking-widest font-black px-3 py-1 rounded-full shadow-md">
            Most Popular
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-primary">Pro</h3>
              <p className="text-xs text-primary/75 mt-1">For growing teams requiring centralization.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-white">$99</span>
              <span className="text-zinc-500 text-xs">/ month</span>
            </div>
            <p className="text-xs text-zinc-400">
              Unifies telemetry and budgets across multiple local nodes.
            </p>
            <div className="border-t border-primary/20 my-4" />
            <ul className="space-y-3 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Everything in Developer plan
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Multi-node cluster replication
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> PostgreSQL / Redis state backend
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Unified Admin Dashboard
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Email support (24hr response)
              </li>
            </ul>
          </div>
          <div className="pt-8">
            <a
              href="mailto:sales@aurallm.com?subject=AuraLLM Pro 14-Day Trial Request"
              className="w-full inline-flex items-center justify-center rounded-xl bg-primary py-3 text-xs font-bold text-black hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all"
            >
              Start 14-Day Free Trial
            </a>
          </div>
        </div>

        {/* Enterprise */}
        <div className="border border-border bg-panel/50 rounded-2xl p-8 flex flex-col justify-between relative hover:border-zinc-700 transition-all">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-zinc-300">Enterprise</h3>
              <p className="text-xs text-zinc-500 mt-1">For strict regulated compliance.</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-white">Custom</span>
              <span className="text-zinc-500 text-xs">/ tailored</span>
            </div>
            <p className="text-xs text-zinc-400">
              SLA-backed licenses with dedicated engineering onboarding.
            </p>
            <div className="border-t border-border/60 my-4" />
            <ul className="space-y-3 text-xs text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Everything in Pro plan
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Custom regex dictionary builders
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> SSO, SAML, &amp; OIDC Integration
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> ClickHouse high-volume cluster logs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✔</span> Dedicated 24/7 SLA Engineering Support
              </li>
            </ul>
          </div>
          <div className="pt-8">
            <a
              href="mailto:sales@aurallm.com?subject=Enterprise Inquiry"
              className="w-full inline-flex items-center justify-center rounded-xl border border-border bg-black py-3 text-xs font-bold text-zinc-200 hover:text-white hover:border-zinc-700 transition-all"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto space-y-8 pt-12 border-t border-border/40">
        <h2 className="text-2xl font-bold text-white text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index} 
                className="border border-border bg-panel rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-sm font-bold text-white hover:text-primary transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-primary text-lg font-bold">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-border/40 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
