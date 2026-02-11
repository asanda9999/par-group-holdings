import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import heroImage from "@/assets/hero-parvest.jpg";
import { parvestTeam } from "@/data/teamData";
import { parvestPortfolio } from "@/data/portfolioData";

const Parvest = () => {
  return (
    <Layout>
      <HeroSection
        title="Parvest"
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
