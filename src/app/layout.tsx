import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AuraLLM: The Cloud-Native FinOps AI Gateway",
  description: "Secure, Cost-Enforced LLM Infrastructure with Real-Time Budgets, Local PII Redaction, and Shadow Parallel Routing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark selection:bg-primary selection:text-black">
      <body className="min-h-full bg-black text-zinc-100 flex flex-col antialiased">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-200px] left-1/4 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute top-[-150px] right-1/4 w-[500px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        </div>

        {/* Global Navbar */}
        <header className="sticky top-0 z-50 w-full border-b border-border bg-black/60 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between gap-4">
              {/* Logo */}
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="relative">
                    <span className="text-xl animate-pulse">🟢</span>
                    <span className="absolute inset-0 bg-primary/40 rounded-full blur-md scale-125 opacity-75 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text">
                    AuraLLM
                  </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
                  <Link href="/compare" className="hover:text-primary transition-colors">Compare</Link>
                  <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
                  <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                  <Link href="/security" className="hover:text-primary transition-colors">Security</Link>
                  <Link href="/customers" className="hover:text-primary transition-colors">Customers</Link>
                  <Link href="/changelog" className="hover:text-primary transition-colors">Changelog</Link>
                  <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                </nav>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                {/* GitHub Tag */}
                <a 
                  href="https://github.com/aurallm/gateway" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-panel px-3 py-1 text-xs font-semibold text-zinc-300 hover:text-primary hover:border-primary/50 transition-all"
                >
                  <span>⭐</span>
                  <span>1.2k</span>
                </a>

                {/* Launch Console */}
                <a 
                  href="http://localhost:8085" 
                  className="relative inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-black hover:bg-primary-hover shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300"
                >
                  Launch Console
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="border-t border-border bg-panel relative z-10 py-12 mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🟢</span>
                  <span className="text-lg font-bold text-white tracking-wider">AuraLLM</span>
                </div>
                <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                  The developer-first, cloud-native FinOps AI gateway. Self-host in under 5 minutes for strict compliance, immediate cost controls, and secure data proxying.
                </p>
                {/* Operational Status */}
                <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  All systems operational
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-200 mb-4">Product</h4>
                <ul className="flex flex-col gap-2.5 text-sm text-zinc-400">
                  <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
                  <li><Link href="/compare" className="hover:text-primary transition-colors">Compare LiteLLM</Link></li>
                  <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing Plans</Link></li>
                  <li><Link href="/security" className="hover:text-primary transition-colors">Security Architecture</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-200 mb-4">Resources</h4>
                <ul className="flex flex-col gap-2.5 text-sm text-zinc-400">
                  <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                  <li><Link href="/changelog" className="hover:text-primary transition-colors">Changelog</Link></li>
                  <li><Link href="/customers" className="hover:text-primary transition-colors">Customers</Link></li>
                  <li><a href="http://localhost:8085" className="hover:text-primary transition-colors">Launch Console</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
              <p>&copy; {new Date().getFullYear()} AuraLLM Inc. All rights reserved. Strictly confidential & secure.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="https://github.com/aurallm/gateway" className="hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
