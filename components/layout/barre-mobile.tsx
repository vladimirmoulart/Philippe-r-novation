"use client";

import { entreprise } from "@/content/entreprise";
import { LienTelephone } from "@/components/liens/lien-telephone";
import { LienDevis } from "@/components/liens/lien-devis";

export function BarreMobile() {
  return (
    <nav aria-label="Actions rapides" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-border bg-surface shadow-raised md:hidden">
      <LienTelephone e164={entreprise.telephones.urgence.e164} contexte="barre_mobile" className="flex min-h-14 items-center justify-center bg-surface-dark px-4 font-bold text-ink-inverse">Appeler</LienTelephone>
      <LienDevis contexte="barre_mobile" className="flex min-h-14 items-center justify-center bg-brand px-4 font-bold text-ink-inverse">Devis</LienDevis>
    </nav>
  );
}
