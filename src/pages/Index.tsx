import Layout from "@/components/Layout";
import GatewayTile from "@/components/GatewayTile";
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

const Index = () => {
  return (
    <Layout showHeader={false}>
      {/* White Header Strip with Logo */}
      <div className="w-full bg-white py-6 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <img 
            src={logo} 
            alt="Par Equity Group Logo" 
            className="h-20 md:h-32 w-auto" // Adjust height as needed
          />
        </div>
      </div>
      
      <div className="min-h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-3">
        {tiles.map((tile, i) => (
          <GatewayTile key={tile.title} {...tile} index={i} />
        ))}
      </div>
    </Layout>
  );
};

export default Index;
