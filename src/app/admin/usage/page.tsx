"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Zap, TrendingUp, BarChart2, Bot, CheckCircle2 } from "lucide-react";

const topAgents = [
  { name: "DevOps Helper",        creator: "Grace Kim",   chats: 94000, pct: 100 },
  { name: "Sales Outreach Bot",   creator: "Elena Marks", chats: 45000, pct: 48  },
  { name: "Data Analyst Pro",     creator: "Grace Kim",   chats: 14200, pct: 15  },
  { name: "UX Copywriter",        creator: "Bob Smith",   chats: 8200,  pct: 8.7 },
  { name: "Legal Reviewer",       creator: "Bob Smith",   chats: 3100,  pct: 3.3 },
];

const feedbackData = [
  { name: "Positive",  value: 91, color: "bg-emerald-500" },
  { name: "Neutral",   value: 6,  color: "bg-amber-400" },
  { name: "Negative",  value: 3,  color: "bg-red-400" },
];

const weeklyChats = [420,380,510,490,560,480,342];
const weekLabels  = ["Mon","Tue","Wed","Thu","Fri","Sat","Today"];
const maxVal = Math.max(...weeklyChats);

export default function UsageMonitorPage() {
  return (
    <div className="min-h-full bg-[#fafafa] p-6 lg:p-10 space-y-10">

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="inline-flex items-center text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-4 bg-red-50 px-4 py-2 rounded-full border border-red-100">Admin · Analytics</div>
        <h1 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">Usage Monitor</h1>
        <p className="text-slate-500 mt-2 font-medium text-lg">Platform-wide analytics over the last 30 days.</p>
      </motion.div>

      {/* Top stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label:"Total Chats (30d)",  value:"168,421", icon:MessageSquare, color:"text-blue-600",   bg:"bg-blue-50",   border:"border-blue-100" },
          { label:"Active Users",        value:"842",      icon:Users,         color:"text-emerald-600",bg:"bg-emerald-50",border:"border-emerald-100" },
          { label:"Active Creators",     value:"58",       icon:Zap,           color:"text-violet-600", bg:"bg-violet-50", border:"border-violet-100" },
          { label:"Avg Positive Rating", value:"91%",      icon:TrendingUp,    color:"text-amber-600",  bg:"bg-amber-50",  border:"border-amber-100" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
            className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm flex items-center gap-4"
          >
            <div className={`p-3 rounded-xl ${s.bg} border ${s.border} shrink-0`}><s.icon className={`h-5 w-5 ${s.color}`} /></div>
            <div><p className="font-heading text-2xl font-extrabold text-slate-900">{s.value}</p><p className="text-xs font-bold text-slate-500 mt-0.5">{s.label}</p></div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Weekly chat trend */}
        <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
          <div className="mb-6">
            <div className="text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-2">Chat Volume</div>
            <h2 className="font-heading text-xl font-extrabold text-slate-900">Messages This Week</h2>
          </div>
          <div className="flex items-end gap-3 h-40">
            {weeklyChats.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold text-slate-500">{v}</span>
                <div className="w-full bg-blue-100 rounded-t-lg transition-all hover:bg-blue-200 relative" style={{ height: `${(v / maxVal) * 100}%` }}>
                  <div className="absolute inset-0 bg-blue-600 rounded-t-lg opacity-70" />
                </div>
                <span className="text-[10px] font-bold text-slate-400">{weekLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback breakdown */}
        <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8">
          <div className="mb-6">
            <div className="text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-2">Satisfaction</div>
            <h2 className="font-heading text-xl font-extrabold text-slate-900">Feedback Breakdown</h2>
          </div>
          <div className="space-y-4">
            {feedbackData.map((f) => (
              <div key={f.name}>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-sm font-bold text-slate-700">{f.name}</span>
                  <span className="text-sm font-extrabold text-slate-900">{f.value}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${f.value}%` }} transition={{ duration: 0.8, ease: "easeOut" }} className={`h-full rounded-full ${f.color}`} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <p className="text-sm font-bold text-emerald-700">Platform sentiment is <span className="underline">above target</span> (≥85%).</p>
          </div>
        </div>

        {/* Most used agents */}
        <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm p-6 md:p-8 lg:col-span-2">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <div className="text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-2">Top Performers</div>
              <h2 className="font-heading text-xl font-extrabold text-slate-900">Most Used Agents</h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg"><BarChart2 className="w-4 h-4" /> Lifetime chats</div>
          </div>
          <div className="space-y-5">
            {topAgents.map((a) => (
              <div key={a.name} className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0"><Bot className="w-4 h-4 text-slate-600" /></div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between mb-1.5">
                    <p className="text-sm font-bold text-slate-900 truncate">{a.name}</p>
                    <span className="text-sm font-extrabold text-slate-700 shrink-0 ml-2">{a.chats.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${a.pct}%` }} transition={{ duration: 0.8 }} className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                  </div>
                  <p className="text-[11px] font-medium text-slate-400 mt-1">by {a.creator}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
