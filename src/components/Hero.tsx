import React from 'react';
import { ArrowDown, Mail, Layers } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { DreamObserverLogo } from './DreamObserverLogo';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#0D416D]/60 bg-[#061320] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#0D416D]/25 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[250px] bg-[#E5A00D]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Brand Logo */}
        <div className="flex justify-center mb-6">
          <div className="p-1 rounded-full bg-[#081a2b] border border-[#0D416D] shadow-2xl shadow-[#0D416D]/40 hover:scale-105 transition-transform duration-300">
            <DreamObserverLogo className="w-20 h-20 sm:w-24 sm:h-24" />
          </div>
        </div>

        {/* Studio Name & Tagline */}
        <div className="text-xs font-mono font-semibold text-[#E5A00D] uppercase tracking-widest mb-3">
          {PORTFOLIO_CONFIG.brand.tagline}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto text-balance">
          {PORTFOLIO_CONFIG.brand.name}
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {PORTFOLIO_CONFIG.brand.summary}
        </p>

        {/* Direct Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E5A00D] hover:bg-[#f5af19] text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-[#E5A00D]/20"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0D416D]/80 hover:bg-[#0D416D] text-white font-semibold text-sm border border-[#145388] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#E5A00D]" />
            <span>Contact Studio</span>
          </button>
        </div>

        {/* Clean Unboxed Tech Stack Row */}
        <div className="mt-12 pt-8 border-t border-[#0D416D]/40">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
            Core Engineering Stack
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300 font-medium">
            {PORTFOLIO_CONFIG.brand.techStackSummary.map((tech, i) => (
              <React.Fragment key={tech}>
                <span className="text-slate-200">{tech}</span>
                {i < PORTFOLIO_CONFIG.brand.techStackSummary.length - 1 && (
                  <span className="text-[#E5A00D]" aria-hidden="true">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
