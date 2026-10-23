"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { content } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={content.a11y.backToTop}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })}
      className={cn(
        "fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-night text-white shadow-lg transition dark:bg-white dark:text-night",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <Icon name="arrowUp" className="h-5 w-5" />
    </button>
  );
}
