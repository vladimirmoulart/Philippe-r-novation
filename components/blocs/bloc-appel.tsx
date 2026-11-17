import { entreprise } from "@/content/entreprise";
import { FormulaireRappelCourt } from "@/components/formulaires/formulaire-rappel-court";
import { LienTelephone } from "@/components/liens/lien-telephone";
import { Section } from "@/components/ui/section";

export function BlocAppel() {
  return (
    <Section className="bg-surface-muted">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="mb-3 font-bold text-brand">Un projet ou une fuite de toiture ?</p>
          <h2 className="mb-5">Parlons de votre besoin</h2>
          <p className="mb-6 max-w-prose text-lg text-ink-muted">Appelez directement ou indiquez le créneau auquel vous souhaitez être rappelé.</p>
          <LienTelephone e164={entreprise.telephones.urgence.e164} contexte="bloc_appel" className="inline-flex min-h-11 items-center rounded-button bg-brand px-5 py-2.5 font-bold text-ink-inverse no-underline hover:bg-brand-hover">
            Appeler le {entreprise.telephones.urgence.display}
          </LienTelephone>
        </div>
        <div className="rounded-card border border-border bg-surface p-6 shadow-card">
          <h3 className="mb-5">Demander un rappel</h3>
          <FormulaireRappelCourt />
        </div>
      </div>
    </Section>
  );
}
