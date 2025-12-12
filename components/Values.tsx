import React from 'react';
import { HeartHandshake, Flame, Star, Quote, ExternalLink } from 'lucide-react';

const Values: React.FC = () => {
  const reviews = [
    {
      name: "Elia To",
      date: "Il y a 2 jours",
      text: "Excellent restaurant qui propose des plats du Maghreb avec une cuisine maison, des produits frais et en quantité très généreuse, à prix très raisonnable.",
      rating: 5
    },
    {
      name: "Leo Clemenceau",
      date: "Il y a un mois",
      text: "Franchement restaurant super accueillant, avec des personnes super gentilles, la nourriture est vraiment bonne et de qualité et pas cher pour la quantité.",
      rating: 5
    },
    {
      name: "Ahlem Hmida",
      date: "Il y a un mois",
      text: "Un grand merci au restaurant Les Saveurs de Maghreb pour ce merveilleux moment culinaire ! 🌿",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#F4F1DE] overflow-hidden relative">
      
      {/* Styles d'animation intégrés */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-on-scroll {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION 1 : VALEURS (Esprit de la Maison) --- */}
        <div className="mb-16 animate-on-scroll text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#264653] mb-4">L'Esprit de la Maison</h2>
          <div className="h-1.5 w-24 bg-[#E07A5F] rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
          
          {/* Carte 1 : Tradition Algérienne */}
          <div className="relative group animate-on-scroll delay-100">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#D4AF37] rounded-[2.5rem] z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative bg-white rounded-[2.5rem] p-10 shadow-xl z-10 flex flex-col md:flex-row gap-8 items-start md:items-center transition-transform duration-300 group-hover:-translate-y-1">
              <div className="w-24 h-24 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-500">
                <Flame size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#E07A5F] mb-3 group-hover:translate-x-1 transition-transform">Secrets de Famille</h3>
                <p className="text-[#264653]/80 leading-relaxed text-lg">
                  De la sauce blanche parfumée à la cannelle aux plats mijotés de la Casbah. Ici, la Rechta est préparée avec amour et le Mtewem suit la recette exacte de nos mères.
                </p>
              </div>
            </div>
          </div>

           {/* Carte 2 : Générosité */}
           <div className="relative group md:mt-24 animate-on-scroll delay-200">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#264653]/30 rounded-[2.5rem] z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative bg-[#264653] rounded-[2.5rem] p-10 shadow-xl z-10 flex flex-col md:flex-row gap-8 items-start md:items-center text-[#F4F1DE] transition-transform duration-300 group-hover:-translate-y-1">
               <div className="w-24 h-24 bg-[#F4F1DE]/10 rounded-2xl flex items-center justify-center text-[#F4F1DE] shrink-0 group-hover:bg-[#E07A5F] transition-colors duration-500 order-first md:order-last">
                  <HeartHandshake size={40} />
               </div>
               <div>
                <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-3 group-hover:translate-x-1 transition-transform">Générosité du Bled</h3>
                <p className="text-[#F4F1DE]/80 leading-relaxed text-lg">
                  Chez nous, une assiette n'est jamais servie à moitié. Nous célébrons l'hospitalité légendaire du pays : des portions copieuses et une ambiance comme à la maison.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* --- SECTION 2 : AVIS CLIENTS (Google Reviews) --- */}
        <div className="border-t border-[#264653]/10 pt-20 animate-on-scroll delay-300">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
               <h2 className="text-4xl font-extrabold text-[#264653] mb-2">Ils nous font confiance</h2>
               <div className="flex items-center gap-3">
                 <div className="flex text-[#D4AF37]">
                   {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                 </div>
                 <span className="font-bold text-lg text-[#264653]">4.8/5</span>
                 <span className="text-[#264653]/60 text-sm font-medium uppercase tracking-wide flex items-center gap-1">
                   sur <span className="font-bold">Google</span> 
                 </span>
               </div>
            </div>

            <a 
              href="https://www.google.com/search?q=les+saveurs+de+maghreb+angers" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-[#264653]/10 text-[#264653] px-6 py-3 rounded-full font-bold hover:bg-[#E07A5F] hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-lg flex items-center gap-2"
            >
              Lire plus d'avis <ExternalLink size={18} />
            </a>
          </div>

          {/* Grid des Avis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow relative">
                <Quote className="absolute top-6 right-6 text-[#E07A5F]/10" size={48} />
                
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>

                <p className="text-[#264653]/80 leading-relaxed mb-6 italic relative z-10">
                  "{review.text}"
                </p>

                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E07A5F]/10 flex items-center justify-center text-[#E07A5F] font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#264653] text-sm">{review.name}</p>
                    <p className="text-xs text-[#264653]/40 uppercase font-bold">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Values;