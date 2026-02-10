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
    <Layout>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Group identity bar */}
        <div className="px-6 lg:px-12 py-8 bg-primary">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold text-primary-foreground tracking-tight">
              Paragon Group
            </h1>
            <p className="mt-1 text-sm text-primary-foreground/70">
              One group. Three focused investment mandates.
            </p>
          </div>
        </div>

        {/* Full-height tiles */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          {tiles.map((tile, i) => (
            <GatewayTile key={tile.title} {...tile} index={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
