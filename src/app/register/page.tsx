"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const getStrength = (p: string) => {
  let s = 0;
  if (p.length >= 8) s += 25;
  if (/[A-Z]/.test(p)) s += 25;
  if (/\d/.test(p)) s += 25;
  if (/[^A-Za-z0-9]/.test(p)) s += 25;
  return s;
};

const strengthLabel = (s: number) =>
  s <= 25 ? "Weak" : s <= 50 ? "Fair" : s <= 75 ? "Good" : "Strong";
const strengthColor = (s: number) =>
  s <= 25
    ? "bg-destructive"
    : s <= 50
    ? "bg-yellow-500"
    : "bg-accent";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const strength = getStrength(form.password);

  const set =
    (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-12"
        >
          <div className="mx-auto w-64 h-64 animate-float flex items-center justify-center">
            <div className="rounded-3xl bg-white/10 p-10 backdrop-blur-sm">
              <Bot className="h-32 w-32 text-white" />
            </div>
          </div>
          <h2 className="font-heading text-3xl font-bold text-primary-foreground mt-8">
            Join AgentLab
          </h2>
          <p className="text-primary-foreground/80 mt-3 max-w-sm mx-auto">
            Start building intelligent AI agents in minutes.
          </p>
        </motion.div>
      </div>

      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-6"
        >
          <div>
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="gradient-primary rounded-lg p-1.5">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">AgentLab</span>
            </Link>
            <h1 className="font-heading text-2xl font-bold">Create your account</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Get started with AgentLab for free.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="John Doe"
                  value={form.name}
                  onChange={set("name")}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={set("password")}
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {form.password && (
                <div className="space-y-1">
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${strengthColor(strength)}`}
                      style={{ width: `${strength}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Password strength: {strengthLabel(strength)}
                  </p>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={form.confirm}
                  onChange={set("confirm")}
                  className="pl-10"
                />
              </div>
              {form.confirm && form.confirm !== form.password && (
                <p className="text-xs text-destructive">Passwords do not match</p>
              )}
            </div>
            <label className="flex items-start gap-2 text-sm">
              <Checkbox className="mt-0.5" />
              <span className="text-muted-foreground">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
            <Button
              type="submit"
              className="w-full gradient-primary text-primary-foreground"
            >
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
