import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { ProjectPoster } from "@/components/ui/ProjectCard";
import { SmartImage } from "@/components/ui/SmartImage";
import { content } from "@/data/portfolio";
import { panel } from "@/lib/styles";
import { cn, hasText } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function findProject(slug: string) {
  return content.projects.items.find((item) => item.slug === slug);
}

export function generateStaticParams() {
  return content.projects.items.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: content.notFound.title };

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projets/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      locale: "fr_MA",
      url: `/projets/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const copy = content.projects;
  const gallery = project.gallery.filter((image) => hasText(image.src));
  const sections = [
    { id: "contexte", label: copy.sections.context },
    { id: "problematique", label: copy.sections.problem },
    { id: "objectifs", label: copy.sections.objectives },
    { id: "public", label: copy.sections.audience },
    { id: "strategie", label: copy.sections.strategy },
    { id: "creations", label: copy.sections.visuals },
    { id: "methodologie", label: copy.sections.methodology },
    { id: "resultats", label: copy.sections.results },
  ];

  return (
    <main id="contenu" tabIndex={-1} className="pb-24 pt-28">
      <article className="container-page">
        <Link href="/#projets" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-text">
          <Icon name="arrowLeft" className="h-4 w-4" />
          {copy.back}
        </Link>

        <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-[1.75rem] border border-line">
          <SmartImage
            src={project.cover}
            alt={hasText(project.cover) ? project.title : ""}
            sizes="(min-width: 1024px) 1100px, 100vw"
            priority
            className="object-cover"
            fallback={<ProjectPoster project={project} />}
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {project.conceptual ? (
            <span className="rounded-full bg-violet px-3 py-1 text-xs font-semibold text-white">
              {copy.conceptualBadge}
            </span>
          ) : null}
          <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-text">
            {project.category}
          </span>
        </div>

        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance text-text md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">{project.description}</p>

        {project.conceptual ? (
          <p className="mt-6 max-w-3xl rounded-2xl border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-muted">
            {copy.conceptualNotice}
          </p>
        ) : null}

        <dl className="mt-8 grid gap-4 md:grid-cols-2">
          <div className={cn(panel, "p-5")}>
            <dt className="text-sm font-semibold text-text">{copy.objectiveLabel}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{project.objective}</dd>
          </div>
          <div className={cn(panel, "p-5")}>
            <dt className="text-sm font-semibold text-text">{copy.toolsLabel}</dt>
            <dd>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li key={tool} className="rounded-full bg-bg px-3 py-1 text-xs font-medium text-muted">
                    {tool}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="mt-12 grid gap-10 lg:grid-cols-[220px_1fr]">
          <nav aria-label={project.title} className="lg:sticky lg:top-28 lg:self-start">
            <ol className="space-y-2 text-sm">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="inline-flex min-h-10 items-center gap-2 text-muted hover:text-text">
                    <span className="font-semibold text-violet">{String(index + 1).padStart(2, "0")}</span>
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="space-y-12">
            <CaseBlock id="contexte" index="01" title={copy.sections.context}>
              <p>{project.context}</p>
            </CaseBlock>
            <CaseBlock id="problematique" index="02" title={copy.sections.problem}>
              <p>{project.problem}</p>
            </CaseBlock>
            <CaseBlock id="objectifs" index="03" title={copy.sections.objectives}>
              <ul className="space-y-2">
                {project.objectives.map((objective) => (
                  <li key={objective} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </CaseBlock>
            <CaseBlock id="public" index="04" title={copy.sections.audience}>
              <p>{project.audience}</p>
            </CaseBlock>
            <CaseBlock id="strategie" index="05" title={copy.sections.strategy}>
              <p>{project.strategy}</p>
            </CaseBlock>
            <CaseBlock id="creations" index="06" title={copy.sections.visuals}>
              <p>{project.visuals}</p>
              {gallery.length > 0 ? (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {gallery.map((image) => (
                    <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line">
                      <SmartImage
                        src={image.src}
                        alt={image.alt}
                        sizes="(min-width: 1024px) 380px, 100vw"
                        className="object-cover"
                        fallback={
                          <div className="flex h-full items-center justify-center bg-bg px-4 text-center text-sm text-muted">
                            {copy.galleryEmpty}
                          </div>
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 rounded-2xl border border-dashed border-line px-4 py-5 text-sm text-muted">
                  {copy.galleryEmpty}
                </p>
              )}
            </CaseBlock>
            <CaseBlock id="methodologie" index="07" title={copy.sections.methodology}>
              <ol className="space-y-3">
                {project.methodology.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-semibold text-violet">{String(index + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </CaseBlock>
            <CaseBlock id="resultats" index="08" title={copy.sections.results}>
              {project.results.length > 0 ? (
                <ul className="space-y-2">
                  {project.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              ) : (
                <p>{copy.resultsEmpty}</p>
              )}
            </CaseBlock>
          </div>
        </div>
      </article>
    </main>
  );
}

function CaseBlock({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <p className="eyebrow">
        {index} — {title}
      </p>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-muted">{children}</div>
    </section>
  );
}
