import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { villes } from "@/content/villes";
import { BlocAppel } from "@/components/blocs/bloc-appel";
import { PageConstruction } from "@/components/pages/page-construction";

export const dynamicParams = false;

export function generateStaticParams() {
  return villes.map((ville) => ({ slug: ville.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ville = villes.find((item) => item.slug === slug);
  if (!ville) return {};
  return { title: `Couvreur à ${ville.nom}`, description: `Page locale de Philippe Rénovation pour les travaux de toiture, façade et peinture à ${ville.nom}.` };
}

export default async function PageVille({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ville = villes.find((item) => item.slug === slug);
  if (!ville) notFound();
  return <><PageConstruction titre={`Couvreur à ${ville.nom}`} /><BlocAppel /></>;
}
