import React, { useState } from 'react';
import { ExternalLink, Info, Check, Maximize2, Dumbbell, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';

interface ProjectsPageProps {
  onSelectProject: (projectId: string) => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onOpenLightbox,
}) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 pt-4 sm:pt-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#803D4B] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#803D4B]" />
          <span>Curated Portfolio & Recent Work</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#111827] tracking-tight font-normal">
          Selected Projects
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Explore my website concepts and recent live deployments, featuring clean UI, thoughtful layouts, and business-focused conversion architecture.
        </p>
      </section>

      {/* 3 Detailed Project Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {PROJECTS_DATA.map((project, index) => {
          const isVelora = project.id === 'velora';
          const isNexora = project.id === 'nexora';
          const isIronvault = project.id === 'ironvault';
          const hasImageError = imageErrors[project.id];

          return (
            <div
              key={project.id}
              className={`group/card rounded-3xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-2xl ${
                isVelora
                  ? 'bg-[#FBF9F5] border-[#EAE3D9] hover:border-[#803D4B]/40'
                  : isNexora
                  ? 'bg-[#0A1526] text-white border-[#1E2E48] hover:border-[#00D4FF]/40'
                  : 'bg-[#0D0E10] text-white border-[#272B33] hover:border-[#CCFF00]/50 hover:shadow-[#CCFF00]/10'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-12 items-center">
                {/* Left Side: Screenshot & Image Placeholder */}
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <div className="relative group/shot w-full max-w-xs sm:max-w-sm">
                    {/* Ambient Glow */}
                    <div
                      aria-hidden="true"
                      className={`absolute -inset-2 rounded-3xl blur-md opacity-40 group-hover/shot:opacity-85 transition-opacity duration-300 ${
                        isVelora
                          ? 'bg-[#C6A878]/30'
                          : isNexora
                          ? 'bg-[#00D4FF]/25'
                          : 'bg-[#CCFF00]/30'
                      }`}
                    />

                    {/* Screenshot Container with Clickable link to Live Demo */}
                    <div
                      className={`relative rounded-2xl overflow-hidden p-2.5 sm:p-3 transition-transform duration-300 group-hover/shot:scale-[1.02] shadow-lg ${
                        isVelora
                          ? 'bg-[#F2ECE1] border border-[#E0D7C9]'
                          : isNexora
                          ? 'bg-[#0E1E36] border border-[#1F3354]'
                          : 'bg-[#17191E] border border-[#2D313A] group-hover/card:border-[#CCFF00]/40'
                      }`}
                    >
                      <div className="relative aspect-[9/16] max-h-[520px] rounded-xl overflow-hidden flex items-center justify-center bg-black/50">
                        {/* Image Placeholder / Fallback Visual */}
                        {hasImageError ? (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-4 bg-gradient-to-b from-[#181B22] to-[#0D0E10]">
                            <div className="w-16 h-16 rounded-2xl bg-[#CCFF00]/15 border border-[#CCFF00]/30 flex items-center justify-center text-[#CCFF00]">
                              {isIronvault ? (
                                <Dumbbell className="w-8 h-8" />
                              ) : (
                                <Sparkles className="w-8 h-8" />
                              )}
                            </div>
                            <div className="space-y-1">
                              <span className="text-xs font-mono uppercase tracking-widest text-[#CCFF00]">
                                {project.title}
                              </span>
                              <p className="text-xs text-slate-400">
                                {project.tagline}
                              </p>
                            </div>
                            <div className="text-[11px] px-3 py-1 rounded-full bg-white/10 text-slate-300">
                              Live Staging Active
                            </div>
                          </div>
                        ) : (
                          <img
                            src={project.image}
                            alt={`${project.title} website screenshot`}
                            onError={() => handleImageError(project.id)}
                            className="w-full h-full object-contain cursor-pointer transition-transform duration-500 group-hover/shot:scale-105"
                            onClick={() => onOpenLightbox(project.image, project.title)}
                          />
                        )}

                        {/* Hover Overlay with dual actions */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/shot:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                          <button
                            type="button"
                            onClick={() => onOpenLightbox(project.image, project.title)}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-medium border border-white/20 backdrop-blur-sm transition-transform hover:scale-105 cursor-pointer"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>Enlarge Screenshot</span>
                          </button>

                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-transform hover:scale-105 ${
                              isIronvault
                                ? 'bg-[#CCFF00] text-black shadow-lg shadow-[#CCFF00]/20'
                                : isNexora
                                ? 'bg-[#00D4FF] text-[#0A1526]'
                                : 'bg-[#803D4B] text-white'
                            }`}
                          >
                            <span>Open Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      {/* Live URL Pill Bar */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2.5 px-3 py-1.5 rounded-lg flex items-center justify-between text-[11px] font-mono text-slate-400 hover:text-white bg-black/30 transition-colors group/link"
                      >
                        <span className="truncate">
                          {project.liveUrl.replace('https://', '')}
                        </span>
                        <span className="flex items-center gap-1 text-emerald-400 font-sans text-[10px] uppercase font-semibold">
                          <span>Live</span>
                          <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Side: Editorial Project Info & Actions */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    index % 2 === 1 ? 'lg:order-1' : ''
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`text-xs font-mono font-bold tracking-widest ${
                          isVelora
                            ? 'text-[#803D4B]'
                            : isNexora
                            ? 'text-[#38BDF8]'
                            : 'text-[#CCFF00]'
                        }`}
                      >
                        PROJECT {project.number}
                      </span>
                      <span
                        className={isVelora ? 'text-slate-400' : 'text-slate-600'}
                        aria-hidden="true"
                      >
                        ·
                      </span>
                      <span
                        className={`text-xs font-medium uppercase tracking-wider ${
                          isVelora ? 'text-slate-600' : 'text-slate-300'
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h2
                      className={`font-serif text-3xl sm:text-4xl tracking-tight ${
                        isVelora ? 'text-[#111827]' : 'text-white'
                      }`}
                    >
                      {project.title}
                    </h2>

                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        isVelora ? 'text-slate-700' : 'text-slate-300'
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies Tags */}
                  <div className="space-y-2">
                    <div
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        isVelora ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-md font-medium border ${
                            isVelora
                              ? 'bg-white border-[#EAE3D9] text-slate-800'
                              : isNexora
                              ? 'bg-[#132A4A] border-[#1F3354] text-[#38BDF8]'
                              : 'bg-[#1C2028] border-[#2D3340] text-[#CCFF00]'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Design Highlights List */}
                  <div className="space-y-3 pt-1">
                    <div
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        isVelora ? 'text-[#803D4B]' : 'text-slate-400'
                      }`}
                    >
                      Key Features & Architecture
                    </div>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                            isVelora ? 'text-slate-700' : 'text-slate-300'
                          }`}
                        >
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isVelora
                                ? 'text-[#803D4B]'
                                : isNexora
                                ? 'text-[#38BDF8]'
                                : 'text-[#CCFF00]'
                            }`}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requested Two Buttons: 1. Live Demo 2. GitHub (+ Project Details) */}
                  <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
                    {/* 1. Live Demo */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all duration-200 shadow-sm hover:scale-[1.02] ${
                        isIronvault
                          ? 'bg-[#CCFF00] hover:bg-[#b5e600] text-[#0D0E10] font-bold shadow-md shadow-[#CCFF00]/20'
                          : isNexora
                          ? 'bg-[#00D4FF] hover:bg-[#00b8e6] text-[#0A1526]'
                          : 'bg-[#803D4B] hover:bg-[#682e3a] text-white'
                      }`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* 2. GitHub */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold tracking-wide uppercase border transition-all duration-200 hover:scale-[1.02] ${
                          isIronvault
                            ? 'border-[#383F4D] bg-[#181B22] hover:bg-[#222630] text-white hover:border-[#CCFF00]/50'
                            : isNexora
                            ? 'border-[#1E2E48] bg-[#0E1A2F] hover:bg-[#15243F] text-white'
                            : 'border-[#EAE3D9] bg-white hover:bg-[#F3EFE9] text-[#111827]'
                        }`}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {/* Companion: Project Details */}
                    <button
                      onClick={() => onSelectProject(project.id)}
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold tracking-wide uppercase border transition-colors cursor-pointer ${
                        isVelora
                          ? 'border-[#EAE3D9] bg-white hover:bg-[#F3EFE9] text-slate-700'
                          : isNexora
                          ? 'border-[#1E2E48] bg-[#0E1A2F]/60 hover:bg-[#15243F] text-slate-300'
                          : 'border-[#272B33] bg-[#14161B]/60 hover:bg-[#1E2129] text-slate-300'
                      }`}
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Project Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Website Concept Integrity Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-[#E7DFD5] p-6 sm:p-8 text-center text-xs text-slate-500 max-w-3xl mx-auto space-y-2">
          <div className="font-semibold text-slate-700">
            About These Demonstrations
          </div>
          <p className="leading-relaxed">
            These websites represent authentic functional website concepts created with Google AI Studio and deployed on Netlify. Each design illustrates complete brand alignment, typography hierarchy, mobile responsiveness, and call-to-action layout engineering.
          </p>
        </div>
      </section>
    </div>
  );
};
