import type { ReactNode } from "react";

type SectionTitleProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ index, eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">
        {index} — {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-pretty text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function EmptyNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-2xl border border-dashed border-line bg-bg px-4 py-5 text-sm leading-relaxed text-muted">
      {children}
    </p>
  );
}
