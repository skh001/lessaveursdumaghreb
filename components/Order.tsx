import React from 'react';
import { ExternalLink, Bike, Clock, MapPin, CalendarCheck, Utensils } from 'lucide-react';
import { IMAGES } from '../constants';

const Order: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-center">
       <div className="mb-12">
          <h2 className="text-5xl font-extrabold text-[#264653]">À Emporter & Sur Place</h2>
          <p className="text-lg text-[#264653]/70 mt-2">Livraison à domicile ou une table chaleureuse, c'est vous qui choisissez.</p>
       </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
        
        {/* --- LIGNE 1 : LIVRAISON (Tout aligné) --- */}

        {/* 1. Les Frères Toqués (Redimensionné pour s'aligner) */}
        <div className="bg-[#264653] rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer text-[#F4F1DE] flex flex-col justify-between h-full min-h-[280px]">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#E07A5F] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative z-10">
            <div className="mb-3">
               <span className="bg-[#D4AF37] text-[#264653] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                 Partenaire Éthique
               </span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">Les Frères Toqués</h3>
            <p className="text-[#F4F1DE]/80 text-sm leading-snug mb-4">
              0% de commission, 100% équitable. Le meilleur choix pour nous soutenir.
            </p>
          </div>
          
          <div className="relative z-10 mt-auto">
            <button className="w-full bg-[#F4F1DE] text-[#264653] py-3 rounded-xl font-bold text-sm hover:bg-[#E07A5F] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              Commander Direct <ExternalLink size={16} />
            </button>
            <div className="flex items-center gap-1 text-[#F4F1DE]/60 text-xs mt-3 justify-center">
               <Bike size={12} /> <span>30-45 min</span>
            </div>
          </div>
        </div>

        {/* 2. Uber Eats */}
        <a href="#" className="bg-[#06C167] rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform min-h-[280px]">
           <div className="absolute -right-4 -bottom-4 text-white/20">
             <ShoppingBagIcon size={100} />
           </div>
           <h3 className="text-2xl font-bold text-white relative z-10">Uber<br/>Eats</h3>
           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#06C167] relative z-10 mt-auto">
             <ExternalLink size={20} />
           </div>
        </a>

        {/* 3. Deliveroo */}
        <a href="#" className="bg-[#00CCBC] rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform min-h-[280px]">
           <div className="absolute -right-4 -bottom-4 text-white/20">
             <ShoppingBagIcon size={100} />
           </div>
           <h3 className="text-2xl font-bold text-white relative z-10">Deliveroo</h3>
           <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#00CCBC] relative z-10 mt-auto">
             <ExternalLink size={20} />
           </div>
        </a>


        {/* --- LIGNE 2 : RESERVATION & INFOS --- */}

        {/* NOUVEAU BOUTON : Réserver une table (Prend 2 colonnes) */}
        <div className="md:col-span-2 bg-white border-2 border-[#E07A5F]/20 rounded-[2.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:border-[#E07A5F] transition-colors duration-300 shadow-sm hover:shadow-xl">
           {/* Déco d'arrière plan */}
           <div className="absolute -left-10 -bottom-10 text-[#E07A5F]/5 group-hover:text-[#E07A5F]/10 transition-colors">
              <Utensils size={200} />
           </div>

           <div className="relative z-10 flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#264653] mb-2">
                Envie de nous rendre visite ?
              </h3>
              <p className="text-[#264653]/70 text-lg">
                Réservez votre table et profitez de l'ambiance authentique du restaurant.
              </p>
           </div>

           <button className="relative z-10 bg-[#E07A5F] text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-[#d66a4f] hover:scale-105 transition-all duration-300 flex items-center gap-3 whitespace-nowrap">
              <CalendarCheck size={24} />
              Réserver une Table
           </button>
        </div>

        {/* Info Card - Horaires (Reste sur 1 colonne) */}
        <div className="bg-[#E07A5F] rounded-[2rem] p-8 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
          <Clock size={40} className="mb-4 text-[#F4F1DE]" />
          <h4 className="text-xl font-bold mb-2">Horaires</h4>
          <p className="font-light text-sm opacity-90">Mardi - Dimanche</p>
          <div className="mt-2 space-y-1">
            <p className="text-lg font-bold">12:00 - 14:30</p>
            <p className="text-lg font-bold">19:00 - 22:30</p>
          </div>
        </div>

      </div>

      {/* Footer Click & Collect */}
      <div className="mt-12 bg-white rounded-3xl p-6 flex flex-col md:flex-row items-center justify-center gap-4 text-[#264653] shadow-sm max-w-2xl mx-auto text-center md:text-left">
         <div className="bg-[#F4F1DE] p-3 rounded-full">
            <MapPin className="text-[#E07A5F]" />
         </div>
         <div>
           <p className="font-bold text-lg">Click & Collect Disponible</p>
           <p className="text-sm opacity-70">Récupérez votre commande au 12 Rue des Saveurs, 75011 Paris</p>
         </div>
      </div>
    </div>
  );
};

// Helper component for background icon
const ShoppingBagIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Order;