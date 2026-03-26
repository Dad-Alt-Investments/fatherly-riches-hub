import { Link } from "react-router-dom";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmailCaptureProps {
  variant?: "default" | "inline";
}

const EmailCapture = ({ variant = "default" }: EmailCaptureProps) => {
  if (variant === "inline") {
    return (
      <div className="trust-card my-12 text-center">
        <p className="font-heading text-lg font-semibold">
          Want more breakdowns like this?
        </p>
        <p className="mt-1 font-body text-sm text-muted-foreground">
          Join the Dad Investors Club — free weekly insights.
        </p>
        <div className="mt-4">
          <Button asChild className="bg-primary font-body font-semibold text-primary-foreground hover:bg-primary/90">
            <Link to="/newsletter">Get the Guide</Link>
          </Button>
        </div>
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

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="shrink-0 bg-primary px-8 font-body font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link to="/newsletter">Get the Guide</Link>
            </Button>
          </div>

          <p className="mt-4 font-body text-xs text-secondary-foreground/40">
            No spam. No hype. Just solid wealth-building strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;
