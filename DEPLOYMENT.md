# Guide de Déploiement - Maison Royale du Ndop

## 📋 Prérequis

Avant de déployer, assurez-vous d'avoir :
- [ ] Un compte Vercel
- [ ] Une base de données PostgreSQL managée (Neon, Supabase, ou Railway)
- [ ] Un compte Cloudinary configuré
- [ ] Un compte Stripe avec clés API
- [ ] Un compte Resend avec domaine vérifié
- [ ] Le code source sur GitHub/GitLab

## 🗄️ Étape 1 : Configuration de la Base de Données

### Option A : Neon (Recommandé)

1. Créer un compte sur [neon.tech](https://neon.tech)
2. Créer un nouveau projet
3. Copier la `DATABASE_URL` (Connection String)
4. La base de données est prête !

### Option B : Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Aller dans Settings > Database
3. Copier la `Connection String` (mode Direct)
4. Remplacer `[YOUR-PASSWORD]` par votre mot de passe

### Option C : Railway

1. Créer un projet sur [railway.app](https://railway.app)
2. Ajouter un service PostgreSQL
3. Copier la `DATABASE_URL` depuis les variables

## ☁️ Étape 2 : Configuration Cloudinary

1. Créer un compte sur [cloudinary.com](https://cloudinary.com)
2. Aller dans Dashboard
3. Noter :
   - `Cloud Name`
   - `API Key`
   - `API Secret`
4. Créer un dossier `maison-royale-ndop` dans Media Library (optionnel)

## 💳 Étape 3 : Configuration Stripe

1. Créer un compte sur [stripe.com](https://stripe.com)
2. Activer le mode Test
3. Aller dans Developers > API Keys
4. Noter :
   - `Publishable key` (pk_test_...)
   - `Secret key` (sk_test_...)
5. Aller dans Developers > Webhooks
6. Ajouter un endpoint : `https://votre-domaine.vercel.app/api/webhooks/stripe`
7. Sélectionner les événements :
   - `checkout.session.completed`
   - `payment_intent.succeeded`
8. Noter le `Signing secret` (whsec_...)

### Configuration XAF (Franc CFA)

Stripe supporte XAF. Assurez-vous que :
- Votre compte Stripe est configuré pour le Cameroun
- Les montants sont en XAF (pas de centimes)

## 📧 Étape 4 : Configuration Resend

1. Créer un compte sur [resend.com](https://resend.com)
2. Ajouter et vérifier votre domaine
3. Créer une API Key
4. Noter l'API Key (re_...)

**Note** : En développement, vous pouvez utiliser l'email de test de Resend.

## 🚀 Étape 5 : Déploiement sur Vercel

### 5.1 Connexion du Repository

1. Aller sur [vercel.com](https://vercel.com)
2. Cliquer sur "Add New Project"
3. Importer votre repository GitHub/GitLab
4. Sélectionner le framework : **Next.js**

### 5.2 Configuration des Variables d'Environnement

Dans Vercel, aller dans Settings > Environment Variables et ajouter :

```env
# Database
DATABASE_URL=postgresql://user:password@host/database

# NextAuth
NEXTAUTH_URL=https://votre-domaine.vercel.app
NEXTAUTH_SECRET=votre-secret-genere-avec-openssl

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=votre-cloud-name
CLOUDINARY_API_KEY=votre-api-key
CLOUDINARY_API_SECRET=votre-api-secret

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend
RESEND_API_KEY=re_...

# App
NEXT_PUBLIC_APP_URL=https://votre-domaine.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=237678841257
NEXT_PUBLIC_WHATSAPP_MESSAGE=Bonjour%20Maison%20Royale%20du%20Ndop...
```

### 5.3 Build Settings

Vercel détecte automatiquement Next.js. Vérifiez :
- **Framework Preset** : Next.js
- **Build Command** : `npm run build` (ou `prisma generate && next build`)
- **Output Directory** : `.next`
- **Install Command** : `npm install`

### 5.4 Déployer

1. Cliquer sur "Deploy"
2. Attendre la fin du build (2-5 minutes)
3. Votre site est en ligne ! 🎉

## 🔧 Étape 6 : Post-Déploiement

### 6.1 Initialiser la Base de Données

Depuis votre machine locale :

```bash
# Utiliser la DATABASE_URL de production
DATABASE_URL="postgresql://..." npx prisma db push
DATABASE_URL="postgresql://..." npm run prisma:seed
```

Ou créer un script Vercel :
1. Aller dans Settings > Functions
2. Créer une fonction serverless pour le seed (optionnel)

### 6.2 Tester le Webhook Stripe

1. Aller dans Stripe Dashboard > Webhooks
2. Tester l'endpoint avec un événement test
3. Vérifier les logs dans Vercel

### 6.3 Créer un Utilisateur Admin

Utiliser Prisma Studio ou un script :

```bash
DATABASE_URL="postgresql://..." npx prisma studio
```

Ou créer via l'API :

```bash
curl -X POST https://votre-domaine.vercel.app/api/admin/create-user \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@maisonroyalendop.com","password":"VotreMotDePasse"}'
```

## 🌐 Étape 7 : Domaine Personnalisé (Optionnel)

1. Dans Vercel, aller dans Settings > Domains
2. Ajouter votre domaine (ex: maisonroyalendop.com)
3. Suivre les instructions pour configurer les DNS
4. Mettre à jour `NEXTAUTH_URL` et `NEXT_PUBLIC_APP_URL`

## 🔒 Étape 8 : Sécurité

- [ ] Changer le mot de passe admin par défaut
- [ ] Activer 2FA sur Vercel, Stripe, etc.
- [ ] Configurer les CORS si nécessaire
- [ ] Vérifier les permissions Cloudinary
- [ ] Tester le paiement en mode test avant de passer en live

## 📊 Étape 9 : Monitoring

1. **Vercel Analytics** : Activer dans Settings
2. **Stripe Dashboard** : Surveiller les paiements
3. **Cloudinary Usage** : Vérifier le quota
4. **Database** : Monitorer les connexions

## 🐛 Dépannage

### Build Failed

- Vérifier les variables d'environnement
- Vérifier que `DATABASE_URL` est accessible
- Regarder les logs Vercel

### Images ne s'affichent pas

- Vérifier la configuration Cloudinary
- Vérifier `next.config.js` (remotePatterns)

### Paiement ne fonctionne pas

- Vérifier les clés Stripe (test vs live)
- Vérifier le webhook endpoint
- Regarder les logs Stripe

### Emails ne partent pas

- Vérifier la clé Resend
- Vérifier que le domaine est vérifié
- Regarder les logs Resend

## 📞 Support

Pour toute question :
- Documentation Next.js : [nextjs.org/docs](https://nextjs.org/docs)
- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Support Stripe : [stripe.com/support](https://stripe.com/support)
