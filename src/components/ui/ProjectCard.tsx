import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { SmartImage } from "@/components/ui/SmartImage";
import { content } from "@/data/portfolio";
import { panel } from "@/lib/styles";
import { cn, hasText } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types/portfolio";

const posters: Record<ProjectCategory, string> = {
  "Communication Digitale": "linear-gradient(145deg, #0f172a 0%, #7c3aed 100%)",
  "Facebook Ads": "linear-gradient(145deg, #1e3a8a 0%, #6d28d9 100%)",
  "Instagram Ads": "linear-gradient(145deg, #5b21b6 0%, #c2410c 100%)",
  "Community Management": "linear-gradient(145deg, #0f172a 0%, #2563eb 100%)",
  "Création Graphique": "linear-gradient(145deg, #4c1d95 0%, #2563eb 100%)",
  "E-commerce": "linear-gradient(145deg, #0f172a 0%, #c2410c 100%)",
};

export function ProjectPoster({ project }: { project: Project }) {
  return (
    <div className="absolute inset-0" style={{ backgroundImage: posters[project.category] }}>
      <div className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white">
        {project.category}
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-5">
        <p className="text-xl font-semibold leading-tight text-white">{project.title}</p>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const copy = content.projects;

  return (
    <article className={cn(panel, "lift flex h-full flex-col overflow-hidden")}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <SmartImage
          src={project.cover}
          alt={hasText(project.cover) ? project.title : ""}
          sizes="(min-width: 1024px) 360px, 100vw"
          className="object-cover"
          fallback={<ProjectPoster project={project} />}
        />
        {project.conceptual ? (
          <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-night">
            {copy.conceptualBadge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-violet">{project.category}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-text">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label={copy.toolsLabel}>
          {project.tools.map((tool) => (
            <li key={tool} className="rounded-full bg-bg px-3 py-1 text-xs font-medium text-muted">
              {tool}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          <span className="font-semibold text-text">{copy.objectiveLabel}. </span>
          {project.objective}
        </p>
        <Link
          href={`/projets/${project.slug}`}
          className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text"
        >
          {copy.view}
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
