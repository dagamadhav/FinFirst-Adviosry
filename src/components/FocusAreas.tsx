import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Landmark, Layers } from "lucide-react";

import dagroup from "../assets/Network/dagroup.png";
import acme from "../assets/Network/acme1.png";
import deora from "../assets/Network/deora.png";
import desai from "../assets/Network/desai.avif";
import hof from "../assets/Network/hof.png";
import jadeblue from "../assets/Network/jadeblue.jpg";
import kifs from "../assets/Network/kifs.png";
import sunbuild from "../assets/Network/sunbuild.webp";
import tipson from "../assets/Network/tipson.png";
import prudent from "../assets/Network/prudent.svg";
import stellar from "../assets/Network/steallar.png";
import shankus from "../assets/Network/shankus.jpg";
import bleachchem from "../assets/Network/bleach.png";
import kdgroup from "../assets/Network/kdgroup.png";
import simba from "../assets/Network/simba.png";
import claris from "../assets/Network/claris.png";

const investmentAreas = [
  {
    title: "Equity Capital",
    description:
      "Access to institutional investors, venture funds, family offices, and strategic partners to support long-term growth.",
    icon: TrendingUp,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Debt Financing",
    description:
      "Structured access to venture debt funds, NBFCs, and private credit providers to optimise capital structure.",
    icon: Landmark,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    title: "Structured & Hybrid Instruments",
    description:
      "Flexible capital solutions such as bridge financing, convertible instruments, and structured growth capital.",
    icon: Layers,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const portfolioCompanies = [
  { name: "DA Group", logo: dagroup },
  { name: "KIFS", logo: kifs },
  { name: "Acmepharma", logo: acme },
  { name: "HOF", logo: hof },
  { name: "Deora Group", logo: deora },
  { name: "Desai Ventures", logo: desai },
  { name: "Jadeblue", logo: jadeblue },
  { name: "Sun Builcon", logo: sunbuild },
  { name: "Tipson Group", logo: tipson },
  { name: "Prudent Advisors", logo: prudent },
  { name: "Stellar Group", logo: stellar },
  { name: "Shankus Realties", logo: shankus },
  { name: "Bleachchem Group", logo: bleachchem },
  { name: "KD Group", logo: kdgroup },
  { name: "Simba Group", logo: simba },
  { name: "Claris Capital", logo: claris },
];

export function FocusAreas({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
}) {
  const loopList = [
    ...portfolioCompanies,
    ...portfolioCompanies,
    ...portfolioCompanies,
    ...portfolioCompanies,
  ];

  return (
    <section id="portfolio" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Capital Advisory
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            We enable access to equity capital, debt financing, and structured
            instruments. From transaction readiness to post-fundraise strategy,
            we help companies prepare for capital, align with the right
            partners, and execute successful fundraises that unlock sustainable
            growth.
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
              <div
                className={`w-16 h-16 rounded-3xl ${area.bg} ${area.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
              >
                <area.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {area.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Our Network
            </h2>
            <p className="text-gray-600">
              Strategic partners and family offices we work closely with.
            </p>
          </div>
        </div>
      </div>

      {/* SCROLLING NETWORK */}
      <div className="relative flex overflow-x-hidden py-4 border-y border-gray-100 bg-gray-50/30">
        <motion.div
          className="flex whitespace-nowrap gap-16 items-center"
          animate={{ x: [0, -1200] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
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