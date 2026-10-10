import React from 'react';
import { ArrowDown, Eye, Mail, Map, MessageSquare, Satellite, ScanLine } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';
import { DreamObserverLogo } from './DreamObserverLogo';

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#0D416D]/60 bg-[#061320] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="relative flex justify-center mb-6">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="logo-glow h-72 w-72 rounded-full bg-[#0D416D]/55 blur-[80px]" />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="logo-glow logo-glow-warm h-40 w-40 rounded-full bg-[#E5A00D]/30 blur-[56px]" />
          </div>
          <div className="relative p-1 rounded-full bg-[#081a2b] border border-[#0D416D] shadow-2xl shadow-[#0D416D]/40 hover:scale-105 transition-transform duration-300">
            <DreamObserverLogo className="w-20 h-20 sm:w-24 sm:h-24" />
          </div>
        </div>

        <div className="text-xs font-mono font-semibold text-[#E5A00D] uppercase tracking-widest mb-3">
          {PORTFOLIO_CONFIG.brand.tagline}
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
          {PORTFOLIO_CONFIG.brand.name}
        </h1>

        <div className="mt-5 space-y-4">
          {PORTFOLIO_CONFIG.brand.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
            <span>Contact</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-[#0D416D]/40">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {PORTFOLIO_CONFIG.brand.focusAreas.map((area) => (
              <span
                key={area.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#0D416D] bg-[#081a2b] text-xs sm:text-sm text-slate-200"
              >
                <FocusIcon name={area.icon} />
                {area.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function FocusIcon({ name }: { name: string }) {
  const props = { className: 'w-3.5 h-3.5 text-[#E5A00D] shrink-0', 'aria-hidden': true as const };
  if (name === 'map') return <Map {...props} />;
  if (name === 'satellite') return <Satellite {...props} />;
  if (name === 'scan') return <ScanLine {...props} />;
  if (name === 'eye') return <Eye {...props} />;
  return <MessageSquare {...props} />;
}
