"use client";

import { motion } from "framer-motion";
import { Bell, Bot, Shield, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const preferenceItems = [
  {
    title: "Email notifications",
    description: "Get updates when agents finish training or need review.",
  },
  {
    title: "Product announcements",
    description: "Receive feature updates and release notes.",
  },
  {
    title: "Weekly summary",
    description: "A summary of activity, usage, and important alerts.",
  },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto flex w-full max-w-4xl flex-col gap-6"
      >
        <div>
          <h1 className="font-heading text-3xl font-bold">Settings</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your profile, preferences, and security.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <section className="glass-card rounded-2xl p-6 shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <div className="gradient-primary rounded-lg p-2">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold">Profile</h2>
                <p className="text-sm text-muted-foreground">Update your account details.</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input defaultValue="Agent Lab User" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input defaultValue="user@agentlab.dev" type="email" />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm font-medium">Organization</label>
              <Input defaultValue="AgentLab Studio" />
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="gradient-primary text-primary-foreground">Save Changes</Button>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-6 shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <div className="gradient-primary rounded-lg p-2">
                <Bell className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold">Notifications</h2>
                <p className="text-sm text-muted-foreground">
                  Choose what you want to hear about.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {preferenceItems.map((item) => (
                <label
                  key={item.title}
                  className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-background/50 p-4"
                >
                  <Checkbox className="mt-1" defaultChecked />
                  <span>
                    <span className="block text-sm font-medium">{item.title}</span>
                    <span className="block text-sm text-muted-foreground">{item.description}</span>
                  </span>
                </label>
              ))}
            </div>
          </section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <section className="glass-card rounded-2xl p-6 shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <div className="gradient-primary rounded-lg p-2">
                <Shield className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold">Security</h2>
                <p className="text-sm text-muted-foreground">Protect your workspace access.</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                Manage Two-Factor Authentication
              </Button>
            </div>
          </section>

          <section className="glass-card rounded-2xl p-6 shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <div className="gradient-primary rounded-lg p-2">
                <Bot className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold">Workspace</h2>
                <p className="text-sm text-muted-foreground">Tune your AgentLab experience.</p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/50 p-4">
                <span>
                  <span className="block text-sm font-medium">Auto-save drafts</span>
                  <span className="block text-sm text-muted-foreground">
                    Save builder changes automatically.
                  </span>
                </span>
                <Checkbox defaultChecked />
              </label>

              <label className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/50 p-4">
                <span>
                  <span className="block text-sm font-medium">Compact sidebar</span>
                  <span className="block text-sm text-muted-foreground">
                    Use a denser navigation layout.
                  </span>
                </span>
                <Checkbox />
              </label>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}