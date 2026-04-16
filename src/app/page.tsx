"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Bot,
  MessageSquare,
  Database,
  Shield,
  ArrowRight,
  Sparkles,
  Zap,
  Brain,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const features = [
  {
    icon: Bot,
    title: "AI Agent Builder",
    desc: "Create custom agents with templates, roles, and goals in minutes.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat Testing",
    desc: "Test your agents instantly with a live chat interface.",
  },
  {
    icon: Database,
    title: "Knowledge Base Upload",
    desc: "Feed your agents with PDFs, docs, and custom data.",
  },
  {
    icon: Shield,
    title: "Admin Control Panel",
    desc: "Full control over users, agents, and platform settings.",
  },
];

const steps = [
  {
    num: "01",
    title: "Create Agent",
    desc: "Choose a template or start from scratch.",
    icon: Sparkles,
  },
  {
    num: "02",
    title: "Customize Prompt",
    desc: "Define the role, tone, and behavior.",
    icon: Brain,
  },
  {
    num: "03",
    title: "Test in Chat",
    desc: "Interact with your agent in real time.",
    icon: Zap,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full glass-card">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="gradient-primary rounded-lg p-1.5">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold">AgentLab</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </a>
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm" className="gradient-primary text-primary-foreground">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-pulse-glow" />
        <div className="container relative mx-auto px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" animate="visible" className="space-y-6">
              <motion.div
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary"
              >
                <Sparkles className="h-3.5 w-3.5" /> Now in Public Beta
              </motion.div>
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="font-heading text-4xl font-bold leading-tight md:text-6xl"
              >
                Build and Test AI Agents{" "}
                <span className="gradient-text">in Minutes</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="max-w-lg text-lg text-muted-foreground"
              >
                Create custom AI agents with templates, prompts, and knowledge
                base. Ship intelligent assistants faster than ever.
              </motion.p>
              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex flex-wrap gap-4"
              >
                <Link href="/register">
                  <Button
                    size="lg"
                    className="gradient-primary text-primary-foreground gap-2"
                  >
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline">
                    Login
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />
                <div className="relative rounded-2xl shadow-card border border-border overflow-hidden bg-card p-8">
                  <div className="space-y-4">
                    {[
                      { label: "Sales Assistant", status: "Active", color: "bg-accent" },
                      { label: "Code Reviewer", status: "Training", color: "bg-yellow-500" },
                      { label: "Support Bot", status: "Active", color: "bg-accent" },
                    ].map((agent) => (
                      <div
                        key={agent.label}
                        className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 px-4 py-3"
                      >
                        <div className="gradient-primary rounded-md p-1.5">
                          <Bot className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="flex-1 text-sm font-medium">{agent.label}</span>
                        <span className="flex items-center gap-1.5 text-xs">
                          <span className={`h-2 w-2 rounded-full ${agent.color}`} />
                          {agent.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-heading text-3xl font-bold md:text-4xl"
            >
              Powerful <span className="gradient-text">Features</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mx-auto mt-4 max-w-xl text-muted-foreground"
            >
              Everything you need to build, test, and deploy intelligent AI agents.
            </motion.p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="glass-card group rounded-xl p-6 shadow-card transition-all hover:shadow-glow hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex rounded-lg gradient-primary p-2.5">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="font-heading text-3xl font-bold md:text-4xl"
            >
              How it <span className="gradient-text">Works</span>
            </motion.h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="relative glass-card rounded-xl p-8 shadow-card text-center"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gradient-primary">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="font-heading text-xs font-bold tracking-widest text-primary uppercase">
                  Step {s.num}
                </span>
                <h3 className="mt-2 font-heading text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="gradient-primary rounded-lg p-1.5">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-heading text-lg font-bold">AgentLab</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Build intelligent AI agents faster than ever.
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Docs"] },
              { title: "Company", links: ["About", "Blog", "Careers"] },
              { title: "Legal", links: ["Privacy", "Terms", "Contact"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-heading font-semibold mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link
                        href={["Privacy", "Terms"].includes(l) ? `/${l.toLowerCase()}` : "#"}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
            © 2026 AgentLab. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
