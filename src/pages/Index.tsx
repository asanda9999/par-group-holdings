import Layout from "@/components/Layout";
import GatewayTile from "@/components/GatewayTile";

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
    title: "Parvest",
    descriptor: "Venture and growth investments in innovative, founder-led companies",
    to: "/parvest",
  },
];

const Index = () => {
  return (
    <Layout showHeader={false}>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-3">
        {tiles.map((tile, i) => (
          <GatewayTile key={tile.title} {...tile} index={i} />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
