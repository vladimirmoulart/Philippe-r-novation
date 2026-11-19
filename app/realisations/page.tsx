import type { Metadata } from "next";
import { BlocAppel } from "@/components/blocs/bloc-appel";
import { HeroInterne } from "@/components/pages/hero-interne";
import { GalerieRealisations } from "@/components/realisations/galerie-realisations";
import { Carte } from "@/components/ui/carte";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Réalisations",
  description: "Découvrez les chantiers de toiture, façade et peinture réalisés par Philippe Rénovation autour de Rochegude.",
};

const informations = [
  { numero: "01", titre: "Le besoin", texte: "Le contexte du chantier et le problème constaté avant l’intervention." },
  { numero: "02", titre: "Les travaux", texte: "Les opérations réellement effectuées, sans promesse ni information générique." },
  { numero: "03", titre: "Le chantier", texte: "La commune et des photographies dont la publication a été autorisée." },
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
          <p className="text-lg text-ink-muted">Découvrez une sélection de travaux de toiture et de façade réalisés dans les communes voisines de Rochegude.</p>
        </div>

        <GalerieRealisations />
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
