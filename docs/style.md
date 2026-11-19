# Inventaire du style actuel

## Sources et niveau de confiance

Le thème identifié est Roofix avec Elementor. La documentation publique du thème indique Montserrat et Roboto. Aucun fichier local WordPress n’a été fourni et le serveur n’a pas permis de télécharger les feuilles `post-*.css`.

Pour la phase 1, les typographies Montserrat et Roboto sont conservées via `next/font`. La palette est alignée sur la capture du site historique fournie le 17 novembre 2026 : orange vif, gris anthracite, blanc et gris neutres. Les valeurs ont été relevées visuellement et devront encore être comparées au CSS source s’il est fourni.

## Éléments observés à conserver

- Identité d’artisan local et nom « Philippe Rénovation », sous réserve de validation.
- Palette de métier à fort contraste autour d’un orange d’action, d’un gris anthracite, du blanc et de gris neutres.
- Logo existant comme point de départ, après récupération du fichier source et validation de sa lisibilité.
- Photographies de toitures régionales en tuiles canal ou romanes.
- Boutons d’action pleins, immédiatement reconnaissables.
- Composition robuste et sobre adaptée à un artisan du bâtiment.

## Tokens observés ou à extraire

| Catégorie | Valeur actuelle | Confiance | Décision proposée |
|---|---:|---|---|
| Token | Valeur phase 1 | Source/statut |
|---|---:|---|
| Police de titres | Montserrat 600–800 | Roofix ; conservée et auto-hébergée au build par `next/font`. |
| Police de texte | Roboto 400–700 | Roofix ; conservée et auto-hébergée au build par `next/font`. |
| `brand` | `#d63a00` | Orange unique du site, proche de l’identité historique et compatible AA avec du texte blanc. |
| `brand-hover` | `#9f3000` | Orange de survol accessible. |
| `brand-subtle` | `#fffaf8` | Fond orange très clair. |
| `accent` | `#d63a00` | Même orange que `brand`, utilisé pour les éléments décoratifs. |
| `ink` | `#252a31` | Gris anthracite principal. |
| `ink-muted` | `#525866` | Gris secondaire. |
| `surface` | `#ffffff` | Blanc observé. |
| `surface-muted` | `#f3f4f6` | Gris clair neutre. |
| `surface-dark` | `#3d424a` | Gris anthracite relevé sur la capture. |
| `border` | `#d5d7da` | Gris de séparation. |
| `focus` | `#175cd3` | Bleu choisi pour rester distinct de l’orange. |
| `rating` | `#f5b301` | Jaune réservé aux étoiles de notation. |
| Rayon boutons | `6 px` | Provisoire. |
| Rayon cartes | `8 px` | Provisoire. |
| Largeur contenu | `80 rem` | Recommandation de phase 0 appliquée. |

## Échelle retenue en phase 1

- texte courant : 16–18 px, interligne 1,6 ;
- petits textes : jamais moins de 14 px ;
- titres fluides sans rupture brutale entre mobile et bureau ;
- conteneur principal de 80 rem ;
- espacement basé sur une échelle de 4 px ;
- rayons de 6 à 8 px ;
- focus de 3 px avec décalage visible ;
- superposition sombre sur les photos afin d’assurer le contraste du texte.

## Contrastes vérifiés

Calcul WCAG 2.1 mis à jour le 17 novembre 2026 :

| Texte | Fond | Ratio | Résultat |
|---|---|---:|---|
| `#ffffff` | `#d63a00` | 4,70:1 | AA, y compris texte normal. |
| `#ffffff` | `#9f3000` | 7,25:1 | AAA. |
| `#252a31` | `#ffffff` | 14,44:1 | AAA. |
| `#525866` | `#ffffff` | 7,13:1 | AAA. |
| `#ffffff` | `#3d424a` | 10,11:1 | AAA. |
| `#d63a00` | `#fffaf8` | 4,54:1 | AA, y compris texte normal. |
| `#175cd3` | `#ffffff` | 5,99:1 | AA pour l’indicateur de focus. |
| `#252a31` | `#f3f4f6` | 13,12:1 | AAA. |

## Logo

Fichiers observés : `logo-dark.png` et `logo-artisan-png.png`. Il faut obtenir le fichier vectoriel ou la meilleure source disponible : `[À FOURNIR : logo original SVG, PDF ou PNG haute définition et autorisation d’usage]`.

Le logo « garantie décennale » ne doit pas être employé seul comme élément de réassurance. Le nom de l’assureur, la référence du contrat et la zone couverte doivent être présentés en texte après validation.

## Corrections nécessaires

- Vérifier tous les couples texte/fond avec WCAG 2.1 AA.
- Éliminer le texte posé directement sur des images non assombries.
- Remplacer le slider par un seul héros stable.
- Unifier rayons, ombres, tailles et styles de boutons.
- Éviter les titres tout en capitales et les variations typographiques arbitraires.
- Prévoir des états focus, survol, actif, erreur et désactivé.
- Auto-héberger les polices et limiter les graisses chargées.
- Retirer les images de démonstration ou provenant d’autres entreprises.

## Points non vérifiés

- Variables `--e-global-color-*` et `--e-global-typography-*`.
- Tailles, graisses, interlignes et espacements réellement configurés dans Elementor.
- CSS du thème enfant et éventuelles surcharges.
- Fichier source du logo et licence des polices.
- Comparaison des tokens relevés visuellement avec les valeurs historiques exactes du CSS.

