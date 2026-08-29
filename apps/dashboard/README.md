# Obscura Dashboard

Web app pour gérer les scrapes Obscura.

## Le fichier de l'app

**`index.html`** — c'est le dashboard, en un seul fichier autonome.
React, Babel et supabase-js sont chargés depuis des CDN publics, il n'y a
donc **aucune étape de build**.

Pour le lancer en local : ouvrir `index.html` dans un navigateur, ou servir
le dossier (`npx serve .`). Une connexion internet est nécessaire pour les
CDN et pour Supabase.

## Features

- ✅ Authentification email/mot de passe (Supabase Auth)
- ✅ Créer et lancer des scrapes (simulation)
- ✅ Voir les jobs en cours, avec barre de progression
- ✅ Logs d'exécution en direct
- ✅ Export des résultats en CSV / JSON
- ✅ Persistance en base (Supabase)

## Deploy

Déploiement statique, sans build — voir `vercel.json`.
Vercel sert `index.html` directement.

## ⚠️ Fichiers obsolètes à supprimer

`src/`, `public/` et `package.json` sont les restes d'un ancien montage
Create React App qui n'est plus utilisé. `public/index.html` en particulier
est une coquille vide (`<div id="root"></div>`) : l'ouvrir donne une page
blanche, ce n'est pas l'app.

À supprimer :

```bash
git rm -r apps/dashboard/src apps/dashboard/public apps/dashboard/package.json
```
