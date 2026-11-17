import type { Metadata } from "next";
import { FormulaireRappelCourt } from "@/components/formulaires/formulaire-rappel-court";
import { FilAriane } from "@/components/navigation/fil-ariane";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = { title: "Être rappelé", description: "Indiquez le créneau auquel vous souhaitez être rappelé par Philippe Rénovation." };

export default function EtreRappele() {
  return <Section as="div"><FilAriane elements={[{ label: "Être rappelé" }]} /><div className="mt-10 max-w-xl"><h1 className="mb-5">Être rappelé</h1><p className="mb-8 text-ink-muted">Le formulaire sera activé en phase 5.</p><FormulaireRappelCourt /></div></Section>;
}
