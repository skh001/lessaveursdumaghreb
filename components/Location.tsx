import React from 'react';
import { MapPin, Phone, Clock, Car, Map } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#264653] mb-4">Nous Trouver</h2>
        <p className="text-[#E07A5F] text-lg md:text-xl font-light">Venez partager un moment convivial à Angers.</p>
      </div>

      {/* Grid container - Hauteur automatique (h-auto) pour éviter les coupures */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto items-start">
        
        {/* Colonne Gauche : Infos */}
        <div className="flex flex-col gap-6 w-full">
          
          {/* Carte Adresse */}
          <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#264653]/5 flex flex-col sm:flex-row items-start gap-6 hover:shadow-md transition-shadow">
            <div className="bg-[#F4F1DE] p-4 rounded-2xl text-[#E07A5F] shrink-0">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-[#264653] mb-2">L'Adresse</h3>
              <p className="text-[#264653]/80 text-lg leading-snug">
                25 Rue Lionnaise<br/>
                49100 Angers, France
              </p>
              
              <div className="mt-4 flex flex-col gap-2 text-sm text-[#264653]/60">
                <div className="flex items-center gap-2">
                  <Map size={16} className="shrink-0" /> <span>Quartier de la Doutre</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car size={16} className="shrink-0" /> <span>Stationnement à proximité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carte Contact & Horaires */}
          <div className="bg-[#264653] rounded-[2rem] p-6 md:p-8 shadow-sm text-[#F4F1DE] flex flex-col justify-between w-full">
             <div>
                <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                  <Clock className="text-[#E07A5F]" /> Horaires
                </h3>
                
                {/* Tableau des horaires */}
                <div className="space-y-3 font-light text-base md:text-lg w-full">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Lun & Mer</span>
                    <span className="font-bold text-[#E07A5F]">10:00 – 21:00</span>
                  </div>
                  
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Mardi</span>
                    <span className="font-bold text-[#E07A5F]">10:00 – 21:30</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Jeu - Dim</span>
                    <span className="font-bold text-[#E07A5F]">10:00 – 21:30</span>
                  </div>
                </div>
             </div>

             {/* Section Téléphone (bien espacée pour être visible) */}
             <div className="mt-8 pt-6 border-t border-white/10">
               <p className="text-sm opacity-60 mb-2">Réservations & Commandes</p>
               <a href="tel:0604112928" className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold hover:text-[#E07A5F] transition-colors break-all">
                 <Phone size={24} className="shrink-0" /> 
                 <span>06 04 11 29 28</span>
               </a>
             </div>
          </div>

        </div>

        {/* Colonne Droite : Map */}
        {/* On force une hauteur minimale pour que la carte ne disparaisse pas sur mobile */}
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border-4 border-white h-[400px] lg:h-[600px] relative group w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.536762696347!2d-0.5606679234478148!3d47.4794699711786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480878c7c9876f2d%3A0xe67c94d07747065!2s25%20Rue%20Lionnaise%2C%2049100%20Angers!5e0!3m2!1sfr!2sfr!4v1709228347182!5m2!1sfr!2sfr"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            className="grayscale group-hover:grayscale-0 transition-all duration-700"
            title="Carte Angers"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Location;