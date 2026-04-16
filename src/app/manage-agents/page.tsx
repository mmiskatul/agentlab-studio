"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Edit, Search, ToggleLeft, ToggleRight, Trash2 } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialAgents = [
  { id: 1, name: "Sales Assistant", status: true, chats: 45, category: "Sales" },
  { id: 2, name: "Code Reviewer", status: true, chats: 32, category: "Engineering" },
  { id: 3, name: "Support Bot", status: false, chats: 78, category: "Support" },
  { id: 4, name: "Content Writer", status: true, chats: 21, category: "Marketing" },
  { id: 5, name: "Data Analyst", status: true, chats: 15, category: "Engineering" },
];

export default function AgentManagementPage() {
  const [agents, setAgents] = useState(initialAgents);
  const [search, setSearch] = useState("");

  const toggleStatus = (id: number) => {
    setAgents((currentAgents) =>
      currentAgents.map((agent) =>
        agent.id === id ? { ...agent, status: !agent.status } : agent
      )
    );
  };

  const deleteAgent = (id: number) => {
    setAgents((currentAgents) => currentAgents.filter((agent) => agent.id !== id));
  };

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6 lg:p-8">
        <div>
          <h1 className="font-heading text-3xl font-bold">Agent Management</h1>
          <p className="mt-1 text-muted-foreground">Edit, toggle, and manage your agents.</p>
        </div>

        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search agents..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid gap-4">
          {filteredAgents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card flex items-center justify-between rounded-xl p-5 shadow-card"
            >
              <div className="flex items-center gap-4">
                <div className="gradient-primary rounded-lg p-2.5">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{agent.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {agent.category} · {agent.chats} chats
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    agent.status ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {agent.status ? "Active" : "Inactive"}
                </span>
                <button
                  type="button"
                  onClick={() => toggleStatus(agent.id)}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {agent.status ? (
                    <ToggleRight className="h-5 w-5 text-accent" />
                  ) : (
                    <ToggleLeft className="h-5 w-5" />
                  )}
                </button>
                <Button size="sm" variant="ghost" aria-label={`Edit ${agent.name}`}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => deleteAgent(agent.id)}
                  aria-label={`Delete ${agent.name}`}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}