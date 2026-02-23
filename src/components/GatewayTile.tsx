// src/components/GatewayTile.tsx
import { Link } from "react-router-dom";
import { motion, Variants, useReducedMotion } from "framer-motion";

interface GatewayTileProps {
  title: string;
  descriptor: string;
  to: string;
}

const tileStyles = [
  "bg-[#f8f9fb] text-[#0b0f19]",
  "bg-gradient-to-b from-[#0b1324] to-[#0f1e3d] text-white",
  "bg-[#f8f9fb] text-[#0b0f19]",
];

// Apple-like entrance (staggered by the parent container)
const tileVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const GatewayTile = ({
  title,
  descriptor,
  to,
  index,
}: GatewayTileProps & { index: number }) => {
  const reduceMotion = useReducedMotion();

  let mainTitle: string;
  let subTitle: string;

  if (title === "Anthuri Fund") {
    mainTitle = title;
    subTitle = "";
  } else {
    const titleParts = title.split(" ");
    mainTitle = titleParts[0];
    subTitle = titleParts.slice(1).join(" ");
  }

  const isDark = index === 1;

  return (
    <motion.div
      variants={tileVariants}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              boxShadow: "0 40px 100px rgba(0,0,0,0.08)",
              transition: {
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1] as const,
              },
            }
      }
      className="relative h-full"
    >
      <Link
        to={to}
        aria-label={`Open ${title}`}
        className={[
          "group relative",
          "flex flex-col items-center justify-center text-center",
          "h-full w-full", // critical: fill the grid cell
          "p-12 md:p-16 lg:p-24",
          "transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          isDark
            ? "focus-visible:ring-white/60 focus-visible:ring-offset-[#0b1324]"
            : "focus-visible:ring-black/30 focus-visible:ring-offset-white",
          tileStyles[index],
        ].join(" ")}
      >
        {/* Subtle premium sheen overlay */}
        <span
          aria-hidden="true"
          className={[
            "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100",
            "transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isDark
              ? "bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(255,255,255,0.12),transparent_60%)]"
              : "bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(0,0,0,0.06),transparent_60%)]",
          ].join(" ")}
        />

        <div className="relative flex flex-col items-center space-y-8 max-w-lg">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.05] whitespace-nowrap">
              {mainTitle}
            </h1>

            {subTitle && (
              <h2 className="text-lg md:text-xl lg:text-2xl font-medium tracking-[0.08em] uppercase opacity-80">
                {subTitle}
              </h2>
            )}
          </div>

          <p
            className={[
              "text-sm md:text-base leading-relaxed max-w-md",
              isDark ? "text-white/80" : "text-[#4b5563]",
            ].join(" ")}
          >
            {descriptor}
          </p>

          {/* Styled as button (no nested interactive elements inside Link) */}
          <span
            className={[
              "mt-4 inline-flex items-center justify-center",
              "px-8 py-3 rounded-full text-xs tracking-[0.2em]",
              "font-medium border transition-all duration-500",
              "backdrop-blur-sm",
              isDark
                ? "border-white/30 text-white group-hover:bg-white group-hover:text-[#0b1324]"
                : "border-black/20 text-black group-hover:bg-black group-hover:text-white",
            ].join(" ")}
          >
            LEARN MORE
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default GatewayTile;