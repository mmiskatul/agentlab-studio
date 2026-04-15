import { motion } from "framer-motion";
import { Bot, PlusCircle, Activity, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

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

const CreatorDashboard = () => (
  <DashboardLayout>
    <div className="p-6 lg:p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold">Creator Studio</h1>
          <p className="text-muted-foreground mt-1">Manage and build your AI agents.</p>
        </div>
        <Link to="/builder">
          <Button className="gradient-primary text-primary-foreground gap-2">
            <PlusCircle className="h-4 w-4" /> Create Agent
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-5 shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
                <p className="font-heading text-2xl font-bold mt-1">{s.value}</p>
                <p className="text-xs text-accent mt-1">{s.change}</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-2.5"><s.icon className="h-5 w-5 text-primary" /></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div>
        <h2 className="font-heading text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-2">
          {recentActivity.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.05 }}
              className="glass-card rounded-lg p-4 shadow-card flex items-center justify-between">
              <span className="text-sm">{a.action}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {a.time}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </DashboardLayout>
);

export default CreatorDashboard;
