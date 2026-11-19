export const universServices = [
  { slug: "toiture", titre: "Toiture", resume: "Pose, rénovation, entretien et réparation de la couverture." },
  { slug: "gouttiere-zinguerie", titre: "Gouttière et zinguerie", resume: "Évacuation des eaux pluviales et finitions métalliques de toiture." },
  { slug: "facade", titre: "Façade", resume: "Ravalement, nettoyage et protection des façades." },
  { slug: "peinture", titre: "Peinture", resume: "Préparation et peinture des supports intérieurs et extérieurs." },
] as const;

export type UniversService = (typeof universServices)[number]["slug"];

export type Service = {
  slug: string;
  titre: string;
  resume: string;
  univers: UniversService;
};

export const services = [
  {
    slug: "pose-renovation-toiture",
    titre: "Pose et rénovation de toiture",
    resume: "Pose, rénovation et remplacement ponctuel de tuiles après examen de la couverture.",
    univers: "toiture",
  },
  {
    slug: "charpente",
    titre: "Charpente",
    resume: "Contrôle et travaux de charpente adaptés à la structure existante.",
    univers: "toiture",
  },
  {
    slug: "fenetre-de-toit",
    titre: "Fenêtre de toit",
    resume: "Création ou remplacement d’une fenêtre de toit selon la configuration.",
    univers: "toiture",
  },
  {
    slug: "reparation-cheminee",
    titre: "Réparation de cheminée",
    resume: "Intervention sur les éléments de cheminée liés à l’étanchéité de la toiture.",
    univers: "toiture",
  },
  {
    slug: "nettoyage-protection-toiture",
    titre: "Nettoyage et protection de toiture",
    resume: "Nettoyage, démoussage et protection choisis après diagnostic du support.",
    univers: "toiture",
  },
  {
    slug: "reparation-toiture",
    titre: "Réparation de toiture",
    resume: "Recherche de l’origine du désordre et réparation ciblée de la couverture.",
    univers: "toiture",
  },
  {
    slug: "gouttiere",
    titre: "Gouttière",
    resume: "Pose, réparation et nettoyage des éléments d’évacuation des eaux pluviales.",
    univers: "gouttiere-zinguerie",
  },
  {
    slug: "zinguerie",
    titre: "Zinguerie",
    resume: "Travaux de finition et d’étanchéité métallique autour de la toiture.",
    univers: "gouttiere-zinguerie",
  },
  {
    slug: "ravalement-facade",
    titre: "Ravalement de façade",
    resume: "Remise en état de la façade après examen des supports et désordres.",
    univers: "facade",
  },
  {
    slug: "nettoyage-protection-facade",
    titre: "Nettoyage et protection de façade",
    resume: "Nettoyage et protection compatibles avec la nature de la façade.",
    univers: "facade",
  },
  {
    slug: "peinture-interieure",
    titre: "Peinture intérieure",
    resume: "Préparation des supports et travaux de peinture dans les pièces intérieures.",
    univers: "peinture",
  },
  {
    slug: "peinture-exterieure",
    titre: "Peinture extérieure",
    resume: "Préparation et peinture des boiseries et ferronneries extérieures.",
    univers: "peinture",
  },
] as const satisfies readonly Service[];

export function getServicesParUnivers(univers: UniversService) {
  return services.filter((service) => service.univers === univers);
}
