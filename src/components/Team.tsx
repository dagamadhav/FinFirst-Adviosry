import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

const team = [
  {
    name: 'Neerav Dad ',
    role: 'Managing Partner',
    image: 'https://media.licdn.com/dms/image/v2/C4D03AQFAwewKE2vKBQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1663744209341?e=1772668800&v=beta&t=CLFda0Eg08Nvj4gMRDZA9MjDxujdWGKmFgP78DOuC7M',
    bio: 'Chartered Accountant with 10+ years of experience in direct and international taxation, advising companies and startups on tax compliance and structuring. A partner at Pramodkumar Dad & Associates and co-founder of FinFirst Advisors, he also supports startups with investor connections, strategy, and growth advisory, with a strong interest in technology and innovation.',
  },
  {
    name: 'Pallavi Daga',
    role: 'Venture Partner',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHWTC_1eURELw/profile-displayphoto-scale_200_200/B4DZh_f2ExHsAY-/0/1754485719843?e=1772668800&v=beta&t=F8DUzfWKu3ZT0vyjez5lO4eWJBon_i7AcuTdpioQOpY',
    bio: 'Chartered Accountant specializing in direct and international taxation, with eight years of experience at KPMG advising clients on complex tax matters. As co-founder of FinFirst Advisors, she supports startups with fundraising, partnerships, and compliance advisory. She is passionate about entrepreneurship, financial literacy, and social impact, especially empowering underprivileged women.',
  }
];

export function Team({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % team.length);
  const prev = () => setIndex((prev) => (prev - 1 + team.length) % team.length);

  useEffect(() => {
    const timer = setInterval(next, 7500); // Reduced from 5000 to 3500
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="team" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Team</h2>
            <p className="text-gray-600 max-w-2xl">Operators and entrepreneurs who have built world-class companies.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={prev} className="p-3 rounded-full border border-gray-100 hover:bg-gray-50 transition-all shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-gray-100 hover:bg-gray-50 transition-all shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="absolute inset-0 flex flex-col md:flex-row items-center gap-12"
            >
              <div 
                className="w-full md:w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer group relative shadow-2xl"
                onClick={() => onNavigate?.('about')}
              >
                <img
                  src={team[index].image}
                  alt={team[index].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                  <div className="flex space-x-4">
                    <Linkedin className="w-6 h-6 text-white" />
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">{team[index].role}</span>
                <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">{team[index].name}</h3>
                <p className="text-xl text-gray-600 leading-relaxed mb-10">{team[index].bio}</p>
                <button 
                  onClick={() => onNavigate?.('about')}
                  className="inline-flex items-center text-lg font-bold text-gray-900 hover:translate-x-2 transition-transform"
                >
                  Meet the full team →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

