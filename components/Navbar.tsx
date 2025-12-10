import React from 'react';
import { View } from '../types';
import { UtensilsCrossed, ShoppingBag, Home } from 'lucide-react';

interface NavbarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: View.HOME, label: 'Accueil', icon: Home },
    { id: View.MENU, label: 'Notre Carte', icon: UtensilsCrossed },
    { id: View.ORDER, label: 'Commander', icon: ShoppingBag },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4">
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-full px-6 py-3 flex items-center space-x-2 md:space-x-6 border border-white/50 transition-all duration-300 hover:shadow-xl">
        {/* Logo Text for Mobile (Hidden on Desktop to keep pill clean, or visible if minimal) */}
        <span className="hidden md:block font-serif font-bold text-[#E07A5F] text-lg mr-4 tracking-wider">
          Les Saveurs
        </span>

        {navItems.map((item) => {
          const isActive = currentView === item.id;
          const Icon = item.icon;
          
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`
                relative flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300
                ${isActive 
                  ? 'bg-[#E07A5F] text-white shadow-md transform scale-105' 
                  : 'text-[#264653] hover:bg-[#F4F1DE] hover:text-[#E07A5F]'
                }
              `}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;