"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Activity, Bot, Clock, PlusCircle, TrendingUp } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Total Agents", value: "6", icon: Bot, change: "+2 this week" },
  { label: "Active Agents", value: "4", icon: Activity, change: "67% active" },
  { label: "Total Interactions", value: "1,284", icon: TrendingUp, change: "+12% vs last week" },
];

const recentActivity = [
  { action: "Agent 'Sales Assistant' updated", time: "5 min ago" },
  { action: "New agent 'Data Analyst' created", time: "1 hour ago" },
  { action: "Knowledge base updated for 'Support Bot'", time: "3 hours ago" },
  { action: "Agent 'Code Reviewer' testing completed", time: "Yesterday" },
];

export default function CreatorDashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-6 lg:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl font-bold">Creator Studio</h1>
            <p className="mt-1 text-muted-foreground">Manage and build your AI agents.</p>
          </div>
          <Button asChild className="gradient-primary text-primary-foreground gap-2">
            <Link href="/builder">
              <PlusCircle className="h-4 w-4" /> Create Agent
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-5 shadow-card"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 font-heading text-2xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs text-accent">{stat.change}</p>
                </div>
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <h2 className="mb-4 font-heading text-xl font-semibold">Recent Activity</h2>
          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={activity.action}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="glass-card flex items-center justify-between rounded-lg p-4 shadow-card"
              >
                <span className="text-sm">{activity.action}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" /> {activity.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}