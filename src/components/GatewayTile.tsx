// src/components/GatewayTile.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, Variants, useReducedMotion } from "framer-motion";

interface GatewayTileProps {
  title: string;
  descriptor: string;
  to: string;
  logoSrc?: string;
}

const tileStyles = [
  "bg-[linear-gradient(180deg,#ffffff_0%,#fcfcfd_100%)] text-[#0b0f19]",
  "bg-[linear-gradient(180deg,#ffffff_0%,#fcfcfd_100%)] text-[#0b0f19]",
  "bg-[linear-gradient(180deg,#ffffff_0%,#fcfcfd_100%)] text-[#0b0f19]",
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
  logoSrc,
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

  const divider =
    index === 0
      ? "lg:border-r lg:border-[#e8ebf0]"
      : index === 1
      ? "lg:border-r lg:border-[#e8ebf0]"
      : "";

  return (
    <motion.div
      variants={tileVariants}
      className={[
        "relative",
        "min-h-[68vh] lg:min-h-[78vh]",
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
          "px-10 py-16 md:px-14 lg:px-16",
          "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2",
          "focus-visible:ring-offset-[#f5f5f7]",
          tileStyles[index],
        ].join(" ")}
      >
        {/* Subtle premium light vignette */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 -z-10
            bg-[radial-gradient(900px_520px_at_50%_18%,rgba(15,23,42,0.025),transparent_62%)]
          "
        />

        {/* Soft white hover sheen */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100
            transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(255,255,255,0.65),transparent_60%)]
          "
        />

        {/* Gentle edge definition */}
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-none"
          initial={{ opacity: 0.85 }}
          whileHover={reduceMotion ? {} : { opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(15,23,42,0.05), 0 12px 34px rgba(15,23,42,0.05)",
          }}
        />

        {/* Micro lift */}
        <motion.div
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -4,
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
                }
          }
          className="relative flex max-w-[34rem] flex-col items-center"
        >
          {/* Logo */}
          {logoSrc && (index === 0 || index === 1 || index === 2) && (
            <div className="mb-8">
              <img
                src={logoSrc}
                alt={`${title} logo`}
                className={index === 1 ? "h-32 w-auto md:h-40 lg:h-48" : "h-20 w-auto md:h-24 lg:h-32"}
              />
            </div>
          )}

          {/* Typography */}
          <div className="space-y-4">
            <h1 className="gateway-header text-2xl font-light leading-[1.05] tracking-[-0.02em] md:text-3xl lg:text-4xl">
              {mainTitle}
            </h1>

            {subTitle && (
              <h2 className="text-xs font-medium uppercase tracking-[0.32em] text-[#6b7280] md:text-sm">
                {subTitle}
              </h2>
            )}
          </div>

          {/* Descriptor */}
          <p className="mt-8 max-w-[46ch] text-sm leading-relaxed text-[#4b5563] md:text-base">
            {descriptor}
          </p>

          {/* CTA */}
          <span
            className="
              mt-10 inline-flex items-center gap-2 rounded-full
              border border-black/[0.08]
              bg-white/80 px-6 py-3
              text-[11px] font-medium uppercase tracking-[0.22em] text-[#111827]
              backdrop-blur-md
              transition-all duration-700
              group-hover:border-black/[0.12]
              group-hover:bg-white
            "
          >
            Learn More
            <ArrowRight
              className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>

          {/* Micro underline divider */}
          <span
            aria-hidden="true"
            className="mt-10 h-px w-16 bg-black/[0.08] opacity-70"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default GatewayTile;