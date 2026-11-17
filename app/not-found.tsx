import Link from "next/link";
import { entreprise } from "@/content/entreprise";
import { LienTelephone } from "@/components/liens/lien-telephone";
import { Section } from "@/components/ui/section";

export default function Introuvable() {
  return <Section as="div"><div className="max-w-prose"><h1 className="mb-6">Page introuvable</h1><p className="mb-8 text-ink-muted">La page demandée n’existe pas ou a changé d’adresse.</p><div className="flex flex-wrap gap-3"><Link href="/" className="inline-flex min-h-11 items-center rounded-button bg-brand px-5 py-2.5 font-bold text-ink-inverse">Retour à l’accueil</Link><LienTelephone e164={entreprise.telephones.urgence.e164} contexte="404" className="inline-flex min-h-11 items-center rounded-button border border-brand px-5 py-2.5 font-bold text-brand">Appeler</LienTelephone></div></div></Section>;
}
