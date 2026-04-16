"use client";

import { motion } from "framer-motion";
import { Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/AdminLayout";

const allUsers = [
  { name: "Alice Johnson", email: "alice@example.com", role: "User", status: "Active" },
  { name: "Bob Smith", email: "bob@example.com", role: "Creator", status: "Active" },
  { name: "Carol White", email: "carol@example.com", role: "User", status: "Inactive" },
  { name: "David Lee", email: "david@example.com", role: "Admin", status: "Active" },
  { name: "Eve Davis", email: "eve@example.com", role: "User", status: "Active" },
];

export default function AdminUsers() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold">Manage Users</h1>
          <p className="text-muted-foreground mt-1">View, edit, and moderate platform users.</p>
        </motion.div>

        <div className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-semibold">User Directory</h2>
            <div className="relative w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search users by name or email..." className="pl-9 bg-background/50" />
            </div>
          </div>
          <div className="glass-card rounded-xl shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/30">
                <tr>
                  {["Name", "Email", "Role", "Status", "Actions"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {allUsers.map((u, i) => (
                  <motion.tr 
                    key={u.email} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
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
                    <td className="px-4 py-3">
                      <Button variant="ghost" size="sm"><MoreVertical className="h-4 w-4" /></Button>
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
