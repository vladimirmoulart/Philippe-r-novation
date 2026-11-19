export type Telephone = {
  label: string;
  display: string;
  e164: `+${number}`;
};

export type Horaire = {
  jours: string;
  heures: string;
};

export const entreprise = {
  nom: "Philippe Rénovation",
  adresse: {
    voie: "89 chemin de la Gravière",
    codePostal: "26790",
    ville: "Rochegude",
    pays: "France",
  },
  telephones: {
    fixe: {
      label: "Téléphone fixe",
      display: "04 90 30 85 07",
      e164: "+33490308507",
    },
    urgence: {
      label: "Téléphone mobile et urgences",
      display: "06 30 26 73 61",
      e164: "+33630267361",
    },
  } satisfies Record<string, Telephone>,
  email: "contact@toiture-drome-gard-vaucluse.fr",
  horaires: [
    { jours: "Du lundi au samedi", heures: "8h00–19h45" },
    { jours: "Dimanche", heures: "Urgences uniquement" },
  ] satisfies Horaire[],
  zone: "[À FOURNIR : rayon ou liste réaliste des communes desservies]",
  siret: "[À FOURNIR : SIRET]",
  assuranceDecennale:
    "[À FOURNIR : nom de l’assureur décennal, numéro de contrat, activités et zone géographique couvertes, période de validité]",
} as const;
