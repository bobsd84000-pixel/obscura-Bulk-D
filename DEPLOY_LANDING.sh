#!/bin/bash
# Script de déploiement landing Obscura sur GitHub

set -e

echo "🚀 Déploiement landing page Obscura..."

# 1. Vérifier git configuré
if [ -z "$(git config user.email)" ]; then
  echo "❌ Git non configuré. Exécute d'abord :"
  echo "   git config --global user.email 'email@example.com'"
  echo "   git config --global user.name 'Your Name'"
  exit 1
fi

# 2. Vérifier que nous sommes dans le repo obscura
if [ ! -f "Cargo.toml" ]; then
  echo "❌ Erreur: lance ce script depuis la racine du repo Obscura"
  exit 1
fi

# 3. Vérifier les changements
git status

# 4. Ajouter les fichiers
echo "📝 Ajout des fichiers..."
git add apps/landing/

# 5. Commit
echo "💾 Commit..."
git commit -m "feat: add commercial landing page

- React landing page with pricing, features, comparison
- Netlify/Vercel deployment ready
- Email capture CTA
- Responsive design"

# 6. Push
echo "⬆️  Push vers GitHub..."
git push origin main

echo ""
echo "✅ Landing page deployée!"
echo ""
echo "🌐 Deploy sur Netlify:"
echo "   cd apps/landing && npm install && npm run build"
echo "   netlify deploy --prod --dir=build"
echo ""
echo "📊 ou Vercel:"
echo "   vercel deploy --prod"
