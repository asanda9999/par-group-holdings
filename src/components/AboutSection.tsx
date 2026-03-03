"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AboutSectionProps {
  paragraphs: string[];
  heading?: string;
  sectionLabel?: string;
  principles?: string[];
}

const easePremium = [0.16, 1, 0.3, 1] as const;

const AboutSection = ({
  paragraphs,
  heading,
  sectionLabel = "About",
  principles,
}: AboutSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.06,
      },
    },
  };

  const item = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 18, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.05, ease: easePremium },
    },
  };

  // Editorial split: first paragraph becomes the lead, the rest becomes body
  const lead = paragraphs?.[0] ?? "";
  const body = paragraphs?.slice(1) ?? [];
  const principleChips =
    principles && principles.length > 0
      ? principles
      : ["Stewardship", "Governance", "Alignment", "Enduring Value"];

  return (
    <section id="about" className="bg-background py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top row: label + hairline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-12 items-end gap-y-6"
        >
          <motion.div variants={item} className="col-span-12 md:col-span-4">
            <p className="text-[11px] md:text-xs font-medium tracking-[0.32em] uppercase text-muted-foreground">
              {sectionLabel}
            </p>
          </motion.div>

          <motion.div variants={item} className="col-span-12 md:col-span-8">
            <div className="h-px w-full bg-foreground/10" />
          </motion.div>

          {/* Main content: asymmetrical editorial layout */}
          <motion.div
            variants={item}
            className="col-span-12 md:col-span-6 mt-6 md:mt-10"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.1] text-foreground">
              {heading ? (
                <span dangerouslySetInnerHTML={{ __html: heading }} />
              ) : (
                <>
                  Strategic capital,
                  <br />
                  lasting partnerships.
                </>
              )}
            </h2>

            {/* Lead paragraph */}
            {lead ? (
              <p className="mt-6 text-base md:text-lg leading-relaxed text-foreground/80 max-w-[46ch]">
                {lead}
              </p>
            ) : null}
          </motion.div>

          <motion.div
            variants={item}
            className="col-span-12 md:col-span-5 md:col-start-8 mt-2 md:mt-10"
          >
            <div className="space-y-6">
              {body.map((p, i) => (
                <motion.p
                  key={`about-body-${i}`}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 14, filter: "blur(8px)" }
                  }
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{
                    duration: 0.95,
                    ease: easePremium,
                    delay: 0.08 + i * 0.08,
                  }}
                  className="text-sm md:text-base leading-relaxed text-foreground/75"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Premium “principles” chips */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.9, ease: easePremium, delay: 0.22 }}
              className="mt-10 flex flex-wrap gap-2.5"
            >
              {principleChips.map((t, i) => (
                  <motion.span
                    key={t}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, y: 8, filter: "blur(6px)" }
                    }
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{
                      duration: 0.85,
                      ease: easePremium,
                      delay: 0.28 + i * 0.08,
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -2,
                            transition: { duration: 0.25, ease: "easeOut" },
                          }
                    }
                    className="
                      group relative inline-flex items-center
                      rounded-full
                      px-3.5 py-1.5
                      text-[11px] tracking-[0.28em] uppercase
                      text-foreground/70
                      border border-foreground/10
                      bg-foreground/[0.028]
                      shadow-[0_1px_1px_rgba(0,0,0,0.04)]
                      backdrop-blur-md
                      transition-all duration-500
                      hover:bg-foreground/[0.05]
                      hover:border-foreground/20
                      hover:text-foreground/80
                      hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/15
                    "
                  >
                    {/* soft highlight sweep */}
                    <span
                      aria-hidden
                      className="
                        pointer-events-none absolute inset-0 rounded-full
                        bg-gradient-to-r from-transparent via-white/[0.10] to-transparent
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-500
                      "
                    />
                    <span className="relative">{t}</span>
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;