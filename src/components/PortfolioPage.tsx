import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Globe, Grape, MapPin } from 'lucide-react';
import ninetyone from '../assets/Portfolio/ninetyone-ktm.svg';
import aroleap from '../assets/Portfolio/aroleap-logo.svg';
import boba from '../assets/Portfolio/boba_bhai.png';
import woodsmen from '../assets/Portfolio/woodsman_kv_1_2.webp';
import falcon from '../assets/Portfolio/falcon.jpg';
import jimmys from '../assets/Portfolio/jimmys.webp';
import neemans from '../assets/Portfolio/neemans.jpg';
import cradlewise from '../assets/Portfolio/cradlewise.svg';
import aina from '../assets/Portfolio/mirage.png';
import hoovufresh from '../assets/Portfolio/hoovufresh.avif';
import dressfolk from '../assets/Portfolio/dressfolk1.jpg';
import moisoi from '../assets/Portfolio/moisoi.avif';
import goatbrand from '../assets/Portfolio/goat.png';
import neosapien from '../assets/Portfolio/neosapein.svg';
import magma from '../assets/Portfolio/magma.webp';
import canvaloop from '../assets/Portfolio/canvaloop.avif';
import bridgeup from '../assets/Portfolio/bridgeup.svg';
import currently from '../assets/Portfolio/currently.png';
import grapevine from '../assets/Portfolio/grapevine.jpg';

const portfolioCompanies = [
  {
    name: '91 Cycles',
    sector: 'Active Lifestyle / Mobility',
    description: 'Founded by Sachin Chopra and Vishal Chopra, Ninety One Cycles is a fast-growing Indian active lifestyle brand offering designed-in-India bicycles and e-bikes built for durability and performance.',
    logo: ninetyone,
    location: 'India',
    website: 'https://www.outdoors91.com',
  },
  {
    name: 'Boba Bhai',
    sector: 'QSR & Food Brands',
    description: 'Founded by Dhruv Kohli, Boba Bhai is a QSR brand focused on Korean burgers and bubble tea, rapidly expanding across urban India.',
    logo: boba,
    location: 'India',
    website: 'https://www.bobabhai.com',
  },
  {
    name: 'Aroleap',
    sector: 'Fitness Technology',
    description: 'Founded by Anurag Dani and Rohit Patel, Aroleap builds India’s first digital weight and strength training equipment platform.',
    logo: aroleap,
    location: 'India',
    website: 'https://www.aroleap.com',
  },
  {
    name: 'Falcon',
    sector: 'Fintech Infrastructure',
    description: 'Founded by Priyanka Kanwar and Prabhtej Bhatia, Falcon provides fintech infrastructure enabling credit cards, UPI, savings accounts and other embedded banking services.',
    logo: falcon,
    location: 'India',
    website: 'https://www.falconfs.com/',
  },
  {
    name: 'Woodsmen Whiskey',
    sector: 'Premium Spirits',
    description: 'Founded by Shivam Ginglani, Woodsmen Whiskey is India’s first mountain whiskey brand crafting blended whiskies designed for the Indian palate.',
    logo: woodsmen,
    location: 'India',
    website: 'https://www.woodsmanwhisky.com',
  },
  {
    name: "Jimmy’s Cocktail",
    sector: 'FMCG Beverages',
    description: 'Founded by Ankur Bhatia and Nitin Bhardwaj, Jimmy’s produces premium cocktail mixers including tonic water, soda, and ginger ale.',
    logo: jimmys,
    location: 'India',
    website: 'https://drinkjimmys.com',
  },
  {
    name: 'Neemans',
    sector: 'Consumer Footwear',
    description: 'Founded by Taran Chhabra and Amarpreet Singh, Neemans is an online footwear brand offering sustainable and comfortable shoes for men and women.',
    logo: neemans,
    location: 'India',
    website: 'https://neemans.com/',
  },
  {
    name: 'Dressfolk',
    sector: 'Consumer & D2C',
    description: 'Founded by Nitin Mehrotra, Dressfolk is a handwoven saree marketplace aggregating more than 800 weavers across multiple Indian states.',
    logo: dressfolk,
    location: 'India',
    website: 'https://www.dressfolk.com',
  },
  {
    name: 'Magma',
    sector: 'Manufacturing Technology',
    description: 'Founded by Neal Thakker, Magma is a digital marketplace offering end-to-end manufacturing services for industrial supply chains.',
    logo: magma,
    location: 'India',
    website: 'https://www.magmagroup.in/',
  },
  {
    name: 'Canvaloop',
    sector: 'Sustainable Materials',
    description: 'Founded by Shreyans Kokra and Dhruv Gupta, Canvaloop manufactures sustainable textile fibers from hemp and flax.',
    logo: canvaloop,
    location: 'India',
    website: 'https://www.canvaloop.com',
  },
  {
    name: 'Grapevine',
    sector: 'Community Platform',
    description: 'Founded by Jainam Talsania, Saumil Tripathi and Shreeyash Dharmadhikari, Grapevine is a community platform for salary transparency and career discussions.',
    logo: grapevine,
    location: 'India',
    website: 'https://www.grapevine.in/home',
  },
  {
    name: 'Bridge Up',
    sector: 'Fintech & Credit',
    description: 'Founded by Zeus Dhanbhoora and Dipen Shah, BridgeUp provides bill discounting and account aggregation financial products.',
    logo: bridgeup,
    location: 'India',
    website: 'https://bridgeup.com',
  },
  {
    name: 'Hoovu Fresh',
    sector: 'Consumer Products',
    description: 'Founded by Yeshoda Karuturi, Hoovu Fresh delivers fresh pooja flowers and produces incense sticks from recycled temple flowers.',
    logo: hoovufresh,
    location: 'India',
    website: 'https://www.hoovufresh.com',
  },
  {
    name: 'Neosapien',
    sector: 'Wearable Technology',
    description: 'Founded by Dhananjay Yadav, Neosapien builds wearable devices designed to help manage habits and productivity.',
    logo: neosapien,
    location: 'India',
    website: 'https://neosapien.xyz/',
  },
  {
    name: 'Currently',
    sector: 'Social Networking',
    description: 'Founded by Mitesh Shethwala, Currently is a social networking platform focused on enabling real connections.',
    logo: currently,
    location: 'India',
    website: 'https://currently.club/',
  },
  {
    name: 'Moi Soi',
    sector: 'Food & FMCG',
    description: 'Founded by Deb Mukherjee, Moi Soi produces instant meals, noodles and Asian sauces for Indian consumers.',
    logo: moisoi,
    location: 'India',
    website: 'https://www.moisoi.in/',
  },
  {
    name: 'Goat Brand Labs',
    sector: 'D2C Brand Builder',
    description: 'Founded by Rishi Vasudev, Goat Brand Labs acquires and scales category-defining D2C brands.',
    logo: goatbrand,
    location: 'India',
    website: 'https://www.goatbrandlabs.com',
  },
  {
    name: 'Cradlewise',
    sector: 'Consumer Hardware',
    description: 'Founded by Radhika and Bharath Patil, Cradlewise builds intelligent baby cribs designed to improve sleep for babies and parents.',
    logo: cradlewise,
    location: 'India',
    website: 'https://cradlewise.com',
  },
  {
    name: 'Aina',
    sector: 'AI + Hardware',
    description: 'Founded by Apoorv Shankar, Aina is building technology in the AI and hardware space focused on redefining intelligent living environments.',
    logo: aina,
    location: 'India',
    website: 'https://www.projectmirage.ai/',
  }
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
            The Companies <br /> <span className="text-blue-600">Building the Future.</span>
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
              className="flip-card cursor-pointer"
              style={{ perspective: '1000px' }}
              onClick={() => window.open(company.website, '_blank', 'noopener,noreferrer')}
            >
              <div className="flip-card-inner">
                {/* FRONT — logo only */}
                <div className="flip-card-front rounded-[3rem] border border-gray-100 bg-gray-50/50 p-10 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>

                {/* BACK — existing card content */}
                <div className="flip-card-back rounded-[3rem] border border-gray-100 bg-white shadow-2xl p-10 flex flex-col">
                  <div className="flex-grow">
                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2 block">
                        {company.sector}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                        {company.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {company.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-400">
                      <MapPin className="w-3 h-3 mr-1" />
                      {company.location}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100">
                    <span className="inline-flex items-center text-sm font-black text-gray-900 uppercase tracking-wider">
                      Visit Website
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
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
