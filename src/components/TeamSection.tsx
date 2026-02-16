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
    <section id="team" className="py-20 md:py-28" style={{backgroundColor: '#0f172a'}}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection delay={0.2}>
          <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-widest text-white mb-12 text-center">
            Our Team
          </h2>
        </AnimatedSection>
        <div className={`grid gap-10 ${members.length === 4 ? 'grid-cols-1 sm:grid-cols-2 lg:max-w-4xl lg:mx-auto' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {members.map((member, index) => (
            <AnimatedSection key={member.slug} delay={0.1 + (index * 0.1)}>
              <motion.div {...cardMotionProps}>
                <Link
                  to={`${member.divisionPath}/team/${member.slug}`}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-md aspect-square">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain object-center"
                      initial={{ filter: "none" }}
                      whileHover={{ filter: "none" }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    {/* Hover overlay with bio */}
                    <motion.div 
                      className="absolute inset-0 bg-primary/80 flex items-end p-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: shouldReduceMotion ? 0 : 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <p className="text-sm text-primary-foreground/90 leading-relaxed">
                        {member.bio}
                      </p>
                    </motion.div>
                  </div>
                  <div className="mt-4 text-center space-y-1">
                    <motion.h3 
                      className="text-base font-semibold"
                      style={{color: '#ffffff'}}
                      whileHover={{ color: shouldReduceMotion ? "#ffffff" : "hsl(var(--primary))" }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {member.name}
                    </motion.h3>
                    <p className="text-sm" style={{color: 'rgba(255, 255, 255, 0.8)'}}>{member.role}</p>
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

export default TeamSection;
