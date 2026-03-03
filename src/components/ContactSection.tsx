import { motion, useReducedMotion } from "framer-motion";
import ContactButton from "@/components/ContactButton";

interface ContactSectionProps {
  divisionName: string;
}

const easePremium = [0.16, 1, 0.3, 1] as const;

const ContactSection = ({ divisionName }: ContactSectionProps) => {
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

  return (
    <section id="contact" className="bg-background py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Editorial header */}
        <div className="grid grid-cols-12 items-end gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[11px] md:text-xs font-medium tracking-[0.32em] uppercase text-muted-foreground">
              Contact
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="h-px w-full bg-foreground/10" />
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-10 md:mt-14"
        >
          {/* Premium panel */}
          <motion.div
            variants={item}
            className="relative overflow-hidden rounded-3xl border border-foreground/10
                       bg-foreground/[0.02] backdrop-blur-sm
                       w-full max-w-xl mx-auto md:max-w-none md:mx-0"
          >
            {/* soft wash + vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.04] via-transparent to-foreground/[0.03]" />
            <div className="absolute inset-0 [background:radial-gradient(800px_380px_at_30%_30%,rgba(0,32,96,0.10),transparent_60%)]" />

            <div className="relative z-10 p-6 md:p-10 lg:p-12 grid grid-cols-12 gap-6 md:gap-8 items-start">
              {/* Left: headline */}
              <motion.div variants={item} className="col-span-12 md:col-span-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.1] text-foreground">
                  Let’s build
                  <br />
                  long-term value.
                </h2>

                <p className="mt-5 text-sm md:text-base leading-relaxed text-foreground/70 max-w-[54ch]">
                  To learn more about {divisionName} or discuss a potential partnership,
                  connect with our team. We respond with clarity, discretion, and speed.
                </p>
              </motion.div>

              {/* Right: CTA area */}
              <motion.div
                variants={item}
                className="col-span-12 md:col-span-5 md:col-start-8"
              >
                <div className="rounded-2xl border border-foreground/10 bg-background/50 p-6 md:p-7">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-foreground/60">
                    Partnership enquiries
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    Share a short note and we’ll route it to the right person.
                  </p>

                  <div className="mt-6">
                    {/* Keep your existing button */}
                    <ContactButton />
                  </div>

                  {/* optional micro text */}
                  <p className="mt-4 text-xs text-foreground/50">
                    Typical response time: within 1–2 business days.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer micro-divider */}
          <motion.div variants={item} className="mt-10 h-px w-24 bg-foreground/10" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;