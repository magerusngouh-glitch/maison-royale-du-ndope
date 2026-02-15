'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaceBlurredImage } from '@/components/ui/FaceBlurredImage';
import { ZoomIn, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GalleryGridProps {
    images: string[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="space-y-8">
            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-md hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => setSelectedImage(src)}
                    >
                        <FaceBlurredImage
                            src={src}
                            alt={`Galerie Maison Royale ${index + 1}`}
                            fill
                            className="object-cover transition-all duration-500 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-indigo transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                <ZoomIn className="h-6 w-6" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-[110]"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-8 w-8" />
                    </button>

                    <div className="relative max-w-5xl w-full h-[85vh] flex items-center justify-center">
                        <FaceBlurredImage
                            src={selectedImage}
                            alt="Zoom"
                            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
                            width={1200} // Approximate for high quality
                            height={1600}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
