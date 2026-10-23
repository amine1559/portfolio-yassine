"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { content } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types/portfolio";

export function Projects() {
  const projects = content.projects;
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const categories = projects.categories.filter((category) =>
    projects.items.some((project) => project.categories.includes(category)),
  );

  const visible = projects.items.filter(
    (project) => filter === "all" || project.categories.includes(filter),
  );

  const countLabel = `${visible.length} ${visible.length > 1 ? projects.countPlural : projects.countSingular}`;

  return (
    <section id="projets" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          index={projects.index}
          eyebrow={projects.eyebrow}
          title={projects.title}
          description={projects.description}
        />
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-2" role="group" aria-label={projects.filterLabel}>
            <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>
              {projects.all}
            </FilterButton>
            {categories.map((category) => (
              <FilterButton key={category} active={filter === category} onClick={() => setFilter(category)}>
                {category}
              </FilterButton>
            ))}
          </div>
          <p className="text-sm font-medium text-muted" aria-live="polite">
            {countLabel}
          </p>
        </div>

        {visible.length > 0 ? (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {visible.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="mt-8 rounded-2xl border border-dashed border-line px-4 py-8 text-sm text-muted">
            {projects.empty}
          </p>
        )}
      </div>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "min-h-11 rounded-full border px-4 text-sm font-semibold transition",
        active ? "border-night bg-night text-white dark:border-white dark:bg-white dark:text-night" : "border-line bg-surface text-text",
      )}
    >
      {children}
    </button>
  );
}
