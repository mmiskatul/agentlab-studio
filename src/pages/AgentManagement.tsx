import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Search, Edit, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";

const initialAgents = [
  { id: 1, name: "Sales Assistant", status: true, chats: 45, category: "Sales" },
  { id: 2, name: "Code Reviewer", status: true, chats: 32, category: "Engineering" },
  { id: 3, name: "Support Bot", status: false, chats: 78, category: "Support" },
  { id: 4, name: "Content Writer", status: true, chats: 21, category: "Marketing" },
  { id: 5, name: "Data Analyst", status: true, chats: 15, category: "Engineering" },
];

const AgentManagement = () => {
  const [agents, setAgents] = useState(initialAgents);
  const [search, setSearch] = useState("");

  const toggleStatus = (id: number) => setAgents(a => a.map(ag => ag.id === id ? { ...ag, status: !ag.status } : ag));
  const deleteAgent = (id: number) => setAgents(a => a.filter(ag => ag.id !== id));

  const filtered = agents.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <div>
          <h1 className="font-heading text-3xl font-bold">Agent Management</h1>
          <p className="text-muted-foreground mt-1">Edit, toggle, and manage your agents.</p>
        </div>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search agents..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
        </div>

        <div className="grid gap-4">
          {filtered.map((a, i) => (
            <motion.div key={a.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-5 shadow-card flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="gradient-primary rounded-lg p-2.5"><Bot className="h-5 w-5 text-primary-foreground" /></div>
                <div>
                  <h3 className="font-heading font-semibold">{a.name}</h3>
                  <p className="text-xs text-muted-foreground">{a.category} · {a.chats} chats</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${a.status ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>
                  {a.status ? "Active" : "Inactive"}
                </span>
                <button onClick={() => toggleStatus(a.id)} className="text-muted-foreground hover:text-foreground transition-colors">
                  {a.status ? <ToggleRight className="h-5 w-5 text-accent" /> : <ToggleLeft className="h-5 w-5" />}
                </button>
                <Button size="sm" variant="ghost"><Edit className="h-4 w-4" /></Button>
                <Button size="sm" variant="ghost" onClick={() => deleteAgent(a.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AgentManagement;
