"use client";

import { useEffect, useState } from "react";

export function BoutonRetourHaut() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function gererDefilement() {
      setVisible(window.scrollY > 320);
    }

    window.addEventListener("scroll", gererDefilement, { passive: true });
    return () => window.removeEventListener("scroll", gererDefilement);
  }, []);

  function revenirEnHaut() {
    const mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: mouvementReduit ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={revenirEnHaut}
      aria-label="Revenir en haut de la page"
      title="Haut de page"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-20 right-4 z-30 grid h-12 w-12 place-items-center rounded-full border border-ink-inverse/20 bg-surface-dark/90 text-ink-inverse shadow-raised backdrop-blur-md transition-[opacity,transform,background-color,border-color] duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand md:bottom-6 md:right-6 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 14 6-6 6 6" />
      </svg>
    </button>
  );
}
