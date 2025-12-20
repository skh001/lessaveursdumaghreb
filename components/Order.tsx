import React, { useState } from 'react';
import { Clock, MapPin, Utensils, Phone, Lock, Send, User, Users, MessageSquare, Calendar } from 'lucide-react';

const Order: React.FC = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Envoi en cours...");
    const formData = new FormData(event.target);

    // Votre clé Web3Forms
    formData.append("access_key", "278db1df-5af1-4b81-b2bc-b056de823ac0"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Demande envoyée ! Nous vous rappellerons pour confirmer.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Erreur de connexion. Veuillez appeler directement.");
    }
  };

  // Get today's date for the min attribute to prevent past bookings
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col">
       
       <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#264653]">Réserver & Commander</h2>
          <p className="text-lg text-[#264653]/70 mt-2">Choisissez la méthode qui vous convient.</p>
       </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
        {/* --- COLONNE 1 : LE TÉLÉPHONE (PRIORITÉ ABSOLUE) --- */}
        <div className="bg-[#E07A5F] rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute -right-10 -top-10 text-white/10">
                <Phone size={250} />
            </div>
            
            <div className="relative z-10">
                <h3 className="text-3xl font-serif font-bold mb-4">Urgent ou pour ce soir ?</h3>
                <p className="text-white/90 text-lg mb-8">
                    Le moyen le plus sûr pour réserver votre table immédiatement est de nous appeler.
                </p>

                <a 
                    href="tel:0604112928"
                    className="bg-white text-[#E07A5F] py-4 px-6 rounded-xl font-bold text-xl flex items-center justify-center gap-3 shadow-lg hover:scale-[1.02] transition-transform w-full sm:w-fit"
                >
                    <Phone size={24} className="animate-pulse" />
                    06 04 11 29 28
                </a>
                <p className="mt-4 text-sm text-white/70">
                    Réponse directe pendant les heures d'ouverture.
                </p>
            </div>
        </div>

        {/* --- COLONNE 2 : LE FORMULAIRE WEB3FORMS --- */}
        <div className="bg-white border-2 border-[#264653]/10 rounded-[2.5rem] p-8 md:p-10 relative shadow-lg">
            <h3 className="text-2xl font-bold text-[#264653] mb-2">Demande en ligne</h3>
            <p className="text-[#264653]/60 text-sm mb-6">
                Remplissez ce formulaire et <strong>nous vous rappellerons</strong> pour valider.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
                {/* HoneyPot Anti-Spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                {/* ROW 1: Nom & Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <User size={18} className="absolute top-4 left-4 text-[#264653]/40" />
                        <input 
                            type="text" 
                            name="name" 
                            required 
                            placeholder="Votre Nom"
                            className="w-full bg-[#F4F1DE]/30 border border-[#264653]/10 rounded-xl py-3.5 pl-12 pr-4 text-[#264653] placeholder:text-[#264653]/40 focus:outline-none focus:border-[#E07A5F]"
                        />
                    </div>
                    <div className="relative">
                        <Phone size={18} className="absolute top-4 left-4 text-[#264653]/40" />
                        <input 
                            type="tel" 
                            name="phone" 
                            required 
                            placeholder="Votre Numéro"
                            className="w-full bg-[#F4F1DE]/30 border border-[#264653]/10 rounded-xl py-3.5 pl-12 pr-4 text-[#264653] placeholder:text-[#264653]/40 focus:outline-none focus:border-[#E07A5F]"
                        />
                    </div>
                </div>

                {/* ROW 2: Date & Heure (NOUVEAU) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                        <Calendar size={18} className="absolute top-4 left-4 text-[#264653]/40" />
                        <input 
                            type="date" 
                            name="date" 
                            required 
                            min={today}
                            className="w-full bg-[#F4F1DE]/30 border border-[#264653]/10 rounded-xl py-3.5 pl-12 pr-4 text-[#264653] placeholder:text-[#264653]/40 focus:outline-none focus:border-[#E07A5F]"
                        />
                    </div>
                    <div className="relative">
                        <Clock size={18} className="absolute top-4 left-4 text-[#264653]/40" />
                        <input 
                            type="time" 
                            name="time" 
                            required 
                            min="12:00"
                            max="22:30"
                            className="w-full bg-[#F4F1DE]/30 border border-[#264653]/10 rounded-xl py-3.5 pl-12 pr-4 text-[#264653] placeholder:text-[#264653]/40 focus:outline-none focus:border-[#E07A5F]"
                        />
                    </div>
                </div>

                {/* ROW 3: Nombre de personnes */}
                <div className="relative">
                    <Users size={18} className="absolute top-4 left-4 text-[#264653]/40" />
                    <input 
                        type="number" 
                        name="guests" 
                        min="1"
                        max="20"
                        required 
                        placeholder="Nombre de personnes"
                        className="w-full bg-[#F4F1DE]/30 border border-[#264653]/10 rounded-xl py-3.5 pl-12 pr-4 text-[#264653] placeholder:text-[#264653]/40 focus:outline-none focus:border-[#E07A5F]"
                    />
                </div>

                {/* ROW 4: Message / Commande */}
                <div className="relative">
                    <Utensils size={18} className="absolute top-4 left-4 text-[#264653]/40" />
                    <textarea 
                        name="message" 
                        required
                        rows={3}
                        placeholder="Ce que vous voulez manger (ex: 2 couscous, 1 rechta)..."
                        className="w-full bg-[#F4F1DE]/30 border border-[#264653]/10 rounded-xl py-3.5 pl-12 pr-4 text-[#264653] placeholder:text-[#264653]/40 focus:outline-none focus:border-[#E07A5F]"
                    ></textarea>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-[#264653] text-white font-bold py-4 rounded-xl hover:bg-[#1d353f] transition-colors flex items-center justify-center gap-2"
                >
                    <Send size={18} />
                    Envoyer la demande
                </button>

                {/* Message de confirmation ou erreur */}
                {result && (
                    <div className={`p-3 rounded-xl text-center text-sm font-bold mt-2 ${result.includes('envoyée') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {result}
                    </div>
                )}
            </form>
        </div>
      </div>


      {/* --- SECTION 3 : LIVRAISON (COMING SOON) --- */}
      <h3 className="text-2xl font-bold text-[#264653] mb-6 pl-2">Livraison à domicile</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* 1. Les Frères Toqués */}
        <div className="bg-gray-100 rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden h-full min-h-[240px] opacity-70 cursor-not-allowed border border-gray-200">
           <div className="absolute top-4 right-4 z-20 bg-[#264653] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
             <Lock size={12} /> Bientôt
           </div>
           <div className="absolute -right-4 -bottom-4 text-gray-400/20">
             <ShoppingBagIcon size={100} />
           </div>
           <h3 className="text-2xl font-serif font-bold text-gray-500 relative z-10">Les Frères Toqués</h3>
           <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 relative z-10 mt-auto">
             <Clock size={24} />
           </div>
        </div>

        {/* 2. Uber Eats */}
        <div className="bg-gray-100 rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden h-full min-h-[240px] opacity-70 cursor-not-allowed border border-gray-200">
           <div className="absolute top-4 right-4 z-20 bg-[#264653] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
             <Lock size={12} /> Bientôt
           </div>
           <div className="absolute -right-4 -bottom-4 text-gray-400/20">
             <ShoppingBagIcon size={100} />
           </div>
           <h3 className="text-2xl font-bold text-gray-500 relative z-10">Uber<br/>Eats</h3>
           <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 relative z-10 mt-auto">
             <Clock size={24} />
           </div>
        </div>

        {/* 3. Deliveroo */}
        <div className="bg-gray-100 rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden h-full min-h-[240px] opacity-70 cursor-not-allowed border border-gray-200">
           <div className="absolute top-4 right-4 z-20 bg-[#264653] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide flex items-center gap-1">
             <Lock size={12} /> Bientôt
           </div>
           <div className="absolute -right-4 -bottom-4 text-gray-400/20">
             <ShoppingBagIcon size={100} />
           </div>
           <h3 className="text-2xl font-bold text-gray-500 relative z-10">Deliveroo</h3>
           <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 relative z-10 mt-auto">
             <Clock size={24} />
           </div>
        </div>
      </div>
      
       {/* --- INFO PRATIQUES --- */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#264653] rounded-[2rem] p-8 text-white flex flex-row items-center justify-between relative overflow-hidden shadow-sm">
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

          <div className="bg-white rounded-[2rem] p-8 text-[#264653] flex flex-row items-center justify-between shadow-sm border-2 border-dashed border-[#264653]/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-[#E07A5F] text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
               BIENTÔT DISPONIBLE
             </div>
             <div className="opacity-60">
                <h4 className="text-xl font-bold mb-1 flex items-center gap-2">
                    <MapPin size={20} className="text-[#264653]" /> Click & Collect
                </h4>
                <p className="font-light text-sm opacity-70 mb-3">25 Rue Lionnaise, Angers</p>
             </div>
             <div className="bg-gray-100 p-4 rounded-full text-gray-300">
                <MapPin size={40} />
             </div>
          </div>
      </div>

    </div>
  );
};

const ShoppingBagIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Order;