"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bot, Eye, ShieldOff, ShieldCheck, AlertTriangle, X, Zap, Verified } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type AgentRecord = {
  id: string; name: string; creator: string; creatorId: string;
  category: string; status: "Active" | "Disabled"; visibility: "Public" | "Private";
  knowledge: number; chats: number; updated: string; verified: boolean;
};

const mockAgents: AgentRecord[] = [
  { id: "a1", name: "Data Analyst Pro",        creator: "Grace Kim",   creatorId: "u7", category: "Analytics",   status: "Active",   visibility: "Public",  knowledge: 12, chats: 14200, updated: "Apr 12, 2026", verified: true  },
  { id: "a2", name: "UX Copywriter",           creator: "Bob Smith",   creatorId: "u2", category: "Design",      status: "Active",   visibility: "Public",  knowledge: 5,  chats: 8200,  updated: "Apr 10, 2026", verified: false },
  { id: "a3", name: "DevOps Helper",           creator: "Grace Kim",   creatorId: "u7", category: "Engineering", status: "Active",   visibility: "Public",  knowledge: 18, chats: 94000, updated: "Mar 28, 2026", verified: true  },
  { id: "a4", name: "Legal Reviewer",          creator: "Bob Smith",   creatorId: "u2", category: "Legal",       status: "Active",   visibility: "Private", knowledge: 8,  chats: 3100,  updated: "Apr 8, 2026",  verified: true  },
  { id: "a5", name: "Sales Outreach Bot",      creator: "Elena Marks", creatorId: "u5", category: "Sales",       status: "Disabled", visibility: "Public",  knowledge: 24, chats: 45000, updated: "Oct 5, 2025",  verified: false },
  { id: "a6", name: "Internal Onboarding Bot", creator: "Bob Smith",   creatorId: "u2", category: "HR",          status: "Active",   visibility: "Private", knowledge: 6,  chats: 420,   updated: "Apr 1, 2026",  verified: false },
];

const statusStyle: Record<string, string> = {
  Active:   "bg-emerald-50 text-emerald-700 border-emerald-100",
  Disabled: "bg-slate-100 text-slate-500 border-slate-200",
};
const visStyle: Record<string, string> = {
  Public:  "bg-blue-50 text-blue-700 border-blue-100",
  Private: "bg-slate-100 text-slate-500 border-slate-200",
};

export default function AdminAgentsPage() {
  const [agents, setAgents] = useState<AgentRecord[]>(mockAgents);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [confirm, setConfirm] = useState<{ agent: AgentRecord; action: "disable" | "enable" } | null>(null);

  const filtered = agents.filter((a) => {
    const matchQ = a.name.toLowerCase().includes(search.toLowerCase()) || a.creator.toLowerCase().includes(search.toLowerCase());
    const matchS = statusFilter === "All" || a.status === statusFilter;
    return matchQ && matchS;
  });

  const toggle = () => {
    if (!confirm) return;
    setAgents((prev) => prev.map((a) => a.id === confirm.agent.id ? { ...a, status: confirm.action === "disable" ? "Disabled" : "Active" } : a));
    setConfirm(null);
  };

  return (
    <div className="min-h-full bg-[#fafafa] p-6 lg:p-10 space-y-8">

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-3 bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
            Admin · Agents
          </div>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">Agents Management</h1>
          <p className="text-slate-500 mt-1 font-medium">{agents.length} total agents — {agents.filter(a => a.status === "Active").length} active</p>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name or creator…" className="pl-11 h-11 rounded-xl bg-white border-slate-200/60 shadow-sm font-medium" />
        </div>
        {["All","Active","Disabled"].map((s) => (
          <button key={s} onClick={() => setStatusFilter(s)}
            className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${statusFilter === s ? "bg-slate-900 text-white border-transparent shadow-md" : "bg-white border-slate-200/60 text-slate-600 shadow-sm hover:bg-slate-50"}`}
          >{s === "All" ? "All Status" : s}</button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-[1.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Agent</th>
                <th className="px-6 py-4">Creator</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Visibility</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Knowledge</th>
                <th className="px-6 py-4">Chats</th>
                <th className="px-6 py-4">Updated</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <AnimatePresence>
                {filtered.map((a) => (
                  <motion.tr key={a.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hover:bg-slate-50/40 group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0"><Bot className="w-4 h-4 text-slate-600" /></div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-slate-900 text-[14px]">{a.name}</p>
                          {a.verified && <Verified className="w-3.5 h-3.5 text-blue-500" />}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/admin/users/${a.creatorId}`} className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline">
                        <Zap className="w-3 h-3" /> {a.creator}
                      </Link>
                    </td>
                    <td className="px-6 py-4"><span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">{a.category}</span></td>
                    <td className="px-6 py-4"><span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${visStyle[a.visibility]}`}>{a.visibility}</span></td>
                    <td className="px-6 py-4"><span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${statusStyle[a.status]}`}>{a.status}</span></td>
                    <td className="px-6 py-4"><span className="font-bold text-slate-800 text-sm">{a.knowledge}</span></td>
                    <td className="px-6 py-4"><span className="font-bold text-slate-800 text-sm">{a.chats.toLocaleString()}</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-medium text-slate-500">{a.updated}</span></td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/agents/${a.id}`}>
                          <Button variant="ghost" size="sm" className="h-8 rounded-lg font-bold text-slate-500 hover:text-blue-600 hover:bg-blue-50 hidden sm:flex"><Eye className="w-3.5 h-3.5 mr-1" /> View</Button>
                        </Link>
                        {a.status === "Active" ? (
                          <Button variant="ghost" size="sm" onClick={() => setConfirm({ agent: a, action: "disable" })} className="h-8 rounded-lg font-bold text-red-500 hover:bg-red-50 hidden sm:flex"><ShieldOff className="w-3.5 h-3.5 mr-1" /> Disable</Button>
                        ) : (
                          <Button variant="ghost" size="sm" onClick={() => setConfirm({ agent: a, action: "enable" })} className="h-8 rounded-lg font-bold text-emerald-600 hover:bg-emerald-50 hidden sm:flex"><ShieldCheck className="w-3.5 h-3.5 mr-1" /> Enable</Button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-20 flex flex-col items-center"><Bot className="w-10 h-10 text-slate-300 mb-3" /><p className="font-bold text-slate-700">No agents found</p></div>
        )}
        <div className="p-4 border-t border-slate-100 bg-slate-50/40 flex items-center justify-between text-sm font-medium text-slate-500">
          <span>Showing {filtered.length} of {agents.length} agents</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-xl font-bold border-slate-200" disabled>Previous</Button>
            <Button variant="outline" size="sm" className="rounded-xl font-bold border-slate-200">Next</Button>
          </div>
        </div>
      </div>

      {/* Confirm Modal */}
      <AnimatePresence>
        {confirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white rounded-[2rem] p-8 shadow-2xl max-w-md w-full border border-slate-200/60">
              <div className="flex justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${confirm.action === "disable" ? "bg-red-50" : "bg-emerald-50"}`}>
                  <AlertTriangle className={`w-6 h-6 ${confirm.action === "disable" ? "text-red-500" : "text-emerald-500"}`} />
                </div>
                <button onClick={() => setConfirm(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-5 h-5 text-slate-400" /></button>
              </div>
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-2">{confirm.action === "disable" ? "Disable" : "Enable"} Agent?</h2>
              <p className="text-slate-500 text-sm mb-8">This will {confirm.action} <span className="font-bold text-slate-800">&ldquo;{confirm.agent.name}&rdquo;</span> across the platform.</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setConfirm(null)} className="flex-1 rounded-xl font-bold h-11 border-slate-200">Cancel</Button>
                <Button onClick={toggle} className={`flex-1 rounded-xl font-bold h-11 text-white ${confirm.action === "disable" ? "bg-red-600 hover:bg-red-700" : "bg-emerald-600 hover:bg-emerald-700"}`}>
                  {confirm.action === "disable" ? "Disable Agent" : "Enable Agent"}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
