# Maison Royale du Ndop

Site web professionnel (vitrine + e-commerce) pour "Maison Royale du Ndop", atelier de couture & broderie à Bamenda, Cameroun.

## 🎨 Identité Visuelle

- **Couleurs** : Indigo #1E2A44, Or #C8A24D, Ivoire #F5F1E8, Noir #111111
- **Style** : Premium, minimaliste, luxe africain moderne
- **Typographie** : Playfair Display (titres) + Poppins (texte)

## 🛠️ Stack Technique

- **Framework** : Next.js 14 (App Router) + TypeScript
- **Styling** : Tailwind CSS + shadcn/ui
- **Base de données** : PostgreSQL + Prisma ORM
- **Authentification** : NextAuth (Credentials pour admin)
- **Images** : Cloudinary
- **Paiement** : Stripe Checkout + option WhatsApp
- **Email** : Resend
- **Déploiement** : Vercel + DB managée (Neon/Supabase)

## 📦 Installation

### Prérequis

- Node.js 18+ et npm
- PostgreSQL (local ou managé)
- Compte Cloudinary
- Compte Stripe
- Compte Resend

### Étapes

1. **Cloner le projet**
```bash
git clone <repository-url>
cd maison-royale-ndop
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
```bash
cp .env.example .env.local
```

Puis remplir `.env.local` avec vos vraies valeurs :
- `DATABASE_URL` : URL de connexion PostgreSQL
- `NEXTAUTH_SECRET` : Générer avec `openssl rand -base64 32`
- Clés Cloudinary, Stripe, Resend

4. **Initialiser la base de données**
```bash
npx prisma generate
npx prisma db push
npm run prisma:seed
```

5. **Lancer le serveur de développement**
```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
src/
├── app/              # Pages Next.js (App Router)
├── components/       # Composants React réutilisables
├── lib/             # Utilitaires et configurations
├── hooks/           # Hooks React personnalisés
├── types/           # Types TypeScript
└── styles/          # Styles globaux et fonts

prisma/
├── schema.prisma    # Schéma de base de données
└── seed.ts          # Données de démonstration
```

## 🔐 Accès Admin

Par défaut (après seed) :
- **Email** : admin@maisonroyalendop.com
- **Mot de passe** : admin123

⚠️ **Changez ces identifiants en production !**

## 🚀 Déploiement

Voir le fichier [DEPLOYMENT.md](./DEPLOYMENT.md) pour les instructions détaillées.

## 📋 Checklist QA

Voir le fichier [QA_CHECKLIST.md](./QA_CHECKLIST.md) avant le déploiement en production.

## 📞 Contact

**Maison Royale du Ndop**
- 📍 Bamenda, Cameroun
- 📱 WhatsApp : +237 678 841 257
- 📧 Email : contact@maisonroyalendop.com

## 📄 Licence

© 2026 Maison Royale du Ndop. Tous droits réservés.
