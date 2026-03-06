import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';
import neeravDad from "../assets/Team/neerav_dad.png";
import pallaviDaga from "../assets/Team/pallavi_daga.png";

const team = [
  {
    name: 'Neerav Dad',
    role: 'Co-Founder',
    image: neeravDad,
    linkedin: 'https://www.linkedin.com/in/neerav-dad-nd-b50833100/',
    bio: 'Chartered Accountant with 15+ years of experience in direct and international taxation, advising corporates and high-growth startups on tax structuring, cross-border transactions, and regulatory strategy. A Partner at Pramodkumar Dad & Associates and Co-founder of FinFirst Advisors, he works closely with founders on fundraising strategy, investor alignment, and transaction execution. He is particularly passionate about technology and innovation-led businesses and supporting ambitious founders in building enduring companies.',
  },
  {
    name: 'Pallavi Daga',
    role: 'Co-Founder',
    image: pallaviDaga,
    linkedin: 'https://www.linkedin.com/in/pallaviddaga/',
    bio: 'She is the Co-founder of FinFirst Advisors. A qualified Chartered Accountant with experience at KPMG, she brings expertise in financial diligence, transaction advisory, and governance-led growth. At FinFirst, she works closely with founders on capital readiness, financial positioning, deal structuring, and execution strategy, helping businesses align the right capital with long-term strategic objectives. She is particularly passionate about supporting growth-oriented and innovation-led companies.',
  }
];

export function Team() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % team.length);
  const prev = () => setIndex((prev) => (prev - 1 + team.length) % team.length);

  useEffect(() => {
    const timer = setInterval(next, 17500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="team" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Team</h2>
            <p className="text-gray-600 max-w-2xl">
              Operators and entrepreneurs who have built world-class companies.
            </p>
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

              {/* IMAGE */}
              <div className="w-full md:w-1/2 aspect-[4/5] rounded-[2.5rem] overflow-hidden group relative shadow-2xl">

                <img
                  src={team[index].image}
                  alt={team[index].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">

                  <div className="flex space-x-4">

                    <a
                      href={team[index].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-6 h-6 text-white" />
                    </a>

                  </div>

                </div>

              </div>


              {/* TEXT */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">

                <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
                  {team[index].role}
                </span>

                <h3 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {team[index].name}
                </h3>

                <p className="text-xl text-gray-600 leading-relaxed mb-10">
                  {team[index].bio}
                </p>

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}