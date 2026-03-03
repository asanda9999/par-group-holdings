import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
  image: string;
}

const easePremium = [0.16, 1, 0.3, 1] as const;

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaHref = "#about",
  image,
}: HeroSectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  const scrollToAbout = () => {
    document
      .getElementById(ctaHref.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollY } = useScroll();

  // Subtle parallax + scale (Apple-style = low amplitude)
  const imageY = useTransform(scrollY, [0, 700], [0, shouldReduceMotion ? 0 : 90]);
  const imageScale = useTransform(scrollY, [0, 700], [1.03, 1.08]);
  const textY = useTransform(scrollY, [0, 700], [0, shouldReduceMotion ? 0 : -28]);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.05, ease: easePremium },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] md:min-h-screen flex items-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt=""
          className="w-full h-full object-cover will-change-transform"
          loading="eager"
          style={{
            y: imageY,
            scale: shouldReduceMotion ? 1 : imageScale,
          }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1.03 }}
          transition={{ duration: 1.2, ease: easePremium }}
        />

        {/* Premium overlay (softer + more cinematic than a hard gradient) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061225]/70 via-[#061225]/45 to-[#061225]/80" />

        {/* Side wash for readability (subtle) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061225]/65 via-transparent to-transparent" />

        {/* Vignette edge (luxury depth) */}
        <div className="absolute inset-0 [background:radial-gradient(1200px_600px_at_30%_40%,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full"
        style={{ y: textY }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl lg:max-w-3xl"
          >
            {/* Eyebrow */}
            <motion.p
              variants={item}
              className="text-white/80 text-[11px] md:text-xs font-medium tracking-[0.32em] uppercase mb-6"
            >
              ParEquity Group
            </motion.p>

            {/* Title */}
            <motion.h1
              variants={item}
              className="text-white font-light tracking-[-0.02em]
                         text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6"
              style={{ textShadow: "0 18px 60px rgba(0,0,0,0.45)" }}
            >
              {title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="text-white/85 text-base md:text-lg lg:text-xl leading-relaxed
                         max-w-[44ch] mb-10"
            >
              {subtitle}
            </motion.p>

            {/* CTA Row */}
            <motion.div variants={item} className="flex items-center gap-4">
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center gap-2 rounded-full
                           border border-white/22 bg-white/8
                           px-6 py-3 md:px-7 md:py-3.5
                           text-[11px] md:text-xs font-medium tracking-[0.22em] uppercase
                           text-white backdrop-blur-md
                           transition-all duration-500
                           hover:bg-white/12 hover:border-white/30
                           focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[#061225]"
              >
                <span>{ctaText}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              {/* Optional secondary link style (kept minimal) */}
              <a
                href="#portfolio"
                className="text-white/70 text-[11px] md:text-xs tracking-[0.22em] uppercase
                           hover:text-white transition-colors duration-300"
              >
                View Portfolio
              </a>
            </motion.div>

            {/* Micro divider (Apple-ish) */}
            <motion.div
              variants={item}
              className="mt-14 h-px w-24 bg-white/20"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-6 md:left-10 z-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white/18 bg-white/6 backdrop-blur-md grid place-items-center">
          <div className="w-px h-4 bg-white/35" />
        </div>
        <span className="text-white/55 text-[10px] tracking-[0.28em] uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default HeroSection;