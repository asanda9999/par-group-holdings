import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-center">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-normal text-primary-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <motion.p 
            className="mt-5 text-lg md:text-xl text-primary-foreground/80 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
          <motion.a
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-200 rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{ 
              scale: 0.96,
              transition: { duration: 0.15, ease: "easeOut" }
            }}
          >
            {ctaText}
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ArrowRight className="h-4 w-4" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
