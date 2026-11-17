import type { ReactNode } from "react";
import { FilAriane, type ElementFilAriane } from "@/components/navigation/fil-ariane";
import { Section } from "@/components/ui/section";

export function HeroInterne({
  titre,
  surtitre,
  description,
  filAriane,
  aside,
}: {
  titre: string;
  surtitre?: string;
  description?: ReactNode;
  filAriane: ElementFilAriane[];
  aside?: ReactNode;
}) {
  return (
    <Section className="bg-surface-dark text-ink-inverse !py-10 sm:!py-14">
      <FilAriane inverse elements={filAriane} />
      <div className={`mt-8 grid gap-7 ${aside ? "lg:grid-cols-[1.2fr_0.8fr] lg:items-end" : ""}`}>
        <div className="max-w-3xl">
          {surtitre && <p className="mb-2 text-sm font-extrabold text-brand">{surtitre}</p>}
          <h1 className="mb-5 text-[clamp(2.125rem,1.55rem+2.1vw,3.5rem)] tracking-[-0.035em]">{titre}</h1>
          {description && <div className="max-w-2xl text-lg text-ink-inverse/75">{description}</div>}
        </div>
        {aside}
      </div>
    </Section>
  );
}
