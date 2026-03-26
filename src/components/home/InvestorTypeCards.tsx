import Link from "next/link";
import { Sprout, Wallet, PieChart, Building2 } from "lucide-react";

const investorTypes = [
  {
    icon: Sprout,
    title: "I'm Just Starting",
    description: "New to investing? Start with the fundamentals that actually matter.",
    href: "/start-here",
  },
  {
    icon: Wallet,
    title: "I Want Passive Income",
    description: "Dividends, staking, rental income — money that works while you sleep.",
    href: "/category/stocks-etfs",
  },
  {
    icon: PieChart,
    title: "I Want to Diversify",
    description: "Gold, crypto, real estate — build a portfolio that weathers any storm.",
    href: "/category/gold-precious-metals",
  },
  {
    icon: Building2,
    title: "I Want to Buy a Business",
    description: "Own real assets. Buy a small business and build generational wealth.",
    href: "/category/buying-businesses",
  },
];

const InvestorTypeCards = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            What Kind of Investor Are You?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] font-body text-lg text-muted-foreground">
            Pick your path. We'll point you to the right guides.
          </p>
        </div>

        <div className="mx-auto grid max-w-[960px] gap-6 sm:grid-cols-2">
          {investorTypes.map((type) => (
            <Link key={type.title} href={type.href} className="trust-card group">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <type.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold">{type.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                {type.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorTypeCards;
