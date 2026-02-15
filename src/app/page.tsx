import HeroCarousel from '@/components/home/HeroCarousel';
import Link from 'next/link';
import Image from 'next/image';
import { FaceBlurredImage } from '@/components/ui/FaceBlurredImage';
import { ArrowRight, MapPin, Clock, Mail, Scissors, Sparkles, Heart } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';
import { PRODUCTS } from '@/constants';
import { Product } from '@/types/legacy_types';

export default function HomePage() {
    return (
        <div className="bg-ivory selection:bg-gold selection:text-noir font-manrope">
            {/* Section Hero avec Carrousel */}
            <HeroCarousel />

            {/* Introduction au Patrimoine */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 ndop-pattern-bg pointer-events-none opacity-10"></div>
                <div className="container-custom grid md:grid-cols-2 gap-20 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="aspect-[4/5] relative bg-gray-200 rounded-lg overflow-hidden shadow-2xl">
                            <FaceBlurredImage
                                src="/images/gallery/WhatsApp Image 2026-02-11 at 13.06.46.jpeg"
                                alt="Détail du tissu Ndop traditionnel"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h3 className="text-gold font-semibold tracking-widest uppercase text-xs mb-4">Racines Ancestrales</h3>
                        <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-indigo">L'art du Ndop, réinventé</h2>
                        <div className="space-y-6 text-lg font-light leading-relaxed text-gray-700">
                            <p>
                                Maison Royale du Ndop est un atelier de couture et broderie situé à Dschang, au cœur des Grassfields camerounais. Nous valorisons le patrimoine textile Ndop en créant des pièces uniques alliant tradition et modernité.
                            </p>
                            <p>
                                <strong className="text-indigo">Nguedong Pergolaise</strong>, fondatrice et designer, cumule 20 ans d'expérience en couture et broderie. Elle réinvente les tenues traditionnelles avec des finitions premium et une élégance contemporaine.
                            </p>
                        </div>
                        <div className="mt-10">
                            <Link href="/atelier" className="inline-flex items-center gap-4 text-gold font-bold text-xs uppercase tracking-widest group">
                                Découvrir notre histoire
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nos Services */}
            <section className="py-24 bg-white/30">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light text-indigo mb-4">
                            Nos Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            De la conception à la réalisation, nous créons des pièces d'exception qui célèbrent votre élégance
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 text-center">
                            <div className="h-16 w-16 rounded-full bg-indigo/5 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <Scissors className="h-8 w-8 text-gold" />
                            </div>
                            <h3 className="text-2xl font-medium text-indigo mb-3">
                                Couture Sur-Mesure
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Créations personnalisées adaptées à vos mesures et vos envies. Chaque pièce est unique et conçue avec soin.
                            </p>
                        </div>

                        <div className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 text-center">
                            <div className="h-16 w-16 rounded-full bg-indigo/5 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <Sparkles className="h-8 w-8 text-gold" />
                            </div>
                            <h3 className="text-2xl font-medium text-indigo mb-3">
                                Broderie Artisanale
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Broderie main d'exception qui sublime vos tenues. Motifs traditionnels et contemporains.
                            </p>
                        </div>

                        <div className="group p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 text-center">
                            <div className="h-16 w-16 rounded-full bg-indigo/5 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                                <Heart className="h-8 w-8 text-gold" />
                            </div>
                            <h3 className="text-2xl font-medium text-indigo mb-3">
                                Tenues Ndop
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Valorisation du tissu Ndop dans des créations modernes et élégantes pour toutes occasions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collections Vedettes */}
            <section className="py-24 bg-white/50" id="collections">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <h3 className="text-gold font-semibold tracking-widest uppercase text-xs mb-4">L'Archive</h3>
                            <h2 className="text-4xl font-light text-indigo">Collections Vedettes</h2>
                        </div>
                        <Link href="/boutique" className="text-xs font-bold uppercase tracking-widest border-b-2 border-gold pb-2 hover:opacity-70 transition-opacity">
                            Voir toutes les catégories
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PRODUCTS.slice(0, 4).map((product: Product) => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                                    <FaceBlurredImage
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {product.isBespoke && (
                                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-indigo">
                                            Sur Mesure
                                        </div>
                                    )}
                                    {product.isNew && (
                                        <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                            Nouveau
                                        </div>
                                    )}
                                </div>
                                <div className="text-center">
                                    <h4 className="text-lg font-medium mb-1 text-indigo group-hover:text-gold transition-colors">{product.name}</h4>
                                    <p className="text-gold font-bold tracking-widest text-sm">{product.price.toLocaleString()} FCFA</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Sur-Mesure CTA */}
            <section className="py-24 bg-indigo text-white relative overflow-hidden" id="bespoke">
                <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 pointer-events-none hidden lg:block">
                    <Image
                        src="/images/gallery/WhatsApp Image 2026-02-11 at 13.06.30 (2).jpeg"
                        alt="Atelier de Couture"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container-custom relative z-10">
                    <div className="max-w-xl">
                        <h3 className="text-gold font-semibold tracking-widest uppercase text-xs mb-4 underline decoration-gold/30 underline-offset-8">Atelier Personnalisé</h3>
                        <h2 className="text-4xl md:text-5xl font-light mb-8">Taillé pour Votre Majesté</h2>
                        <p className="text-lg font-light mb-12 opacity-80 leading-relaxed">
                            Sublimez votre garde-robe avec une pièce conçue exclusivement pour vous. Des consultations personnelles aux finitions à la main, notre service sur-mesure garantit un ajustement parfait et une expression unique de l'héritage Ndop.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center gap-3 px-8 py-4 rounded font-bold text-xs uppercase tracking-widest transition-all"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.499-5.688-1.447l-6.305 1.652zm6.599-3.835c1.455.864 3.037 1.32 4.653 1.321 4.958 0 8.991-4.031 8.993-8.992 0-2.404-.937-4.664-2.637-6.366-1.701-1.701-3.961-2.636-6.364-2.637-4.961 0-8.993 4.032-8.995 8.993-.001 1.543.391 3.053 1.137 4.383l-.993 3.626 3.71-.973zm8.302-6.101c-.266-.134-1.574-.776-1.817-.865-.243-.09-.419-.134-.595.134-.176.268-.68 1.1-.834 1.1-.154.089-.308.268-.573.134-.266-.134-1.122-.414-2.138-1.321-.791-.706-1.326-1.577-1.481-1.845-.154-.268-.016-.413.118-.546.121-.119.266-.312.4-.468.134-.156.179-.268.268-.446.089-.178.044-.334-.022-.468-.066-.134-.595-1.433-.815-1.963-.214-.516-.45-.445-.618-.454-.159-.009-.34-.01-.522-.01s-.477.067-.726.334c-.249.268-.951.93-.951 2.269s.973 2.631 1.107 2.809c.134.178 1.916 2.923 4.64 4.102.648.28 1.154.448 1.547.573.651.206 1.244.177 1.712.108.522-.078 1.574-.643 1.796-1.264.221-.621.221-1.154.154-1.264-.066-.109-.243-.178-.509-.312z"></path>
                                </svg>
                                Prendre Rendez-vous sur WhatsApp
                            </a>
                            <Link href="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest transition-all">
                                En savoir plus
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Informations Showroom */}
            <section className="py-24 bg-ivory">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-16 rounded-xl border border-gold/10 shadow-sm">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-light mb-8 text-indigo">Notre Atelier</h2>
                            <div className="space-y-6 text-lg font-light text-gray-700">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-6 w-6 text-gold mt-1" />
                                    <div>
                                        <p className="font-medium text-indigo">Atelier Dschang</p>
                                        <p className="opacity-80">Quartier Foréké, Dschang, Cameroun</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="h-6 w-6 text-gold mt-1" />
                                    <div>
                                        <p className="font-medium text-indigo">Heures d'ouverture</p>
                                        <p className="opacity-80">Lun — Ven: 09:00 - 18:00</p>
                                        <p className="opacity-80">Sam: 09:00 - 14:00</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 text-gold mt-1" />
                                    <div>
                                        <p className="font-medium text-indigo">Contact Direct</p>
                                        <p className="opacity-80 text-sm">atelier@maisonndop.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-80 relative rounded-lg overflow-hidden shadow-md grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/images/gallery/WhatsApp Image 2026-02-11 at 13.06.40.jpeg"
                                alt="Localisation de l'Atelier"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
