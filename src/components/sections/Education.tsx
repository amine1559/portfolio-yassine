import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { content } from "@/data/portfolio";
import { panel } from "@/lib/styles";
import { cn, hasText } from "@/lib/utils";

export function Education() {
  const education = content.education;

  return (
    <section id="formation" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          index={education.index}
          eyebrow={education.eyebrow}
          title={education.title}
          description={education.description}
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {education.items.map((item, index) => (
            <Reveal key={item.degree} delay={index * 0.08}>
              <article className={cn(panel, "h-full p-6 md:p-8")}>
                <div className="flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet/10 text-violet">
                    <Icon name="graduation" className="h-5 w-5" />
                  </div>
                  {hasText(item.year) ? (
                    <p className="rounded-full bg-bg px-3 py-1 text-sm font-semibold text-text">{item.year}</p>
                  ) : null}
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-text">{item.degree}</h3>
                <p className="mt-2 font-medium text-text">{item.school}</p>
                {hasText(item.university) ? <p className="mt-1 text-sm text-muted">{item.university}</p> : null}
                <p className="mt-1 text-sm text-muted">{item.city}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
