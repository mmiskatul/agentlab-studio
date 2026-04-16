"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Bot, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Check for admin credentials
    if (email.toLowerCase() === "admin@example.com" || email.toLowerCase() === "admin") {
      router.push("/admin-dashboard");
    } else {
      // Redirect to the main dashboard using any regular credential
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left illustration */}
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
            Welcome to AgentLab
          </h2>
          <p className="text-primary-foreground/80 mt-3 max-w-sm mx-auto">
            Build and test AI agents with an intuitive platform designed for speed.
          </p>
        </motion.div>
      </div>

      {/* Right form */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          <div>
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="gradient-primary rounded-lg p-1.5">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">AgentLab</span>
            </Link>
            <h1 className="font-heading text-2xl font-bold">Sign in to your account</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Welcome back! Enter your credentials to continue.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <Checkbox /> Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full gradient-primary text-primary-foreground"
            >
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary font-medium hover:underline">
              Create one
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
