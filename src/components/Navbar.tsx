import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { DreamObserverLogo } from './DreamObserverLogo';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#061320]/95 backdrop-blur-md border-b border-[#0D416D]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">

        <a 
          href="#" 
          className="text-lg font-bold tracking-tight text-white hover:text-[#E5A00D] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
        >
          <DreamObserverLogo className="w-8 h-8" />
          <span>{PORTFOLIO_CONFIG.brand.name}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#projects" className="hover:text-[#E5A00D] transition-colors whitespace-nowrap shrink-0">
            Projects
          </a>
          <a href="#tech-stack" className="hover:text-[#E5A00D] transition-colors whitespace-nowrap shrink-0">
            Technologies
          </a>
          <a href="#contact" className="hover:text-[#E5A00D] transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-[#E5A00D] hover:bg-[#f5af19] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-md shadow-[#E5A00D]/20"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#0D416D]/50"
            aria-label="Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#061320] border-b border-[#0D416D] px-5 py-4 space-y-3">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-[#E5A00D] py-1"
          >
            Projects
          </a>
          <a
            href="#tech-stack"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-[#E5A00D] py-1"
          >
            Technologies
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-200 hover:text-[#E5A00D] py-1"
          >
            Contact
          </a>

          <div className="pt-2 border-t border-[#0D416D]/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-bold text-slate-950 bg-[#E5A00D] rounded-lg shadow-sm"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
