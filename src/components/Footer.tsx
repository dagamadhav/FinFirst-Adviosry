import React from 'react';
import { Linkedin, Mail, Twitter, Github } from 'lucide-react';
import finFirstLogo from "../assets/finFirstLogo.png";

export function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const handleLinkClick = (e: React.MouseEvent, page: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img
              src={finFirstLogo}
              alt="FinFirst Advisors"
              className="h-10 mb-6"
            />
            <p className="text-gray-600 max-w-sm leading-relaxed mb-6">
              Empowering the next generation of founders with patient capital and operational support.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/finfirstadvisors/posts/?feedView=all" className="text-gray-400 hover:text-gray-900 transition-colors"><Linkedin /></a>
              <a href="mailto:[Admin@finfirstadvisors.com]" className="text-gray-400 hover:text-gray-900 transition-colors"><Mail /></a>

            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleLinkClick(e, 'portfolio')}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li><a href="#team" className="text-gray-600 hover:text-gray-900 transition-colors">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4">
              {/* <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact
                </a>
              </li> */}
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 FinFirst Advisors. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span>Made with precision for visionary founders.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}