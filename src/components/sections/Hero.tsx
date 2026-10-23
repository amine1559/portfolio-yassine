import Link from "next/link";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { ProfilePhoto } from "@/components/ui/ProfilePhoto";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { content } from "@/data/portfolio";
import { primaryButton, secondaryButton } from "@/lib/styles";

export function Hero() {
  const { profile, hero } = content;

  return (
    <section id="accueil" className="relative overflow-hidden">
      <FloatingShapes />
      <div className="container-page relative grid items-center gap-14 py-28 lg:min-h-[100svh] lg:grid-cols-[1.12fr_0.88fr] lg:py-32">
        <div>
          <p className="inline-flex rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold text-text">
            {profile.title}
          </p>
          <p className="mt-6 text-lg font-medium text-violet sm:text-xl">{hero.greeting}</p>
          <AnimatedText
            text={hero.title}
            className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-text sm:text-5xl lg:text-6xl"
          />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${hero.primaryHref}`} className={primaryButton}>
              {hero.primaryCta}
            </Link>
            <Link href={`/${hero.secondaryHref}`} className={secondaryButton}>
              {hero.secondaryCta}
            </Link>
          </div>
          <SocialLinks links={profile.socials} className="mt-8 flex flex-wrap gap-2" />
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet via-electric to-accent opacity-80 blur-[2px]"
          />
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/30 shadow-2xl">
            <ProfilePhoto />
          </div>
          <div className="absolute -left-2 bottom-8 rounded-2xl border border-line bg-surface/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{hero.basedLabel}</p>
            <p className="mt-1 font-semibold text-text">{profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
