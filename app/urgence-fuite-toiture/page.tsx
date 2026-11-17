import type { Metadata } from "next";
import { entreprise } from "@/content/entreprise";
import { BlocAppel } from "@/components/blocs/bloc-appel";
import { LienTelephone } from "@/components/liens/lien-telephone";
import { HeroInterne } from "@/components/pages/hero-interne";

export const metadata: Metadata = { title: "Urgence fuite de toiture 7 j/7", description: "Une fuite de toiture autour de Rochegude ? Appelez Philippe Rénovation au 06 30 26 73 61." };

export default function UrgenceFuite() {
  return <><HeroInterne titre="Urgence fuite de toiture 7 j/7" surtitre="Intervention urgente" description={<><p className="mb-5">Page en construction. En cas de fuite, contactez directement Philippe Rénovation.</p><LienTelephone e164={entreprise.telephones.urgence.e164} contexte="urgence" className="inline-flex min-h-11 items-center rounded-button bg-brand px-5 py-2.5 font-bold text-ink-inverse hover:bg-brand-hover">Appeler le {entreprise.telephones.urgence.display}</LienTelephone></>} filAriane={[{ label: "Urgence fuite de toiture" }]} /><BlocAppel /></>;
}
