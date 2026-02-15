# Checklist QA - Maison Royale du Ndop

## ✅ Avant le Déploiement

### 🔧 Configuration

- [ ] Toutes les variables d'environnement sont configurées
- [ ] `NEXTAUTH_SECRET` est généré de manière sécurisée
- [ ] Les clés Stripe sont en mode LIVE (pas test)
- [ ] Le domaine Resend est vérifié
- [ ] La `DATABASE_URL` pointe vers la base de production
- [ ] `NEXT_PUBLIC_APP_URL` correspond au domaine de production

### 🗄️ Base de Données

- [ ] Le schéma Prisma est à jour (`prisma db push`)
- [ ] Les données de seed sont chargées (ou données réelles)
- [ ] Un utilisateur admin existe avec un mot de passe fort
- [ ] Les index sont créés pour les performances
- [ ] Backup automatique configuré

### 🎨 Design & UX

- [ ] Le logo est intégré (header, footer, favicon)
- [ ] Les couleurs respectent la charte (Indigo, Or, Ivoire, Noir)
- [ ] Les polices sont chargées (Playfair Display, Poppins)
- [ ] Le motif Ndop est visible en arrière-plan (opacity 5-8%)
- [ ] Les animations sont fluides (fade, hover, transitions)
- [ ] Le design est premium et professionnel

### 📱 Responsive

- [ ] Le site s'affiche correctement sur mobile (320px+)
- [ ] Le site s'affiche correctement sur tablette (768px+)
- [ ] Le site s'affiche correctement sur desktop (1024px+)
- [ ] Le menu mobile fonctionne
- [ ] Les images sont optimisées pour chaque taille d'écran
- [ ] Le texte est lisible sur tous les appareils

### 🖼️ Images

- [ ] Toutes les images sont uploadées sur Cloudinary
- [ ] Les images ont des alt text descriptifs
- [ ] Les images sont optimisées (next/image)
- [ ] Les images de placeholder sont remplacées par de vraies photos
- [ ] Le lazy loading fonctionne
- [ ] Les transformations Cloudinary sont configurées

### 🛒 E-Commerce

#### Boutique
- [ ] Les produits s'affichent correctement
- [ ] Les filtres fonctionnent (catégorie, prix, recherche)
- [ ] Le tri fonctionne (prix, nom, nouveautés)
- [ ] La pagination fonctionne
- [ ] Les cartes produits sont cliquables

#### Page Produit
- [ ] La galerie d'images fonctionne
- [ ] Le zoom sur les images fonctionne
- [ ] Les détails produit s'affichent (prix, description, stock)
- [ ] Le bouton "Ajouter au panier" fonctionne
- [ ] Le bouton WhatsApp préremplit le message correctement
- [ ] Les variantes (taille/couleur) fonctionnent si applicable

#### Panier
- [ ] Les produits s'ajoutent au panier
- [ ] Les quantités peuvent être modifiées
- [ ] Les produits peuvent être supprimés
- [ ] Le total est calculé correctement
- [ ] Le panier persiste après rafraîchissement (localStorage)
- [ ] Le compteur du panier dans le header est à jour

#### Checkout
- [ ] Le formulaire de checkout fonctionne
- [ ] La validation des champs fonctionne
- [ ] L'intégration Stripe fonctionne
- [ ] La redirection vers Stripe Checkout fonctionne
- [ ] La page de succès s'affiche après paiement
- [ ] La page d'annulation fonctionne
- [ ] L'email de confirmation est envoyé
- [ ] La commande est enregistrée en base de données
- [ ] Le stock est mis à jour après commande

### 🎨 Galerie

- [ ] Les modèles s'affichent en grille
- [ ] Les filtres fonctionnent (tags, recherche, featured)
- [ ] Le modal plein écran fonctionne
- [ ] La navigation précédent/suivant fonctionne
- [ ] Le bouton WhatsApp préremplit le message
- [ ] Le lien vers la boutique fonctionne (si modèle = produit)

### 📞 Contact & WhatsApp

- [ ] Le bouton WhatsApp flottant est visible
- [ ] Le lien WhatsApp fonctionne
- [ ] Le message est préremplit correctement
- [ ] Le numéro WhatsApp est correct (+237 678 841 257)
- [ ] La page contact affiche les bonnes informations
- [ ] Le formulaire de contact fonctionne (si implémenté)

### 🔐 Admin

#### Authentification
- [ ] La page de login fonctionne
- [ ] L'authentification NextAuth fonctionne
- [ ] La déconnexion fonctionne
- [ ] Les routes admin sont protégées
- [ ] La redirection après login fonctionne

#### Dashboard
- [ ] Les statistiques s'affichent
- [ ] Les graphiques fonctionnent (si implémentés)
- [ ] La navigation admin fonctionne

#### Gestion Produits
- [ ] La liste des produits s'affiche
- [ ] La création de produit fonctionne
- [ ] L'édition de produit fonctionne
- [ ] La suppression de produit fonctionne
- [ ] L'upload d'images fonctionne
- [ ] La gestion du stock fonctionne
- [ ] La gestion des catégories fonctionne

#### Gestion Galerie
- [ ] La liste des modèles s'affiche
- [ ] La création de modèle fonctionne
- [ ] L'édition de modèle fonctionne
- [ ] La suppression de modèle fonctionne
- [ ] L'upload d'images fonctionne
- [ ] La gestion des tags fonctionne
- [ ] Le lien vers produit fonctionne

#### Gestion Commandes
- [ ] La liste des commandes s'affiche
- [ ] Les détails de commande s'affichent
- [ ] Le changement de statut fonctionne
- [ ] L'export CSV fonctionne
- [ ] Les filtres fonctionnent

### 🔍 SEO

- [ ] Les meta titles sont définis pour chaque page
- [ ] Les meta descriptions sont définies
- [ ] Les Open Graph tags sont configurés
- [ ] Le favicon est présent
- [ ] Le sitemap.xml est généré
- [ ] Le robots.txt est configuré
- [ ] Les URLs sont SEO-friendly (slugs)
- [ ] Les images ont des alt text
- [ ] La structure HTML est sémantique (h1, h2, etc.)

### ⚡ Performance

- [ ] Le score Lighthouse est > 90 (Performance)
- [ ] Le score Lighthouse est > 90 (Accessibility)
- [ ] Le score Lighthouse est > 90 (Best Practices)
- [ ] Le score Lighthouse est > 90 (SEO)
- [ ] Les images sont optimisées
- [ ] Le lazy loading fonctionne
- [ ] Les polices sont chargées efficacement
- [ ] Le CSS est minifié
- [ ] Le JavaScript est minifié

### ♿ Accessibilité

- [ ] Le contraste des couleurs est suffisant (WCAG AA)
- [ ] Les labels de formulaire sont présents
- [ ] La navigation au clavier fonctionne
- [ ] Les aria-labels sont définis
- [ ] Le focus est visible
- [ ] Les erreurs de formulaire sont annoncées

### 🧪 Tests

#### Pages Publiques
- [ ] Page d'accueil fonctionne
- [ ] Page atelier fonctionne
- [ ] Page boutique fonctionne
- [ ] Page produit fonctionne
- [ ] Page galerie fonctionne
- [ ] Page panier fonctionne
- [ ] Page checkout fonctionne
- [ ] Page contact fonctionne
- [ ] Page 404 fonctionne

#### Navigateurs
- [ ] Chrome/Edge (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari (dernière version)
- [ ] Safari iOS (iPhone)
- [ ] Chrome Android

#### Appareils
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablette iPad
- [ ] Desktop 1920px
- [ ] Desktop 1366px

### 🔒 Sécurité

- [ ] Les variables sensibles sont dans `.env` (pas commitées)
- [ ] Les routes API sont protégées
- [ ] Les uploads sont validés (type, taille)
- [ ] Les formulaires ont une validation côté serveur
- [ ] Les erreurs ne révèlent pas d'informations sensibles
- [ ] HTTPS est activé
- [ ] Les headers de sécurité sont configurés

### 📧 Emails

- [ ] L'email de confirmation de commande fonctionne
- [ ] Le template email est professionnel
- [ ] Les informations dans l'email sont correctes
- [ ] L'email s'affiche bien sur mobile
- [ ] L'email s'affiche bien sur desktop
- [ ] Le domaine d'envoi est vérifié

### 💳 Paiements

- [ ] Le paiement Stripe fonctionne en mode test
- [ ] Le paiement Stripe fonctionne en mode live
- [ ] Le webhook Stripe est configuré
- [ ] Les événements webhook sont traités
- [ ] Les erreurs de paiement sont gérées
- [ ] Les montants sont corrects (XAF)
- [ ] Le statut de commande est mis à jour après paiement

### 📊 Analytics & Monitoring

- [ ] Vercel Analytics est activé
- [ ] Les erreurs sont loggées
- [ ] Les performances sont monitorées
- [ ] Les paiements sont trackés

## 🚀 Après le Déploiement

- [ ] Tester une commande complète (test puis réelle)
- [ ] Vérifier les emails de confirmation
- [ ] Tester le webhook Stripe
- [ ] Vérifier les logs Vercel
- [ ] Tester sur plusieurs appareils réels
- [ ] Demander des retours utilisateurs
- [ ] Monitorer les erreurs pendant 24h
- [ ] Créer une sauvegarde de la base de données

## 📝 Notes

- Date du dernier test : ___________
- Testeur : ___________
- Problèmes identifiés : ___________
- Actions correctives : ___________
