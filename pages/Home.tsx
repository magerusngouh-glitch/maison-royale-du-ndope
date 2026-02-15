
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../types';
import { PRODUCTS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Luxury modern Ndop garment editorial photography" 
            className="w-full h-full object-cover scale-110" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7JnfyzaX3PqXMZZu7Oa-YlhLoPhHoukNRNSwPvde9Ai41iU_XOr4DjIZxxc_A_L_QprnKb-AYZWDTHaIvAM9lVu3yhFkZv6zhlTMXdDso3Zy3zgFDy4FhkydqUc13ULLGSMxMN-WFnC1aCB1TlV2Pk4_tfTIMKzY65omq-gHSklSBPizzVvvP-WKF1ClcI6bEph_lLZudA1UYVxo2RgJSlj5boERUGjECJgs7U4tY9abWv4CDHNUzl-blkrFNA1bsmuQUCkFE3aY" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h2 className="text-xs uppercase tracking-[0.6em] mb-6 animate-pulse font-bold">The Art of Heritage</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 italic tracking-tight">The Luxury of <span className="text-primary not-italic font-bold">Ndop</span></h1>
          <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed font-sans">
            Experience the majestic legacy of Cameroonian royalty through handcrafted bespoke tailoring and modern luxury silhouettes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              to={AppRoute.SHOP} 
              className="bg-primary hover:bg-primary-dark text-white px-12 py-4 text-xs font-bold uppercase tracking-widest transition-all transform hover:scale-105"
            >
              Explore Collection
            </Link>
            <Link 
              to={AppRoute.BESPOKE} 
              className="backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/30 text-white px-12 py-4 text-xs font-bold uppercase tracking-widest transition-all"
            >
              Bespoke Inquiry
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[10px] uppercase tracking-widest text-white">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-white/50"></div>
        </div>
      </section>

      {/* Heritage Intro */}
      <section className="py-32 relative ndop-pattern">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden shadow-2xl">
              <img 
                alt="Close-up of intricate hand-drawn Ndop fabric patterns" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx_NcePp1G2QcSZyLw7RSDhlrCkBhgNnZn-QDpBP8yb45nzH2AE6YJko0dr9K8ZCbw6tk8AFEn4DaC4m_6b2kICVIpS6WrW3vp5e5ioNpEzZ46nChfaNZ5M8OOO-i_ytGrnO5di4tEmpA_aiX5uGz1Mx8HpsGY9sVPSiQBlx9QZiGW0RddAmD4VbwqvNDzO-db5Pm_0gr401zEfMq0sAXNPRdkzTI8EV4SpB97a5aY1ej5a-hrVW20R-TZFqNQMe3MDl6HrIFkvD0" 
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Ancestral Roots</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight italic">Crafted for Sovereignty</h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-indigo-luxury/80">
              <p>
                Ndop is more than a fabric; it is a sacred archive of symbols and history from the Grassfields of Cameroon. Traditionally reserved for nobility and ritual, each thread carries the weight of a kingdom.
              </p>
              <p>
                Maison Royale du Ndop bridges this ancient wisdom with contemporary high fashion, creating garments that are as intellectually profound as they are aesthetically breathtaking.
              </p>
            </div>
            <div className="mt-12">
              <Link to={AppRoute.HERITAGE} className="inline-flex items-center gap-4 text-primary font-bold text-xs uppercase tracking-luxury group">
                Discover Our Legacy
                <span className="material-icons-outlined transition-transform group-hover:translate-x-2">trending_flat</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <h3 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">The Archive</h3>
              <h2 className="text-4xl lg:text-5xl font-serif">Featured Collections</h2>
            </div>
            <Link to={AppRoute.SHOP} className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-2 hover:opacity-70 transition-opacity">
              View All Categories
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PRODUCTS.slice(0, 3).map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 mb-8">
                  <img 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={product.image} 
                  />
                  {product.isBespoke && (
                    <div className="absolute top-4 left-4 bg-white/90 px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-indigo-luxury">
                      Bespoke
                    </div>
                  )}
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest">
                      New Season
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">{product.name}</h4>
                  <p className="text-primary font-bold tracking-luxury text-sm">${product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke CTA */}
      <section className="py-32 bg-indigo-luxury text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-20 pointer-events-none">
          <img 
            alt="Tailoring Workshop" 
            className="w-full h-full object-cover grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNm677C-pL7KyN2QqHMjV1szQBQ6NtchpBjDHHXYQkkMBpskoyxNM_sbc1TyBBbDM48LlQErYh-RXyCTMpiAQ0xyn5wFq3AkmQaeuNi9xtpWW1tm8sJhyu6vmTeIzdjx69YtTWhkr6taeDWc_CPEaMzfnYVDxr40UYaZwSLIeJHGbuxjKhRaW3c86sEazCHM7sYCwV6yasw7yIP6mWGHtaqSsPKGBxzjD-sJdk8NJ6ANO8shhR71y3LQa1nkQI4rXu6RD4PI-dGgA" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-xl">
            <h3 className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Custom Atelier</h3>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Tailored to Your Majesty</h2>
            <p className="text-lg font-light mb-12 opacity-80 leading-relaxed">
              Elevate your wardrobe with a piece designed exclusively for you. From personal consultations to hand-finished detailing, our bespoke service ensures a perfect fit and a unique expression of Ndop heritage.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                to={AppRoute.BESPOKE} 
                className="bg-[#25D366] hover:bg-green-700 text-white flex items-center gap-3 px-10 py-5 font-bold text-xs uppercase tracking-widest transition-all shadow-xl shadow-green-900/20"
              >
                <span className="material-icons-outlined">chat</span>
                WhatsApp Appointment
              </Link>
              <Link 
                to={AppRoute.BESPOKE} 
                className="border border-white/30 hover:bg-white/10 text-white px-10 py-5 font-bold text-xs uppercase tracking-widest transition-all"
              >
                Learn Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="py-32 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-20 rounded-sm border border-primary/10 shadow-sm items-center">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-serif mb-10 italic">The Showroom</h2>
              <div className="space-y-6 text-lg font-light opacity-80">
                <p className="flex items-center gap-5">
                  <span className="material-icons-outlined text-primary">location_on</span>
                  12 Rue de la Renaissance, Douala, Cameroon
                </p>
                <p className="flex items-center gap-5">
                  <span className="material-icons-outlined text-primary">schedule</span>
                  Mon — Fri: 10:00 - 19:00
                </p>
                <p className="flex items-center gap-5">
                  <span className="material-icons-outlined text-primary">mail</span>
                  atelier@maisonndop.com
                </p>
              </div>
            </div>
            <div className="h-96 bg-gray-100 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
               <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUiafFe9sCxToBaSR8M_9fRLOvEPwpZZeehbkdv4hEqlViJulKDjyzGkAlPLHol-liG5XPOgXQZ2oEgp7BMg_Ff4OaLRejFij4_6NNdUvvh_Jz_7TxPBWX8MSe7tDhjdRCsBlYHzgIUtYATKhbugt0_YcZbKTnsxLnU9b_YSYJqfsdFNYl-Xq9rr_5ayeZUfRzA-Cnd-jPxmyyv_rVnPPosF4pu9ia40t1JDbSsHci0_TDcKtCaB1GqhTWdV0B2jXf_DSS6R00ZRk" 
                className="w-full h-full object-cover"
                alt="Map location"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
