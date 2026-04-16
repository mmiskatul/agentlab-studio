"use client";

import { motion } from "framer-motion";
import { Database, Upload, FileText, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";

const docs = [
  { name: "Product Manual v2.pdf", size: "2.4 MB", type: "PDF", date: "Apr 12, 2026" },
  { name: "FAQ Database.docx", size: "890 KB", type: "DOCX", date: "Apr 10, 2026" },
  { name: "Pricing Guide.pdf", size: "1.1 MB", type: "PDF", date: "Apr 8, 2026" },
  { name: "API Reference.md", size: "340 KB", type: "Markdown", date: "Apr 6, 2026" },
];

export default function KnowledgePage() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-8">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold">Knowledge Base</h1>
          <p className="text-muted-foreground mt-1">Upload and manage documents for your agents.</p>
        </motion.div>

        {/* Upload zone */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-xl border-2 border-dashed border-primary/30 p-12 text-center shadow-card hover:border-primary/60 transition-colors"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary">
            <Upload className="h-8 w-8 text-primary-foreground" />
          </div>
          <h3 className="font-heading text-lg font-semibold mb-2">Drop files here</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Supports PDF, DOCX, TXT, Markdown — up to 50 MB each
          </p>
          <Button className="gradient-primary text-primary-foreground gap-2">
            <Plus className="h-4 w-4" /> Browse Files
          </Button>
        </motion.div>

        {/* Documents list */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-xl font-semibold">Uploaded Documents</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documents..." className="pl-10" />
            </div>
          </div>
          <div className="space-y-3">
            {docs.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="glass-card rounded-xl p-4 shadow-card flex items-center gap-4 hover:bg-muted/30 transition-colors"
              >
                <div className="rounded-lg bg-primary/10 p-2.5">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{d.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {d.size} · {d.type} · {d.date}
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                  Remove
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
