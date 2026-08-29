# Notes de dépôt — obscura-Bulk-D

## Ce que contient ce dépôt

Trois applications indépendantes. Elles ne partagent ni build, ni dépendances, ni
code. Avant de modifier quoi que ce soit, identifiez laquelle est concernée.

| Chemin | Ce que c'est | Build | Déploiement |
|---|---|---|---|
| `apps/landing/` | Landing commerciale : **un seul fichier HTML** (`index.html`), CSS et JS inline, aucune dépendance | aucun — fichier statique | **Déployée par le `vercel.json` de la racine** |
| `src/` + `public/` + `package.json` (racine) | Dashboard « Obscura » (Create React App) : onglets overview / features / logs / produits scrapés | `npm install && npm run build` → `build/` | aucune config Vercel propre — **non déployé** |
| `apps/dashboard/` | Dashboard « jobs de scraping » (Create React App, autonome) : liste de jobs, création, résultats | `cd apps/dashboard && npm install && npm run build` → `apps/dashboard/build/` | son propre `vercel.json` — à déployer comme projet Vercel distinct pointant sur ce sous-dossier |

## Les deux dashboards sont différents, pas des copies

`src/ObscuraDashboard.js` (~300 lignes) et `apps/dashboard/src/App.js` (~145 lignes)
sont deux interfaces distinctes qui ne partagent aucun code. Ne les « resynchronisez »
pas et ne supprimez pas l'une en croyant dédupliquer. Si l'une doit disparaître,
c'est une décision produit, pas un nettoyage.

## Pièges de déploiement

- **Le `vercel.json` de la racine sert la landing**, pas un dashboard :
  `outputDirectory: "apps/landing"` et un `buildCommand` volontairement vide
  (`echo 'Static site'`). N'y mettez pas un build React sans changer aussi
  `outputDirectory` — vous casseriez la landing.
- **`.vercelignore` est un reliquat d'un autre dépôt** : il exclut `crates/`,
  `docs/`, `skills/`, `assets/`, `Cargo.*`, `.github/`, qui n'existent pas ici.
  Sans effet aujourd'hui, mais ne vous en servez pas pour déduire l'arborescence.
- `DEPLOY_LANDING.sh` pousse sur `main` avec un message de commit figé. Il ne
  déploie rien lui-même : il commite `apps/landing/` et affiche les commandes
  Netlify/Vercel à lancer ensuite.

## État de l'outillage

Il n'y a **ni tests, ni linter, ni CI, ni lockfile** dans ce dépôt. `npm test`
existe dans les `package.json` (hérité du template CRA) mais aucun fichier de test
n'a été écrit. Ne prétendez pas qu'une vérification est passée si vous ne l'avez
pas lancée.

Toute dépendance importée dans le code doit être déclarée dans le `package.json`
de son app. Les trois `package.json` sont indépendants : ajouter un paquet à la
racine ne le rend pas disponible dans `apps/dashboard/`.

## Commandes

```bash
# Dashboard racine
npm install && npm start          # dev
npm run build                     # production → build/

# Dashboard « jobs »
cd apps/dashboard && npm install && npm start
cd apps/dashboard && npm run build

# Landing : rien à builder, ouvrez apps/landing/index.html
```
