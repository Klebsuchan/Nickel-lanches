import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Flame } from 'lucide-react';

export default function PromoSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-yellow-400 border-4 border-black rounded-2xl p-6 md:p-8 mb-12 shadow-[8px_8px_0px_#000] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 text-center md:text-left text-black">
          <div className="inline-flex items-center gap-2 bg-black text-yellow-400 font-display font-bold uppercase tracking-widest px-4 py-1 rounded-full text-sm mb-4">
            <Flame size={16} /> Promoção do Dia
          </div>
          <h2 className="text-4xl md:text-5xl font-display comic-text-bold uppercase tracking-wider mb-2">
            Combo Meteoro
          </h2>
          <p className="text-xl font-bold text-zinc-900 mb-6">
            X-Monstro da Família + Batata Espetáculo + Milkshake Cósmico
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold line-through text-zinc-600">R$ 83,80</span>
              <span className="text-5xl font-display font-bold text-black drop-shadow-[2px_2px_0px_#fff]">R$ 65,00</span>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/3 aspect-video md:aspect-square relative flex items-center justify-center">
          <div className="absolute inset-0 bg-white rounded-full opacity-50 blur-2xl" />
          <img 
            src="https://images.unsplash.com/photo-1594212691516-0158b4be7284?auto=format&fit=crop&w=800&q=80" 
            alt="Combo Meteoro" 
            className="relative z-10 w-full h-full object-cover rounded-2xl border-4 border-black shadow-[4px_4px_0px_#000] transform -rotate-3 hover:rotate-0 transition-transform duration-300"
          />
          <div className="absolute -top-4 -right-4 bg-red-500 text-white font-display font-bold px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] rotate-12 z-20 animate-bounce">
            -22% OFF!
          </div>
        </div>
      </div>
    </motion.div>
  );
}
