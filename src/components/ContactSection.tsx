import { AnimatedSection } from "@/components/ui/animated-section";
import { motion } from "framer-motion";

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
            <motion.a
              href="mailto:info@paragongroup.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 rounded-sm"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.96,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
            >
              Get in touch
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactSection;
