import { useId, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import GatewayTile from "@/components/GatewayTile";
import OptimizedImage from "@/components/OptimizedImage";
import logo from "@/assets/OG-Logo.svg";
import peLogo from "@/assets/PE.svg";
import parvestLogo from "@/assets/Parvest.svg";
import anthuriLogo from "@/assets/Logo final 2.svg";

const tiles = [
  { title:"", 
    descriptor: "Long-term private equity investments in established businesses",
    to: "/parequity",
    logoSrc: peLogo,
  },
  {
    title:"",
    descriptor:
      "Impact-driven capital focused on sustainable growth and transformation",
    to: "/anthuri-fund",
    logoSrc: anthuriLogo,
  },
  {
    title:"",
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

const Index = () => {
  const navigate = useNavigate();
  const [isParentHovered, setIsParentHovered] = useState(false);

  const svgId = useId().replace(/:/g, "");
  const connectorBaseId = `connectorBase-${svgId}`;
  const connectorSweepId = `connectorSweep-${svgId}`;
  const connectorGlowFilterId = `connectorGlowFilter-${svgId}`;
  const branchMaskId = `branchMask-${svgId}`;

  return (
    <Layout showHeader={false}>
      <div className="min-h-screen w-full bg-gradient-to-b from-white to-[#f8f9fb]">
        {/* Header / Parent brand */}
        <div className="w-full border-b border-neutral-200 bg-gradient-to-b from-white to-[#f8f9fb]">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 pb-10 md:pt-20 md:pb-12">
            <motion.button
              type="button"
              onClick={() => navigate("/group-details")}
              onMouseEnter={() => setIsParentHovered(true)}
              onMouseLeave={() => setIsParentHovered(false)}
              initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.95, ease: easePremium }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
              className="group relative flex flex-col items-center rounded-[32px] px-8 py-6 outline-none transition-all duration-500 cursor-pointer"
              aria-label="Enter ParEquity Group details page"
            >
              {/* soft halo */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 rounded-[32px]"
                animate={{
                  boxShadow: isParentHovered
                    ? "0 0 0 10px rgba(0,32,96,0.05), 0 24px 60px rgba(15,23,42,0.10)"
                    : "0 0 0 0px rgba(0,32,96,0), 0 8px 24px rgba(15,23,42,0.00)",
                }}
                transition={{ duration: 0.4, ease: easePremium }}
              />

              {/* soft breathing pulse */}
              <motion.div
                aria-hidden="true"
                className="absolute inset-0 rounded-[32px] border border-[#dbe4f0]"
                animate={{
                  opacity: isParentHovered ? [0.35, 0.7, 0.35] : 0.18,
                  scale: isParentHovered ? [1, 1.012, 1] : 1,
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
                  transition={{ delay: 0.35, duration: 0.9, ease: easePremium }}
                  className="text-center text-[11px] font-medium uppercase tracking-[0.45em] text-neutral-400 md:text-xs"
                >
                  Building Futures – Inspiring Leaders
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{
                    opacity: isParentHovered ? 1 : 0.72,
                    y: isParentHovered ? 0 : 4,
                  }}
                  transition={{ duration: 0.35, ease: easePremium }}
                  className="mt-4 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.32em] text-[#002060] md:text-xs"
                >
                  <span>Explore the Group</span>
                  <motion.span
                    animate={{ x: isParentHovered ? 4 : 0 }}
                    transition={{ duration: 0.35, ease: easePremium }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Premium animated connector */}
        <div className="hidden md:block bg-[#f8f9fb]">
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
                    <stop offset="0%" stopColor={connectorStroke} stopOpacity="0.65" />
                    <stop offset="50%" stopColor="#000000" stopOpacity="1" />
                    <stop offset="100%" stopColor={connectorStroke} stopOpacity="0.65" />
                  </linearGradient>

                  <linearGradient
                    id={connectorSweepId}
                    x1="0"
                    y1="0"
                    x2="240"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor={connectorHighlight} stopOpacity="0" />
                    <stop offset="50%" stopColor={connectorHighlight} stopOpacity="0.95" />
                    <stop offset="100%" stopColor={connectorHighlight} stopOpacity="0" />
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

                {/* soft glow layer */}
                <motion.g
                  animate={{
                    opacity: isParentHovered ? [0.55, 0.95, 0.55] : [0.25, 0.5, 0.25],
                  }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                  filter={`url(#${connectorGlowFilterId})`}
                >
                  <path
                    d="M600 0 V56"
                    stroke={connectorGlow}
                    strokeWidth={isParentHovered ? "7" : "5"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M95 56 H1105 V140"
                    stroke={connectorGlow}
                    strokeWidth={isParentHovered ? "7" : "5"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M95 56 V140"
                    stroke={connectorGlow}
                    strokeWidth={isParentHovered ? "7" : "5"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M600 56 V140"
                    stroke={connectorGlow}
                    strokeWidth={isParentHovered ? "7" : "5"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.g>

                {/* main structure */}
                <motion.path
                  d="M600 0 V56"
                  stroke={`url(#${connectorBaseId})`}
                  strokeWidth={isParentHovered ? "3.1" : "2.6"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.35, duration: 0.5, ease: easePremium }}
                />

                <motion.path
                  d="M95 56 H1105 V140"
                  stroke={`url(#${connectorBaseId})`}
                  strokeWidth={isParentHovered ? "3.1" : "2.6"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.7, duration: 1.0, ease: easePremium }}
                />

                <motion.path
                  d="M95 56 V140"
                  stroke={`url(#${connectorBaseId})`}
                  strokeWidth={isParentHovered ? "3.1" : "2.6"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.0, duration: 0.42, ease: easePremium }}
                />

                <motion.path
                  d="M600 56 V140"
                  stroke={`url(#${connectorBaseId})`}
                  strokeWidth={isParentHovered ? "3.1" : "2.6"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.08, duration: 0.42, ease: easePremium }}
                />

                {/* moving highlight sweep */}
                <motion.rect
                  x={-260}
                  y={48}
                  width={260}
                  height={16}
                  fill={`url(#${connectorSweepId})`}
                  mask={`url(#${branchMaskId})`}
                  animate={{ x: isParentHovered ? [-260, 1220] : [-260, 980] }}
                  transition={{
                    duration: isParentHovered ? 2.6 : 4.6,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: isParentHovered ? 0.15 : 0.6,
                  }}
                />

                {/* subtle junction glow */}
                {[
                  { cx: 95, cy: 56, delay: 0.2 },
                  { cx: 600, cy: 56, delay: 0 },
                  { cx: 1105, cy: 56, delay: 0.4 },
                ].map((point, index) => (
                  <motion.circle
                    key={index}
                    cx={point.cx}
                    cy={point.cy}
                    r={point.cx === 600 ? (isParentHovered ? "4.4" : "3.6") : isParentHovered ? "3.8" : "3.2"}
                    fill="#eef4fa"
                    animate={{
                      opacity: isParentHovered ? [0.6, 1, 0.6] : [0.35, 0.75, 0.35],
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
  style={{
    filter: isParentHovered ? "blur(0.8px)" : "blur(0px)",
    opacity: isParentHovered ? 0.92 : 1,
    transform: isParentHovered ? "scale(0.998)" : "scale(1)",
    transition:
      "filter 420ms cubic-bezier(0.16, 1, 0.3, 1), opacity 420ms cubic-bezier(0.16, 1, 0.3, 1), transform 420ms cubic-bezier(0.16, 1, 0.3, 1)",
  }}
>
          {tiles.map((tile, i) => (
            <GatewayTile key={tile.title} {...tile} index={i} />
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Index;
