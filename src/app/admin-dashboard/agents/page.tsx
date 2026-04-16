"use client";

import { motion } from "framer-motion";
import { Bot, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/AdminLayout";

const platformAgents = [
  { name: "Sales Assistant", creator: "Alice Johnson", status: "Online", chats: 1204 },
  { name: "Code Reviewer", creator: "Bob Smith", status: "Online", chats: 543 },
  { name: "Support Bot", creator: "System", status: "Offline", chats: 3102 },
  { name: "Marketing Writer", creator: "Carol White", status: "Online", chats: 89 },
];

export default function AdminAgents() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold">Platform Agents</h1>
          <p className="text-muted-foreground mt-1">Review and manage all agents active on the platform.</p>
        </motion.div>

        <div className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-xl font-semibold">Global Directory</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search agents..." className="pl-9 bg-background/50" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {platformAgents.map((a, i) => (
              <motion.div 
                key={a.name} 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="glass-card rounded-xl p-4 shadow-card flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="gradient-primary rounded-lg p-2.5">
                    <Bot className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium">{a.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">By {a.creator}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Total Chats</p>
                    <p className="text-sm font-semibold">{a.chats}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${a.status === "Online" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {a.status}
                  </span>
                  <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
