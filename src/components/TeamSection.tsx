interface TeamMember {
  name: string;
  role: string;
  bio?: string;
}

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
            <div key={member.name} className="space-y-2">
              {/* Placeholder avatar */}
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-lg font-semibold text-muted-foreground">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              {member.bio && (
                <p className="text-sm text-foreground/60 leading-relaxed">{member.bio}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
