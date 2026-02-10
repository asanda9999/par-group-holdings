import { Link } from "react-router-dom";
import type { TeamMember } from "@/data/teamData";

interface TeamSectionProps {
  members: TeamMember[];
}

const TeamSection = ({ members }: TeamSectionProps) => {
  return (
    <section className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {members.map((member) => (
            <Link
              key={member.slug}
              to={`${member.divisionPath}/team/${member.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-md aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Hover overlay with bio */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-sm text-primary-foreground/90 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
              <div className="mt-4 space-y-1">
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
