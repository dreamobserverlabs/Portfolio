import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { DreamObserverLogo } from './DreamObserverLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050e18] border-t border-[#0D416D]/80 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#0D416D]/50">
          <div className="flex items-center gap-3">
            <DreamObserverLogo className="w-10 h-10" />
            <div>
              <a href="#" className="text-base font-bold text-white tracking-tight hover:text-[#E5A00D] transition-colors">
                {PORTFOLIO_CONFIG.brand.name}
              </a>
              <p className="text-xs text-slate-400 mt-0.5">
                {PORTFOLIO_CONFIG.brand.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300">
            <a href="#projects" className="hover:text-[#E5A00D] transition-colors">Projects</a>
            <a href="#tech-stack" className="hover:text-[#E5A00D] transition-colors">Technologies</a>
            <a href="#contact" className="hover:text-[#E5A00D] transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#091b2c] hover:bg-[#0D416D] text-slate-300 hover:text-white transition-colors border border-[#0D416D]"
            title="Scroll to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_CONFIG.brand.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#E5A00D]">Cloudflare Pages Ready</span>
            <span aria-hidden="true">·</span>
            <span>Static React SPA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
