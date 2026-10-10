import React, { useState, useMemo } from 'react';
import {
  Search,
  Layers,
  Smartphone,
  Gamepad2,
  ArrowUpRight,
  Globe,
  Terminal,
} from 'lucide-react';
import { PORTFOLIO_CONFIG, ProjectItem } from '../data/portfolioData';
import { ProjectCardMockup } from './ProjectCardMockup';

interface ProjectsShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'desktop' | 'mobile' | 'game'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_CONFIG.projects.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 border-b border-[#0D416D]/60 bg-[#061320]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold text-[#E5A00D] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Projects</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Web, Desktop, Mobile, and Games
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-xl">
              GIS software, remote sensing tools, field applications, and a mobile game.
            </p>
          </div>

          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or keyword..."
              className="w-full bg-[#081a2b] border border-[#0D416D] rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#E5A00D] transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#091b2c] rounded-xl border border-[#0D416D] mb-10 w-fit">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeCategory === 'all'
                ? 'bg-[#E5A00D] text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            All Works ({PORTFOLIO_CONFIG.projects.length})
          </button>
          <button
            onClick={() => setActiveCategory('web')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeCategory === 'web'
                ? 'bg-[#E5A00D] text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Web ({PORTFOLIO_CONFIG.projects.filter((p) => p.category === 'web').length})</span>
          </button>
          <button
            onClick={() => setActiveCategory('desktop')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeCategory === 'desktop'
                ? 'bg-[#E5A00D] text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Desktop ({PORTFOLIO_CONFIG.projects.filter((p) => p.category === 'desktop').length})</span>
          </button>
          <button
            onClick={() => setActiveCategory('mobile')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeCategory === 'mobile'
                ? 'bg-[#E5A00D] text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile ({PORTFOLIO_CONFIG.projects.filter((p) => p.category === 'mobile').length})</span>
          </button>
          <button
            onClick={() => setActiveCategory('game')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeCategory === 'game'
                ? 'bg-[#E5A00D] text-slate-950 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>Games ({PORTFOLIO_CONFIG.projects.filter((p) => p.category === 'game').length})</span>
          </button>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center bg-[#091b2c]/50 rounded-2xl border border-[#0D416D]">
            <p className="text-sm text-slate-400">No projects found matching your search query.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#E5A00D] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#091b2c] border border-[#0D416D] rounded-2xl overflow-hidden hover:border-[#E5A00D]/70 transition-all duration-200 flex flex-col justify-between shadow-xl"
              >
                <div>

                  <div className="p-3 bg-[#05111c] border-b border-[#0D416D]">
                    <ProjectCardMockup type={project.mockupType} title={project.title} />
                  </div>

                  <div className="p-6">

                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-2.5">
                      <span className="text-[#E5A00D] font-semibold">{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{project.platform}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#E5A00D] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#0D416D]/60 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">{project.keySpecs[0].label}:</span>
                      <span className="text-[#E5A00D] font-bold">
                        {project.keySpecs[0].value}
                      </span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#0D416D]/40">
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400">
                        {project.tags.slice(0, 4).map((tag, tIdx) => (
                          <React.Fragment key={tag}>
                            <span className="text-slate-200">{tag}</span>
                            {tIdx < Math.min(project.tags.length, 4) - 1 && (
                              <span className="text-slate-600" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#05111c] border-t border-[#0D416D]">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-[#E5A00D] hover:text-[#f5af19] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
