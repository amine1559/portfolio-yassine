import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { EmptyNote, SectionTitle } from "@/components/ui/SectionTitle";
import { content } from "@/data/portfolio";
import { panel } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function Skills() {
  const skills = content.skills;

  return (
    <section id="competences" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          index={skills.index}
          eyebrow={skills.eyebrow}
          title={skills.title}
          description={skills.description}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.items.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 0.05}>
              <article className={cn(panel, "lift h-full p-6")}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/10 text-electric">
                  <Icon name={skill.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-text">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{skill.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-semibold text-text">{skills.toolsTitle}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{skills.toolsDescription}</p>
          {skills.tools.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-3">
              {skills.tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-text"
                >
                  {tool}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-6">
              <EmptyNote>{skills.toolsEmpty}</EmptyNote>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
