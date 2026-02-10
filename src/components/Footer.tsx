import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h3 className="text-base font-semibold text-foreground">Paragon Group</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              A focused investment group with three distinct mandates.
            </p>
          </div>

          <nav className="flex gap-8">
            <Link to="/parequity" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ParEquity
            </Link>
            <Link to="/anthuri-fund" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Anthuri Fund
            </Link>
            <Link to="/parvest" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Parvest
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Paragon Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
