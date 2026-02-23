import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  image: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaHref = "#about",
  image,
}: HeroSectionProps) => {
  const scrollToAbout = () => {
    document
      .getElementById(ctaHref.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔹 Parallax setup
  const { scrollY } = useScroll();

  // Skyline moves slower than scroll
  const imageY = useTransform(scrollY, [0, 600], [0, 120]);

  // Text subtly counter-moves
  const textY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt=""
          className="w-full h-full object-cover will-change-transform"
          loading="eager"
          style={{ y: imageY }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r
                     from-navy/85 via-navy/55 to-navy/20"
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-6 md:px-10"
        style={{ y: textY }}
      >
        <div className="max-w-none lg:max-w-4xl">
          <motion.p
            className="text-white text-xs font-medium tracking-[0.3em] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            ParEquity Group 
          </motion.p>

          <motion.h1
            className="font-display text-5xl md:text-6xl lg:text-7xl
                       font-light text-white leading-[1.1] mb-4
                       drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {title}
          </motion.h1>

          {/* Glass subtitle panel */}
          <motion.div
            className="max-w-xl mb-10 rounded-2xl
                      
                       "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-white/95 text-lg md:text-xl leading-relaxed">
              {subtitle}
            </p>
          </motion.div>

          <motion.button
            onClick={scrollToAbout}
            className="border border-white/40 text-white px-8 py-3 text-xs
                       font-medium tracking-[0.15em] uppercase
                       backdrop-blur-sm hover:bg-white/15
                       transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {ctaText}
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative line */}
      <div className="absolute bottom-8 left-6 md:left-10 z-10">
        <div className="w-px h-12 bg-primary-foreground/25" />
      </div>
    </section>
  );
};

export default HeroSection;
