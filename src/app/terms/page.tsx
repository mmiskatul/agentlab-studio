import Link from "next/link";
import { Bot, ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
          <h1 className="font-heading text-4xl font-bold">Terms of Service</h1>
          <p className="text-muted-foreground mt-2">Last updated: April 16, 2026</p>
        </div>

        <div className="space-y-6 text-muted-foreground max-w-none">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the AgentLab Platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Description of Service</h2>
            <p>AgentLab provides a platform for building, testing, and deploying custom AI agents. The service is provided "as is" and we reserve the right to modify or discontinue any part of it without notice.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. User Conduct</h2>
            <p>You agree not to use the service to generate harmful, illegal, or malicious software intents. You accept full responsibility for the actions and output of the AI agents you configure and deploy on our platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
            <p>The platform, its original content, features, and functionality are and will remain the exclusive property of AgentLab. Your data, prompts, and knowledge bases remain yours.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
