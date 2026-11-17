"use client";

import { useState, type FormEvent } from "react";
import { Bouton } from "@/components/ui/bouton";
import { track } from "@/lib/tracking";

export function FormulaireRappelCourt() {
  const [message, setMessage] = useState("");

  function soumettre(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    track("form_submit", { formulaire: "rappel_court" });
    setMessage("Le formulaire sera activé lors de la phase 5. Pour le moment, appelez directement Philippe Rénovation.");
  }

  return (
    <form onSubmit={soumettre} className="grid gap-4" aria-describedby="statut-rappel">
      <div>
        <label htmlFor="rappel-nom" className="mb-1 block font-bold">Nom <span aria-hidden="true">*</span></label>
        <input id="rappel-nom" name="nom" autoComplete="name" required aria-required="true" className="min-h-11 w-full rounded-button border border-border bg-surface px-3 py-2 text-ink" />
      </div>
      <div>
        <label htmlFor="rappel-telephone" className="mb-1 block font-bold">Téléphone <span aria-hidden="true">*</span></label>
        <input id="rappel-telephone" name="telephone" type="tel" autoComplete="tel" required aria-required="true" className="min-h-11 w-full rounded-button border border-border bg-surface px-3 py-2 text-ink" />
      </div>
      <div>
        <label htmlFor="rappel-creneau" className="mb-1 block font-bold">Créneau souhaité <span aria-hidden="true">*</span></label>
        <select id="rappel-creneau" name="creneau" required aria-required="true" className="min-h-11 w-full rounded-button border border-border bg-surface px-3 py-2 text-ink">
          <option value="">Choisir un créneau</option>
          <option value="matin">Matin</option>
          <option value="apres-midi">Après-midi</option>
          <option value="fin-journee">Fin de journée</option>
        </select>
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="rappel-site">Ne pas remplir ce champ</label>
        <input id="rappel-site" name="site" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="text-sm text-ink-muted">Les informations saisies ne sont pas encore transmises. La notice RGPD sera finalisée avec le point d’envoi.</p>
      <Bouton type="submit">Être rappelé</Bouton>
      <p id="statut-rappel" role="status" aria-live="polite" className="text-sm font-bold">{message}</p>
    </form>
  );
}
