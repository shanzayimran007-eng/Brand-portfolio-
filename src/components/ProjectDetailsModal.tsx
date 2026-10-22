import React, { useEffect } from 'react';
import { X, ExternalLink, Check, ArrowRight, Sparkles, Layers, Palette } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
  onNavigateToContact: (projectType: string) => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  isOpen,
  onClose,
  onOpenLightbox,
  onNavigateToContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} Details`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F8F6F2] text-[#292929] rounded-2xl shadow-2xl border border-[#E7DFD5] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7DFD5] bg-white/70 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-xs text-[#803D4B] font-medium">
            <span>PROJECT {project.number}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Project Details"
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-[#EAE3D9]/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title and Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#111827] tracking-tight">
              {project.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#803D4B] font-medium">
              {project.tagline}
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Screenshot Showcase Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Authentic Mobile Web Screenshot Preview</span>
              <button
                type="button"
                onClick={() => onOpenLightbox(project.image, project.title)}
                className="text-[#803D4B] hover:underline cursor-pointer"
              >
                Click to expand full size
              </button>
            </div>

            <div
              onClick={() => onOpenLightbox(project.image, project.title)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-slate-200/80 bg-stone-900 shadow-inner flex items-center justify-center p-4 max-h-[460px]"
            >
              <img
                src={project.image}
                alt={`${project.title} homepage screenshot`}
                className="max-h-[420px] w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-md bg-black/75 text-white text-xs font-medium backdrop-blur-sm">
                  Click to Enlarge
                </span>
              </div>
            </div>
          </div>

          {/* Highlights & Concept Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-5 rounded-xl border border-[#EAE3D9] space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
                <Sparkles className="w-4 h-4 text-[#C6A878]" />
                <h3>Design & Architectural Highlights</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#803D4B] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#EAE3D9] space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
                  <Palette className="w-4 h-4 text-[#803D4B]" />
                  <h3>Color Palette Scheme</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {project.palette.map((color, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-[#F8F6F2] border border-[#EAE3D9]"
                    >
                      <span
                        className="w-5 h-5 rounded-md border border-black/10 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-medium text-slate-800 truncate">
                          {color.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-500">
                          {color.hex}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-[#EAE3D9]">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#111827] mb-2">
                  <Layers className="w-4 h-4 text-slate-600" />
                  <h3>Tools & Platform</h3>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#F1EFEA] text-slate-700 border border-[#EAE3D9]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-white border-t border-[#E7DFD5]">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Deployed live on Netlify via Google AI Studio
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
            <button
              onClick={() => {
                onClose();
                onNavigateToContact(project.title);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-[#803D4B] text-[#803D4B] hover:bg-[#803D4B]/5 text-xs font-medium transition-colors cursor-pointer"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-medium shadow-xs transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#803D4B] hover:bg-[#6e3440] text-white text-xs font-medium shadow-sm transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="px-4 py-2.5 rounded-lg bg-slate-100 text-slate-400 text-xs font-medium">
                Live Preview Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
