import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-indigo text-ivory">
            <div className="container-custom py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {/* À propos */}
                    <div>
                        <h3 className="font-playfair text-xl font-bold text-gold mb-4">
                            Maison Royale du Ndop
                        </h3>
                        <p className="text-sm text-ivory-300 leading-relaxed mb-4">
                            Atelier de couture et broderie à Dschang, valorisant le patrimoine Ndop avec élégance et modernité depuis 20 ans.
                        </p>
                        <div className="flex space-x-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-ivory/10 rounded-full hover:bg-gold hover:text-noir transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-ivory/10 rounded-full hover:bg-gold hover:text-noir transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="font-playfair text-lg font-semibold text-gold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm text-ivory-300 hover:text-gold transition-colors">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/atelier" className="text-sm text-ivory-300 hover:text-gold transition-colors">
                                    L'Atelier
                                </Link>
                            </li>
                            <li>
                                <Link href="/boutique" className="text-sm text-ivory-300 hover:text-gold transition-colors">
                                    Boutique
                                </Link>
                            </li>
                            <li>
                                <Link href="/galerie" className="text-sm text-ivory-300 hover:text-gold transition-colors">
                                    Galerie
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-ivory-300 hover:text-gold transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-playfair text-lg font-semibold text-gold mb-4">Nos Services</h3>
                        <ul className="space-y-2 text-sm text-ivory-300">
                            <li>Couture sur-mesure</li>
                            <li>Broderie artisanale</li>
                            <li>Tenues traditionnelles</li>
                            <li>Robes de cérémonie</li>
                            <li>Collection mariage</li>
                            <li>Accessoires Ndop</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-playfair text-lg font-semibold text-gold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-ivory-300">Dschang, Région de l'Ouest, Cameroun</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                                <a
                                    href="tel:+237678841257"
                                    className="text-sm text-ivory-300 hover:text-gold transition-colors"
                                >
                                    +237 678 841 257
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                                <a
                                    href="mailto:contact@maisonroyalendop.com"
                                    className="text-sm text-ivory-300 hover:text-gold transition-colors"
                                >
                                    contact@maisonroyalendop.com
                                </a>
                            </li>
                        </ul>
                        <div className="mt-4">
                            <p className="text-xs text-ivory-400 mb-2">Horaires d'ouverture :</p>
                            <p className="text-sm text-ivory-300">Lun - Sam : 9h - 18h</p>
                            <p className="text-sm text-ivory-300">Dimanche : Sur rendez-vous</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-ivory/20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-ivory-400">
                            © {currentYear} Maison Royale du Ndop. Tous droits réservés.
                        </p>
                        <div className="flex space-x-6 text-sm text-ivory-400">
                            <Link href="/mentions-legales" className="hover:text-gold transition-colors">
                                Mentions légales
                            </Link>
                            <Link href="/confidentialite" className="hover:text-gold transition-colors">
                                Confidentialité
                            </Link>
                            <Link href="/cgv" className="hover:text-gold transition-colors">
                                CGV
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
