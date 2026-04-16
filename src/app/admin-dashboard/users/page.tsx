"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Search, Ban, Shield, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type User = { id: number; name: string; email: string; role: "User" | "Creator" | "Admin"; plan: string; status: "Active" | "Inactive" | "Banned"; joined: string };

const initialUsers: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "User", plan: "Free", status: "Active", joined: "Jan 2026" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Creator", plan: "Pro", status: "Active", joined: "Dec 2025" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "User", plan: "Free", status: "Inactive", joined: "Mar 2026" },
  { id: 4, name: "David Lee", email: "david@example.com", role: "Admin", plan: "Enterprise", status: "Active", joined: "Nov 2025" },
  { id: 5, name: "Elena Marks", email: "elena@example.com", role: "Creator", plan: "Pro", status: "Banned", joined: "Feb 2026" },
  { id: 6, name: "Frank Rivera", email: "frank@example.com", role: "User", plan: "Free", status: "Active", joined: "Apr 2026" },
];

const statusStyle: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-600 border-emerald-200/50",
  Inactive: "bg-slate-50 text-slate-500 border-slate-200/50",
  Banned: "bg-red-50 text-red-600 border-red-200/50",
};
const roleStyle: Record<string, string> = {
  User: "bg-blue-50 text-blue-600",
  Creator: "bg-violet-50 text-violet-600",
  Admin: "bg-red-50 text-red-600",
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<User | null>(null);

  const filtered = users.filter((u) => u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()));
  const toggleBan = (id: number) => setUsers((prev) => prev.map((u) => u.id === id ? { ...u, status: u.status === "Banned" ? "Active" : "Banned" } : u));

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-[1400px] mx-auto min-h-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Manage Users</h1>
          <p className="text-slate-500 mt-2 font-medium text-lg">{users.length} total users — {users.filter(u => u.status === "Active").length} active</p>
        </motion.div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search users..." className="pl-11 h-12 bg-white border-slate-200/60 rounded-xl shadow-sm font-medium" />
        </div>
      </div>

      <div className="bg-white rounded-[2rem] border border-slate-200/60 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">User</th><th className="px-6 py-4">Role</th><th className="px-6 py-4">Plan</th><th className="px-6 py-4">Status</th><th className="px-6 py-4">Joined</th><th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((u) => (
                <motion.tr key={u.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hover:bg-slate-50/40 group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 flex items-center justify-center font-bold text-slate-700 text-sm shadow-sm">{u.name[0]}</div>
                      <div><p className="font-extrabold text-slate-900 text-[15px]">{u.name}</p><p className="text-xs text-slate-500 font-medium">{u.email}</p></div>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md ${roleStyle[u.role]}`}>{u.role}</span></td>
                  <td className="px-6 py-4"><span className="text-sm font-semibold text-slate-700">{u.plan}</span></td>
                  <td className="px-6 py-4"><span className={`inline-flex px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest border ${statusStyle[u.status]}`}>{u.status}</span></td>
                  <td className="px-6 py-4"><span className="text-sm font-medium text-slate-500">{u.joined}</span></td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setSelected(u)} className="h-9 px-3 rounded-lg text-slate-500 hover:bg-slate-100 font-bold hidden sm:flex"><ExternalLink className="w-4 h-4 mr-1" /> View</Button>
                      <Button variant="ghost" size="sm" onClick={() => toggleBan(u.id)} className={`h-9 px-3 rounded-lg font-bold hidden sm:flex ${u.status === "Banned" ? "text-emerald-600 hover:bg-emerald-50" : "text-red-500 hover:bg-red-50"}`}>
                        <Ban className="w-4 h-4 mr-1" /> {u.status === "Banned" ? "Unban" : "Ban"}
                      </Button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white rounded-[2rem] p-8 shadow-2xl max-w-md w-full border border-slate-200/60">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center font-bold text-2xl text-slate-700">{selected.name[0]}</div>
                <button onClick={() => setSelected(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-5 h-5 text-slate-500" /></button>
              </div>
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-1">{selected.name}</h2>
              <p className="text-sm text-slate-500 font-medium mb-6">{selected.email}</p>
              <div className="space-y-3">
                {[["Role", selected.role], ["Plan", selected.plan], ["Status", selected.status], ["Joined", selected.joined]].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <span className="text-sm font-bold text-slate-500">{k}</span><span className="text-sm font-bold text-slate-900">{v}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <Button variant="outline" onClick={() => setSelected(null)} className="flex-1 rounded-xl font-bold h-11">Close</Button>
                <Button onClick={() => { toggleBan(selected.id); setSelected(null); }} className={`flex-1 rounded-xl font-bold h-11 ${selected.status === "Banned" ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}>
                  {selected.status === "Banned" ? "Unban User" : "Ban User"}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
