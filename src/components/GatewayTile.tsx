import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface GatewayTileProps {
  title: string;
  descriptor: string;
  to: string;
}

const GatewayTile = ({ title, descriptor, to }: GatewayTileProps) => {
  return (
    <Link
      to={to}
      className="group block border border-tile-border rounded-sm p-8 md:p-10 transition-all duration-300 hover:border-tile-hover-border hover:-translate-y-1 hover:shadow-lg"
    >
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">{title}</h2>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{descriptor}</p>
      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Explore</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  );
};

export default GatewayTile;
