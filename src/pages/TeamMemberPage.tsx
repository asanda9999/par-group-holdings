import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { allTeamMembers } from "@/data/teamData";
import { ArrowLeft } from "lucide-react";

const TeamMemberPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const member = allTeamMembers.find((m) => m.slug === slug);

  if (!member) return <Navigate to="/" replace />;

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Link
            to={member.divisionPath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {member.division}
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Portrait */}
            <div className="md:col-span-1">
              <div className="aspect-[3/4] rounded-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                  {member.name}
                </h1>
                <p className="mt-1 text-base text-muted-foreground">
                  {member.role} · {member.division}
                </p>
              </div>

              <div className="space-y-4">
                {member.fullBio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-base text-foreground/80 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TeamMemberPage;
