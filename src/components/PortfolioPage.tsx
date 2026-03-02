import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Globe, MapPin } from 'lucide-react';

const portfolioCompanies = [
  {
    name: 'Falcon',
    sector: 'Fintech Infrastructure',
    description: 'End-to-end digital banking stack enabling credit cards, UPI, and embedded financial products.',
    logo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=100',
    location: 'India',
    website: 'https://www.falconfs.com/',
  },
  {
    name: 'Dressfolk',
    sector: 'Consumer & D2C',
    description: 'Handwoven saree marketplace connecting 800+ artisans with premium conscious fashion buyers.',
    logo: 'https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=100',
    location: 'India',
    website: 'https://www.dressfolk.com',
  },
  {
    name: 'Woodsmen Whiskey',
    sector: 'Premium Spirits',
    description: 'India’s first mountain whiskey brand crafting blended whiskies designed for the Indian palate.',
    logo: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=100',
    location: 'India',
    website: 'https://www.woodsmanwhisky.com',
  },
  {
    name: "Jimmy’s Cocktail",
    sector: 'FMCG Beverages',
    description: 'Craft cocktail mixers and premium tonics making bar-quality drinks accessible at home.',
    logo: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=100',
    location: 'India',
    website: 'https://drinkjimmys.com',
  },
  {
    name: 'Bridge Up',
    sector: 'Fintech & Credit',
    description: 'Working-capital and bill-discounting platform enabling faster cash flows for businesses.',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=100',
    location: 'India',
    website: 'https://bridgeup.com',
  },
  {
    name: 'Boba Bhai',
    sector: 'QSR & Food Brands',
    description: 'Quick-service chain popularizing Korean burgers and bubble tea across urban India.',
    logo: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=100',
    location: 'India',
    website: 'https://www.bobabhai.com',
  },
  {
    name: 'Aroleap',
    sector: 'Fitness Technology',
    description: 'Smart connected strength-training and digital fitness equipment built for Indian consumers.',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=100',
    location: 'India',
    website: 'https://www.aroleap.com',
  },
  {
    name: 'Magma',
    sector: 'Manufacturing Tech',
    description: 'Digital marketplace delivering end-to-end manufacturing services for industrial supply chains.',
    logo: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=100',
    location: 'India',
    website: 'https://www.magmagroup.in/',
  },
  {
    name: '91 Cycles',
    sector: 'Active Lifestyle',
    description: 'Rapidly growing bicycle and e-bike brand focused on durable mobility solutions.',
    logo: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=100',
    location: 'India',
    website: 'https://www.outdoors91.com',
  },
  {
    name: 'Canvaloop',
    sector: 'Sustainable Materials',
    description: 'Manufacturer of eco-friendly textile fibers from agricultural waste like hemp and flax.',
    logo: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=100',
    location: 'India',
    website: 'https://www.canvaloop.com'}
];

export function PortfolioPage({ onBack, onContact }: { onBack: () => void; onContact: () => void }) {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <button 
          onClick={onBack}
          className="mb-12 text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center transition-colors group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            <Globe className="w-3 h-3" />
            <span>Active Portfolio</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-gray-900 mb-8 leading-tight">
            The Companies <br/> <span className="text-blue-600">Building the Future.</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            We partner with visionary founders across high-growth sectors, providing strategic capital and operational expertise to help them scale into industry leaders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCompanies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-10 rounded-[3rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2 block">
                    {company.sector}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {company.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-10">
                  {company.description}
                </p>
              </div>

              <div className="pt-8 border-t border-gray-100">
                <a 
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-black text-gray-900 hover:text-blue-600 transition-colors group/link uppercase tracking-wider"
                >
                  Visit Website
                  <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 lg:p-20 bg-gray-900 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 relative z-10">Have a Disruptive Idea?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 relative z-10 text-lg">
            We are always looking for founders who are building the next generation of category-defining companies.
          </p>
          <button 
            onClick={onContact}
            className="px-10 py-4 bg-white text-gray-900 font-bold rounded-2xl hover:bg-blue-50 hover:scale-105 transition-all relative z-10 shadow-2xl"
          >
            Submit Your Pitch
          </button>
        </div>
      </div>
    </div>
  );
}
