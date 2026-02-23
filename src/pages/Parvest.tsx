import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import heroImage from "@/assets/hero-parvest.jpg";
import { parvestTeam } from "@/data/teamData";
import { parvestPortfolio } from "@/data/portfolioData";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const Parvest = () => {
  useScrollToHash();

  return (
    <Layout>
      <HeroSection
        title="ParVest"
        subtitle="Long-term patient capital invested in responsibly governed, income-generating real estate assets, with a focus on durability, cash-flow resilience, and prudent stewardship."
        ctaText="Learn more"
        image={heroImage}
      />
      <AboutSection
        paragraphs={[
          "ParVest (Pty) Ltd served until recently as the investment and asset holding vehicle within the group. It has since become the property investment leg of the group. It has since acquired Arden Grove Business Park what is now the crown jewel in it’s portfolio",
          "The Group portfolio also includes both industrial and commercial properties, which are situated in Century City, Montague Gardens and Airport Industria.",
        ]}
      />
      <PortfolioSection investments={parvestPortfolio} />
      <TeamSection members={parvestTeam} />
      <ContactSection divisionName="Parvest" />
    </Layout>
  );
};

export default Parvest;
