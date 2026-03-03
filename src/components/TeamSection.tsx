import { Link } from "react-router-dom";
import type { TeamMember } from "@/data/teamData";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TeamSectionProps {
  members: TeamMember[];
}

const easePremium = [0.16, 1, 0.3, 1] as const;

const TeamSection = ({ members }: TeamSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  const gridClass =
    members.length === 2
      ? "grid-cols-1 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto"
      : members.length === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section id="team" className="py-28 md:py-40" style={{ backgroundColor: "#0f172a" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Editorial header (more premium than centered big title) */}
        <div className="grid grid-cols-12 items-end gap-y-6">
          <div className="col-span-12 md:col-span-4">
            <AnimatedSection delay={0.2}>
              <p className="text-[11px] md:text-xs font-medium tracking-[0.32em] uppercase text-white/60">
                Team
              </p>
            </AnimatedSection>
          </div>
          <div className="col-span-12 md:col-span-8">
            <div className="h-px w-full bg-white/10" />
          </div>

          <div className="col-span-12 md:col-span-6 mt-6 md:mt-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[-0.02em] leading-[1.1] text-white">
              People behind the mandate.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 mt-2 md:mt-10">
            <p className="text-sm md:text-base leading-relaxed text-white/65 max-w-[56ch]">
              A small, focused team combining investment discipline, sector expertise,
              and long-term stewardship.
            </p>
          </div>
        </div>

        <div className={`mt-14 md:mt-16 grid gap-10 ${gridClass}`}>
          {members.map((member, index) => (
            <motion.div
              key={member.slug}
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, y: 16, filter: "blur(10px)" }
              }
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{
                delay: 0.08 + index * 0.10,
                duration: 1.0,
                ease: easePremium,
              }}
              className="relative"
            >
              <Link to={`${member.divisionPath}/team/${member.slug}`} className="group block">
                <motion.div
                  className="relative overflow-hidden rounded-3xl aspect-square
                             border border-white/10 bg-white/[0.03] backdrop-blur-sm"
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { y: -5, transition: { duration: 0.6, ease: easePremium } }
                  }
                >
                  {/* Soft background wash so 'contain' feels intentional */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/20" />
                  <div className="absolute inset-0 [background:radial-gradient(520px_320px_at_40%_25%,rgba(255,255,255,0.10),transparent_60%)]" />

                  {/* Image (same size behavior; still contain) */}
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-full h-full object-contain object-center grayscale
                               will-change-transform"
                    initial={{ scale: 1.02 }}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.06 }}
                    transition={{ duration: 1.1, ease: easePremium }}
                  />

                  {/* Premium bio reveal (gradient + blur, not a hard panel) */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 z-20 p-6"
                    initial={{ opacity: 0, y: 14 }}
                    whileHover={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: easePremium }}
                  >
                    <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md p-4">
                      <p className="text-sm leading-relaxed text-white/85 line-clamp-4">
                        {member.bio}
                      </p>
                    </div>
                  </motion.div>

                  {/* Subtle hover border glow (Apple-like) */}
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
                </motion.div>

                {/* Name + role (more editorial, less 'hover color change') */}
                <div className="mt-5 text-center">
                  <div className="inline-flex flex-col items-center gap-1">
                    <h3 className="text-base font-medium tracking-[-0.01em] text-white">
                      {member.name}
                    </h3>

                    {/* micro underline appears on hover */}
                    <span className="h-px w-0 bg-white/40 transition-all duration-500 group-hover:w-10" />

                    <p className="text-sm text-white/65">{member.role}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;