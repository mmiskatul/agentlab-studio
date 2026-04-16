"use client";

import { motion } from "framer-motion";
import { Bot, MessageSquare, Search, ArrowRight, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";

const agents = [
  { id: 1, name: "Sales Assistant", desc: "Handles customer inquiries and product recommendations.", category: "Sales" },
  { id: 2, name: "Code Reviewer", desc: "Reviews code and suggests improvements.", category: "Engineering" },
  { id: 3, name: "Support Bot", desc: "Answers common support questions 24/7.", category: "Support" },
  { id: 4, name: "Content Writer", desc: "Generates blog posts, emails, and social media content.", category: "Marketing" },
];

const recentChats = [
  { agent: "Sales Assistant", message: "How can I help you today?", time: "2 min ago" },
  { agent: "Code Reviewer", message: "I found 3 issues in your PR.", time: "1 hour ago" },
  { agent: "Support Bot", message: "Your ticket has been resolved.", time: "3 hours ago" },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold">Welcome back! 👋</h1>
          <p className="text-muted-foreground mt-1">Here&apos;s what&apos;s happening with your AI agents.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Active Agents", value: "4", icon: Bot },
            { label: "Total Chats", value: "128", icon: MessageSquare },
            { label: "This Week", value: "32", icon: Sparkles },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-5 shadow-card"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="font-heading text-2xl font-bold mt-1">{s.value}</p>
                </div>
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agents */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-xl font-semibold">Available Agents</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search agents..." className="pl-10" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((a, i) => (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="glass-card rounded-xl p-5 shadow-card hover:shadow-glow transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="gradient-primary rounded-lg p-2">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
                    {a.category}
                  </span>
                </div>
                <h3 className="font-heading font-semibold">{a.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{a.desc}</p>
                <Link href="/chat">
                  <Button size="sm" className="mt-4 w-full gradient-primary text-primary-foreground gap-1">
                    Start Chat <ArrowRight className="h-3 w-3" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Chats */}
        <div>
          <h2 className="font-heading text-xl font-semibold mb-4">Recent Chats</h2>
          <div className="space-y-2">
            {recentChats.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="glass-card rounded-lg p-4 shadow-card flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="gradient-primary rounded-lg p-2">
                    <Bot className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{c.agent}</p>
                    <p className="text-xs text-muted-foreground">{c.message}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {c.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
