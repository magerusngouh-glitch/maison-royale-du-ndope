
import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light pt-20 flex">
      <aside className="w-64 bg-indigo-luxury text-white hidden lg:flex flex-col fixed h-[calc(100vh-80px)] top-20 z-40">
        <div className="px-10 py-12 flex flex-col items-center">
          <img 
            src="https://img.freepik.com/premium-vector/luxury-royal-crown-logo-design-vector_655650-13.jpg" 
            alt="Maison Royale Logo" 
            className="w-20 h-20 mb-6 brightness-0 invert opacity-90"
          />
          <div className="text-center">
            <h1 className="text-xs font-black tracking-[0.3em] uppercase text-primary">Maison Royale</h1>
            <p className="text-[8px] tracking-widest uppercase opacity-40 mt-1">Cercle de Prestige</p>
          </div>
        </div>
        
        <nav className="flex-1 px-6 space-y-2">
          <a className="flex items-center space-x-4 px-6 py-4 bg-primary/10 border-l-4 border-primary text-primary transition-all rounded-r-sm" href="#">
            <span className="material-icons-outlined text-xl">dashboard</span>
            <span className="text-xs font-bold uppercase tracking-widest">Tableau de Bord</span>
          </a>
          {['Mes Commandes', 'Mes Mesures', 'Mon Style', 'Rendez-vous'].map(item => (
             <a key={item} className="flex items-center space-x-4 px-6 py-4 hover:bg-white/5 text-white/50 hover:text-white transition-all rounded-r-sm" href="#">
               <span className="material-icons-outlined text-xl">
                  {item === 'Mes Commandes' ? 'shopping_bag' : item === 'Mes Mesures' ? 'straighten' : item === 'Mon Style' ? 'favorite_border' : 'event'}
               </span>
               <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
             </a>
          ))}
        </nav>
        <div className="p-12 border-t border-white/5">
          <button className="flex items-center space-x-4 text-white/40 hover:text-white transition-all uppercase tracking-widest text-[10px] font-bold">
            <span className="material-icons-outlined text-sm">logout</span>
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 lg:ml-64 p-10 md:p-16 ndop-pattern">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <div>
            <h2 className="font-serif text-5xl italic text-indigo-luxury mb-4 leading-tight">Bienvenue, Votre Altesse</h2>
            <p className="text-stone-400 text-sm font-medium uppercase tracking-widest">Membre du Cercle Royal depuis 2022</p>
          </div>
          <div className="flex items-center space-x-8 border-l border-primary/20 pl-8">
            <div className="text-right">
              <p className="font-bold text-sm text-indigo-luxury">Prince K. Mbouombouo</p>
              <p className="text-[10px] text-primary font-black uppercase tracking-widest">Compte Prestige</p>
            </div>
            <div className="relative">
               <img 
                alt="Avatar" 
                className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-xl" 
                src="https://picsum.photos/200" 
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Tracker */}
          <section className="xl:col-span-2 bg-white rounded-sm p-10 md:p-16 shadow-sm border border-primary/5">
            <div className="flex justify-between items-center mb-12">
              <h3 className="text-2xl font-serif italic text-indigo-luxury">Commande en cours</h3>
              <span className="px-5 py-1.5 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-widest">Bespoke #8829</span>
            </div>
            <div className="mb-16">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mb-2">Article</p>
                  <h4 className="text-xl font-bold text-indigo-luxury">Tunique Cérémoniale Ndop Bleu de Minuit</h4>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-2">Statut actuel</p>
                  <p className="text-primary font-black uppercase tracking-widest text-xs">En broderie artisanale</p>
                </div>
              </div>
              
              <div className="relative pt-12 pb-6">
                <div className="absolute w-full h-1 bg-stone-100 top-[52px] z-0"></div>
                <div className="absolute h-1 bg-primary top-[52px] z-0 transition-all duration-1000" style={{ width: '60%' }}></div>
                <div className="flex justify-between relative z-10">
                   {['Mesures', 'Tissage', 'Broderie', 'Finition', 'Livraison'].map((step, i) => (
                      <div key={step} className="flex flex-col items-center">
                        <div className={`w-10 h-10 rounded-full border-4 flex items-center justify-center transition-all ${i < 3 ? 'bg-primary border-white text-white shadow-lg' : i === 2 ? 'bg-primary border-white scale-125' : 'bg-stone-100 border-white text-stone-400'}`}>
                           {i < 2 ? <span className="material-icons-outlined text-sm">check</span> : i === 2 ? <span className="material-icons-outlined text-sm">auto_fix_high</span> : null}
                        </div>
                        <span className={`text-[10px] mt-6 font-black uppercase tracking-tighter ${i === 2 ? 'text-primary' : 'text-stone-300'}`}>{step}</span>
                      </div>
                   ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-background-light rounded-sm border border-primary/10">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <span className="material-icons-outlined text-primary text-3xl">location_on</span>
                <div>
                  <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mb-1">Atelier de Fabrication</p>
                  <p className="font-bold text-indigo-luxury">Atelier de Bafoussam, Cameroun</p>
                </div>
              </div>
              <button className="bg-indigo-luxury text-white text-[10px] font-bold py-4 px-10 rounded-sm uppercase tracking-widest hover:bg-primary transition-all">
                Suivre l'artisan
              </button>
            </div>
          </section>

          {/* Measurements */}
          <section className="bg-white rounded-sm p-10 md:p-16 shadow-sm border border-primary/5">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-2xl font-serif italic text-indigo-luxury">Mes Mesures</h3>
              <button className="material-icons-outlined text-primary hover:scale-110 transition-transform">edit</button>
            </div>
            <div className="space-y-6">
              {[
                { label: 'Épaules', val: '48.5' },
                { label: 'Tour de poitrine', val: '102' },
                { label: 'Longueur de bras', val: '64' },
                { label: 'Tour de cou', val: '41' }
              ].map(m => (
                <div key={m.label} className="flex justify-between items-center py-5 border-b border-stone-50">
                  <span className="text-sm font-medium text-stone-400 uppercase tracking-widest">{m.label}</span>
                  <span className="font-bold text-xl text-indigo-luxury">{m.val} <span className="text-[10px] text-stone-300 ml-1 font-sans">cm</span></span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <div className="p-6 bg-primary/5 rounded-sm border border-primary/10">
                <p className="text-[10px] text-primary font-black uppercase tracking-widest mb-2">Dernière mise à jour</p>
                <p className="text-sm italic text-stone-500 leading-relaxed font-light">"Mesures confirmées lors de votre visite à l'atelier de Paris le 12 Mars."</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
