import { Link } from "react-router-dom";
import type { PortfolioInvestment } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface PortfolioSectionProps {
  investments: PortfolioInvestment[];
}

const PortfolioSection = ({ investments }: PortfolioSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  const cardMotionProps = shouldReduceMotion ? {} : {
    whileHover: {
      scale: [1, 1.02, 1.01],
      y: -4,
      boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
      zIndex: 10,
      transition: {
        scale: {
          type: "spring" as const,
          stiffness: 400,
          damping: 20,
          duration: 0.4
        },
        y: {
          duration: 0.3,
          ease: "easeOut" as const
        },
        boxShadow: {
          duration: 0.3,
          ease: "easeOut" as const
        }
      }
    },
    initial: { scale: 1, zIndex: 1 }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection delay={0.2}>
          <h2 className="text-2xl font-medium uppercase tracking-widest text-muted-foreground mb-12">
            Portfolio
          </h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {investments.map((inv, index) => (
            <AnimatedSection key={inv.slug} delay={0.1 + (index * 0.1)}>
              <motion.div {...cardMotionProps}>
                <Link
                  to={`${inv.divisionPath}/portfolio/${inv.slug}`}
                  className="group block rounded-md overflow-hidden relative aspect-[4/3]"
                >
                  {/* Background image */}
                  <motion.img
                    src={inv.image}
                    alt={inv.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />

                  {/* Default overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-primary/70"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: shouldReduceMotion ? 0.7 : 0.85 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60 mb-2">
                      {inv.sector}
                    </span>
                    <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                      {inv.name}
                    </h3>
                    <motion.p 
                      className="text-sm text-primary-foreground/75 leading-relaxed line-clamp-2"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: shouldReduceMotion ? 0 : 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {inv.description}
                    </motion.p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-primary-foreground/50">
                        Invested {inv.yearInvested}
                      </span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: shouldReduceMotion ? 0 : 4 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <ArrowRight className="h-4 w-4 text-primary-foreground/50 group-hover:text-primary-foreground transition-all duration-200" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
