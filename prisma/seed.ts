import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Début du seed...');

    // Créer un utilisateur admin
    const passwordHash = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@maisonroyalendop.com' },
        update: {},
        create: {
            email: 'admin@maisonroyalendop.com',
            passwordHash,
            role: 'admin',
        },
    });
    console.log('✅ Admin créé:', admin.email);

    // Créer les catégories
    const categories = [
        { name: 'Tenues Ndop', slug: 'tenues-ndop' },
        { name: 'Robes de Cérémonie', slug: 'robes-ceremonie' },
        { name: 'Costumes Traditionnels', slug: 'costumes-traditionnels' },
        { name: 'Broderie Premium', slug: 'broderie-premium' },
        { name: 'Collection Mariage', slug: 'collection-mariage' },
        { name: 'Accessoires', slug: 'accessoires' },
    ];

    const createdCategories = [];
    for (const cat of categories) {
        const category = await prisma.category.upsert({
            where: { slug: cat.slug },
            update: {},
            create: cat,
        });
        createdCategories.push(category);
        console.log('✅ Catégorie créée:', category.name);
    }

    // Créer des produits de démonstration
    const products = [
        {
            name: 'Robe Ndop Royale',
            slug: 'robe-ndop-royale',
            description:
                'Robe élégante en tissu Ndop authentique avec broderie artisanale. Coupe moderne qui sublime la tradition des Grassfields. Parfaite pour les cérémonies et événements prestigieux.',
            price: 85000,
            stock: 5,
            categoryId: createdCategories[0].id,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Robe Ndop Royale - Vue de face',
                    sortOrder: 0,
                },
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Robe Ndop Royale - Détail broderie',
                    sortOrder: 1,
                },
            ],
        },
        {
            name: 'Ensemble Traditionnel Homme',
            slug: 'ensemble-traditionnel-homme',
            description:
                'Ensemble complet en Ndop pour homme : tunique brodée et pantalon assorti. Finitions premium et coupe ajustée. Idéal pour mariages et cérémonies traditionnelles.',
            price: 120000,
            stock: 3,
            categoryId: createdCategories[2].id,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Ensemble Traditionnel Homme',
                    sortOrder: 0,
                },
            ],
        },
        {
            name: 'Robe de Soirée Brodée Or',
            slug: 'robe-soiree-brodee-or',
            description:
                'Robe de soirée luxueuse avec broderie fil d\'or sur tissu indigo. Design contemporain inspiré des motifs Ndop. Pièce unique créée par Nguedong Pergolaise.',
            price: 150000,
            stock: 2,
            categoryId: createdCategories[3].id,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Robe de Soirée Brodée Or',
                    sortOrder: 0,
                },
            ],
        },
        {
            name: 'Tenue de Mariage Complète',
            slug: 'tenue-mariage-complete',
            description:
                'Ensemble mariage complet pour mariée : robe longue en Ndop, voile brodé et accessoires assortis. Création sur-mesure disponible.',
            price: 250000,
            stock: 1,
            categoryId: createdCategories[4].id,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Tenue de Mariage Complète',
                    sortOrder: 0,
                },
            ],
        },
        {
            name: 'Chemise Ndop Moderne',
            slug: 'chemise-ndop-moderne',
            description:
                'Chemise homme en tissu Ndop avec col moderne. Parfaite pour un style afro-chic au quotidien ou en soirée.',
            price: 35000,
            stock: 10,
            categoryId: createdCategories[0].id,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Chemise Ndop Moderne',
                    sortOrder: 0,
                },
            ],
        },
        {
            name: 'Robe Cocktail Ivoire',
            slug: 'robe-cocktail-ivoire',
            description:
                'Robe cocktail courte en tissu ivoire avec motifs Ndop subtils. Élégance moderne et raffinée.',
            price: 65000,
            stock: 4,
            categoryId: createdCategories[1].id,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Robe Cocktail Ivoire',
                    sortOrder: 0,
                },
            ],
        },
        {
            name: 'Sac à Main Brodé',
            slug: 'sac-main-brode',
            description:
                'Sac à main artisanal avec broderie traditionnelle. Accessoire parfait pour compléter votre tenue.',
            price: 25000,
            stock: 8,
            categoryId: createdCategories[5].id,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Sac à Main Brodé',
                    sortOrder: 0,
                },
            ],
        },
        {
            name: 'Écharpe Ndop Premium',
            slug: 'echarpe-ndop-premium',
            description:
                'Écharpe en tissu Ndop authentique avec finitions brodées. Accessoire élégant et polyvalent.',
            price: 18000,
            stock: 15,
            categoryId: createdCategories[5].id,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Écharpe Ndop Premium',
                    sortOrder: 0,
                },
            ],
        },
    ];

    for (const prod of products) {
        const { images, ...productData } = prod;
        const product = await prisma.product.create({
            data: {
                ...productData,
                images: {
                    create: images,
                },
            },
            include: {
                images: true,
            },
        });
        console.log('✅ Produit créé:', product.name);
    }

    // Créer des modèles de galerie
    const galleryModels = [
        {
            title: 'Collection Royale 2024',
            slug: 'collection-royale-2024',
            description:
                'Ensemble de tenues inspirées de la royauté des Grassfields. Broderie artisanale et tissus Ndop premium.',
            tags: ['Ndop', 'Traditionnel', 'Cérémonie', 'Premium'],
            isFeatured: true,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Collection Royale 2024 - Look 1',
                    sortOrder: 0,
                },
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Collection Royale 2024 - Look 2',
                    sortOrder: 1,
                },
            ],
        },
        {
            title: 'Mariage Traditionnel Moderne',
            slug: 'mariage-traditionnel-moderne',
            description:
                'Tenues de mariage alliant tradition et modernité. Créations uniques pour votre jour spécial.',
            tags: ['Mariage', 'Moderne', 'Broderie', 'Femme'],
            isFeatured: true,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Mariage Traditionnel Moderne',
                    sortOrder: 0,
                },
            ],
        },
        {
            title: 'Élégance Masculine',
            slug: 'elegance-masculine',
            description:
                'Collection homme : costumes et ensembles traditionnels revisités avec une touche contemporaine.',
            tags: ['Homme', 'Traditionnel', 'Moderne'],
            isFeatured: false,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Élégance Masculine',
                    sortOrder: 0,
                },
            ],
        },
        {
            title: 'Broderie d\'Exception',
            slug: 'broderie-exception',
            description:
                'Pièces uniques mettant en valeur le savoir-faire de la broderie artisanale camerounaise.',
            tags: ['Broderie', 'Premium', 'Artisanal'],
            isFeatured: true,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Broderie d\'Exception - Détail 1',
                    sortOrder: 0,
                },
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Broderie d\'Exception - Détail 2',
                    sortOrder: 1,
                },
            ],
        },
        {
            title: 'Soirée Chic',
            slug: 'soiree-chic',
            description:
                'Robes de soirée élégantes avec touches de Ndop. Pour briller lors de vos événements.',
            tags: ['Soirée', 'Moderne', 'Femme'],
            isFeatured: false,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Soirée Chic',
                    sortOrder: 0,
                },
            ],
        },
        {
            title: 'Ndop Contemporain',
            slug: 'ndop-contemporain',
            description:
                'Réinterprétation moderne du tissu Ndop dans des coupes actuelles et audacieuses.',
            tags: ['Ndop', 'Moderne', 'Unisexe'],
            isFeatured: true,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Ndop Contemporain',
                    sortOrder: 0,
                },
            ],
        },
        {
            title: 'Cérémonie Traditionnelle',
            slug: 'ceremonie-traditionnelle',
            description:
                'Tenues complètes pour cérémonies traditionnelles : dot, intronisation, fêtes culturelles.',
            tags: ['Traditionnel', 'Cérémonie', 'Femme', 'Homme'],
            isFeatured: false,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Cérémonie Traditionnelle',
                    sortOrder: 0,
                },
            ],
        },
        {
            title: 'Accessoires Raffinés',
            slug: 'accessoires-raffines',
            description:
                'Collection d\'accessoires brodés : sacs, écharpes, bijoux textiles pour sublimer vos tenues.',
            tags: ['Accessoires', 'Broderie'],
            isFeatured: false,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Accessoires Raffinés',
                    sortOrder: 0,
                },
            ],
        },
        {
            title: 'Fusion Culturelle',
            slug: 'fusion-culturelle',
            description:
                'Créations mêlant influences africaines et occidentales pour un style unique et cosmopolite.',
            tags: ['Moderne', 'Fusion', 'Unisexe'],
            isFeatured: true,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Fusion Culturelle',
                    sortOrder: 0,
                },
            ],
        },
        {
            title: 'Atelier Créatif',
            slug: 'atelier-creatif',
            description:
                'Aperçu du processus de création : du croquis à la pièce finie, découvrez notre savoir-faire.',
            tags: ['Atelier', 'Artisanal', 'Processus'],
            isFeatured: false,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Atelier Créatif - Croquis',
                    sortOrder: 0,
                },
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Atelier Créatif - Couture',
                    sortOrder: 1,
                },
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Atelier Créatif - Broderie',
                    sortOrder: 2,
                },
            ],
        },
        {
            title: 'Héritage Grassfields',
            slug: 'heritage-grassfields',
            description:
                'Hommage aux traditions vestimentaires des Grassfields avec des créations authentiques et respectueuses.',
            tags: ['Traditionnel', 'Grassfields', 'Patrimoine'],
            isFeatured: true,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Héritage Grassfields',
                    sortOrder: 0,
                },
            ],
        },
        {
            title: 'Luxe Africain',
            slug: 'luxe-africain',
            description:
                'Collection premium incarnant le luxe à l\'africaine : matières nobles, finitions impeccables, design raffiné.',
            tags: ['Premium', 'Luxe', 'Moderne'],
            isFeatured: true,
            images: [
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Luxe Africain - Look 1',
                    sortOrder: 0,
                },
                {
                    url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg',
                    alt: 'Luxe Africain - Look 2',
                    sortOrder: 1,
                },
            ],
        },
    ];

    for (const model of galleryModels) {
        const { images, ...modelData } = model;
        const galleryModel = await prisma.galleryModel.create({
            data: {
                ...modelData,
                images: {
                    create: images,
                },
            },
            include: {
                images: true,
            },
        });
        console.log('✅ Modèle galerie créé:', galleryModel.title);
    }

    console.log('🎉 Seed terminé avec succès!');
}

main()
    .catch((e) => {
        console.error('❌ Erreur lors du seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
