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
        subtitle="Long-term patient capital invested in responsibly governed, income-generating in industial and commercial real estate assets, with a focus on durability, cash-flow resilience, and prudent stewardship."
        ctaText="Learn more"
        image={heroImage}
      />
      <AboutSection
       paragraphs={[
        "ParVest acquires and operates high-quality, income-producing real estate with a singular objective: deliver stable cash flow and protect capital through every market cycle. We invest selectively, underwrite rigorously, and manage actively.",
        "Our portfolio is anchored in strategically located industrial and commercial assets across key economic nodes — selected not for speculation, but for durability. We do not chase trends. We build resilient income platforms designed to endure."
      ]}
        heading="
    Real assets,
    <br />
    disciplined returns.
  </>"
        sectionLabel="Parvest"
        principles={[
          "Capital Preservation",
          "Income Discipline",
          "Active Asset Management",
          "Tenant Alignment"
        ]}
      />
      <PortfolioSection investments={parvestPortfolio} />
      <TeamSection members={parvestTeam} />
      <ContactSection divisionName="Parvest" />
    </Layout>
  );
};

export default Parvest;
