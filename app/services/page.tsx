import type { Metadata } from "next";
import Link from "next/link";
import { universServices, getServicesParUnivers } from "@/content/services";
import { FilAriane } from "@/components/navigation/fil-ariane";
import { Section } from "@/components/ui/section";
import { Carte } from "@/components/ui/carte";

export const metadata: Metadata = { title: "Services", description: "Découvrez les services de toiture, gouttière, zinguerie, façade et peinture proposés par Philippe Rénovation." };

export default function Services() {
  return (
    <Section as="div">
      <FilAriane elements={[{ label: "Services" }]} />
      <div className="mb-12 mt-10 max-w-3xl">
        <h1 className="mb-5">Nos services</h1>
        <p className="text-lg text-ink-muted">Quatre thèmes rassemblent l’ensemble des métiers de Philippe Rénovation.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {universServices.map((univers, index) => (
          <Carte key={univers.slug} className="group flex min-h-72 flex-col">
            <div className="mb-8 flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-subtle font-display text-sm font-extrabold text-brand">0{index + 1}</span>
            </div>
            <h2 className="mb-4">{univers.titre}</h2>
            <p className="mb-6 text-ink-muted">{univers.resume}</p>
            <p className="mb-6 text-sm font-bold text-ink-muted">{getServicesParUnivers(univers.slug).length} métiers présentés sur cette page</p>
            <Link href={`/services/${univers.slug}`} className="mt-auto font-bold text-brand underline-offset-4 hover:underline">Découvrir le thème</Link>
          </Carte>
        ))}
      </div>
    </Section>
  );
}
