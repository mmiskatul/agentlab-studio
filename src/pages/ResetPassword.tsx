import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="glass-card rounded-2xl p-8 shadow-card space-y-6 text-center">
          <div className="inline-flex gradient-primary rounded-lg p-2"><Bot className="h-6 w-6 text-primary-foreground" /></div>
          {!done ? (
            <>
              <div>
                <h1 className="font-heading text-2xl font-bold">Set new password</h1>
                <p className="mt-2 text-sm text-muted-foreground">Choose a strong password for your account.</p>
              </div>
              <form onSubmit={e => { e.preventDefault(); setDone(true); }} className="space-y-4 text-left">
                <div className="space-y-2">
                  <label className="text-sm font-medium">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} className="pl-10 pr-10" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} className="pl-10" />
                  </div>
                  {confirm && confirm !== password && <p className="text-xs text-destructive">Passwords do not match</p>}
                </div>
                <Button type="submit" className="w-full gradient-primary text-primary-foreground">Reset Password</Button>
              </form>
            </>
          ) : (
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="space-y-4">
              <CheckCircle2 className="mx-auto h-16 w-16 text-accent" />
              <h2 className="font-heading text-2xl font-bold">Password Reset!</h2>
              <p className="text-sm text-muted-foreground">You can now sign in with your new password.</p>
              <Link to="/login"><Button className="gradient-primary text-primary-foreground">Sign In</Button></Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
