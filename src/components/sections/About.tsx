import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { content } from "@/data/portfolio";
import { panel } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function About() {
  const about = content.about;

  return (
    <section id="a-propos" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          index={about.index}
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.description}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <blockquote className="max-w-2xl">
              <p className="text-xl leading-relaxed text-pretty text-text md:text-2xl">{content.profile.bio}</p>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{content.profile.aboutLead}</p>
            </blockquote>
          </Reveal>
          <div className="grid gap-4">
            {about.cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className={cn(panel, "lift p-6")}>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet/10 text-violet">
                    <Icon name={card.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
