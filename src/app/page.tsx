"use client";

import Link from "next/link";
import {
  Bot,
  Zap,
  Network,
  Terminal,
  Shield,
  Database,
  CheckCircle2,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-body text-slate-900 selection:bg-blue-100">
      {/* Navbar */}
      <div className="fixed top-4 sm:top-6 w-full z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <nav className="w-full max-w-[1280px] bg-white/80 backdrop-blur-md border border-gray-200/60 shadow-sm rounded-full transition-all pointer-events-auto">
          <div className="px-6 md:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-heading font-extrabold text-xl tracking-tight text-slate-900 transition-opacity hover:opacity-80 cursor-pointer">
              AgentLab
            </Link>
            <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-500">
              <Link href="/product" className="hover:text-slate-900 transition-colors">Product</Link>
              <Link href="/solutions" className="hover:text-slate-900 transition-colors">Solutions</Link>
              <Link href="#" className="hover:text-slate-900 transition-colors">Developers</Link>
              <Link href="#" className="hover:text-slate-900 transition-colors">Pricing</Link>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/login" className="text-slate-500 hover:text-slate-900 font-semibold transition-colors">Sign In</Link>
              <Link href="/register">
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-7 font-semibold shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="w-5 h-5"/>
              </Button>
            </div>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-8 bg-blue-50/80 px-4 py-2 rounded-full border border-blue-100">
              Automate with Precision
            </div>
            <h1 className="font-heading text-[3rem] sm:text-[4rem] lg:text-[4.5rem] leading-[1.05] font-extrabold text-slate-900 tracking-[-0.04em] mb-8">
              The Architectural <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">Intelligence Layer.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 mb-10 leading-relaxed md:pr-10 font-medium">
              AgentLab orchestrates complex AI workflows with the precision of a master architect. Build, deploy, and scale autonomous agents in a unified, high-performance environment.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
              <Link href="/register" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-7 text-base font-semibold shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  Start Building Free
                </Button>
              </Link>
              <Link href="#" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 px-8 py-7 text-base font-semibold shadow-sm transition-all border border-slate-200 border-b-slate-300">
                  View Documentation
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-3">
                <img src="https://i.pravatar.cc/100?img=33" alt="User 1" className="w-9 h-9 rounded-full border-2 border-[#fafafa]" />
                <img src="https://i.pravatar.cc/100?img=47" alt="User 2" className="w-9 h-9 rounded-full border-2 border-[#fafafa]" />
                <img src="https://i.pravatar.cc/100?img=12" alt="User 3" className="w-9 h-9 rounded-full border-2 border-[#fafafa]" />
                <img src="https://i.pravatar.cc/100?img=16" alt="User 4" className="w-9 h-9 rounded-full border-2 border-[#fafafa]" />
                <div className="w-9 h-9 rounded-full border-2 border-[#fafafa] bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">+</div>
              </div>
              Trusted by 2,500+ engineering teams globally.
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Background glowing blur for the hero floaty card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/60 to-cyan-100/40 rounded-[40px] transform rotate-3 scale-105 opacity-60 blur-3xl mix-blend-multiply"></div>
            
            {/* Floating Mock UI Card */}
            <div className="relative bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-blue-900/5 p-1 border border-white">
               <div className="bg-white rounded-[1.8rem] p-8 h-[400px] flex flex-col hover:scale-[1.01] transition-transform duration-500">
                  <div className="flex justify-between items-center mb-8">
                     <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-200/80"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200/80"></div>
                      <div className="w-3 h-3 rounded-full bg-slate-200/80"></div>
                     </div>
                     <div className="w-8 h-4 rounded-full bg-slate-100"></div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="h-5 bg-slate-100/80 rounded-md w-3/4"></div>
                    <div className="h-5 bg-slate-100/80 rounded-md w-1/2"></div>
                    <div className="h-5 bg-slate-100/80 rounded-md w-5/6"></div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <div className="flex-1 bg-slate-50 hover:bg-slate-100 transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-slate-400 gap-3 border border-slate-100 shadow-sm cursor-pointer">
                      <Bot className="w-8 h-8" />
                    </div>
                    <div className="flex-1 bg-blue-50/50 hover:bg-blue-50 transition-colors rounded-2xl p-6 flex flex-col items-center justify-center text-blue-500 gap-3 border border-blue-100/50 shadow-sm shadow-blue-500/10 cursor-pointer">
                      <Network className="w-8 h-8" />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 bg-slate-100/50 border-t border-slate-200/50 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4">Capabilities</div>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-[-0.02em]">
                Engineered for the <br/> future of automation.
              </h2>
            </div>
            <p className="text-slate-500 max-w-md text-lg font-medium leading-relaxed">
              Our platform provides the essential primitives for building agents that don't just reply, but act.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Top Left - Large (Spans 2 cols) */}
            <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col lg:flex-row gap-10 overflow-hidden relative group">
              <div className="flex-1 z-10 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 border border-blue-100/50">
                  <Network className="w-6 h-6"/>
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">Multi-Agent Orchestration</h3>
                <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                  Seamlessly connect specialized agents into a unified hive mind. Let your coding agent, research agent, and designer agent work in parallel.
                </p>
                <ul className="space-y-4 mt-auto">
                  <li className="flex items-center gap-3 text-[15px] font-semibold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-500"/> Dynamic Task Delegation
                  </li>
                  <li className="flex items-center gap-3 text-[15px] font-semibold text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-500"/> Shared Context Windows
                  </li>
                </ul>
              </div>
              <div className="flex-1 bg-slate-900 rounded-[1.5rem] relative overflow-hidden min-h-[240px] shadow-inner border border-slate-800">
                <div className="absolute inset-0 bg-blue-500/20 mix-blend-color-dodge z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
                <img 
                  src="https://images.unsplash.com/photo-1620712948343-00842a5a845e?auto=format&fit=crop&q=80&w=800" 
                  className="object-cover w-full h-full opacity-50 scale-105 transition-transform duration-700 group-hover:scale-100 contrast-125" 
                  alt="Neural Network Glowing" 
                />
              </div>
            </div>
            
            {/* Top Right - Dark (Spans 1 col) */}
            <div className="bg-[#0a0f1c] rounded-[2rem] p-8 sm:p-10 shadow-xl flex flex-col group relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/50 text-blue-400 flex items-center justify-center mb-8 border border-white/5">
                  <Terminal className="w-6 h-6"/>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Low-Code Logic</h3>
                <p className="text-slate-400 mb-8 leading-relaxed font-medium">
                  Define complex branching logic and state machines using our visual editor or TypeScript SDK.
                </p>
                <div className="mt-8 bg-[#0f1524] rounded-2xl p-5 font-mono text-[13px] leading-loose text-blue-200 border border-white/5 shadow-inner overflow-x-auto">
                  <code>
                    <span className="text-indigo-400">const</span> <span className="text-blue-100">agent</span> <span className="text-indigo-400">= new</span> <span className="text-blue-400 font-semibold">Agent</span>({`{`}<br/>
                    &nbsp;&nbsp;<span className="text-slate-400">role:</span> <span className="text-emerald-400">'architect'</span>,<br/>
                    &nbsp;&nbsp;<span className="text-slate-400">tools:</span> [<span className="text-emerald-400">'git'</span>, <span className="text-emerald-400">'shell'</span>]<br/>
                    {`});`}
                  </code>
                </div>
              </div>
            </div>
            
            {/* Bottom Left - 1 col */}
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50/50 text-cyan-600 flex items-center justify-center mb-8 border border-cyan-100/50">
                 <Shield className="w-6 h-6"/>
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Enterprise Guardrails</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Robust security layers that monitor every agent action. Prevents hallucination-driven errors and ensures compliance at scale.
              </p>
            </div>

            {/* Bottom Middle - 1 col image */}
            <div className="bg-[#020617] rounded-[2rem] overflow-hidden relative shadow-sm border border-slate-800 group h-[320px] lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-80"></div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                className="object-cover w-full h-full opacity-60 scale-105 transition-transform duration-700 group-hover:scale-100 mix-blend-luminosity hover:mix-blend-normal" 
                alt="Tech Chip Grid" 
              />
            </div>

            {/* Bottom Right - 1 col */}
            <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50/50 text-indigo-600 flex items-center justify-center mb-8 border border-indigo-100/50">
                 <Database className="w-6 h-6"/>
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Real-time Memory</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Agents that learn and remember. Vector-based long-term memory allows your bots to recall user preferences across sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 max-w-[1280px] mx-auto px-6 text-center relative">
        <div className="text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4">The Process</div>
        <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-[-0.02em] mb-24">
          From Vision to Production.
        </h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Divider line for desktop */}
          <div className="absolute top-[34px] left-[15%] right-[15%] h-[1px] bg-slate-200 hidden md:block z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-16 md:gap-8 relative z-10">
            
            <div className="text-center px-4 flex flex-col items-center">
              <div className="w-[70px] h-[70px] rounded-full bg-white text-blue-600 font-bold text-xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(37,99,235,0.15)] border border-slate-100 relative">
                <div className="absolute inset-2 bg-blue-50/50 rounded-full flex items-center justify-center">01</div>
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Define Objectives</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Specify the goals, available tools, and operational constraints for your agent clusters using natural language or code.
              </p>
            </div>

            <div className="text-center px-4 flex flex-col items-center">
              <div className="w-[70px] h-[70px] rounded-full bg-white text-blue-600 font-bold text-xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(37,99,235,0.15)] border border-slate-100 relative">
                 <div className="absolute inset-2 bg-blue-50/50 rounded-full flex items-center justify-center">02</div>
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Prototype & Simulate</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Run agents in our secure sandbox to observe behavior, optimize context usage, and refine decision-making logic.
              </p>
            </div>

            <div className="text-center px-4 flex flex-col items-center">
               <div className="w-[70px] h-[70px] rounded-full bg-white text-blue-600 font-bold text-xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(37,99,235,0.15)] border border-slate-100 relative">
                 <div className="absolute inset-2 bg-blue-50/50 rounded-full flex items-center justify-center">03</div>
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">Deploy Globally</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Push to production with a single click. Our edge infrastructure ensures your agents respond with minimal latency worldwide.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <section className="py-24 px-4 sm:px-6 max-w-[1280px] mx-auto">
        <div className="bg-[#050b14] rounded-[2.5rem] p-12 sm:p-20 text-center relative overflow-hidden border border-slate-800 shadow-2xl">
          {/* Abstract glowing effect */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent mix-blend-screen scale-[2] pointer-events-none"></div>
          <div className="absolute -top-64 -right-64 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.02em] mb-6 leading-[1.1]">
              Ready to build the next generation of autonomy?
            </h2>
            <p className="text-blue-100/60 text-lg mb-12 sm:px-10">
              Join thousands of developers crafting intelligent workflows on AgentLab. No credit card required to start.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-7 text-base font-semibold w-full sm:w-auto shadow-lg shadow-blue-500/25 transition-all">
                Get Started for Free
              </Button>
              <Button className="rounded-full bg-white/5 hover:bg-white/10 text-white px-8 py-7 text-base font-semibold w-full sm:w-auto backdrop-blur-md border border-white/10 transition-all">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 bg-[#fafafa] pt-20 pb-10">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-4 mb-20">
            <div className="col-span-2 md:col-span-3">
              <div className="font-heading font-extrabold text-2xl text-slate-900 mb-6 tracking-tight">AgentLab</div>
              <p className="text-slate-500 text-[15px] leading-relaxed max-w-xs font-medium">
                Building the architectural foundation for the autonomous future.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-5 text-[11px] tracking-widest uppercase">Legal</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-5 text-[11px] tracking-widest uppercase">Support</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Security</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Status</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-5 text-[11px] tracking-widest uppercase">Social</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><Link href="#" className="hover:text-blue-600 transition-colors">Twitter</Link></li>
                <li><Link href="#" className="hover:text-blue-600 transition-colors">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200/60 text-slate-400 text-sm font-medium flex flex-col md:flex-row items-center justify-between">
            <p>© 2026 AgentLab Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
