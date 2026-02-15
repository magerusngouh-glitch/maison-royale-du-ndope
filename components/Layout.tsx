
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppRoute } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `fixed top-0 w-full z-50 transition-all duration-500 ${
    isScrolled 
      ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' 
      : (isHome ? 'bg-transparent py-6' : 'bg-white py-3 border-b border-primary/10')
  }`;

  const linkClass = `text-[11px] uppercase tracking-widest font-bold transition-colors hover:text-primary ${
    !isScrolled && isHome ? 'text-white' : 'text-indigo-luxury'
  }`;

  // For the purpose of this implementation, we assume the logo is available at 'logo.png'
  const logoSrc = "https://lh3.googleusercontent.com/aida-public/AB6AXuDt9p-W_YQ-Q_H7-D-W_YQ-Q_H7-D-W_YQ-Q_H7-D-W_YQ-Q_H7-D-W_YQ-Q_H7-D-W_YQ-Q_H7-D-W_YQ-Q_H7-D-W_YQ-Q_H7-D-W_YQ-Q_H7"; // Placeholder for the provided logo image

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="hidden md:flex flex-1 gap-8 items-center">
          <Link to={AppRoute.SHOP} className={linkClass}>Collections</Link>
          <Link to={AppRoute.HERITAGE} className={linkClass}>Heritage</Link>
          <Link to={AppRoute.BESPOKE} className={linkClass}>Bespoke</Link>
        </div>
        
        <Link to={AppRoute.HOME} className="flex-none flex items-center gap-3 group">
          <div className={`relative transition-all duration-500 ${isScrolled ? 'h-10 w-10' : 'h-16 w-16'}`}>
            <img 
              src="https://img.freepik.com/premium-vector/luxury-royal-crown-logo-design-vector_655650-13.jpg" // Using a high-quality placeholder that matches the aesthetic of the provided logo
              alt="Maison Royale Logo" 
              className={`w-full h-full object-contain transition-all duration-500 ${!isScrolled && isHome ? 'brightness-0 invert' : ''}`}
            />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className={`text-sm font-black tracking-widest uppercase transition-colors ${!isScrolled && isHome ? 'text-white' : 'text-primary'}`}>Maison Royale</span>
            <span className={`text-[8px] tracking-[0.4em] uppercase opacity-70 ${!isScrolled && isHome ? 'text-white' : 'text-indigo-luxury'}`}>du Ndop</span>
          </div>
        </Link>

        <div className="flex-1 flex justify-end items-center gap-6">
          <button className={linkClass}>
            <span className="material-icons-outlined text-xl">search</span>
          </button>
          <Link to={AppRoute.DASHBOARD} className={linkClass}>
             <span className="material-icons-outlined text-xl">person_outline</span>
          </Link>
          <Link to={AppRoute.CART} className={`relative ${linkClass}`}>
            <span className="material-icons-outlined text-xl">shopping_bag</span>
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[8px] w-4 h-4 flex items-center justify-center rounded-full font-bold">2</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-luxury text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="https://img.freepik.com/premium-vector/luxury-royal-crown-logo-design-vector_655650-13.jpg" 
                alt="Logo" 
                className="w-12 h-12 object-contain brightness-0 invert opacity-80"
              />
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-widest uppercase text-primary">Maison Royale</span>
                <span className="text-[9px] tracking-[0.5em] uppercase opacity-70">du Ndop</span>
              </div>
            </div>
            <p className="text-sm font-light leading-relaxed opacity-60">
              Preserving African textile heritage through modern design and luxury craftsmanship. Based in Douala, Cameroon.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Boutique</h5>
            <ul className="space-y-4 text-sm font-light opacity-60">
              <li><Link to={AppRoute.SHOP} className="hover:text-primary transition-colors">Men's Collection</Link></li>
              <li><Link to={AppRoute.SHOP} className="hover:text-primary transition-colors">Women's Collection</Link></li>
              <li><Link to={AppRoute.SHOP} className="hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link to={AppRoute.BESPOKE} className="hover:text-primary transition-colors">Bespoke Suitings</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest mb-6">The House</h5>
            <ul className="space-y-4 text-sm font-light opacity-60">
              <li><Link to={AppRoute.HERITAGE} className="hover:text-primary transition-colors">The Ndop Story</Link></li>
              <li><Link to={AppRoute.HERITAGE} className="hover:text-primary transition-colors">Sustainability</Link></li>
              <li><Link to={AppRoute.HERITAGE} className="hover:text-primary transition-colors">Artisans</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Mailing List</h5>
            <p className="text-sm font-light opacity-60 mb-6">Join the inner circle for exclusive early access.</p>
            <form className="flex border-b border-white/20 pb-2">
              <input className="bg-transparent border-none focus:ring-0 text-sm font-light w-full placeholder:text-white/30" placeholder="Email Address" type="email" />
              <button className="material-icons-outlined text-primary hover:text-white transition-colors" type="submit">arrow_forward</button>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[10px] font-medium uppercase tracking-widest opacity-40">
          <p>© 2024 Maison Royale du Ndop. All Rights Reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a className="hover:text-primary transition-colors" href="#">Instagram</a>
            <a className="hover:text-primary transition-colors" href="#">Pinterest</a>
            <a className="hover:text-primary transition-colors" href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
