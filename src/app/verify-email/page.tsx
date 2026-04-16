"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [verified, setVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const nextOtp = [...otp];
    nextOtp[index] = value.slice(-1);
    setOtp(nextOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-6 text-center"
      >
        <Link href="/" className="mb-4 inline-flex items-center gap-2">
          <div className="gradient-primary rounded-lg p-1.5">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold">AgentLab</span>
        </Link>

        <AnimatePresence mode="wait">
          {!verified ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="glass-card space-y-6 rounded-2xl p-8 shadow-card"
            >
              <div>
                <h1 className="font-heading text-2xl font-bold">Verify your email</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  We sent a 6-digit code to your email address.
                </p>
              </div>

              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(element) => {
                      inputRefs.current[index] = element;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(event) => handleChange(index, event.target.value)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    className="h-12 w-12 rounded-lg border bg-background text-center text-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                ))}
              </div>

              <Button
                className="w-full gradient-primary text-primary-foreground"
                onClick={() => setVerified(true)}
              >
                Verify
              </Button>

              <p className="text-sm text-muted-foreground">
                Didn&apos;t receive a code?{" "}
                <button className="font-medium text-primary hover:underline">Resend</button>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card space-y-4 rounded-2xl p-8 shadow-card"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
              >
                <CheckCircle2 className="mx-auto h-16 w-16 text-accent" />
              </motion.div>
              <h2 className="font-heading text-2xl font-bold">Email Verified!</h2>
              <p className="text-sm text-muted-foreground">
                Your account has been verified successfully.
              </p>
              <Button asChild className="gradient-primary text-primary-foreground">
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}