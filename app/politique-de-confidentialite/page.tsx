import type { Metadata } from "next";
import Link from "next/link";
import { entreprise } from "@/content/entreprise";
import { LienEmail } from "@/components/liens/lien-email";
import { HeroInterne } from "@/components/pages/hero-interne";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Traitements de données personnelles, formulaires et droits des visiteurs du site Philippe Rénovation.",
};

export default function PolitiqueConfidentialite() {
  return (
    <>
      <HeroInterne
        titre="Politique de confidentialité"
        surtitre="Vos données personnelles"
        description="Cette politique présente les données utilisées lorsque vous contactez Philippe Rénovation, les raisons de leur traitement et les moyens d’exercer vos droits."
        filAriane={[{ label: "Politique de confidentialité" }]}
      />

      <Section as="div">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div className="max-w-prose">
            <div className="grid gap-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-xl [&_li]:text-ink-muted [&_p]:mb-3 [&_p]:text-ink-muted [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-2 [&_ul]:pl-6">
              <section>
                <h2>Responsable du traitement</h2>
                <p>{entreprise.nomJuridique}, {entreprise.formeJuridique}, utilisant l’enseigne {entreprise.nom}.</p>
                <p>SIRET&nbsp;: {entreprise.siret}</p>
                <p>{entreprise.adresse.voie}, {entreprise.adresse.complement}, {entreprise.adresse.codePostal} {entreprise.adresse.ville}, {entreprise.adresse.pays}.</p>
                <p>Contact relatif aux données personnelles&nbsp;: <LienEmail email={entreprise.email} contexte="confidentialite" className="break-all underline underline-offset-4" />.</p>
              </section>

              <section>
                <h2>Données traitées et finalités</h2>
                <h3>Demande de devis</h3>
                <p>Le nom, le téléphone, l’adresse e-mail, le code postal, le service demandé, le message et les photographies facultatives sont utilisés pour comprendre le projet, reprendre contact, évaluer la demande et préparer un devis.</p>
                <h3>Demande de rappel</h3>
                <p>Le nom, le numéro de téléphone et le créneau souhaité servent à organiser le rappel demandé.</p>
                <h3>Échanges directs</h3>
                <p>Les informations communiquées par téléphone ou par e-mail servent à répondre à la demande et à assurer le suivi de la relation avec le demandeur ou le client.</p>
                <h3>Données techniques</h3>
                <p>Les données strictement nécessaires au fonctionnement, à la sécurité et au diagnostic technique du site peuvent être traitées par l’hébergeur et les prestataires techniques retenus.</p>
              </section>

              <section>
                <h2>Bases légales</h2>
                <ul>
                  <li>Les demandes de devis, de rappel et les échanges préparatoires reposent sur les mesures précontractuelles prises à la demande de la personne concernée.</li>
                  <li>Le suivi de la relation client et la défense des droits de l’entreprise peuvent relever de son intérêt légitime.</li>
                  <li>La conservation de certains documents peut reposer sur les obligations légales, comptables ou fiscales applicables.</li>
                </ul>
                <p>[À FOURNIR&nbsp;: validation définitive de la base légale associée à chaque traitement lors du choix du service d’envoi des formulaires]</p>
              </section>

              <section>
                <h2>Caractère obligatoire des informations</h2>
                <p>Les champs signalés comme obligatoires sont nécessaires pour traiter la demande. Sans ces informations, Philippe Rénovation peut ne pas être en mesure de répondre. L’ajout de photographies reste facultatif.</p>
              </section>

              <section>
                <h2>Destinataires et sous-traitants</h2>
                <p>Les données sont accessibles à Philippe WINAUD TUMBACH et, uniquement lorsque cela est nécessaire, aux prestataires techniques chargés de l’hébergement, de l’envoi des formulaires ou de la maintenance du site.</p>
                <p>Les données ne sont pas vendues.</p>
                <p>Le site est hébergé par OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.</p>
                <p>[À FOURNIR&nbsp;: identité du service d’envoi des formulaires et des éventuels autres sous-traitants]</p>
              </section>

              <section>
                <h2>Durées de conservation</h2>
                <p>Les données sont conservées pendant une durée proportionnée à la finalité de la demande, puis archivées ou supprimées selon les obligations légales applicables.</p>
                <p>[À FOURNIR&nbsp;: durées retenues pour les demandes sans suite, devis, échanges, photographies, contrats et données techniques]</p>
              </section>

              <section>
                <h2>Hébergement et transferts hors de l’Union européenne</h2>
                <p>L’hébergement est confié à OVH SAS, société établie en France. La localisation précise du centre de données dépendra de l’offre OVHcloud retenue.</p>
                <p>[À FOURNIR&nbsp;: localisation contractuelle des données, pays de traitement des autres prestataires et garanties applicables en cas de transfert hors de l’Union européenne]</p>
              </section>

              <section>
                <h2>Cookies et mesure d’audience</h2>
                <p>Le site est conçu sans traceur publicitaire ni cookie nécessitant un consentement préalable. Aucune solution de mesure d’audience n’est active à ce stade. Cette section sera mise à jour avant l’activation éventuelle d’un outil de mesure.</p>
                <p>Les services tiers qui pourraient être proposés ultérieurement, comme une carte interactive, ne seront chargés qu’après une action explicite de l’utilisateur.</p>
              </section>

              <section>
                <h2>Sécurité</h2>
                <p>Des mesures techniques et organisationnelles adaptées sont prévues pour limiter l’accès non autorisé, la perte, l’altération ou la divulgation des données. Aucun système ne pouvant garantir une sécurité absolue, les mesures sont réévaluées en fonction des services effectivement utilisés.</p>
              </section>

              <section>
                <h2>Vos droits</h2>
                <p>Selon le traitement et sa base légale, vous pouvez demander l’accès à vos données, leur rectification ou leur effacement, la limitation du traitement, exercer votre droit d’opposition ou demander la portabilité des données que vous avez fournies.</p>
                <p>Pour exercer vos droits, écrivez à <LienEmail email={entreprise.email} contexte="confidentialite_droits" className="break-all underline underline-offset-4" /> ou à l’adresse postale indiquée ci-dessus, en précisant votre demande.</p>
                <p>Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="font-bold text-brand underline underline-offset-4">CNIL</a>.</p>
              </section>

              <section>
                <h2>Décision automatisée</h2>
                <p>Les demandes transmises au site ne font l’objet d’aucune décision entièrement automatisée ni d’aucun profilage.</p>
              </section>

              <section>
                <h2>Mise à jour de la politique</h2>
                <p>Dernière mise à jour&nbsp;: 21 novembre 2026.</p>
                <p>Cette politique pourra être modifiée lors de l’activation des formulaires ou du choix de nouveaux prestataires. Consultez également les <Link href="/mentions-legales" className="font-bold text-brand underline underline-offset-4">mentions légales</Link>.</p>
              </section>
            </div>
          </div>

          <aside className="rounded-card border border-border bg-surface-muted p-6 text-sm text-ink-muted">
            <p className="font-bold text-ink">Contact</p>
            <p className="mt-2">Pour toute question relative à vos données, contactez directement Philippe Rénovation.</p>
            <p className="mt-5"><LienEmail email={entreprise.email} contexte="confidentialite_encart" className="break-all font-bold text-brand underline underline-offset-4" /></p>
            <p className="mt-6">Les mentions entre crochets seront complétées après le choix de l’hébergement et du service de formulaires.</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
