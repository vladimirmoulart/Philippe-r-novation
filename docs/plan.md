# Plan cible et redirections

## Arborescence cible proposée

- `/` — Accueil.
- `/urgence-fuite-toiture` — Urgence fuite 7 j/7.
- `/services` — Vue d’ensemble.
- `/services/toiture` — pose, rénovation, charpente, fenêtre de toit, cheminée, entretien et réparation présentés sur une page unique.
- `/services/gouttiere-zinguerie` — gouttière et zinguerie sur une page unique.
- `/services/facade` — ravalement, nettoyage et protection sur une page unique.
- `/services/peinture` — peinture intérieure, boiseries et ferronneries sur une page unique.

Les 13 métiers restent des données structurées et des sections éditoriales, sans route individuelle.
- `/villes/{ville}` — 12 pages proposées : Rochegude, Bollène, Orange, Pierrelatte, Saint-Paul-Trois-Châteaux, Valréas, Vaison-la-Romaine, Nyons, Bagnols-sur-Cèze, Pont-Saint-Esprit, Suze-la-Rousse et Sainte-Cécile-les-Vignes.
- `/realisations`.
- `/demande-de-devis`.
- `/etre-rappele`.
- `/a-propos`.
- `/contact`.
- `/mentions-legales`.
- `/politique-de-confidentialite`.
- `/404` — route technique rendue par Next.js.

Pont-Saint-Esprit est inclus dans la cible bien qu’aucune ancienne page correspondante n’ait été repérée dans le pied de page examiné. Chaque page ville ne sera publiée qu’avec des éléments réellement spécifiques et des réalisations vérifiées.

## Gabarits

### Global

En-tête avec appel et devis, navigation clavier, fil d’Ariane hors accueil, pied de page sans titres artificiels pour les communes, barre mobile fixe « Appeler | Devis », puis bloc final appel + formulaire court.

### Accueil

Héros local et urgence sans slider, univers de services, déroulé d’intervention, zone réelle, réalisations vérifiées, page d’avis documentés, garanties factuelles, urgence, FAQ et appel à l’action.

### Service

H1 unique, besoin client, situations prises en charge, diagnostic et déroulé, prix `[À FOURNIR]`, garanties factuelles, réalisations liées, zone, FAQ, appel et formulaire court.

### Ville

H1 service/zone, spécificités locales prouvées, types de couvertures observés, contraintes d’accès ou climatiques vérifiées, réalisations locales `[À FOURNIR]`, services pertinents, FAQ non générique, appel et formulaire court.

### Réalisation

Ville, date, besoin, travaux, matériaux si confirmés, photos réelles avec légendes. Aucune image de banque.

### Formulaire

Labels visibles, validation accessible, consentement informé, honeypot, limites de pièces jointes, politique liée et page de confirmation mesurable sans traceur intrusif.

## Plan de redirections 301

| Ancienne source | Nouvelle destination |
|---|---|
| `/services/pose-de-toiture/` | `/services/toiture` |
| `/services/renovation-de-toiture/` | `/services/toiture` |
| `/services/changement-de-tuile/` | `/services/toiture` |
| `/services/nettoyage-de-toiture/` | `/services/toiture` |
| `/services/traitement-hydrofuge/` | `/services/toiture` |
| `/services/peinture-sur-tuile/` | `/services/toiture` |
| `/services/isolation-de-toiture/` | `/services/toiture` |
| `/services/reparation-fuite-de-toiture/` | `/urgence-fuite-toiture` |
| `/services/pose-de-velux/` | `/services/toiture` |
| `/services/charpente/` | `/services/toiture` |
| `/services/reparation-cheminee/` | `/services/toiture` |
| `/services/pose-de-gouttiere/` | `/services/gouttiere-zinguerie` |
| `/services/nettoyage-de-gouttiere/` | `/services/gouttiere-zinguerie` |
| `/services/zingerie/` | `/services/gouttiere-zinguerie` |
| `/services/ravalement-de-facade/` | `/services/facade` |
| `/services/nettoyage-de-facade/` | `/services/facade` |
| `/services/hydrofuge-facade/` | `/services/facade` |
| `/services/peinture-interieur/` | `/services/peinture` |
| `/services/peinture-sur-ferronnerie/` | `/services/peinture` |
| `/services/peinture-boiserie/` | `/services/peinture` |
| `/demande-de-devis/` | `/demande-de-devis` |

### Pages locales historiques

- Toute combinaison historique d’un service avec l’une des 12 villes conservées redirige vers `/villes/{ville}` si la page cible répond réellement à l’intention locale.
- Pour une ville supprimée, la page redirige vers le service cible correspondant, jamais vers l’accueil.
- Les anciennes pages « réparation fuite » redirigent vers `/urgence-fuite-toiture`.
- Les variantes fautives, accents, codes postaux et slash final sont normalisés en une seule étape autant que possible.
- Les doublons Saint-Alexandre et liens erronés sont consolidés.

Le fichier exécutable de redirections ne sera généré qu’après récupération exhaustive du sitemap et choix de l’hébergement.

## Points non vérifiés

- Exhaustivité des sources à rediriger.
- Compatibilité entre le choix d’hébergement et la stratégie de formulaires.
- Disponibilité de contenu réellement spécifique pour les 12 villes.
- Autorisation d’employer la marque Velux dans les contenus et métadonnées.

