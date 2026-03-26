import Link from "next/link";
import { ArrowRight, BookOpen, Shield, Compass } from "lucide-react";
import { categories } from "@/data/content";
import EmailCapture from "@/components/home/EmailCapture";

const steps = [
  {
    icon: Compass,
    title: "1. Pick Your Path",
    description: "Choose the investment category that matches your goals — stocks, crypto, gold, businesses, or real estate.",
  },
  {
    icon: BookOpen,
    title: "2. Read the Beginner Guide",
    description: "Every category has a plain-English starter guide. No jargon, no assumptions, just clarity.",
  },
  {
    icon: Shield,
    title: "3. Use Our Recommended Tools",
    description: "We've vetted the platforms. Check our comparison reviews and pick the one that fits you.",
  },
];

const StartHere = () => {

  return (
    <>
      <section className="bg-secondary text-secondary-foreground">
        <div className="container-article section-padding text-center">
          <h1 className="font-heading text-4xl font-bold text-secondary-foreground md:text-5xl">
            Start Here: A Beginner's Guide to Alternative Investing
          </h1>
          <p className="mt-4 font-body text-lg leading-relaxed text-secondary-foreground/70">
            New to DadAlt? Here's how to get the most out of this site — and
            start building real wealth, step by step.
          </p>
        </div>
      </section>

      <div className="container-article section-padding">
        {/* Steps */}
        <div className="mb-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Category Links */}
        <h2 className="mb-6 font-heading text-2xl font-bold">
          Explore by Category
        </h2>
        <div className="space-y-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="trust-card group flex items-center justify-between"
            >
              <div>
                <h3 className="font-heading text-lg font-semibold">{cat.name}</h3>
                <p className="mt-1 font-body text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>

      <EmailCapture />
    </>
  );
};

export default StartHere;
