import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  "hover:bg-primary/100",
  "hover:bg-accent/80",
  "hover:bg-secondary/80",
];

const subtextStyles = [
  "text-primary-foreground/90",
  "text-accent-foreground/90",
  "text-secondary-foreground/90",
];

const buttonStyles = [
  "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary",
  "border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent",
  "border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary",
];

const borderStyles = [
  "",
  "md:border-l md:border-r border-t md:border-t-0 border-border",
  "border-t md:border-t-0 border-border",
];

const GatewayTile = ({ title, descriptor, to, index }: GatewayTileProps) => {
  // Split title into two parts for the two-line display
  // Special case: keep "Anthuri Fund" on the same line
  let mainTitle, subTitle;
  if (title === "Anthuri Fund") {
    mainTitle = title;
    subTitle = "";
  } else {
    const titleParts = title.split(' ');
    mainTitle = titleParts[0];
    subTitle = titleParts.slice(1).join(' ');
  }

  return (
    <motion.div
      whileHover={{
        scale: [1, 1.04, 1.02],
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        zIndex: 10,
        transition: {
          scale: {
            type: "spring",
            stiffness: 400,
            damping: 15,
            duration: 0.4
          },
          y: {
            duration: 0.3,
            ease: "easeOut"
          },
          boxShadow: {
            duration: 0.3,
            ease: "easeOut"
          }
        }
      }}
      initial={{ scale: 1, zIndex: 1 }}
    >
      <Link
        to={to}
        className={`h-full w-full group flex flex-col items-center justify-center p-8 md:p-10 lg:p-14 text-center transition-all duration-300 ${tileStyles[index]} ${hoverStyles[index]} ${borderStyles[index]}`}
      >
        <div className="flex flex-col items-center space-y-6 max-w-md">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">
              {mainTitle}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-normal">
              {subTitle}
            </h2>
          </div>
          
          <p className={`text-sm md:text-base leading-relaxed text-center ${subtextStyles[index]}`}>
            {descriptor}
          </p>
          
          <button className={`px-6 py-3 border rounded-md font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${buttonStyles[index]}`}>
            Learn More
          </button>
        </div>
      </Link>
    </motion.div>
  );
};

export default GatewayTile;
