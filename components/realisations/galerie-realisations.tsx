"use client";

import Image from "next/image";
import { useState } from "react";
import { realisations, type Realisation } from "@/content/realisations";

type Filtre = "Tous" | Extract<Realisation["categorie"], "Peinture" | "Façade" | "Toiture">;

const filtres: readonly Filtre[] = ["Tous", "Peinture", "Façade", "Toiture"];

export function GalerieRealisations() {
  const [filtreActif, setFiltreActif] = useState<Filtre>("Tous");
  const realisationsVisibles = filtreActif === "Tous"
    ? realisations
    : realisations.filter((realisation) => realisation.categorie === filtreActif);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3" role="group" aria-label="Filtrer les réalisations par catégorie">
        {filtres.map((filtre) => (
          <button
            key={filtre}
            type="button"
            aria-pressed={filtreActif === filtre}
            onClick={() => setFiltreActif(filtre)}
            className={`min-h-11 rounded-full border px-5 py-2 text-sm font-bold transition-colors ${filtreActif === filtre ? "border-brand bg-brand text-ink-inverse" : "border-border bg-surface text-ink hover:border-brand hover:text-brand"}`}
          >
            {filtre}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {realisationsVisibles.map((realisation) => (
          <article key={realisation.slug} className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
            <div className="aspect-[4/3] overflow-hidden bg-surface-muted">
              <Image src={realisation.photo.src} alt={realisation.photo.alt} width={realisation.photo.largeur} height={realisation.photo.hauteur} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <div className="mb-4 flex flex-wrap items-center gap-2 text-sm font-bold">
                <span className="text-ink-muted">{realisation.categorie}</span>
                <span className="text-border" aria-hidden="true">·</span>
                <span className="text-brand">{realisation.ville}</span>
              </div>
              <h3 className="mb-3">{realisation.titre}</h3>
              <p className="text-ink-muted">{realisation.resume}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
