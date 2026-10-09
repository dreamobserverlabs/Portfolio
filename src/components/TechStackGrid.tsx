import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Gamepad2, 
  Code,
  Database,
  Terminal,
  Cpu
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const TechStackGrid: React.FC = () => {
  const getIcon = (name: string) => {
    if (name.includes('Next') || name.includes('React')) return <Globe className="w-5 h-5" />;
    if (name.includes('Native')) return <Smartphone className="w-5 h-5" />;
    if (name.includes('Godot')) return <Gamepad2 className="w-5 h-5" />;
    if (name.includes('PostGIS') || name.includes('Spatial')) return <Database className="w-5 h-5" />;
    if (name.includes('Python')) return <Terminal className="w-5 h-5" />;
    return <Cpu className="w-5 h-5" />;
  };

  return (
    <section id="tech-stack" className="py-20 border-b border-[#0D416D]/60 bg-[#061320]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold text-[#E5A00D] uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5" />
            <span>Technologies & Libraries</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Core Engineering Stack
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Technologies employed across web GIS vector/raster processing, mobile offline mapping, and Godot simulations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_CONFIG.techStack.map((tech) => (
            <div 
              key={tech.name}
              className="bg-[#091b2c] border border-[#0D416D] rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:border-[#E5A00D]/50 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#061726] border border-[#0D416D] flex items-center justify-center text-[#E5A00D]">
                    {getIcon(tech.name)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">{tech.name}</h3>
                    <p className="text-xs font-mono text-[#E5A00D]">{tech.category}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
