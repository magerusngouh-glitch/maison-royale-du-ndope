'use client';

import { useCart } from '@/hooks/useCart';
import { formatPrice } from '@/lib/utils';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { FaceBlurredImage } from '@/components/ui/FaceBlurredImage';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function CartPage() {
    const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCart();

    if (items.length === 0) {
        return (
            <div className="bg-ivory/50 min-h-screen py-20">
                <div className="container-custom text-center">
                    <div className="bg-white rounded-3xl shadow-xl p-12 max-w-2xl mx-auto">
                        <div className="h-20 w-20 rounded-full bg-ivory-200 flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag className="h-10 w-10 text-gray-400" />
                        </div>
                        <h1 className="font-playfair text-3xl font-bold text-indigo mb-4">Votre panier est vide</h1>
                        <p className="text-gray-600 mb-10">
                            Découvrez nos créations uniques et commencez à composer votre garde-robe royale.
                        </p>
                        <Link href="/boutique" className="btn-primary">
                            <ArrowLeft className="mr-2 h-5 w-5" />
                            Retour à la boutique
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-ivory/50 min-h-screen pb-20">
            <div className="bg-indigo pt-16 pb-24 text-ivory ndop-pattern-bg">
                <div className="container-custom">
                    <h1 className="font-playfair text-4xl font-bold mb-4">Mon Panier</h1>
                    <p className="text-ivory-300">Vous avez {getTotalItems()} création(s) dans votre panier</p>
                </div>
            </div>

            <div className="container-custom -mt-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8 space-y-8">
                                <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Boutique', href: '/boutique' }, { label: 'Panier' }]} />

                                {items.map((item) => (
                                    <div key={item.productId} className="flex flex-col sm:flex-row gap-6 py-6 border-b border-gray-100 last:border-0 group">
                                        <div className="relative h-32 w-24 rounded-xl overflow-hidden shadow-md shrink-0">
                                            <FaceBlurredImage
                                                src={item.image || '/images/logo.png'}
                                                alt={item.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform"
                                            />
                                        </div>

                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="font-playfair text-xl font-bold text-indigo mb-1">{item.name}</h3>
                                                    <p className="text-sm text-gray-500 font-medium">Création Artisanale</p>
                                                </div>
                                                <button
                                                    onClick={() => removeItem(item.productId)}
                                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>

                                            <div className="flex justify-between items-end mt-4">
                                                <div className="flex items-center border border-gray-200 rounded-lg p-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                                                        className="p-1 px-2 hover:bg-gray-100 rounded text-gray-400"
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </button>
                                                    <span className="px-4 font-bold text-indigo">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                                                        className="p-1 px-2 hover:bg-gray-100 rounded text-gray-400"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </button>
                                                </div>
                                                <div className="text-xl font-bold text-noir">
                                                    {formatPrice(item.price * item.quantity)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24 border border-gray-100">
                            <h2 className="font-playfair text-2xl font-bold text-indigo mb-6">Récapitulatif</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span>Sous-total</span>
                                    <span>{formatPrice(getTotalPrice())}</span>
                                </div>
                                <div className="flex justify-between text-gray-600 font-medium">
                                    <span>Livraison</span>
                                    <span className="text-green-600 font-bold uppercase text-xs">Calculée au paiement</span>
                                </div>
                                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-xl font-bold text-indigo">Total global</span>
                                    <span className="text-3xl font-playfair font-bold text-noir">{formatPrice(getTotalPrice())}</span>
                                </div>
                            </div>

                            <Link
                                href="/checkout"
                                className="w-full btn-primary py-4 text-lg"
                            >
                                Passer à la caisse
                                <ArrowRight className="ml-2 h-6 w-6" />
                            </Link>

                            <div className="mt-8 pt-8 border-t border-gray-100 italic text-sm text-center text-gray-500 leading-relaxed">
                                Les prix indiqués sont hors frais de livraison. La livraison est gérée par nos partenaires logistiques selon votre localisation.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
