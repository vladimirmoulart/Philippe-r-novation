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

      <div className="grid min-h-20 w-full grid-cols-[1fr_auto] items-center gap-4 sm:grid-cols-[1fr_auto_auto] xl:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link href="/" className="flex shrink-0 items-center transition-opacity hover:opacity-90" aria-label="Philippe Rénovation — accueil">
          <span className="logo-header-panel flex items-center">
            <Image
              src="/images/logo/logo-philippe-renovation.png"
              alt="Philippe Rénovation — toiture, peinture et charpente"
              width={600}
              height={148}
              priority
              className="relative z-10 h-auto w-40 sm:w-44"
            />
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center justify-self-center gap-3 xl:flex 2xl:gap-5">
          <div ref={menuServicesRef} className="relative">
            <button
              ref={boutonServicesRef}
              type="button"
              aria-expanded={servicesOuverts}
              aria-controls="menu-nos-services"
              aria-haspopup="true"
              onClick={() => setServicesOuverts((actuel) => !actuel)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-button px-4 py-3 text-base font-bold hover:bg-ink-inverse/10 ${servicesOuverts ? "bg-ink-inverse/10" : ""}`}
            >
              Nos services
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                <path d={servicesOuverts ? "m6 15 6-6 6 6" : "m6 9 6 6 6-6"} />
              </svg>
            </button>
            {servicesOuverts && (
              <div id="menu-nos-services" className="absolute left-0 top-full mt-2 w-72 rounded-card border border-border bg-surface p-2 text-ink shadow-raised">
                {universServices.map((univers) => (
                  <Link key={univers.slug} href={`/services/${univers.slug}`} onClick={() => setServicesOuverts(false)} className="block rounded-button px-4 py-3 font-bold hover:bg-surface-muted">
                    {univers.titre}
                  </Link>
                ))}
                <Link href="/services" onClick={() => setServicesOuverts(false)} className="mt-2 block border-t border-border px-4 pt-3 text-sm font-bold text-brand">Vue d’ensemble</Link>
              </div>
            )}
          </div>
          <Link href="/urgence-fuite-toiture" className="rounded-button px-4 py-3 text-base font-bold hover:bg-ink-inverse/10">Urgence</Link>
          <Link href="/realisations" className="rounded-button px-4 py-3 text-base font-bold hover:bg-ink-inverse/10">Réalisations</Link>
          <Link href="/a-propos" className="rounded-button px-4 py-3 text-base font-bold hover:bg-ink-inverse/10">À propos</Link>
          <Link href="/avis" className="rounded-button px-4 py-3 text-base font-bold hover:bg-ink-inverse/10">Avis</Link>
        </nav>

        <div className="hidden shrink-0 items-center sm:flex">
          <div className="hidden items-center gap-2 xl:flex" aria-label="Artisan et garantie décennale">
            <Image
              src="/images/accueil/logo-artisan.png"
              alt="Artisan"
              width={1280}
              height={910}
              className="h-12 w-auto object-contain"
            />
            <Image
              src="/images/accueil/garantie-decennale-10-ans-bps.webp"
              alt="Garantie décennale 10 ans"
              width={656}
              height={600}
              className="h-12 w-auto object-contain"
            />
          </div>
          <Link href="/contact" className="flex shrink-0 items-center font-bold text-ink-inverse transition-opacity hover:opacity-90">
            <span className="contact-header-panel flex items-center justify-center gap-3 font-display text-lg font-extrabold">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              Contact
            </span>
          </Link>
        </div>
        <button ref={boutonRef} type="button" aria-expanded={ouvert} aria-controls="menu-mobile" onClick={() => setOuvert(true)} className="mr-4 inline-flex min-h-11 min-w-11 items-center justify-center rounded-button border border-ink-inverse/30 px-3 font-bold hover:bg-ink-inverse/10 sm:mr-6 lg:mr-8 xl:hidden">
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
              <Link href="/avis" onClick={fermer} className="text-lg font-bold">Avis</Link>
              <Link href="/contact" onClick={fermer} className="text-lg font-bold">Contact</Link>
              <LienDevis contexte="menu_mobile" className="inline-flex min-h-11 items-center justify-center rounded-button bg-brand px-5 py-2.5 font-bold text-ink-inverse" >Demander un devis</LienDevis>
            </nav>
        </dialog>
    </header>
  );
}
