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
            <History className="w-3 h-3" />
            <span>Since 1980s</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-8">
            Decades of Expertise, <br/><span className="text-blue-600">Built for Growth.</span>
          </h1>
          <div className="prose prose-xl text-gray-600 mb-16 max-w-none leading-relaxed space-y-6">
            <p>
              With over 40 years of experience in advising clients on tax matters, assurance, audit, and representation, our team has gained industry-wide and stage-wide expertise. We are more than just financial advisors; we are long-term partners who have witnessed the transformation of global industries.
            </p>
            <p className="font-medium text-gray-900">
              Under the same umbrella entity, FinFirst Advisors is a specialized wing leveraging network capital and expertise in finance and consulting to enter Investment Banking and Business Growth Advisory.
            </p>
            <p>
              We provide access to strategic private capital, offering platforms to raise funds via equity dilution or debt. Through FinFirst, we support pre and post fundraise services, ensuring founders have the bedrock they need to scale with confidence.
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
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 relative z-10">Our Values: The 3 Pillars</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16 relative z-10">
            Our conduct is governed by three fundamental principles that ensure the long-term success of our founders and investors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-blue-400">TRUST</h4>
              <p className="text-gray-300">Building trust in our founders, investors and employees.</p>
            </div>
            <div className="space-y-4 border-y md:border-y-0 md:border-x border-gray-800 py-8 md:py-0">
              <h4 className="text-2xl font-bold text-blue-400">RESPONSIBILITY</h4>
              <p className="text-gray-300">Ownership, accountability and commitment to our actions and decisions.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-blue-400">INTEGRITY</h4>
              <p className="text-gray-300">Being fair, honest, transparent, and ethical in conduct.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
