import type { Metadata } from "next";
import { FormulaireDevis } from "@/components/formulaires/formulaire-devis";
import { FilAriane } from "@/components/navigation/fil-ariane";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = { title: "Demande de devis", description: "Décrivez votre projet de toiture, façade ou peinture à Philippe Rénovation." };

export default function DemandeDeDevis() {
  return <Section as="div"><FilAriane elements={[{ label: "Demande de devis" }]} /><div className="mt-10 max-w-3xl"><h1 className="mb-5">Demande de devis</h1><p className="mb-8 text-ink-muted">Présentez votre besoin. Aucun envoi n’est encore effectué pendant cette phase de construction.</p><FormulaireDevis /></div></Section>;
}
