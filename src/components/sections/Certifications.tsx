import { Icon } from "@/components/ui/Icon";
import { SmartImage } from "@/components/ui/SmartImage";
import { EmptyNote, SectionTitle } from "@/components/ui/SectionTitle";
import { content } from "@/data/portfolio";
import { assetPath } from "@/lib/site";
import { panel, secondaryButton } from "@/lib/styles";
import { cn, hasText } from "@/lib/utils";

export function Certifications() {
  const block = content.certifications;

  return (
    <section id="certifications" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <SectionTitle index={block.index} eyebrow={block.eyebrow} title={block.title} description={block.description} />
        <div className="mt-12 grid gap-6">
          {block.items.map((item) => (
            <article key={item.title} className={cn(panel, "grid gap-8 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr]")}>
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet/10 text-violet">
                  <Icon name="scroll" className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-semibold text-violet">{block.participationLabel}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-text">{item.title}</h3>
                <p className="mt-3 text-base font-medium text-text">{item.event}</p>
                <p className="mt-1 text-sm text-muted">{item.year}</p>
                {hasText(item.organizer) ? (
                  <p className="mt-3 text-sm text-muted">
                    <span className="font-semibold text-text">{block.organizerLabel}. </span>
                    {item.organizer}
                  </p>
                ) : null}
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{item.description}</p>
              </div>
              <div>
                {hasText(item.image) ? (
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line">
                      <SmartImage
                        src={item.image}
                        alt={item.title}
                        sizes="(min-width: 1024px) 380px, 100vw"
                        className="object-cover"
                        fallback={
                          <div className="flex h-full items-center justify-center bg-bg px-4 text-center text-sm text-muted">
                            {block.missing}
                          </div>
                        }
                      />
                    </div>
                    <a
                      href={assetPath(item.image)}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={cn(secondaryButton, "mt-4")}
                    >
                      {block.view}
                      <span className="sr-only"> ({content.a11y.newTab})</span>
                    </a>
                  </div>
                ) : (
                  <EmptyNote>{block.missing}</EmptyNote>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
