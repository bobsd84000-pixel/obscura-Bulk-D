# Obscura Landing Page

Landing page commerciale pour Obscura - navigateur headless Rust.

## Installation

```bash
cd apps/landing
npm install
npm run dev
```

Visite `http://localhost:3000`

## Build

```bash
npm run build
```

Produit un dossier `build/` prêt à être deployé.

## Deploy

### Netlify (recommandé)

```bash
npm run deploy
```

### Vercel

```bash
vercel deploy
```

### GitHub Pages

```bash
npm run build
git add build/
git commit -m "deploy: landing page"
git push
```

## Structure

```
landing/
├── public/
│   └── index.html
├── src/
│   └── App.jsx
├── package.json
└── README.md
```

## Features

- ✅ Hero section avec CTA
- ✅ Features grid
- ✅ Comparaison vs Puppeteer/Playwright
- ✅ Use cases
- ✅ Pricing 3 tiers
- ✅ Testimonial
- ✅ Email capture
- ✅ Fully responsive

## Customisation

Modifier `src/App.jsx` pour :
- Changer email de contact
- Ajouter lien Stripe/Gumroad
- Intégrer analytics
- Ajouter FAQ

---

**Obscura** © 2026 • MIT License
