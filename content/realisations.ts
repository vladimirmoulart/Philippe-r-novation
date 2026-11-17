export type PhotoRealisation = {
  src: string;
  alt: string;
  largeur: number;
  hauteur: number;
};

export type Realisation = {
  slug: string;
  titre: string;
  ville?: string;
  categorie: "Toiture" | "Gouttière et zinguerie" | "Façade" | "Peinture";
  resume: string;
  travaux: readonly string[];
  photo: PhotoRealisation;
};

// Photos ajoutées par le client. Ville, travaux et droits restent à confirmer.
export const realisations: readonly Realisation[] = [
  {
    slug: "toiture-tuiles-faitage",
    titre: "Couverture en tuiles et lignes de faîtage",
    categorie: "Toiture",
    resume: "Vue rapprochée d’une couverture en tuiles et de ses lignes de faîtage.",
    travaux: [],
    photo: { src: "/images/realisations/toiture-tuiles-faitage.webp", alt: "Couverture en tuiles avec lignes de faîtage", largeur: 1600, hauteur: 1200 },
  },
  {
    slug: "facade-maison-claire",
    titre: "Façade claire d’une maison",
    categorie: "Façade",
    resume: "Vue générale de la façade principale de la maison.",
    travaux: [],
    photo: { src: "/images/realisations/facade-maison-claire.webp", alt: "Façade claire d’une maison avec encadrements de fenêtres", largeur: 720, hauteur: 531 },
  },
  {
    slug: "toiture-tuiles-vue-ensemble",
    titre: "Vue d’ensemble d’une toiture en tuiles",
    categorie: "Toiture",
    resume: "Vue en hauteur d’une couverture en tuiles avec faîtages et arêtiers.",
    travaux: [],
    photo: { src: "/images/realisations/toiture-tuiles-vue-ensemble.webp", alt: "Vue d’ensemble d’une toiture en tuiles", largeur: 1600, hauteur: 1200 },
  },
  {
    slug: "toiture-tuiles-fenetre-de-toit",
    titre: "Toiture en tuiles avec fenêtre de toit",
    categorie: "Toiture",
    resume: "Vue panoramique d’une couverture en tuiles intégrant une fenêtre de toit.",
    travaux: [],
    photo: { src: "/images/realisations/toiture-tuiles-fenetre-de-toit.webp", alt: "Couverture en tuiles avec une fenêtre de toit", largeur: 1600, hauteur: 778 },
  },
  {
    slug: "toiture-tuiles-raccords",
    titre: "Raccords d’une toiture en tuiles",
    categorie: "Toiture",
    resume: "Vue d’une couverture en tuiles et de ses raccords entre plusieurs pans.",
    travaux: [],
    photo: { src: "/images/realisations/toiture-tuiles-raccords.webp", alt: "Raccords entre plusieurs pans d’une toiture en tuiles", largeur: 1600, hauteur: 1200 },
  },
  {
    slug: "facade-pignon-clair",
    titre: "Pignon et façade claire",
    categorie: "Façade",
    resume: "Vue latérale d’une maison avec pignon et façade de teinte claire.",
    travaux: [],
    photo: { src: "/images/realisations/facade-pignon-clair.webp", alt: "Pignon et façade claire d’une maison", largeur: 720, hauteur: 531 },
  },
  {
    slug: "facade-etat-initial",
    titre: "État d’une façade avec traces sombres",
    categorie: "Façade",
    resume: "Photographie montrant les traces présentes sur une partie de la façade.",
    travaux: [],
    photo: { src: "/images/realisations/facade-etat-initial.webp", alt: "Façade présentant des traces sombres", largeur: 720, hauteur: 521 },
  },
];
