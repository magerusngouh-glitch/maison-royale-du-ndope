
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../types';
import { PRODUCTS } from '../constants';

export const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Modern Fusion');

  const categories = [
    { name: 'Traditional Attire', count: 14 },
    { name: 'Modern Fusion', count: 28 },
    { name: 'Heritage Fabrics', count: 9 },
    { name: 'Ceremonial Wraps', count: 6 },
  ];

  return (
    <div className="pt-32 pb-24 bg-background-light min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <nav className="flex text-[11px] uppercase tracking-luxury text-stone-400 mb-8">
          <ol className="flex items-center space-x-2">
            <li><Link to={AppRoute.HOME} className="hover:text-primary transition-colors">Home</Link></li>
            <li><span className="material-icons-outlined text-[12px]">chevron_right</span></li>
            <li className="text-primary font-bold">Royal Collections</li>
          </ol>
        </nav>

        {/* Title */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Heritage <span className="not-italic font-bold">Ndop</span> Collection</h1>
          <p className="text-stone-500 max-w-2xl text-sm leading-relaxed font-light">
            Discover the authentic artistry of the Bamileke people. Hand-dyed indigo textiles meets modern luxury silhouettes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 space-y-12">
            <div>
              <h3 className="text-[12px] uppercase tracking-widest font-bold text-indigo-luxury mb-8 border-b border-primary/20 pb-4">Categories</h3>
              <ul className="space-y-6 text-sm text-stone-600">
                {categories.map((cat) => (
                  <li 
                    key={cat.name} 
                    onClick={() => setActiveCategory(cat.name)}
                    className={`flex justify-between items-center cursor-pointer transition-all hover:text-primary ${activeCategory === cat.name ? 'text-primary font-bold' : ''}`}
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-40">({cat.count.toString().padStart(2, '0')})</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[12px] uppercase tracking-widest font-bold text-indigo-luxury mb-8 border-b border-primary/20 pb-4">Price Range</h3>
              <div className="px-2">
                <input 
                  type="range" 
                  min="250" 
                  max="5000" 
                  className="w-full h-1 bg-stone-200 accent-primary rounded-full cursor-pointer appearance-none"
                />
                <div className="flex justify-between mt-6 text-[11px] font-bold text-stone-500">
                  <span>$250</span>
                  <span>$5,000+</span>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-sm border border-primary/10">
              <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-4">Bespoke Service</h4>
              <p className="text-[12px] text-stone-600 mb-6 leading-relaxed">Personalized tailoring for your unique measurements and fabric choice.</p>
              <Link to={AppRoute.BESPOKE} className="inline-block text-[10px] font-black uppercase tracking-widest border-b-2 border-primary pb-1 hover:text-indigo-luxury transition-all">
                Request a fitting
              </Link>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-12 pb-6 border-b border-stone-200">
              <span className="text-[11px] uppercase tracking-widest text-stone-400">Showing 1-12 of 48 items</span>
              <div className="flex items-center space-x-6">
                <span className="text-[11px] uppercase tracking-widest font-bold text-indigo-luxury">Sort By:</span>
                <select className="bg-transparent border-none text-[11px] uppercase tracking-widest font-bold text-primary focus:ring-0 cursor-pointer">
                  <option>Newest Arrivals</option>
                  <option>Price: High to Low</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-16">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="group flex flex-col items-center text-center">
                  <Link to={`/product/${product.id}`} className="relative aspect-[3/4] w-full overflow-hidden bg-white rounded-sm mb-8 block">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.isNew && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 shadow-lg">New Collection</div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <button className="w-full bg-indigo-luxury/90 text-white py-4 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md hover:bg-primary transition-colors">
                        Quick Add to Cart
                      </button>
                    </div>
                  </Link>
                  <h3 className="text-sm font-semibold tracking-wide text-indigo-luxury mb-2">{product.name}</h3>
                  <p className="text-primary font-bold">${product.price.toLocaleString()}</p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-24 flex justify-center items-center space-x-4">
              <button className="w-12 h-12 flex items-center justify-center border border-stone-200 rounded-sm hover:border-primary hover:text-primary transition-colors">
                <span className="material-icons-outlined text-sm">chevron_left</span>
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-primary text-white font-bold rounded-sm">1</button>
              <button className="w-12 h-12 flex items-center justify-center border border-stone-200 rounded-sm hover:border-primary hover:text-primary transition-colors">2</button>
              <button className="w-12 h-12 flex items-center justify-center border border-stone-200 rounded-sm hover:border-primary hover:text-primary transition-colors">3</button>
              <span className="text-stone-300">...</span>
              <button className="w-12 h-12 flex items-center justify-center border border-stone-200 rounded-sm hover:border-primary hover:text-primary transition-colors">8</button>
              <button className="w-12 h-12 flex items-center justify-center border border-stone-200 rounded-sm hover:border-primary hover:text-primary transition-colors">
                <span className="material-icons-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
