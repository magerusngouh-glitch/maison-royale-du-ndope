import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = 'XAF'): string {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
    }).format(price);
}

export function slugify(text: string): string {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export function getWhatsAppLink(
    message: string = '',
    productName?: string,
    productPrice?: number,
    productUrl?: string
): string {
    const baseNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '237678841257';
    let finalMessage = message;

    if (productName) {
        finalMessage = `Bonjour Maison Royale du Ndop, je suis intéressé(e) par : ${productName}`;
        if (productPrice) {
            finalMessage += ` (${formatPrice(productPrice)})`;
        }
        if (productUrl) {
            finalMessage += `\n\nLien : ${productUrl}`;
        }
    }

    if (!finalMessage) {
        finalMessage =
            process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
            'Bonjour Maison Royale du Ndop, je souhaite être accueilli(e) et découvrir vos créations traditionnelles et modernes.';
    }

    return `https://wa.me/${baseNumber}?text=${encodeURIComponent(finalMessage)}`;
}

export function truncate(str: string, length: number = 100): string {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
}

export function getImageUrl(url: string, width?: number, height?: number): string {
    // Si c'est une URL Cloudinary, on peut ajouter des transformations
    if (url.includes('cloudinary.com')) {
        const parts = url.split('/upload/');
        if (parts.length === 2) {
            const transformations = [];
            if (width) transformations.push(`w_${width}`);
            if (height) transformations.push(`h_${height}`);
            transformations.push('c_fill', 'q_auto', 'f_auto');
            return `${parts[0]}/upload/${transformations.join(',')}/${parts[1]}`;
        }
    }
    return url;
}
