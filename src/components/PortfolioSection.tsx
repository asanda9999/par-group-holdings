import { Link } from "react-router-dom";
import type { PortfolioInvestment } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface PortfolioSectionProps {
  investments: PortfolioInvestment[];
}

const easePremium = [0.16, 1, 0.3, 1] as const;

const PortfolioSection = ({ investments }: PortfolioSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.10,
        delayChildren: 0.06,
      },
    },
  };

  const card = {
    hidden: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 14, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.0, ease: easePremium },
    },
  };

  return (
    <section id="portfolio" className="bg-section-alt py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial header */}
        <div className="grid grid-cols-12 items-end gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[11px] md:text-xs font-medium tracking-[0.32em] uppercase text-muted-foreground">
              Portfolio
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="h-px w-full bg-foreground/10" />
          </div>

          <div className="col-span-12 md:col-span-6 mt-6 md:mt-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.1] text-foreground">
              Selected investments
              <br />
              across our mandates.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-2 md:mt-10">
            <p className="text-sm md:text-base leading-relaxed text-foreground/70 max-w-[56ch]">
              A curated set of businesses and assets where we support durable value
              creation through disciplined capital and active stewardship.
            </p>
          </div>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {investments.map((inv) => (
            <motion.div key={inv.slug} variants={card}>
              <Link
                to={`${inv.divisionPath}/portfolio/${inv.slug}`}
                className="group block"
              >
                <motion.article
                  className="relative overflow-hidden rounded-3xl aspect-[4/3]
                             border border-foreground/10 bg-background/40
                             shadow-[0_1px_0_rgba(255,255,255,0.06)]"
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -6,
                          transition: { duration: 0.6, ease: easePremium },
                        }
                  }
                >
                  {/* Image */}
                  <motion.img
                    src={inv.image}
                    alt={inv.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale
                               will-change-transform"
                    initial={{ scale: 1.02 }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
                    transition={{ duration: 1.2, ease: easePremium }}
                  />

                  {/* Cinematic overlay (no hard clip paths) */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-[#0f1e3d] to-[#0f1e3d]"
                    style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)' }}
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: shouldReduceMotion ? 1 : 0.85 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/75" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#061225]/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 [background:radial-gradient(700px_320px_at_30%_30%,rgba(255,255,255,0.10),transparent_60%)]" />

                  {/* Premium border glow on hover */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-3xl"
                    initial={{ opacity: 0 }}
                    whileHover={shouldReduceMotion ? {} : { opacity: 1 }}
                    transition={{ duration: 0.6, ease: easePremium }}
                    style={{
                      boxShadow:
                        "inset 0 0 0 1px rgba(255,255,255,0.14), 0 18px 60px rgba(0,0,0,0.35)",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-7">
                    {/* Sector + year as a single meta line (more editorial) */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[11px] tracking-[0.22em] uppercase text-white">
                        {inv.sector}
                      </span>
                      <span className="text-[11px] tracking-[0.22em] uppercase text-white">
                        {inv.yearInvested}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl md:text-2xl font-medium tracking-[-0.01em] text-white">
                      {inv.name}
                    </h3>

                    {/* Description: always present but quiet; sharpen on hover */}
                    <motion.p
                      className="mt-2 text-sm leading-relaxed text-white line-clamp-2 max-w-[52ch]"
                      initial={{ opacity: 0.75 }}
                      whileHover={shouldReduceMotion ? {} : { opacity: 0.95 }}
                      transition={{ duration: 0.6, ease: easePremium }}
                    >
                      {inv.description}
                    </motion.p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-[11px] tracking-[0.22em] uppercase text-white">
                        View details
                      </span>

                      <motion.span
                        className="inline-flex items-center gap-2 text-white"
                        initial={{ x: 0 }}
                        whileHover={shouldReduceMotion ? {} : { x: 4 }}
                        transition={{ duration: 0.6, ease: easePremium }}
                        aria-hidden="true"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;