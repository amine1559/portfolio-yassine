"use client";

import { motion, useReducedMotion } from "motion/react";

export function FloatingShapes() {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <motion.div
        className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-violet/25 blur-3xl"
        animate={reduce ? undefined : { y: [0, -16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-4rem] top-28 h-80 w-80 rounded-full bg-electric/20 blur-3xl"
        animate={reduce ? undefined : { y: [0, 18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-8 left-1/3 h-48 w-48 rounded-full bg-accent/25 blur-3xl"
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
