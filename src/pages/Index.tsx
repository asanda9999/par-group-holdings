// src/pages/Index.tsx
import Layout from "@/components/Layout";
import GatewayTile from "@/components/GatewayTile";
import OptimizedImage from "@/components/OptimizedImage";
import { motion } from "framer-motion";
import logo from "@/assets/par-logo.jpg";

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

const Index = () => {
  return (
    <Layout showHeader={false}>
      {/* White Header Strip with Logo */}
     <div className="w-full bg-white border-b border-neutral-200">
  <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
    
    <OptimizedImage
      src={logo}
      alt="ParEquity Group Logo"
      className="h-16 md:h-24 w-auto mb-6"
      priority
      width={220}
      height={100}
    />

    <p className="text-xs tracking-[0.35em] uppercase text-neutral-500">
      Long-Term Capital . Responsible Stewardship.
    </p>

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