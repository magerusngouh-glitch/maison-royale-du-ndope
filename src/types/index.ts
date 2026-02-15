import { Product, ProductImage, Category, Order, OrderItem, GalleryModel, GalleryImage, OrderStatus } from '@prisma/client';

export type ProductWithImages = Product & {
    images: ProductImage[];
    category: Category;
};

export type OrderWithItems = Order & {
    items: (OrderItem & {
        product: Product;
    })[];
};

export type GalleryModelWithImages = GalleryModel & {
    images: GalleryImage[];
};

export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
    slug: string;
}

export interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export interface FilterOptions {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    search?: string;
    sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest';
}

export interface GalleryFilterOptions {
    tags?: string[];
    search?: string;
    featured?: boolean;
}

export { OrderStatus };

// Extend NextAuth types
declare module 'next-auth' {
    interface User {
        role?: string;
    }
    interface Session {
        user: {
            id?: string;
            email?: string | null;
            role?: string;
        };
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        role?: string;
    }
}
