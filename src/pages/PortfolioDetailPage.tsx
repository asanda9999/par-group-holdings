import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, TrendingUp, DollarSign, Users, MapPin, Percent, Zap, Droplet, Leaf, Truck, ShieldCheck, Activity } from "lucide-react";
import {
  parequityPortfolio,
  anthuriPortfolio,
  parvestPortfolio,
  type PortfolioInvestment,
} from "@/data/portfolioData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allPortfolios: PortfolioInvestment[] = [
  ...parequityPortfolio,
  ...anthuriPortfolio,
  ...parvestPortfolio,
];

const PortfolioDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const item = allPortfolios.find((p) => p.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Investment Not Found</h1>
          <button onClick={() => navigate("/")} className="text-accent hover:underline">
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover"
            loading="eager"
            style={{
              imageRendering: '-webkit-optimize-contrast',
              transform: 'scale(1.001)',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-navy/60" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-6 pb-12">
            <button
              onClick={() => navigate(`${item.divisionPath}#portfolio`)}
              className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> BACK TO PORTFOLIO
            </button>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground/60">
              {item.sector}
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mt-2">
              {item.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main */}
            <div className="md:col-span-2">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Overview</h2>
              <div className="space-y-4 mb-10">
                {item.fullDescription.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Key Highlights</h2>
              <ul className="space-y-4">
                {item.stats.map((stat, i) => {
                  // Function to determine which icon to show based on stat label
                  const getIcon = () => {
                    const iconProps = { className: "w-4 h-4 text-black mt-1 shrink-0" };
                    const label = stat.label.toLowerCase();
                    
                    if (label.includes('revenue') || label.includes('$') || label.includes('ebitda')) 
                      return <DollarSign {...iconProps} />;
                    if (label.includes('%') || label.includes('margin') || label.includes('rate')) 
                      return <Percent {...iconProps} />;
                    if (label.includes('employee') || label.includes('user') || label === 'team') 
                      return <Users {...iconProps} />;
                    if (label.includes('province') || label.includes('market') || label.includes('location')) 
                      return <MapPin {...iconProps} />;
                    if (label.includes('mw') || label.includes('capacity') || label.includes('power')) 
                      return <Zap {...iconProps} />;
                    if (label.includes('water') || label.includes('litre')) 
                      return <Droplet {...iconProps} />;
                    if (label.includes('co₂') || label.includes('green') || label.includes('solar') || label.includes('renewable')) 
                      return <Leaf {...iconProps} />;
                    if (label.includes('carrier') || label.includes('load') || label.includes('mile') || label.includes('logistic')) 
                      return <Truck {...iconProps} />;
                    if (label.includes('verify') || label.includes('credential') || label.includes('compliance')) 
                      return <ShieldCheck {...iconProps} />;
                    
                    return <Activity {...iconProps} />;
                  };
                  
                  return (
                    <li key={i} className="flex items-start gap-3">
                      {getIcon()}
                      <span className="text-gray-800 text-sm leading-relaxed">
                        <strong className="text-black">{stat.value}</strong> {stat.label}
                      </span>
                    </li>
                  );
                })}
                ))}
              </ul>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-sm font-medium tracking-wider uppercase text-foreground mb-4">
                  Investment Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Year</p>
                      <p className="text-sm font-medium text-foreground">{item.yearInvested}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className="text-sm font-medium text-foreground">{item.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-accent shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Sector</p>
                      <p className="text-sm font-medium text-foreground">{item.sector}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetailPage;
