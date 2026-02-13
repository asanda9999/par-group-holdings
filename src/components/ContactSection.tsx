import { AnimatedSection } from "@/components/ui/animated-section";
import ContactButton from "@/components/ContactButton";

interface ContactSectionProps {
  divisionName: string;
}

const ContactSection = ({ divisionName }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection delay={0.2}>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-8">
            Contact
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="max-w-2xl">
            <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-8">
              To learn more about {divisionName} or discuss a potential partnership, please reach out to our team.
            </p>
            <ContactButton />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
