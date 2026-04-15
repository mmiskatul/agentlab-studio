import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Bot, Activity, Key, Shield, Search, BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/DashboardLayout";

const stats = [
  { label: "Total Users", value: "1,248", icon: Users, change: "+24 this week" },
  { label: "Active Agents", value: "32", icon: Bot, change: "85% uptime" },
  { label: "API Requests", value: "45.2K", icon: Activity, change: "+18% vs last week" },
  { label: "Avg Response", value: "1.2s", icon: BarChart3, change: "-0.3s improved" },
];

const users = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin", agents: 5, joined: "Mar 15" },
  { name: "Bob Smith", email: "bob@example.com", role: "Creator", agents: 3, joined: "Mar 22" },
  { name: "Carol White", email: "carol@example.com", role: "User", agents: 0, joined: "Apr 1" },
  { name: "Dave Brown", email: "dave@example.com", role: "Creator", agents: 8, joined: "Apr 5" },
];

const logs = [
  { event: "User login", user: "alice@example.com", time: "2 min ago", status: "success" },
  { event: "Agent created", user: "bob@example.com", time: "15 min ago", status: "success" },
  { event: "API rate limit hit", user: "dave@example.com", time: "1 hour ago", status: "warning" },
  { event: "Failed login attempt", user: "unknown@test.com", time: "2 hours ago", status: "error" },
];

const AdminDashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <div>
          <h1 className="font-heading text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor platform health and manage resources.</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="glass-card shadow-card">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          </TabsContent>

          <TabsContent value="users">
            <div className="glass-card rounded-xl shadow-card overflow-hidden">
              <div className="p-4 border-b">
                <div className="relative max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search users..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Name</th>
                      <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Email</th>
                      <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Role</th>
                      <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Agents</th>
                      <th className="px-4 py-3 text-sm font-medium text-muted-foreground">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.filter(u => u.name.toLowerCase().includes(search.toLowerCase())).map((u, i) => (
                      <tr key={i} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                        <td className="px-4 py-3 text-sm font-medium">{u.name}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{u.email}</td>
                        <td className="px-4 py-3"><span className={`text-xs font-medium px-2 py-1 rounded-full ${u.role === "Admin" ? "bg-primary/10 text-primary" : u.role === "Creator" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>{u.role}</span></td>
                        <td className="px-4 py-3 text-sm">{u.agents}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{u.joined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="logs">
            <div className="space-y-2">
              {logs.map((l, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-lg p-4 shadow-card flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${l.status === "success" ? "bg-accent" : l.status === "warning" ? "bg-yellow-500" : "bg-destructive"}`} />
                    <div>
                      <p className="text-sm font-medium">{l.event}</p>
                      <p className="text-xs text-muted-foreground">{l.user}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="h-3 w-3" /> {l.time}</span>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="glass-card rounded-xl p-6 shadow-card space-y-6">
              <div>
                <h2 className="font-heading text-lg font-semibold">API Settings</h2>
                <p className="text-sm text-muted-foreground mt-1">Manage API keys and access.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">API Key</label>
                  <div className="flex gap-3">
                    <Input value="sk-•••••••••••••••••••••" readOnly className="font-mono" />
                    <Button variant="outline">Regenerate</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Webhook URL</label>
                  <Input placeholder="https://your-app.com/webhook" />
                </div>
                <Button className="gradient-primary text-primary-foreground">Save Settings</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
