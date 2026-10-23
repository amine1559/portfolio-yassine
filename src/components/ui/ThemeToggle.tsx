"use client";

import { useEffect } from "react";
import { Icon } from "@/components/ui/Icon";
import { content } from "@/data/portfolio";
import { THEME_STORAGE_KEY } from "@/lib/theme";

function toggleTheme() {
  const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
  document.documentElement.classList.toggle("dark", next === "dark");
  localStorage.setItem(THEME_STORAGE_KEY, next);
}

export function ThemeToggle() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return;
      document.documentElement.classList.toggle("dark", media.matches);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={content.a11y.themeToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-text transition hover:border-violet/40"
    >
      <Icon name="moon" className="h-5 w-5 dark:hidden" />
      <Icon name="sun" className="hidden h-5 w-5 dark:inline" />
    </button>
  );
}
