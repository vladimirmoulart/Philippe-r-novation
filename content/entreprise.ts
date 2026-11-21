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
  nomJuridique: "WINAUD TUMBACH Philippe",
  nomCommercial: "Philippe Peintures Winaud",
  formeJuridique: "Entrepreneur individuel",
  dirigeant: "Philippe WINAUD TUMBACH",
  dateCreation: "2003-07-03",
  siren: "449 266 824",
  siret: "449 266 824 00035",
  euid: "FR2602.449266824",
  rcs: "449 266 824 R.C.S. Romans",
  codeApe: "43.99C",
  activitePrincipale: "Travaux de maçonnerie générale et gros œuvre de bâtiment",
  adresse: {
    voie: "89 chemin de la Gravière",
    complement: "Zone artisanale",
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
  assuranceDecennale: {
    assureur: "Axeria IARD",
    siege: "129 avenue Félix-Faure, 69003 Lyon",
    adressePostale: "26 rue du Général-Mouton-Duvernet, 69003 Lyon",
    contrat: "ORUS RCDA n° 278506618",
    validiteDu: "2025-12-18",
    validiteAu: "2026-12-17",
    zone: "France métropolitaine",
    activitesCouvertes: ["Couverture", "Charpente et structure en bois"],
    gestionnaire: "Orus",
    gestionnaireOrias: "21006562",
    intermediaire: "Calipso Assurances",
    intermediaireOrias: "16003683",
  },
} as const;
