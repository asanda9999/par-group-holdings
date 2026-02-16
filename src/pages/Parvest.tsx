import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import heroImage from "@/assets/hero-parvest.jpg";
import { parvestTeam } from "@/data/teamData";
import { parvestPortfolio } from "@/data/portfolioData";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Parvest = () => {
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
        title="PARVEST"
        subtitle="Growth capital for innovative, founder-led companies shaping the future of their industries."
        ctaText="Learn more"
        image={heroImage}
      />
      <AboutSection
        paragraphs={[
          "Parvest invests in high-growth, founder-led companies at the intersection of innovation and execution. We back entrepreneurs with a clear vision, strong unit economics, and the ambition to build category-defining businesses.",
          "We bring more than capital. Our team works closely with portfolio companies on strategic planning, talent acquisition, and market expansion — supporting founders through the critical stages of scaling from growth to market leadership.",
        ]}
      />
      <PortfolioSection investments={parvestPortfolio} />
      <TeamSection members={parvestTeam} />
      <ContactSection divisionName="Parvest" />
    </Layout>
  );
};

export default Parvest;
