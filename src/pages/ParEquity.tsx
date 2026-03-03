import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import heroImage from "@/assets/hero-parequity.jpg";
import { parequityTeam } from "@/data/teamData";
import { parequityPortfolio } from "@/data/portfolioData";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const ParEquity = () => {
  useScrollToHash();

  return (
    <Layout>
      <HeroSection
        title="ParEquity"
        subtitle="Strategic private capital deployed with discipline — guiding infrastructure and technology platforms toward scalable growth and enduring enterprise value."
        ctaText="Learn more"
        image={heroImage}
      />
      <AboutSection
        paragraphs={[
          "ParEquity (Pty) Ltd is the strategic nucleus of the Group — allocating private capital across transport infrastructure and technology platforms positioned for structural expansion. We invest where operational strength, governance discipline, and long-term demand intersect.",
          "Our involvement extends beyond capital deployment. We provide strategic oversight, executive alignment, and rigorous decision-making frameworks that enhance resilience and accelerate scalable growth.",
          "Capital is deployed with conviction, governed with discipline, and measured against a singular objective: enduring enterprise value creation."
        ]}
        heading="Strategic Capital,<br /> governed growth."
        sectionLabel="ParEquity"
        principles={["Stewardship", "Governance", "Alignment", "Enduring Value"]}
      />
      <PortfolioSection investments={parequityPortfolio} />
      <TeamSection members={parequityTeam} />
      <ContactSection divisionName="ParEquity" />
    </Layout>
  );
};

export default ParEquity;
