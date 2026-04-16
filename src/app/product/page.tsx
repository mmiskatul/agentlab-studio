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
  Menu,
  ArrowRight,
  Layers,
  Lock,
  MessageSquareCode,
  HardDriveUpload,
  Cpu,
  BarChart4,
  Activity,
  Code2,
  Workflow,
  Key,
  Users2,
  Briefcase,
  FileSearch,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
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
              <Link href="/product" className="text-slate-900 transition-colors">Product</Link>
              <Link href="/solutions" className="hover:text-slate-900 transition-colors">Solutions</Link>
              <Link href="/developers" className="hover:text-slate-900 transition-colors">Developers</Link>
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
              Product Platform
            </div>
            <h1 className="font-heading text-[3rem] sm:text-[3.5rem] lg:text-[4rem] leading-[1.05] font-extrabold text-slate-900 tracking-[-0.04em] mb-8">
              Everything you need to build, manage, and{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">scale AI agents.</span>
            </h1>
            <p className="text-lg sm:text-lg text-slate-500 mb-10 leading-relaxed md:pr-10 font-medium tracking-wide">
              AgentLab gives teams a unified platform to design intelligent workflows, orchestrate specialized agents, manage memory, enforce guardrails, and deploy reliable automation at scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
              <Link href="/register" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-7 text-base font-semibold shadow-lg shadow-blue-500/25 transition-all hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  Start Building Free
                </Button>
              </Link>
              <Link href="#" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 px-8 py-7 text-base font-semibold shadow-sm transition-all border border-slate-200 border-b-slate-300">
                  Book Demo
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            {/* Background glowing blur for the hero floaty card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/50 to-indigo-100/40 rounded-[40px] transform -rotate-2 scale-105 opacity-70 blur-3xl mix-blend-multiply pointer-events-none"></div>
            
            {/* Floating Premium Dashboard Mockup */}
            <div className="relative bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-2xl shadow-slate-300/40 p-2 borders border-white">
               <div className="bg-[#fafbfc] rounded-[1.8rem] p-4 h-[440px] flex border border-slate-100 relative overflow-hidden group">
                  
                  {/* Left Sidebar */}
                  <div className="w-16 border-r border-slate-200/60 flex flex-col items-center py-6 gap-6 relative z-10">
                     <div className="w-8 h-8 rounded-lg bg-blue-600 shadow-md shadow-blue-500/30 flex items-center justify-center mb-4">
                        <Bot className="w-4 h-4 text-white"/>
                     </div>
                     <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 flex items-center justify-center hover:text-blue-600 hover:border-blue-200 transition-colors cursor-pointer">
                        <Network className="w-4 h-4"/>
                     </div>
                     <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 flex items-center justify-center hover:text-blue-600 hover:border-blue-200 transition-colors cursor-pointer">
                        <Database className="w-4 h-4"/>
                     </div>
                     <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-400 flex items-center justify-center hover:text-blue-600 hover:border-blue-200 transition-colors cursor-pointer">
                        <Settings className="w-4 h-4"/>
                     </div>
                  </div>

                  {/* Main Dashboard Content */}
                  <div className="flex-1 pl-6 py-4 flex flex-col relative z-10">
                     {/* Top nav */}
                     <div className="flex justify-between items-center mb-8">
                       <div className="flex items-center gap-3">
                         <div className="font-semibold text-slate-800 tracking-tight">Active Cluster</div>
                         <div className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase border border-emerald-100">Healthy</div>
                       </div>
                       <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                       </div>
                     </div>

                     {/* Top Metrics Row */}
                     <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between h-24 hover:-translate-y-0.5 transition-transform">
                          <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Agents</div>
                          <div className="text-2xl font-bold text-slate-800">42</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between h-24 hover:-translate-y-0.5 transition-transform relative overflow-hidden">
                          <div className="absolute right-0 bottom-0 w-20 h-10 bg-blue-50 blur-xl rounded-full"></div>
                          <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider relative z-10">Tasks/m</div>
                          <div className="text-2xl font-bold text-blue-600 relative z-10">1,204</div>
                        </div>
                        <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex flex-col justify-between h-24 hover:-translate-y-0.5 transition-transform">
                          <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Avg Latency</div>
                          <div className="text-2xl font-bold text-slate-800">14ms</div>
                        </div>
                     </div>

                     {/* Workflow block */}
                     <div className="flex-1 bg-white rounded-xl border border-slate-100 shadow-sm p-4 relative overflow-hidden">
                       <div className="absolute top-4 right-4 flex gap-1">
                         <Activity className="w-4 h-4 text-emerald-400" />
                       </div>
                       <div className="text-slate-800 text-sm font-semibold mb-6">Execution Pipeline</div>
                       
                       <div className="flex items-center gap-3">
                         {/* Node 1 */}
                         <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 w-1/3 flex flex-col gap-2 relative">
                           <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-[2px] bg-blue-200"></div>
                           <div className="flex items-center gap-2 text-slate-600 font-semibold text-xs">
                             <MessageSquareCode className="w-3.5 h-3.5 text-blue-500" /> Intake
                           </div>
                           <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
                             <div className="h-full w-full bg-blue-500 animate-pulse"></div>
                           </div>
                         </div>
                         {/* Node 2 */}
                         <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-3 w-1/3 flex flex-col gap-2 relative shadow-sm shadow-blue-500/5">
                           <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-[2px] bg-blue-200"></div>
                           <div className="flex items-center gap-2 text-blue-700 font-semibold text-xs">
                             <Network className="w-3.5 h-3.5" /> Plan
                           </div>
                           <div className="h-1.5 w-full bg-blue-100 rounded-full overflow-hidden">
                             <div className="h-full w-2/3 bg-blue-500"></div>
                           </div>
                         </div>
                         {/* Node 3 */}
                         <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 w-1/3 flex flex-col gap-2 text-slate-400">
                           <div className="flex items-center gap-2 font-semibold text-xs text-slate-400">
                             <Terminal className="w-3.5 h-3.5" /> Execute
                           </div>
                           <div className="h-1.5 w-full bg-slate-200 rounded-full"></div>
                         </div>
                       </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section (Core Platform) */}
      <section className="py-24 bg-slate-100/50 border-t border-slate-200/50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <div className="text-blue-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4">Core Platform</div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-[-0.02em] mb-6">
              A complete operating system for autonomous workflows.
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              From orchestration to deployment, AgentLab provides every layer required to build production-ready AI systems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Network,
                title: "Agent Orchestration",
                desc: "Coordinate multiple specialized agents across complex workflows with shared state and task routing."
              },
              {
                icon: Workflow,
                title: "Workflow Builder",
                desc: "Design branching logic, task dependencies, and automation flows visually or through code."
              },
              {
                icon: Database,
                title: "Memory Engine",
                desc: "Store and retrieve long-term context with vector-based memory and session-aware recall."
              },
              {
                icon: Shield,
                title: "Guardrails & Security",
                desc: "Apply policy checks, approval layers, and risk controls to reduce hallucinations and unsafe actions."
              },
              {
                icon: Layers,
                title: "Tool Integrations",
                desc: "Connect agents with APIs, databases, file systems, internal tools, and external services."
              },
              {
                icon: HardDriveUpload,
                title: "Deployment Infrastructure",
                desc: "Ship globally with secure, low-latency deployment and real-time monitoring."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-[1.5rem] p-8 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group cursor-pointer flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#fafafa] border border-slate-100 text-slate-700 flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                   <feature.icon className="w-5 h-5"/>
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed text-[15px] mb-8 flex-1">
                  {feature.desc}
                </p>
                <div className="flex items-center text-sm font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                  Learn more <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Detail Section */}
      <section className="py-32 max-w-[1280px] mx-auto px-6 overflow-hidden">
        
        {/* Block 1 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          <div className="flex-1 lg:pr-8">
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Orchestrate specialized agents as one intelligent system
            </h3>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Combine coding, research, planning, support, and operations agents into a single coordinated execution layer.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Shared context across tasks
              </li>
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Dynamic delegation logic
              </li>
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Parallel execution workflows
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full bg-white rounded-[2rem] border border-slate-200 p-8 shadow-xl shadow-slate-200/50 relative">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent rounded-[2rem] pointer-events-none"></div>
             {/* Node workflow mockup */}
             <div className="relative z-10 w-full h-[320px] flex items-center justify-center">
                 <div className="hidden sm:block absolute top-[50%] left-[20%] right-[20%] h-[2px] bg-slate-200 -z-10"></div>
                 <div className="flex flex-col sm:flex-row justify-between w-full h-full sm:items-center relative items-center py-6 sm:py-0">
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 w-40 flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center"><FileSearch className="w-4 h-4"/></div>
                       <div className="text-sm font-bold text-slate-700">Research</div>
                    </div>
                    <div className="bg-blue-600 border border-blue-500 rounded-xl shadow-lg shadow-blue-500/20 p-5 w-48 flex items-center gap-3 transform scale-110 z-10 my-6 sm:my-0">
                       <div className="w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center"><Bot className="w-5 h-5"/></div>
                       <div>
                         <div className="text-sm font-bold text-white">Synthesizer</div>
                         <div className="text-[10px] text-blue-100 uppercase tracking-wider font-semibold mt-1">Coordinating</div>
                       </div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 w-40 flex items-center gap-3">
                       <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><Code2 className="w-4 h-4"/></div>
                       <div className="text-sm font-bold text-slate-700">Builder</div>
                    </div>
                 </div>
             </div>
          </div>
        </div>

        {/* Block 2 (Reversed) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          <div className="flex-1 w-full bg-[#0a0f1c] rounded-[2rem] border border-slate-800 p-8 shadow-2xl relative overflow-hidden">
             {/* Split screen mockup */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
             <div className="relative z-10 w-full h-[320px] flex flex-col md:flex-row gap-4">
                 <div className="flex-1 bg-[#0f1524] rounded-xl border border-white/5 p-4 flex flex-col">
                    <div className="text-xs text-slate-400 font-semibold mb-4 uppercase tracking-wider">Visual Editor</div>
                    <div className="space-y-3 flex-1">
                      <div className="bg-[#172033] rounded-lg p-3 border border-white/5 flex items-center justify-between">
                         <span className="text-sm text-slate-200 font-medium">Wait for trigger</span>
                         <Activity className="w-3 h-3 text-slate-500"/>
                      </div>
                      <div className="w-0.5 h-4 bg-white/10 mx-auto"></div>
                      <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/20 flex items-center justify-between">
                         <span className="text-sm text-blue-300 font-medium">Extract Query</span>
                         <Terminal className="w-3 h-3 text-blue-400"/>
                      </div>
                    </div>
                 </div>
                 <div className="flex-[1.5] bg-[#0f1524] rounded-xl border border-white/5 p-4 font-mono text-xs md:text-[13px] leading-loose text-blue-200 overflow-hidden relative">
                    <div className="text-xs text-slate-400 font-sans font-semibold mb-4 uppercase tracking-wider">TypeScript SDK</div>
                    <code>
                      <span className="text-indigo-400">export</span> <span className="text-indigo-400">const</span> <span className="text-blue-100">workflow</span> <span className="text-indigo-400">=</span> <span className="text-blue-400 font-semibold">defineFlow</span>({`{\n`}
                      &nbsp;&nbsp;<span className="text-slate-400">trigger:</span> <span className="text-emerald-400">'on_webhook'</span>,{`\n`}
                      &nbsp;&nbsp;<span className="text-slate-400">action:</span> <span className="text-indigo-400">async</span> (ctx) {`=>`} {`{\n`}
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-indigo-400">const</span> data <span className="text-indigo-400">=</span> <span className="text-indigo-400">await</span> ctx.extract();{`\n`}
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500 italic">// execution logic</span>{`\n`}
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-indigo-400">return</span> data;{`\n`}
                      &nbsp;&nbsp;{`}\n`}
                      {`});`}
                    </code>
                 </div>
             </div>
          </div>
          <div className="flex-1 lg:pl-8">
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Build logic visually or with code
            </h3>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Use a no-code visual editor for speed or switch to TypeScript for deeper customization and control.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Drag-and-drop workflow builder
              </li>
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                TypeScript SDK support
              </li>
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                State-based execution logic
              </li>
            </ul>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32">
          <div className="flex-1 lg:pr-8">
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Persistent memory for smarter automation
            </h3>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Enable agents to remember user preferences, business context, and prior actions across sessions.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                 <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Vector memory
              </li>
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                 <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Context retrieval
              </li>
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                 <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Session continuity
              </li>
            </ul>
          </div>
          <div className="flex-1 w-full bg-white rounded-[2rem] border border-slate-200 p-8 shadow-xl shadow-slate-200/50 relative">
             <div className="relative z-10 w-full h-[320px] flex items-center justify-center">
                 <div className="w-full max-w-md bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4">
                   <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-3 shadow-sm text-slate-400 text-sm">
                      <FileSearch className="w-4 h-4"/> Search vector database...
                   </div>
                   <div className="flex flex-col gap-3">
                     <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex gap-3 relative">
                        <div className="w-2 h-full bg-blue-500 absolute left-0 top-0 rounded-l-lg"></div>
                        <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center text-blue-600"><Database className="w-4 h-4"/></div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">User Preferences</div>
                          <div className="text-xs text-slate-400 font-medium mt-1">Relevance: 98% • 2s ago</div>
                        </div>
                     </div>
                     <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex gap-3 opacity-60">
                        <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-slate-400"><Layers className="w-4 h-4"/></div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">Session Context #402</div>
                          <div className="text-xs text-slate-400 font-medium mt-1">Relevance: 74% • 1m ago</div>
                        </div>
                     </div>
                   </div>
                 </div>
             </div>
          </div>
        </div>

        {/* Block 4 (Reversed) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24 mb-16">
          <div className="flex-1 w-full bg-white rounded-[2rem] border border-slate-200 p-8 shadow-xl shadow-slate-200/50 relative">
             <div className="relative z-10 w-full h-[320px] flex items-center justify-center">
                 <div className="w-full max-w-sm bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl flex flex-col gap-6">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                       <div className="flex items-center gap-2 text-slate-800 font-bold">
                         <Shield className="w-5 h-5 text-blue-600"/> Security Guard Policy
                       </div>
                       <div className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded uppercase tracking-widest">Active</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                         <div className="flex flex-col">
                           <span className="text-sm font-bold text-slate-800">Block destructive actions</span>
                           <span className="text-xs text-slate-400">Prevents dropping DBs or deleting files</span>
                         </div>
                         <div className="w-8 h-4 bg-emerald-500 rounded-full flex items-center justify-end px-0.5 shadow-inner">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                         </div>
                      </div>
                      <div className="flex items-start justify-between">
                         <div className="flex flex-col">
                           <span className="text-sm font-bold text-slate-800">Require human approval</span>
                           <span className="text-xs text-slate-400">For external API calls</span>
                         </div>
                         <div className="w-8 h-4 bg-slate-200 rounded-full flex items-center justify-start px-0.5 shadow-inner">
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                         </div>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
                       <Lock className="w-4 h-4 text-red-500 mt-0.5"/>
                       <div className="text-xs font-semibold text-red-800 leading-relaxed">
                         Action blocked: Agent attempted to modify a restricted system directory.
                       </div>
                    </div>
                 </div>
             </div>
          </div>
          <div className="flex-1 lg:pl-8">
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
              Enterprise-grade trust and governance
            </h3>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
              Monitor agent decisions, restrict risky actions, and enforce compliance standards across your organization.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Action validation
              </li>
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Audit logs
              </li>
              <li className="flex items-center gap-3 text-[16px] font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-blue-500"/></div>
                Role-based controls
              </li>
            </ul>
          </div>
        </div>

      </section>

      {/* WHY AGENTLAB (Stats Section) */}
      <section className="py-24 bg-slate-100/50 border-y border-slate-200/50">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-4xl">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Why teams choose AgentLab
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                Built for serious production use, AgentLab goes beyond chat interfaces and delivers a full platform for reliable autonomous systems.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center text-center">
               <div className="font-heading text-4xl font-extrabold text-blue-600 mb-2">99.9%</div>
               <div className="text-slate-900 font-bold text-sm mb-1">Workflow reliability</div>
               <div className="text-slate-500 text-xs font-medium">Multi-agent coordination</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center text-center">
               <div className="font-heading text-4xl font-extrabold text-blue-600 mb-2">2,500+</div>
               <div className="text-slate-900 font-bold text-sm mb-1">Engineering teams</div>
               <div className="text-slate-500 text-xs font-medium">Persistent memory architecture</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center text-center">
               <div className="font-heading text-4xl font-extrabold text-blue-600 mb-2">40%</div>
               <div className="text-slate-900 font-bold text-sm mb-1">Faster deployment</div>
               <div className="text-slate-500 text-xs font-medium">Secure deployment workflows</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center text-center">
               <div className="font-heading text-4xl font-extrabold text-blue-600 mb-2">&lt;20ms</div>
               <div className="text-slate-900 font-bold text-sm mb-1">Global edge delivery</div>
               <div className="text-slate-500 text-xs font-medium">Developer-friendly scale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Built for modern AI teams
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed">
            Whether you are building internal copilots or customer-facing automation, AgentLab adapts to your workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
           <div className="group bg-white rounded-[1.5rem] p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:bg-purple-100 transition-colors"></div>
             <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 relative z-10 border border-purple-100">
                <Terminal className="w-5 h-5"/>
             </div>
             <h3 className="font-bold text-slate-900 mb-2 relative z-10">Engineering</h3>
             <p className="text-slate-500 text-sm font-medium leading-relaxed relative z-10">Code review, deployment checks, incident triage</p>
           </div>
           
           <div className="group bg-white rounded-[1.5rem] p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:bg-blue-100 transition-colors"></div>
             <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 relative z-10 border border-blue-100">
                <FileSearch className="w-5 h-5"/>
             </div>
             <h3 className="font-bold text-slate-900 mb-2 relative z-10">Research Ops</h3>
             <p className="text-slate-500 text-sm font-medium leading-relaxed relative z-10">Knowledge retrieval, analysis pipelines, summarization</p>
           </div>
           
           <div className="group bg-white rounded-[1.5rem] p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:bg-emerald-100 transition-colors"></div>
             <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 relative z-10 border border-emerald-100">
                <Users2 className="w-5 h-5"/>
             </div>
             <h3 className="font-bold text-slate-900 mb-2 relative z-10">Support</h3>
             <p className="text-slate-500 text-sm font-medium leading-relaxed relative z-10">Multi-step ticket handling, memory-based support agents</p>
           </div>
           
           <div className="group bg-white rounded-[1.5rem] p-8 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-full blur-2xl -translate-y-12 translate-x-12 group-hover:bg-amber-100 transition-colors"></div>
             <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 relative z-10 border border-amber-100">
                <Briefcase className="w-5 h-5"/>
             </div>
             <h3 className="font-bold text-slate-900 mb-2 relative z-10">Productivity</h3>
             <p className="text-slate-500 text-sm font-medium leading-relaxed relative z-10">Workflow copilots, reporting assistants, process automation</p>
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
              Build your AI product stack on a stronger foundation.
            </h2>
            <p className="text-blue-100/60 text-lg mb-12 sm:px-10">
              Design, orchestrate, and deploy intelligent agents with a platform made for scale, security, and speed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="rounded-full bg-blue-600 hover:bg-blue-500 text-white px-8 py-7 text-base font-semibold w-full sm:w-auto shadow-lg shadow-blue-500/25 transition-all">
                Start Building Free
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
            <p>© 2024 AgentLab Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
