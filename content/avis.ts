export type Avis = {
  auteur: string;
  date: string;
  texte: string;
  note?: number;
};

export const avis = [
  { auteur: "CATANI", date: "2025-02-27", texte: "Nettoyage facade+ hydrofuge façade travaux parfait Personnel compétent sérieux et sympathique à l ‘écoute Je recommande sans reserve" },
  { auteur: "Philippe", date: "2025-02-27", texte: "Entreprise sérieuse. Très bon travail. Je recommande" },
  { auteur: "Marcellin", date: "2024-11-13", texte: "Intervention rapide pour rénovation et travaux d’étanchéité toiture. Travail sérieux, toujours de bons conseils et équipe sympathique." },
  { auteur: "MIGNEA", date: "2024-09-14", texte: "Un grand merci à Philippe rénovation qui a fait un travail extraordinaire pour nos façades et terrasses A l’écoute de ses clients, personne très agréable et de confiance Nous vous le recommandons à 100%" },
  { auteur: "F. Mabire", date: "2024-08-30", texte: "Entreprise sérieuse, bon travail et bonne équipe." },
  { auteur: "Chailley A.", date: "2024-08-07", texte: "Intervention sur toiture rapide après une tempête, travail fait avec sérieux et compétence dans les règles de l’art, personnes sympathiques et fiables. Je recommande !" },
  { auteur: "Roussel Martial", date: "2024-06-19", texte: "Super service. Compétences et savoir faire ! Réparation de mon toit rapide. Travail soigné. Le chantier c’est très bien passé. A recommander sans problème. Merci pour tout." },
  { auteur: "Stéphanie", date: "2024-06-19", texte: "Entreprise sérieuse qui tient ses engagements, diagnostic, devis et intervention réalisés rapidement pour des travaux d’étanchéité de toiture et de peinture dans notre chambre. Travail soigné, équipe à l’écoute du client et sympathique. Je recommande !" },
  { auteur: "Bellon Blaise", date: "2024-04-20", texte: "Satisfait du travail merci encore pour les travaux de toiture" },
  { auteur: "Fabienne", date: "2024-02-24", texte: "Travail rapide et efficace, avec explication des interventions effectuées. Bon suivi après chantier. Equipe sympathique." },
] as const satisfies readonly Avis[];
