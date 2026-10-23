import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { content } from "@/data/portfolio";
import { panel } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function Services() {
  const services = content.services;

  return (
    <section id="services" className="scroll-mt-24 bg-surface py-20 md:py-28">
      <div className="container-page">
        <SectionTitle
          index={services.index}
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.items.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className={cn(panel, "lift group h-full p-6")}>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-night text-white transition group-hover:bg-violet dark:bg-white dark:text-night dark:group-hover:bg-violet dark:group-hover:text-white">
                  <Icon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-text">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
