import React from 'react';
import {
  Globe,
  Smartphone,
  Gamepad2,
  Code,
  Database,
  Terminal,
  Cloud,
  Boxes,
  Container,
  SquareTerminal,
  HardDrive,
} from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../data/portfolioData';

export const TechStackGrid: React.FC = () => {
  const getIcon = (name: string) => {
    if (name.includes('Native')) return <Smartphone className="w-5 h-5" />;
    if (name.includes('Next') || name.includes('React')) return <Globe className="w-5 h-5" />;
    if (name.includes('Godot')) return <Gamepad2 className="w-5 h-5" />;
    if (name.includes('Python')) return <Terminal className="w-5 h-5" />;
    if (name.includes('SQLite') || name.includes('MBTiles')) return <HardDrive className="w-5 h-5" />;
    if (name.includes('Mongo')) return <Boxes className="w-5 h-5" />;
    if (name.includes('PostgreSQL') || name.includes('PostGIS')) return <Database className="w-5 h-5" />;
    if (name.includes('AWS')) return <Cloud className="w-5 h-5" />;
    if (name.includes('Docker')) return <Container className="w-5 h-5" />;
    if (name.includes('Linux')) return <SquareTerminal className="w-5 h-5" />;
    return <Code className="w-5 h-5" />;
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
            Applications, the databases behind them, and the infrastructure they run on.
          </p>
        </div>

        <div className="space-y-12">
          {PORTFOLIO_CONFIG.stackGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-mono font-semibold text-[#E5A00D] uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="bg-[#091b2c] border border-[#0D416D] rounded-2xl p-6 shadow-xl hover:border-[#E5A00D]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#061726] border border-[#0D416D] flex items-center justify-center text-[#E5A00D]">
                        {getIcon(tech.name)}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white tracking-tight">{tech.name}</h4>
                        <p className="text-xs font-mono text-[#E5A00D]">{tech.category}</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
