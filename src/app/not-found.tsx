import Link from "next/link";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background text-center p-8">
      <div className="gradient-primary rounded-2xl p-4">
        <Bot className="h-12 w-12 text-primary-foreground" />
      </div>
      <h1 className="font-heading text-6xl font-bold gradient-text">404</h1>
      <h2 className="font-heading text-2xl font-semibold">Page Not Found</h2>
      <p className="text-muted-foreground max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/">
        <Button className="gradient-primary text-primary-foreground">Back to Home</Button>
      </Link>
    </div>
  );
}
