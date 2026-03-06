import React from 'react';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';

const servicePartnerCompanies = [
  {
    sector: "Tax Advisory",
    name: "Pramodkumar Dad & Associates",
    description: "Tax advisory and structuring services for corporates, startups, and growth-stage companies."
  },
  {
    sector: "Statutory Audit",
    name: "KPMG",
    description: "Independent statutory audit and assurance services for financial transparency and compliance."
  },
  {
    sector: "Restructuring",
    name: "KPMG, BDO",
    description: "Corporate restructuring advisory including financial restructuring and turnaround strategies."
  },
  {
    sector: "Legal Advisors",
    name: "Cyril Amarchand Mangaldas (CAM), Lexstart",
    description: "Corporate legal structuring, contracts, regulatory advisory, and startup legal services."
  },
  {
    sector: "Cloud Services",
    name: "Technology Infrastructure Partners",
    description: "Cloud infrastructure and scalable technology solutions supporting digital operations."
  },
  {
    sector: "Virtual CFO Services",
    name: "Pramodkumar Dad & Co., Bsolutions",
    description: "Strategic financial oversight, budgeting, financial modelling, and outsourced CFO support."
  },
  {
    sector: "Valuation Services",
    name: "Independent Valuation Partners",
    description: "Startup and corporate valuation services for fundraising, M&A, and regulatory compliance."
  },
  {
    sector: "Secretarial Services",
    name: "Acquisory",
    description: "Corporate secretarial services including ROC filings, compliance, governance, and incorporation."
  },
  {
    sector: "Due Diligence Providers",
    name: "Legaverse",
    description: "Comprehensive financial and legal due diligence services for investments and transactions."
  },
  {
    sector: "Branding & Marketing",
    name: "Butter Toast, VML",
    description: "Brand strategy, marketing communications, creative design, and digital growth advisory."
  },
  {
    sector: "IPO Partners",
    name: "Beeline, Kuvarji",
    description: "Capital markets advisory and IPO execution support for companies preparing for public listing."
  },
  {
    sector: "Debt Financing",
    name: "Tipsons",
    description: "Debt structuring, capital advisory, and financing solutions for growing companies."
  },
  {
    sector: "Family Office Structuring & Advisory",
    name: "Cervin Family Office",
    description: "Family office structuring, wealth advisory, and strategic investment planning."
  },
  {
    sector: "Payment Gateway",
    name: "Razorpay, CC Avenue",
    description: "Digital payment infrastructure enabling secure online transactions and payment processing."
  },
  {
    sector: "NCLT Expert",
    name: "Insolvency & Resolution Advisors",
    description: "Specialized advisory for NCLT proceedings, insolvency matters, and distressed asset resolution."
  }
];

export function ServicePartnerPage({ onBack, onContact }: { onBack: () => void; onContact: () => void }) {
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
            <span>Service Partners</span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-gray-900 mb-8 leading-tight">
            Collaborating <br />
            <span className="text-blue-600">with industry leaders</span>
          </h1>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {servicePartnerCompanies.map((company, index) => (

            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-10 rounded-[3rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all group flex flex-col h-full"
            >

              <div className="flex-grow">

                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-2 block">
                  {company.sector}
                </span>

                <h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors mb-4">
                  {company.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {company.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>


        <div className="mt-32 p-12 lg:p-20 bg-gray-900 rounded-[4rem] text-center relative overflow-hidden">

          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 relative z-10">
            Have a Disruptive Idea?
          </h2>

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