import { motion, useInView, useMotionValue, useTransform, animate, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";


interface Props {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({ value, suffix = "" }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplayValue(latest);
  });

 useEffect(() => {
  if (!inView) return;

  const controls = animate(count, value, {
    duration: 2,
    ease: [0.16, 1, 0.3, 1],
  });

  return controls.stop;
}, [inView, value, count]);


  return (
    <motion.span ref={ref}>
      {displayValue}
      {suffix}
    </motion.span>
  );
}
