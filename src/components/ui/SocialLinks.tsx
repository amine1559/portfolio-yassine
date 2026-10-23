import type { SocialLink } from "@/types/portfolio";
import { content } from "@/data/portfolio";
import { hasText } from "@/lib/utils";

export function SocialLinks({ links, className }: { links: SocialLink[]; className?: string }) {
  const visible = links.filter((link) => hasText(link.href));
  if (visible.length === 0) return null;

  return (
    <ul className={className}>
      {visible.map((link) => (
        <li key={link.platform}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer noopener me"
            className="inline-flex min-h-11 items-center rounded-full border border-line bg-surface px-4 text-sm font-semibold text-text transition hover:border-violet/50"
          >
            {link.label}
            <span className="sr-only"> ({content.a11y.newTab})</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
