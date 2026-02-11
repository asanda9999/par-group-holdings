import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  duration = 0.6,
  y = 20
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion ? {
    initial: { opacity: 0 },
    animate: isInView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.3 }
  } : {
    initial: { opacity: 0, y },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y },
    transition: { 
      duration, 
      delay,
      ease: "easeOut" as const
    }
  };

  return (
    <motion.div
      ref={ref}
      {...motionProps}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggeredChildrenProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  childDelay?: number;
  duration?: number;
  y?: number;
}

export const StaggeredChildren = ({ 
  children, 
  className = "",
  staggerDelay = 0.1,
  childDelay = 0,
  duration = 0.5,
  y = 20
}: StaggeredChildrenProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion ? {
    initial: { opacity: 0 },
    animate: isInView ? { opacity: 1 } : { opacity: 0 },
    transition: { duration: 0.3 }
  } : {
    initial: { opacity: 0, y },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y },
    transition: { 
      duration, 
      delay: childDelay,
      ease: "easeOut" as const
    }
  };

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) 
        ? children.map((child, index) => {
            const finalDelay = shouldReduceMotion ? 0 : childDelay + (index * staggerDelay);
            return (
              <motion.div
                key={index}
                initial={motionProps.initial}
                animate={motionProps.animate}
                transition={{ 
                  ...motionProps.transition,
                  delay: finalDelay
                }}
              >
                {child}
              </motion.div>
            );
          })
        : children
      }
    </div>
  );
};
