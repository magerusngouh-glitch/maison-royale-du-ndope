'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { formatPrice, getWhatsAppLink } from '@/lib/utils';
import { ArrowLeft, ShieldCheck, Truck, MessageSquare, CreditCard, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
    const { items, getTotalPrice, clearCart } = useCart();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        paymentMethod: 'whatsapp'
    });

    if (items.length === 0) {
        if (typeof window !== 'undefined') router.push('/boutique');
        return null;
    }

    const handleWhatsAppOrder = () => {
        const orderSummary = items.map(i => `${i.name} x${i.quantity} (${formatPrice(i.price * i.quantity)})`).join('\n');
        const text = `Bonjour Maison Royale,\n\nJe souhaite passer commande :\n\n${orderSummary}\n\nTotal : ${formatPrice(getTotalPrice())}\n\nMes informations :\nNom : ${formData.name}\nVille : ${formData.city}\nTél : ${formData.phone}\n\nMerci !`;

        const link = `https://wa.me/237678841257?text=${encodeURIComponent(text)}`;
        window.open(link, '_blank');

        clearCart();
        router.push('/success');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (formData.paymentMethod === 'whatsapp') {
            handleWhatsAppOrder();
            return;
        }

        // Logic for Stripe or other gateways would go here
        // For now, let's simulate success
        setTimeout(() => {
            clearCart();
            router.push('/success');
        }, 2000);
    };

    return (
        <div className="bg-ivory/50 min-h-screen py-10 md:py-20">
            <div className="container-custom">
                <Link href="/panier" className="inline-flex items-center text-indigo hover:text-gold font-bold mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Retour au panier
                </Link>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Form Section */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                            <h1 className="font-playfair text-3xl font-bold text-indigo mb-8">Informations de livraison</h1>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-indigo uppercase tracking-wider">Nom Complet</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Ex: Jean Dupont"
                                            className="input-field"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-indigo uppercase tracking-wider">Téléphone</label>
                                        <input
                                            required
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="Ex: +237 6XX XXX XXX"
                                            className="input-field"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-indigo uppercase tracking-wider">Ville</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        placeholder="Ex: Douala, Yaoundé, Dschang..."
                                        className="input-field"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-indigo uppercase tracking-wider">Adresse de livraison</label>
                                    <textarea
                                        required
                                        rows={3}
                                        value={formData.address}
                                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        placeholder="Détails du quartier, rue..."
                                        className="input-field"
                                    ></textarea>
                                </div>

                                <div className="pt-8 border-t border-gray-100">
                                    <h2 className="font-playfair text-2xl font-bold text-indigo mb-6">Mode de paiement</h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, paymentMethod: 'whatsapp' })}
                                            className={`p-6 rounded-2xl border-2 transition-all text-left flex flex-col gap-3 ${formData.paymentMethod === 'whatsapp' ? 'border-gold bg-gold/5 shadow-md' : 'border-gray-100 bg-gray-50'}`}
                                        >
                                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                <MessageSquare className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-indigo">Commander via WhatsApp</div>
                                                <div className="text-xs text-gray-500">Paiement manuel (OM, Momo)</div>
                                            </div>
                                            {formData.paymentMethod === 'whatsapp' && <CheckCircle2 className="absolute top-4 right-4 h-5 w-5 text-gold" />}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                                            className={`p-6 rounded-2xl border-2 transition-all text-left flex flex-col gap-3 ${formData.paymentMethod === 'card' ? 'border-indigo bg-indigo/5 shadow-md' : 'border-gray-100 bg-gray-50'}`}
                                        >
                                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo">
                                                <CreditCard className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-indigo">Carte Bancaire</div>
                                                <div className="text-xs text-gray-500">Paiement en ligne sécurisé</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                <button
                                    disabled={loading}
                                    type="submit"
                                    className="w-full btn-primary py-5 text-xl mt-8"
                                >
                                    {loading ? "Traitement en cours..." : "Finaliser ma commande Royale"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="space-y-8">
                        <div className="bg-noir rounded-3xl p-8 md:p-10 text-ivory shadow-2xl">
                            <h2 className="font-playfair text-2xl font-bold mb-8 flex items-center gap-3">
                                <ShieldCheck className="h-6 w-6 text-gold" />
                                Résumé de la commande
                            </h2>

                            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide mb-8">
                                {items.map((item) => (
                                    <div key={item.productId} className="flex gap-4 items-center bg-white/5 p-4 rounded-2xl border border-white/10">
                                        <div className="relative h-16 w-12 rounded-lg overflow-hidden shrink-0">
                                            <Image src={item.image || '/images/logo.png'} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm">{item.name}</h4>
                                            <p className="text-xs text-ivory-300">Quantité: {item.quantity}</p>
                                        </div>
                                        <div className="font-bold">
                                            {formatPrice(item.price * item.quantity)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 pt-6 border-t border-white/10">
                                <div className="flex justify-between">
                                    <span className="text-ivory-300">Sous-total</span>
                                    <span className="font-bold">{formatPrice(getTotalPrice())}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Truck className="h-4 w-4 text-gold" />
                                        <span className="text-ivory-300 text-sm">Livraison</span>
                                    </div>
                                    <span className="text-gold font-bold italic text-sm">A payer à la réception</span>
                                </div>
                                <div className="pt-6 flex justify-between items-center">
                                    <span className="text-xl font-bold">Total à payer</span>
                                    <span className="text-3xl font-playfair font-bold text-gold">{formatPrice(getTotalPrice())}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gold/10 border border-gold/20 rounded-2xl p-6 flex gap-4">
                            <div className="h-10 w-10 shrink-0 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                                <CreditCard className="h-5 w-5" />
                            </div>
                            <p className="text-sm text-indigo-900 leading-relaxed">
                                <strong>Paiement sécurisé :</strong> Toutes vos transactions sont protégées. Pour les paiements via <strong>Orange Money</strong> ou <strong>Mobile Money</strong>, veuillez utiliser l'option WhatsApp pour être guidé(e) pas à pas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
