import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md space-y-6">
        <Link to="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to login
        </Link>
        <div className="glass-card rounded-2xl p-8 shadow-card space-y-6">
          <div className="text-center">
            <div className="inline-flex gradient-primary rounded-lg p-2 mb-4"><Bot className="h-6 w-6 text-primary-foreground" /></div>
            <h1 className="font-heading text-2xl font-bold">{sent ? "Check your email" : "Reset password"}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {sent ? `We sent a reset link to ${email}` : "Enter your email to receive a reset link."}
            </p>
          </div>
          {!sent ? (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} className="pl-10" required />
              </div>
              <Button type="submit" className="w-full gradient-primary text-primary-foreground">Send Reset Link</Button>
            </form>
          ) : (
            <Link to="/reset-password"><Button className="w-full gradient-primary text-primary-foreground">Open Reset Page</Button></Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
