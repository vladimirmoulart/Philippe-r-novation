export type PhotoRealisation = {
  src: string;
  alt: string;
  largeur: number;
  hauteur: number;
};

export type Realisation = {
  slug: string;
  titre: string;
  ville: string;
  categorie: "Toiture" | "Gouttière et zinguerie" | "Façade" | "Peinture";
  resume: string;
  travaux: readonly string[];
  photo: PhotoRealisation;
};

// Photos, villes et travaux confirmés par le client. Les droits restent à confirmer.
export const realisations: readonly Realisation[] = [
  {
    slug: "peinture-toiture-teintes",
    titre: "Peinture sur toiture",
    ville: "Nyons",
    categorie: "Peinture",
    resume: "Présentation de différentes teintes de peinture pour une couverture en tuiles.",
    travaux: ["Peinture sur toiture"],
    photo: { src: "/images/realisations/peinture-toiture.jpg", alt: "Différentes teintes de peinture appliquées sur des tuiles", largeur: 720, hauteur: 640 },
  },
  {
    slug: "toiture-tuiles-faitage",
    titre: "Peinture sur tuiles",
    ville: "Rochegude",
    categorie: "Peinture",
    resume: "Peinture d’une couverture en tuiles.",
    travaux: ["Peinture sur tuiles"],
    photo: { src: "/images/realisations/toiture-tuiles-faitage.webp", alt: "Couverture en tuiles avec lignes de faîtage", largeur: 1600, hauteur: 1200 },
  },
  {
    slug: "facade-maison-claire",
    titre: "Peinture de façade",
    ville: "Bollène",
    categorie: "Façade",
    resume: "Peinture de la façade principale d’une maison.",
    travaux: ["Peinture de façade"],
    photo: { src: "/images/realisations/facade-maison-claire.webp", alt: "Façade claire d’une maison avec encadrements de fenêtres", largeur: 720, hauteur: 531 },
  },
  {
    slug: "toiture-tuiles-vue-ensemble",
    titre: "Peinture sur tuiles",
    ville: "Orange",
    categorie: "Peinture",
    resume: "Peinture d’une couverture en tuiles.",
    travaux: ["Peinture sur tuiles"],
    photo: { src: "/images/realisations/toiture-tuiles-vue-ensemble.webp", alt: "Vue d’ensemble d’une toiture en tuiles", largeur: 1600, hauteur: 1200 },
  },
  {
    slug: "toiture-tuiles-fenetre-de-toit",
    titre: "Peinture sur tuiles",
    ville: "Pierrelatte",
    categorie: "Peinture",
    resume: "Peinture d’une couverture en tuiles.",
    travaux: ["Peinture sur tuiles"],
    photo: { src: "/images/realisations/toiture-tuiles-fenetre-de-toit.webp", alt: "Couverture en tuiles avec une fenêtre de toit", largeur: 1600, hauteur: 778 },
  },
  {
    slug: "toiture-tuiles-raccords",
    titre: "Rénovation complète d’une toiture",
    ville: "Saint-Paul-Trois-Châteaux",
    categorie: "Toiture",
    resume: "Rénovation à neuf d’une couverture en tuiles.",
    travaux: ["Rénovation de toiture à neuf"],
    photo: { src: "/images/realisations/toiture-tuiles-raccords.webp", alt: "Raccords entre plusieurs pans d’une toiture en tuiles", largeur: 1600, hauteur: 1200 },
  },
  {
    slug: "facade-pignon-clair",
    titre: "Peinture de façade",
    ville: "Valréas",
    categorie: "Façade",
    resume: "Peinture d’une façade et de son pignon.",
    travaux: ["Peinture de façade"],
    photo: { src: "/images/realisations/facade-pignon-clair.webp", alt: "Pignon et façade claire d’une maison", largeur: 720, hauteur: 531 },
  },
  {
    slug: "facade-etat-initial",
    titre: "Nettoyage de façade",
    ville: "Vaison-la-Romaine",
    categorie: "Façade",
    resume: "Nettoyage d’une façade présentant des traces sombres.",
    travaux: ["Nettoyage de façade"],
    photo: { src: "/images/realisations/facade-etat-initial.webp", alt: "Façade présentant des traces sombres", largeur: 720, hauteur: 521 },
  },
];
