import Link from "next/link";
import { entreprise } from "@/content/entreprise";
import { villes } from "@/content/villes";
import { LienEmail } from "@/components/liens/lien-email";
import { LienTelephone } from "@/components/liens/lien-telephone";

export function Footer() {
  const annee = new Date().getFullYear();
  return (
    <footer className="bg-surface-dark pb-24 text-ink-inverse md:pb-0">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-xl font-extrabold">{entreprise.nom}</p>
          <address className="mt-4 not-italic text-ink-inverse/85">
            {entreprise.adresse.voie}<br />{entreprise.adresse.codePostal} {entreprise.adresse.ville}
          </address>
        </div>
        <div>
          <p className="mb-3 font-display text-lg font-bold">Nous contacter</p>
          <ul className="grid gap-2">
            <li><LienTelephone e164={entreprise.telephones.fixe.e164} contexte="footer" className="underline underline-offset-4">{entreprise.telephones.fixe.display}</LienTelephone></li>
            <li><LienTelephone e164={entreprise.telephones.urgence.e164} contexte="footer" className="underline underline-offset-4">{entreprise.telephones.urgence.display}</LienTelephone></li>
            <li className="break-all"><LienEmail email={entreprise.email} contexte="footer" className="underline underline-offset-4" /></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-display text-lg font-bold">Horaires</p>
          <dl className="grid gap-2 text-ink-inverse/85">
            {entreprise.horaires.map((horaire) => <div key={horaire.jours}><dt className="font-bold text-ink-inverse">{horaire.jours}</dt><dd>{horaire.heures}</dd></div>)}
          </dl>
        </div>
        <div>
          <p className="mb-3 font-display text-lg font-bold">Liens utiles</p>
          <ul className="grid gap-2">
            <li><Link href="/demande-de-devis" className="underline-offset-4 hover:underline">Demande de devis</Link></li>
            <li><Link href="/mentions-legales" className="underline-offset-4 hover:underline">Mentions légales</Link></li>
            <li><Link href="/politique-de-confidentialite" className="underline-offset-4 hover:underline">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-inverse/20">
        <div className="mx-auto max-w-content px-4 py-8 sm:px-6 lg:px-8">
          <p className="mb-4 font-bold">Communes desservies</p>
          <p className="text-sm leading-7 text-ink-inverse/80">{villes.map((ville) => ville.nom).join(" · ")}</p>
          <p className="mt-6 text-sm text-ink-inverse/70">© {annee} {entreprise.nom}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
