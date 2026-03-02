import React from 'react';
import { motion } from 'motion/react';
import { Brain, CreditCard, ShoppingBag } from 'lucide-react';

const investmentAreas = [
  {
    title: 'DeepTech & AI',
    description: 'Foundational models and vertical AI applications redefining computing.',
    icon: Brain,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    title: 'FinTech & SaaS',
    description: 'Infrastructure and software solutions transforming global commerce.',
    icon: CreditCard,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    title: 'Consumer & Brands',
    description: 'Direct-to-consumer innovations and tech-enabled lifestyle brands.',
    icon: ShoppingBag,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

const portfolioCompanies = [
  { name: 'Nebula AI' },
  { name: 'Flow Financial' },
  { name: 'Ethos Brands' },
  { name: 'Lumina Health' },
  { name: 'Aether Logistics' },
  { name: 'Vertex Security' },
];

export function FocusAreas({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const loopList = [...portfolioCompanies, ...portfolioCompanies, ...portfolioCompanies, ...portfolioCompanies];

  return (
    <section id="portfolio" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-20">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">Investment Focus Areas</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We concentrate our expertise and capital where we can add the most strategic value to founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {investmentAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[3rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className={`w-16 h-16 rounded-3xl ${area.bg} ${area.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <area.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
              <button 
                onClick={() => onNavigate?.('portfolio')}
                className="text-sm font-bold text-gray-900 flex items-center group-hover:underline transition-all"
              >
                Learn more
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Portfolio</h2>
            <p className="text-gray-600">Backing 11+ high-impact ventures across sectors.</p>
          </div>
          <button 
            onClick={() => onNavigate?.('portfolio')}
            className="text-lg font-bold text-gray-900 hover:underline flex items-center group"
          >
            Full Portfolio 
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden py-4 border-y border-gray-100 bg-gray-50/30">
        <motion.div 
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {loopList.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex items-center space-x-4 shrink-0"
            >
              <div className="w-3 h-3 bg-blue-600 rounded-full" />
              <span className="text-3xl font-black text-gray-300 uppercase tracking-tighter hover:text-gray-900 transition-colors cursor-default select-none">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
