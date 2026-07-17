import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let intervalId: any = null;
    let isReversing = false;

    // Remove the loop attribute so it doesn't restart automatically
    video.loop = false;

    const handleTimeUpdate = () => {
      // When it reaches near the end of the video, start reversing
      if (!isReversing && video.duration && video.currentTime >= video.duration - 0.05) {
        isReversing = true;
        video.pause();
        
        intervalId = setInterval(() => {
          if (video.currentTime <= 0.05) {
            clearInterval(intervalId);
            isReversing = false;
            video.play();
          } else {
            video.currentTime -= 0.04; // Rewind frame by frame (approx 25fps)
          }
        }, 40);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full mb-12 rounded-3xl overflow-hidden p-6 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8 bg-zinc-900 border-4 border-black shadow-[8px_8px_0px_#000]"
    >
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"20\\" viewBox=\\"0 0 20 20\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"1\\" fill-rule=\\"evenodd\\"%3E%3Ccircle cx=\\"3\\" cy=\\"3\\" r=\\"3\\"%2F%3E%3Ccircle cx=\\"13\\" cy=\\"13\\" r=\\"3\\"%2F%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '20px 20px' }} />
      
      <div className="flex-1 text-center md:text-left text-white relative z-10">
        <div className="inline-block bg-yellow-400 text-black font-black uppercase tracking-widest px-4 py-1 rounded-full text-sm mb-6 border-2 border-black shadow-[2px_2px_0px_#000] rotate-[-2deg]">
          A Construção do Sabor
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display comic-text-bold uppercase leading-[0.9] tracking-tighter mb-6 text-yellow-400 drop-shadow-[4px_4px_0px_#000]">
          Sinta a <br/><span className="text-white">Fome!</span>
        </h2>
        <p className="text-lg md:text-xl font-bold uppercase tracking-widest opacity-90 border-l-4 border-yellow-400 pl-4">
          Ingredientes frescos, montados na hora e queijo derretendo de verdade.
        </p>
      </div>
      
      <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px] flex items-center justify-center">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-yellow-400/30 blur-3xl rounded-full w-full h-full scale-110"></div>
        
        <video 
          ref={videoRef}
          src="/atualvideo.webm" 
          autoPlay 
          muted 
          playsInline
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] scale-110 md:scale-125 origin-center transition-transform hover:scale-125 md:hover:scale-[1.4] duration-500"
        />
      </div>
    </motion.div>
  );
}
