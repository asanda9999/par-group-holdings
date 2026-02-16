import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { ArrowLeft, Calendar, TrendingUp, Building } from "lucide-react";
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
  const navigate = useNavigate();

  const investment = allPortfolios.find((i) => i.slug === slug);

  const handleBackClick = () => {
    navigate(investment.divisionPath, { state: { scrollToPortfolio: true } });
  };

  // Handle smooth scrolling when coming from portfolio section
  useEffect(() => {
    if (location.state?.scrollToPortfolio) {
      // This will be handled by the navigation
      const timer = setTimeout(() => {
        window.history.replaceState({}, document.title, location.pathname);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

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
      <div className="pb-20">
        {/* Hero Section with overlaid text */}
        <div className="relative h-screen max-h-[600px] mb-12">
          <img
            src={investment.image}
            alt={investment.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-12">
            <div className="max-w-6xl mx-auto w-full">
              {/* Back link */}
              <button
                onClick={handleBackClick}
                className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors mb-8 bg-transparent border-none cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </button>

              {/* Header */}
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-white/70 mb-3 block">
                  PROPERTY
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {investment.name}
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Content below hero */}
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left column - Overview and Key Highlights */}
            <div className="lg:col-span-2 space-y-10">
              {/* Overview section */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Overview
                </h2>
                <div className="space-y-4">
                  {investment.fullDescription.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-foreground/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Key Highlights section */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Key Highlights
                </h2>
                <ul className="space-y-3">
                  {investment.stats.map((stat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <span className="text-primary font-semibold mt-0.5">
                        •
                      </span>
                      <span>
                        <strong>{stat.value}</strong> {stat.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column - Investment Details */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-lg font-semibold text-foreground mb-6">
                  INVESTMENT DETAILS
                </h2>
                
                <div className="space-y-6">
                  {/* Year */}
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-medium text-foreground">
                        {investment.yearInvested}
                      </p>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-medium text-foreground">
                        {investment.status}
                      </p>
                    </div>
                  </div>

                  {/* Sector */}
                  <div className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Sector</p>
                      <p className="font-medium text-foreground">
                        {investment.sector}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PortfolioDetailPage;
