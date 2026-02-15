'use client';

import { useState } from 'react';
import {
    LayoutDashboard,
    Package,
    Image as ImageIcon,
    Settings,
    Users,
    TrendingUp,
    Plus,
    Search,
    MoreHorizontal,
    Box,
    ShoppingBag,
    Eye,
    Edit3,
    Trash2,
    CheckCircle2,
    Clock,
    XCircle,
    Bell,
    ChevronDown,
    DollarSign,
    Zap
} from 'lucide-react';
import { cn, formatPrice } from '@/lib/utils';
import Image from 'next/image';
import { PRODUCTS } from '@/constants';
import Link from 'next/link';

const mockOrders = [
    { id: '#ORD-784', customer: 'Mme Nguepi', total: 450000, status: 'Processing', date: '30 min' },
    { id: '#ORD-783', customer: 'M. Tchinda', total: 15000, status: 'Shipped', date: 'il y a 1h' },
    { id: '#ORD-782', customer: 'Mme Ngassa', total: 170000, status: 'Shipped', date: 'il y a 2h' },
    { id: '#ORD-781', customer: 'M. Kameni', total: 65000, status: 'Pending', date: 'il y a 5h' },
];

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [searchTerm, setSearchTerm] = useState('');

    const renderDashboard = () => (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Main Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Chiffre d\'Affaires', value: '4.8M XAF', icon: <DollarSign className="h-6 w-6" />, color: 'bg-green-500', trend: '+12.5%' },
                    { label: 'Catalogue', value: PRODUCTS.length, icon: <Package className="h-6 w-6" />, color: 'bg-indigo', trend: '+2 nouveaux' },
                    { label: 'Commandes', value: '158', icon: <ShoppingBag className="h-6 w-6" />, color: 'bg-gold', trend: '+4 aujourd\'hui' },
                    { label: 'Visiteurs', value: '1.2K', icon: <TrendingUp className="h-6 w-6" />, color: 'bg-noir', trend: '+15%' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 group hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center justify-between mb-4">
                            <div className={cn("h-12 w-12 rounded-2xl flex items-center justify-center text-white shadow-lg", stat.color)}>
                                {stat.icon}
                            </div>
                            <span className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-1 rounded-full">{stat.trend}</span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-indigo">{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white">
                        <div>
                            <h3 className="font-playfair text-2xl font-bold text-indigo">Dernières Commandes</h3>
                            <p className="text-xs text-gray-400 mt-1 font-medium italic">Suivi en temps réel</p>
                        </div>
                        <button className="h-10 w-10 border border-gray-100 rounded-full flex items-center justify-center hover:bg-gold transition-all">
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50/50 text-left text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                                <tr>
                                    <th className="px-8 py-5">Identifiant</th>
                                    <th className="px-8 py-5">Client</th>
                                    <th className="px-8 py-5">Total</th>
                                    <th className="px-8 py-5">État</th>
                                    <th className="px-8 py-5">Temps</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {mockOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-ivory/30 transition-all group">
                                        <td className="px-8 py-5 font-bold text-indigo">{order.id}</td>
                                        <td className="px-8 py-5">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-ivory-200 flex items-center justify-center text-[10px] font-bold">
                                                    {order.customer.substring(0, 2)}
                                                </div>
                                                <span className="font-medium text-noir italic">{order.customer}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 font-bold text-gold">{order.total.toLocaleString()} XAF</td>
                                        <td className="px-8 py-5">
                                            <span className={cn(
                                                "px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider shadow-sm",
                                                order.status === 'Processing' ? 'bg-indigo text-white' :
                                                    order.status === 'Shipped' ? 'bg-gold text-noir' :
                                                        order.status === 'Pending' ? 'bg-gray-100 text-gray-400' : 'bg-green-500 text-white'
                                            )}>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-xs text-gray-400 font-medium">{order.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Operations & Inventory Alerts */}
                <div className="space-y-6">
                    <div className="bg-indigo rounded-[2.5rem] p-8 text-ivory relative overflow-hidden group shadow-2xl">
                        <div className="absolute -right-10 -top-10 h-40 w-40 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                        <h3 className="font-playfair text-2xl font-bold mb-2">Actions Rapides</h3>
                        <p className="text-ivory-300 text-xs mb-8 font-medium">Gestion simplifiée du catalogue</p>
                        <div className="space-y-4">
                            <button className="w-full bg-gold text-noir py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white transition-all shadow-lg active:scale-95">
                                <Plus className="h-5 w-5" />
                                Nouveau Produit
                            </button>
                            <button className="w-full bg-white/10 text-ivory border border-white/20 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/20 transition-all active:scale-95">
                                <ImageIcon className="h-5 w-5" />
                                Mettre à jour Galerie
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl">
                        <h4 className="font-bold text-noir mb-6 flex items-center gap-3">
                            <Zap className="h-5 w-5 text-gold" />
                            Alertes Stocks
                        </h4>
                        <div className="space-y-6">
                            {PRODUCTS.filter(p => !p.id.startsWith('n')).slice(0, 3).map((p, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="h-10 w-10 relative rounded-xl overflow-hidden shadow-sm shrink-0">
                                        <Image src={p.image} alt={p.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-noir truncate max-w-[120px]">{p.name}</p>
                                        <div className="w-full bg-gray-100 h-1 rounded-full mt-1.5 overflow-hidden">
                                            <div className="bg-red-500 h-full" style={{ width: '25%' }} />
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-red-500">Faible</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-8 py-3 text-xs font-bold text-gold uppercase tracking-widest border border-gold/20 rounded-xl hover:bg-gold/5 transition-all">
                            Voir l'inventaire complet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderProducts = () => {
        const filteredProducts = PRODUCTS.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 bg-white/50 backdrop-blur-md">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Rechercher une pièce..."
                            className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl border border-gray-100 focus:outline-none focus:ring-4 focus:ring-gold/10 transition-all font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none bg-indigo text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-noir transition-all shadow-indigo/20 shadow-lg">
                            <Plus className="h-4 w-4" />
                            Ajouter
                        </button>
                        <button className="p-3 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all">
                            <Settings className="h-5 w-5 text-gray-500" />
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 text-left text-[10px] font-bold text-gray-400 uppercase tracking-[0.25em]">
                            <tr>
                                <th className="px-8 py-5">Visuel</th>
                                <th className="px-8 py-5">Nom de la Création</th>
                                <th className="px-8 py-5">Catégorie</th>
                                <th className="px-8 py-5">Prix Unitaire</th>
                                <th className="px-8 py-5">État</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredProducts.map((p) => (
                                <tr key={p.id} className="hover:bg-ivory/40 transition-all group">
                                    <td className="px-8 py-5">
                                        <div className="h-16 w-14 relative rounded-2xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-500">
                                            <Image src={p.image} alt={p.name} fill className="object-cover" />
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <p className="font-playfair text-lg font-bold text-indigo group-hover:text-gold transition-colors">{p.name}</p>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-0.5">ID: {p.id}</p>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="px-3 py-1 bg-ivory-200 text-indigo rounded-full text-xs font-bold uppercase tracking-wider">{p.category}</span>
                                    </td>
                                    <td className="px-8 py-5 font-bold text-noir">{p.price.toLocaleString()} XAF</td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className={cn(
                                                "h-2 w-2 rounded-full",
                                                p.isNew ? "bg-gold animate-pulse" : "bg-green-500"
                                            )} />
                                            <span className="text-xs font-bold uppercase tracking-tighter">
                                                {p.isNew ? "Nouveau" : "En Stock"}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex gap-2 justify-end">
                                            <button className="h-10 w-10 flex items-center justify-center text-gray-400 hover:text-indigo hover:bg-indigo/5 rounded-xl transition-all"><Edit3 className="h-4 w-4" /></button>
                                            <button className="h-10 w-10 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 className="h-4 w-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return (
        <div className="flex min-h-screen bg-[#FDFCF9]">
            {/* Premium Sidebar */}
            <aside className="w-20 lg:w-80 bg-noir text-ivory-300 flex flex-col transition-all duration-500 sticky top-0 h-screen z-50">
                <div className="p-8 pb-12">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 bg-gradient-to-br from-gold to-gold-600 rounded-2xl flex items-center justify-center shadow-gold/20 shadow-2xl transform -rotate-6">
                            <span className="text-noir font-playfair font-black text-2xl">M</span>
                        </div>
                        <div className="hidden lg:block">
                            <h1 className="font-playfair font-black text-white text-lg tracking-[0.2em]">MAISON ROYALE</h1>
                            <p className="text-[8px] font-bold text-gold uppercase tracking-[0.4em]">Administration</p>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-2">
                    {[
                        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
                        { id: 'products', label: 'Catalogue', icon: <Package className="h-5 w-5" /> },
                        { id: 'orders', label: 'Commandes', icon: <ShoppingBag className="h-5 w-5" /> },
                        { id: 'gallery', label: 'Galerie Photo', icon: <ImageIcon className="h-5 w-5" /> },
                        { id: 'users', label: 'Clients', icon: <Users className="h-5 w-5" /> },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={cn(
                                "w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 font-bold text-sm group",
                                activeTab === item.id
                                    ? "bg-gold text-noir shadow-[0_10px_30px_-10px_rgba(184,142,47,0.5)] transform scale-[1.02]"
                                    : "hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <span className={cn(
                                "transition-colors",
                                activeTab === item.id ? "text-noir" : "text-gold group-hover:text-white"
                            )}>
                                {item.icon}
                            </span>
                            <span className="hidden lg:block">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="p-8 space-y-6">
                    <div className="hidden lg:block p-6 rounded-[2rem] bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 relative overflow-hidden group">
                        <div className="h-2 w-2 rounded-full bg-green-500 absolute top-4 right-4 animate-pulse" />
                        <p className="text-[10px] font-bold text-gray-500 uppercase mb-2">Statut Serveur</p>
                        <p className="text-xs text-white font-medium">Opérationnel</p>
                    </div>
                    <button className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-red-500/10 hover:text-red-500 transition-all font-bold text-sm bg-white/5 border border-white/5">
                        <XCircle className="h-5 w-5" />
                        <span className="hidden lg:block text-red-500">Déconnexion</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 lg:p-12 h-screen overflow-y-auto scrollbar-hide">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-1 w-8 bg-gold rounded-full" />
                            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.5em]">L'excellence au quotidien</span>
                        </div>
                        <h1 className="font-playfair text-4xl lg:text-5xl font-black text-indigo">
                            {activeTab === 'dashboard' ? 'Miroir de l\'Atelier' :
                                activeTab === 'products' ? 'Catalogue Royal' :
                                    activeTab === 'orders' ? 'Flux de Commandes' : 'Gestion Système'}
                        </h1>
                    </div>

                    <div className="flex items-center gap-6 self-end md:self-auto">
                        <button className="h-12 w-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-indigo hover:shadow-xl transition-all relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-3 right-3 h-2 w-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="flex gap-4 items-center pl-6 border-l border-gray-200">
                            <div className="hidden lg:block text-right">
                                <p className="text-sm font-black text-indigo">Pergolaise Admin</p>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Designer en chef</p>
                            </div>
                            <div className="h-14 w-14 rounded-2xl p-0.5 bg-gradient-to-br from-gold to-indigo shadow-xl">
                                <div className="h-full w-full bg-white rounded-2xl flex items-center justify-center overflow-hidden">
                                    <Users className="h-6 w-6 text-indigo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="animate-in fade-in duration-700">
                    {activeTab === 'dashboard' ? renderDashboard() :
                        activeTab === 'products' ? renderProducts() :
                            <div className="h-[500px] flex flex-col items-center justify-center bg-white rounded-[3rem] border border-dashed border-gray-200 text-gray-300">
                                <Box className="h-16 w-16 mb-4 opacity-20" />
                                <p className="font-playfair text-2xl italic">Espace {activeTab} en préparation...</p>
                                <p className="text-xs font-bold uppercase tracking-widest mt-2">Maison Royale du Ndop</p>
                            </div>
                    }
                </div>

                <footer className="mt-20 py-8 border-t border-gray-100 text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.5em]">© 2026 Maison Royale du Ndop • Dschang, Cameroun</p>
                </footer>
            </main>
        </div>
    );
}
