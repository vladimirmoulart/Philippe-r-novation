import type { Metadata } from "next";
import { entreprise } from "@/content/entreprise";
import { LienEmail } from "@/components/liens/lien-email";
import { LienTelephone } from "@/components/liens/lien-telephone";
import { HeroInterne } from "@/components/pages/hero-interne";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Éditeur, immatriculation, hébergement et informations légales du site Philippe Rénovation.",
};

export default function MentionsLegales() {
  return (
    <>
      <HeroInterne
        titre="Mentions légales"
        surtitre="Informations légales"
        description="Identification de l’éditeur du site Philippe Rénovation et informations relatives à son activité."
        filAriane={[{ label: "Mentions légales" }]}
      />

      <Section as="div">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="max-w-prose">
            <div className="grid gap-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_p]:mb-3 [&_p]:text-ink-muted">
              <section>
                <h2>Éditeur du site</h2>
                <p><strong className="text-ink">Enseigne&nbsp;:</strong> {entreprise.nom}</p>
                <p><strong className="text-ink">Nom commercial&nbsp;:</strong> {entreprise.nomCommercial}</p>
                <p><strong className="text-ink">Nom juridique&nbsp;:</strong> {entreprise.nomJuridique}</p>
                <p><strong className="text-ink">Forme juridique&nbsp;:</strong> {entreprise.formeJuridique}</p>
                <p><strong className="text-ink">Adresse du siège&nbsp;:</strong> {entreprise.adresse.voie}, {entreprise.adresse.complement}, {entreprise.adresse.codePostal} {entreprise.adresse.ville}, {entreprise.adresse.pays}</p>
                <p><strong className="text-ink">SIREN&nbsp;:</strong> {entreprise.siren}</p>
                <p><strong className="text-ink">SIRET du siège&nbsp;:</strong> {entreprise.siret}</p>
                <p><strong className="text-ink">Immatriculation&nbsp;:</strong> {entreprise.rcs}, inscrit au Registre national des entreprises</p>
                <p><strong className="text-ink">EUID&nbsp;:</strong> {entreprise.euid}</p>
                <p><strong className="text-ink">Code APE&nbsp;:</strong> {entreprise.codeApe}</p>
                <p><strong className="text-ink">Téléphone&nbsp;:</strong> <LienTelephone e164={entreprise.telephones.fixe.e164} contexte="mentions_legales" className="underline underline-offset-4">{entreprise.telephones.fixe.display}</LienTelephone></p>
                <p><strong className="text-ink">E-mail&nbsp;:</strong> <LienEmail email={entreprise.email} contexte="mentions_legales" className="break-all underline underline-offset-4" /></p>
              </section>

              <section>
                <h2>Activité</h2>
                <p><strong className="text-ink">Activité principale enregistrée&nbsp;:</strong> {entreprise.activitePrincipale}.</p>
                <p>Les activités déclarées comprennent notamment la maçonnerie, les finitions et l’entretien intérieur et extérieur des bâtiments, le décapage, les sols et le carrelage, la charpente, le terrassement, la couverture, la peinture et les enduits de façade.</p>
                <p><strong className="text-ink">Date de création de l’entreprise individuelle&nbsp;:</strong> 3 juillet 2003.</p>
              </section>

              <section>
                <h2>Représentant légal</h2>
                <p><strong className="text-ink">Chef d’entreprise&nbsp;:</strong> {entreprise.dirigeant}</p>
              </section>

              <section>
                <h2>Hébergement</h2>
                <p><strong className="text-ink">Hébergeur&nbsp;:</strong> OVH SAS, société par actions simplifiée au capital de 50&nbsp;000&nbsp;000&nbsp;€.</p>
                <p><strong className="text-ink">Siège social&nbsp;:</strong> 2 rue Kellermann, 59100 Roubaix, France.</p>
                <p><strong className="text-ink">Immatriculation&nbsp;:</strong> RCS Lille Métropole 424&nbsp;761&nbsp;419&nbsp;00045.</p>
                <p><strong className="text-ink">Téléphone&nbsp;:</strong> 1007 depuis la France ou +33&nbsp;9&nbsp;72&nbsp;10&nbsp;10&nbsp;07 depuis l’étranger.</p>
                <p><a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer" className="font-bold text-brand underline underline-offset-4">www.ovhcloud.com</a></p>
              </section>

              <section>
                <h2>Conception et réalisation</h2>
                <p>
                  Site conçu et développé par WEBLAD, Vladimir Moulart ({""}
                  <a href="https://www.weblad.fr" target="_blank" rel="noopener noreferrer" className="font-bold text-brand underline underline-offset-4">weblad.fr</a>
                  ).
                </p>
              </section>

              <section>
                <h2>Assurance professionnelle</h2>
                <p><strong className="text-ink">Assureur&nbsp;:</strong> {entreprise.assuranceDecennale.assureur}</p>
                <p><strong className="text-ink">Siège social&nbsp;:</strong> {entreprise.assuranceDecennale.siege}</p>
                <p><strong className="text-ink">Adresse postale&nbsp;:</strong> {entreprise.assuranceDecennale.adressePostale}</p>
                <p><strong className="text-ink">Contrat de responsabilité civile et décennale&nbsp;:</strong> {entreprise.assuranceDecennale.contrat}</p>
                <p><strong className="text-ink">Période de validité de l’attestation&nbsp;:</strong> du 18 décembre 2025 au 17 décembre 2026</p>
                <p><strong className="text-ink">Zone géographique couverte&nbsp;:</strong> {entreprise.assuranceDecennale.zone}</p>
                <p><strong className="text-ink">Activités couvertes&nbsp;:</strong> {entreprise.assuranceDecennale.activitesCouvertes.join(" et ")}</p>
                <p><strong className="text-ink">Gestionnaire du contrat&nbsp;:</strong> {entreprise.assuranceDecennale.gestionnaire}, immatriculation ORIAS n° {entreprise.assuranceDecennale.gestionnaireOrias}</p>
                <p><strong className="text-ink">Intermédiaire&nbsp;:</strong> {entreprise.assuranceDecennale.intermediaire}, immatriculation ORIAS n° {entreprise.assuranceDecennale.intermediaireOrias}</p>
              </section>

              <section>
                <h2>Médiation de la consommation</h2>
                <p>Après une réclamation écrite adressée à l’entreprise et restée sans solution, le consommateur peut saisir gratuitement le médiateur de la consommation dont relève l’entreprise, sous réserve des conditions de recevabilité applicables.</p>
                <p>[À FOURNIR&nbsp;: nom, adresse et site internet du médiateur de la consommation]</p>
              </section>

              <section>
                <h2>Propriété intellectuelle</h2>
                <p>Les textes, photographies, logos, éléments graphiques et autres contenus présents sur ce site sont protégés par les règles relatives à la propriété intellectuelle. Toute reproduction ou adaptation nécessite l’autorisation préalable de leur titulaire, sauf exception prévue par la loi.</p>
              </section>

              <section>
                <h2>Responsabilité</h2>
                <p>Les informations publiées sur le site sont données à titre général. Elles ne remplacent ni l’examen du bâtiment, ni les conseils adaptés à sa situation, ni un devis établi après étude de la demande.</p>
              </section>
            </div>
          </div>

          <aside className="rounded-card border border-border bg-surface-muted p-6 text-sm text-ink-muted">
            <p className="font-bold text-ink">Dernière mise à jour</p>
            <p className="mt-2">21 novembre 2026</p>
            <p className="mt-5">Les mentions entre crochets restent à compléter avant la mise en ligne définitive.</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
