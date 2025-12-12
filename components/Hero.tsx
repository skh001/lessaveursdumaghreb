import React, { useState, useEffect } from 'react';
import { Star, Phone, CalendarCheck, Clock, MapPin } from 'lucide-react';

// --- IMPORTS DES IMAGES POUR LE DIAPORAMA ---
import img1 from '../assets/bourak.jpg';
import img2 from '../assets/rechta.jpg';
import img3 from '../assets/mtewem.jpg'; 
import img4 from '../assets/chorba.jpg';

interface HeroProps {
  onOrderClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick }) => {
  // Liste des images du diaporama
  const heroImages = [img1, img2, img3, img4];
  
  // État pour savoir quelle image afficher
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Changement d'image automatique toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden pt-28 md:pt-0 bg-[#F4F1DE]">
      
      {/* --- STYLES D'ANIMATION (CSS INJECTÉ) --- */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-up { 
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; 
          opacity: 0; 
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.4s; }
        
        /* Animation du diaporama */
        .slide-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 1.5s ease-in-out, transform 6s ease-out;
          opacity: 0;
          transform: scale(1);
        }
        .slide-image.active {
          opacity: 0.9;
          transform: scale(1.1); /* Effet Ken Burns (zoom lent) */
        }
      `}</style>

      {/* Left Content Area (45%) */}
      <div className="w-full md:w-[50%] flex flex-col justify-center px-6 md:px-12 lg:px-16 py-10 z-10 order-2 md:order-1">
        <div className="space-y-6">
          
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#264653] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-[#D4AF37]/20">
            <Star size={12} className="text-[#D4AF37] fill-[#D4AF37]" />
            Cuisine Algérienne
          </div>
          
          {/* Main Title */}
          <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#264653] leading-[1.1]">
           Les saveurs <span className="text-[#E07A5F] italic font-serif block mt-2 drop-shadow-sm">de Maghreb .</span>
          </h1>
          
          {/* Paragraph */}
          <p className="animate-fade-up delay-200 text-lg text-[#264653]/80 font-light leading-relaxed max-w-md">
            Un voyage authentique au cœur de l'Algérie. 
            De la Rechta algéroise au Couscous royal, redécouvrez les saveurs oubliées de nos grands-mères.
          </p>

          {/* --- NOUVEAUX BOUTONS D'ACTION --- */}
          <div className="animate-fade-up delay-300 pt-4 flex flex-col sm:flex-row gap-4">
            {/* Bouton Réservation En Ligne */}
            <a 
              href="https://www.foodbooking.com/api/res/z5kb_r"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E07A5F] text-white px-6 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-xl hover:bg-[#d66a4f] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <CalendarCheck size={20} />
              Réserver une table
            </a>

            {/* Bouton Appeler */}
            <a 
              href="tel:0604112928"
              className="bg-[#264653] text-[#F4F1DE] px-6 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-xl hover:bg-[#1d353f] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              06 04 11 29 28
            </a>
          </div>

          {/* --- INFO RAPIDES (Horaires & Adresse) --- */}
          <div className="animate-fade-up delay-300 pt-4 text-sm text-[#264653]/70 space-y-2">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#E07A5F]" />
              <span className="font-semibold">Mardi - Dimanche :</span> 12h00-14h30 / 19h00-22h30
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-[#E07A5F]" />
              <span>12 Rue des Saveurs, 75011 Paris</span>
            </div>
          </div>

          {/* Stats Divider */}
          <div className="w-full h-[1px] bg-[#264653]/10 animate-fade-up delay-300 my-4"></div>

          {/* Stats */}
          <div className="animate-fade-up delay-300 flex items-center gap-6 opacity-80">
             <div className="text-center md:text-left">
               <p className="text-2xl font-bold text-[#E07A5F]">4.9/5</p>
               <p className="text-[10px] uppercase tracking-wide font-medium">Avis Clients</p>
             </div>
             <div className="h-8 w-[1px] bg-[#264653]/20"></div>
             <div className="text-center md:text-left">
               <p className="text-2xl font-bold text-[#E07A5F]">100%</p>
               <p className="text-[10px] uppercase tracking-wide font-medium">Fait Maison</p>
             </div>
             <div className="h-8 w-[1px] bg-[#264653]/20"></div>
             <div className="text-center md:text-left">
               <p className="text-2xl font-bold text-[#E07A5F]">Halal</p>
               <p className="text-[10px] uppercase tracking-wide font-medium">Certifié</p>
             </div>
          </div>
        </div>
      </div>

      {/* Right Image Area (50%) - CATALOGUE DÉFILANT */}
      <div className="w-full md:w-[50%] h-[50vh] md:h-screen relative order-1 md:order-2 overflow-hidden bg-[#264653]">
        
        {/* Boucle sur les images pour le fondu */}
        {heroImages.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Spécialité Algérienne ${index + 1}`}
            className={`slide-image md:rounded-bl-[120px] ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#264653]/60 via-transparent to-transparent md:rounded-bl-[120px] z-10"></div>
        
        {/* Floating Card */}
        <div className="absolute -bottom-6 right-6 md:bottom-20 md:-left-12 bg-[#F4F1DE]/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl max-w-xs hidden md:block border border-white/50 z-20" style={{ animation: 'float 6s ease-in-out infinite' }}>
          <div className="flex items-start gap-3">
             <span className="text-4xl text-[#E07A5F] font-serif leading-none">"</span>
             <div>
                <p className="font-serif italic text-xl text-[#264653] mb-2 leading-snug">La vraie cuisine du bled, comme à la maison.</p>
                <p className="text-xs font-bold text-[#E07A5F] uppercase tracking-wider">- Critique Gastronomique</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;