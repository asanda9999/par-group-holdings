import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface GatewayTileProps {
  title: string;
  descriptor: string;
  to: string;
  index: number;
}

const tileStyles = [
  "bg-primary text-primary-foreground",
  "bg-accent text-accent-foreground",
  "bg-secondary text-secondary-foreground",
];

const hoverStyles = [
  "hover:bg-primary/90",
  "hover:bg-accent/80",
  "hover:bg-secondary/80",
];

const subtextStyles = [
  "text-primary-foreground/70",
  "text-muted-foreground",
  "text-muted-foreground",
];

const arrowStyles = [
  "text-primary-foreground/60 group-hover:text-primary-foreground",
  "text-accent-foreground/60 group-hover:text-accent-foreground",
  "text-secondary-foreground/60 group-hover:text-secondary-foreground",
];

const borderStyles = [
  "",
  "md:border-l md:border-r border-t md:border-t-0 border-border",
  "border-t md:border-t-0 border-border",
];

const GatewayTile = ({ title, descriptor, to, index }: GatewayTileProps) => {
  return (
    <Link
      to={to}
      className={`group flex flex-col justify-end p-8 md:p-10 lg:p-14 transition-all duration-300 ${tileStyles[index]} ${hoverStyles[index]} ${borderStyles[index]}`}
    >
      <div className="mt-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h2>
        <p className={`text-sm md:text-base leading-relaxed ${subtextStyles[index]}`}>
          {descriptor}
        </p>
        <div className={`mt-8 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${arrowStyles[index]}`}>
          <span>Explore</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
};

export default GatewayTile;
