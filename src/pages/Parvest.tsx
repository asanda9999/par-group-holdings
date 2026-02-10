import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import heroImage from "@/assets/hero-parvest.jpg";

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

      <TeamSection
        members={[
          { name: "Thomas van der Berg", role: "Managing Partner", bio: "Serial investor focused on technology and growth equity." },
          { name: "Priya Naidoo", role: "Principal", bio: "Leads venture investments across fintech and healthtech." },
          { name: "Lucas Ferrara", role: "Associate", bio: "Supports deal execution and portfolio monitoring." },
        ]}
      />
    </Layout>
  );
};

export default Parvest;
