import Link from "next/link";
import Image from "next/image";
import { getImageMetadata } from "@/lib/metadata/images";
import { Shield, TrendingUp, Building2, Coins, BookOpen } from "lucide-react";

const expertiseSignals = [
  { icon: Building2, label: "Verified Business Owner" },
  { icon: TrendingUp, label: "14+ Years Investing in Alt-Assets" },
  { icon: Coins, label: "Active Crypto & Precious Metals Investor" },
  { icon: Shield, label: "Licensed Real Estate Professional" },
  { icon: BookOpen, label: "Financial Educator & Father of Two" },
];

interface AuthorBioProps {
  variant?: "byline" | "full";
}

const AuthorBio = ({ variant = "byline" }: AuthorBioProps) => {
  const meta = getImageMetadata("jared-devalk.jpeg");

  if (variant === "byline") {
    return (
      <div className="flex items-center gap-3 py-4">
        <Image
          src="/images/jared-devalk.jpeg"
          alt={meta.altText}
          title={meta.caption}
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-full object-cover object-top"
        />
        <div>
          <p className="font-body text-sm font-semibold text-foreground">
            Written by{" "}
            <Link href="/author/jared" className="text-primary hover:underline">
              Jared DeValk
            </Link>
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Father, alternative investment researcher, and founder of DadAlt Investments. 14+ years turning hard lessons into honest guidance for dads building real wealth.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-6 md:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <Image
          src="/images/jared-devalk.jpeg"
          alt={meta.altText}
          title={meta.caption}
          width={96}
          height={96}
          className="h-24 w-24 shrink-0 rounded-xl object-cover object-top shadow-md"
        />
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
            About the Author
          </p>
          <h3 className="mt-1 font-heading text-xl font-bold text-foreground">
            Jared DeValk
          </h3>
          <p className="mt-1 font-body text-sm text-muted-foreground">
            Founder, DadAlt Investments
          </p>
        </div>
      </div>

      <p className="mt-4 font-body text-sm leading-relaxed text-foreground/80">
        Father, alternative investment researcher, and founder of DadAlt Investments. 14+ years turning hard lessons into honest guidance for dads building real wealth.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {expertiseSignals.map((signal) => (
          <span
            key={signal.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 font-body text-xs font-medium text-secondary-foreground/80"
          >
            <signal.icon className="h-3 w-3 text-primary" />
            {signal.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AuthorBio;
