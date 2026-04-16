"use client";

import { motion } from "framer-motion";
import { Bot, MessageSquare, ArrowRight, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

const agents = [
  { id: 1, name: "Sales Assistant", desc: "Handles customer inquiries.", category: "Sales", chats: 48, active: true },
  { id: 2, name: "Code Reviewer", desc: "Reviews code and suggests improvements.", category: "Engineering", chats: 32, active: true },
  { id: 3, name: "Support Bot", desc: "Answers common support questions 24/7.", category: "Support", chats: 64, active: false },
  { id: 4, name: "Content Writer", desc: "Generates blog posts, emails, and social content.", category: "Marketing", chats: 21, active: true },
];

export default function AgentsPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="font-heading text-3xl font-bold">My Agents</h1>
            <p className="text-muted-foreground mt-1">Manage and monitor all your AI agents.</p>
          </div>
          <Link href="/builder">
            <Button className="gradient-primary text-primary-foreground gap-2">
              <Plus className="h-4 w-4" /> New Agent
            </Button>
          </Link>
        </motion.div>

        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search agents..." className="pl-10" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="gradient-primary rounded-lg p-2">
                    <Bot className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">{a.name}</h3>
                    <span className="text-xs text-primary bg-primary/10 rounded-full px-2 py-0.5">
                      {a.category}
                    </span>
                  </div>
                </div>
                <span className={`flex items-center gap-1.5 text-xs font-medium ${a.active ? "text-accent" : "text-muted-foreground"}`}>
                  <span className={`h-2 w-2 rounded-full ${a.active ? "bg-accent" : "bg-muted-foreground"}`} />
                  {a.active ? "Active" : "Inactive"}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MessageSquare className="h-3.5 w-3.5" /> {a.chats} chats
                </span>
                <Link href="/chat">
                  <Button size="sm" variant="outline" className="gap-1">
                    Chat <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
