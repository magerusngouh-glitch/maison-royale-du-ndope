import Image from 'next/image';
import { FaceBlurredImage } from '@/components/ui/FaceBlurredImage';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { Sparkles, Scissors, Award, History, Heart, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'L\'Atelier & La Fondatrice | Maison Royale du Ndop',
    description: 'Découvrez l\'histoire de Nguedong Pergolaise et l\'âme de notre atelier de couture artisanale à Dschang.',
};

export default function AtelierPage() {
    return (
        <div className="bg-ivory/50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <FaceBlurredImage
                    src="/images/gallery/WhatsApp Image 2026-02-11 at 13.06.47.jpeg"
                    alt="L'Atelier Maison Royale"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-noir/60 backdrop-blur-[2px]" />
                <div className="container-custom relative z-10 text-center">
                    <h1 className="font-playfair text-5xl md:text-7xl font-bold text-ivory mb-6 animate-fade-up">
                        L'Âme de <span className="text-gold">l'Atelier</span>
                    </h1>
                    <p className="text-xl text-ivory-300 max-w-2xl mx-auto animate-fade-up animation-delay-200">
                        Où chaque point de couture préserve un héritage et chaque création célèbre l'élégance africaine.
                    </p>
                </div>
            </section>

            <div className="container-custom -mt-12 relative z-20">
                <div className="bg-white rounded-t-3xl shadow-2xl p-8 md:p-12 lg:p-16">
                    <Breadcrumbs
                        items={[
                            { label: 'Accueil', href: '/' },
                            { label: 'L\'Atelier' }
                        ]}
                    />

                    {/* La Fondatrice Section */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mt-12">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gold/10 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <FaceBlurredImage
                                    src="/images/nguedong-pergolaise-designer.jpg"
                                    alt="Nguedong Pergolaise"
                                    fill
                                    className="object-contain bg-ivory-100"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-indigo p-6 rounded-2xl text-ivory shadow-xl max-w-[200px]">
                                <div className="font-playfair text-3xl font-bold text-gold mb-1">20+</div>
                                <div className="text-sm font-medium">Années d'excellence en couture</div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    <Award className="h-4 w-4" />
                                    La Fondatrice
                                </div>
                                <h2 className="font-playfair text-4xl md:text-5xl font-bold text-indigo mb-6">
                                    Nguedong Pergolaise
                                </h2>
                                <div className="prose prose-lg text-gray-700 max-w-none">
                                    <p className="leading-relaxed mb-6 italic text-xl text-indigo-900 font-medium">
                                        "Ma mission est de donner une voix contemporaine au tissu Ndop, tout en respectant scrupuleusement les codes de notre héritage."
                                    </p>
                                    <p className="mb-6">
                                        Originaire de l'Ouest Cameroun, Nguedong Pergolaise est une véritable passionnée des arts textiles. Avec plus de deux décennies d'expérience, elle a su imposer sa griffe comme une référence de l'élégance traditionnelle à Dschang.
                                    </p>
                                    <p>
                                        Son travail ne se limite pas à la confection de vêtements ; c'est un acte de préservation culturelle. Elle sélectionne avec soin les tissus les plus nobles et supervise chaque broderie pour garantir une qualité royale à ses clients.
                                    </p>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 shrink-0 rounded-xl bg-ivory-200 flex items-center justify-center text-indigo">
                                        <Scissors className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-indigo mb-1">Savoir-faire</h4>
                                        <p className="text-sm text-gray-600">Techniques de broderie main ancestrales.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 shrink-0 rounded-xl bg-ivory-200 flex items-center justify-center text-indigo">
                                        <History className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-indigo mb-1">Expérience</h4>
                                        <p className="text-sm text-gray-600">Plus de 20 ans au service de la beauté.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notre Philosophie */}
                    <div className="mt-32 pt-20 border-t border-gray-100">
                        <div className="text-center mb-16">
                            <h2 className="font-playfair text-4xl font-bold text-indigo mb-4">L'Atelier Maison Royale</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Un lieu où la tradition rencontre l'innovation pour créer des chefs-d'œuvre vestimentaires.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Qualité Sans Compromis",
                                    desc: "Nous utilisons uniquement du coton de haute qualité et du véritable tissu Ndop tissé et teint à la main.",
                                    icon: <CheckCircle2 className="h-! w-8" />
                                },
                                {
                                    title: "Sur-Mesure Absolu",
                                    desc: "Chaque pièce est adaptée à votre morphologie et à votre personnalité pour une allure impériale.",
                                    icon: <Scissors className="h-8 w-8" />
                                },
                                {
                                    title: "Passion du Détail",
                                    desc: "Les finitions, les broderies et les doublures sont traitées avec une attention méticuleuse.",
                                    icon: <Heart className="h-8 w-8" />
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-ivory-50 p-8 rounded-2xl border border-ivory-200 hover:shadow-lg transition-all">
                                    <div className="text-gold mb-6">{item.icon}</div>
                                    <h3 className="font-playfair text-2xl font-bold text-indigo mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Processus Creation */}
                    <div className="mt-32 rounded-3xl bg-indigo p-10 md:p-20 text-ivory relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
                            <Image
                                src="/images/ndop-pattern.svg"
                                alt="Pattern"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="relative z-10 lg:flex items-center gap-12">
                            <div className="lg:w-1/2">
                                <h2 className="font-playfair text-4xl font-bold mb-6">Le processus Maison Royale</h2>
                                <div className="space-y-6">
                                    {[
                                        "Consultation et prise de mesures personnalisée",
                                        "Sélection des tissus et motifs de broderie",
                                        "Confection artisanale dans notre atelier de Dschang",
                                        "Essayage final et ajustements de précision"
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="h-8 w-8 rounded-full border border-gold text-gold flex items-center justify-center font-bold">{i + 1}</div>
                                            <p className="font-medium">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 mt-12 lg:mt-0">
                                <Link
                                    href="/contact"
                                    className="bg-gold text-noir px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-gold-600 transition-all w-full sm:w-auto"
                                >
                                    Démarrer votre création sur-mesure
                                    <ChevronRight className="h-6 w-6" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
