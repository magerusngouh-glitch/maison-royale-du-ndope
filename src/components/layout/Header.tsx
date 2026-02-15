'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';

const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Atelier', href: '/atelier' },
    { name: 'Boutique', href: '/boutique' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const totalItems = useCart((state) => state.getTotalItems());

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full transition-all duration-300',
                scrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gold/10'
                    : 'bg-white/50 backdrop-blur-sm'
            )}
        >
            <nav className="container-custom flex items-center justify-between py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-4 group">
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-full overflow-hidden border-2 border-gold transition-transform group-hover:scale-105 bg-white shadow-md">
                        <img
                            src="/images/logo.png"
                            alt="Maison Royale Logo"
                            className="object-contain w-full h-full p-2"
                        />
                    </div>
                    <div className="hidden sm:block">
                        <div className="font-playfair text-xl md:text-2xl font-bold tracking-tight text-indigo">
                            Maison Royale du Ndop
                        </div>
                        <div className="text-xs md:text-sm text-gold font-bold uppercase tracking-widest">
                            L'élégance née du patrimoine
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium transition-colors relative group text-indigo hover:text-gold"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <Link
                        href="/panier"
                        className="relative p-2 transition-colors text-indigo hover:text-gold"
                    >
                        <ShoppingCart className="h-6 w-6" />
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-noir text-xs font-bold flex items-center justify-center">
                                {totalItems}
                            </span>
                        )}
                    </Link>

                    <Link
                        href="/admin"
                        className="hidden sm:block p-2 text-gray-700 hover:text-indigo transition-colors"
                    >
                        <User className="h-6 w-6" />
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="lg:hidden p-2 text-gray-700"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-200 bg-white">
                    <div className="container-custom py-4 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-ivory-200 hover:text-indigo rounded-md transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
