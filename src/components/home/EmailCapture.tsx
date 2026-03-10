import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EmailCaptureProps {
  variant?: "default" | "inline";
}

const EmailCapture = ({ variant = "default" }: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (variant === "inline") {
    return (
      <div className="trust-card my-12 text-center">
        <p className="font-heading text-lg font-semibold">
          Want more breakdowns like this?
        </p>
        <p className="mt-1 font-body text-sm text-muted-foreground">
          Join the Dad Investors Club — free weekly insights.
        </p>
        {submitted ? (
          <div className="mt-4 flex items-center justify-center gap-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-body font-medium">You're in! Check your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-4 flex max-w-sm gap-2">
            <Input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="font-body"
            />
            <Button type="submit" className="bg-primary font-body font-semibold text-primary-foreground hover:bg-primary/90">
              Join
            </Button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="container-wide section-padding">
        <div className="mx-auto max-w-[600px] text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
            <Mail className="h-7 w-7 text-primary" />
          </div>
          <h2 className="font-heading text-3xl font-bold text-secondary-foreground md:text-4xl">
            The Dad Wealth Blueprint
          </h2>
          <p className="mt-3 font-body text-lg text-secondary-foreground/70">
            5 Practical Ways to Build Wealth Without Wall Street.
          </p>

          <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left">
            {[
              "Actionable strategies you can start this week",
              "No jargon — plain English breakdowns",
              "Weekly insights delivered to your inbox",
              "Unsubscribe anytime — no pressure",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 font-body text-sm text-secondary-foreground/70">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          {submitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-primary">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-body text-lg font-medium">Welcome aboard! Check your inbox.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md gap-3">
              <Input
                type="email"
                placeholder="Your best email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-secondary-foreground/20 bg-secondary-foreground/5 font-body text-secondary-foreground placeholder:text-secondary-foreground/40"
              />
              <Button
                type="submit"
                size="lg"
                className="shrink-0 bg-primary px-6 font-body font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Get the Guide
              </Button>
            </form>
          )}

          <p className="mt-4 font-body text-xs text-secondary-foreground/40">
            No spam. No hype. Just solid wealth-building strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;
