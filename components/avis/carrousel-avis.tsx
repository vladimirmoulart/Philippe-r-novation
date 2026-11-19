"use client";

import { useEffect, useState } from "react";
import { avis } from "@/content/avis";

const formatDate = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

type Temoignage = (typeof avis)[number];

function obtenirInitiales(nom: string) {
  return nom
    .split(/\s+/)
    .slice(0, 2)
    .map((partie) => partie.charAt(0))
    .join("")
    .toLocaleUpperCase("fr-FR");
}

function CarteAvis({ temoignage, principal = false }: { temoignage: Temoignage; principal?: boolean }) {
  return (
    <article className={`relative flex flex-col overflow-hidden rounded-card border bg-surface shadow-card ${principal ? "min-h-[26rem] border-brand/40 p-7 shadow-raised sm:p-9" : "hidden min-h-[23rem] scale-[0.94] border-border p-6 opacity-75 md:flex"}`}>
      <div className={`absolute inset-x-0 top-0 bg-brand ${principal ? "h-1.5" : "h-1"}`} aria-hidden="true" />
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className={`grid place-items-center rounded-full bg-brand-subtle text-brand ${principal ? "h-12 w-12" : "h-10 w-10"}`} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" className={principal ? "h-6 w-6" : "h-5 w-5"}>
            <path d="M7.2 6.5c-2.8 1.7-4.2 4-4.2 6.9 0 2.5 1.4 4.1 3.6 4.1 2 0 3.4-1.4 3.4-3.4 0-1.8-1.1-3-2.8-3.3.3-1.1 1.2-2.1 2.7-3L7.2 6.5Zm10 0c-2.8 1.7-4.2 4-4.2 6.9 0 2.5 1.4 4.1 3.6 4.1 2 0 3.4-1.4 3.4-3.4 0-1.8-1.1-3-2.8-3.3.3-1.1 1.2-2.1 2.7-3l-2.7-1.3Z" />
          </svg>
        </span>
        {principal && (
          <div className="flex gap-0.5 text-lg leading-none text-rating" aria-label="Note de cinq étoiles sur cinq">
            <span aria-hidden="true">★</span><span aria-hidden="true">★</span><span aria-hidden="true">★</span><span aria-hidden="true">★</span><span aria-hidden="true">★</span>
          </div>
        )}
      </div>

      <blockquote className={`mb-8 leading-relaxed text-ink ${principal ? "text-xl sm:text-2xl" : "text-base"}`}>
        «&nbsp;{temoignage.texte}&nbsp;»
      </blockquote>

      <footer className="mt-auto flex items-center gap-3 border-t border-border pt-5">
        <span className={`grid shrink-0 place-items-center rounded-full bg-surface-dark font-display text-sm font-extrabold text-ink-inverse ${principal ? "h-12 w-12" : "h-10 w-10"}`} aria-hidden="true">
          {obtenirInitiales(temoignage.auteur)}
        </span>
        <div>
          <p className="font-display font-extrabold">{temoignage.auteur}</p>
          <time dateTime={temoignage.date} className="text-sm text-ink-muted">
            {formatDate.format(new Date(`${temoignage.date}T00:00:00Z`))}
          </time>
        </div>
      </footer>
    </article>
  );
}

export function CarrouselAvis() {
  const [indexActif, setIndexActif] = useState(0);
  const indexPrecedent = indexActif === 0 ? avis.length - 1 : indexActif - 1;
  const indexSuivant = indexActif === avis.length - 1 ? 0 : indexActif + 1;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const minuteur = window.setInterval(() => {
      setIndexActif((index) => (index === avis.length - 1 ? 0 : index + 1));
    }, 6500);

    return () => window.clearInterval(minuteur);
  }, []);

  return (
    <div>
      <div key={indexActif} className="avis-carousel-transition grid gap-3 md:grid-cols-[0.82fr_1.18fr_0.82fr] md:items-center" aria-label="Carrousel des avis clients">
        <CarteAvis temoignage={avis[indexPrecedent]} />
        <CarteAvis temoignage={avis[indexActif]} principal />
        <CarteAvis temoignage={avis[indexSuivant]} />
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2" aria-label="Choisir un avis">
          {avis.map((temoignage, index) => (
            <button
              key={`${temoignage.auteur}-${temoignage.date}`}
              type="button"
              onClick={() => setIndexActif(index)}
              aria-label={`Afficher l’avis ${index + 1} de ${temoignage.auteur}`}
              aria-current={indexActif === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-[width,background-color] ${indexActif === index ? "w-8 bg-brand" : "w-2.5 bg-border hover:bg-ink-muted"}`}
            />
          ))}
        </div>
      </div>

      <aside className="mt-12 flex flex-col items-start justify-between gap-6 rounded-card bg-surface-dark p-6 text-ink-inverse shadow-card sm:flex-row sm:items-center sm:p-8">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-extrabold text-brand">Votre expérience compte</p>
          <h3 className="mb-2">Vous avez fait appel à Philippe Rénovation&nbsp;?</h3>
          <p className="text-ink-inverse/75">Partagez votre retour sur Google pour aider d’autres particuliers à choisir leur artisan.</p>
        </div>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Philippe%20R%C3%A9novation%2089%20chemin%20de%20la%20Gravi%C3%A8re%2026790%20Rochegude"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-button bg-brand px-5 py-3 text-center font-bold text-ink-inverse transition-colors hover:bg-brand-hover"
        >
          Laisser un avis sur Google
        </a>
      </aside>
    </div>
  );
}
