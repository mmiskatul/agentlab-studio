"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Bot,
  Eye,
  Search,
  ShieldCheck,
  ShieldOff,
  Sparkles,
  Verified,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AgentRecord = {
  id: string;
  name: string;
  creator: string;
  creatorId: string;
  category: string;
  status: "Active" | "Disabled";
  visibility: "Public" | "Private";
  knowledge: number;
  chats: number;
  updated: string;
  verified: boolean;
};

const agentsSeed: AgentRecord[] = [
  {
    id: "a1",
    name: "Data Analyst Pro",
    creator: "Grace Kim",
    creatorId: "u7",
    category: "Analytics",
    status: "Active",
    visibility: "Public",
    knowledge: 12,
    chats: 14200,
    updated: "Apr 12, 2026",
    verified: true,
  },
  {
    id: "a2",
    name: "UX Copywriter",
    creator: "Bob Smith",
    creatorId: "u2",
    category: "Design",
    status: "Active",
    visibility: "Public",
    knowledge: 5,
    chats: 8200,
    updated: "Apr 10, 2026",
    verified: false,
  },
  {
    id: "a3",
    name: "DevOps Helper",
    creator: "Grace Kim",
    creatorId: "u7",
    category: "Engineering",
    status: "Active",
    visibility: "Public",
    knowledge: 18,
    chats: 94000,
    updated: "Mar 28, 2026",
    verified: true,
  },
  {
    id: "a4",
    name: "Legal Reviewer",
    creator: "Bob Smith",
    creatorId: "u2",
    category: "Legal",
    status: "Active",
    visibility: "Private",
    knowledge: 8,
    chats: 3100,
    updated: "Apr 8, 2026",
    verified: true,
  },
  {
    id: "a5",
    name: "Sales Outreach Bot",
    creator: "Elena Marks",
    creatorId: "u5",
    category: "Sales",
    status: "Disabled",
    visibility: "Public",
    knowledge: 24,
    chats: 45000,
    updated: "Oct 5, 2025",
    verified: false,
  },
  {
    id: "a6",
    name: "Internal Onboarding Bot",
    creator: "Bob Smith",
    creatorId: "u2",
    category: "HR",
    status: "Active",
    visibility: "Private",
    knowledge: 6,
    chats: 420,
    updated: "Apr 1, 2026",
    verified: false,
  },
];

const statusStyle: Record<AgentRecord["status"], string> = {
  Active: "border-emerald-100 bg-emerald-50 text-emerald-700",
  Disabled: "border-slate-200 bg-slate-100 text-slate-600",
};

const visibilityStyle: Record<AgentRecord["visibility"], string> = {
  Public: "border-blue-100 bg-blue-50 text-blue-700",
  Private: "border-slate-200 bg-slate-100 text-slate-600",
};

export default function AdminAgentsPage() {
  const [agents, setAgents] = useState<AgentRecord[]>(agentsSeed);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | AgentRecord["status"]>("All");
  const [confirm, setConfirm] = useState<{ agent: AgentRecord; action: "disable" | "enable" } | null>(null);

  const filtered = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(search.toLowerCase()) ||
      agent.creator.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || agent.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const toggleStatus = () => {
    if (!confirm) return;
    setAgents((previous) =>
      previous.map((agent) =>
        agent.id === confirm.agent.id
          ? { ...agent, status: confirm.action === "disable" ? "Disabled" : "Active" }
          : agent
      )
    );
    setConfirm(null);
  };

  return (
    <div className="min-h-full bg-[radial-gradient(circle_at_top,_rgba(251,113,133,0.08),_transparent_24%),linear-gradient(180deg,#fff8f8_0%,#fffdfd_100%)]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* ── Page Title ── */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-[28px] font-bold text-slate-900 tracking-tight">Monitor agent quality</h1>
          <p className="text-slate-500 font-medium mt-1">Review public visibility and take action on agents that need moderation</p>
        </motion.div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.0 }}
            className="bg-white rounded-xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[13px] font-medium text-slate-500">Total Agents</p>
              <div className="p-2.5 rounded-xl bg-slate-50">
                <Bot className="h-5 w-5 text-slate-500" />
              </div>
            </div>
            <p className="font-heading text-[32px] font-bold text-slate-900 leading-none mb-4">{agents.length}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            className="bg-white rounded-xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[13px] font-medium text-slate-500">Active</p>
              <div className="p-2.5 rounded-xl bg-slate-50">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
              </div>
            </div>
            <p className="font-heading text-[32px] font-bold text-slate-900 leading-none mb-4">{agents.filter((agent) => agent.status === "Active").length}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="bg-white rounded-xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)]"
          >
            <div className="flex justify-between items-start mb-4">
              <p className="text-[13px] font-medium text-slate-500">Public</p>
              <div className="p-2.5 rounded-xl bg-slate-50">
                <Eye className="h-5 w-5 text-blue-500" />
              </div>
            </div>
            <p className="font-heading text-[32px] font-bold text-slate-900 leading-none mb-4">{agents.filter((agent) => agent.visibility === "Public").length}</p>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06, duration: 0.3 }}
          className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.05)]"
        >
          <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-md">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search name or creator..."
                className="h-11 rounded-full border-slate-200 bg-white pl-11 shadow-none"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {(["All", "Active", "Disabled"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStatusFilter(item)}
                  className={
                    statusFilter === item
                      ? "rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
                      : "rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                  }
                >
                  {item === "All" ? "All status" : item}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70 text-left text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                  <th className="px-6 py-4">Agent</th>
                  <th className="px-4 py-4">Creator</th>
                  <th className="px-4 py-4">Category</th>
                  <th className="px-4 py-4">Visibility</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Knowledge</th>
                  <th className="px-4 py-4">Chats</th>
                  <th className="px-4 py-4">Updated</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((agent) => (
                  <tr key={agent.id} className="transition-colors hover:bg-blue-50/30">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                          <Bot className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="truncate font-semibold text-slate-950">{agent.name}</p>
                            {agent.verified && <Verified className="h-4 w-4 text-blue-500" />}
                          </div>
                          <p className="text-sm text-slate-500">Operational visibility review</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-5">
                      <Link href={`/admin/users/${agent.creatorId}`} className="text-sm font-semibold text-slate-700 hover:text-blue-700">
                        {agent.creator}
                      </Link>
                    </td>
                    <td className="px-4 py-5">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {agent.category}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${visibilityStyle[agent.visibility]}`}>
                        {agent.visibility}
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyle[agent.status]}`}>
                        {agent.status}
                      </span>
                    </td>
                    <td className="px-4 py-5 text-sm font-medium text-slate-700">{agent.knowledge}</td>
                    <td className="px-4 py-5 text-sm font-medium text-slate-700">
                      {agent.chats.toLocaleString()}
                    </td>
                    <td className="px-4 py-5 text-sm text-slate-500">{agent.updated}</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/agents/${agent.id}`}>
                          <Button variant="ghost" size="sm" className="h-9 rounded-full px-4 text-slate-600 hover:bg-slate-100 hover:text-slate-900">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </Link>
                        {agent.status === "Active" ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setConfirm({ agent, action: "disable" })}
                            className="h-9 rounded-full px-4 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                          >
                            <ShieldOff className="mr-2 h-4 w-4" />
                            Disable
                          </Button>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setConfirm({ agent, action: "enable" })}
                            className="h-9 rounded-full px-4 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
                          >
                            <ShieldCheck className="mr-2 h-4 w-4" />
                            Enable
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center py-20">
              <Sparkles className="mb-3 h-10 w-10 text-slate-300" />
              <p className="font-semibold text-slate-700">No agents found</p>
            </div>
          )}
        </motion.section>
      </div>

      <AnimatePresence>
        {confirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-2xl"
            >
              <div className="mb-6 flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    confirm.action === "disable" ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <button
                  type="button"
                  onClick={() => setConfirm(null)}
                  className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <h2 className="text-xl font-extrabold tracking-tight text-slate-950">
                {confirm.action === "disable" ? "Disable" : "Enable"} agent?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This will {confirm.action} <span className="font-semibold text-slate-900">{confirm.agent.name}</span> across
                the platform.
              </p>

              <div className="mt-8 flex gap-3">
                <Button variant="outline" onClick={() => setConfirm(null)} className="h-11 flex-1 rounded-full">
                  Cancel
                </Button>
                <Button
                  onClick={toggleStatus}
                  className={`h-11 flex-1 rounded-full text-white ${
                    confirm.action === "disable"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-emerald-600 hover:bg-emerald-700"
                  }`}
                >
                  {confirm.action === "disable" ? "Disable agent" : "Enable agent"}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
