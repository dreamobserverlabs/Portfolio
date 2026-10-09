import React, { useEffect } from 'react';
import { 
  X, 
  Github, 
  CheckCircle2, 
  Cpu, 
  Calendar,
  Layers
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { ProjectCardMockup } from './ProjectCardMockup';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-3xl bg-[#081a2b] border border-[#0D416D] rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#0D416D] bg-[#05111c]">
          <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
            <span className="text-[#E5A00D] font-bold">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.platform}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#0D416D]/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Title & Subtitle */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* High Fidelity Visual Mockup */}
          <div className="overflow-hidden rounded-xl border border-[#0D416D] shadow-inner">
            <ProjectCardMockup type={project.mockupType} title={project.title} />
          </div>

          {/* Realistic Technical Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#05111c] rounded-xl border border-[#0D416D]">
            {project.keySpecs.map((spec, i) => (
              <div key={i} className="text-center">
                <div className="text-xs text-slate-400">{spec.label}</div>
                <div className="text-sm font-mono font-bold text-[#E5A00D] mt-0.5">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>

          {/* Practical Problem & Implementation Description */}
          <div className="space-y-4">
            <div className="p-4 bg-[#05111c]/60 rounded-xl border border-[#0D416D]/60">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                Use Case & Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 bg-[#05111c]/60 rounded-xl border border-[#0D416D]/60">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#E5A00D] mb-1.5 font-semibold">
                Technical Implementation
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.implementation}
              </p>
            </div>
          </div>

          {/* Features and Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A00D]" />
                Key Capabilities
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-[#E5A00D] mt-0.5">▪</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                Architecture Notes
              </h4>
              <ul className="space-y-2">
                {project.architecture.map((arch, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">▪</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Unboxed Tech Stack metadata */}
          <div className="pt-2 border-t border-[#0D416D]/60">
            <span className="text-xs font-mono text-slate-400 uppercase block mb-2">Technologies Used</span>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
              {project.tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  <span className="font-medium text-slate-200">{tag}</span>
                  {i < project.tags.length - 1 && <span className="text-slate-600" aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#05111c] border-t border-[#0D416D] flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-400 font-mono">
            Platform: <span className="text-white font-medium">{project.platform}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-[#0D416D] hover:bg-[#145388] rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
