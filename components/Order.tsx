import React from 'react';
import { ExternalLink, Bike, Clock, MapPin, CalendarCheck, Utensils, Phone, Smartphone, Lock } from 'lucide-react';

const Order: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col">
       
       <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#264653]">Réserver & Commander</h2>
          <p className="text-lg text-[#264653]/70 mt-2">Sur place ou à emporter, retrouvez nos saveurs authentiques.</p>
       </div>

      {/* --- SECTION 1 : RÉSERVER UNE TABLE (ACTIVE) --- */}
      <div className="w-full bg-white border-2 border-[#E07A5F]/20 rounded-[2.5rem] p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-[#E07A5F] transition-all duration-300 shadow-lg hover:shadow-2xl">
         
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

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                {/* Bouton 1 : Réserver en ligne */}
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

         <div className="relative z-10 hidden md:block opacity-80 text-[#E07A5F]">
            <Smartphone size={120} strokeWidth={1} />
         </div>
      </div>


      {/* --- SECTION 2 : LIVRAISON (GRID) --- */}
      <h3 className="text-2xl font-bold text-[#264653] mb-6 pl-2">Livraison à domicile</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* 1. Les Frères Toqués (ACTIF) */}
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

        {/* 2. Uber Eats (COMING SOON) */}
        <div className="bg-gray-200 rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden h-full min-h-[240px] opacity-80 cursor-not-allowed border border-gray-300">
           {/* Badge Coming Soon */}
           <div className="absolute top-4 right-4 z-20 bg-[#264653] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
             <Lock size={12} /> Bientôt
           </div>

           <div className="absolute -right-4 -bottom-4 text-gray-400/30">
             <ShoppingBagIcon size={100} />
           </div>
           
           <h3 className="text-2xl font-bold text-gray-500 relative z-10">Uber<br/>Eats</h3>
           
           <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 relative z-10 mt-auto">
             <Clock size={24} />
           </div>
        </div>

        {/* 3. Deliveroo (COMING SOON) */}
        <div className="bg-gray-200 rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden h-full min-h-[240px] opacity-80 cursor-not-allowed border border-gray-300">
           {/* Badge Coming Soon */}
           <div className="absolute top-4 right-4 z-20 bg-[#264653] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
             <Lock size={12} /> Bientôt
           </div>

           <div className="absolute -right-4 -bottom-4 text-gray-400/30">
             <ShoppingBagIcon size={100} />
           </div>
           
           <h3 className="text-2xl font-bold text-gray-500 relative z-10">Deliveroo</h3>
           
           <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 relative z-10 mt-auto">
             <Clock size={24} />
           </div>
        </div>
      </div>

      {/* --- SECTION 3 : INFOS PRATIQUES (BAS DE PAGE) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Horaires (ACTIF) */}
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

          {/* Click & Collect (COMING SOON) */}
          <div className="bg-white rounded-[2rem] p-8 text-[#264653] flex flex-row items-center justify-between shadow-sm border-2 border-dashed border-[#264653]/20 relative overflow-hidden">
             
             {/* Badge Coming Soon en coin */}
             <div className="absolute top-0 right-0 bg-[#E07A5F] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
               BIENTÔT DISPONIBLE
             </div>

             <div className="opacity-60"> {/* Contenu grisé */}
                <h4 className="text-xl font-bold mb-1 flex items-center gap-2">
                    <MapPin size={20} className="text-[#264653]" /> Click & Collect
                </h4>
                <p className="font-light text-sm opacity-70 mb-3">Bientôt : Commandez et récupérez sur place</p>
                <p className="font-bold text-lg text-gray-400">
                   25 Rue Lionnaise<br/>
                    49100 Angers, France
                </p>
             </div>
             <div className="bg-gray-100 p-4 rounded-full text-gray-300">
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