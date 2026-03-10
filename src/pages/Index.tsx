import HeroSection from "@/components/home/HeroSection";
import InvestorTypeCards from "@/components/home/InvestorTypeCards";
import AuthoritySection from "@/components/home/AuthoritySection";
import FeaturedComparisons from "@/components/home/FeaturedComparisons";
import EmailCapture from "@/components/home/EmailCapture";

const Index = () => {
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
