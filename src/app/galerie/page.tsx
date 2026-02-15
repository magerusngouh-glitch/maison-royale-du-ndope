import GalleryGrid from '@/components/gallery/GalleryGrid';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { getGalleryImages } from '@/lib/gallery';
import { Sparkles, Camera } from 'lucide-react';

export const metadata = {
    title: 'Galerie de Modèles | Maison Royale du Ndop',
    description: 'Explorez nos créations uniques et modèles de tenues traditionnelles Ndop.',
};

export default function GaleriePage() {
    const images = getGalleryImages();

    return (
        <div className="bg-ivory/50 min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-indigo py-16 md:py-24 text-ivory relative overflow-hidden ndop-pattern-bg">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                <div className="container-custom relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6 animate-fade-up">
                        <Sparkles className="h-4 w-4" />
                        <span>Notre savoir-faire en images</span>
                    </div>

                    <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up animation-delay-200">
                        Galerie de <span className="text-gold">Modèles</span>
                    </h1>

                    <p className="text-ivory-300 text-lg max-w-2xl mx-auto leading-relaxed animate-fade-up animation-delay-400">
                        Découvrez une collection de nos plus belles créations. Chaque pièce raconte une histoire de tradition, d'élégance et de passion pour le textile Ndop.
                    </p>
                </div>
            </div>

            <div className="container-custom -mt-8 relative z-20">
                <div className="bg-white rounded-t-3xl shadow-xl p-6 md:p-10 border-t border-gray-100">
                    <Breadcrumbs
                        items={[
                            { label: 'Accueil', href: '/' },
                            { label: 'Galerie' }
                        ]}
                    />

                    {images.length > 0 ? (
                        <GalleryGrid images={images} />
                    ) : (
                        <div className="text-center py-40 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                            <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-medium text-gray-500">Aucune photo dans la galerie</h3>
                            <p className="text-gray-400 mt-2">Nous préparons actuellement nos plus beaux modèles pour vous.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Contact Section */}
            <section className="container-custom mt-20">
                <div className="bg-gradient-gold p-1 rounded-3xl">
                    <div className="bg-noir rounded-[calc(1.5rem-2px)] p-10 md:p-16 text-center text-ivory">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                            Un de ces modèles vous inspire ?
                        </h2>
                        <p className="text-ivory-300 text-lg mb-10 max-w-2xl mx-auto">
                            Nous pouvons reproduire ces modèles à vos mesures ou créer une version personnalisée selon vos préférences.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/contact" className="bg-ivory text-noir px-8 py-3 rounded-full font-bold hover:bg-gold transition-colors">
                                Demander un devis
                            </a>
                            <a href="https://wa.me/237678841257" target="_blank" className="border-2 border-ivory text-ivory px-8 py-3 rounded-full font-bold hover:bg-ivory hover:text-noir transition-all">
                                Discuter sur WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
