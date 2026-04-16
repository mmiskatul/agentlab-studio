"use client";

import { motion } from "framer-motion";
import { Bot, Search, Shield, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const agents = [
  { id: 1, name: "Data Analyst Pro", creator: "AgentLab", category: "Analytics", status: "Live", queries: "12.4k", verified: true },
  { id: 2, name: "UX Copywriter", creator: "Community", category: "Design", status: "Live", queries: "8.2k", verified: false },
  { id: 3, name: "DevOps Helper", creator: "Acme Corp", category: "Engineering", status: "Live", queries: "94k", verified: true },
  { id: 4, name: "Legal Reviewer", creator: "AgentLab", category: "Legal", status: "Live", queries: "3.1k", verified: true },
  { id: 5, name: "Sales Outreach Bot", creator: "Growth Hacks", category: "Sales", status: "Suspended", queries: "45k", verified: false },
  { id: 6, name: "Onboarding Buddy", creator: "Internal", category: "HR", status: "Live", queries: "1.2k", verified: true },
];

export default function AdminAgentsPage() {
  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-[1400px] mx-auto min-h-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">All Agents</h1>
          <p className="text-slate-500 mt-2 font-medium text-lg">{agents.length} total agents across the platform</p>
        </motion.div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input placeholder="Search agents..." className="pl-11 h-12 bg-white border-slate-200/60 rounded-xl shadow-sm font-medium" />
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Agent</th><th className="px-6 py-4">Creator</th><th className="px-6 py-4">Category</th><th className="px-6 py-4">Total Queries</th><th className="px-6 py-4">Status</th><th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {agents.map((a, i) => (
                <motion.tr key={a.id} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }} className="hover:bg-slate-50/40 group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-sm"><Bot className="w-4 h-4 text-slate-600" /></div>
                      <div className="flex items-center gap-2">
                        <p className="font-extrabold text-slate-900 text-[15px]">{a.name}</p>
                        {a.verified && <Shield className="w-3.5 h-3.5 text-blue-500" />}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4"><div className="flex items-center gap-1.5 font-semibold text-sm text-slate-700">{a.creator === "AgentLab" && <Zap className="w-3 h-3 text-amber-500" />}{a.creator}</div></td>
                  <td className="px-6 py-4"><span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">{a.category}</span></td>
                  <td className="px-6 py-4"><span className="font-bold text-sm text-slate-900">{a.queries}</span></td>
                  <td className="px-6 py-4"><span className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${a.status === "Live" ? "bg-emerald-50 text-emerald-600 border-emerald-200/50" : "bg-red-50 text-red-600 border-red-200/50"}`}>{a.status}</span></td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm" className={`h-9 rounded-lg font-bold hidden sm:flex border-slate-200 ${a.status === "Live" ? "text-red-500 hover:bg-red-50" : "text-emerald-600 hover:bg-emerald-50"}`}>
                        {a.status === "Live" ? "Suspend" : "Reinstate"}
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
