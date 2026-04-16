"use client";

import { motion } from "framer-motion";
import { BarChart2, TrendingUp, Zap, Bot, Clock, ArrowUpRight } from "lucide-react";

const agentStats = [
  { name: "Customer Support Router", queries: 14200, feedback: 94, avgTime: "1.1s", trend: "+8%" },
  { name: "Sales Outreach Generator", queries: 3400, feedback: 87, avgTime: "1.4s", trend: "+3%" },
  { name: "Legal Document Analyzer", queries: 892, feedback: 91, avgTime: "2.1s", trend: "-2%" },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6 lg:p-10 space-y-10 max-w-[1300px] mx-auto min-h-full">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Analytics</h1>
        <p className="text-slate-500 mt-2 font-medium text-lg">Performance insights across your deployed agents.</p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Total Invocations", value: "48.2k", icon: Zap, color: "text-violet-600", bg: "bg-violet-50", trend: "+12%" },
          { label: "Avg. Response Time", value: "1.2s", icon: Clock, color: "text-blue-600", bg: "bg-blue-50", trend: "Stable" },
          { label: "Positive Feedback", value: "91%", icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50", trend: "+2%" },
          { label: "Active Agents", value: "3", icon: Bot, color: "text-amber-600", bg: "bg-amber-50", trend: "Live" },
        ].map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-white rounded-[1.5rem] p-6 shadow-sm border border-slate-200/60"
          >
            <div className={`inline-flex p-3 rounded-xl ${s.bg} mb-4`}><s.icon className={`h-5 w-5 ${s.color}`} /></div>
            <p className="font-heading text-3xl font-extrabold text-slate-900">{s.value}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-bold text-slate-500">{s.label}</p>
              <span className="text-[11px] font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-md">{s.trend}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 border-b border-slate-100 flex items-center justify-between">
          <h2 className="font-heading text-xl font-extrabold text-slate-900">Per-Agent Breakdown</h2>
          <div className="flex items-center gap-2 text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg"><BarChart2 className="w-4 h-4" /> Last 30 days</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Agent</th><th className="px-6 py-4">Total Queries</th><th className="px-6 py-4">Positive Feedback</th><th className="px-6 py-4">Avg Response</th><th className="px-6 py-4">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {agentStats.map((a, i) => (
                <motion.tr key={a.name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.06 }} className="hover:bg-slate-50/40">
                  <td className="px-6 py-5"><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center"><Bot className="w-4 h-4 text-violet-600" /></div><p className="font-bold text-slate-900 text-sm">{a.name}</p></div></td>
                  <td className="px-6 py-5"><span className="font-bold text-slate-900">{a.queries.toLocaleString()}</span></td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 max-w-[100px] bg-slate-100 rounded-full h-2"><div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${a.feedback}%` }} /></div>
                      <span className="font-bold text-sm text-emerald-600">{a.feedback}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5"><span className="font-bold text-slate-900">{a.avgTime}</span></td>
                  <td className="px-6 py-5"><span className={`text-xs font-bold px-2.5 py-1 rounded-md ${a.trend.startsWith("+") ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>{a.trend}</span></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
