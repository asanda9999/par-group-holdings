import { Link, useLocation } from "react-router-dom";
import parLogo from "@/assets/OG-Logo.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedNavLink from "./AnimatedNavLink";

// Division navigation (takes you to each division page)
const divisionLinks = [
  { label: "ParEquity", path: "/parequity" },
  { label: "Anthuri", path: "/anthuri-fund" },
  { label: "ParVest", path: "/parvest" },
  
  
];

// In-division content navigation (scrolls within the current page)
const contentLinks = [
  
  { label: "ABOUT", id: "about" as const },
  { label: "PORTFOLIO", id: "portfolio" as const },
  { label: "TEAM", id: "team" as const },
  { label: "CONTACT", id: "contact" as const },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  const isGatewayPage = location.pathname === "/";
  const isGroupDetailsPage = location.pathname === "/group-details";

  const handleScrollTo = (id: "top" | "about" | "portfolio" | "team" | "contact") => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const isDetailPage = pathParts[1] === "portfolio" || pathParts[1] === "team";
    
    if (isDetailPage) {
      const divisionPath = `/${pathParts[0]}`; // /parequity, /anthuri-fund, /parvest
      window.location.href = id === "top" ? divisionPath : `${divisionPath}#${id}`;
      return;
    }

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const offset = window.scrollY + rect.top - 80; // account for header height
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <header className="relative top-0 left-0 right-0 z-50">
      {/* Top bar: divisions */}
      <div className="w-full bg-slate-900 text-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-center md:justify-start gap-6 text-[10px] md:text-xs tracking-[0.2em]">
          {divisionLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <AnimatedNavLink
                key={link.path}
                to={link.path}
                lineColor="#ffffff"
                activeColor="#ffffff"
                isActive={isActive}
                className={`${isActive ? "text-white" : "text-slate-100 hover:text-white"}`}
              >
                {link.label}
              </AnimatedNavLink>
            );
          })}
        </div>
      </div>

      {/* Main bar: centered logo + right content nav - hidden on mobile */}
      <div className="hidden md:block bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 md:h-32 flex items-center">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full">
            {/* Left spacer on desktop (keeps logo truly centered) */}
            <div className="hidden md:block" />

            {/* Centered logo - hidden on mobile */}
            <div className="hidden md:flex items-center justify-center">
              <Link to="/group-details" className="flex items-center justify-center">
                <img
                  src={parLogo}
                  alt="Par Group Holdings"
                  className="h-20 md:h-32 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>

            {/* Right: Desktop content nav */}
            {!isGroupDetailsPage && (
              <motion.nav
                className="hidden md:flex items-center justify-end gap-8 text-xs tracking-[0.35em] uppercase"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {contentLinks.map((link) => (
                  <AnimatedNavLink
                    key={link.label}
                    onClick={() => handleScrollTo(link.id)}
                    lineColor="#000000"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </AnimatedNavLink>
                ))}
              </motion.nav>
            )}

            {/* Mobile menu toggle (right side) - hidden on mobile */}
            <div className="hidden items-center justify-end">
              <motion.button
                className="text-foreground"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ rotate: mobileOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile nav: divisions + content links together */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              className="md:hidden border-t border-border px-6 py-4 space-y-4 bg-background"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="space-y-2">
                {divisionLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: index * 0.05,
                    }}
                  >
                    <AnimatedNavLink
                      to={link.path}
                      lineColor="#ffffff"
                      activeColor="#ffffff"
                      isActive={location.pathname.startsWith(link.path)}
                      className={`block text-sm font-medium ${
                        location.pathname.startsWith(link.path)
                          ? "text-white"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.label}
                    </AnimatedNavLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-2 border-t border-border pt-3 space-y-2">
                {!isGroupDetailsPage && contentLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: 0.15 + index * 0.05,
                    }}
                    whileHover={{ x: 4 }}
                  >
                    <AnimatedNavLink
                      onClick={() => {
                        handleScrollTo(link.id);
                        setMobileOpen(false);
                      }}
                      lineColor="#000000"
                      className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </AnimatedNavLink>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
