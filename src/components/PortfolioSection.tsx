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
              className="group block bg-card border border-border rounded-md overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <span className="text-xs font-medium uppercase tracking-wider text-primary/70 mb-2">
                  {inv.sector}
                </span>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
                  {inv.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {inv.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Invested {inv.yearInvested}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
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
