import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const gatewayLinks = [
  { label: "ParEquity", path: "/parequity" },
  { label: "Anthuri Fund", path: "/anthuri-fund" },
  { label: "Parvest", path: "/parvest" },
];

const divisionLinks = [
  { label: "Home", path: "#", isScrollTop: true },
  { label: "About", path: "#about" },
  { label: "Contact", path: "#contact" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDivisionPage = ["/parequity", "/anthuri-fund", "/parvest"].includes(location.pathname);
  const navLinks = isDivisionPage ? divisionLinks : gatewayLinks;

  const handleNavClick = (link: typeof divisionLinks[0], e: React.MouseEvent) => {
    if ("isScrollTop" in link && link.isScrollTop) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-foreground">
          Paragon Group
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            isDivisionPage ? (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(link as any, e)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navLinks.map((link) =>
            isDivisionPage ? (
              <a
                key={link.label}
                href={link.path}
                onClick={(e) => handleNavClick(link as any, e)}
                className="block text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
