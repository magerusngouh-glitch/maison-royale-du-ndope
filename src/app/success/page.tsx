import Link from 'next/link';
import { CheckCircle, ShoppingBag, ArrowRight, MessageSquare } from 'lucide-react';

export default function SuccessPage() {
    return (
        <div className="bg-ivory/50 min-h-screen py-20">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center">
                    <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8 animate-bounce">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>

                    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-indigo mb-6">
                        Commande Royale <span className="text-gold">Confirmée !</span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        Merci pour votre confiance. Votre commande est en cours de préparation dans notre atelier. Un conseiller vous contactera très prochainement pour confirmer les détails de la livraison.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        <div className="bg-ivory/50 p-6 rounded-2xl border border-ivory-200">
                            <h3 className="font-bold text-indigo mb-2">Besoin d'aide ?</h3>
                            <p className="text-sm text-gray-500 mb-4">Notre service client est à votre écoute sur WhatsApp.</p>
                            <a
                                href="https://wa.me/237678841257"
                                target="_blank"
                                className="inline-flex items-center text-green-600 font-bold hover:gap-3 transition-all"
                            >
                                <MessageSquare className="mr-2 h-5 w-5" />
                                Nous écrire
                            </a>
                        </div>
                        <div className="bg-indigo/5 p-6 rounded-2xl border border-indigo/10">
                            <h3 className="font-bold text-indigo mb-2">Suivez-nous</h3>
                            <p className="text-sm text-gray-500 mb-4">Découvrez les coulisses de vos créations sur nos réseaux.</p>
                            <div className="flex justify-center gap-4">
                                <span className="text-indigo font-bold cursor-pointer hover:text-gold transition-colors">Instagram</span>
                                <span className="text-indigo font-bold cursor-pointer hover:text-gold transition-colors">Facebook</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/boutique"
                            className="bg-indigo text-ivory px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all shadow-lg"
                        >
                            Continuer mes achats
                            <ShoppingBag className="h-5 w-5" />
                        </Link>
                        <Link
                            href="/"
                            className="bg-white border-2 border-indigo text-indigo px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-indigo hover:text-ivory transition-all"
                        >
                            Retour à l'accueil
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
