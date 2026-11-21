import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getServicesParUnivers, universServices, type UniversService } from "@/content/services";
import { BlocAppel } from "@/components/blocs/bloc-appel";
import { FilAriane } from "@/components/navigation/fil-ariane";
import { Carte } from "@/components/ui/carte";
import { Section } from "@/components/ui/section";

export const dynamicParams = false;

export function generateStaticParams() {
  return universServices.map((univers) => ({ slug: univers.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const univers = universServices.find((item) => item.slug === slug);
  if (!univers) return {};
  return { title: univers.titre, description: `${univers.resume} Intervention autour de Rochegude avec Philippe Rénovation.` };
}

export default async function PageService({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const univers = universServices.find((item) => item.slug === slug);
  if (!univers) notFound();
  const services = getServicesParUnivers(univers.slug as UniversService);

  return (
    <>
      <Section as="div">
        <FilAriane elements={[{ label: "Services", href: "/services" }, { label: univers.titre }]} />
        <div className="mb-12 mt-10 max-w-3xl">
          <h1 className="mb-5">{univers.titre}</h1>
          <p className="text-[var(--font-size-lead)] text-ink-muted">{univers.resume}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Carte key={service.slug} className="group overflow-hidden !p-0">
              {service.image && (
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.largeur}
                    height={service.image.hauteur}
                    sizes="(min-width: 1024px) 27rem, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-surface font-extrabold text-brand shadow-card">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              )}
              <div className="p-6">
                {!service.image && <span className="mb-6 grid h-10 w-10 place-items-center rounded-full bg-brand-subtle text-sm font-extrabold text-brand">{String(index + 1).padStart(2, "0")}</span>}
                <h2 className="mb-3 text-[var(--font-size-h3)]">{service.titre}</h2>
                <p className="text-ink-muted">{service.resume}</p>
              </div>
            </Carte>
          ))}
        </div>
      </Section>
      <BlocAppel />
    </>
  );
}
