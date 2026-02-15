import type { Metadata } from 'next';
import { playfair, poppins, manrope } from '@/styles/fonts';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import LayoutWrapper from '@/components/layout/LayoutWrapper';

export const metadata: Metadata = {
    title: {
        default: 'Maison Royale du Ndop | Couture & Broderie Traditionnelle à Dschang',
        template: '%s | Maison Royale du Ndop',
    },
    description:
        'Atelier de couture et broderie à Dschang, Cameroun. Créations uniques en tissu Ndop, tenues traditionnelles et modernes. 20 ans d\'expérience avec Nguedong Pergolaise.',
    keywords: [
        'Ndop',
        'couture Dschang',
        'broderie Cameroun',
        'tenues traditionnelles',
        'Grassfields',
        'mode africaine',
        'atelier couture',
        'Nguedong Pergolaise',
    ],
    authors: [{ name: 'Maison Royale du Ndop' }],
    creator: 'Maison Royale du Ndop',
    publisher: 'Maison Royale du Ndop',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: '/',
        title: 'Maison Royale du Ndop | L\'élégance née du patrimoine',
        description:
            'Atelier de couture et broderie à Dschang. Créations uniques en tissu Ndop, tenues traditionnelles et modernes.',
        siteName: 'Maison Royale du Ndop',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Maison Royale du Ndop',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Maison Royale du Ndop',
        description: 'L\'élégance née du patrimoine - Couture & Broderie Traditionnelle',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className={`${playfair.variable} ${poppins.variable} ${manrope.variable}`}>
            <body className="antialiased">
                <LayoutWrapper>
                    {children}
                </LayoutWrapper>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        duration: 3000,
                        style: {
                            background: '#1E2A44',
                            color: '#F5F1E8',
                        },
                        success: {
                            iconTheme: {
                                primary: '#C8A24D',
                                secondary: '#F5F1E8',
                            },
                        },
                    }}
                />
            </body>
        </html>
    );
}
