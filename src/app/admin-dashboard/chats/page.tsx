"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/components/AdminLayout";

const recentPlatformChats = [
  { id: "CHT-001", user: "Alice Johnson", agent: "Sales Assistant", messages: 12, time: "10 mins ago" },
  { id: "CHT-002", user: "Bob Smith", agent: "Code Reviewer", messages: 45, time: "1 hour ago" },
  { id: "CHT-003", user: "John Doe", agent: "Support Bot", messages: 3, time: "2 hours ago" },
];

export default function AdminChats() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold">System Monitor</h1>
          <p className="text-muted-foreground mt-1">Live platform activity and chat monitoring.</p>
        </motion.div>

        <div className="space-y-4 mt-6">
          <h2 className="font-heading text-xl font-semibold">Live Activity Stream</h2>
          <div className="space-y-3">
            {recentPlatformChats.map((c, i) => (
              <motion.div 
                key={c.id} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="glass-card rounded-xl p-4 shadow-card flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 rounded-full p-2">
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{c.user}</span>
                      <span className="text-muted-foreground text-xs">chatting with</span>
                      <span className="font-medium text-sm text-primary">{c.agent}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Chat ID: {c.id} • {c.messages} messages</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{c.time}</p>
                  <Button variant="link" size="sm" className="h-auto p-0 mt-1">View Log</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
