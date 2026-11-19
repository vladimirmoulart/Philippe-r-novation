import Image from "next/image";
import type { ReactNode } from "react";
import { FilAriane, type ElementFilAriane } from "@/components/navigation/fil-ariane";

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
    <section className="relative isolate overflow-hidden px-4 py-10 text-ink-inverse sm:px-6 sm:py-14 lg:px-8">
      <Image
        src="/images/accueil/couvreur-pose-tuiles-hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-surface-dark/85" aria-hidden="true" />

      <div className="mx-auto max-w-content">
        <FilAriane inverse elements={filAriane} />
        <div className={`mt-8 grid gap-7 ${aside ? "lg:grid-cols-[1.2fr_0.8fr] lg:items-end" : ""}`}>
          <div className="max-w-3xl">
            {surtitre && <p className="mb-2 text-sm font-extrabold text-brand">{surtitre}</p>}
            <h1 className="mb-5 text-[clamp(2.125rem,1.55rem+2.1vw,3.5rem)] tracking-[-0.035em]">{titre}</h1>
            {description && <div className="max-w-2xl text-lg text-ink-inverse/80">{description}</div>}
          </div>
          {aside}
        </div>
      </div>
    </section>
  );
}
