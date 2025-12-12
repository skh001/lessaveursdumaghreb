import React, { useState } from 'react';
import { View } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Menu from './components/Menu';
import Order from './components/Order';
import Location from './components/Location';
import Legal from './components/Legal'; // <--- 1. IMPORT NOUVEAU

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderView = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <>
            <Hero onOrderClick={() => setCurrentView(View.ORDER)} />
            <Values />
          </>
        );
      case View.MENU:
        return <Menu />;
      case View.LOCATION:
        return <Location />;
      case View.ORDER:
        return <Order />;
      case View.LEGAL: // <--- 2. NOUVELLE VUE AJOUTÉE
        return <Legal />;
      default:
        return <Hero onOrderClick={() => setCurrentView(View.ORDER)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1DE] text-[#264653] selection:bg-[#E07A5F] selection:text-white">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="w-full">
        {renderView()}
      </main>

      <footer className="bg-[#264653] text-[#F4F1DE] py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold mb-2">Les Saveurs de Maghreb</h3>
            <p className="opacity-60 text-sm">© 2025 Cuisine Authentique. Tous droits réservés.</p>
            
            {/* --- 3. LIEN MENTIONS LÉGALES (FOOTER UNIQUEMENT) --- */}
            <button 
              onClick={() => {
                window.scrollTo(0, 0); // Remonte en haut de page
                setCurrentView(View.LEGAL);
              }}
              className="text-xs opacity-50 hover:opacity-100 hover:text-[#E07A5F] mt-2 underline transition-all"
            >
              Mentions Légales & RGPD
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <a 
              href="https://www.instagram.com/les.saveurs.de_maghreb/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#E07A5F] transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://www.facebook.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#E07A5F] transition-colors"
            >
              Facebook
            </a>
            <a 
              href="tel:0604112928" 
              className="hover:text-[#E07A5F] transition-colors font-bold"
            >
              06 04 11 29 28
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;