'use client';

import { useCart } from '@/hooks/useCart';
import { ShoppingCart, Heart, Search, Filter, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { FaceBlurredImage } from '@/components/ui/FaceBlurredImage';
import Link from 'next/link';
import { formatPrice } from '@/lib/utils';
import { toast } from 'react-hot-toast';
import { PRODUCTS } from '@/constants';

export default function BoutiquePage() {
    const addItem = useCart((state) => state.addItem);

    const handleAddToCart = (product: any) => {
        addItem({
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image,
            slug: product.id // Fallback to ID as slug if not present
        });
        toast.success(`${product.name} ajouté au panier`);
    };

    return (
        <div className="bg-ivory/30 min-h-screen pb-20">
            {/* Header section with Ndop pattern */}
            <div className="bg-indigo py-20 text-ivory relative ndop-pattern-bg">
                <div className="absolute inset-0 bg-black/40" />
                <div className="container-custom relative z-10 text-center">
                    <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">La Boutique</h1>
                    <p className="text-xl text-ivory-300 max-w-2xl mx-auto">
                        Portez l'héritage. Explorez notre collection exclusive de tenues artisanales en Ndop et broderies d'exception.
                    </p>
                </div>
            </div>

            <div className="container-custom py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <aside className="lg:w-64 space-y-8">
                        <div>
                            <h3 className="font-playfair text-xl font-bold text-indigo mb-4 flex items-center gap-2">
                                <Filter className="h-5 w-5" />
                                Catégories
                            </h3>
                            <div className="space-y-2">
                                {['Toutes', 'Femmes', 'Hommes', 'Mariage', 'Cérémonie', 'Accessoires'].map((cat) => (
                                    <button
                                        key={cat}
                                        className="block w-full text-left px-4 py-2 rounded-lg hover:bg-gold/10 hover:text-gold transition-colors text-gray-700 font-medium"
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-indigo rounded-2xl p-6 text-ivory">
                            <h4 className="font-playfair text-lg font-bold mb-3">Sur-Mesure</h4>
                            <p className="text-sm text-ivory-300 mb-6">
                                Un modèle vous plaît mais vous souhaitez une personnalisation totale ?
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center text-gold hover:text-gold-400 font-bold transition-colors"
                            >
                                Contactez l'atelier
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Rechercher une création..."
                                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo/20 transition-all"
                                />
                            </div>
                            <div className="hidden sm:block text-sm text-gray-500 font-medium italic">
                                {PRODUCTS.length} créations disponibles
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {PRODUCTS.map((product) => (
                                <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
                                    <div className="relative aspect-[3/4] overflow-hidden">
                                        <FaceBlurredImage
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                                        <button className="absolute top-4 right-4 h-10 w-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                                            <Heart className="h-5 w-5" />
                                        </button>

                                        <div className="absolute bottom-4 left-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                className="w-full bg-indigo text-ivory py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-600 shadow-xl"
                                            >
                                                <ShoppingCart className="h-5 w-5" />
                                                Ajouter au panier
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="text-xs font-bold text-gold uppercase tracking-wider mb-2">
                                            {product.category}
                                        </div>
                                        <h3 className="font-playfair text-xl font-bold text-indigo mb-2 group-hover:text-gold transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {product.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-2xl font-bold text-noir">
                                                {formatPrice(product.price)}
                                            </span>
                                            <Link
                                                href={`/boutique/${product.id}`}
                                                className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gold hover:border-gold hover:text-noir transition-all"
                                            >
                                                <ArrowRight className="h-5 w-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
