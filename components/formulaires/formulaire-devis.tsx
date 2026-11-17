"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { services } from "@/content/services";
import { Bouton } from "@/components/ui/bouton";
import { track } from "@/lib/tracking";

const champ = "min-h-11 w-full rounded-button border border-border bg-surface px-3 py-2 text-ink";

export function FormulaireDevis() {
  const [message, setMessage] = useState("");

  function soumettre(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    track("form_submit", { formulaire: "devis" });
    setMessage("Le formulaire sera activé lors de la phase 5. Aucun renseignement n’a été transmis.");
  }

  return (
    <form onSubmit={soumettre} className="grid gap-5" aria-describedby="aide-photos statut-devis">
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="devis-nom" className="mb-1 block font-bold">Nom <span aria-hidden="true">*</span></label><input id="devis-nom" name="nom" autoComplete="name" required aria-required="true" className={champ} /></div>
        <div><label htmlFor="devis-telephone" className="mb-1 block font-bold">Téléphone <span aria-hidden="true">*</span></label><input id="devis-telephone" name="telephone" type="tel" autoComplete="tel" required aria-required="true" className={champ} /></div>
        <div><label htmlFor="devis-email" className="mb-1 block font-bold">E-mail <span aria-hidden="true">*</span></label><input id="devis-email" name="email" type="email" autoComplete="email" required aria-required="true" className={champ} /></div>
        <div><label htmlFor="devis-code-postal" className="mb-1 block font-bold">Code postal <span aria-hidden="true">*</span></label><input id="devis-code-postal" name="codePostal" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}" required aria-required="true" className={champ} /></div>
      </div>
      <div>
        <label htmlFor="devis-service" className="mb-1 block font-bold">Service <span aria-hidden="true">*</span></label>
        <select id="devis-service" name="service" required aria-required="true" className={champ}>
          <option value="">Choisir un service</option>
          <option value="urgence-fuite">Urgence fuite de toiture</option>
          {services.map((service) => <option value={service.slug} key={service.slug}>{service.titre}</option>)}
        </select>
      </div>
      <div><label htmlFor="devis-message" className="mb-1 block font-bold">Votre besoin <span aria-hidden="true">*</span></label><textarea id="devis-message" name="message" rows={6} required aria-required="true" className={champ} /></div>
      <div>
        <label htmlFor="devis-photos" className="mb-1 block font-bold">Photos <span className="font-normal">(facultatif)</span></label>
        <input id="devis-photos" name="photos" type="file" multiple accept="image/jpeg,image/png,image/webp,image/heic" aria-describedby="aide-photos" className="block w-full rounded-button border border-border bg-surface p-3" />
        <p id="aide-photos" className="mt-2 text-sm text-ink-muted">Formats et limites : [À FOURNIR : nombre, formats et taille maximale des photos acceptées].</p>
      </div>
      <div className="hidden" aria-hidden="true"><label htmlFor="devis-site">Ne pas remplir ce champ</label><input id="devis-site" name="site" tabIndex={-1} autoComplete="off" /></div>
      <p className="text-sm text-ink-muted">Les données seront utilisées uniquement pour répondre à votre demande. Les modalités définitives seront précisées en phase 5. Consultez la <Link href="/politique-de-confidentialite" className="font-bold text-brand underline">politique de confidentialité</Link>.</p>
      <Bouton type="submit">Envoyer la demande de devis</Bouton>
      <p id="statut-devis" role="status" aria-live="polite" className="font-bold">{message}</p>
    </form>
  );
}
