"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/DashboardLayout";

export default function BuilderPage() {
  const [temperature, setTemperature] = useState([0.7]);

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-3xl font-bold">Agent Builder</h1>
            <p className="text-muted-foreground mt-1">Configure your AI agent step by step.</p>
          </div>
          <Button className="gradient-primary text-primary-foreground gap-2">
            <Save className="h-4 w-4" /> Save Agent
          </Button>
        </div>

        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="glass-card shadow-card">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="prompt">Prompt</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card rounded-xl p-6 shadow-card space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Agent Name</label>
                  <Input placeholder="e.g., Sales Assistant" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Template</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blank">Blank</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="coding">Coding</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Role</label>
                  <Input placeholder="e.g., Customer Support Specialist" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Goal</label>
                  <Input placeholder="e.g., Help customers resolve issues" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea placeholder="Describe what this agent does..." rows={3} />
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="prompt">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card rounded-xl p-6 shadow-card space-y-5"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium">System Prompt</label>
                <Textarea
                  placeholder="You are a helpful AI assistant..."
                  rows={8}
                  className="font-mono text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Task Rules</label>
                <Textarea
                  placeholder={"1. Always be polite\n2. Ask clarifying questions\n3. Provide sources"}
                  rows={5}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tone</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select tone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="casual">Casual</SelectItem>
                    <SelectItem value="formal">Formal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="settings">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass-card rounded-xl p-6 shadow-card space-y-5"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium">Model</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt4">GPT-4</SelectItem>
                    <SelectItem value="gpt35">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="claude">Claude 3</SelectItem>
                    <SelectItem value="gemini">Gemini Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Temperature</label>
                  <span className="text-sm text-muted-foreground">{temperature[0]}</span>
                </div>
                <Slider
                  value={temperature}
                  onValueChange={setTemperature}
                  max={2}
                  step={0.1}
                />
                <p className="text-xs text-muted-foreground">
                  Lower = more focused, Higher = more creative
                </p>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
