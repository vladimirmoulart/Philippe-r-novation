import Image from "next/image";
import Link from "next/link";
import { entreprise } from "@/content/entreprise";
import { realisations } from "@/content/realisations";
import { getServicesParUnivers, universServices } from "@/content/services";
import { BlocAppel } from "@/components/blocs/bloc-appel";
import { LienTelephone } from "@/components/liens/lien-telephone";
import { LienDevis } from "@/components/liens/lien-devis";
import { Carte } from "@/components/ui/carte";
import { Section } from "@/components/ui/section";

export default function Accueil() {
  const selectionRealisations = realisations.slice(0, 3);
  const emplacementsVides = Array.from({ length: 3 - selectionRealisations.length });

  return (
    <>
      <Section className="hero-modern relative overflow-hidden bg-surface-dark text-ink-inverse">
        <Image
          src="/images/accueil/couvreur-pose-tuiles-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-surface-dark/80" aria-hidden="true" />
        <div className="relative z-10 grid min-h-[36rem] items-center gap-12 py-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.65fr)] lg:py-16">
          <div className="max-w-4xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-inverse/20 bg-ink-inverse/10 px-4 py-2 text-sm font-bold text-ink-inverse">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Artisan à Rochegude
            </p>
            <h1 className="mb-7 max-w-4xl tracking-[-0.035em]">Couvreur à Rochegude <span className="text-accent">—</span> Urgence fuite 7 j/7</h1>
            <p className="mb-9 max-w-2xl text-[var(--font-size-lead)] text-ink-inverse/80">Toiture, gouttière, zinguerie, façade et peinture dans le secteur de Rochegude.</p>
            <div className="flex flex-wrap gap-3">
              <LienTelephone e164={entreprise.telephones.urgence.e164} contexte="hero_accueil" className="inline-flex min-h-12 items-center rounded-button bg-brand px-6 py-3 font-bold text-ink-inverse shadow-raised transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-brand-hover">Appeler maintenant</LienTelephone>
              <LienDevis contexte="hero_accueil" className="inline-flex min-h-12 items-center rounded-button border border-ink-inverse/35 bg-ink-inverse/10 px-6 py-3 font-bold text-ink-inverse backdrop-blur-sm transition-colors hover:bg-ink-inverse/20">Demander un devis</LienDevis>
            </div>
          </div>

          <aside className="rounded-card border border-ink-inverse/15 bg-ink-inverse/10 p-6 shadow-raised backdrop-blur-md sm:p-8" aria-label="Contact rapide">
            <p className="mb-2 text-sm font-bold text-ink-inverse/65">Besoin d’une intervention ?</p>
            <p className="mb-5 font-display text-2xl font-extrabold">Un contact direct, sans intermédiaire.</p>
            <LienTelephone e164={entreprise.telephones.urgence.e164} contexte="carte_hero" className="mb-7 block font-display text-2xl font-extrabold text-ink-inverse underline decoration-brand decoration-2 underline-offset-8">{entreprise.telephones.urgence.display}</LienTelephone>
            <div className="grid gap-3 border-t border-ink-inverse/15 pt-5 text-sm text-ink-inverse/75">
              {entreprise.horaires.map((horaire) => (
                <div key={horaire.jours} className="flex items-start justify-between gap-4">
                  <span>{horaire.jours}</span><strong className="text-right text-ink-inverse">{horaire.heures}</strong>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      <section className="border-b border-border bg-surface px-4 sm:px-6 lg:px-8" aria-label="Repères sur Philippe Rénovation">
        <div className="mx-auto grid max-w-content divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center px-6 py-7 text-center">
            <p className="font-display text-3xl font-extrabold text-brand">5/5</p>
            <div className="mt-1 flex gap-1 text-xl leading-none text-rating" aria-hidden="true">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <span className="sr-only">Note de cinq étoiles sur cinq</span>
            <p className="mt-1 text-sm font-bold text-ink-muted">avis clients</p>
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-7 text-center">
            <p className="font-display text-3xl font-extrabold text-brand">7 j/7</p>
            <p className="mt-1 text-sm font-bold text-ink-muted">urgences fuite de toiture</p>
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-7 text-center">
            <p className="font-display text-3xl font-extrabold text-brand">4 domaines</p>
            <p className="mt-1 text-sm font-bold text-ink-muted">toiture, zinguerie, façade, peinture</p>
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-7 text-center">
            <p className="font-display text-3xl font-extrabold text-brand">3 départements</p>
            <p className="mt-1 text-sm font-bold text-ink-muted">Drôme, Gard et Vaucluse</p>
          </div>
        </div>
      </section>

      <Section className="bg-surface-muted">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-extrabold text-brand">Nos services</p>
            <h2 className="mb-4 tracking-[-0.025em]">Une réponse adaptée à chaque partie du bâtiment</h2>
            <p className="text-lg text-ink-muted">Quatre pages thématiques rassemblent les métiers de Philippe Rénovation.</p>
          </div>
          <Link href="/services" className="inline-flex min-h-11 items-center self-start font-bold text-brand underline-offset-4 hover:underline">Voir tous les services</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {universServices.map((univers, index) => (
            <Carte key={univers.slug} className="group flex min-h-72 flex-col overflow-hidden">
              <div className="mb-8 flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-subtle font-display text-sm font-extrabold text-brand">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mb-3">{univers.titre}</h3>
              <p className="mb-4 text-ink-muted">{univers.resume}</p>
              <p className="mb-6 text-sm font-bold text-ink-muted">{getServicesParUnivers(univers.slug).length} métiers sur une seule page</p>
              <Link href={`/services/${univers.slug}`} className="mt-auto font-bold text-brand underline-offset-4 hover:underline">Découvrir ce thème<span className="sr-only"> : {univers.titre}</span></Link>
            </Carte>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-extrabold text-brand">Nos réalisations</p>
            <h2 className="mb-4 tracking-[-0.025em]">Un aperçu de nos chantiers</h2>
            <p className="text-lg text-ink-muted">Les réalisations sont publiées avec leur ville et la nature des travaux après validation des photographies.</p>
          </div>
          <Link href="/realisations" className="inline-flex min-h-11 items-center self-start font-bold text-brand underline-offset-4 hover:underline">Voir toutes les réalisations</Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {selectionRealisations.map((realisation) => (
            <article key={realisation.slug} className="group overflow-hidden rounded-card border border-border bg-surface shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand/35 hover:shadow-raised">
              <div className="aspect-[4/3] overflow-hidden bg-surface-muted">
                <Image src={realisation.photo.src} alt={realisation.photo.alt} width={realisation.photo.largeur} height={realisation.photo.hauteur} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <p className="mb-3 text-sm font-bold text-brand">{realisation.categorie} · {realisation.ville}</p>
                <h3 className="mb-3">{realisation.titre}</h3>
                <p className="text-ink-muted">{realisation.resume}</p>
              </div>
            </article>
          ))}

          {emplacementsVides.map((_, index) => (
            <article key={`realisation-en-preparation-${index + 1}`} className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
              <div className="grid aspect-[4/3] place-items-center bg-surface-muted">
                <div className="relative h-24 w-32" aria-hidden="true">
                  <div className="absolute inset-x-0 bottom-0 h-16 rounded-card border-2 border-border bg-surface" />
                  <div className="absolute left-5 top-3 h-16 w-24 -rotate-12 rounded-card border-2 border-brand bg-brand-subtle" />
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 text-sm font-bold text-brand">Réalisation {String(selectionRealisations.length + index + 1).padStart(2, "0")}</p>
                <h3 className="mb-3">Chantier en cours de validation</h3>
                <p className="text-ink-muted">Photographie, localisation et description à confirmer avant publication.</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <BlocAppel />
    </>
  );
}
