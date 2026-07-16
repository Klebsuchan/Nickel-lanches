import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function LocationSection() {
  return (
    <div className="mb-12 relative z-10">
      <h2 className="text-3xl font-display comic-text-bold tracking-widest uppercase text-black mb-6">Nossa Base de Lançamento</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <div className="comic-panel p-6 rounded-2xl bg-zinc-100 flex flex-col justify-center space-y-6">
          
          <div className="flex items-start gap-4">
            <div className="bg-blue-400 p-3 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] flex-shrink-0 mt-1">
              <MapPin size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-display font-bold uppercase text-xl text-black mb-1">Endereço (Passo Fundo)</h3>
              <p className="font-bold text-zinc-700">Rua das Galáxias, 1234 - Bairro Estelar</p>
              <p className="font-bold text-zinc-500 text-sm">Passo Fundo - RS, 99000-000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-yellow-400 p-3 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] flex-shrink-0 mt-1">
              <Clock size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-display font-bold uppercase text-xl text-black mb-1">Horário de Voo</h3>
              <p className="font-bold text-zinc-700">Terça a Domingo: 18h30 às 23h30</p>
              <p className="font-bold text-red-500">Segunda-feira: Fechado (Descanso do Doguinho)</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-400 p-3 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] flex-shrink-0 mt-1">
              <Phone size={24} className="text-black" />
            </div>
            <div>
              <h3 className="font-display font-bold uppercase text-xl text-black mb-1">Contato</h3>
              <p className="font-bold text-zinc-700">(54) 99999-9999</p>
              <p className="font-bold text-zinc-500 text-sm">Também no WhatsApp!</p>
            </div>
          </div>
          
        </div>

        <div className="bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_#000] relative min-h-[300px]">
          {/* Mock Map Image */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
            alt="Mapa de Passo Fundo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-yellow-400 p-3 rounded-full border-2 border-black shadow-[4px_4px_0px_#000]">
              <MapPin size={32} className="text-black" />
            </div>
            <div className="w-16 h-4 bg-black/20 rounded-full blur-sm mx-auto mt-2" />
          </motion.div>
          
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl border-2 border-black font-bold text-center text-black">
            📍 Nickel Lanches Passo Fundo
          </div>
        </div>
      </div>
    </div>
  );
}
