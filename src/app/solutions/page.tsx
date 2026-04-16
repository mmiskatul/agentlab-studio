"use client";

import Link from "next/link";
import {
  Menu, Bot, Shield, Network, Zap, 
  Terminal, FileSearch, Users2, Briefcase, 
  Settings, Layers, Database, ArrowRight,
  Code2, HeartPulse, ShoppingBag, Landmark,
  Building2, CheckCircle2, GitMerge, Plug,
  LineChart, Globe2, Quote, LayoutDashboard,
  BellRing, Laptop
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
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
              <Link href="/solutions" className="text-slate-900 transition-colors">Solutions</Link>
              <Link href="#" className="hover:text-slate-900 transition-colors">Developers</Link>
              <Link href="#" className="hover:text-slate-900 transition-colors">Pricing</Link>
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
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-8 bg-blue-50/80 px-4 py-2 rounded-full border border-blue-100">
              Solutions for Modern Teams
            </div>
            <h1 className="font-heading text-[3rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-extrabold text-slate-900 tracking-[-0.04em] mb-8">
              AI systems tailored for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">real-world operations.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 mb-10 leading-relaxed md:pr-10 font-medium tracking-wide">
              From engineering teams to enterprise operations, AgentLab helps organizations build intelligent workflows that automate execution, preserve context, and scale securely.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <Link href="/register" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-7 text-base font-semibold shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  Explore Solutions
                </Button>
              </Link>
              <Link href="#" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 px-8 py-7 text-base font-semibold shadow-sm transition-all border border-slate-200 border-b-slate-300">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-200/50 to-blue-200/40 rounded-[40px] transform rotate-3 scale-105 opacity-60 blur-3xl mix-blend-multiply pointer-events-none"></div>
            
            {/* Floating Operations Dashboard Mockup */}
            <div className="relative bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-2xl shadow-blue-900/10 p-2 border border-white">
               <div className="bg-white rounded-[1.8rem] p-6 h-[440px] flex flex-col border border-slate-100 relative overflow-hidden group">
                  
                  {/* Top Bar */}
                  <div className="flex justify-between items-center mb-6 py-2 border-b border-slate-100/60 pb-4">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                         <Layers className="w-4 h-4"/>
                       </div>
                       <div className="font-bold text-slate-800 text-sm">Operations Hub</div>
                    </div>
                    <div className="flex gap-4">
                       <div className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded-full border border-slate-200">
                         Europe Region
                       </div>
                       <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                         <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Online</div>
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#fafafa] rounded-xl p-4 border border-slate-100/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-default">
                       <div className="flex justify-between items-center mb-4">
                         <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500"><Terminal className="w-4 h-4"/></div>
                         <div className="flex items-center text-emerald-500 text-xs font-bold gap-1"><ArrowRight className="w-3 h-3 -rotate-45"/> 12%</div>
                       </div>
                       <div className="text-xl font-extrabold text-slate-800">4,289</div>
                       <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">Eng. Workflows</div>
                    </div>
                    <div className="bg-[#fafafa] rounded-xl p-4 border border-slate-100/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow cursor-default">
                       <div className="flex justify-between items-center mb-4">
                         <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500"><Users2 className="w-4 h-4"/></div>
                       </div>
                       <div className="text-xl font-extrabold text-slate-800">12.4k</div>
                       <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">Support Tickets</div>
                    </div>
                    <div className="bg-blue-600 rounded-xl p-4 shadow-lg shadow-blue-500/20 flex flex-col justify-between relative overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer">
                       <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/10 blur-xl rounded-full"></div>
                       <div className="flex justify-between items-center mb-4 relative z-10">
                         <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white"><Zap className="w-4 h-4"/></div>
                       </div>
                       <div className="text-xl font-extrabold text-white relative z-10">99.98%</div>
                       <div className="text-[10px] uppercase tracking-widest text-blue-200 font-bold mt-1 relative z-10">Success Rate</div>
                    </div>
                  </div>

                  <div className="flex-1 bg-slate-50 border border-slate-100 rounded-xl p-4 overflow-hidden relative">
                     <div className="text-xs font-bold text-slate-700 mb-4 px-1 tracking-wide">Live Agent Activity</div>
                     <div className="space-y-3">
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-slate-100/80">
                           <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                           <div className="flex-1 text-sm font-semibold text-slate-700">Code Review Agent</div>
                           <div className="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded font-medium border border-slate-100">Reviewing PR #402</div>
                        </div>
                        <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-slate-100/80 opacity-80 mt-2">
                           <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                           <div className="flex-1 text-sm font-semibold text-slate-700">Support Router</div>
                           <div className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-medium border border-emerald-100">Escalating Ticket</div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid Section (WHO IT'S FOR) */}
      <section className="py-24 bg-slate-100/50 border-t border-slate-200/50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4">Who It's For</div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Built for every team driving intelligent automation.
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Whether you are streamlining internal workflows or launching customer-facing AI systems, AgentLab adapts to your operational model.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Terminal,
                title: "Engineering Teams",
                desc: "Automate code review, deployment workflows, incident triage, and internal developer operations.",
                color: "text-blue-600",
                bg: "bg-blue-50"
              },
              {
                icon: Users2,
                title: "Customer Support",
                desc: "Build support agents that handle multi-step tasks, remember context, and assist teams with faster resolutions.",
                color: "text-emerald-600",
                bg: "bg-emerald-50"
              },
              {
                icon: FileSearch,
                title: "Research & Analysis",
                desc: "Run structured research pipelines, summarize findings, gather sources, and coordinate knowledge workflows.",
                color: "text-purple-600",
                bg: "bg-purple-50"
              },
              {
                icon: Settings,
                title: "Operations Teams",
                desc: "Improve internal execution with approval flows, automated reporting, process copilots, and task orchestration.",
                color: "text-amber-600",
                bg: "bg-amber-50"
              },
              {
                icon: Shield,
                title: "Enterprise IT",
                desc: "Deploy secure AI systems with policy enforcement, access control, monitoring, and enterprise-grade governance.",
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              },
              {
                icon: LineChart,
                title: "Product & Growth",
                desc: "Use intelligent agents for experimentation support, data workflows, user research synthesis, and internal productivity.",
                color: "text-rose-600",
                bg: "bg-rose-50"
              }
            ].map((sol, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group cursor-pointer flex flex-col relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${sol.bg}`}></div>
                <div className={`w-12 h-12 rounded-2xl ${sol.bg} ${sol.color} border border-white/50 flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 duration-300`}>
                   <sol.icon className="w-5 h-5"/>
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-3 relative z-10">{sol.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-[15px] flex-1 relative z-10">
                  {sol.desc}
                </p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
         <div className="max-w-3xl mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Solutions across industries
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              AgentLab helps organizations operationalize AI across high-value business functions while maintaining performance, trust, and control.
            </p>
         </div>

         <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-[2rem] p-10 sm:p-12 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-50/50 to-transparent pointer-events-none"></div>
               <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-500/30">
                  <Laptop className="w-6 h-6"/>
               </div>
               <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">SaaS & Technology</h3>
               <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-8 max-w-md">
                 Accelerate engineering, support, and internal workflows with coordinated AI systems.
               </p>
               <div className="text-blue-600 font-bold text-sm tracking-wide uppercase group-hover:underline decoration-2 underline-offset-4">View Use Cases</div>
            </div>

            <div className="bg-white rounded-[2rem] p-10 sm:p-12 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-slate-100/80 to-transparent pointer-events-none"></div>
               <div className="w-14 h-14 rounded-2xl bg-slate-800 text-white flex items-center justify-center mb-8 shadow-lg shadow-slate-900/30">
                  <Landmark className="w-6 h-6"/>
               </div>
               <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">Finance & Compliance</h3>
               <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-8 max-w-md">
                 Support sensitive processes with memory, governance, review layers, and traceable decision workflows.
               </p>
               <div className="text-slate-800 font-bold text-sm tracking-wide uppercase group-hover:underline decoration-2 underline-offset-4">View Use Cases</div>
            </div>

            <div className="bg-white rounded-[2rem] p-10 sm:p-12 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-emerald-50/50 to-transparent pointer-events-none"></div>
               <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/30">
                  <HeartPulse className="w-6 h-6"/>
               </div>
               <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">Healthcare & Services</h3>
               <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-8 max-w-md">
                 Enable structured assistance, knowledge retrieval, documentation support, and process automation.
               </p>
               <div className="text-emerald-600 font-bold text-sm tracking-wide uppercase group-hover:underline decoration-2 underline-offset-4">View Use Cases</div>
            </div>

            <div className="bg-white rounded-[2rem] p-10 sm:p-12 border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-amber-50/50 to-transparent pointer-events-none"></div>
               <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-amber-500/30">
                  <ShoppingBag className="w-6 h-6"/>
               </div>
               <h3 className="font-heading text-2xl font-bold text-slate-900 mb-4">E-commerce & Retail</h3>
               <p className="text-slate-500 font-medium leading-relaxed text-[16px] mb-8 max-w-md">
                 Optimize support, operations, product workflows, and insight generation with intelligent agents.
               </p>
               <div className="text-amber-600 font-bold text-sm tracking-wide uppercase group-hover:underline decoration-2 underline-offset-4">View Use Cases</div>
            </div>

         </div>
      </section>


      {/* Detailed Solution Blocks */}
      <section className="py-24 md:py-32 bg-slate-100/50 border-y border-slate-200/50 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 space-y-32">
          
          {/* Block 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 lg:pr-8">
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Automate workflows without losing human control
              </h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                AgentLab allows teams to introduce autonomous execution while preserving review steps, approval checkpoints, and operational boundaries.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                  Human-in-the-loop workflows
                </li>
                <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                  Approval and validation layers
                </li>
                <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                  Action tracking and transparency
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full bg-white rounded-[2rem] border border-slate-200 p-8 shadow-xl shadow-slate-200/50 relative">
               <div className="relative z-10 w-full h-[320px] flex items-center justify-center">
                   <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-6 shadow-xl flex flex-col gap-6 relative">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                         <div className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                           <LayoutDashboard className="w-4 h-4 text-amber-500"/> Deployment Approval
                         </div>
                         <div className="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded uppercase tracking-widest border border-amber-100">Waiting</div>
                      </div>
                      
                      <div className="space-y-2">
                         <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Requested Action</div>
                         <div className="text-sm font-mono bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-700">
                           Merge branch <span className="text-blue-600 bg-blue-50 px-1 rounded">bot/fix-auth</span> into main
                         </div>
                      </div>
                      
                      <div className="flex gap-3 pt-2">
                         <div className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 cursor-pointer rounded-lg py-2 flex justify-center text-sm font-bold text-slate-600 transition-colors">Reject</div>
                         <div className="flex-1 bg-blue-600 hover:bg-blue-700 cursor-pointer shadow-md shadow-blue-500/20 rounded-lg py-2 flex justify-center text-sm font-bold text-white transition-colors">Approve</div>
                      </div>
                   </div>
               </div>
            </div>
          </div>

          {/* Block 2 (Reversed) */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 w-full bg-[#050b14] rounded-[2rem] border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
               <div className="relative z-10 w-full h-[320px] flex flex-col items-center justify-center">
                   <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                      <div className="bg-[#0f1524] rounded-xl p-4 border border-white/10 flex items-center gap-4">
                         <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center"><Terminal className="w-5 h-5"/></div>
                         <div>
                            <div className="text-white font-bold text-sm">CLI Tools</div>
                            <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mt-1">Connected</div>
                         </div>
                      </div>
                      <div className="bg-[#0f1524] rounded-xl p-4 border border-white/10 flex items-center gap-4">
                         <div className="w-10 h-10 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center"><Layers className="w-5 h-5"/></div>
                         <div>
                            <div className="text-white font-bold text-sm">Internal API</div>
                            <div className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest mt-1">Connected</div>
                         </div>
                      </div>
                      <div className="bg-[#0f1524] rounded-xl p-4 border border-white/10 flex items-center gap-4 col-span-2">
                         <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center"><BaseDatabaseIcon className="w-5 h-5"/></div>
                         <div className="flex-1 flex items-center justify-between">
                            <div>
                              <div className="text-white font-bold text-sm">PostgreSQL DB</div>
                              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Read Only</div>
                            </div>
                            <div className="px-3 py-1 rounded bg-white/10 text-white text-xs font-semibold cursor-pointer hover:bg-white/20 transition-colors">Configure</div>
                         </div>
                      </div>
                   </div>
               </div>
            </div>
            
            <div className="flex-1 lg:pl-8">
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Connect agents to the tools your teams already use
              </h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                Integrate internal systems, APIs, data sources, and external services to make your workflows actually useful in production.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                  API and tool connectivity
                </li>
                <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                  Internal system integration
                </li>
                <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                  Unified execution layer
                </li>
              </ul>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1 lg:pr-8">
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                Scale from experiments to production systems
              </h3>
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                Start with one focused workflow, then expand into a complete operational AI layer across teams, departments, and global environments.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                  Deployment-ready infrastructure
                </li>
                <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                  Real-time monitoring
                </li>
                <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                  Global low-latency delivery
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full bg-white rounded-[2rem] border border-slate-200 p-8 shadow-xl shadow-slate-200/50 relative">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-50/50 via-transparent to-transparent rounded-[2rem] pointer-events-none"></div>
               <div className="relative z-10 w-full h-[320px] flex flex-col gap-6">
                   
                   <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                         <div className="text-sm font-bold text-slate-800 flex items-center gap-2"><Globe2 className="w-4 h-4 text-blue-500"/> Global Distribution</div>
                         <div className="text-xs font-bold text-slate-400 tracking-wide uppercase">Last 24h</div>
                      </div>
                      <div className="flex items-end gap-2 h-24 mb-2">
                        {[40, 60, 30, 80, 50, 90, 45, 75, 55, 85, 60].map((h, idx) => (
                           <div key={idx} className="flex-1 bg-blue-100 rounded-t-sm hover:bg-blue-400 transition-colors relative group cursor-pointer" style={{ height: `${h}%` }}>
                             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{h * 120} req</div>
                           </div>
                        ))}
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col">
                         <span className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-1">US-East</span>
                         <span className="font-bold text-slate-800 text-xl flex items-center gap-2">12ms <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div></span>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col">
                         <span className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-1">EU-Central</span>
                         <span className="font-bold text-slate-800 text-xl flex items-center gap-2">18ms <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div></span>
                      </div>
                   </div>

               </div>
            </div>
          </div>

        </div>
      </section>

      {/* Use Case Showcase Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
         <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Popular solution use cases
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Examples of how modern teams use AgentLab to increase speed, reliability, and operational leverage.
            </p>
         </div>

         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
           {[
             { icon: BellRing, title: "AI incident triage" },
             { icon: Briefcase, title: "Internal knowledge copilots" },
             { icon: GitMerge, title: "Customer ticket routing" },
             { icon: FileSearch, title: "Automated research assistants" },
             { icon: Shield, title: "Compliance workflow support" },
             { icon: LineChart, title: "Operations reporting automation" }
           ].map((uc, idx) => (
             <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors shrink-0">
                  <uc.icon className="w-4 h-4"/>
                </div>
                <div className="flex items-center h-10 font-bold text-slate-800 text-[15px] leading-tight pr-4">
                  {uc.title}
                </div>
             </div>
           ))}
         </div>
      </section>


      {/* WHY AGENTLAB SECTION */}
      <section className="py-24 bg-[#0a0f1c] text-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-4xl">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Why organizations choose AgentLab
              </h2>
              <p className="text-blue-100/70 text-lg font-medium leading-relaxed max-w-2xl">
                Unlike simple chat tools, AgentLab is designed to support structured execution, persistent memory, system integration, and reliable production workflows.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             <div className="bg-[#121929] rounded-[1.5rem] p-8 border border-white/5 flex flex-col shadow-xl">
               <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                 <Network className="w-5 h-5"/>
               </div>
               <h3 className="font-bold text-lg text-white mb-2 leading-snug">Multi-agent coordination at scale</h3>
             </div>
             <div className="bg-[#121929] rounded-[1.5rem] p-8 border border-white/5 flex flex-col shadow-xl">
               <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
                 <Database className="w-5 h-5"/>
               </div>
               <h3 className="font-bold text-lg text-white mb-2 leading-snug">Memory-aware execution across sessions</h3>
             </div>
             <div className="bg-[#121929] rounded-[1.5rem] p-8 border border-white/5 flex flex-col shadow-xl">
               <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                 <Shield className="w-5 h-5"/>
               </div>
               <h3 className="font-bold text-lg text-white mb-2 leading-snug">Secure governance for enterprise workflows</h3>
             </div>
             <div className="bg-[#121929] rounded-[1.5rem] p-8 border border-white/5 flex flex-col shadow-xl">
               <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                 <Code2 className="w-5 h-5"/>
               </div>
               <h3 className="font-bold text-lg text-white mb-2 leading-snug">Flexible development with SDK options</h3>
             </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10">
             <div className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">2,500+</div>
                <div className="text-blue-100/60 text-sm font-semibold">Engineering teams</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">99.9%</div>
                <div className="text-blue-100/60 text-sm font-semibold">Workflow reliability</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">40%</div>
                <div className="text-blue-100/60 text-sm font-semibold">Faster cycles</div>
             </div>
             <div className="text-center">
                <div className="text-3xl font-extrabold text-white mb-1">Global</div>
                <div className="text-blue-100/60 text-sm font-semibold">Deployment architecture</div>
             </div>
          </div>
        </div>
      </section>

      {/* Customer Story / Trust Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-6 text-center">
         <h2 className="font-heading text-xl font-bold text-slate-400 uppercase tracking-widest mb-16">
            Trusted by teams building serious AI workflows
         </h2>
         <div className="max-w-4xl mx-auto">
            <Quote className="w-12 h-12 text-blue-100 mx-auto mb-8"/>
            <p className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-tight mb-10 text-balance">
              "AgentLab helped us move from isolated AI experiments to a real operational system across engineering and support."
            </p>
            <div className="flex flex-col items-center justify-center">
               <div className="w-12 h-12 bg-slate-200 rounded-full mb-4">
                 <img src="https://i.pravatar.cc/150?img=68" alt="Profile" className="w-full h-full rounded-full border-2 border-white shadow-sm"/>
               </div>
               <div className="font-bold text-slate-900">Sarah Jenkins</div>
               <div className="text-sm font-medium text-slate-500">VP of Platform, TechFlow Enterprise</div>
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
              Find the right solution for your team.
            </h2>
            <p className="text-blue-100/60 text-lg mb-12 sm:px-10">
              Whether you are improving support, engineering, research, or operations, AgentLab gives you the infrastructure to build intelligent execution systems with confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-7 text-base font-semibold w-full sm:w-auto shadow-lg shadow-blue-500/25 transition-all">
                Explore Solutions
              </Button>
              <Button className="rounded-full bg-white/5 hover:bg-white/10 text-white px-8 py-7 text-base font-semibold w-full sm:w-auto backdrop-blur-md border border-white/10 transition-all">
                Get Started for Free
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
            <p>© 2024 AgentLab Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
// Helper icon to replace Database
const BaseDatabaseIcon = ({className}: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
)
