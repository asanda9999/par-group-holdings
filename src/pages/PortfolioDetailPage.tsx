import { useParams, useLocation, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import {
  parequityPortfolio,
  anthuriPortfolio,
  parvestPortfolio,
  type PortfolioInvestment,
} from "@/data/portfolioData";

const allPortfolios: PortfolioInvestment[] = [
  ...parequityPortfolio,
  ...anthuriPortfolio,
  ...parvestPortfolio,
];

const PortfolioDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();

  const investment = allPortfolios.find((i) => i.slug === slug);

  if (!investment) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-muted-foreground">Investment not found.</p>
        </div>
      </Layout>
    );
  }

  const divisionName = location.pathname.startsWith("/parequity")
    ? "ParEquity"
    : location.pathname.startsWith("/anthuri-fund")
    ? "Anthuri Fund"
    : "Parvest";

  return (
    <Layout>
      <div className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Back link */}
          <Link
            to={investment.divisionPath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {divisionName}
          </Link>

          {/* Header */}
          <div className="mb-10">
            <span className="text-xs font-medium uppercase tracking-wider text-primary/70 mb-2 block">
              {investment.sector}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {investment.name}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Invested {investment.yearInvested}</span>
              <span className="inline-flex items-center gap-1.5">
                <span
                  className={`h-2 w-2 rounded-full ${
                    investment.status === "Active"
                      ? "bg-green-500"
                      : "bg-muted-foreground"
                  }`}
                />
                {investment.status}
              </span>
            </div>
          </div>

          {/* Performance stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {investment.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-primary/5 border border-primary/10 rounded-md p-5 text-center"
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Full description */}
          <div className="space-y-5">
            {investment.fullDescription.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed text-foreground/80"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioDetailPage;
