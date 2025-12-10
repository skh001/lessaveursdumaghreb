import React, { useState } from 'react';
import { menuItems } from '../data/menuData';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [filter, setFilter] = useState<MenuItem['category'] | 'All'>('All');
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
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
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
              {/* Display the French name, keep logic in English */}
              {categoryDisplay[cat] || cat}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div 
            key={item.id}
            className="group bg-white rounded-3xl p-3 md:p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-4 md:gap-6 border border-[#264653]/5 overflow-hidden"
          >
            {/* Image Section - Left */}
            <div className="w-full sm:w-1/3 aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden relative">
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

            {/* Content Section - Right */}
            <div className="flex-1 flex flex-col justify-between py-2 pr-2">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#264653] group-hover:text-[#E07A5F] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-[#E07A5F] bg-[#F4F1DE] px-3 py-1 rounded-lg ml-2 whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-[#264653]/70 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
              
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-[#264653]/40 uppercase font-bold tracking-widest">
                  {/* Translate category display for individual items too */}
                  {categoryDisplay[item.category] || item.category}
                </span>
                <button className="w-8 h-8 rounded-full border border-[#264653]/20 flex items-center justify-center text-[#264653] hover:bg-[#264653] hover:text-white transition-colors">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;