"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Users, Eye, ShieldOff, ShieldCheck, ChevronRight, X, AlertTriangle, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

type UserRecord = {
  id: string; name: string; email: string; role: "User" | "Creator" | "Admin";
  status: "Active" | "Disabled" | "Flagged"; agents: number; chats: number;
  lastLogin: string; created: string;
};

const mockUsers: UserRecord[] = [
  { id: "u1", name: "Alice Johnson",  email: "alice@example.com",  role: "User",    status: "Active",   agents: 0, chats: 142, lastLogin: "2 hours ago",  created: "Jan 12, 2026" },
  { id: "u2", name: "Bob Smith",      email: "bob@example.com",    role: "Creator", status: "Active",   agents: 4, chats: 89,  lastLogin: "5 min ago",    created: "Dec 3, 2025"  },
  { id: "u3", name: "Carol White",    email: "carol@example.com",  role: "User",    status: "Disabled", agents: 0, chats: 12,  lastLogin: "3 days ago",   created: "Mar 5, 2026"  },
  { id: "u4", name: "David Lee",      email: "david@example.com",  role: "Admin",   status: "Active",   agents: 0, chats: 0,   lastLogin: "1 hour ago",   created: "Nov 10, 2025" },
  { id: "u5", name: "Elena Marks",    email: "elena@example.com",  role: "Creator", status: "Flagged",  agents: 2, chats: 34,  lastLogin: "1 week ago",   created: "Feb 18, 2026" },
  { id: "u6", name: "Frank Rivera",   email: "frank@example.com",  role: "User",    status: "Active",   agents: 0, chats: 78,  lastLogin: "1 day ago",    created: "Apr 1, 2026"  },
  { id: "u7", name: "Grace Kim",      email: "grace@example.com",  role: "Creator", status: "Active",   agents: 6, chats: 210, lastLogin: "30 min ago",   created: "Oct 20, 2025" },
  { id: "u8", name: "Henry Torres",   email: "henry@example.com",  role: "User",    status: "Active",   agents: 0, chats: 55,  lastLogin: "6 hours ago",  created: "Apr 8, 2026"  },
];

const roleStyle: Record<string, string> = {
  User:    "bg-blue-50 text-blue-700 border-blue-100",
  Creator: "bg-violet-50 text-violet-700 border-violet-100",
  Admin:   "bg-red-50 text-red-700 border-red-100",
};
const statusStyle: Record<string, string> = {
  Active:   "bg-emerald-50 text-emerald-700 border-emerald-100",
  Disabled: "bg-slate-100 text-slate-500 border-slate-200",
  Flagged:  "bg-amber-50 text-amber-700 border-amber-100",
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserRecord[]>(mockUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [confirm, setConfirm] = useState<{ user: UserRecord; action: "disable" | "enable" } | null>(null);

  const filtered = users.filter((u) => {
    const matchQ  = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase());
    const matchR  = roleFilter === "All"   || u.role === roleFilter;
    const matchS  = statusFilter === "All" || u.status === statusFilter;
    return matchQ && matchR && matchS;
  });

  const toggle = () => {
    if (!confirm) return;
    setUsers((prev) => prev.map((u) => u.id === confirm.user.id ? { ...u, status: confirm.action === "disable" ? "Disabled" : "Active" } : u));
    setConfirm(null);
  };

  return (
    <div className="min-h-full bg-[#fafafa] p-6 lg:p-10 space-y-8">

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center text-red-600 font-bold text-[11px] tracking-[0.2em] uppercase mb-3 bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100">
            Admin · Users
          </div>
          <h1 className="font-heading text-3xl font-extrabold text-slate-900 tracking-tight">Users Management</h1>
          <p className="text-slate-500 mt-1 font-medium">{users.length} registered users — {users.filter(u => u.status === "Active").length} active</p>
        </div>
      </motion.div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name or email…" className="pl-11 h-11 rounded-xl bg-white border-slate-200/60 shadow-sm font-medium" />
        </div>
        {["All","User","Creator","Admin"].map((r) => (
          <button key={r} onClick={() => setRoleFilter(r)}
            className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${roleFilter === r ? "bg-slate-900 text-white border-transparent shadow-md" : "bg-white border-slate-200/60 text-slate-600 shadow-sm hover:bg-slate-50"}`}
          >{r === "All" ? "All Roles" : r}</button>
        ))}
        {["All","Active","Disabled","Flagged"].map((s) => (
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
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Agents</th>
                <th className="px-6 py-4">Chats</th>
                <th className="px-6 py-4">Last Login</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <AnimatePresence>
                {filtered.map((u) => (
                  <motion.tr key={u.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="hover:bg-slate-50/40 group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center font-bold text-slate-700 text-sm shadow-sm shrink-0">{u.name[0]}</div>
                        <div>
                          <p className="font-bold text-slate-900 text-[14px]">{u.name}</p>
                          <p className="text-[12px] text-slate-500 font-medium">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4"><span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${roleStyle[u.role]}`}>{u.role}</span></td>
                    <td className="px-6 py-4"><span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${statusStyle[u.status]}`}>{u.status}</span></td>
                    <td className="px-6 py-4"><span className="font-bold text-slate-800 text-sm">{u.agents}</span></td>
                    <td className="px-6 py-4"><span className="font-bold text-slate-800 text-sm">{u.chats}</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-medium text-slate-500">{u.lastLogin}</span></td>
                    <td className="px-6 py-4"><span className="text-sm font-medium text-slate-500">{u.created}</span></td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/users/${u.id}`}>
                          <Button variant="ghost" size="sm" className="h-8 rounded-lg font-bold text-slate-500 hover:text-blue-600 hover:bg-blue-50 hidden sm:flex">
                            <Eye className="w-3.5 h-3.5 mr-1" /> View
                          </Button>
                        </Link>
                        {u.status === "Active" || u.status === "Flagged" ? (
                          <Button variant="ghost" size="sm" onClick={() => setConfirm({ user: u, action: "disable" })} className="h-8 rounded-lg font-bold text-red-500 hover:bg-red-50 hidden sm:flex">
                            <ShieldOff className="w-3.5 h-3.5 mr-1" /> Disable
                          </Button>
                        ) : (
                          <Button variant="ghost" size="sm" onClick={() => setConfirm({ user: u, action: "enable" })} className="h-8 rounded-lg font-bold text-emerald-600 hover:bg-emerald-50 hidden sm:flex">
                            <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Enable
                          </Button>
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
          <div className="py-20 flex flex-col items-center text-center">
            <Users className="w-10 h-10 text-slate-300 mb-3" />
            <p className="font-bold text-slate-700">No users found</p>
            <Button variant="ghost" className="mt-3 font-bold text-red-600 hover:bg-red-50 rounded-xl" onClick={() => { setSearch(""); setRoleFilter("All"); setStatusFilter("All"); }}>Clear filters</Button>
          </div>
        )}
        <div className="p-4 border-t border-slate-100 bg-slate-50/40 flex items-center justify-between text-sm font-medium text-slate-500">
          <span>Showing {filtered.length} of {users.length} users</span>
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
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${confirm.action === "disable" ? "bg-red-50" : "bg-emerald-50"}`}>
                  <AlertTriangle className={`w-6 h-6 ${confirm.action === "disable" ? "text-red-500" : "text-emerald-500"}`} />
                </div>
                <button onClick={() => setConfirm(null)} className="p-2 rounded-xl hover:bg-slate-100"><X className="w-5 h-5 text-slate-400" /></button>
              </div>
              <h2 className="font-heading text-xl font-extrabold text-slate-900 mb-2">{confirm.action === "disable" ? "Disable" : "Enable"} User?</h2>
              <p className="text-slate-500 font-medium text-sm mb-8">This will {confirm.action} <span className="font-bold text-slate-800">{confirm.user.name}</span> ({confirm.user.email}).</p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setConfirm(null)} className="flex-1 rounded-xl font-bold h-11 border-slate-200">Cancel</Button>
                <Button onClick={toggle} className={`flex-1 rounded-xl font-bold h-11 text-white ${confirm.action === "disable" ? "bg-red-600 hover:bg-red-700" : "bg-emerald-600 hover:bg-emerald-700"}`}>
                  {confirm.action === "disable" ? "Disable User" : "Enable User"}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
