import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { allTeamMembers } from "@/data/teamData";
import { ArrowLeft } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

const TeamMemberPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = allTeamMembers.find((m) => m.slug === slug);

  if (!member) return <Navigate to="/" replace />;

  return (
    <Layout>
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-16">
          
          {/* Back Link */}
          <Link
            to={`${member.divisionPath}#team`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-16 tracking-wide"
          >
            <ArrowLeft className="h-4 w-4" />
            BACK TO TEAM
          </Link>

          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-start">
            
            {/* Portrait */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-xl -z-10"></div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                  {member.name}
                </h1>

                <p className="text-lg text-muted-foreground tracking-wide">
                  {member.role}
                  <span className="mx-3 text-muted-foreground/40">|</span>
                  {member.division}
                </p>

                <div className="h-px w-20 bg-border mt-6"></div>
              </div>

              <div className="space-y-6">
                {member.fullBio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base text-foreground/80 leading-relaxed max-w-prose"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* ===== STATS SECTION ===== */}
          {member.stats?.length > 0 && (
            <div className="mt-24 grid grid-cols-2 md:grid-cols-3 gap-8 border-t pt-16">
              {member.stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </div>

                  <p className="text-sm text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* ===== EXPERTISE ===== */}
          {member.expertise?.length > 0 && (
            <div className="mt-24 border-t pt-16">
              <h2 className="text-xl font-semibold mb-8">Expertise</h2>

              <div className="flex flex-wrap gap-3">
                {member.expertise.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full border border-border bg-muted/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ===== ACHIEVEMENTS ===== */}
          {member.achievements?.length > 0 && (
            <div className="mt-24 border-t pt-16">
              <h2 className="text-xl font-semibold mb-8">Key Achievements</h2>

              <ul className="space-y-4 max-w-3xl">
                {member.achievements.map((item, i) => (
                  <li
                    key={i}
                    className="text-foreground/80 leading-relaxed flex gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </section>
    </Layout>
  );
};

export default TeamMemberPage;
