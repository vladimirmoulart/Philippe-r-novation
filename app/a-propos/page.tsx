import type { Metadata } from "next";
import Link from "next/link";
import { entreprise } from "@/content/entreprise";
import { universServices } from "@/content/services";
import { BlocAppel } from "@/components/blocs/bloc-appel";
import { HeroInterne } from "@/components/pages/hero-interne";
import { BoutonLien } from "@/components/ui/bouton";
import { Carte } from "@/components/ui/carte";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "À propos de Philippe Rénovation à Rochegude",
  description: "Découvrez l’activité de Philippe Rénovation à Rochegude pour les travaux de toiture, zinguerie, façade et peinture.",
};

export default function APropos() {
  return <>
    <HeroInterne titre="Philippe Rénovation, artisan à Rochegude" surtitre="À propos" description="Un interlocuteur local pour examiner votre besoin et vous orienter vers les travaux adaptés à votre toiture, votre façade ou vos supports à peindre." filAriane={[{ label: "À propos" }]} aside={<BoutonLien href="/contact" className="justify-self-start lg:justify-self-end">Présenter votre projet</BoutonLien>} />

    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-card bg-brand-subtle p-7 sm:p-9">
          <p className="font-display text-2xl font-extrabold text-brand">{entreprise.nom}</p>
          <p className="mt-4 text-lg text-ink-muted">{entreprise.adresse.voie}<br />{entreprise.adresse.codePostal} {entreprise.adresse.ville}</p>
          <p className="mt-7 text-sm text-ink-muted">[À FOURNIR : présentation de Philippe, composition de l’équipe, parcours et photographie autorisée]</p>
        </div>
        <div>
          <p className="mb-3 text-sm font-extrabold text-brand">Une demande examinée dans son contexte</p>
          <h2 className="mb-6">Comprendre le bâtiment avant de parler de travaux</h2>
          <div className="grid gap-5 text-lg text-ink-muted">
            <p>Une fuite, une tuile déplacée ou une façade dégradée ne se traite pas avec une réponse standard. La nature du support, son état et l’origine du désordre doivent guider l’intervention.</p>
            <p>Le premier échange sert à préciser votre situation. Lorsque l’examen sur place est nécessaire, il permet de définir les travaux à envisager et les points à faire apparaître dans le devis.</p>
            <p>Les prix, délais et garanties ne sont annoncés qu’après confirmation des éléments utiles au projet.</p>
          </div>
        </div>
      </div>
    </Section>

    <Section className="bg-surface-muted">
      <div className="max-w-3xl"><p className="mb-3 text-sm font-extrabold text-brand">Les domaines d’intervention</p><h2 className="mb-5">Un même contact pour l’enveloppe et les finitions du bâtiment</h2><p className="text-lg text-ink-muted">Les services sont organisés en quatre thèmes pour identifier rapidement le bon point d’entrée.</p></div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {universServices.map((univers) => <Carte key={univers.slug}><h3 className="mb-3">{univers.titre}</h3><p className="mb-5 text-ink-muted">{univers.resume}</p><Link href={`/services/${univers.slug}`} className="font-bold text-brand underline-offset-4 hover:underline">Voir les services<span className="sr-only"> de {univers.titre}</span></Link></Carte>)}
      </div>
    </Section>

    <Section>
      <div className="grid gap-8 lg:grid-cols-3">
        <div><p className="mb-2 font-display text-lg font-extrabold text-brand">01</p><h2 className="mb-3 text-2xl">Écouter la demande</h2><p className="text-ink-muted">Vous expliquez le problème constaté, le bâtiment concerné et le résultat recherché.</p></div>
        <div><p className="mb-2 font-display text-lg font-extrabold text-brand">02</p><h2 className="mb-3 text-2xl">Examiner les supports</h2><p className="text-ink-muted">L’état de la toiture, de la façade ou des surfaces permet d’écarter les réponses inadaptées.</p></div>
        <div><p className="mb-2 font-display text-lg font-extrabold text-brand">03</p><h2 className="mb-3 text-2xl">Définir l’intervention</h2><p className="text-ink-muted">Le devis décrit les travaux retenus après les vérifications nécessaires.</p></div>
      </div>
    </Section>
    <BlocAppel />
  </>;
}
