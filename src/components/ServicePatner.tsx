import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Globe, MapPin } from 'lucide-react';

const servicePartnerCompanies = [
    {
      name: "Collaterals",
      sector: "Business Documentation & Pitch Materials",
      description: "Creation of pitch decks, investor presentations, marketing collaterals, and brand communication assets.",
      logo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "Financials",
      sector: "Financial Modeling & Strategy",
      description: "Financial projections, business planning, and strategic financial advisory led by Colonel Anshul.",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "Valuation Report",
      sector: "Startup & Business Valuation",
      description: "Independent valuation reports by Aashish (B Solutions) with Mumbai-based financial advisory support.",
      logo: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f?q=80&w=100",
      location: "Mumbai, India",
      website: "#"
    },
    {
      name: "Legal",
      sector: "Corporate & Startup Legal Services",
      description: "Legal structuring, contracts, compliance, and startup advisory services by Lexstart.",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "Company Secretary",
      sector: "Corporate Secretarial & ROC Compliance",
      description: "Company incorporation, filings, governance, and compliance handled by Acquisory and Rutu.",
      logo: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "Due Diligence",
      sector: "Investment & Legal Due Diligence",
      description: "Comprehensive financial and legal due diligence services by Legaverse led by Abhishek.",
      logo: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "Virtual CFO Services",
      sector: "Outsourced CFO & Finance Operations",
      description: "Virtual CFO, budgeting, cash flow management, and financial oversight by Aashish and team.",
      logo: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "Marketing Services",
      sector: "Branding, Growth & Digital Marketing",
      description: "Full-stack marketing support across agencies including VML, Hotstuff, Purple Media, Monks, and Thought Over Design.",
      logo: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "Financial & Compliance Services",
      sector: "Audit, Tax & Regulatory Compliance",
      description: "Statutory audits, tax advisory, and compliance services via PKD & Associates, CA Groups, and KPMG.",
      logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "Treasury Services",
      sector: "Debt Structuring & Cash Management",
      description: "Treasury operations, fundraising debt advisory, and cash flow optimization by Ardeko, Sonal, and Debtworks.",
      logo: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "Mergers & Acquisitions",
      sector: "Corporate Transactions & Strategic Exits",
      description: "Advisory support for mergers, acquisitions, and strategic partnerships.",
      logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "NCLT Companies",
      sector: "Insolvency & Resolution Advisory",
      description: "NCLT processes and distressed asset advisory led by Amit Thakkar.",
      logo: "https://images.unsplash.com/photo-1581091870622-1e7e6f3b87c1?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "Pre IPO & Secondaries",
      sector: "Late Stage Fundraising & Liquidity",
      description: "Structuring pre-IPO rounds, secondary sales, and growth-stage funding strategies.",
      logo: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=100",
      location: "India",
      website: "#"
    },
    {
      name: "IPO Advisory",
      sector: "Public Listing & Capital Markets",
      description: "End-to-end IPO advisory services led by Naman and Raju.",
      logo: "https://images.unsplash.com/photo-1554224154-5c3f26dedd3a?q=80&w=100",
      location: "India",
      website: "#"
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
            <span>Service Patners</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-black tracking-tight text-gray-900 mb-8 leading-tight">
          Collaborating <br/> <span className="text-blue-600"> with industry leads</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            We partner with visionary founders across high-growth sectors, providing strategic capital and operational expertise to help them scale into industry leaders.
          </p>
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
