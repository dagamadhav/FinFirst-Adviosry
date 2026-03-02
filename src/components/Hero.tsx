import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1637095937545-7d8c1edf4d2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd2hpdGUlMjBhcmNoaXRlY3R1cmUlMjBvZmZpY2UlMjBiYWNrZ3JvdW5kJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTMzNjQxNXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Minimalist Professional Architecture"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Subtle radial gradient to keep text readable on light bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-2 mb-8 bg-blue-50 w-fit px-4 py-1.5 rounded-full border border-blue-100 shadow-sm"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-blue-800 uppercase tracking-widest">Building the Future</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl lg:text-8xl font-black tracking-tight text-gray-950 mb-8 leading-[1.05]"
          >
            Strategic Capital <br/> <span className="text-blue-600">Empowering Vision.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl lg:text-2xl text-gray-700 mb-12 leading-relaxed max-w-2xl font-medium"
          >
            FinFirst Advisors provides the long-term capital and 40+ years of strategic expertise founders need to build lasting institutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all group shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              Get in Touch
              <span className="ml-3 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#values"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 font-bold rounded-2xl hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm"
            >
              Our Philosophy
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
