import React from "react";
import Link from "next/link";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  slug: string;
  category: string;
}

export default function BlogPage() {
  const posts: BlogPost[] = [
    {
      title: "Why We Built AuraLLM: Solving the Compliance-vs-Speed Dilemma in LLM Gateway Design",
      excerpt: "Existing Python or Node.js gateways introduce major cold start penalties and bloat runtime memory footprints. We discuss why compiling AuraLLM into a static 15MB Go binary is the only path forward for secure, low-latency, in-VPC proxying.",
      date: "Oct 24, 2025",
      author: "D. Nurtailakov",
      readTime: "6 min read",
      slug: "why-we-built-aurallm",
      category: "Architecture"
    },
    {
      title: "Architecting High-Throughput Token Bucket Rate Limiters in Go",
      excerpt: "Enforcing dollar and token-level budgets at the gateway level requires lightning-fast atomic state updates. Learn how we built our in-memory token bucket algorithm in Go to achieve sub-millisecond concurrency checks with zero database lookups.",
      date: "Oct 12, 2025",
      author: "AuraLLM Engineering",
      readTime: "8 min read",
      slug: "high-throughput-rate-limiters",
      category: "Engineering"
    },
    {
      title: "Local Regex vs. Remote DLP: Achieving Sub-Millisecond PII Scrubbing",
      excerpt: "Traditional data loss prevention (DLP) engines add up to 500ms of latency by transmitting prompts to third-party endpoints. In this post, we explain how compiling regex dictionaries in Go allows us to scrub credit cards and SSNs in under 0.15ms.",
      date: "Sep 28, 2025",
      author: "CISO Team",
      readTime: "5 min read",
      slug: "local-regex-pii-scrubbing",
      category: "Security"
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          📝 The AuraLLM Blog
        </div>
        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
          Insights on High-Performance FinOps
        </h1>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Deep-dives into systems engineering, concurrency primitives, data compliance protocols, and optimal cloud cost architectures.
        </p>
      </div>

      {/* Featured Post (First item in the list) */}
      <div className="border border-primary bg-primary/[0.01] rounded-3xl p-8 lg:p-12 relative overflow-hidden group hover:border-primary/50 transition-all">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative space-y-6 max-w-4xl">
          <div className="flex items-center gap-4 text-xs">
            <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full font-bold">
              {posts[0].category}
            </span>
            <span className="text-zinc-500 font-medium font-mono">{posts[0].date}</span>
            <span className="text-zinc-500 font-medium">•</span>
            <span className="text-zinc-500 font-medium">{posts[0].readTime}</span>
          </div>

          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight leading-tight group-hover:text-primary transition-colors">
            {posts[0].title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            {posts[0].excerpt}
          </p>

          <div className="flex items-center gap-3 pt-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary font-mono">
              DN
            </div>
            <div>
              <p className="text-xs font-bold text-white">{posts[0].author}</p>
              <p className="text-[10px] text-zinc-500 font-mono">Core Gateway Maintainer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sibling posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.slice(1).map((post, index) => (
          <div 
            key={index} 
            className="border border-border bg-panel hover:border-zinc-800 rounded-2xl p-8 flex flex-col justify-between space-y-6 group transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs">
                <span className="bg-zinc-800 text-zinc-300 border border-border px-2.5 py-0.5 rounded-full font-bold font-mono">
                  {post.category}
                </span>
                <span className="text-zinc-500 font-mono">{post.date}</span>
                <span className="text-zinc-500">•</span>
                <span className="text-zinc-500">{post.readTime}</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center gap-3 border-t border-border/60 pt-4">
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[9px] font-bold text-emerald-400 font-mono">
                AI
              </div>
              <p className="text-xs font-bold text-zinc-300">{post.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter signup */}
      <section className="border border-border bg-panel/50 p-8 sm:p-12 rounded-2xl space-y-6 text-center max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <h3 className="text-xl font-extrabold text-white sm:text-2xl">Subscribe to Our Systems Newsletter</h3>
        <p className="text-sm text-zinc-400 max-w-lg mx-auto">
          Get deep technical write-ups, Go synchronization walkthroughs, and security compliance analyses delivered straight to your inbox monthly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="enter your engineering email"
            className="flex-1 bg-black border border-border rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-primary/50"
          />
          <button className="bg-primary hover:bg-primary-hover text-black font-bold px-6 py-3 rounded-xl text-sm transition-colors">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
