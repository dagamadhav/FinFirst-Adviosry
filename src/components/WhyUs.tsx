import React from 'react';
import { Users, Link, CheckCircle, Coffee } from 'lucide-react';
import { motion } from 'motion/react';

const pillars = [
  // {
  //   title: 'Network Capital',
  //   description:
  //     'Backed by 40+ years of experience, we combine deep domain expertise with strong network capital — helping founders with mentorship and access to experts across industries.',
  //   icon: Users,
  //   color: 'bg-blue-50 text-blue-600',
  // },
  {
    title: 'Strategic Capital Matching',
    description:
      'We connect founders with transformational and operational capital by aligning the right strategic or financial partners to accelerate growth.',
    icon: Link,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'End-to-End Execution',
    description:
      'From preparation to closure, we work alongside management teams through the entire fundraising journey to ensure successful execution.',
    icon: CheckCircle,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Founder-First Approach',
    description:
      'We aim to be your trusted partner — continuing the journey beyond the transaction and helping you build your business over meaningful long-term relationships.',
    icon: Coffee,
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
              <span>Why FinFirst Advisors</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              A Strategic Partner for Founders
            </h2>


            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At FinFirst Advisors, we believe capital is not just a transaction — it is a strategic lever for growth.
              Our role extends beyond fundraising. We work closely with founders to align them with the right
              partners, provide strategic guidance, and support them throughout their growth journey.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We combine deep industry experience with powerful network capital to help founders access the right
              investors, execute successful transactions, and build sustainable long-term businesses.
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
                    <h3 className="text-xl font-black text-gray-900 mb-2 tracking-tight">
                      {pillar.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg font-medium text-gray-700">
            At FinFirst Advisors, capital is not treated as a transaction — it is structured as a
            strategic lever for sustainable growth where we join hands to
            <span className="text-blue-600 font-bold"> BUILD YOUR BUSINESS.</span>
          </p>
        </div>

      </div>
    </section>
  );
}