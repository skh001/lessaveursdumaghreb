import React from 'react';
import { View } from '../types';
import { ArrowRight, Star } from 'lucide-react';
import { IMAGES } from '../constants';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden pt-24 md:pt-0">
      
      {/* Left Content Area (40%) */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-6 md:px-12 lg:px-20 py-10 z-10 order-2 md:order-1">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 text-[#264653] px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
            Cuisine Authentique
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#264653] leading-[1.1]">
            Savourez le <span className="text-[#E07A5F] italic font-serif block mt-2">Maghreb.</span>
          </h1>
          
          <p className="text-lg text-[#264653]/80 font-light leading-relaxed max-w-md">
            Un voyage culinaire à travers le Maroc, la Tunisie et l'Algérie. 
            Découvrez la chaleur de nos épices et la tradition de notre hospitalité.
          </p>

          <div className="pt-4">
            <button 
              onClick={onOrderClick}
              className="group bg-[#264653] text-[#F4F1DE] px-8 py-4 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md text-lg font-semibold shadow-xl hover:shadow-2xl hover:bg-[#E07A5F] transition-all duration-300 flex items-center gap-3"
            >
              Réserver une table
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center gap-6 pt-8 opacity-70">
             <div>
               <p className="text-3xl font-bold text-[#E07A5F]">4.9</p>
               <p className="text-xs uppercase tracking-wide">Note</p>
             </div>
             <div className="h-8 w-[1px] bg-[#264653]/20"></div>
             <div>
               <p className="text-3xl font-bold text-[#E07A5F]">15+</p>
               <p className="text-xs uppercase tracking-wide">Épices</p>
             </div>
             <div className="h-8 w-[1px] bg-[#264653]/20"></div>
             <div>
               <p className="text-3xl font-bold text-[#E07A5F]">100%</p>
               <p className="text-xs uppercase tracking-wide">Halal</p>
             </div>
          </div>
        </div>
      </div>

      {/* Right Image Area (60%) */}
      <div className="w-full md:w-[55%] h-[50vh] md:h-screen relative order-1 md:order-2">
        <div className="absolute inset-0 bg-[#264653]">
          <img 
            src="/couscoushero.jpg"
            alt="Festin Marocain" 
            className="w-full h-full object-cover opacity-90 md:rounded-bl-[120px]"
          />
          {/* Decorative Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/50 to-transparent md:rounded-bl-[120px]"></div>
        </div>
        
        {/* Floating Decorative Element */}
        <div className="absolute -bottom-10 right-10 md:bottom-20 md:-left-16 bg-[#F4F1DE]/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl max-w-xs hidden md:block">
          <p className="font-serif italic text-xl text-[#E07A5F] mb-2">"Le meilleur couscous de la ville."</p>
          <p className="text-sm font-bold text-[#264653]">- Le Guide Fooding</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;