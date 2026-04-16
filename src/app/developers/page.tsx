"use client";

import Link from "next/link";
import {
  Menu, ArrowRight, Terminal, Webhook, 
  Code2, FileText, Network, Database, Shield, 
  Layers, Activity, PlayCircle, Plug, LayoutDashboard,
  CheckCircle2, Box, PackageOpen, FileCode2, Command, Bot
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DevelopersPage() {
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
              <Link href="/developers" className="text-slate-900 transition-colors">Developers</Link>
              <Link href="/pricing" className="hover:text-slate-900 transition-colors">Pricing</Link>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <Link href="/login" className="text-slate-500 hover:text-slate-900 font-semibold transition-colors">Sign In</Link>
              <Link href="/register">
                <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-7 py-5 font-semibold shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30">
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 max-w-[1280px] mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-8 bg-blue-50/80 px-4 py-2 rounded-full border border-blue-100">
            For Developers
          </div>
          <h1 className="font-heading text-[3rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-extrabold text-slate-900 tracking-[-0.04em] mb-8">
            Build agent workflows with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">speed, control, and precision.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 mb-12 leading-relaxed font-medium tracking-wide max-w-2xl mx-auto">
            AgentLab gives developers the APIs, SDKs, orchestration tools, and deployment infrastructure needed to build production-grade AI agents with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link href="#" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-7 text-base font-semibold shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
                View Documentation
              </Button>
            </Link>
            <Link href="/register" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 px-8 py-7 text-base font-semibold shadow-sm transition-all border border-slate-200 border-b-slate-300">
                Start Building Free
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
             {["TypeScript SDK", "REST API", "Webhooks", "Real-time Events"].map((label, i) => (
               <div key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-600 text-[11px] font-bold rounded-md shadow-sm uppercase tracking-wider">
                 {label}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Developer Entry Points Section */}
      <section className="py-24 bg-slate-100/50 border-t border-slate-200/50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4">Start Building</div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Everything developers need to ship faster.
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Choose your preferred entry point and start building reliable multi-agent systems with full control over logic, memory, and execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Terminal, title: "API Reference", desc: "Explore endpoints for agents, workflows, memory, tools, runs, and deployment.", linkLabel: "Explore API" },
              { icon: Box, title: "SDKs", desc: "Build with TypeScript-first tooling, helper libraries, and clean abstractions.", linkLabel: "View SDKs" },
              { icon: FileText, title: "Guides & Tutorials", desc: "Follow quickstarts and implementation guides for common use cases.", linkLabel: "Read Guides" },
              { icon: Webhook, title: "Webhooks & Events", desc: "Integrate real-time triggers, event streams, and external systems.", linkLabel: "See Events" }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-blue-200/50 transition-all duration-300 group cursor-pointer flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                   <card.icon className="w-5 h-5"/>
                </div>
                <h3 className="font-heading text-[19px] font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-[15px] flex-1 mb-8">
                  {card.desc}
                </p>
                <div className="text-sm font-bold text-slate-600 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                  {card.linkLabel} <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="py-24 md:py-32 max-w-[1280px] mx-auto px-6 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 lg:pr-8">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Start with a simple agent in minutes
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
              Use the AgentLab SDK to define agents, attach tools, and run workflows with just a few lines of code.
            </p>
            <ul className="space-y-4 mb-4">
              <li className="flex items-center gap-3 text-[16px] font-bold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Define roles and tools
              </li>
              <li className="flex items-center gap-3 text-[16px] font-bold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Connect workflows programmatically
              </li>
              <li className="flex items-center gap-3 text-[16px] font-bold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Deploy from development to production
              </li>
            </ul>
          </div>
          <div className="flex-[1.2] w-full relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
            <div className="bg-[#050b14] rounded-[2rem] border border-slate-800 p-2 shadow-2xl relative z-10">
               <div className="bg-[#0f1524] rounded-[1.8rem] flex flex-col border border-white/5 relative overflow-hidden">
                  <div className="flex items-center gap-4 px-6 py-4 border-b border-white/5 bg-white/5">
                     <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                       <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                       <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                     </div>
                     <div className="flex gap-6 text-[13px] font-mono text-slate-400">
                        <div className="text-white border-b-2 border-blue-500 pb-3 -mb-4">deploy.ts</div>
                        <div className="hover:text-slate-300 cursor-pointer">package.json</div>
                     </div>
                  </div>
                  <div className="p-6 md:p-8 font-mono text-[13px] md:text-sm leading-loose text-blue-200 overflow-x-auto">
                    <code>
                      <span className="text-slate-500 italic">// 1. Create a deploy assistant</span><br/>
                      <span className="text-indigo-400">const</span> agent <span className="text-indigo-400">= new</span> <span className="text-blue-400 font-semibold">Agent</span>({`{\n`}
                      &nbsp;&nbsp;<span className="text-slate-300">role:</span> <span className="text-emerald-400">"architect"</span>,<br/>
                      &nbsp;&nbsp;<span className="text-slate-300">tools:</span> [<span className="text-emerald-400">"git"</span>, <span className="text-emerald-400">"shell"</span>, <span className="text-emerald-400">"search"</span>],<br/>
                      &nbsp;&nbsp;<span className="text-slate-300">memory:</span> <span className="text-indigo-400">true</span><br/>
                      {`});`}<br/><br/>
                      
                      <span className="text-slate-500 italic">// 2. Expose via a unified workflow</span><br/>
                      <span className="text-indigo-400">const</span> workflow <span className="text-indigo-400">= new</span> <span className="text-blue-400 font-semibold">Workflow</span>({`{\n`}
                      &nbsp;&nbsp;<span className="text-slate-300">name:</span> <span className="text-emerald-400">"Deploy Assistant"</span>,<br/>
                      &nbsp;&nbsp;<span className="text-slate-300">agents:</span> [agent]<br/>
                      {`});`}<br/><br/>

                      <span className="text-slate-500 italic">// 3. Execute the workflow</span><br/>
                      <span className="text-indigo-400">await</span> workflow.<span className="text-blue-400">run</span>({`{\n`}
                      &nbsp;&nbsp;<span className="text-slate-300">objective:</span> <span className="text-emerald-400">"Review deployment risks and prepare checklist"</span><br/>
                      {`});`}
                    </code>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-24 bg-slate-100/50 border-y border-slate-200/50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-20 max-w-2xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Developer-first platform capabilities
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              From local prototyping to enterprise deployment, AgentLab supports the full lifecycle of intelligent systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Network, title: "Multi-Agent Runtime", desc: "Run specialized agents together with shared context and controlled delegation." },
              { icon: Database, title: "Memory APIs", desc: "Store and retrieve long-term context across workflows and user sessions." },
              { icon: Plug, title: "Tool Calling", desc: "Connect internal tools, external APIs, databases, and execution environments." },
              { icon: Activity, title: "Observability", desc: "Inspect runs, debug failures, trace actions, and review execution logs." },
              { icon: Shield, title: "Guardrails", desc: "Apply validation, approval layers, and action policies to reduce risk." },
              { icon: PackageOpen, title: "Deployment", desc: "Ship globally with secure infrastructure, webhooks, and low-latency edge delivery." }
            ].map((cap, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-5 border border-blue-100">
                   <cap.icon className="w-5 h-5"/>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">{cap.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quickstart Paths Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
         <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Choose your build path
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Whether you prefer code, low-code, or enterprise integration, AgentLab adapts to how your team works.
            </p>
         </div>

         <div className="grid lg:grid-cols-3 gap-6">
            {/* Path 1 */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-xl transition-shadow flex flex-col group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-slate-700">
                  <Terminal className="w-5 h-5"/>
               </div>
               <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">SDK Quickstart</h3>
               <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">
                 For developers who want to build directly with TypeScript and full programmatic control.
               </p>
               <ul className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-semibold text-slate-700">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Install package</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Initialize agent</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Run workflow</li>
               </ul>
            </div>
            
            {/* Path 2 */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-xl transition-shadow flex flex-col group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-slate-700">
                  <LayoutDashboard className="w-5 h-5"/>
               </div>
               <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Visual Builder</h3>
               <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">
                 For teams that want to prototype faster with a workflow editor and minimal code.
               </p>
               <ul className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-semibold text-slate-700">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Drag-and-drop flows</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> State transitions</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Test in sandbox</li>
               </ul>
            </div>

            {/* Path 3 */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-xl transition-shadow flex flex-col group relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center mb-6 text-slate-700">
                  <Globe2 className="w-5 h-5"/>
               </div>
               <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Enterprise Integration</h3>
               <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-1">
                 For organizations connecting internal systems, compliance controls, and production deployment.
               </p>
               <ul className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-semibold text-slate-700">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> API integrations</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Webhook events</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Audit logging</li>
               </ul>
            </div>
         </div>
      </section>

      {/* Docs / Resources block */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
             <div className="lg:w-1/3">
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                  Documentation and resources
                </h2>
                <p className="text-slate-500 text-[17px] font-medium leading-relaxed mb-10">
                  Learn the platform faster with clear technical resources, practical examples, and implementation guides.
                </p>
                <div className="bg-white border text-left border-blue-100 shadow-lg shadow-blue-500/5 rounded-2xl p-6 cursor-pointer group">
                   <div className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-3">Recommended First Read</div>
                   <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Build your first multi-agent workflow</h4>
                   <p className="text-sm text-slate-500 font-medium">A step-by-step introduction from installation to testing a live agent setup.</p>
                </div>
             </div>
             
             <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
               {[
                 { icon: FileCode2, title: "Getting Started", desc: "Platform overview and setup" },
                 { icon: Shield, title: "Authentication", desc: "API keys and security tokens" },
                 { icon: Bot, title: "Agents API", desc: "Create, configure, and manage agents" },
                 { icon: Database, title: "Memory API", desc: "Manage session recall and vectors" },
                 { icon: Layers, title: "Workflow Builder", desc: "Node-based visual orchestration" },
                 { icon: Command, title: "Deployment Guide", desc: "Pushing agents to production" },
                 { icon: Webhook, title: "Webhooks", desc: "Handling asynchronous events" },
                 { icon: CheckCircle2, title: "Best Practices", desc: "Prompting, logic, and safety" }
               ].map((doc, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all cursor-pointer group flex items-start gap-4">
                     <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                        <doc.icon className="w-4 h-4"/>
                     </div>
                     <div>
                        <h4 className="font-bold text-slate-800 text-[15px] mb-1 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                          {doc.title}
                        </h4>
                        <p className="text-slate-500 text-xs font-medium">{doc.desc}</p>
                     </div>
                  </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 w-full bg-[#f8fafc] rounded-[2rem] border border-slate-200 p-8 shadow-inner relative justify-center items-center flex min-h-[300px]">
             <div className="relative w-full max-w-sm">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-blue-200 border-dashed rounded-full animate-[spin_60s_linear_infinite] opacity-50 z-0"></div>
                
                <div className="relative z-10 mx-auto w-20 h-20 bg-white border border-blue-200 shadow-xl shadow-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 mb-0">
                   <Network className="w-8 h-8"/>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center font-bold text-slate-700 text-xs">
                   GH
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center font-bold text-slate-700 text-xs">
                   DB
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center font-bold text-slate-700 text-xs">
                   API
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center justify-center font-bold text-slate-700 text-xs">
                   W-h
                </div>
             </div>
          </div>

          <div className="flex-1 lg:pl-8">
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Connect AgentLab to your stack
            </h3>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Bring your agents closer to production by integrating tools, services, and internal systems your teams already rely on.
            </p>
            <div className="flex flex-wrap gap-3">
              {["GitHub", "Slack", "Notion", "PostgreSQL", "MongoDB", "REST APIs", "Webhooks", "Internal Tools"].map(tool => (
                 <div key={tool} className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-sm shadow-sm rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default">
                    {tool}
                 </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Performance Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-4xl">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Built for serious production use
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-2xl">
                Developers choose AgentLab because it combines flexibility, reliability, and visibility in one platform.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-px">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 shadow-sm flex flex-col justify-center text-left">
               <div className="font-heading text-3xl font-extrabold text-blue-400 mb-2">99.9%</div>
               <div className="text-white font-bold text-[15px] mb-1">Workflow reliability</div>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 shadow-sm flex flex-col justify-center text-left">
               <div className="font-heading text-3xl font-extrabold text-blue-400 mb-2">Real-time</div>
               <div className="text-white font-bold text-[15px] mb-1">Execution tracing</div>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 shadow-sm flex flex-col justify-center text-left">
               <div className="font-heading text-3xl font-extrabold text-blue-400 mb-2">Global</div>
               <div className="text-white font-bold text-[15px] mb-1">Low-latency deployment</div>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-white/10 shadow-sm flex flex-col justify-center text-left">
               <div className="font-heading text-3xl font-extrabold text-blue-400 mb-2">2,500+</div>
               <div className="text-white font-bold text-[15px] mb-1">Engineering teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <section className="py-24 px-4 sm:px-6 max-w-[1280px] mx-auto">
        <div className="bg-[#050b14] rounded-[2.5rem] p-12 sm:p-20 text-center relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent mix-blend-screen scale-[2] pointer-events-none"></div>
          <div className="absolute -top-64 -right-64 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-[-0.02em] mb-6 leading-[1.1]">
              Start building with the tools your team actually needs.
            </h2>
            <p className="text-blue-100/60 text-lg mb-12 sm:px-10">
              Use APIs, SDKs, observability, and deployment infrastructure designed for production-grade AI workflows.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-7 text-base font-semibold w-full sm:w-auto shadow-lg shadow-blue-500/25 transition-all">
                View Documentation
              </Button>
              <Button className="rounded-full bg-white/5 hover:bg-white/10 text-white px-8 py-7 text-base font-semibold w-full sm:w-auto backdrop-blur-md border border-white/10 transition-all">
                Start Building Free
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

// Icon hack to substitute missing icons
const BaseDatabaseIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
)
const Globe2 = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
)
