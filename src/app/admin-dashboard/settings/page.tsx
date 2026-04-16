"use client";

import { motion } from "framer-motion";
import { Settings, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AdminLayout from "@/components/AdminLayout";

export default function AdminSettings() {
  return (
    <AdminLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-3xl font-bold">Platform Settings</h1>
          <p className="text-muted-foreground mt-1">Configure global application parameters.</p>
        </motion.div>

        <div className="max-w-2xl mt-6">
          <div className="glass-card rounded-xl p-6 shadow-card space-y-6">
            <div className="space-y-4">
              <h2 className="font-heading font-semibold text-xl">General Configurations</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Platform Name</label>
                <Input defaultValue="AgentLab Studio" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Support Email</label>
                <Input defaultValue="support@agentlab.example.com" />
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-border">
              <h2 className="font-heading font-semibold text-xl">Security</h2>
              <div className="space-y-2">
                <label className="text-sm font-medium">Session Timeout (minutes)</label>
                <Input type="number" defaultValue="120" />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button className="gap-2">
                <Save className="h-4 w-4" /> Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
