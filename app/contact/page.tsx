import type { Metadata } from "next";
import { entreprise } from "@/content/entreprise";
import { FormulaireRappelCourt } from "@/components/formulaires/formulaire-rappel-court";
import { LienDevis } from "@/components/liens/lien-devis";
import { LienEmail } from "@/components/liens/lien-email";
import { LienTelephone } from "@/components/liens/lien-telephone";
import { HeroInterne } from "@/components/pages/hero-interne";
import { Carte } from "@/components/ui/carte";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Philippe Rénovation à Rochegude par téléphone ou par e-mail pour votre projet de toiture, façade ou peinture.",
};

export default function Contact() {
  const adresse = `${entreprise.adresse.voie}, ${entreprise.adresse.codePostal} ${entreprise.adresse.ville}`;
  const itineraire = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adresse)}`;

  return (
    <>
      <HeroInterne
        titre="Parlons de votre projet"
        surtitre="Nous contacter"
        description="Une question sur votre toiture, votre façade ou vos travaux de peinture ? Contactez directement Philippe Rénovation."
        filAriane={[{ label: "Contact" }]}
        aside={
          <div className="rounded-card border border-ink-inverse/15 bg-ink-inverse/10 p-5 backdrop-blur-md">
            <p className="mb-2 text-sm font-bold text-ink-inverse/65">Urgence fuite 7 j/7</p>
            <LienTelephone e164={entreprise.telephones.urgence.e164} contexte="contact_hero" className="font-display text-2xl font-extrabold text-ink-inverse underline decoration-brand decoration-2 underline-offset-8">{entreprise.telephones.urgence.display}</LienTelephone>
          </div>
        }
      />

      <Section>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-extrabold text-brand">Coordonnées</p>
          <h2 className="mb-4">Choisissez le moyen de contact qui vous convient</h2>
          <p className="text-lg text-ink-muted">Pour détailler un projet et joindre des photos, utilisez la demande de devis.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <Carte className="flex min-h-60 flex-col">
            <span className="mb-8 grid h-11 w-11 place-items-center rounded-full bg-brand-subtle font-bold text-brand" aria-hidden="true">↗</span>
            <h3 className="mb-3">Téléphone</h3>
            <LienTelephone e164={entreprise.telephones.fixe.e164} contexte="contact_carte" className="font-bold text-brand underline-offset-4 hover:underline">{entreprise.telephones.fixe.display}</LienTelephone>
            <LienTelephone e164={entreprise.telephones.urgence.e164} contexte="contact_carte" className="mt-2 font-bold text-brand underline-offset-4 hover:underline">{entreprise.telephones.urgence.display}</LienTelephone>
          </Carte>
          <Carte className="flex min-h-60 flex-col">
            <span className="mb-8 grid h-11 w-11 place-items-center rounded-full bg-brand-subtle font-bold text-brand" aria-hidden="true">@</span>
            <h3 className="mb-3">E-mail</h3>
            <LienEmail email={entreprise.email} contexte="contact_carte" className="break-all font-bold text-brand underline-offset-4 hover:underline" />
          </Carte>
          <Carte className="flex min-h-60 flex-col">
            <span className="mb-8 grid h-11 w-11 place-items-center rounded-full bg-brand-subtle font-bold text-brand" aria-hidden="true">⌖</span>
            <h3 className="mb-3">Adresse</h3>
            <address className="not-italic text-ink-muted">{entreprise.adresse.voie}<br />{entreprise.adresse.codePostal} {entreprise.adresse.ville}</address>
          </Carte>
          <Carte className="flex min-h-60 flex-col">
            <span className="mb-8 grid h-11 w-11 place-items-center rounded-full bg-brand-subtle font-bold text-brand" aria-hidden="true">◷</span>
            <h3 className="mb-3">Horaires</h3>
            <dl className="grid gap-3 text-sm">
              {entreprise.horaires.map((horaire) => <div key={horaire.jours}><dt className="font-bold">{horaire.jours}</dt><dd className="text-ink-muted">{horaire.heures}</dd></div>)}
            </dl>
          </Carte>
        </div>
      </Section>

      <Section className="bg-surface-muted">
        <div className="grid overflow-hidden rounded-card border border-border bg-surface shadow-card lg:grid-cols-2">
          <div className="relative flex min-h-96 flex-col justify-end overflow-hidden bg-surface-dark p-8 text-ink-inverse sm:p-12">
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full border border-ink-inverse/15" aria-hidden="true" />
            <div className="absolute right-16 top-16 grid h-20 w-20 place-items-center rounded-full bg-brand text-3xl shadow-raised" aria-hidden="true">⌖</div>
            <div className="relative z-10">
              <p className="mb-3 text-sm font-extrabold text-brand">Rochegude</p>
              <h2 className="mb-4 text-[var(--font-size-h3)]">{adresse}</h2>
              <a href={itineraire} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-button border border-ink-inverse/30 px-5 py-2.5 font-bold text-ink-inverse hover:bg-ink-inverse/10">Ouvrir l’itinéraire<span className="sr-only"> dans un nouvel onglet</span></a>
            </div>
          </div>
          <div className="p-8 sm:p-12">
            <p className="mb-3 text-sm font-extrabold text-brand">Demande de rappel</p>
            <h2 className="mb-4 text-[var(--font-size-h3)]">Quand souhaitez-vous être rappelé ?</h2>
            <p className="mb-8 text-ink-muted">Le formulaire sera activé avec son point d’envoi lors de la phase 5.</p>
            <FormulaireRappelCourt />
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-card bg-brand p-6 text-ink-inverse sm:flex-row sm:items-center sm:p-8">
          <div><p className="font-display text-xl font-extrabold">Vous avez déjà les détails de votre projet ?</p><p className="mt-1 text-ink-inverse/80">Décrivez les travaux et préparez vos photographies.</p></div>
          <LienDevis contexte="contact_bas" className="inline-flex min-h-11 shrink-0 items-center rounded-button bg-surface px-5 py-2.5 font-bold text-ink hover:bg-surface-muted">Demander un devis</LienDevis>
        </div>
      </Section>
    </>
  );
}
