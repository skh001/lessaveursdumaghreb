import React, { useState } from 'react';
import { menuItems } from '../data/menuData';
import { MenuItem } from '../types';
import { X, Info } from 'lucide-react'; // J'ai ajouté Info et X pour les icônes

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<MenuItem['category'] | 'All'>('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null); // Pour la popup

  const categories = ['All', 'Starter', 'Main', 'Dessert', 'Drink'];

  // Helper object to translate categories for display only
  const categoryDisplay: Record<string, string> = {
    'All': 'Tout',
    'Starter': 'Entrées',
    'Main': 'Plats',
    'Dessert': 'Desserts',
    'Drink': 'Boissons'
  };

  const filteredItems = filter === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto relative">
      
      {/* --- HEADER --- */}
      <header className="mb-12 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#264653] mb-4">La Carte</h2>
        <p className="text-[#E07A5F] text-lg font-light max-w-xl">
          La rencontre d'ingrédients de saison et de traditions intemporelles.
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`
                px-6 py-2 rounded-full text-sm uppercase tracking-wider font-semibold transition-all duration-300
                ${filter === cat 
                  ? 'bg-[#264653] text-[#F4F1DE]' 
                  : 'bg-white text-[#264653] hover:bg-[#E07A5F]/10'
                }
              `}
            >
              {categoryDisplay[cat] || cat}
            </button>
          ))}
        </div>
      </header>

      {/* --- GRID DES PLATS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className="group bg-white rounded-3xl p-3 md:p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-4 md:gap-6 border border-[#264653]/5 overflow-hidden"
          >
            {/* Image Section */}
            <div className="w-full sm:w-1/3 aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden relative cursor-pointer" onClick={() => setSelectedItem(item)}>
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {item.tags && item.tags[0] && (
                <span className="absolute top-2 left-2 bg-[#D4AF37] text-[#264653] text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">
                  {item.tags[0]}
                </span>
              )}
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col justify-between py-2 pr-2">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#264653] group-hover:text-[#E07A5F] transition-colors cursor-pointer" onClick={() => setSelectedItem(item)}>
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-[#E07A5F] bg-[#F4F1DE] px-3 py-1 rounded-lg ml-2 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-[#264653]/70 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-[#264653]/40 uppercase font-bold tracking-widest">
                  {categoryDisplay[item.category] || item.category}
                </span>
                
                {/* BOUTON D'INFORMATION (LE "+") */}
                <button 
                  onClick={() => setSelectedItem(item)}
                  className="w-10 h-10 rounded-full border-2 border-[#E07A5F] flex items-center justify-center text-[#E07A5F] hover:bg-[#E07A5F] hover:text-white transition-all duration-300 group-active:scale-95"
                  title="Voir les ingrédients"
                >
                  <Info size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- POPUP / MODALE --- */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Fond flouté sombre */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedItem(null)}
          ></div>

          {/* Carte Popup */}
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in fade-in zoom-in duration-300">
            
            {/* Bouton Fermer */}
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 bg-white/80 p-2 rounded-full text-[#264653] hover:bg-[#E07A5F] hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image en haut */}
            <div className="h-64 w-full relative">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-6 left-8 text-3xl font-serif font-bold text-white drop-shadow-md">
                {selectedItem.name}
              </h3>
            </div>

            {/* Contenu : Ingrédients */}
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-[#E07A5F]">{selectedItem.price}</span>
                <span className="bg-[#D4AF37]/20 text-[#264653] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {selectedItem.tags?.[0] || 'Fait Maison'}
                </span>
              </div>

              <h4 className="text-lg font-bold text-[#264653] mb-3 border-b border-[#264653]/10 pb-2 inline-block">
                Ingrédients & Préparation
              </h4>
              
              <p className="text-[#264653]/80 text-lg leading-relaxed">
                {selectedItem.description}
              </p>

              <div className="mt-8 pt-6 border-t border-[#264653]/10 flex justify-end">
                <button 
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-2 bg-[#264653] text-[#F4F1DE] rounded-xl font-semibold hover:bg-[#E07A5F] transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Menu;