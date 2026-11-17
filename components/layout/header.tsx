"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { entreprise } from "@/content/entreprise";
import { universServices } from "@/content/services";
import { LienDevis } from "@/components/liens/lien-devis";
import { LienEmail } from "@/components/liens/lien-email";
import { LienTelephone } from "@/components/liens/lien-telephone";

export function Header() {
  const [ouvert, setOuvert] = useState(false);
  const [servicesOuverts, setServicesOuverts] = useState(false);
  const panneauRef = useRef<HTMLDialogElement>(null);
  const boutonRef = useRef<HTMLButtonElement>(null);
  const menuServicesRef = useRef<HTMLDivElement>(null);
  const boutonServicesRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialogue = panneauRef.current;
    if (!dialogue) return;
    const ancienOverflow = document.body.style.overflow;
    if (ouvert && !dialogue.open) {
      dialogue.showModal();
      document.body.style.overflow = "hidden";
    } else if (!ouvert && dialogue.open) {
      dialogue.close();
    }
    return () => {
      document.body.style.overflow = ancienOverflow;
    };
  }, [ouvert]);

  useEffect(() => {
    function gererClicExterieur(event: MouseEvent) {
      if (!menuServicesRef.current?.contains(event.target as Node)) {
        setServicesOuverts(false);
      }
    }

    function gererEchap(event: KeyboardEvent) {
      if (event.key === "Escape" && servicesOuverts) {
        setServicesOuverts(false);
        boutonServicesRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", gererClicExterieur);
    document.addEventListener("keydown", gererEchap);
    return () => {
      document.removeEventListener("mousedown", gererClicExterieur);
      document.removeEventListener("keydown", gererEchap);
    };
  }, [servicesOuverts]);

  function fermer() {
    panneauRef.current?.close();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-ink-inverse/10 bg-surface-dark/95 text-ink-inverse shadow-raised backdrop-blur-xl">
      <div className="hidden bg-brand text-ink-inverse xl:block">
        <div className="mx-auto flex min-h-8 max-w-content items-center justify-between gap-6 px-6 text-xs">
          <span>{entreprise.adresse.voie} — {entreprise.adresse.codePostal} {entreprise.adresse.ville}</span>
          <div className="flex items-center gap-5 whitespace-nowrap">
            <Link href="/urgence-fuite-toiture" className="font-bold hover:opacity-80">Urgence fuite 7 j/7</Link>
            <LienTelephone e164={entreprise.telephones.urgence.e164} contexte="entete_coordonnees" className="font-bold hover:opacity-80">{entreprise.telephones.urgence.display}</LienTelephone>
            <LienEmail email={entreprise.email} contexte="entete_coordonnees" className="hidden hover:opacity-80 2xl:inline" />
          </div>
        </div>
      </div>

      <div className="mx-auto grid min-h-20 max-w-content grid-cols-[1fr_auto] items-center gap-4 px-4 sm:grid-cols-[1fr_auto_auto] sm:px-6 lg:px-8 xl:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link href="/" className="flex shrink-0 items-center py-3 transition-opacity hover:opacity-85" aria-label="Philippe Rénovation — accueil">
          <Image
            src="/images/logo/logo-philippe-renovation.png"
            alt="Philippe Rénovation — toiture, peinture et charpente"
            width={600}
            height={148}
            priority
            className="h-auto w-40 sm:w-44"
          />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center justify-self-center gap-1 xl:flex">
          <Link href="/" className="rounded-button px-3 py-3 text-sm font-bold hover:bg-ink-inverse/10">Accueil</Link>
          <div ref={menuServicesRef} className="relative">
            <button
              ref={boutonServicesRef}
              type="button"
              aria-expanded={servicesOuverts}
              aria-controls="menu-nos-services"
              aria-haspopup="true"
              onClick={() => setServicesOuverts((actuel) => !actuel)}
              className="inline-flex min-h-11 items-center gap-2 rounded-button px-3 py-3 text-sm font-bold hover:bg-ink-inverse/10"
            >
              Nos services
              <span className={`text-accent transition-transform ${servicesOuverts ? "rotate-180" : ""}`} aria-hidden="true">⌄</span>
            </button>
            {servicesOuverts && (
              <div id="menu-nos-services" className="absolute left-0 top-full mt-2 w-72 rounded-card border border-border bg-surface p-2 text-ink shadow-raised">
                {universServices.map((univers) => (
                  <Link key={univers.slug} href={`/services/${univers.slug}`} onClick={() => setServicesOuverts(false)} className="group flex items-center justify-between gap-3 rounded-button px-4 py-3 font-bold hover:bg-surface-muted">
                    {univers.titre}<span className="text-brand transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                ))}
                <Link href="/services" onClick={() => setServicesOuverts(false)} className="mt-2 block border-t border-border px-4 pt-3 text-sm font-bold text-brand">Vue d’ensemble</Link>
              </div>
            )}
          </div>
          <Link href="/urgence-fuite-toiture" className="rounded-button px-3 py-3 text-sm font-bold hover:bg-ink-inverse/10">Urgence</Link>
          <Link href="/realisations" className="rounded-button px-3 py-3 text-sm font-bold hover:bg-ink-inverse/10">Réalisations</Link>
          <Link href="/a-propos" className="rounded-button px-3 py-3 text-sm font-bold hover:bg-ink-inverse/10">À propos</Link>
        </nav>

        <Link href="/contact" className="hidden min-h-11 shrink-0 items-center justify-center gap-2 rounded-button bg-brand px-5 py-3 text-sm font-bold text-ink-inverse shadow-card transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-brand-hover sm:flex">
          Contact <span aria-hidden="true">→</span>
        </Link>
        <button ref={boutonRef} type="button" aria-expanded={ouvert} aria-controls="menu-mobile" onClick={() => setOuvert(true)} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-button border border-ink-inverse/30 px-3 font-bold hover:bg-ink-inverse/10 xl:hidden">
          <span className="sr-only">Ouvrir le menu</span><span aria-hidden="true">Menu</span>
        </button>
      </div>

        <dialog
          ref={panneauRef}
          id="menu-mobile"
          aria-label="Menu principal"
          onClose={() => { setOuvert(false); boutonRef.current?.focus(); }}
          className="m-0 ml-auto h-dvh max-h-none w-full max-w-md overflow-y-auto bg-surface p-5 text-ink shadow-raised backdrop:bg-surface-dark/70 xl:hidden"
        >
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="font-display text-xl font-extrabold">Navigation</span>
              <button type="button" onClick={fermer} className="min-h-11 rounded-button border border-border px-4 font-bold">Fermer</button>
            </div>
            <nav aria-label="Navigation mobile" className="grid gap-5">
              <Link href="/" onClick={fermer} className="text-lg font-bold">Accueil</Link>
              <div>
                <p className="mb-3 font-display text-lg font-extrabold text-brand">Nos services</p>
                <ul className="grid gap-3 border-l border-border pl-4">
                  {universServices.map((univers) => (
                    <li key={univers.slug}><Link href={`/services/${univers.slug}`} onClick={fermer} className="font-bold">{univers.titre}</Link></li>
                  ))}
                </ul>
              </div>
              <Link href="/urgence-fuite-toiture" onClick={fermer} className="text-lg font-bold text-brand">Urgence fuite 7 j/7</Link>
              <Link href="/realisations" onClick={fermer} className="text-lg font-bold">Réalisations</Link>
              <Link href="/a-propos" onClick={fermer} className="text-lg font-bold">À propos</Link>
              <Link href="/contact" onClick={fermer} className="text-lg font-bold">Contact</Link>
              <LienDevis contexte="menu_mobile" className="inline-flex min-h-11 items-center justify-center rounded-button bg-brand px-5 py-2.5 font-bold text-ink-inverse" >Demander un devis</LienDevis>
            </nav>
        </dialog>
    </header>
  );
}
