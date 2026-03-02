import React from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

const stats = [
  { label: 'Family Offices', value: 50, suffix: '+' },
  { label: 'Angel Investors', value: 200, suffix: '+' },
  { label: 'Deals Screened/Year', value: 150, suffix: '+' },
  { label: 'Investments', value: 11, suffix: '' },
  { label: 'Follow-on Rounds', value: 4, suffix: '' },
  { label: 'Network Partners', value: 30, suffix: '+' },
  { label: 'Crores Invested', value: 20, suffix: '', prefix: 'Approx ' },
];

function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration });
      return controls.stop;
    }
  }, [isInView, value, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function Stats() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Key Milestones</h2>
          <p className="text-3xl lg:text-4xl font-bold text-gray-900">Proven Track Record of Strategic Growth</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-blue-600 mb-2 tabular-nums">
                {stat.prefix}<Counter value={stat.value} />{stat.suffix}
              </div>
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
