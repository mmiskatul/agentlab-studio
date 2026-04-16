"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, MessageSquare, Bot, ShieldOff, ShieldCheck, Flag, Clock, CheckCircle2, AlertCircle, User, Calendar, Activity, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mockUsers: Record<string, {
  id: string; name: string; email: string; role: string; status: string;
  joined: string; lastLogin: string; chats: number; agents: number;
  plan: string; authProvider: string;
  recentActivity: { icon: React.ElementType; color: string; msg: string; time: string }[];
  linkedAgents: { name: string; status: string; chats: number }[];
}> = {
  u1: { id:"u1", name:"Alice Johnson", email:"alice@example.com", role:"User", status:"Active", joined:"Jan 12, 2026", lastLogin:"2 hours ago", chats:142, agents:0, plan:"Free", authProvider:"Email",
    recentActivity:[
      { icon:MessageSquare, color:"text-blue-500",  msg:"Started chat with Data Analyst Pro", time:"2h ago" },
      { icon:CheckCircle2,  color:"text-emerald-500",msg:"Completed onboarding flow", time:"Yesterday" },
      { icon:Clock,         color:"text-slate-400",  msg:"Account created", time:"Jan 12, 2026" },
    ], linkedAgents:[] },
  u2: { id:"u2", name:"Bob Smith", email:"bob@example.com", role:"Creator", status:"Active", joined:"Dec 3, 2025", lastLogin:"5 min ago", chats:89, agents:4, plan:"Pro", authProvider:"Google",
    recentActivity:[
      { icon:Bot,           color:"text-violet-500", msg:"Deployed Sales Outreach Generator v1.2", time:"14m ago" },
      { icon:MessageSquare, color:"text-blue-500",   msg:"Test chat — Legal Reviewer", time:"1h ago" },
      { icon:CheckCircle2,  color:"text-emerald-500",msg:"Knowledge base indexed — 14 docs", time:"3h ago" },
    ], linkedAgents:[
      { name:"Legal Reviewer", status:"Active", chats:3100 },
      { name:"Internal Onboarding Bot", status:"Active", chats:420 },
      { name:"UX Copywriter", status:"Active", chats:8200 },
      { name:"Data Analyst Pro", status:"Active", chats:14200 },
    ]},
  u5: { id:"u5", name:"Elena Marks", email:"elena@example.com", role:"Creator", status:"Flagged", joined:"Feb 18, 2026", lastLogin:"1 week ago", chats:34, agents:2, plan:"Pro", authProvider:"Email",
    recentActivity:[
      { icon:AlertCircle, color:"text-amber-500", msg:"Rate limit hit — 500 excess requests", time:"1 week ago" },
    ], linkedAgents:[
      { name:"Sales Outreach Bot", status:"Disabled", chats:45000 },
    ]},
};

const DEFAULT_USER = {
  id:"--", name:"Unknown User", email:"not-found@example.com", role:"User", status:"Active", joined:"—", lastLogin:"—", chats:0, agents:0, plan:"Free", authProvider:"Email", recentActivity:[], linkedAgents:[],
};

type Params = { id: string };

export default function UserDetailPage({ params }: { params: Params }) {
  const user = mockUsers[params.id] ?? { ...DEFAULT_USER, id: params.id };
  const [status, setStatus] = useState(user.status);
  const [confirm, setConfirm] = useState<"disable" | "enable" | "flag" | null>(null);
  const [tab, setTab] = useState<"overview" | "activity" | "agents">("overview");

  const executeAction = () => {
    if (confirm === "disable") setStatus("Disabled");
    if (confirm === "enable") setStatus("Active");
    if (confirm === "flag") setStatus("Flagged");
    setConfirm(null);
  };

  const statusStyle: Record<string, string> = {
    Active:   "bg-emerald-50 text-emerald-700 border-emerald-100",
    Disabled: "bg-slate-100 text-slate-500 border-slate-200",
    Flagged:  "bg-amber-50 text-amber-700 border-amber-100",
  };
  const roleStyle: Record<string, string> = {
    User:    "bg-blue-50 text-blue-700 border-blue-100",
    Creator: "bg-violet-50 text-violet-700 border-violet-100",
    Admin:   "bg-red-50 text-red-700 border-red-100",
  };

  return (
    <div className="min-h-full bg-[#fafafa] p-6 lg:p-10 space-y-8">

      {/* Breadcrumb */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-4">
          <Link href="/admin/dashboard" className="hover:text-slate-900">Admin</Link>
          <span>/</span>
          <Link href="/admin/users" className="hover:text-slate-900">Users</Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">{user.name}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/admin/users"><Button variant="ghost" size="icon" className="rounded-xl hover:bg-slate-100 h-9 w-9"><ChevronLeft className="w-4 h-4" /></Button></Link>
            <div>
              <h1 className="font-heading text-2xl font-extrabold text-slate-900 tracking-tight">{user.name}</h1>
              <p className="text-slate-500 text-sm font-medium">{user.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            {(status === "Active" || status === "Flagged") && (
              <Button onClick={() => setConfirm("disable")} className="rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold shadow-sm">
                <ShieldOff className="w-4 h-4 mr-2" /> Disable User
              </Button>
            )}
            {status === "Disabled" && (
              <Button onClick={() => setConfirm("enable")} className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-sm">
                <ShieldCheck className="w-4 h-4 mr-2" /> Enable User
              </Button>
            )}
            {status !== "Flagged" && (
              <Button variant="outline" onClick={() => setConfirm("flag")} className="rounded-xl border-amber-200 text-amber-700 hover:bg-amber-50 font-bold">
                <Flag className="w-4 h-4 mr-2" /> Flag
              </Button>
            )}
          </div>
        </div>
      </motion.div>

      {/* 3-col layout */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Left 2 cols */}
        <div className="lg:col-span-2 space-y-6">

          {/* Profile card */}
          <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 flex flex-col sm:flex-row gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center text-3xl font-extrabold text-slate-700 border border-slate-200 shrink-0">{user.name[0]}</div>
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-heading text-xl font-extrabold text-slate-900">{user.name}</h2>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${roleStyle[user.role] ?? ""}`}>{user.role}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${statusStyle[status] ?? ""}`}>{status}</span>
              </div>
              <p className="text-slate-500 font-medium text-sm">{user.email}</p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Joined</p><p className="font-bold text-slate-700 text-sm mt-0.5">{user.joined}</p></div>
                <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Last Login</p><p className="font-bold text-slate-700 text-sm mt-0.5">{user.lastLogin}</p></div>
                <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Plan</p><p className="font-bold text-slate-700 text-sm mt-0.5">{user.plan}</p></div>
                <div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">Auth Provider</p><p className="font-bold text-slate-700 text-sm mt-0.5">{user.authProvider}</p></div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 border-b border-slate-200">
            {(["overview","activity","agents"] as const).map((t) => (
              <button key={t} onClick={() => setTab(t)} className={`px-5 py-3 text-sm font-bold capitalize border-b-2 transition-all -mb-[2px] ${tab === t ? "border-red-500 text-red-600" : "border-transparent text-slate-500 hover:text-slate-900"}`}>{t}</button>
            ))}
          </div>

          {tab === "overview" && (
            <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 space-y-5">
              <h3 className="font-heading text-lg font-extrabold text-slate-900">Account Information</h3>
              {[["User ID", user.id],["Email", user.email],["Role", user.role],["Status", status],["Plan", user.plan],["Auth Provider", user.authProvider],["Registered", user.joined],["Last Active", user.lastLogin]].map(([k,v]) => (
                <div key={k} className="flex justify-between items-center py-2.5 border-b border-slate-100 last:border-0">
                  <span className="text-sm font-bold text-slate-500">{k}</span>
                  <span className="text-sm font-bold text-slate-900">{v}</span>
                </div>
              ))}
            </div>
          )}

          {tab === "activity" && (
            <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
              {user.recentActivity.length > 0 ? user.recentActivity.map((item, i) => (
                <div key={i} className={`flex items-start gap-4 px-6 py-4 ${i < user.recentActivity.length - 1 ? "border-b border-slate-100" : ""}`}>
                  <item.icon className={`w-4 h-4 mt-0.5 shrink-0 ${item.color}`} />
                  <p className="flex-1 text-sm font-medium text-slate-700">{item.msg}</p>
                  <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">{item.time}</span>
                </div>
              )) : (
                <div className="py-16 flex flex-col items-center text-center"><Activity className="w-8 h-8 text-slate-300 mb-3" /><p className="font-bold text-slate-600">No activity recorded</p></div>
              )}
            </div>
          )}

          {tab === "agents" && (
            <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
              {user.linkedAgents.length > 0 ? user.linkedAgents.map((a, i) => (
                <div key={a.name} className={`flex items-center gap-4 px-6 py-4 ${i < user.linkedAgents.length - 1 ? "border-b border-slate-100" : ""}`}>
                  <div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center"><Bot className="w-4 h-4 text-violet-600" /></div>
                  <div className="flex-1"><p className="font-bold text-slate-900 text-sm">{a.name}</p><p className="text-[11px] font-medium text-slate-500 mt-0.5">{a.chats.toLocaleString()} chats</p></div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${a.status === "Active" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-slate-100 text-slate-500 border-slate-200"}`}>{a.status}</span>
                </div>
              )) : (
                <div className="py-16 flex flex-col items-center"><Bot className="w-8 h-8 text-slate-300 mb-3" /><p className="font-bold text-slate-600">No agents created</p></div>
              )}
            </div>
          )}
        </div>

        {/* Right col — Stats + Admin Actions */}
        <div className="space-y-5">
          <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6">
            <h3 className="font-heading text-lg font-extrabold text-slate-900 mb-4">Usage Summary</h3>
            <div className="space-y-4">
              {[
                { label: "Total Chats",   value: user.chats,  icon: MessageSquare, color: "text-blue-500",   bg: "bg-blue-50" },
                { label: "Agents Created",value: user.agents, icon: Bot,           color: "text-violet-500", bg: "bg-violet-50" },
                { label: "Plan",          value: user.plan,   icon: User,          color: "text-slate-500",  bg: "bg-slate-100" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${s.bg}`}><s.icon className={`w-4 h-4 ${s.color}`} /></div>
                    <span className="text-sm font-bold text-slate-700">{s.label}</span>
                  </div>
                  <span className="font-heading font-extrabold text-slate-900">{s.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 space-y-3">
            <h3 className="font-heading text-lg font-extrabold text-slate-900 mb-2">Admin Actions</h3>
            {(status === "Active" || status === "Flagged") && (
              <Button onClick={() => setConfirm("disable")} className="w-full rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold h-11">
                <ShieldOff className="w-4 h-4 mr-2" /> Disable Account
              </Button>
            )}
            {status === "Disabled" && (
              <Button onClick={() => setConfirm("enable")} className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-11">
                <ShieldCheck className="w-4 h-4 mr-2" /> Enable Account
              </Button>
            )}
            {status !== "Flagged" && (
              <Button variant="outline" onClick={() => setConfirm("flag")} className="w-full rounded-xl border-amber-200 text-amber-700 hover:bg-amber-50 font-bold h-11">
                <Flag className="w-4 h-4 mr-2" /> Mark as Flagged
              </Button>
            )}
            <div className="pt-3 border-t border-slate-100">
              <p className="text-[11px] font-medium text-slate-400">All actions are logged and reversible by a senior admin.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Modal */}
      <AnimatePresence>
        {confirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white rounded-[2rem] p-8 shadow-2xl max-w-md w-full border border-slate-200/60">
              <div className="flex justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center"><AlertTriangle className="w-6 h-6 text-amber-500" /></div>
                <button onClick={() => setConfirm(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-5 h-5 text-slate-400" /></button>
              </div>
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-2 capitalize">{confirm} User?</h2>
              <p className="text-slate-500 text-sm mb-8">Confirm this action for <span className="font-bold text-slate-800">{user.name}</span>. This will be logged.</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setConfirm(null)} className="flex-1 rounded-xl font-bold h-11">Cancel</Button>
                <Button onClick={executeAction} className={`flex-1 rounded-xl font-bold h-11 text-white ${confirm === "enable" ? "bg-emerald-600 hover:bg-emerald-700" : confirm === "flag" ? "bg-amber-500 hover:bg-amber-600" : "bg-red-600 hover:bg-red-700"}`}>
                  Confirm
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
