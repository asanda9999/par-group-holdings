import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import heroImage from "@/assets/hero-parequity.jpg";
import { parequityTeam } from "@/data/teamData";
import { parequityPortfolio } from "@/data/portfolioData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ParEquity = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToPortfolio) {
      const timer = setTimeout(() => {
        const el = document.getElementById("portfolio");
        if (el) {
          const rect = el.getBoundingClientRect();
          const offset = window.scrollY + rect.top - 80; // account for header height
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      }, 100); // Small delay to ensure DOM is ready
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <Layout>
      <HeroSection
        title="PAREQUITY"
        subtitle="Long-term private equity partnerships with established businesses built on trust, alignment, and patient capital."
        ctaText="Learn more"
        image={heroImage}
      />
      <AboutSection
        paragraphs={[
          "ParEquity partners with established, profitable businesses seeking long-term capital and strategic support. We take a patient, hands-on approach — investing alongside management teams who share our commitment to sustainable value creation.",
          "Our philosophy is rooted in alignment. We structure partnerships that allow founders and operators to retain meaningful ownership while accessing the capital and expertise needed to scale. We invest in businesses, not transactions.",
        ]}
      />
      <PortfolioSection investments={parequityPortfolio} />
      <TeamSection members={parequityTeam} />
      <ContactSection divisionName="ParEquity" />
    </Layout>
  );
};

export default ParEquity;
