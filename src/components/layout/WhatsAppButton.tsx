'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

export default function WhatsAppButton() {
    return (
        <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
            aria-label="Contactez-nous sur WhatsApp"
        >
            <MessageCircle className="h-7 w-7" />
            <span className="absolute right-full mr-3 px-3 py-2 bg-noir text-ivory text-sm font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Contactez-nous
            </span>
        </a>
    );
}
