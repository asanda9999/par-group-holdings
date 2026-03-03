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
        subtitle="Institutional impact capital deployed into high-conviction infrastructure and growth platforms — structured to deliver measurable outcomes and resilient financial performance."
        ctaText="Learn more"
        image={heroImage}
      />
      <AboutSection
        paragraphs={[
           "Anthuri Fund allocates disciplined capital into scalable businesses across energy, manufacturing, agriculture, and technology — sectors fundamental to long-term economic transformation. We invest where structural demand, operational strength, and measurable impact converge.",
    "Our mandate integrates rigorous underwriting with active value creation. We enhance governance, strengthen operational resilience, and prioritise scalable job creation — delivering quantifiable environmental and socio-economic progress alongside durable, risk-adjusted returns."
        ]}
        heading="Measurable impact,
                <br />
                sustainable growth."
        sectionLabel="Anthuri Fund"
        principles={[  "Measurable Outcomes",
          "Responsible Growth",
          "Operational Strength",
          "Sustainable Returns"]}
      />
      <PortfolioSection investments={anthuriPortfolio} />
      <TeamSection members={anthuriTeam} />
      <ContactSection divisionName="Anthuri Fund" />
    </Layout>
  );
};

export default AnthuriFund;
