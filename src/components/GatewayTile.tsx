// src/components/GatewayTile.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] as const },
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

  // Hairline dividers (panel feel, not boxed cards)
  const divider =
    index === 0
      ? "lg:border-r lg:border-white/10"
      : index === 1
      ? "lg:border-r lg:border-white/10"
      : "";

  return (
    <motion.div
      variants={tileVariants}
      className={[
        "relative",
        "min-h-[68vh] lg:min-h-[78vh]", // ✅ taller panels
        divider,
      ].join(" ")}
    >
      <Link
        to={to}
        aria-label={`Open ${title}`}
        className={[
          "group relative isolate",
          "flex h-full w-full",
          "items-center justify-center text-center",
          "px-10 py-16 md:px-14 lg:px-16", // less “boxed”
          "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          isDark
            ? "focus-visible:ring-white/60 focus-visible:ring-offset-[#0b1324]"
            : "focus-visible:ring-black/30 focus-visible:ring-offset-white",
          tileStyles[index],
        ].join(" ")}
      >
        {/* Subtle vignette to add depth (quiet luxury) */}
        <span
          aria-hidden="true"
          className={[
            "pointer-events-none absolute inset-0 -z-10",
            isDark
              ? "bg-[radial-gradient(900px_520px_at_50%_20%,rgba(255,255,255,0.10),transparent_60%)]"
              : "bg-[radial-gradient(900px_520px_at_50%_20%,rgba(0,0,0,0.06),transparent_60%)]",
          ].join(" ")}
        />

        {/* Soft hover sheen (very subtle) */}
        <span
          aria-hidden="true"
          className={[
            "pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100",
            "transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
            isDark
              ? "bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(255,255,255,0.12),transparent_60%)]"
              : "bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(0,0,0,0.05),transparent_60%)]",
          ].join(" ")}
        />

        {/* Border glow on hover (replaces boxy shadow) */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-none"
          initial={{ opacity: 0 }}
          whileHover={reduceMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            boxShadow: isDark
              ? "inset 0 0 0 1px rgba(255,255,255,0.10), 0 24px 80px rgba(0,0,0,0.35)"
              : "inset 0 0 0 1px rgba(0,0,0,0.08), 0 24px 80px rgba(0,0,0,0.10)",
          }}
        />

        {/* Micro lift (no “card shadow” vibe) */}
        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -6,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
                }
          }
          className="relative flex flex-col items-center max-w-[34rem]"
        >
          {/* Typography */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-[1.05]">
              {mainTitle}
            </h1>

            {subTitle && (
              <h2 className="text-xs md:text-sm font-medium tracking-[0.32em] uppercase opacity-70">
                {subTitle}
              </h2>
            )}
          </div>

          {/* Descriptor */}
          <p
            className={[
              "mt-8 text-sm md:text-base leading-relaxed",
              "max-w-[46ch]",
              isDark ? "text-white/75" : "text-[#4b5563]",
            ].join(" ")}
          >
            {descriptor}
          </p>

          {/* CTA */}
          <span
            className={[
              "mt-10 inline-flex items-center gap-2 rounded-full",
              "px-6 py-3 text-[11px] tracking-[0.22em] uppercase font-medium",
              "border transition-all duration-700",
              "backdrop-blur-sm",
              isDark
                ? "border-white/22 text-white bg-white/5 group-hover:bg-white/10"
                : "border-black/12 text-black bg-black/[0.02] group-hover:bg-black/[0.04]",
            ].join(" ")}
          >
            Learn More
            <ArrowRight
              className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>

          {/* Micro underline divider (Apple-ish) */}
          <span
            aria-hidden="true"
            className={[
              "mt-10 h-px w-16",
              isDark ? "bg-white/18" : "bg-black/10",
              "opacity-70",
            ].join(" ")}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default GatewayTile;