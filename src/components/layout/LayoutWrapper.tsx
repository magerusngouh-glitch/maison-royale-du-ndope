'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import AnnouncementBar from '@/components/layout/AnnouncementBar';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminPage = pathname?.startsWith('/admin');

    if (isAdminPage) {
        return <main className="min-h-screen">{children}</main>;
    }

    return (
        <>
            <AnnouncementBar />
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <WhatsAppButton />
        </>
    );
}
