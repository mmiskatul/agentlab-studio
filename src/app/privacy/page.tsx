import Link from "next/link";
import { Bot, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="container mx-auto max-w-3xl glass-card rounded-2xl p-8 shadow-card">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>
          <div className="flex items-center gap-2 mb-6">
            <div className="gradient-primary rounded-lg p-1.5">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-heading text-xl font-bold">AgentLab</span>
          </div>
          <h1 className="font-heading text-4xl font-bold">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2">Last updated: April 16, 2026</p>
        </div>

        <div className="space-y-6 text-muted-foreground max-w-none">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p>When you create an account, we collect your email address and profile information. Through usage of the platform, we collect standard telemetry, chat logs, and the knowledge bases you choose to upload.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Your Data</h2>
            <p>We use your data solely to provide, maintain, and improve the AgentLab services. Your uploaded knowledge bases and chat logs are strictly used for your own agents and are NEVER shared with third-parties without explicit consent or used to train third-party models.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Retention and Deletion</h2>
            <p>You can request the permanent deletion of your account and all associated test data, agents, and API usage records at any time. We fulfill deletion requests safely within 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Security</h2>
            <p>We implement industry-standard AES-256 encryption to protect your sensitive knowledge bases and prompts. However, no internet transmission is completely secure, so use the service responsibly.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
