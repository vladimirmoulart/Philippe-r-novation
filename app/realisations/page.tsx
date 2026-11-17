import type { Metadata } from "next";
import Image from "next/image";
import { BlocAppel } from "@/components/blocs/bloc-appel";
import { HeroInterne } from "@/components/pages/hero-interne";
import { Carte } from "@/components/ui/carte";
import { Section } from "@/components/ui/section";
import { realisations } from "@/content/realisations";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Découvrez les chantiers de toiture, façade et peinture réalisés par Philippe Rénovation autour de Rochegude.",
};

const informations = [
  { numero: "01", titre: "Le besoin", texte: "Le contexte du chantier et le problème constaté avant l’intervention." },
  { numero: "02", titre: "Les travaux", texte: "Les opérations réellement effectuées, sans promesse ni information générique." },
  { numero: "03", titre: "Le chantier", texte: "La commune, la date et des photographies dont la publication a été autorisée." },
] as const;

export default function Realisations() {
  return (
    <>
      <HeroInterne
        titre="Nos réalisations autour de Rochegude"
        surtitre="Chantiers réalisés"
        description="Des exemples documentés pour comprendre le besoin, les travaux effectués et le résultat de chaque intervention."
        filAriane={[{ label: "Réalisations" }]}
      />

      <Section>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-extrabold text-brand">Galerie de chantiers</p>
          <h2 className="mb-4">Des réalisations vérifiées, pas des images de catalogue</h2>
          <p className="text-lg text-ink-muted">Chaque réalisation sera publiée uniquement après confirmation du chantier, de sa localisation et des droits sur les photographies.</p>
        </div>

        {realisations.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {realisations.map((realisation) => (
              <article key={realisation.slug} className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
                <div className="aspect-[4/3] overflow-hidden bg-surface-muted">
                  <Image src={realisation.photo.src} alt={realisation.photo.alt} width={realisation.photo.largeur} height={realisation.photo.hauteur} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-bold text-ink-muted"><span>{realisation.categorie}</span><span aria-hidden="true">·</span><span>{realisation.ville}</span></div>
                  <h2 className="mb-3 text-[var(--font-size-h3)]">{realisation.titre}</h2>
                  <p className="text-ink-muted">{realisation.resume}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="grid overflow-hidden rounded-card border border-border bg-surface-muted lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid min-h-72 place-items-center border-b border-border p-8 lg:border-b-0 lg:border-r">
              <div className="relative h-36 w-44" aria-hidden="true">
                <div className="absolute inset-x-0 bottom-0 h-24 rounded-card border-2 border-border bg-surface" />
                <div className="absolute left-7 top-5 h-24 w-32 -rotate-12 rounded-card border-2 border-brand bg-brand-subtle" />
                <div className="absolute bottom-5 left-1/2 h-12 w-8 -translate-x-1/2 rounded-t-button bg-surface-dark" />
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="mb-3 text-sm font-extrabold text-brand">Sélection en préparation</p>
              <h2 className="mb-4 text-[var(--font-size-h3)]">Les photographies de chantier sont en cours de validation</h2>
              <p className="max-w-xl text-ink-muted">Aucune image de banque ne sera présentée comme une réalisation. Les premiers chantiers seront ajoutés dès que leurs photos, leur ville, leur date et leur description auront été confirmées.</p>
            </div>
          </div>
        )}
      </Section>

      <Section className="bg-surface-muted">
        <div className="mb-10 max-w-2xl"><p className="mb-3 text-sm font-extrabold text-brand">Une information utile</p><h2>Chaque réalisation sera documentée</h2></div>
        <div className="grid gap-5 md:grid-cols-3">
          {informations.map((information) => (
            <Carte key={information.numero} className="min-h-60">
              <span className="mb-8 block font-display text-sm font-extrabold text-brand">{information.numero}</span>
              <h3 className="mb-4">{information.titre}</h3>
              <p className="text-ink-muted">{information.texte}</p>
            </Carte>
          ))}
        </div>
      </Section>
      <BlocAppel />
    </>
  );
}
