import { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import GatewayTile from "@/components/GatewayTile";
import OptimizedImage from "@/components/OptimizedImage";
import logo from "@/assets/OG-Logo.svg";
import peLogo from "@/assets/PE.svg";
import parvestLogo from "@/assets/Parvest.svg";
import anthuriLogo from "@/assets/Logo final 2.svg";

const tiles = [
  {
    title: "ParEquity",
    descriptor: "Long-term private equity investments in established businesses",
    to: "/parequity",
    logoSrc: peLogo,
  },
  {
    title: "Anthuri Fund",
    descriptor:
      "Impact-driven capital focused on sustainable growth and transformation",
    to: "/anthuri-fund",
    logoSrc: anthuriLogo,
  },
  {
    title: "ParVest",
    descriptor:
      "Long-term investment in responsibly stewarded income-generating real estate",
    to: "/parvest",
    logoSrc: parvestLogo,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.35,
      staggerChildren: 0.22,
    },
  },
};

const easePremium: [number, number, number, number] = [0.16, 1, 0.3, 1];

const connectorStroke = "#111111";
const connectorGlow = "#4b5563";
const connectorHighlight = "#0f172a";

const navLinkClass =
  "group relative text-[11px] font-medium uppercase tracking-[0.30em] text-white/78 transition-all duration-500 hover:text-white";

const glassPanelClass =
  "relative overflow-hidden rounded-[28px] border border-white/12 bg-white/90 shadow-[0_18px_50px_rgba(2,8,23,0.28),0_1px_0_rgba(255,255,255,0.55)_inset] backdrop-blur-[22px]";

const dropdownItemClass =
  "group relative block rounded-[18px] px-4 py-3 transition-all duration-300 hover:bg-[#f8fafc] hover:shadow-[0_8px_20px_rgba(15,23,42,0.05)]";

const Index = () => {
  const [aboutOpen, setAboutOpen] = useState(false);

  const svgId = useId().replace(/:/g, "");
  const connectorBaseId = `connectorBase-${svgId}`;
  const connectorSweepId = `connectorSweep-${svgId}`;
  const connectorGlowFilterId = `connectorGlowFilter-${svgId}`;
  const branchMaskId = `branchMask-${svgId}`;

  return (
    <Layout showHeader={false}>
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-[#f8f9fb]">
        {/* Top navigation */}
        <div className="z-[60] border-b border-white/10 bg-gradient-to-b from-[#0f1e3d] to-[#0b1324] text-white shadow-[0_18px_40px_rgba(2,8,23,0.28)]">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <div className="relative overflow-visible">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

              <div className="relative mx-auto flex items-center justify-center px-6 py-6 md:py-7">
                <nav className="flex items-center gap-8 md:gap-14">
                  <Link to="/" className={navLinkClass}>
                    <span className="relative">
                      Home
                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                    </span>
                  </Link>

                  <div
                    className="relative"
                    onMouseEnter={() => setAboutOpen(true)}
                    onMouseLeave={() => setAboutOpen(false)}
                  >
                    <button
                      type="button"
                      className={`${navLinkClass} inline-flex items-center gap-2`}
                      aria-expanded={aboutOpen}
                      aria-haspopup="true"
                    >
                      <span className="relative">
                        About
                        <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                      </span>

                      <motion.span
                        animate={{
                          rotate: aboutOpen ? 180 : 0,
                          y: aboutOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.35, ease: easePremium }}
                        className="text-[9px] tracking-normal text-white/60"
                      >
                        ▾
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {aboutOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 12,
                            scale: 0.98,
                            filter: "blur(10px)",
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                            scale: 0.985,
                            filter: "blur(8px)",
                          }}
                          transition={{ duration: 0.34, ease: easePremium }}
                          className="absolute left-1/2 top-full z-50 mt-3 w-[340px] -translate-x-1/2"
                        >
                          <div className={glassPanelClass}>
                            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.30)_32%,rgba(255,255,255,0.16)_100%)]" />
                            <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-white/85" />

                            <div className="relative p-5">
                              <div className="space-y-1">
                                <Link
                                  to="/group-details"
                                  className={dropdownItemClass}
                                >
                                  <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#0f172a]">
                                    Group Overview
                                  </div>
                                  <div className="mt-1.5 text-[15px] leading-6 text-[#667085]">
                                    Overview of the parent group and its
                                    structure.
                                  </div>
                                </Link>

                                <div className="my-3 h-px bg-gradient-to-r from-transparent via-[#dbe4f0] to-transparent" />

                                <div className="px-4 pb-1 pt-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#94a3b8]">
                                  Our Mandates
                                </div>

                                <Link
                                  to="/parequity"
                                  className={dropdownItemClass}
                                >
                                  <div className="text-[11px] font-semibold tracking-[0.26em] text-[#0f172a]">
                                    ParEquity
                                  </div>
                                  <div className="mt-1.5 text-[15px] leading-6 text-[#667085]">
                                    Private equity investment platform.
                                  </div>
                                </Link>

                                <Link
                                  to="/anthuri-fund"
                                  className={dropdownItemClass}
                                >
                                  <div className="text-[11px] font-semibold  tracking-[0.26em] text-[#0f172a]">
                                    Anthuri Fund
                                  </div>
                                  <div className="mt-1.5 text-[15px] leading-6 text-[#667085]">
                                    Impact-focused growth and transformation
                                    capital.
                                  </div>
                                </Link>

                                <Link
                                  to="/parvest"
                                  className={dropdownItemClass}
                                >
                                  <div className="text-[11px] font-semibold  tracking-[0.26em] text-[#0f172a]">
                                    ParVest
                                  </div>
                                  <div className="mt-1.5 text-[15px] leading-6 text-[#667085]">
                                    Real estate and long-term asset
                                    stewardship.
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/contact" className={navLinkClass}>
                    <span className="relative">
                      Contact
                      <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-500 group-hover:w-full" />
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Parent brand hero */}
        <div className="w-full border-b border-neutral-200 bg-gradient-to-b from-white to-[#f8f9fb] pt-6">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 pb-10 md:pt-20 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.95, ease: easePremium }}
              className="group relative flex flex-col items-center rounded-[32px] px-8 py-6"
            >
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 rounded-[32px]"
                animate={{
                  boxShadow: "0 0 0 0px rgba(0,32,96,0), 0 8px 24px rgba(15,23,42,0.00)",
                }}
                transition={{ duration: 0.4, ease: easePremium }}
              />

              <motion.div
                aria-hidden="true"
                className="absolute inset-0 rounded-[32px] border border-[#dbe4f0]"
                animate={{
                  opacity: 0.18,
                  scale: 1,
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10 flex flex-col items-center">
                <OptimizedImage
                  src={logo}
                  alt="ParEquity Group Logo"
                  className="mb-6 h-32 w-auto md:h-48"
                  priority
                  width={520}
                  height={260}
                />

                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.9,
                    ease: easePremium,
                  }}
                  className="text-center text-[11px] font-medium uppercase tracking-[0.45em] text-neutral-400 md:text-xs"
                >
                  Building Futures – Inspiring Leaders
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Premium animated connector */}
        <div className="hidden bg-[#f8f9fb] md:block">
          <div className="mx-auto max-w-7xl px-6">
            <div className="relative h-28">
              <motion.svg
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: easePremium }}
                viewBox="0 0 1200 160"
                preserveAspectRatio="none"
                className="h-full w-full overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id={connectorBaseId}
                    x1="0"
                    y1="0"
                    x2="1200"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      stopColor={connectorStroke}
                      stopOpacity="0.65"
                    />
                    <stop offset="50%" stopColor="#000000" stopOpacity="1" />
                    <stop
                      offset="100%"
                      stopColor={connectorStroke}
                      stopOpacity="0.65"
                    />
                  </linearGradient>

                  <linearGradient
                    id={connectorSweepId}
                    x1="0"
                    y1="0"
                    x2="240"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      stopColor={connectorHighlight}
                      stopOpacity="0"
                    />
                    <stop
                      offset="50%"
                      stopColor={connectorHighlight}
                      stopOpacity="0.95"
                    />
                    <stop
                      offset="100%"
                      stopColor={connectorHighlight}
                      stopOpacity="0"
                    />
                  </linearGradient>

                  <filter
                    id={connectorGlowFilterId}
                    x="-20%"
                    y="-80%"
                    width="140%"
                    height="260%"
                  >
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.22 0"
                    />
                  </filter>

                  <mask id={branchMaskId}>
                    <rect width="1200" height="160" fill="black" />
                    <path
                      d="M95 56 H1105"
                      stroke="white"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                  </mask>
                </defs>

                <motion.g
                  animate={{
                    opacity: [0.25, 0.5, 0.25],
                  }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  filter={`url(#${connectorGlowFilterId})`}
                >
                  <path
                    d="M600 0 V56"
                    stroke={connectorGlow}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M95 56 H1105 V140"
                    stroke={connectorGlow}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M95 56 V140"
                    stroke={connectorGlow}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M600 56 V140"
                    stroke={connectorGlow}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.g>

                <motion.path
                  d="M600 0 V56"
                  stroke={`url(#${connectorBaseId})`}
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.35,
                    duration: 0.5,
                    ease: easePremium,
                  }}
                />

                <motion.path
                  d="M95 56 H1105 V140"
                  stroke={`url(#${connectorBaseId})`}
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 0.7,
                    duration: 1.0,
                    ease: easePremium,
                  }}
                />

                <motion.path
                  d="M95 56 V140"
                  stroke={`url(#${connectorBaseId})`}
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 1.0,
                    duration: 0.42,
                    ease: easePremium,
                  }}
                />

                <motion.path
                  d="M600 56 V140"
                  stroke={`url(#${connectorBaseId})`}
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    delay: 1.08,
                    duration: 0.42,
                    ease: easePremium,
                  }}
                />

                <motion.rect
                  x={-260}
                  y={48}
                  width={260}
                  height={16}
                  fill={`url(#${connectorSweepId})`}
                  mask={`url(#${branchMaskId})`}
                  animate={{ x: [-260, 980] }}
                  transition={{
                    duration: 4.6,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0.6,
                  }}
                />

                {[
                  { cx: 95, cy: 56, delay: 0.2 },
                  { cx: 600, cy: 56, delay: 0 },
                  { cx: 1105, cy: 56, delay: 0.4 },
                ].map((point, index) => (
                  <motion.circle
                    key={index}
                    cx={point.cx}
                    cy={point.cy}
                    r={
                      point.cx === 600
                        ? "3.6"
                        : "3.2"
                    }
                    fill="#eef4fa"
                    animate={{
                      opacity: [0.35, 0.75, 0.35],
                    }}
                    transition={{
                      duration: point.cx === 600 ? 2.4 : 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: point.delay,
                    }}
                  />
                ))}
              </motion.svg>
            </div>
          </div>
        </div>

        {/* Subsidiaries */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="
            grid grid-cols-1
            border-t border-neutral-200
            divide-y divide-neutral-200
            bg-[#f8f9fb]
            md:grid-cols-3 md:divide-y-0 md:divide-x
          "
        >
          {tiles.map((tile, i) => (
            <GatewayTile key={tile.id} {...tile} index={i} />
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;
