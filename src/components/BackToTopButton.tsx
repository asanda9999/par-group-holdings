import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

interface BackToTopButtonProps {
  targetId?: string;
}

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

const BackToTopButton = ({ targetId = "contact" }: BackToTopButtonProps) => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  const scrollBehavior = useMemo<ScrollBehavior>(
    () => (prefersReducedMotion() ? "auto" : "smooth"),
    []
  );

  useEffect(() => {
    let cancelled = false;
    let observer: IntersectionObserver | null = null;

    const cleanup = () => {
      observer?.disconnect();
      observer = null;
    };

    const attach = (el: HTMLElement) => {
      cleanup();
      observer = new IntersectionObserver(
        (entries) => {
          if (cancelled) return;
          const entry = entries[0];
          setShow(Boolean(entry?.isIntersecting));
        },
        {
          root: null,
          threshold: 0.15,
        }
      );
      observer.observe(el);
    };

    let attempts = 0;
    const tryAttach = () => {
      if (cancelled) return;

      const el = document.getElementById(targetId);
      if (el) {
        attach(el);
        return;
      }

      attempts += 1;
      if (attempts < 90) {
        requestAnimationFrame(tryAttach);
      } else {
        setShow(false);
      }
    };

    setShow(false);
    tryAttach();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [location.pathname, location.search, location.hash, targetId]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Back to top"
          title="Back to top"
          className="fixed bottom-6 right-6 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full
                     bg-slate-900 text-white shadow-lg shadow-black/10
                     ring-1 ring-white/10
                     transition-colors hover:bg-slate-800
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;

