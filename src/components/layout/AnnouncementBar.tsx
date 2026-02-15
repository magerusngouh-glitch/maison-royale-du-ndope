'use client';

import { Megaphone, X } from 'lucide-react';
import { useState } from 'react';

export default function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative bg-gradient-gold text-noir">
            <div className="container-custom py-2.5 px-4">
                <div className="flex items-center justify-center gap-3 text-sm font-medium">
                    <Megaphone className="h-4 w-4 flex-shrink-0" />
                    <p className="text-center">
                        <span className="hidden sm:inline">Commandez en ligne • </span>
                        Livraison disponible • WhatsApp rapide
                    </p>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute right-4 p-1 hover:bg-noir/10 rounded transition-colors"
                        aria-label="Fermer"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
