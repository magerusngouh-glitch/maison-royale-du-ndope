
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { AppRoute } from '../types';
import { getHeritageAssistance } from '../services/geminiService';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeSize, setActiveSize] = useState('M');
  const [assistanceMsg, setAssistanceMsg] = useState<string | null>(null);
  const [loadingAssistance, setLoadingAssistance] = useState(false);

  if (!product) return <div className="pt-32 text-center">Product not found.</div>;

  const handleAskHeritage = async () => {
    setLoadingAssistance(true);
    const msg = await getHeritageAssistance(`Tell me about the heritage and styling of the ${product.name}. It is described as ${product.description}.`);
    setAssistanceMsg(msg);
    setLoadingAssistance(false);
  };

  return (
    <div className="pt-32 pb-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Gallery */}
          <div className="lg:col-span-7 flex gap-6 h-fit sticky top-32">
            <div className="hidden md:flex flex-col gap-6 w-28">
              {[1, 2, 3].map(i => (
                <div key={i} className={`aspect-[3/4] rounded-sm overflow-hidden border cursor-pointer hover:border-primary transition-all ${i === 1 ? 'border-primary' : 'border-transparent'}`}>
                  <img src={product.image} className="w-full h-full object-cover" alt="Detail" />
                </div>
              ))}
            </div>
            <div className="flex-1 overflow-hidden rounded-sm bg-white aspect-[3/4] shadow-xl">
              <img src={product.image} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110 cursor-zoom-in" alt={product.name} />
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="space-y-6">
              <nav className="flex gap-2 text-[10px] uppercase tracking-luxury text-stone-500 font-bold">
                <Link to={AppRoute.HOME} className="hover:text-primary">Home</Link>
                <span>/</span>
                <Link to={AppRoute.SHOP} className="hover:text-primary">Collections</Link>
                <span>/</span>
                <span className="text-stone-400">{product.category}</span>
              </nav>
              <h1 className="font-serif text-5xl md:text-6xl italic leading-tight">{product.name}</h1>
              <div className="flex items-center gap-6">
                <p className="text-3xl font-light text-primary font-sans">${product.price.toLocaleString()}</p>
                {product.isLimited && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] uppercase tracking-widest font-bold rounded-full">Limited Edition</span>
                )}
              </div>
            </div>

            <div className="text-stone-600 leading-loose text-lg font-light">
              {product.description}
              <p className="mt-4">Hand-dyed in the Western Highlands of Cameroon, this masterpiece features authentic Ndop symbols representing prosperity and wisdom. Each piece is uniquely embroidered by master artisans.</p>
            </div>

            {/* AI Assistant Callout */}
            <div className="p-8 bg-indigo-luxury text-white rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
              <h4 className="font-serif italic text-xl mb-4 relative z-10">Heritage Concierge</h4>
              <p className="text-sm opacity-70 mb-6 relative z-10 leading-relaxed font-sans">Discover the ancestral story behind these motifs and how to style this regal piece.</p>
              {assistanceMsg ? (
                <div className="bg-white/5 p-4 rounded text-sm italic mb-4 animate-fade-in font-sans leading-relaxed">
                   "{assistanceMsg}"
                </div>
              ) : null}
              <button 
                onClick={handleAskHeritage}
                disabled={loadingAssistance}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 relative z-10 disabled:opacity-50"
              >
                {loadingAssistance ? (
                   <span className="animate-spin material-icons-outlined text-sm">loop</span>
                ) : (
                  <span className="material-icons-outlined text-sm">auto_fix_high</span>
                )}
                {loadingAssistance ? 'Consulting Elders...' : 'Consult Heritage Concierge'}
              </button>
            </div>

            {/* Size Select */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <label className="text-[11px] uppercase tracking-luxury font-bold text-indigo-luxury">Select Size</label>
                <button className="text-[10px] text-primary border-b border-primary/30 hover:border-primary transition-all font-bold">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {['S', 'M', 'L', 'XL'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setActiveSize(size)}
                    className={`py-4 border text-sm font-bold transition-all rounded-sm ${activeSize === size ? 'border-primary bg-primary/5 text-primary' : 'border-stone-200 hover:border-primary'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col gap-4 pt-6">
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-6 rounded-sm font-bold uppercase tracking-widest text-xs shadow-xl shadow-primary/20 transition-all transform active:scale-95 flex items-center justify-center gap-4">
                <span className="material-icons-outlined">shopping_cart</span>
                Add to Cart
              </button>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex-1 border border-stone-200 hover:border-primary py-4 rounded-sm flex items-center justify-center gap-3 transition-all text-xs font-bold uppercase tracking-widest">
                  <span className="material-icons-outlined text-sm">favorite_border</span> Wishlist
                </button>
                <button className="flex-1 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 py-4 rounded-sm flex items-center justify-center gap-3 transition-all text-xs font-bold uppercase tracking-widest">
                   <span className="material-icons-outlined text-sm">chat</span> WhatsApp
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="border-t border-stone-200 pt-10 mt-6 space-y-6">
              <details className="group cursor-pointer" open>
                <summary className="flex justify-between items-center list-none font-bold text-xs uppercase tracking-widest py-2 border-b border-stone-100">
                  The Heritage
                  <span className="material-icons-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="pt-6 pb-2 text-stone-500 text-sm leading-loose font-light">
                  Maison Royale du Ndop products are created using traditional resist-dyeing techniques passed down through generations of Bamiléké artisans. Every stitch narrates a story of ancestral royalty.
                </div>
              </details>
              <details className="group cursor-pointer">
                <summary className="flex justify-between items-center list-none font-bold text-xs uppercase tracking-widest py-2 border-b border-stone-100">
                  Bespoke Crafting
                  <span className="material-icons-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="pt-6 pb-2 text-stone-500 text-sm leading-loose font-light">
                  This item is made to order. Please allow 4-6 weeks for our master tailors in Douala to craft your unique garment.
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
