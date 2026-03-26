import Link from "next/link";
import { ShieldCheck, TrendingUp, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustSignals = [
  { icon: ShieldCheck, text: "No hype." },
  { icon: TrendingUp, text: "No gambling." },
  { icon: BookOpen, text: "No get-rich-quick schemes." },
];

const HeroSection = () => {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="container-wide section-padding text-center">
        <div className="mx-auto max-w-[720px] space-y-8">
          <h1 className="font-heading text-4xl font-bold leading-tight text-secondary-foreground md:text-5xl lg:text-6xl">
            Alternative Investments for Dads —{" "}
            <span className="text-primary">Build Wealth the Smart Way.</span>
          </h1>

          <p className="mx-auto max-w-[560px] font-body text-lg leading-relaxed text-secondary-foreground/75 md:text-xl">
            Straight-talking investment education for dads who want to protect
            and grow their family's future.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-lg bg-primary px-8 font-body text-base font-semibold text-primary-foreground hover:bg-primary/90">
              <Link href="/start-here">Start Here</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-lg bg-white px-8 font-body text-base font-semibold text-secondary hover:bg-white/90"
            >
              <Link href="/newsletter">Get the Free Dad Wealth Guide</Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            {trustSignals.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 font-body text-sm text-secondary-foreground/60"
              >
                <Icon className="h-4 w-4 text-primary" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
