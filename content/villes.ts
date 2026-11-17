export type Ville = {
  slug: string;
  nom: string;
  codePostal: string;
};

export const villes = [
  { slug: "rochegude", nom: "Rochegude", codePostal: "26790" },
  { slug: "bollene", nom: "Bollène", codePostal: "84500" },
  { slug: "orange", nom: "Orange", codePostal: "84100" },
  { slug: "pierrelatte", nom: "Pierrelatte", codePostal: "26700" },
  { slug: "saint-paul-trois-chateaux", nom: "Saint-Paul-Trois-Châteaux", codePostal: "26130" },
  { slug: "valreas", nom: "Valréas", codePostal: "84600" },
  { slug: "vaison-la-romaine", nom: "Vaison-la-Romaine", codePostal: "84110" },
  { slug: "nyons", nom: "Nyons", codePostal: "26110" },
  { slug: "bagnols-sur-ceze", nom: "Bagnols-sur-Cèze", codePostal: "30200" },
  { slug: "pont-saint-esprit", nom: "Pont-Saint-Esprit", codePostal: "30130" },
  { slug: "suze-la-rousse", nom: "Suze-la-Rousse", codePostal: "26790" },
  { slug: "sainte-cecile-les-vignes", nom: "Sainte-Cécile-les-Vignes", codePostal: "84290" },
] as const satisfies readonly Ville[];
