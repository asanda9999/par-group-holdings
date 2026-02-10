import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import heroImage from "@/assets/hero-parequity.jpg";
import { parequityTeam } from "@/data/teamData";

const ParEquity = () => {
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
          "ParEquity partners with established, profitable businesses seeking long-term capital and strategic support. We take a patient, hands-on approach — investing alongside management teams who share our commitment to sustainable value creation.",
          "Our philosophy is rooted in alignment. We structure partnerships that allow founders and operators to retain meaningful ownership while accessing the capital and expertise needed to scale. We invest in businesses, not transactions.",
        ]}
      />
      <TeamSection members={parequityTeam} />
      <ContactSection divisionName="ParEquity" />
    </Layout>
  );
};

export default ParEquity;
