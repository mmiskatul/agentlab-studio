"use client";

import { motion } from "framer-motion";
import { Users, Bot, MessageSquare, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/components/AdminLayout";
import Link from "next/link";

const stats = [
  { label: "Total Users", value: "1,284", icon: Users, trend: "+12%" },
  { label: "Active Agents", value: "47", icon: Bot, trend: "+5%" },
  { label: "Total Chats", value: "8,921", icon: MessageSquare, trend: "+23%" },
  { label: "Uptime", value: "99.9%", icon: TrendingUp, trend: "Stable" },
];

const recentUsers = [
  { name: "Alice Johnson", email: "alice@example.com", role: "User", status: "Active" },
  { name: "Bob Smith", email: "bob@example.com", role: "Creator", status: "Active" },
  { name: "Carol White", email: "carol@example.com", role: "User", status: "Inactive" },
  { name: "David Lee", email: "david@example.com", role: "Admin", status: "Active" },
];

export default function AdminOverview() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold">Admin Overview</h1>
          <p className="text-muted-foreground mt-1">Platform overview and general statistics.</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 shadow-card"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {s.trend}
                </span>
              </div>
              <p className="font-heading text-2xl font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-xl font-semibold">Recent Activity</h2>
            <Link href="/admin-dashboard/users">
              <Button variant="outline" size="sm">View All Users</Button>
            </Link>
          </div>
          <div className="glass-card rounded-xl shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/30">
                <tr>
                  {["Name", "Email", "Role", "Status"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentUsers.slice(0, 3).map((u, i) => (
                  <motion.tr
                    key={u.email}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium">{u.name}</td>
                    <td className="px-4 py-3 text-muted-foreground">{u.email}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{u.role}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`flex items-center gap-1.5 text-xs font-medium ${u.status === "Active" ? "text-primary" : "text-muted-foreground"}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${u.status === "Active" ? "bg-primary" : "bg-muted-foreground"}`} />
                        {u.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
