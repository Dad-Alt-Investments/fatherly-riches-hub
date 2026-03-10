import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Award } from "lucide-react";
import logo from "@/assets/dadalt-logo.png";

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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-card text-foreground">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="DadAlt Investments" className="h-10 w-10" />
          <span className="font-heading text-lg font-bold text-foreground">
            DadAlt
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`rounded-md px-3 py-2 font-body text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === item.href
                  ? "bg-muted"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/resources"
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
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-md px-3 py-2.5 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/resources"
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
