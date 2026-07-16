import React from 'react';
import { motion } from 'motion/react';

export default function StorySection() {
  return (
    <div className="comic-panel p-8 rounded-2xl bg-zinc-100 mb-12 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 text-[200px] opacity-5">🐶</div>
      
      <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
        <div className="w-full md:w-1/3 flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="w-48 h-48 md:w-64 md:h-64 bg-yellow-400 rounded-full border-4 border-black shadow-[8px_8px_0px_#000] flex items-center justify-center text-8xl overflow-hidden relative"
          >
            <span className="relative z-10">🌭🐕</span>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPgoJPC9zdmc+')] opacity-50" />
          </motion.div>
        </div>
        
        <div className="flex-1 text-black">
          <h2 className="text-3xl font-display comic-text-bold tracking-widest uppercase mb-4">
            A Lenda do Cachorro Sideral
          </h2>
          <div className="space-y-4 font-bold text-zinc-800 text-lg">
            <p>
              Tudo começou quando Nickel, um doguinho caramelo com sonhos astronômicos, decidiu que a ração espacial não era saborosa o suficiente. Ele queria o molho perfeito, a salsicha mais suculenta e o pão mais macio de Passo Fundo!
            </p>
            <p>
              Em sua nave (um trailer adaptado na garagem), Nickel começou a misturar ingredientes intergalácticos. A maionese secreta? Dizem que a receita veio de um meteoro saboroso que caiu no centro da cidade.
            </p>
            <p>
              Hoje, o Nickel Lanches é o point oficial para humanos e alienígenas famintos. Nossa missão é entregar não apenas um lanche, mas uma verdadeira experiência cósmica em cada mordida!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
