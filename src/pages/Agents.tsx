import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const allAgents = [
  { id: 1, name: "Sales Assistant", desc: "Handles customer inquiries and product recommendations.", category: "Sales" },
  { id: 2, name: "Code Reviewer", desc: "Reviews code and suggests improvements.", category: "Engineering" },
  { id: 3, name: "Support Bot", desc: "Answers common support questions 24/7.", category: "Support" },
  { id: 4, name: "Content Writer", desc: "Generates blog posts, emails, and social media content.", category: "Marketing" },
  { id: 5, name: "Data Analyst", desc: "Analyzes data and generates insights from datasets.", category: "Engineering" },
  { id: 6, name: "HR Assistant", desc: "Helps with onboarding, policies, and employee queries.", category: "HR" },
];

const categories = ["All", "Sales", "Engineering", "Support", "Marketing", "HR"];

const Agents = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = allAgents.filter(a =>
    (category === "All" || a.category === category) &&
    a.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <div>
          <h1 className="font-heading text-3xl font-bold">AI Agents</h1>
          <p className="text-muted-foreground mt-1">Browse and start chatting with available agents.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search agents..." value={search} onChange={e => setSearch(e.target.value)} className="pl-10" />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(c => (
              <Button key={c} size="sm" variant={category === c ? "default" : "outline"}
                onClick={() => setCategory(c)}
                className={category === c ? "gradient-primary text-primary-foreground" : ""}>
                {c}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <motion.div key={a.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              className="glass-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="gradient-primary rounded-lg p-2.5"><Bot className="h-5 w-5 text-primary-foreground" /></div>
                <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-1">{a.category}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold">{a.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{a.desc}</p>
              <Link to="/chat">
                <Button size="sm" className="mt-4 w-full gradient-primary text-primary-foreground gap-1">
                  Start Chat <ArrowRight className="h-3 w-3" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Agents;
