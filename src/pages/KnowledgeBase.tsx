import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, FileText, Trash2, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/DashboardLayout";

const uploadedFiles = [
  { name: "product-docs.pdf", size: "2.4 MB", date: "Apr 10" },
  { name: "faq-database.pdf", size: "1.1 MB", date: "Apr 8" },
  { name: "company-policies.pdf", size: "850 KB", date: "Apr 5" },
];

type Msg = { role: "user" | "ai"; content: string };

const KnowledgeBase = () => {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai" as const, content: "Test your agent here. Ask me anything about the uploaded knowledge." },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages(m => [...m, { role: "user" as const, content: input }, { role: "ai" as const, content: "Based on your knowledge base, here's what I found..." }]);
    setInput("");
  };

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <h1 className="font-heading text-3xl font-bold">Knowledge & Testing</h1>

        <Tabs defaultValue="knowledge" className="space-y-6">
          <TabsList className="glass-card shadow-card">
            <TabsTrigger value="knowledge">Knowledge Base</TabsTrigger>
            <TabsTrigger value="test">Test Agent</TabsTrigger>
          </TabsList>

          <TabsContent value="knowledge">
            <div className="grid gap-6 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-xl p-6 shadow-card space-y-4">
                <h2 className="font-heading text-lg font-semibold">Upload Files</h2>
                <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
                  <p className="text-sm font-medium">Drop files here or click to upload</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, TXT, DOCX up to 10MB</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Add Text</h3>
                  <Textarea placeholder="Paste text content here..." rows={4} />
                  <Button size="sm" className="gradient-primary text-primary-foreground">Add to Knowledge Base</Button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="glass-card rounded-xl p-6 shadow-card space-y-4">
                <h2 className="font-heading text-lg font-semibold">Uploaded Files</h2>
                <div className="space-y-2">
                  {uploadedFiles.map((f, i) => (
                    <div key={i} className="flex items-center justify-between rounded-lg border p-3">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-primary" />
                        <div>
                          <p className="text-sm font-medium">{f.name}</p>
                          <p className="text-xs text-muted-foreground">{f.size} · {f.date}</p>
                        </div>
                      </div>
                      <button className="text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="test">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-xl shadow-card overflow-hidden" style={{ height: "60vh" }}>
              <div className="flex flex-col h-full">
                <div className="border-b px-6 py-3 flex items-center gap-3">
                  <div className="gradient-primary rounded-lg p-1.5"><Bot className="h-4 w-4 text-primary-foreground" /></div>
                  <span className="font-heading font-semibold text-sm">Agent Test Chat</span>
                </div>
                <div className="flex-1 overflow-auto p-6 space-y-4">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex gap-3 ${m.role === "user" ? "justify-end" : ""}`}>
                      {m.role === "ai" && <div className="gradient-primary rounded-lg p-1.5 h-7 w-7 flex items-center justify-center shrink-0"><Bot className="h-3.5 w-3.5 text-primary-foreground" /></div>}
                      <div className={`max-w-md rounded-2xl px-4 py-3 text-sm ${m.role === "user" ? "gradient-primary text-primary-foreground" : "bg-muted"}`}>{m.content}</div>
                      {m.role === "user" && <div className="rounded-lg bg-primary/10 p-1.5 h-7 w-7 flex items-center justify-center shrink-0"><User className="h-3.5 w-3.5 text-primary" /></div>}
                    </div>
                  ))}
                </div>
                <div className="border-t p-4">
                  <form onSubmit={e => { e.preventDefault(); send(); }} className="flex gap-3">
                    <Input placeholder="Test your agent..." value={input} onChange={e => setInput(e.target.value)} className="flex-1" />
                    <Button type="submit" className="gradient-primary text-primary-foreground"><Send className="h-4 w-4" /></Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default KnowledgeBase;
