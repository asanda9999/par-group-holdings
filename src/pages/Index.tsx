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
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 w-full py-20">
          {/* Group identity */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Paragon Group
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              One group. Three focused investment mandates.
            </p>
          </div>

          {/* Gateway tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up" style={{ animationDelay: "0.15s" }}>
            {tiles.map((tile) => (
              <GatewayTile key={tile.title} {...tile} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
