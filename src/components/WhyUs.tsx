import React from 'react';
import { Shield, CheckCircle, Award, History } from 'lucide-react';
import { motion } from 'motion/react';

const pillars = [
  {
    title: 'TRUST',
    description: 'Building trust in our founders, investors, and employees.',
    icon: Shield,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'RESPONSIBILITY',
    description: 'Having ownership, accountability, and commitment to our actions and decisions.',
    icon: CheckCircle,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'INTEGRITY',
    description: 'Being fair, honest, transparent, and ethical in conduct.',
    icon: Award,
    color: 'bg-amber-50 text-amber-600',
  },
];

export function WhyUs() {
  return (
    <section id="values" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              <History className="w-3 h-3" />
              <span>40+ Years of Legacy</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              An Industry Legacy, A New Era of Growth.
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With 40+ years advising clients on tax, assurance, and audit, our team brings industry-wide expertise. Under this umbrella, <span className="font-bold text-gray-900 underline decoration-blue-500">FinFirst Advisors</span> leverages network capital to drive Investment Banking and Business Growth Advisory.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We provide access to strategic private capital, enabling funds to be raised via equity or debt. We provide a platform for fundraising along with full support pre and post fundraise.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${pillar.color} transition-transform group-hover:scale-110`}>
                    <pillar.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
