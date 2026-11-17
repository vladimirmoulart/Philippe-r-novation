import type { Metadata } from "next";
import Link from "next/link";
import { entreprise } from "@/content/entreprise";
import { LienEmail } from "@/components/liens/lien-email";
import { FilAriane } from "@/components/navigation/fil-ariane";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = { title: "Politique de confidentialité", description: "Données personnelles, formulaires et droits des visiteurs du site Philippe Rénovation." };

export default function PolitiqueConfidentialite() {
  return <Section as="div" className="!py-10 sm:!py-14">
    <FilAriane elements={[{ label: "Politique de confidentialité" }]} />
    <main className="mt-10 max-w-prose">
      <p className="mb-3 text-sm font-extrabold text-brand">Vos données personnelles</p>
      <h1 className="mb-6">Politique de confidentialité</h1>
      <p className="mb-10 text-lg text-ink-muted">Cette politique explique quelles données sont utilisées lorsque vous contactez Philippe Rénovation, pourquoi elles sont nécessaires et comment exercer vos droits.</p>
      <div className="grid gap-10 [&_h2]:mb-4 [&_h2]:text-2xl [&_h3]:mb-3 [&_h3]:text-xl [&_p]:mb-3 [&_p]:text-ink-muted">
        <section><h2>Responsable du traitement</h2><p>[À FOURNIR : nom juridique et forme juridique], utilisant le nom commercial {entreprise.nom}.</p><p>{entreprise.adresse.voie}, {entreprise.adresse.codePostal} {entreprise.adresse.ville}.</p><p>Contact : <LienEmail email={entreprise.email} contexte="confidentialite" className="break-all underline underline-offset-4" />.</p></section>
        <section><h2>Données et finalités</h2><h3>Demande de devis</h3><p>Nom, téléphone, e-mail, code postal, service, message et photographies facultatives servent à comprendre la demande, reprendre contact et préparer un devis.</p><h3>Demande de rappel</h3><p>Le nom, le téléphone et le créneau souhaité servent à organiser le rappel demandé.</p><h3>Échanges directs</h3><p>Les informations communiquées par téléphone ou e-mail servent à répondre à la demande et à en assurer le suivi.</p></section>
        <section><h2>Bases légales</h2><p>Les demandes de devis reposent sur les mesures précontractuelles prises à votre demande. Le suivi des demandes et la sécurité du site peuvent relever de l’intérêt légitime de l’entreprise.</p><p>[À FOURNIR : validation des bases légales par traitement]</p></section>
        <section><h2>Informations obligatoires</h2><p>Les champs signalés comme obligatoires sont nécessaires au traitement de la demande. Les photographies restent facultatives.</p></section>
        <section><h2>Destinataires et prestataires</h2><p>Les données sont destinées aux personnes habilitées et aux prestataires techniques nécessaires au site et aux formulaires.</p><p>[À FOURNIR : destinataires, hébergeur, service de formulaire et sous-traitants]</p></section>
        <section><h2>Durées de conservation</h2><p>Les données sont conservées pendant la durée nécessaire à la demande, puis selon les obligations légales applicables.</p><p>[À FOURNIR : durées pour demandes, devis, échanges, photos et données techniques]</p></section>
        <section><h2>Hébergement et transferts</h2><p>[À FOURNIR : localisation des traitements et garanties en cas de transfert hors de l’Union européenne]</p></section>
        <section><h2>Cookies et audience</h2><p>Le site est conçu sans traceur publicitaire ni cookie nécessitant un consentement préalable. La solution de mesure d’audience n’est pas encore arrêtée. Cette politique sera mise à jour avant son activation.</p></section>
        <section><h2>Vos droits</h2><p>Selon la situation, vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou la portabilité de vos données, et vous opposer à certains traitements.</p><p>Écrivez à <LienEmail email={entreprise.email} contexte="confidentialite_droits" className="break-all underline underline-offset-4" />. Vous pouvez aussi saisir la <a href="https://www.cnil.fr" rel="noreferrer" className="underline underline-offset-4">CNIL</a>.</p></section>
        <section><h2>Mise à jour</h2><p>Dernière mise à jour : 17 novembre 2026. Consultez aussi les <Link href="/mentions-legales" className="underline underline-offset-4">mentions légales</Link>.</p></section>
      </div>
    </main>
  </Section>;
}
