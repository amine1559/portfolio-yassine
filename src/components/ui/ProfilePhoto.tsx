import { SmartImage } from "@/components/ui/SmartImage";
import { content } from "@/data/portfolio";

export function ProfilePhoto() {
  const { photo, photoAlt, initials } = content.profile;

  return (
    <div className="relative aspect-[3/4] overflow-hidden bg-night">
      <SmartImage
        src={photo}
        alt={photoAlt}
        priority
        sizes="(min-width: 1024px) 420px, 88vw"
        className="object-cover object-center"
        fallback={
          <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-night via-[#4c1d95] to-electric px-6 text-center text-white">
            <span className="text-6xl font-semibold tracking-tight">{initials}</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/85">{content.hero.photoHint}</p>
          </div>
        }
      />
    </div>
  );
}
