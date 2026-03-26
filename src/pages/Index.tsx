import HeroSection from "@/components/home/HeroSection";
import InvestorTypeCards from "@/components/home/InvestorTypeCards";
import AuthoritySection from "@/components/home/AuthoritySection";
import FeaturedComparisons from "@/components/home/FeaturedComparisons";
import EmailCapture from "@/components/home/EmailCapture";
import { usePageMeta } from "@/hooks/use-page-meta";

const Index = () => {
  usePageMeta({
    title: "Alternative Investments for Dads — Build Wealth the Smart Way | DadAlt Investments",
    description: "Straight-talking alternative investment education for dads. Compare stocks, crypto, gold, real estate, and small businesses — no hype, no get-rich-quick schemes.",
  });

  return (
    <>
      <HeroSection />
      <InvestorTypeCards />
      <AuthoritySection />
      <FeaturedComparisons />
      <EmailCapture />
    </>
  );
};

export default Index;
