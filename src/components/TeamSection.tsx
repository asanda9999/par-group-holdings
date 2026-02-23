import { Link } from "react-router-dom";
import type { TeamMember } from "@/data/teamData";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TeamSectionProps {
  members: TeamMember[];
}

const TeamSection = ({ members }: TeamSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="team"
      className="py-20 md:py-28"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection delay={0.2}>
          <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-widest text-white mb-12 text-center">
            Our Team
          </h2>
        </AnimatedSection>

        <div
          className={`grid gap-10 ${
            members.length === 2
              ? "grid-cols-1 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto"
              : members.length === 4
              ? "grid-cols-1 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {members.map((member, index) => (
            <motion.div
              key={member.slug}
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 0,
                      y: 24,
                      filter: "blur(6px)",
                      scale: 0.98,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                scale: 1,
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: 0.1 + index * 0.12,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      scale: 1.015,
                      boxShadow: "0 16px 32px rgba(0,0,0,0.25)",
                    }
              }
              className="relative"
            >
              <Link
                to={`${member.divisionPath}/team/${member.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-md aspect-square">
                  {/* Image */}
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain object-center filter grayscale"
                    initial={{ scale: 1.04 }}
                    whileHover={{ scale: shouldReduceMotion ? 1 : 1.08 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  {/* Bio overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/80 flex items-end p-6"
                    initial={{ opacity: 0, y: 12 }}
                    whileHover={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 1, y: 0 }
                    }
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <p className="text-sm text-primary-foreground/90 leading-relaxed">
                      {member.bio}
                    </p>
                  </motion.div>
                </div>

                {/* Name + role */}
                <div className="mt-4 text-center space-y-1">
                  <motion.h3
                    className="text-base font-semibold"
                    style={{ color: "#ffffff" }}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { y: -2, color: "hsl(var(--primary))" }
                    }
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {member.name}
                  </motion.h3>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(255, 255, 255, 0.75)" }}
                  >
                    {member.role}
                  </p>
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
