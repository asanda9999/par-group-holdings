import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  image: string;
}

const HeroSection = ({ title, subtitle, ctaText, ctaHref = "#about", image }: HeroSectionProps) => {
  return (
    <section className="relative w-full h-[75vh] min-h-[500px] overflow-hidden">
      {/* Background image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
        <div className="max-w-2xl fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight">
            {title}
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
            {subtitle}
          </p>
          <a
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-200 rounded-sm"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
