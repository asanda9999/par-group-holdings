"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { motion, useReducedMotion } from "framer-motion";

interface AboutSectionProps {
  paragraphs: string[];
}

const AboutSection = ({ paragraphs }: AboutSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection delay={0.2} y={30} duration={0.8} once>
          <h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-widest text-muted-foreground mb-10">
            About Us
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl space-y-6">
          {paragraphs.map((p, i) => (
            <motion.p
              key={`about-paragraph-${i}`}
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 0,
                      y: 18,
                      filter: "blur(6px)",
                      scaleY: 0.96,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scaleY: 1,
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1], // premium Framer easing
              }}
              className="origin-top text-base md:text-lg leading-relaxed text-foreground/80"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
