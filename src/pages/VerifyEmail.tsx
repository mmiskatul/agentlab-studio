import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [verified, setVerified] = useState(false);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (i: number, v: string) => {
    if (!/^\d*$/.test(v)) return;
    const next = [...otp];
    next[i] = v.slice(-1);
    setOtp(next);
    if (v && i < 5) refs.current[i + 1]?.focus();
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) refs.current[i - 1]?.focus();
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md text-center space-y-6">
        <Link to="/" className="inline-flex items-center gap-2 mb-4">
          <div className="gradient-primary rounded-lg p-1.5"><Bot className="h-5 w-5 text-primary-foreground" /></div>
          <span className="font-heading text-xl font-bold">AgentLab</span>
        </Link>

        <AnimatePresence mode="wait">
          {!verified ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="glass-card rounded-2xl p-8 shadow-card space-y-6">
              <div>
                <h1 className="font-heading text-2xl font-bold">Verify your email</h1>
                <p className="mt-2 text-sm text-muted-foreground">We sent a 6-digit code to your email address.</p>
              </div>
              <div className="flex justify-center gap-3">
                {otp.map((d, i) => (
                  <input key={i} ref={el => { refs.current[i] = el; }} type="text" inputMode="numeric" maxLength={1}
                    value={d} onChange={e => handleChange(i, e.target.value)} onKeyDown={e => handleKeyDown(i, e)}
                    className="h-12 w-12 rounded-lg border bg-background text-center text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary transition-all" />
                ))}
              </div>
              <Button className="w-full gradient-primary text-primary-foreground" onClick={() => setVerified(true)}>
                Verify
              </Button>
              <p className="text-sm text-muted-foreground">
                Didn't receive a code?{" "}
                <button className="text-primary hover:underline font-medium">Resend</button>
              </p>
            </motion.div>
          ) : (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass-card rounded-2xl p-8 shadow-card space-y-4">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }}>
                <CheckCircle2 className="mx-auto h-16 w-16 text-accent" />
              </motion.div>
              <h2 className="font-heading text-2xl font-bold">Email Verified!</h2>
              <p className="text-sm text-muted-foreground">Your account has been verified successfully.</p>
              <Link to="/dashboard"><Button className="gradient-primary text-primary-foreground">Go to Dashboard</Button></Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
