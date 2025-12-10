import React from 'react';
import { IMAGES } from '../constants';

const Values: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#F4F1DE] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#264653] mb-4">Notre Philosophie</h2>
          <div className="h-1 w-24 bg-[#E07A5F] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Card 1 */}
          <div className="relative group">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#D4AF37] rounded-3xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-lg z-10 flex flex-col md:flex-row gap-6 items-center">
              <img 
                src={IMAGES.chef} 
                alt="Chef" 
                className="w-32 h-32 rounded-2xl object-cover shadow-md"
              />
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#E07A5F] mb-2">Recettes Ancestrales</h3>
                <p className="text-[#264653]/80 leading-relaxed">
                  Nous n'inventons pas, nous préservons. Chaque plat est préparé selon des recettes transmises par des générations de mères et de grands-mères.
                </p>
              </div>
            </div>
          </div>

           {/* Card 2 - Offset */}
           <div className="relative group md:mt-24">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#264653] rounded-3xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative bg-[#264653] rounded-3xl p-8 shadow-lg z-10 flex flex-col md:flex-row gap-6 items-center text-[#F4F1DE]">
               <div>
                <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-2">Produits Locaux</h3>
                <p className="text-[#F4F1DE]/80 leading-relaxed">
                  Si nos épices viennent des souks de Marrakech, nos légumes et viandes proviennent des meilleurs producteurs locaux et bio.
                </p>
              </div>
               <img 
                src="https://images.unsplash.com/photo-1606914501449-b7698cd99335?q=80&w=400&auto=format&fit=crop" 
                alt="Ingrédients Frais" 
                className="w-32 h-32 rounded-2xl object-cover shadow-md order-first md:order-last"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;