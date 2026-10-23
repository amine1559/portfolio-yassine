import Link from "next/link";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { content } from "@/data/portfolio";

function hashHref(hash: string) {
  return `/${hash}`;
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr] md:py-16">
        <div>
          <p className="text-lg font-semibold text-text">{content.profile.fullName}</p>
          <p className="mt-1 text-sm text-muted">{content.profile.title}</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{content.footer.text}</p>
          <p className="mt-4 text-sm text-muted">{content.profile.location}</p>
          <SocialLinks links={content.profile.socials} className="mt-6 flex flex-wrap gap-2" />
        </div>
        <nav aria-label={content.navLabel}>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {content.nav.map((item) => (
              <li key={item.href}>
                <Link href={hashHref(item.href)} className="inline-flex min-h-11 items-center text-muted hover:text-text">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/#services" className="inline-flex min-h-11 items-center text-muted hover:text-text">
                {content.services.navLabel}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {content.footer.year} {content.profile.fullName}. {content.footer.rights}
          </p>
          <Link href="/#accueil" className="font-medium text-text">
            {content.profile.firstName}
          </Link>
        </div>
      </div>
    </footer>
  );
}
