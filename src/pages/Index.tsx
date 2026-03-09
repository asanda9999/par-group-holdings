// src/pages/Index.tsx
import Layout from "@/components/Layout";
import GatewayTile from "@/components/GatewayTile";
import OptimizedImage from "@/components/OptimizedImage";
import { motion } from "framer-motion";
import logo from "@/assets/OG-Logo.svg";

const tiles = [
  {
    title: "ParEquity",
    descriptor: "Long-term private equity investments in established businesses",
    to: "/parequity",
  },
  {
    title: "Anthuri Fund",
    descriptor: "Impact-driven capital focused on sustainable growth and transformation",
    to: "/anthuri-fund",
  },
  {
    title: "ParVest",
    descriptor: "Long-term investment in responsibly stewarded income-generating real estate",
    to: "/parvest",
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

const Index = () => {
  return (
    <Layout showHeader={false}>
      {/* Premium Header Strip with Logo */}
      <div className="w-full border-b border-neutral-200 bg-gradient-to-b from-white to-[#f8f9fb]">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 flex flex-col items-center">
          {/* Logo entrance */}
          <motion.div
            initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, ease: easePremium }}
          >
            <OptimizedImage
              src={logo}
              alt="ParEquity Group Logo"
              className="h-32 md:h-48 w-auto mb-6"
              priority
              width={520}
              height={260}
            />
          </motion.div>

          {/* Tagline entrance */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: easePremium }}
            className="text-[11px] md:text-xs tracking-[0.45em] uppercase text-neutral-400 font-medium"
          >
            Building Futures – Inspiring Leaders
          </motion.p>
        </div>
      </div>

      {/* Full-height panels that fill the remaining space (banner + footer stay visible) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="
          flex-1
          grid
          grid-cols-1
          md:grid-cols-3
          divide-y md:divide-y-0 md:divide-x
          divide-neutral-200
        "
      >
        {tiles.map((tile, i) => (
          <GatewayTile key={tile.title} {...tile} index={i} />
        ))}
      </motion.div>
    </Layout>
  );
};

export default Index;