"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Award } from "lucide-react";

const navItems = [
  { label: "Start Here", href: "/start-here" },
  { label: "Investing", href: "/category/stocks-etfs" },
  { label: "Crypto", href: "/category/crypto-digital-assets" },
  { label: "Gold", href: "/category/gold-precious-metals" },
  { label: "Businesses", href: "/category/buying-businesses" },
  { label: "Real Estate", href: "/category/real-estate" },
  { label: "Personal Finance", href: "/category/personal-finance" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-card text-foreground">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/dadalt-logo.png" alt="DadAlt Investments" width={52} height={52} className="h-[52px] w-[52px]" />
          <span className="font-heading text-lg font-bold text-foreground">
            DadAlt
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 font-body text-sm font-medium transition-colors hover:bg-muted ${
                pathname === item.href
                  ? "bg-muted"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resources"
            className="dad-badge ml-2 flex items-center gap-1"
          >
            <Award className="h-3.5 w-3.5" />
            Dad's Picks
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t bg-card px-4 pb-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2.5 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resources"
            onClick={() => setMobileOpen(false)}
            className="dad-badge mt-2 inline-flex"
          >
            <Award className="h-3.5 w-3.5" />
            Dad's Picks
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
