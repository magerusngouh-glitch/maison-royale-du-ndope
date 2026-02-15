import { MapPin, Phone, Mail, Clock, MessageSquare, Send, Instagram, Facebook } from 'lucide-react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata = {
    title: 'Contactez Maison Royale du Ndop | Dschang, Cameroun',
    description: 'Prenez rendez-vous à notre atelier de Dschang ou commandez vos tenues personnalisées en ligne.',
};

export default function ContactPage() {
    return (
        <div className="bg-ivory/30 min-h-screen pb-20">
            {/* Header Section */}
            <section className="bg-indigo py-20 text-ivory ndop-pattern-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40" />
                <div className="container-custom relative z-10 text-center">
                    <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">Contactez-nous</h1>
                    <p className="text-xl text-ivory-300 max-w-2xl mx-auto italic">
                        "Notre atelier à Dschang vous ouvre ses portes pour donner vie à vos rêves d'élégance."
                    </p>
                </div>
            </section>

            <div className="container-custom -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                    <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]} />

                    <div className="grid lg:grid-cols-2 gap-16 mt-12">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="font-playfair text-3xl font-bold text-indigo mb-8">Informations de l'Atelier</h2>
                                <div className="grid gap-8">
                                    <div className="flex gap-6">
                                        <div className="h-14 w-14 shrink-0 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                            <MapPin className="h-7 w-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-indigo text-lg mb-1">Notre Adresse</h4>
                                            <p className="text-gray-600">Dschang, Région de l'Ouest</p>
                                            <p className="text-gray-600">République du Cameroun</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="h-14 w-14 shrink-0 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                            <Phone className="h-7 w-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-indigo text-lg mb-1">Téléphone & WhatsApp</h4>
                                            <p className="text-noir font-bold">+237 678 84 12 57</p>
                                            <p className="text-gray-500 text-sm">Disponible de 8h à 18h</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="h-14 w-14 shrink-0 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                            <Mail className="h-7 w-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-indigo text-lg mb-1">Email</h4>
                                            <p className="text-gray-600 italic">contact@maisonroyale-ndop.com</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6">
                                        <div className="h-14 w-14 shrink-0 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                            <Clock className="h-7 w-7" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-indigo text-lg mb-1">Horaires d'ouverture</h4>
                                            <p className="text-gray-600">Lundi - Samedi : 08h00 - 18h00</p>
                                            <p className="text-gray-600">Dimanche : Sur rendez-vous uniquement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl bg-indigo text-ivory space-y-6 shadow-xl">
                                <h3 className="font-playfair text-2xl font-bold">Réseaux Sociaux</h3>
                                <p className="text-ivory-300">Suivez nos dernières créations et les coulisses de l'atelier sur nos pages officielles.</p>
                                <div className="flex gap-4">
                                    <a href="#" className="h-12 w-12 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-noir transition-all">
                                        <Instagram className="h-6 w-6" />
                                    </a>
                                    <a href="#" className="h-12 w-12 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-noir transition-all">
                                        <Facebook className="h-6 w-6" />
                                    </a>
                                    <a href="https://wa.me/237678841257" target="_blank" className="h-12 w-12 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-green-500 hover:border-green-500 hover:text-white transition-all">
                                        <MessageSquare className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-ivory/50 rounded-3xl p-8 md:p-12 border border-ivory-200">
                            <div className="mb-10">
                                <h3 className="font-playfair text-3xl font-bold text-indigo mb-2">Envoyez un message</h3>
                                <p className="text-gray-600">Pour toute demande de devis, de partenariat ou de prise de rendez-vous.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-indigo uppercase tracking-wider">Nom Complet</label>
                                    <input type="text" placeholder="Ex: Mme Ngassa" className="input-field bg-white" />
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-indigo uppercase tracking-wider">Email</label>
                                        <input type="email" placeholder="votre@email.com" className="input-field bg-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-indigo uppercase tracking-wider">Téléphone</label>
                                        <input type="tel" placeholder="+237 ..." className="input-field bg-white" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-indigo uppercase tracking-wider">Objet</label>
                                    <select className="input-field bg-white">
                                        <option>Commande Sur-Mesure</option>
                                        <option>Demande d'information boutique</option>
                                        <option>Prise de rendez-vous atelier</option>
                                        <option>Autre</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-indigo uppercase tracking-wider">Votre Message</label>
                                    <textarea rows={5} placeholder="Décrivez votre besoin en quelques lignes..." className="input-field bg-white"></textarea>
                                </div>

                                <button type="submit" className="w-full btn-primary py-4 flex items-center justify-center gap-3">
                                    Envoyer le message
                                    <Send className="h-5 w-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
