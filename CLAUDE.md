# Philippe Rénovation — règles du projet

## Contexte et objectif

Refonte en code du site vitrine de Philippe Rénovation, artisan couvreur-peintre à Rochegude. L’objectif principal est de générer des appels et demandes de devis, notamment pour les urgences de fuite, tout en conservant une identité locale sobre. Les fichiers de `docs/` sont la référence fonctionnelle et éditoriale.

## Stack et architecture

- Next.js App Router, TypeScript strict, ESLint et Tailwind CSS ; versions exactes dans `package.json`.
- Contenu typé dans `content/`, sans CMS.
- Export statique obligatoire avec `output: "export"` et déploiement sur un hébergement OVHcloud.
- Interdits : route handlers, middleware, Server Actions, redirections Next et toute dépendance serveur à l’exécution.
- Formulaires complets côté interface mais sans envoi jusqu’à la phase 5.
- Images pré-optimisées au build en AVIF/WebP et tailles adaptées ; aucun optimiseur Next à l’exécution.
- Polices auto-hébergées par `next/font`. Aucun CDN ni domaine tiers chargé sans action/consentement.
- Redirections 301 et en-têtes de sécurité générés en `.htaccess` en phase 6.

## Règles permanentes

### Conversion

- Héros d’accueil local avec urgence, « Appeler » et « Devis gratuit » sans défilement ; aucun slider.
- Tous les téléphones sont cliquables en E.164 : `tel:+33490308507` et `tel:+33630267361`.
- E-mail en `mailto:` ; barre mobile fixe « Appeler | Devis ».
- Bloc appel et formulaire court en fin de chaque page service et ville.
- Devis : nom, téléphone, e-mail, code postal, service, message, photos facultatives limitées, labels visibles, champs requis/ARIA, erreurs claires, honeypot et mention RGPD liée.
- Rappel : nom, téléphone et créneau. Aucun délai de réponse non confirmé.
- Appeler `track(event, data)` pour `tel:`, `mailto:`, devis et soumissions ; abstraction sans effet avant la phase 6.

### Réassurance et contenu

- N’inventer ni prix, ancienneté, label, assurance, SIRET, délai, chiffre ou garantie.
- Toute donnée inconnue devient `[À FOURNIR : …]` et est recensée dans `docs/a-fournir.md`.
- Avis réels avec auteur, date et mention de vérification/procédure ; pas de dépôt d’avis interne.
- Assurance décennale en texte avec assureur et zone couverte, après confirmation.
- Supprimer les promesses non prouvables. Ton orienté client, déroulé, délais et prix uniquement confirmés.
- Réécrire les faits : ne jamais copier les textes de l’ancien site.
- Horaires définis une seule fois dans `content/`.
- Français soigné, accents et typographie française ; pas de capitales pour simuler l’emphase.

### SEO

- Un H1 unique, hiérarchie continue, title et description uniques par page.
- URL minuscules, sans accent ni code postal ; `zinguerie`, jamais `zingerie`.
- Communes du pied de page en texte/liens, jamais en titres ; seules les 12 pages validées.
- JSON-LD `RoofingContractor`, `BreadcrumbList` et `FAQPage` lorsque pertinent.
- Canoniques, Open Graph, sitemap et robots ; vraie photo de chantier pour l’image sociale finale.
- Chaque ancienne URL redirige en 301 vers la destination la plus proche ; 404 utile.

### Images

- Exclure les images d’autres entreprises, Ootravaux, les démos Roofix et tout fichier de `2020/11`.
- Photos de chantier historiques uniquement après validation ; banques libres hors Réalisations seulement.
- Réalisations : vraies photos, ville, date, travaux, sans lien vers le fichier brut.
- Documenter source et licence dans `docs/images.md` ; nom descriptif, alt pertinent ou vide si décoratif.

### Légal et vie privée

- Mentions légales et politique de confidentialité complètes, liées au pied de page.
- Aucun traceur nécessitant un consentement par défaut ; carte chargée uniquement après action.
- Si des cookies deviennent nécessaires : refus aussi visible que l’acceptation et blocage préalable.
- Copyright avec année courante automatique.

### Accessibilité et sécurité

- `lang="fr"`, lien d’évitement, focus visible, contrastes WCAG 2.1 AA, intitulés explicites.
- Navigation et menus entièrement utilisables au clavier ; aucun défilement automatique.
- Formulaires avec labels, aides, erreurs et statut accessibles.
- En phase 6 : HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` et CSP avec `frame-ancestors`.
- Pas de dépendance inutile, slider ou carrousel.

## Méthode de travail

- Une phase à la fois ; résumé, points non vérifiés, puis arrêt pour validation.
- Un commit clair en français par sujet ; préserver les changements existants.
- Mettre `docs/a-fournir.md` à jour avec chaque nouveau marqueur.
- Ne poursuivre une nouvelle phase qu’après validation explicite.

## Commandes

```bash
npm run dev
npm run build
npm run lint
npm run typecheck
```

