import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Users, BarChart, History, TrendingUp, Handshake, Shield } from 'lucide-react';

export function AboutPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <button
          onClick={onBack}
          className="mb-12 text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center transition-colors group"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
            <History className="w-3 h-1" />
            <span>Since 1980s</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8">
            FinFirst Advisors  <br /><span className="text-blue-600">Capital. Strategy. Growth </span>
          </h1>
          <div className="prose prose-xl text-gray-600 mb-16 max-w-none leading-relaxed space-y-6">
            <p>
              FinFirst Advisors is a capital advisory and investment banking firm focused on helping ambitious businesses raise and deploy capital with strategic clarity
            </p>
            <p className="font-medium text-gray-900">
              Backed by 40+ years of combined experience in taxation, assurance, audit, and regulatory advisory, FinFirst Advisors brings deep financial expertise across industries and growth stages and operate at the intersection of capital structuring and long-term business building.
            </p>
            <p>
              As the investment banking and business growth arm of our parent entity, we leverage strong network capital and strategic insight to help businesses raise and deploy capital effectively.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
              <History className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">40+ Years Legacy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Deep expertise in tax, audit, and assurance advising clients across every major industry stage.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Advisory</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leveraging network capital to provide strategic guidance for startups and established enterprises.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Capital</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Connecting founders with equity and debt funding via a platform that manages pre/post fundraise needs.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Institutional Trust</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A legacy of integrity and responsibility that forms the foundation of every partnership we build.
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32" />

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 relative z-10">Our values are embedded in our name “F.I.R.S.T”</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16 relative z-10">
            Our values define how we advise, execute, and build long-term partnerships.
          </p>

          <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-6 relative z-10 divide-x divide-gray-800">
            <div className="space-y-3 py-4 md:py-0 md:px-4">
              <h4 className="text-3xl font-bold text-blue-400">F. Fiduciary</h4>
              <p className="text-gray-400 text-sm leading-snug">
                Aligned & accountable. Acting in your best interests natively.
              </p>
            </div>
            <div className="space-y-3 py-4 md:py-0 md:px-4 mb-6">
              <h4 className="text-3xl font-bold text-blue-400">I. Integrity</h4>
              <p className="text-gray-400 text-sm leading-snug">
                Transparent & uncompromising. Highest ethical standards.
              </p>
            </div>
            <div className="space-y-3 py-4 md:py-0 md:px-4">
              <h4 className="text-3xl font-bold text-blue-400">R. Results</h4>
              <p className="text-gray-400 text-sm leading-snug">
                Focused & outcome-driven. Measured by tangible value.
              </p>
            </div>
            <div className="space-y-3 py-4 md:py-0 md:px-4">
              <h4 className="text-3xl font-bold text-blue-400">S. Strategic</h4>
              <p className="text-gray-400 text-sm leading-snug">
                Beyond transactions. We build long-term partnerships.
              </p>
            </div>
            <div className="space-y-3 py-4 md:py-0 md:px-4">
              <h4 className="text-3xl font-bold text-blue-400">T. Trust</h4>
              <p className="text-gray-400 text-sm leading-snug">
                Built through discretion. Strengthened through delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Services We Offer
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At FinFirst Advisors, we provide comprehensive capital advisory solutions tailored to a company's growth stage, capital structure, and long-term strategic objectives.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32" />

              <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100 flex items-center relative z-10">Fundraising Services</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">

                {/* Equity Capital */}
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <BarChart className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">
                      Equity Capital
                    </h4>

                    <p className="text-sm text-gray-600 mb-6 font-medium">
                      Access to a diverse and strategic investor base:
                    </p>

                    <ul className="space-y-3 text-sm text-gray-600 list-disc pl-5 marker:text-blue-500">
                      <li>Tier 1 and 2 Micro VC funds</li>
                      <li>Mid-market Private Equity Funds</li>
                      <li>Institutional investors</li>
                      <li>Corporate Venture Capital Arms</li>
                      <li>Family Offices</li>
                      <li>U-HNI & HNI Investors</li>
                    </ul>
                  </div>
                </div>


                {/* Debt Financing */}
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">
                      Debt Financing
                    </h4>

                    <p className="text-sm text-gray-600 mb-6 font-medium">
                      Access to diversified debt capital solutions. Our lender network includes:
                    </p>

                    <ul className="space-y-3 text-sm text-gray-600 list-disc pl-5 marker:text-blue-500">
                      <li>NBFCs & Structured Debt Providers</li>
                      <li>Venture Debt Funds</li>
                      <li>Private credit funds</li>
                    </ul>
                  </div>
                </div>


                {/* Structured & Hybrid */}
                <div className="space-y-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Lightbulb className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-6">
                      Structured & Hybrid
                    </h4>

                    <p className="text-sm text-gray-600 mb-6 font-medium">
                      Bespoke capital structures combining equity and debt elements:
                    </p>

                    <ul className="space-y-3 text-sm text-gray-600 list-disc pl-5 marker:text-blue-500">
                      <li>Bridge Financing</li>
                      <li>Convertible Instruments (CCDs / CCPS / Convertible Notes)</li>
                      <li>Structured Growth Capital</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
