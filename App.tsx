import React, { useState } from 'react';
import { View } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Menu from './components/Menu';
import Order from './components/Order';
import Location from './components/Location';
import Legal from './components/Legal';

// --- IMPORT DU LOGO ---
import logo from './assets/logo.png'; 

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
      case View.LEGAL:
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

      <footer className="bg-[#264653] text-[#F4F1DE] py-12 px-6 mt-12 border-t border-[#F4F1DE]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* --- GAUCHE : TEXTE & LEGAL & CREDIT --- */}
          <div className="text-center md:text-left w-full md:w-1/3 order-3 md:order-1 flex flex-col items-center md:items-start">
            <p className="opacity-60 text-sm mb-2">© 2025 Les Saveurs de Maghreb.<br/>Tous droits réservés.</p>
            
            {/* --- TON TAG CLIQUABLE ICI --- */}
            <a 
              href="https://www.instagram.com/imskhdev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-xs font-bold bg-[#F4F1DE]/10 px-3 py-1 rounded-full hover:bg-[#E07A5F] hover:text-white transition-all duration-300 mb-2"
            >
              Made by imskhdev ⚡
            </a>

            <button 
              onClick={() => {
                window.scrollTo(0, 0);
                setCurrentView(View.LEGAL);
              }}
              className="text-xs opacity-40 hover:opacity-100 hover:text-[#E07A5F] underline transition-all"
            >
              Mentions Légales & RGPD
            </button>
          </div>

          {/* --- MILIEU : LE LOGO (AGRANDI) --- */}
          <div className="w-full md:w-1/3 flex justify-center order-1 md:order-2">
            <img 
              src={logo} 
              alt="Logo Les Saveurs de Maghreb" 
              className="h-32 w-auto object-contain hover:scale-105 transition-transform duration-300" 
            />
          </div>
          
          {/* --- DROITE : RÉSEAUX & CONTACT --- */}
          <div className="flex flex-col items-center md:items-end gap-4 w-full md:w-1/3 order-2 md:order-3">
            <div className="flex gap-6">
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
            </div>
            
            <a 
              href="tel:0604112928" 
              className="hover:text-[#E07A5F] transition-colors font-bold text-lg bg-[#F4F1DE]/10 px-4 py-2 rounded-full"
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