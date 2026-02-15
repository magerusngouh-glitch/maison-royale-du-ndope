import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { FaceBlurredImage } from '@/components/ui/FaceBlurredImage';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center ndop-pattern-bg overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo via-indigo-700 to-indigo-900 opacity-95" />

            {/* Content */}
            <div className="relative z-10 container-custom py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div className="text-center lg:text-left animate-fade-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full text-gold text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4" />
                            <span>Créations artisanales depuis 20 ans</span>
                        </div>

                        <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-ivory mb-6 leading-tight">
                            L'élégance née du{' '}
                            <span className="text-gradient">patrimoine</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-ivory-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Découvrez l'art du Ndop réinventé par Nguedong Pergolaise. Couture sur-mesure, broderie artisanale et tenues traditionnelles d'exception à Dschang.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/boutique"
                                className="btn-secondary group"
                            >
                                Voir la boutique
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/galerie"
                                className="btn-outline border-ivory text-ivory hover:bg-ivory hover:text-indigo"
                            >
                                Explorer la galerie
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-ivory/20">
                            <div>
                                <div className="font-playfair text-3xl sm:text-4xl font-bold text-gold mb-1">
                                    20+
                                </div>
                                <div className="text-sm text-ivory-300">Années d'expérience</div>
                            </div>
                            <div>
                                <div className="font-playfair text-3xl sm:text-4xl font-bold text-gold mb-1">
                                    500+
                                </div>
                                <div className="text-sm text-ivory-300">Créations uniques</div>
                            </div>
                            <div>
                                <div className="font-playfair text-3xl sm:text-4xl font-bold text-gold mb-1">
                                    100%
                                </div>
                                <div className="text-sm text-ivory-300">Artisanal</div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative lg:h-[600px] h-[400px] animate-fade-in animation-delay-200">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-2xl" />
                        <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-ivory/10">
                            <FaceBlurredImage
                                src="/images/nguedong-pergolaise-designer.jpg"
                                alt="Nguedong Pergolaise - Designer Maison Royale du Ndop"
                                fill
                                className="object-contain" // Contain to show the whole outfit
                            />
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center overflow-hidden">
                                    <Image
                                        src="/images/logo.png"
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-indigo">Nguedong Pergolaise</div>
                                    <div className="text-sm text-gray-600 font-medium">Designer & Fondatrice</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        </section>
    );
}
