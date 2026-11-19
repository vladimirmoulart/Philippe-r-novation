# Décisions à valider

## 1. Hébergement — validé

Décision : export statique Next.js sur l’hébergement Hostinger/LiteSpeed actuel. Aucun traitement serveur Next ; formulaires via un point d’envoi à choisir, redirections et en-têtes dans `.htaccess`.

## 2. Envoi des formulaires

Recommandation : service transactionnel avec domaine authentifié et stockage temporaire maîtrisé, via route handler. Les photos devraient être limitées par type, taille et nombre, analysées côté serveur puis supprimées selon une durée documentée. Éviter le SMTP d’une boîte personnelle.

À choisir : prestataire, adresse destinataire, taille/nombre de photos, durée de conservation, sous-traitants et région d’hébergement.

## 3. Mesure d’audience et des conversions — orientation validée

Recommandation : solution sans cookie auto-hébergée ou européenne correctement configurée, avec événements pour clics téléphoniques, devis envoyés et rappels demandés. Plausible ou Umami sont préférables à GA4 pour éviter un bandeau lourd ; le choix final dépend du contrat, de l’hébergement et de la configuration réellement retenue.

Décision : solution sans cookie, à choisir précisément en phase 6. Une abstraction `track(event, data)` sans effet est intégrée dès la phase 1.

## 4. Marque et villes — validé

Marque : « Philippe Rénovation ».

Villes : Rochegude, Bollène, Orange, Pierrelatte, Saint-Paul-Trois-Châteaux, Valréas, Vaison-la-Romaine, Nyons, Bagnols-sur-Cèze, Pont-Saint-Esprit, Suze-la-Rousse et Sainte-Cécile-les-Vignes.

Condition de publication : contenu local vérifié et au moins un élément concret propre à chaque ville. Retirer toute ville sans matière réelle plutôt que produire une page interchangeable.

## 5. Regroupement des services — décision révisée

Décision révisée : quatre pages thématiques au lieu de pages dédiées à chaque sous-métier, plus la page autonome d’urgence.

- Toiture : pose, rénovation, changement de tuiles, charpente, fenêtre de toit, cheminée, nettoyage, protection et réparation.
- Urgence fuite : page conversion distincte.
- Gouttière et zinguerie : pose, nettoyage, réparation et zinguerie.
- Façade : ravalement, nettoyage et protection.
- Peinture : intérieur, boiseries et ferronneries.

Les 13 métiers restent présentés comme sections internes non cliquables. La peinture sur tuile reste une option de la page Toiture, uniquement après diagnostic et sans promesse d’étanchéité non prouvée.

## 6. Questions complémentaires indispensables

- Confirmer les horaires et le périmètre réel d’intervention.
- Choisir la procédure de publication des avis conforme à l’article L111-7-2.
- Confirmer si « devis gratuit » peut être affirmé partout.
- Déterminer si une page dédiée « Réparation de toiture » et la page « Urgence fuite » doivent coexister.
- Confirmer le propriétaire du domaine, l’accès DNS et le plan de bascule.
- Fournir la copie WordPress ou un export sitemap/médiathèque.

## Points non vérifiés

- Coûts et contraintes contractuelles des prestataires.
- Hébergement actuel exact chez Hostinger.
- Volume mensuel des formulaires et des photos.
- Besoin d’un tableau de bord d’audience partagé.

