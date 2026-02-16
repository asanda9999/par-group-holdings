import { AnimatedSection, StaggeredChildren } from "@/components/ui/animated-section";

interface AboutSectionProps {
  paragraphs: string[];
}

const AboutSection = ({ paragraphs }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection delay={0.2} y={30} duration={0.8}>
          <h2 className="text-2xl font-medium uppercase tracking-widest text-muted-foreground mb-8">
            About Us
          </h2>
        </AnimatedSection>
        <StaggeredChildren staggerDelay={0.2} childDelay={0.4} duration={0.7} x={-60}>
          <div className="max-w-3xl space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/80">
                {p}
              </p>
            ))}
          </div>
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default AboutSection;
