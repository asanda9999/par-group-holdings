import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import heroImage from "@/assets/hero-anthuri.jpg";

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

      <TeamSection
        members={[
          { name: "Lerato Molefe", role: "Fund Manager", bio: "Specialist in sustainable infrastructure and energy transition." },
          { name: "David Kruger", role: "Investment Analyst", bio: "Focused on impact measurement and ESG integration." },
          { name: "Amara Osei", role: "Portfolio Manager", bio: "Oversees asset management and stakeholder engagement." },
        ]}
      />
    </Layout>
  );
};

export default AnthuriFund;
