"use client";

import { motion } from "framer-motion";
import { Bot, Plus, Search, Settings2, MoreHorizontal, Database, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

const creatorMyAgents = [
  { id: 1, name: "Customer Support Router", category: "Support", status: "Published", kbCount: 12, lastUpdated: "Today", queries: "14.2k" },
  { id: 2, name: "Internal onboarding Bot", category: "HR", status: "Draft", kbCount: 5, lastUpdated: "Yesterday", queries: "-" },
  { id: 3, name: "Sales Outreach Generator", category: "Sales", status: "Published", kbCount: 24, lastUpdated: "Oct 12", queries: "3.4k" },
  { id: 4, name: "Legal Document Analyzer", category: "Legal", status: "Published", kbCount: 8, lastUpdated: "Oct 10", queries: "892" },
];

export default function ManageAgentsPage() {
  return (
    <DashboardLayout role="creator">
      <div className="p-6 lg:p-10 space-y-8 max-w-[1400px] mx-auto min-h-full">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">My Agents</h1>
            <p className="text-slate-500 mt-2 font-medium text-lg">Manage your deployed agents and drafts.</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search your agents..." className="pl-11 h-12 bg-white border-slate-200/60 rounded-xl shadow-sm focus-visible:ring-blue-500 font-medium" />
            </div>
            <Link href="/creator" className="shrink-0">
               <Button className="h-12 w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 shadow-md shadow-blue-500/20">
                  <Plus className="w-5 h-5 mr-2" /> Create Agent
               </Button>
            </Link>
          </div>
        </div>

        {/* Table List View */}
        <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden mt-6">
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-slate-50/80 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-widest">
                       <th className="px-6 py-4 rounded-tl-3xl">Agent</th>
                       <th className="px-6 py-4">Status</th>
                       <th className="px-6 py-4">Knowledge Base</th>
                       <th className="px-6 py-4">Queries (30d)</th>
                       <th className="px-6 py-4 text-right rounded-tr-3xl">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                    {creatorMyAgents.map((a) => (
                       <tr key={a.id} className="hover:bg-slate-50/40 transition-colors group">
                          <td className="px-6 py-5">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200 shadow-sm">
                                   <Bot className="w-5 h-5 text-slate-700" />
                                </div>
                                <div>
                                   <p className="font-extrabold text-slate-900 text-[15px]">{a.name}</p>
                                   <div className="flex items-center gap-2 mt-0.5">
                                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{a.category}</span>
                                      <span className="text-slate-300">&bull;</span>
                                      <span className="text-xs font-medium text-slate-500">Updated {a.lastUpdated}</span>
                                   </div>
                                </div>
                             </div>
                          </td>
                          <td className="px-6 py-5">
                             <span className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${
                               a.status === "Published" ? "bg-emerald-50 text-emerald-600 border-emerald-200/50" : "bg-amber-50 text-amber-600 border-amber-200/50"
                             }`}>
                                {a.status}
                             </span>
                          </td>
                          <td className="px-6 py-5">
                             <div className="flex items-center gap-2">
                                <Database className="w-4 h-4 text-slate-400" />
                                <span className="font-semibold text-sm text-slate-700">{a.kbCount} Docs</span>
                             </div>
                          </td>
                          <td className="px-6 py-5">
                             <span className="font-bold text-sm text-slate-900">{a.queries}</span>
                          </td>
                          <td className="px-6 py-5 text-right">
                             <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                                <Button variant="outline" size="sm" className="h-9 rounded-lg border-slate-200 text-slate-600 font-bold shadow-sm hover:bg-slate-50 hidden sm:flex">
                                   <Settings2 className="w-4 h-4 mr-2" /> Configure
                                </Button>
                                <Button variant="outline" size="sm" className="h-9 px-3 rounded-lg border-slate-200 text-blue-600 font-bold shadow-sm hover:bg-blue-50 hidden sm:flex">
                                   <ArrowUpRight className="w-4 h-4 mr-1" /> Test
                                </Button>
                                <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-400 hover:text-slate-700">
                                   <MoreHorizontal className="w-4 h-4" />
                                </Button>
                             </div>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

      </div>
    </DashboardLayout>
  );
}