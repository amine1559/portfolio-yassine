import Link from "next/link";
import { content } from "@/data/portfolio";
import { primaryButton } from "@/lib/styles";

export default function NotFound() {
  return (
    <main id="contenu" tabIndex={-1} className="container-page flex min-h-[70vh] flex-col justify-center py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet">{content.notFound.code}</p>
      <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-text md:text-6xl">
        {content.notFound.title}
      </h1>
      <p className="mt-4 max-w-lg text-lg text-muted">{content.notFound.description}</p>
      <Link href="/" className={`${primaryButton} mt-8 w-fit`}>
        {content.notFound.cta}
      </Link>
    </main>
  );
}
