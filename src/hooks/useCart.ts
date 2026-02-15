'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartState } from '@/types';
import toast from 'react-hot-toast';

export const useCart = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (item: CartItem) => {
                const items = get().items;
                const existingItem = items.find((i) => i.productId === item.productId);

                if (existingItem) {
                    set({
                        items: items.map((i) =>
                            i.productId === item.productId ? { ...i, quantity: i.quantity + item.quantity } : i
                        ),
                    });
                    toast.success('Quantité mise à jour');
                } else {
                    set({ items: [...items, item] });
                    toast.success('Produit ajouté au panier');
                }
            },

            removeItem: (productId: string) => {
                set({ items: get().items.filter((i) => i.productId !== productId) });
                toast.success('Produit retiré du panier');
            },

            updateQuantity: (productId: string, quantity: number) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }

                set({
                    items: get().items.map((i) => (i.productId === productId ? { ...i, quantity } : i)),
                });
            },

            clearCart: () => {
                set({ items: [] });
            },

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            getTotalPrice: () => {
                return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);
