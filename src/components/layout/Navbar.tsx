"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Icon } from "@/components/ui/Icon";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { content } from "@/data/portfolio";
import { primaryButton, secondaryButton } from "@/lib/styles";
import { cn } from "@/lib/utils";

function hashHref(hash: string) {
  return `/${hash}`;
}

function CvAction({ className }: { className?: string }) {
  if (content.cv.available) {
    return (
      <a href={content.cv.href} download className={cn(primaryButton, className)}>
        <Icon name="download" className="h-4 w-4" />
        {content.cv.label}
      </a>
    );
  }

  return (
    <span className={cn(secondaryButton, "cursor-default", className)} aria-disabled="true">
      <Icon name="download" className="h-4 w-4" />
      {content.cv.unavailableLabel}
    </span>
  );
}

export function Navbar() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = content.nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const menu = (
    <ul className="flex flex-col gap-1">
      {content.nav.map((item) => {
        const id = item.href.slice(1);
        const current = active === id;
        return (
          <li key={item.href}>
            <Link
              href={hashHref(item.href)}
              aria-current={current ? "location" : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                "flex min-h-11 items-center rounded-2xl px-3 text-base font-medium",
                current ? "bg-violet/10 text-violet" : "text-text",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-[90rem] items-center justify-between gap-3 px-5 md:px-8">
        <Link href="/#accueil" className="flex min-w-0 items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-night text-sm font-bold text-white dark:bg-white dark:text-night">
            {content.profile.initials}
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-semibold text-text">{content.profile.fullName}</span>
            <span className="hidden truncate text-xs text-muted 2xl:block">Communication digitale</span>
          </span>
        </Link>

        <nav aria-label={content.navLabel} className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {content.nav.map((item) => {
              const id = item.href.slice(1);
              const current = active === id;
              return (
                <li key={item.href}>
                  <Link
                    href={hashHref(item.href)}
                    aria-current={current ? "location" : undefined}
                    className={cn(
                      "inline-flex min-h-10 items-center whitespace-nowrap rounded-full px-2.5 text-sm font-medium xl:px-3",
                      current ? "bg-violet/10 text-violet" : "text-muted hover:text-text",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <CvAction />
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface xl:hidden"
            aria-expanded={open}
            aria-controls="navigation-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? content.a11y.menuClose : content.a11y.menuOpen}</span>
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open ? (
        <motion.div
          id="navigation-mobile"
          className="border-t border-line bg-bg xl:hidden"
          initial={{ opacity: 1, y: reduce ? 0 : -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
        >
          <div className="container-page max-h-[calc(100vh-5rem)] overflow-y-auto py-4">
            <nav aria-label={content.navLabel}>{menu}</nav>
            <div className="mt-4 md:hidden">
              <CvAction className="w-full" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}
