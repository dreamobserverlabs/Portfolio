import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Cpu,
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

        <div className="flex items-center justify-between px-6 py-4 border-b border-[#0D416D] bg-[#05111c]">
          <div className="flex items-center gap-3 text-xs text-slate-300 font-mono">
            <span className="text-[#E5A00D] font-bold">{project.categoryLabel}</span>
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

        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#0D416D] shadow-inner">
            <ProjectCardMockup type={project.mockupType} title={project.title} />
          </div>

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
                How it works
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.implementation}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A00D]" />
                Capabilities
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
                Structure
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

          <div className="pt-2 border-t border-[#0D416D]/60">
            <span className="text-xs font-mono text-slate-400 uppercase block mb-2">Stack</span>
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

        <div className="px-6 py-4 bg-[#05111c] border-t border-[#0D416D]">
          <div className="text-xs text-slate-400 font-mono">
            Platform: <span className="text-white font-medium">{project.platform}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
