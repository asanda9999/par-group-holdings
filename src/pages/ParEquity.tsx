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
        subtitle="Long-term private equity partnerships with established businesses built on trust, alignment, and patient capital."
        ctaText="Learn more"
        image={heroImage}
      />
      <AboutSection
        paragraphs={[
          "ParEquity (Pty) Ltd is the investment group, which includes inter alia investments in the transport infrastructure, and technology sectors. It provides leadership, governance, and executive direction across all subsidiary entities, ensuring consistent alignment with the founder’s legacy and the group’s mission of social impact and commercial success.",
          "ParEquity is responsible for overseeing group strategy, stakeholder engagement, and high-level decision-making while fostering collaboration between operating companies. With its entrepreneurial spirit and agile structure, ParEquity drives innovation, expansion, and inclusive growth across South Africa and beyond.",
        ]}
      />
      <PortfolioSection investments={parequityPortfolio} />
      <TeamSection members={parequityTeam} />
      <ContactSection divisionName="ParEquity" />
    </Layout>
  );
};

export default ParEquity;
