import type { Metadata } from "next";
import { BlocAppel } from "@/components/blocs/bloc-appel";
import { CarrouselAvis } from "@/components/avis/carrousel-avis";
import { HeroInterne } from "@/components/pages/hero-interne";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Avis clients",
  description: "Consultez les avis de clients de Philippe Rénovation pour des travaux de toiture, façade et peinture.",
};

export default function PageAvis() {
  return (
    <>
      <HeroInterne
        titre="Avis clients"
        surtitre="Retours d’expérience"
        description="Des retours concrets sur des interventions de toiture, de façade et de peinture."
        filAriane={[{ label: "Avis clients" }]}
        aside={(
          <div className="relative overflow-hidden rounded-card border border-ink-inverse/15 bg-ink-inverse p-6 text-ink shadow-raised sm:p-8">
            <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-brand-subtle" aria-hidden="true" />
            <div className="relative">
              <div className="flex items-end gap-3">
                <strong className="font-display text-5xl font-extrabold leading-none text-brand">5/5</strong>
                <span className="pb-1 text-sm font-bold text-ink-muted">note moyenne</span>
              </div>
              <div className="mt-4 flex gap-1 text-2xl leading-none text-rating" aria-hidden="true">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="sr-only">Cinq étoiles sur cinq</span>
              <p className="mt-4 font-bold">10 avis clients inventoriés</p>
            </div>
          </div>
        )}
      />

      <Section className="bg-surface-muted">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-extrabold text-brand">Paroles de clients</p>
          <h2 className="mb-4">Des expériences partagées après les travaux</h2>
          <p className="text-lg text-ink-muted">Rapidité d’intervention, qualité du travail et clarté des explications reviennent régulièrement dans ces témoignages.</p>
        </div>

        <CarrouselAvis />
      </Section>

      <BlocAppel />
    </>
  );
}
