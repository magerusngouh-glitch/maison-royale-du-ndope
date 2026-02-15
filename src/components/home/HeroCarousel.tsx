'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaceBlurredImage } from '@/components/ui/FaceBlurredImage';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        title: "Le Luxe du Ndop",
        subtitle: "L'Art du Patrimoine",
        description: "Découvrez l'héritage majestueux de la royauté camerounaise à travers des créations sur mesure et des silhouettes de luxe modernes.",
        image: "/images/gallery/WhatsApp Image 2026-02-11 at 13.07.02.jpeg",
        cta: "Explorer la Collection",
        link: "/boutique"
    },
    {
        id: 2,
        title: "Conçu pour la Souveraineté",
        subtitle: "Racines Ancestrales",
        description: "Chaque fil porte le poids d'un royaume. Nous lions la sagesse ancienne à la haute couture contemporaine.",
        image: "/images/gallery/WhatsApp Image 2026-02-11 at 13.07.03 (1).jpeg",
        cta: "Découvrir notre Héritage",
        link: "/atelier"
    },
    {
        id: 3,
        title: "Taillé pour Votre Majesté",
        subtitle: "Atelier Sur Mesure",
        description: "Sublimez votre garde-robe avec une pièce conçue exclusivement pour vous. Une expression unique de l'héritage Ndop.",
        image: "/images/gallery/WhatsApp Image 2026-02-11 at 13.07.01.jpeg",
        cta: "Demande de Sur Mesure",
        link: "/contact"
    }
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-background-dark">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        }`}
                >
                    <FaceBlurredImage
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                        <div className={`max-w-4xl transition-all duration-1000 transform ${index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            <h2 className="text-white text-xs uppercase tracking-[0.6em] mb-6 animate-pulse">
                                {slide.subtitle}
                            </h2>
                            <h1 className="text-white text-5xl md:text-7xl font-extralight tracking-tight mb-8">
                                {slide.title.split('Ndop')[0]}
                                {slide.title.includes('Ndop') && (
                                    <span className="italic text-primary">Ndop</span>
                                )}
                            </h1>
                            <p className="text-white text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
                                {slide.description}
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href={slide.link}
                                    className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest rounded transition-all transform hover:scale-105"
                                >
                                    {slide.cta}
                                </Link>
                                <Link
                                    href="/contact"
                                    className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-4 text-xs font-bold uppercase tracking-widest rounded transition-all"
                                >
                                    Demande de Devis
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-10 h-10" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="w-10 h-10" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-12 h-[2px] transition-all duration-300 ${index === current ? 'bg-primary' : 'bg-white/30'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 z-10 mb-20 md:mb-0">
                <span className="text-white text-[10px] uppercase tracking-widest">Découvrir</span>
                <div className="w-[1px] h-12 bg-white/50 animate-bounce"></div>
            </div>
        </section>
    );
}
