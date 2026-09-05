import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

import { networkPartners } from "../data/homeContent";

export function NetworkSection({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  return (
    <section id="network" className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Our Network
            </h2>
            <p className="text-gray-600">
              Strategic partners and family offices we work closely with.
            </p>
          </div>

          {onNavigate && (
            <button
              type="button"
              onClick={() => onNavigate("portfolio")}
              className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors shrink-0"
            >
              View Portfolio
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-gray-100 bg-white p-8 lg:p-12 shadow-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
            {networkPartners.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`flex items-center justify-center p-4 min-h-[80px] rounded-2xl hover:bg-gray-50 transition-colors ${company.cellClassName ?? ""}`}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`max-h-12 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 ${company.logoClassName ?? ""}`}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
