"use client";

import { useState } from "react";
import DashboardLayout, { UserRole } from "@/components/DashboardLayout";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Search, ArrowRight, Clock, Sparkles, Database, PlusCircle, PenTool, LayoutTemplate, Layers, CheckCircle2, ChevronDown, Check, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Link from "next/link";

// --- MOCK DATA ---
const userAvailableAgents = [
  { id: 1, name: "Data Analyst Pro", desc: "Connects to your warehouse and answers SQL queries in plain English.", category: "Analytics", creator: "AgentLab", verified: true },
  { id: 2, name: "UX Copywriter", desc: "Generates microcopy, error messages, and UI text.", category: "Design", creator: "Community", verified: false },
  { id: 3, name: "DevOps Helper", desc: "Helps you debug CI/CD pipelines and dockerfiles.", category: "Engineering", creator: "Acme Corp", verified: true },
  { id: 4, name: "Legal Reviewer", desc: "Scan contracts for common clauses and risks.", category: "Legal", creator: "AgentLab", verified: true },
];

const userRecentChats = [
  { agent: "Data Analyst Pro", message: "Revenue grew 14% this quarter.", time: "2 min ago", unread: true },
  { agent: "DevOps Helper", message: "Your docker-compose.yml looks correct.", time: "1 hour ago", unread: false },
  { agent: "UX Copywriter", message: "Here are 3 options for the empty state.", time: "3 hours ago", unread: false },
];

const creatorMyAgents = [
  { id: 1, name: "Customer Support Router", category: "Support", status: "Published", kbCount: 12, lastUpdated: "Today" },
  { id: 2, name: "Internal onboarding Bot", category: "HR", status: "Draft", kbCount: 5, lastUpdated: "Yesterday" },
  { id: 3, name: "Sales Outreach Generator", category: "Sales", status: "Published", kbCount: 24, lastUpdated: "Oct 12" },
];

// --- END USER COMPONENT ---
function EndUserDashboard() {
  return (
    <div className="p-6 lg:p-10 space-y-12 max-w-[1400px] mx-auto min-h-full">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Good afternoon, Alex</h1>
          <p className="text-slate-500 mt-2 font-medium text-lg">Ready to accelerate your workflows today?</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/agents">
            <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 font-bold px-6">
              Explore Agents <ArrowRight className="w-4 h-4 ml-2"/>
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Available Agents", value: "248", icon: Bot, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Chats This Week", value: "32", icon: MessageSquare, color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Tasks Automated", value: "1,204", icon: Sparkles, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Time Saved (hrs)", value: "14.5", icon: Clock, color: "text-indigo-600", bg: "bg-indigo-50" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-200/60"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl ${s.bg}`}>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <p className="text-sm font-bold text-slate-500">{s.label}</p>
            </div>
            <p className="font-heading text-3xl font-extrabold text-slate-900">{s.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Left Col: Agents */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-extrabold text-slate-900">Recommended for you</h2>
            <Link href="/agents" className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline">View all</Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {userAvailableAgents.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-200/60 hover:shadow-lg transition-shadow group flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-tr from-slate-100 to-slate-50 border border-slate-200 rounded-xl p-3">
                    <Bot className="h-6 w-6 text-slate-700" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 rounded-md px-2 py-1">
                    {a.category}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-900 flex items-center gap-2">
                  {a.name}
                  {a.verified && <CheckCircle2 className="w-4 h-4 text-blue-500" />}
                </h3>
                <p className="text-sm text-slate-500 mt-2 font-medium line-clamp-2 flex-1">{a.desc}</p>
                <div className="pt-6 mt-auto border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[8px] font-bold">{a.creator[0]}</div>
                    <span className="text-xs font-semibold text-slate-500">{a.creator}</span>
                  </div>
                  <Link href="/chat">
                    <Button size="sm" variant="secondary" className="rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition-colors font-bold text-slate-700 shadow-none">
                      Chat
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Col: Recent Chats */}
        <div className="space-y-6">
          <h2 className="font-heading text-2xl font-extrabold text-slate-900">Recent Chats</h2>
          <div className="bg-white rounded-[1.5rem] p-3 shadow-sm border border-slate-200/60 space-y-2">
            {userRecentChats.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
              >
                <div className="relative">
                  <div className="bg-slate-100 rounded-lg p-2.5">
                    <MessageSquare className="h-4 w-4 text-slate-600" />
                  </div>
                  {c.unread && <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 border-2 border-white rounded-full"></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-bold text-sm text-slate-900 truncate">{c.agent}</p>
                    <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap ml-2">{c.time}</span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 truncate group-hover:text-slate-700 transition-colors">{c.message}</p>
                </div>
              </motion.div>
            ))}
            <div className="p-3">
              <Button variant="ghost" className="w-full rounded-xl text-blue-600 font-bold hover:bg-blue-50">View all history</Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- CREATOR DASHBOARD COMPONENT ---
function CreatorDashboard() {
  return (
    <div className="p-6 lg:p-10 space-y-12 max-w-[1400px] mx-auto min-h-full">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-br from-slate-900 to-indigo-950 p-8 sm:p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
        {/* Abstract glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="inline-flex items-center text-blue-300 font-bold text-[10px] tracking-[0.2em] uppercase mb-4 bg-blue-500/20 px-3 py-1.5 rounded-full border border-blue-400/20">
            Creator Studio Space
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Overview</h1>
          <p className="text-slate-300 mt-2 font-medium text-base max-w-lg">Monitor your autonomous fleets, analyze performance, and deploy new agents into production.</p>
        </div>
        <div className="flex items-center gap-3 relative z-10">
          <Link href="/creator">
            <Button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 font-bold px-6 py-6 text-base border border-blue-400">
              <PlusCircle className="w-5 h-5 mr-2"/> Build New Agent
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Active Deployments", value: "2", sub: "Published agents", icon: LayoutTemplate },
          { label: "Knowledge Files", value: "36", sub: "1.2GB Indexed", icon: Database },
          { label: "Total Invocations", value: "48.2k", sub: "+12% this week", icon: Layers },
          { label: "Avg. Resolution Time", value: "1.2s", sub: "GPT-4o Backend", icon: Sparkles },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-200/60"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <s.icon className="h-5 w-5 text-slate-700" />
              </div>
            </div>
            <p className="font-heading text-3xl font-extrabold text-slate-900">{s.value}</p>
            <div className="flex items-center justify-between mt-2">
               <p className="text-sm font-bold text-slate-500">{s.label}</p>
               <span className="text-[11px] font-semibold text-slate-400">{s.sub}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        
        {/* Left Col: My Agents */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-extrabold text-slate-900">Your Agents</h2>
            <div className="flex items-center gap-2">
               <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                 <Input placeholder="Search..." className="pl-9 bg-white border-slate-200/60 rounded-full h-9 text-sm focus-visible:ring-1" />
               </div>
               <Button variant="outline" className="rounded-full h-9 border-slate-200/60 font-semibold shadow-sm px-4">
                  Filter <ChevronDown className="w-3 h-3 ml-2 text-slate-400" />
               </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-200/60 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 bg-slate-50/50 text-xs font-bold text-slate-500 uppercase tracking-wider">
               <div className="col-span-1 border"></div>
               <div className="col-span-4">Agent Name</div>
               <div className="col-span-2">Status</div>
               <div className="col-span-2">Knowledge Base</div>
               <div className="col-span-3 text-right">Actions</div>
            </div>
            <div className="divide-y divide-slate-100">
              {creatorMyAgents.map((a, i) => (
                <div key={a.id} className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50/50 transition-colors">
                  <div className="col-span-1 flex justify-center">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center">
                       <Bot className="w-4 h-4 text-slate-600" />
                    </div>
                  </div>
                  <div className="col-span-4">
                     <p className="font-bold text-sm text-slate-900">{a.name}</p>
                     <p className="text-xs text-slate-500 font-medium">Updated {a.lastUpdated}</p>
                  </div>
                  <div className="col-span-2 flex items-center">
                     <span className={cn(
                       "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border",
                       a.status === "Published" ? "bg-emerald-50 text-emerald-600 border-emerald-200/50" : "bg-amber-50 text-amber-600 border-amber-200/50"
                     )}>
                       {a.status}
                     </span>
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                     <Database className="w-3.5 h-3.5 text-slate-400"/>
                     <span className="text-xs font-bold text-slate-600">{a.kbCount} items</span>
                  </div>
                  <div className="col-span-3 flex items-center justify-end gap-2">
                     <Button size="sm" variant="ghost" className="rounded-lg h-8 font-bold text-slate-600 hover:text-blue-600">
                        Edit
                     </Button>
                     <Button size="sm" variant="outline" className="rounded-lg h-8 border-slate-200 shadow-sm font-bold text-slate-700">
                        Test
                     </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Quick Actions & Log */}
        <div className="space-y-6">
          <h2 className="font-heading text-2xl font-extrabold text-slate-900">Quick Actions</h2>
          
          <div className="space-y-3">
             <Link href="/creator" className="block p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                     <Bot className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-sm">Create New Agent</p>
                     <p className="text-xs font-medium text-slate-500 mt-0.5">Start from scratch or template</p>
                   </div>
                </div>
             </Link>
             <Link href="/knowledge" className="block p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                     <Database className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-sm">Upload Knowledge Base</p>
                     <p className="text-xs font-medium text-slate-500 mt-0.5">Add PDFs or URLs to memory</p>
                   </div>
                </div>
             </Link>
             <Link href="/settings" className="block p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-800 transition-colors">
                     <Settings className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                   </div>
                   <div>
                     <p className="font-bold text-slate-900 text-sm">LLM Settings</p>
                     <p className="text-xs font-medium text-slate-500 mt-0.5">Manage API keys & limits</p>
                   </div>
                </div>
             </Link>
          </div>

          <div className="bg-white rounded-[1.5rem] p-5 shadow-sm border border-slate-200/60 mt-6">
             <h3 className="font-bold text-slate-900 mb-4 text-sm">System Log</h3>
             <div className="space-y-4">
                <div className="flex gap-3">
                   <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
                   <div className="flex-1">
                     <p className="text-xs font-bold text-slate-700">Model Deployment Successful</p>
                     <p className="text-[11px] font-medium text-slate-400 mt-0.5">Sales Outreach Generator v1.2 is live.</p>
                   </div>
                </div>
                <div className="flex gap-3">
                   <div className="mt-0.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></div>
                   <div className="flex-1">
                     <p className="text-xs font-bold text-slate-700">Knowledge Indexed</p>
                     <p className="text-[11px] font-medium text-slate-400 mt-0.5">14 new documents vectorized.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// --- MAIN PAGE WRAPPER ---
export default function DashboardPage() {
  const [role, setRole] = useState<UserRole>("user");

  return (
    <DashboardLayout role={role} onRoleChange={setRole}>
      {role === "user" ? <EndUserDashboard /> : <CreatorDashboard />}
    </DashboardLayout>
  );
}
