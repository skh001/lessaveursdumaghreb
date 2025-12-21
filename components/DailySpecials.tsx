import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { Sparkles } from 'lucide-react';

interface SpecialItem {
  type: string;        // e.g. "Entrée", "Plat", "Dessert"
  name: string;        // e.g. "Shorba Frik"
  description: string; // e.g. "Soupe traditionnelle..."
  price: string;       // e.g. "6"
  show: string;        // "TRUE" or "FALSE"
}

const DailySpecials: React.FC = () => {
  const [specials, setSpecials] = useState<SpecialItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // YOUR GOOGLE SHEET CSV LINK
  const BASE_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXdcW67P2MIcj5gsNdMKdLbJ8kNbtBFeAMxvXXz8UXMMWoQ6HkDE5z2KCYoD6k8vpnOFxnCjBABIfk/pub?gid=0&single=true&output=csv";

  useEffect(() => {
    // We append a timestamp to the URL to prevent the browser from caching the old menu.
    // This forces a fresh fetch every time the user refreshes the page.
    // Note: Google Sheets itself still takes ~3-5 mins to update the CSV after an edit.
    const uniqueUrl = `${BASE_URL}&t=${Date.now()}`;

    Papa.parse(uniqueUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = results.data as SpecialItem[];
        
        // Filter: Keep only items where 'show' is "TRUE" (case insensitive)
        const activeItems = data.filter(item => 
            item.name && item.show && item.show.trim().toUpperCase() === 'TRUE'
        );
        
        setSpecials(activeItems);
        setLoading(false);
      },
      error: (error) => {
        console.error("Error loading specials:", error);
        setLoading(false);
      }
    });
  }, []);

  // If loading, show nothing (or a small spinner if you prefer)
  if (loading) return null;

  // If the sheet is empty or everything is set to FALSE, hide this section completely
  if (specials.length === 0) return null;

  return (
    <div className="w-full px-4 -mb-10 relative z-20 mt-4 md:-mt-16 animate-fade-up">
      <div className="max-w-4xl mx-auto bg-[#264653] text-[#F4F1DE] rounded-3xl p-8 md:p-10 shadow-2xl border-4 border-[#E07A5F] flex flex-col items-center transform transition-transform hover:scale-[1.01] duration-500">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
            <div className="bg-[#E07A5F] p-3 rounded-full mb-3 animate-bounce shadow-lg">
                <Sparkles size={24} className="text-white" />
            </div>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#F4F1DE] mb-2">
                L'Ardoise du Jour
            </h3>
            <p className="text-[#F4F1DE]/70 text-sm md:text-base font-light italic">
                Les suggestions fraîches du chef, disponibles aujourd'hui.
            </p>
        </div>

        {/* The Grid of Specials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full divide-y md:divide-y-0 md:divide-x divide-[#F4F1DE]/20">
            {specials.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center pt-6 md:pt-0 px-4 group">
                    <span className="text-[#E07A5F] font-bold uppercase tracking-widest text-[10px] md:text-xs mb-2 bg-[#E07A5F]/10 px-2 py-1 rounded">
                        {item.type}
                    </span>
                    <h4 className="text-xl md:text-2xl font-bold mb-3 font-serif group-hover:text-[#E07A5F] transition-colors duration-300">
                        {item.name}
                    </h4>
                    <p className="text-sm opacity-70 mb-5 min-h-[40px] leading-relaxed max-w-[200px]">
                        {item.description}
                    </p>
                    <span className="text-xl md:text-2xl font-bold bg-[#F4F1DE] text-[#264653] px-6 py-2 rounded-xl shadow-md transform group-hover:-translate-y-1 transition-all duration-300">
                        {item.price}€
                    </span>
                </div>
            ))}
        </div>

        <p className="mt-8 text-[10px] opacity-40 uppercase tracking-widest">
            * Quantités Limitées
        </p>

      </div>
    </div>
  );
};

export default DailySpecials;