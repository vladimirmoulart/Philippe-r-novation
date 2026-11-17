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
  date: string;
  categorie: "Toiture" | "Gouttière et zinguerie" | "Façade" | "Peinture";
  resume: string;
  travaux: readonly string[];
  photo: PhotoRealisation;
};

// Ajouter uniquement des chantiers réalisés par Philippe Rénovation et validés.
export const realisations: readonly Realisation[] = [];
