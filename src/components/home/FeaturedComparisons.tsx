import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";

const comparisons = [
  {
    category: "Stocks & ETFs",
    title: "Top Stock Brokerages for New Investors [2025]",
    description: "Side-by-side comparison of beginner-friendly trading platforms.",
    badge: "Review",
    href: "/article/top-stock-brokerages",
  },
  {
    category: "Crypto & Digital Assets",
    title: "5 Crypto Wallets Every Dad Should Know",
    description: "Breakdown of the most secure hot and cold wallets.",
    badge: "Comparison",
    href: "/article/best-crypto-wallets",
  },
  {
    category: "Gold & Precious Metals",
    title: "Top Gold IRA Companies Reviewed",
    description: "Ranking top gold IRA providers on fees, reputation, and transparency.",
    badge: "Review",
    href: "/article/top-gold-ira-companies-reviewed",
  },
  {
    category: "Buying Businesses",
    title: "Flippa vs Empire Flippers: Which Is Better?",
    description: "Compare the top online business marketplaces.",
    badge: "Comparison",
    href: "/article/flippa-vs-empire-flippers",
  },
];

const FeaturedComparisons = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <div className="dad-badge mb-4 inline-flex">
            <Award className="h-3.5 w-3.5" />
            Money Pages
          </div>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Featured Comparisons & Reviews
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] font-body text-lg text-muted-foreground">
            Our most detailed, data-driven reviews — built to help you make
            confident decisions.
          </p>
        </div>

        <div className="mx-auto grid max-w-[960px] gap-6 sm:grid-cols-2">
          {comparisons.map((item) => (
            <Link key={item.title} href={item.href} className="trust-card group flex flex-col">
              <div className="mb-3 flex items-center gap-2">
                <span className="font-body text-xs font-semibold uppercase tracking-wider text-primary">
                  {item.category}
                </span>
                <span className="rounded-sm bg-accent/15 px-2 py-0.5 font-body text-xs font-semibold text-accent">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-4 flex items-center gap-1 font-body text-sm font-semibold text-primary">
                Read Review
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedComparisons;
