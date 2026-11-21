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
  image?: {
    src: string;
    alt: string;
    largeur: number;
    hauteur: number;
  };
};

export const services: readonly Service[] = [
  {
    slug: "pose-renovation-toiture",
    titre: "Pose et rénovation de toiture",
    resume: "Pose, rénovation et remplacement ponctuel de tuiles après examen de la couverture.",
    univers: "toiture",
    image: {
      src: "/images/services/toiture/renovation-couverture-tuiles.webp",
      alt: "Toiture rénovée en tuiles avec faîtage et raccord de cheminée",
      largeur: 1200,
      hauteur: 900,
    },
  },
  {
    slug: "charpente",
    titre: "Charpente",
    resume: "Contrôle et travaux de charpente adaptés à la structure existante.",
    univers: "toiture",
    image: {
      src: "/images/services/toiture/charpente-bois-traditionnelle.webp",
      alt: "Structure de charpente traditionnelle en bois",
      largeur: 1024,
      hauteur: 768,
    },
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
    image: {
      src: "/images/services/toiture/reparation-souche-cheminee-toiture.webp",
      alt: "Souche de cheminée réparée et enduite sur une toiture en tuiles",
      largeur: 536,
      hauteur: 850,
    },
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
    image: {
      src: "/images/services/toiture/remplacement-tuile-couverture.webp",
      alt: "Remplacement manuel d’une tuile sur une couverture",
      largeur: 1024,
      hauteur: 768,
    },
  },
  {
    slug: "gouttiere",
    titre: "Gouttière",
    resume: "Pose, réparation et nettoyage des éléments d’évacuation des eaux pluviales.",
    univers: "gouttiere-zinguerie",
    image: {
      src: "/images/services/gouttiere-zinguerie/pose-gouttiere-metallique-toiture.webp",
      alt: "Pose d’une gouttière métallique sous une couverture",
      largeur: 1400,
      hauteur: 934,
    },
  },
  {
    slug: "zinguerie",
    titre: "Zinguerie",
    resume: "Travaux de finition et d’étanchéité métallique autour de la toiture.",
    univers: "gouttiere-zinguerie",
    image: {
      src: "/images/services/gouttiere-zinguerie/zinguerie-raccord-etancheite-toiture.webp",
      alt: "Raccords de zinguerie autour d’un mur et d’une toiture en tuiles",
      largeur: 1024,
      hauteur: 768,
    },
  },
  {
    slug: "ravalement-facade",
    titre: "Ravalement de façade",
    resume: "Remise en état de la façade après examen des supports et désordres.",
    univers: "facade",
    image: {
      src: "/images/services/facade/ravalement-facade-maison.webp",
      alt: "Application d’un revêtement lors du ravalement d’une façade de maison",
      largeur: 1110,
      hauteur: 600,
    },
  },
  {
    slug: "nettoyage-protection-facade",
    titre: "Nettoyage et protection de façade",
    resume: "Nettoyage et protection compatibles avec la nature de la façade.",
    univers: "facade",
    image: {
      src: "/images/services/facade/nettoyage-facade-maison.webp",
      alt: "Nettoyage partiel d’une façade présentant des traces sombres",
      largeur: 720,
      hauteur: 521,
    },
  },
  {
    slug: "peinture-interieure",
    titre: "Peinture intérieure",
    resume: "Préparation des supports et travaux de peinture dans les pièces intérieures.",
    univers: "peinture",
    image: {
      src: "/images/services/peinture/peinture-murs-interieur-maison.webp",
      alt: "Pièce intérieure après mise en peinture des murs",
      largeur: 1266,
      hauteur: 702,
    },
  },
  {
    slug: "peinture-exterieure",
    titre: "Peinture extérieure",
    resume: "Préparation et peinture des boiseries et ferronneries extérieures.",
    univers: "peinture",
    image: {
      src: "/images/services/peinture/peinture-portail-metallique-exterieur.webp",
      alt: "Portail métallique extérieur peint en vert",
      largeur: 538,
      hauteur: 866,
    },
  },
] as const;

export function getServicesParUnivers(univers: UniversService) {
  return services.filter((service) => service.univers === univers);
}
