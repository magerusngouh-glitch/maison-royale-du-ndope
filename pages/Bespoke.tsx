
import React from 'react';

export const Bespoke: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
         <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Sur Mesure</h1>
          <p className="text-primary text-xl font-medium italic tracking-wide">Crafting your legacy in Ndop excellence.</p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-10 md:p-16 rounded-sm shadow-sm border border-primary/5">
              <div className="flex items-center space-x-6 mb-12">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
                <h2 className="text-3xl font-serif italic">The Creative Vision</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-primary">Outfit Category</label>
                  <select className="w-full bg-background-light border-none rounded-sm p-5 focus:ring-2 focus:ring-primary outline-none appearance-none">
                    <option>Grand Agbada Set</option>
                    <option>Royal Kaftan</option>
                    <option>Contemporary Suit (Ndop Trim)</option>
                    <option>Ceremonial Wrapper Set</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-primary">Occasion Type</label>
                  <select className="w-full bg-background-light border-none rounded-sm p-5 focus:ring-2 focus:ring-primary outline-none appearance-none">
                    <option>Wedding / Nuptials</option>
                    <option>State Gala</option>
                    <option>Coronation Ceremony</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-primary">Target Date</label>
                  <input type="date" className="w-full bg-background-light border-none rounded-sm p-5 focus:ring-2 focus:ring-primary outline-none" />
                </div>
                <div className="space-y-4">
                   <label className="text-[11px] font-bold uppercase tracking-widest text-primary">Fabric Preference</label>
                   <div className="flex gap-4">
                      <button className="flex-1 py-4 border-2 border-primary bg-primary/10 rounded-sm text-[11px] font-bold uppercase tracking-widest">Vintage Ndop</button>
                      <button className="flex-1 py-4 border-2 border-transparent bg-background-light rounded-sm text-[11px] font-bold uppercase tracking-widest hover:border-primary/40 transition-all">Silk Blend</button>
                   </div>
                </div>
              </div>
              <div className="mt-12 space-y-6">
                <label className="text-[11px] font-bold uppercase tracking-widest text-primary">Moodboard & Inspiration</label>
                <div className="border-2 border-dashed border-primary/20 rounded-sm p-20 text-center hover:border-primary transition-colors cursor-pointer group bg-primary/5">
                  <span className="material-icons-outlined text-5xl text-primary mb-4 transition-transform group-hover:scale-110">cloud_upload</span>
                  <p className="text-sm font-medium text-indigo-luxury">Drag and drop images of designs you love</p>
                  <p className="text-[10px] text-stone-400 mt-2 uppercase tracking-widest">PNG, JPG, PDF (Max 10MB)</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-10 md:p-16 rounded-sm shadow-sm border border-primary/5">
               <div className="flex items-center justify-between mb-12">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
                  <h2 className="text-3xl font-serif italic">Precise Measurements</h2>
                </div>
                <button className="text-primary text-[11px] font-bold uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all flex items-center">
                  <span className="material-icons-outlined text-sm mr-2">help_outline</span> Guide
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {['Neck', 'Chest', 'Shoulder', 'Sleeve', 'Waist', 'Hips', 'Inseam', 'Height'].map(field => (
                  <div key={field} className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{field} (cm)</label>
                    <input type="number" placeholder="00" className="w-full bg-background-light border-none rounded-sm p-4 focus:ring-2 focus:ring-primary outline-none" />
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-primary/5 rounded-sm flex items-start space-x-6 border border-primary/20">
                <span className="material-icons-outlined text-primary text-2xl">info</span>
                <p className="text-xs leading-loose text-indigo-luxury/70 italic">
                  Our master tailors recommend a virtual fitting session for guaranteed accuracy. If you've ordered before, we will cross-reference your historic profile.
                </p>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1 space-y-12 sticky top-32">
            <div className="bg-indigo-luxury rounded-sm shadow-2xl overflow-hidden border border-white/5">
               <div className="bg-primary/10 p-8 border-b border-primary/20">
                  <h3 className="text-xl font-bold text-white font-serif italic">Consultation Slot</h3>
                  <p className="text-[9px] text-primary font-bold tracking-widest uppercase mt-2">Virtual or In-Person</p>
               </div>
               <div className="p-8">
                  <div className="mb-6 flex items-center justify-between text-white">
                    <span className="font-bold text-sm uppercase tracking-widest">October 2024</span>
                    <div className="flex space-x-3">
                      <button className="p-1 hover:text-primary transition-colors"><span className="material-icons-outlined">chevron_left</span></button>
                      <button className="p-1 hover:text-primary transition-colors"><span className="material-icons-outlined">chevron_right</span></button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-stone-500 mb-4">
                    {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center mb-10">
                    {Array.from({length: 31}).map((_, i) => (
                      <button 
                        key={i} 
                        className={`p-2 text-[11px] rounded-sm transition-all ${i === 14 ? 'bg-primary text-white font-bold' : 'text-stone-300 hover:bg-white/10'}`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-primary">Available Times (GMT)</label>
                    <div className="grid grid-cols-2 gap-3">
                       {['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM'].map(t => (
                         <button key={t} className={`py-3 px-2 border rounded-sm text-[10px] font-bold tracking-widest transition-all ${t === '11:30 AM' ? 'bg-primary text-white border-primary' : 'border-primary/30 text-stone-300 hover:border-primary'}`}>
                           {t}
                         </button>
                       ))}
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-sm p-10 border border-primary/10 shadow-sm">
              <h3 className="text-xl font-serif italic mb-8">Deposit Summary</h3>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Design Consultation</span>
                  <span className="font-bold text-indigo-luxury">$250.00</span>
                </div>
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Artisan Retainer (Ndop)</span>
                  <span className="font-bold text-indigo-luxury">$500.00</span>
                </div>
                <div className="h-px bg-stone-100 w-full"></div>
                <div className="flex justify-between text-xl font-serif italic font-bold">
                  <span>Initial Deposit</span>
                  <span className="text-primary not-italic font-sans">$750.00</span>
                </div>
                <p className="text-[9px] text-center text-stone-400 italic uppercase tracking-widest">
                  *Deductible from final price.
                </p>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-6 rounded-sm shadow-xl shadow-primary/20 transition-all flex items-center justify-center space-x-4 uppercase tracking-widest text-xs">
                <span className="material-icons-outlined text-sm">lock</span>
                <span>Pay Secure Deposit</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
