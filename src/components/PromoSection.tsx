import React from 'react';
import { motion } from 'motion/react';
import { Flame, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface PromoSectionProps {
  combos: Product[];
  onComboClick: (combo: Product) => void;
}

export default function PromoSection({ combos, onComboClick }: PromoSectionProps) {
  if (!combos || combos.length === 0) return null;

  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Flame className="text-yellow-400" size={32} />
        <h2 className="text-4xl md:text-5xl font-display comic-text-bold uppercase tracking-wider text-white">
          Combos Incríveis
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {combos.map((combo, index) => (
          <motion.div 
            key={combo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-yellow-400 border-4 border-black rounded-2xl p-6 shadow-[8px_8px_0px_#000] relative overflow-hidden flex flex-col justify-between cursor-pointer hover:-translate-y-1 hover:shadow-[10px_10px_0px_#000] transition-all"
            onClick={() => onComboClick(combo)}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full text-black">
              <h3 className="text-2xl font-display comic-text-bold uppercase mb-2">
                {combo.name}
              </h3>
              
              <p className="text-sm font-bold text-zinc-900 mb-6 flex-grow">
                {combo.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-3xl font-display font-bold text-black drop-shadow-[2px_2px_0px_#fff]">
                  R$ {combo.price.toFixed(2).replace('.', ',')}
                </span>
                
                <button className="bg-black text-white p-3 rounded-full hover:bg-yellow-500 hover:text-black border-2 border-black transition-colors shadow-[2px_2px_0px_#fff]">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
