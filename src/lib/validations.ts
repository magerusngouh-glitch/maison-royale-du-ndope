import { z } from 'zod';

export const productSchema = z.object({
    name: z.string().min(3, 'Le nom doit contenir au moins 3 caractères'),
    slug: z.string().min(3, 'Le slug doit contenir au moins 3 caractères'),
    description: z.string().min(10, 'La description doit contenir au moins 10 caractères'),
    price: z.number().positive('Le prix doit être positif'),
    stock: z.number().int().min(0, 'Le stock ne peut pas être négatif'),
    categoryId: z.string().min(1, 'Veuillez sélectionner une catégorie'),
    isActive: z.boolean().default(true),
});

export const categorySchema = z.object({
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    slug: z.string().min(2, 'Le slug doit contenir au moins 2 caractères'),
});

export const galleryModelSchema = z.object({
    title: z.string().min(3, 'Le titre doit contenir au moins 3 caractères'),
    slug: z.string().min(3, 'Le slug doit contenir au moins 3 caractères'),
    description: z.string().min(10, 'La description doit contenir au moins 10 caractères'),
    tags: z.array(z.string()).min(1, 'Ajoutez au moins un tag'),
    isFeatured: z.boolean().default(false),
    linkedProductId: z.string().optional().nullable(),
});

export const orderSchema = z.object({
    customerName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Email invalide'),
    phone: z.string().min(9, 'Numéro de téléphone invalide'),
    address: z.string().min(10, 'L\'adresse doit contenir au moins 10 caractères'),
});

export const contactSchema = z.object({
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Email invalide'),
    phone: z.string().min(9, 'Numéro de téléphone invalide'),
    message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export const loginSchema = z.object({
    email: z.string().email('Email invalide'),
    password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});
