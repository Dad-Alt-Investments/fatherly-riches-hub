import { Link } from "react-router-dom";
import logo from "@/assets/dadalt-logo.png";

const footerLinks = {
  categories: [
    { label: "Stocks & ETFs", href: "/category/stocks-etfs" },
    { label: "Crypto & Digital Assets", href: "/category/crypto-digital-assets" },
    { label: "Gold & Precious Metals", href: "/category/gold-precious-metals" },
    { label: "Buying Businesses", href: "/category/buying-businesses" },
    { label: "Real Estate", href: "/category/real-estate" },
    { label: "Personal Finance", href: "/category/personal-finance" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Start Here", href: "/start-here" },
    { label: "Resources", href: "/resources" },
    { label: "Newsletter", href: "/newsletter" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Disclaimers", href: "/disclaimers" },
    { label: "Affiliate Disclosure", href: "/disclaimers" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="DadAlt Investments" className="h-10 w-10" />
              <span className="font-heading text-lg font-bold">DadAlt</span>
            </Link>
            <p className="font-body text-sm leading-relaxed text-secondary-foreground/70">
              Straight-talking investment education for dads who want to protect
              and grow their family's future.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">
              Categories
            </h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-secondary-foreground/50">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-secondary-foreground/10 pt-8">
          <div className="space-y-4 text-center">
            <p className="font-body text-xs leading-relaxed text-secondary-foreground/50">
              <strong>Affiliate Disclosure:</strong> DadAlt Investments may
              receive compensation from companies featured on this site. This
              does not influence our editorial opinions. We only recommend
              products we would personally use or recommend to family.
            </p>
            <p className="font-body text-xs text-secondary-foreground/50">
              <strong>Disclaimer:</strong> Content is for educational purposes
              only and does not constitute financial, investment, tax, or legal
              advice. All investing involves risk. Consult a qualified advisor.
            </p>
            <p className="font-body text-xs text-secondary-foreground/40">
              © {new Date().getFullYear()} DadAlt Investments. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
