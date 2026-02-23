import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import heroImage from "@/assets/hero-anthuri.jpg";
import { anthuriTeam } from "@/data/teamData";
import { anthuriPortfolio } from "@/data/portfolioData";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const AnthuriFund = () => {
  useScrollToHash();

  return (
    <Layout>
      <HeroSection
        title="Anthuri Fund"
        subtitle="Impact-driven capital deployed into sustainable infrastructure and transformative growth opportunities."
        ctaText="Learn more"
        image={heroImage}
      />
      <AboutSection
        paragraphs={[
          "Anthuri Fund deploys capital into pre-vetted small and medium-sized enterprises across energy, manufacturing, agriculture, and technology. We invest where responsible stewardship meets long-term structural growth, backing businesses that deliver measurable environmental and social impact",
          "Through disciplined capital allocation and active partnership, we foster job creation, operational resilience, and sustainable economic expansion while generating durable, risk-adjusted returns for stakeholders.",
        ]}
      />
      <PortfolioSection investments={anthuriPortfolio} />
      <TeamSection members={anthuriTeam} />
      <ContactSection divisionName="Anthuri Fund" />
    </Layout>
  );
};

export default AnthuriFund;
