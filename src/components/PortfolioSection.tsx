import { Link } from "react-router-dom";
import type { PortfolioInvestment } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";

interface PortfolioSectionProps {
  investments: PortfolioInvestment[];
}

const PortfolioSection = ({ investments }: PortfolioSectionProps) => {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-12">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {investments.map((inv) => (
            <Link
              key={inv.slug}
              to={`${inv.divisionPath}/portfolio/${inv.slug}`}
              className="group block rounded-md overflow-hidden relative aspect-[4/3]"
            >
              {/* Background image */}
              <img
                src={inv.image}
                alt={inv.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Default overlay */}
              <div className="absolute inset-0 bg-primary/70 transition-all duration-300 group-hover:bg-primary/85" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60 mb-2">
                  {inv.sector}
                </span>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  {inv.name}
                </h3>
                <p className="text-sm text-primary-foreground/75 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {inv.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-primary-foreground/50">
                    Invested {inv.yearInvested}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary-foreground/50 group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
