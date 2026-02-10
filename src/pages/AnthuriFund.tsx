import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import heroImage from "@/assets/hero-anthuri.jpg";
import { anthuriTeam } from "@/data/teamData";

const AnthuriFund = () => {
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
          "Anthuri Fund deploys capital into sustainable infrastructure and businesses driving meaningful environmental and social impact. We focus on sectors where long-term structural tailwinds align with responsible investment principles.",
          "Our approach combines institutional rigour with a deep commitment to measurable impact. We partner with management teams who are building businesses that will define the next generation of energy, infrastructure, and resource efficiency.",
        ]}
      />
      <TeamSection members={anthuriTeam} />
      <ContactSection divisionName="Anthuri Fund" />
    </Layout>
  );
};

export default AnthuriFund;
