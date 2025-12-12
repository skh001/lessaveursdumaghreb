import React from 'react';
import { ExternalLink, Bike, Clock, MapPin, CalendarCheck, Utensils, Phone, Smartphone } from 'lucide-react';

const Order: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col">
       
       <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#264653]">Réserver & Commander</h2>
          <p className="text-lg text-[#264653]/70 mt-2">Sur place ou à emporter, retrouvez nos saveurs authentiques.</p>
       </div>

      {/* --- SECTION 1 : RÉSERVER UNE TABLE (MIS EN AVANT) --- */}
      <div className="w-full bg-white border-2 border-[#E07A5F]/20 rounded-[2.5rem] p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-[#E07A5F] transition-all duration-300 shadow-lg hover:shadow-2xl">
         
         {/* Déco d'arrière plan */}
         <div className="absolute -left-16 -bottom-16 text-[#E07A5F]/5 group-hover:text-[#E07A5F]/10 transition-colors duration-500">
            <Utensils size={300} />
         </div>

         <div className="relative z-10 text-center md:text-left max-w-2xl">
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#264653] mb-4">
              Envie de manger sur place ?
            </h3>
            <p className="text-[#264653]/70 text-lg md:text-xl leading-relaxed mb-6">
              Réservez votre table en quelques clics ou par téléphone.
              Venez profiter de l'ambiance chaleureuse du restaurant.
            </p>

            {/* --- NOUVEAU : LES DEUX BOUTONS DE RÉSERVATION --- */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                
                {/* Bouton 1 : Réserver en ligne (Lien Foodbooking) */}
                <a 
                  href="https://www.foodbooking.com/api/res/z5kb_r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E07A5F] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-[#d66a4f] hover:scale-105 transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                    <CalendarCheck size={22} />
                    Réserver en ligne
                </a>

                {/* Bouton 2 : Appeler */}
                <a 
                  href="tel:0604112928"
                  className="bg-white text-[#264653] border-2 border-[#264653]/10 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#E07A5F] hover:text-[#E07A5F] transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                    <Phone size={22} />
                    Appeler
                </a>
            </div>
            <p className="mt-3 text-xs text-[#264653]/50 font-medium md:text-left text-center">
                Confirmation immédiate par email ou téléphone.
            </p>
         </div>

         {/* Illustration visuelle à droite (optionnel, icône téléphone) */}
         <div className="relative z-10 hidden md:block opacity-80 text-[#E07A5F]">
            <Smartphone size={120} strokeWidth={1} />
         </div>
      </div>


      {/* --- SECTION 2 : LIVRAISON (GRID) --- */}
      <h3 className="text-2xl font-bold text-[#264653] mb-6 pl-2">Livraison à domicile</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* 1. Les Frères Toqués */}
        <div className="bg-[#264653] rounded-[2rem] p-6 relative overflow-hidden group cursor-pointer text-[#F4F1DE] flex flex-col justify-between h-full min-h-[240px]">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#E07A5F] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="relative z-10">
            <div className="mb-3">
               <span className="bg-[#D4AF37] text-[#264653] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                 Partenaire Éthique
               </span>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">Les Frères Toqués</h3>
            <p className="text-[#F4F1DE]/80 text-sm leading-snug mb-4">
              La livraison équitable. Soutenez les restaurateurs en passant par eux.
            </p>
          </div>
          
          <div className="relative z-10 mt-auto">
            <button className="w-full bg-[#F4F1DE] text-[#264653] py-3 rounded-xl font-bold text-sm hover:bg-[#E07A5F] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
              Commander <ExternalLink size={16} />
            </button>
          </div>
        </div>

        {/* 2. Uber Eats */}
        <a href="#" className="bg-[#06C167] rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform min-h-[240px]">
           <div className="absolute -right-4 -bottom-4 text-white/20">
             <ShoppingBagIcon size={100} />
           </div>
           <h3 className="text-2xl font-bold text-white relative z-10">Uber<br/>Eats</h3>
           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#06C167] relative z-10 mt-auto shadow-md">
             <ExternalLink size={24} />
           </div>
        </a>

        {/* 3. Deliveroo */}
        <a href="#" className="bg-[#00CCBC] rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform min-h-[240px]">
           <div className="absolute -right-4 -bottom-4 text-white/20">
             <ShoppingBagIcon size={100} />
           </div>
           <h3 className="text-2xl font-bold text-white relative z-10">Deliveroo</h3>
           <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#00CCBC] relative z-10 mt-auto shadow-md">
             <ExternalLink size={24} />
           </div>
        </a>
      </div>

      {/* --- SECTION 3 : INFOS PRATIQUES (BAS DE PAGE) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Horaires */}
          <div className="bg-[#E07A5F] rounded-[2rem] p-8 text-white flex flex-row items-center justify-between relative overflow-hidden shadow-sm">
            <div>
                <h4 className="text-xl font-bold mb-1 flex items-center gap-2">
                    <Clock size={20} className="text-[#F4F1DE]" /> Horaires
                </h4>
                <p className="font-light text-sm opacity-90 mb-3">Ouvert du Mardi au Dimanche</p>
                <div className="space-y-0 text-lg font-bold">
                    <p>12:00 - 14:30</p>
                    <p>19:00 - 22:30</p>
                </div>
            </div>
            <div className="opacity-20">
                <Clock size={80} />
            </div>
          </div>

          {/* Click & Collect / Adresse */}
          <div className="bg-white rounded-[2rem] p-8 text-[#264653] flex flex-row items-center justify-between shadow-sm border border-[#264653]/5">
             <div>
                <h4 className="text-xl font-bold mb-1 flex items-center gap-2">
                    <MapPin size={20} className="text-[#E07A5F]" /> Click & Collect
                </h4>
                <p className="font-light text-sm opacity-70 mb-3">Récupérez votre commande au restaurant</p>
                <p className="font-bold text-lg">
                    12 Rue des Saveurs<br/>
                    75011 Paris
                </p>
             </div>
             <div className="bg-[#F4F1DE] p-4 rounded-full text-[#E07A5F]">
                <MapPin size={40} />
             </div>
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