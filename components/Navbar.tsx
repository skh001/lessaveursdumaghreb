// src/components/Navbar.tsx
import React from 'react';
import { View } from '../types';
import { UtensilsCrossed, ShoppingBag, Home, MapPin } from 'lucide-react'; // Ajout de MapPin

interface NavbarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: View.HOME, label: 'Accueil', icon: Home },
    { id: View.MENU, label: 'Notre Carte', icon: UtensilsCrossed },
    { id: View.LOCATION, label: 'Où nous trouver', icon: MapPin }, // <--- NOUVEAU
    { id: View.ORDER, label: 'Commander', icon: ShoppingBag },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 md:space-x-4 border border-white/50 transition-all duration-300 hover:shadow-xl overflow-x-auto max-w-full">
        {/* Logo Text (Masqué sur petit mobile pour gagner de la place) */}
        <span className="hidden lg:block font-serif font-bold text-[#E07A5F] text-lg mr-4 tracking-wider whitespace-nowrap">
          Les Saveurs de Maghreb
        </span>

        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`
                relative flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${isActive 
                  ? 'bg-[#E07A5F] text-white shadow-md transform scale-105' 
                  : 'text-[#264653] hover:bg-[#F4F1DE] hover:text-[#E07A5F]'
                }
              `}
            >
              <Icon size={16} className="md:w-[18px] md:h-[18px]" />
              <span className="hidden sm:inline">{item.label}</span>
              {/* Icône seule sur mobile très petit, texte sur tablette+ */}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;