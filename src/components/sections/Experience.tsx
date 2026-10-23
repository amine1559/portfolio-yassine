import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { content } from "@/data/portfolio";
import { panel } from "@/lib/styles";
import { cn, formatPeriod, hasText } from "@/lib/utils";

export function Experience() {
  const experience = content.experience;
  const showNotice = experience.items.some((item) => !item.validated);

  return (
    <section id="experiences" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          index={experience.index}
          eyebrow={experience.eyebrow}
          title={experience.title}
          description={experience.description}
        />
        {showNotice ? (
          <div className="mt-8 max-w-3xl rounded-2xl border border-line bg-bg px-5 py-4">
            <p className="font-semibold text-text">{experience.noticeTitle}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted">{experience.notice}</p>
          </div>
        ) : null}

        <ol className="relative mt-12 space-y-8 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-line">
          {experience.items.map((item, index) => {
            const period = formatPeriod(item.startDate, item.endDate);
            return (
              <li key={item.title} className="relative pl-10">
                <span className="absolute left-0 top-7 h-4 w-4 rounded-full border-4 border-surface bg-violet" />
                <Reveal delay={index * 0.06}>
                  <article className={cn(panel, "p-6 md:p-8")}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">
                        {item.status}
                      </span>
                      {!item.validated ? (
                        <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-text">
                          {experience.exampleBadge}
                        </span>
                      ) : null}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-text md:text-2xl">{item.title}</h3>
                    <dl className="mt-3 space-y-1 text-sm text-muted">
                      {hasText(item.company) ? (
                        <div>
                          <dt className="sr-only">Structure</dt>
                          <dd>{item.company}</dd>
                        </div>
                      ) : null}
                      {hasText(period) ? (
                        <div>
                          <dt className="sr-only">Période</dt>
                          <dd>{period}</dd>
                        </div>
                      ) : null}
                      {hasText(item.location) ? (
                        <div>
                          <dt className="sr-only">Lieu</dt>
                          <dd>{item.location}</dd>
                        </div>
                      ) : null}
                    </dl>
                    <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-text">
                      {experience.missionsLabel}
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                      {item.missions.map((mission) => (
                        <li key={mission} className="flex gap-3">
                          <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                    {item.results.length > 0 ? (
                      <>
                        <h4 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-text">
                          {experience.resultsLabel}
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                          {item.results.map((result) => (
                            <li key={result}>{result}</li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
