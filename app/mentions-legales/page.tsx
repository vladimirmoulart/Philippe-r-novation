import type { Metadata } from "next";
import { entreprise } from "@/content/entreprise";
import { LienEmail } from "@/components/liens/lien-email";
import { LienTelephone } from "@/components/liens/lien-telephone";
import { FilAriane } from "@/components/navigation/fil-ariane";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = { title: "Mentions légales", description: "Éditeur, hébergement et informations légales du site Philippe Rénovation." };

export default function MentionsLegales() {
  return <Section as="div" className="!py-10 sm:!py-14">
    <FilAriane elements={[{ label: "Mentions légales" }]} />
    <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
      <main className="max-w-prose">
        <p className="mb-3 text-sm font-extrabold text-brand">Informations légales</p>
        <h1 className="mb-6">Mentions légales</h1>
        <p className="mb-10 text-lg text-ink-muted">Cette page identifie l’éditeur du site, son responsable de publication et son prestataire d’hébergement.</p>
        <div className="grid gap-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_p]:mb-3 [&_p]:text-ink-muted">
          <section><h2>Éditeur du site</h2>
            <p><strong className="text-ink">Nom commercial :</strong> {entreprise.nom}</p>
            <p><strong className="text-ink">Nom juridique et forme juridique :</strong> [À FOURNIR : nom juridique complet et forme juridique]</p>
            <p><strong className="text-ink">Adresse :</strong> {entreprise.adresse.voie}, {entreprise.adresse.codePostal} {entreprise.adresse.ville}, {entreprise.adresse.pays}</p>
            <p><strong className="text-ink">SIRET :</strong> {entreprise.siret}</p>
            <p><strong className="text-ink">Immatriculation :</strong> [À FOURNIR : registre et numéro, le cas échéant]</p>
            <p><strong className="text-ink">Téléphone :</strong> <LienTelephone e164={entreprise.telephones.fixe.e164} contexte="mentions_legales" className="underline underline-offset-4">{entreprise.telephones.fixe.display}</LienTelephone></p>
            <p><strong className="text-ink">E-mail :</strong> <LienEmail email={entreprise.email} contexte="mentions_legales" className="break-all underline underline-offset-4" /></p>
          </section>
          <section><h2>Directeur de la publication</h2><p>[À FOURNIR : identité du directeur de la publication]</p></section>
          <section><h2>Hébergement</h2><p>[À FOURNIR : raison sociale, adresse et téléphone de l’hébergeur]</p></section>
          <section>
            <h2>Conception et réalisation</h2>
            <p>
              Site conçu et développé par WEBLAD, Vladimir Moulart ({""}
              <a
                href="https://www.weblad.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand underline underline-offset-4"
              >
                weblad.fr
              </a>
              ).
            </p>
          </section>
          <section><h2>Assurance professionnelle</h2><p>[À FOURNIR : assureur décennal, coordonnées, contrat, activités, validité et zone couverte]</p></section>
          <section><h2>Médiation de la consommation</h2><p>Après une réclamation écrite restée sans solution, le consommateur peut saisir gratuitement le médiateur dont relève l’entreprise.</p><p>[À FOURNIR : nom, adresse et site du médiateur de la consommation]</p></section>
          <section><h2>Propriété intellectuelle</h2><p>Les textes, photographies et éléments graphiques du site sont protégés. Leur reproduction nécessite l’autorisation préalable de leur titulaire, sauf exception prévue par la loi.</p></section>
          <section><h2>Responsabilité</h2><p>Les informations du site restent générales et ne remplacent ni l’examen du bâtiment ni un devis établi après étude de la demande.</p></section>
        </div>
      </main>
      <aside className="rounded-card border border-border bg-surface-muted p-6 text-sm text-ink-muted"><p className="font-bold text-ink">Dernière mise à jour</p><p className="mt-2">17 novembre 2026</p><p className="mt-5">Les mentions entre crochets doivent être complétées avant la mise en ligne définitive.</p></aside>
    </div>
  </Section>;
}
