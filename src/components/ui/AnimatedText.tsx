"use client";

import { motion, useReducedMotion } from "motion/react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  as?: "h1" | "p";
};

export function AnimatedText({ text, className, as = "h1" }: AnimatedTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const Tag = as;

  return (
    <Tag className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial={{ opacity: 1, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 0.5,
            delay: reduce ? 0 : index * 0.045,
            ease: "easeOut",
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}
