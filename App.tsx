import React, { useState } from 'react';
import { View } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Menu from './components/Menu';
import Order from './components/Order';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  // Simple transition effect wrapper could go here, but keeping it simple for now
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
      case View.ORDER:
        return <Order />;
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
            <h3 className="font-serif text-2xl font-bold mb-2">Les Saveurs du Maghreb</h3>
            <p className="opacity-60 text-sm">© 2024 Cuisine Authentique. Tous droits réservés.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E07A5F] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#E07A5F] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#E07A5F] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;