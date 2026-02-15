# Maison Royale du Ndop - Structure du Projet

## Arborescence Complète

```
maison-royale-ndop/
├── .env.example
├── .env.local
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── README.md
├── DEPLOYMENT.md
├── QA_CHECKLIST.md
│
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
│
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   ├── images/
│   │   ├── ndop-pattern.svg
│   │   └── placeholder.jpg
│   └── fonts/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                    # Accueil
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   │
│   │   ├── atelier/
│   │   │   └── page.tsx
│   │   │
│   │   ├── boutique/
│   │   │   └── page.tsx
│   │   │
│   │   ├── produit/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── galerie/
│   │   │   └── page.tsx
│   │   │
│   │   ├── panier/
│   │   │   └── page.tsx
│   │   │
│   │   ├── checkout/
│   │   │   ├── page.tsx
│   │   │   ├── success/
│   │   │   │   └── page.tsx
│   │   │   └── cancel/
│   │   │       └── page.tsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx                # Dashboard
│   │   │   ├── produits/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── nouveau/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── galerie/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── nouveau/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   └── commandes/
│   │   │       ├── page.tsx
│   │   │       └── [id]/
│   │   │           └── page.tsx
│   │   │
│   │   └── api/
│   │       ├── auth/
│   │       │   └── [...nextauth]/
│   │       │       └── route.ts
│   │       ├── products/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       ├── gallery/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       ├── orders/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       ├── cart/
│   │       │   └── route.ts
│   │       ├── checkout/
│   │       │   └── route.ts
│   │       ├── upload/
│   │       │   └── route.ts
│   │       └── webhooks/
│   │           └── stripe/
│   │               └── route.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── AnnouncementBar.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   └── WhatsAppButton.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── GalleryHighlights.tsx
│   │   │   └── Testimonials.tsx
│   │   │
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductFilters.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   └── ProductDetails.tsx
│   │   │
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.tsx
│   │   │   ├── GalleryFilters.tsx
│   │   │   ├── GalleryModal.tsx
│   │   │   └── ModelCard.tsx
│   │   │
│   │   ├── cart/
│   │   │   ├── CartItem.tsx
│   │   │   ├── CartSummary.tsx
│   │   │   └── CartDrawer.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── StatsCard.tsx
│   │   │   ├── ProductForm.tsx
│   │   │   ├── GalleryForm.tsx
│   │   │   ├── OrderTable.tsx
│   │   │   ├── ImageUpload.tsx
│   │   │   └── DataTable.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Select.tsx
│   │       ├── Modal.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       ├── Spinner.tsx
│   │       └── Toast.tsx
│   │
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── auth.ts
│   │   ├── stripe.ts
│   │   ├── cloudinary.ts
│   │   ├── resend.ts
│   │   ├── utils.ts
│   │   └── validations.ts
│   │
│   ├── hooks/
│   │   ├── useCart.ts
│   │   ├── useProducts.ts
│   │   └── useGallery.ts
│   │
│   ├── contexts/
│   │   └── CartContext.tsx
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   └── styles/
│       └── fonts.ts
│
└── components.json              # shadcn/ui config
```

## Commandes d'Installation

### 1. Créer le projet Next.js
```bash
npx create-next-app@latest maison-royale-ndop --typescript --tailwind --app --src-dir --import-alias "@/*"
cd maison-royale-ndop
```

### 2. Installer les dépendances principales
```bash
npm install @prisma/client @next-auth/prisma-adapter next-auth
npm install stripe @stripe/stripe-js
npm install cloudinary next-cloudinary
npm install resend
npm install bcryptjs
npm install zod
npm install clsx tailwind-merge class-variance-authority
npm install lucide-react
npm install react-hot-toast
npm install zustand
```

### 3. Installer les dépendances de développement
```bash
npm install -D prisma
npm install -D @types/bcryptjs
npm install -D @types/node
```

### 4. Initialiser Prisma
```bash
npx prisma init
```

### 5. Installer shadcn/ui
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add select
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add form
npx shadcn-ui@latest add label
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add table
npx shadcn-ui@latest add tabs
npx shadcn-ui@latest add toast
```

### 6. Configuration de la base de données
```bash
# Après avoir configuré .env.local avec DATABASE_URL
npx prisma generate
npx prisma db push
npx prisma db seed
```

### 7. Lancer le serveur de développement
```bash
npm run dev
```

## Variables d'Environnement (.env.local)

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/maison_royale_ndop"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="votre-secret-tres-securise-ici"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="votre-cloud-name"
CLOUDINARY_API_KEY="votre-api-key"
CLOUDINARY_API_SECRET="votre-api-secret"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Resend
RESEND_API_KEY="re_..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_WHATSAPP_NUMBER="237678841257"
```

## Scripts package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "prisma:generate": "prisma generate",
    "prisma:push": "prisma db push",
    "prisma:seed": "tsx prisma/seed.ts",
    "prisma:studio": "prisma studio"
  }
}
```

## Prochaines Étapes

1. ✅ Arborescence définie
2. ⏳ Configuration Prisma Schema
3. ⏳ Configuration Next.js & Tailwind
4. ⏳ Composants UI de base
5. ⏳ Pages principales
6. ⏳ Admin dashboard
7. ⏳ Intégrations (Stripe, Cloudinary, etc.)
8. ⏳ Seed data
9. ⏳ Documentation déploiement
10. ⏳ Checklist QA
