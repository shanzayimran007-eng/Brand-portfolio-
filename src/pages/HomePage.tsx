import React from 'react';
import { ArrowRight, Sparkles, Layout, Monitor, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (projectId: string) => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenLightbox,
}) => {
  return (
    <div className="space-y-20 lg:space-y-28 pb-16">
      {/* Hero Section — Split Screen */}
      <section className="pt-6 sm:pt-10 lg:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typography & Intent */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Small uppercase label */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#803D4B] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#803D4B]" />
                <span>AI Website Creator & Mockup Designer</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#111827] leading-[1.12] tracking-tight text-balance font-normal">
                Turning Ideas Into Beautiful Digital Experiences.
              </h1>

              {/* Introduction Text */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-normal">
                Hi, I’m Maham Imran. I create modern websites and professional website mockups that help businesses present their ideas with confidence, clarity, and style.
              </p>

              {/* Prominent Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#803D4B] hover:bg-[#6b313d] text-white text-sm font-semibold tracking-wide uppercase shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-[#111827] hover:border-[#803D4B] text-[#111827] hover:text-[#803D4B] hover:bg-black/5 text-sm font-semibold tracking-wide uppercase transition-all duration-200 cursor-pointer"
                >
                  <span>Let’s Work Together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Small supporting line */}
              <div className="pt-2 text-xs sm:text-sm text-slate-500 font-medium">
                Creative Design · AI-Assisted Development · Responsive Experiences
              </div>
            </div>

            {/* Right Column: Exact Uploaded Personal Photograph */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative group max-w-md w-full">
                {/* Decorative subtle border frame */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-[#C6A878]/30 via-transparent to-[#803D4B]/20 blur-sm group-hover:blur-md transition-all duration-300"
                />

                <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-[#E7DFD5]">
                  {/* Exact Portrait Photo */}
                  <img
                    src="/assets/aistudio/IMG_20261022_145347_631_c48d5587.png"
                    alt="Maham Imran — AI Website Creator and Mockup Designer"
                    className="w-full h-auto object-cover max-h-[540px] cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
                    onClick={() =>
                      onOpenLightbox(
                        '/assets/aistudio/IMG_20261022_145347_631_c48d5587.png',
                        'Maham Imran — Personal Portrait'
                      )
                    }
                  />

                  {/* Editorial Photo Caption */}
                  <div className="p-4 bg-white/95 border-t border-[#EAE3D9] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-serif font-medium text-[#111827]">
                        Maham Imran
                      </div>
                      <div className="text-xs text-[#803D4B] font-medium">
                        AI Website Creator & Designer
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        onOpenLightbox(
                          '/assets/aistudio/IMG_20261022_145347_631_c48d5587.png',
                          'Maham Imran — Personal Portrait'
                        )
                      }
                      className="text-xs text-slate-500 hover:text-[#803D4B] transition-colors cursor-pointer"
                    >
                      View Portrait
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Strip */}
      <section className="border-y border-[#EAE3D9] bg-white/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/90 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#803D4B]/10 flex items-center justify-center text-[#803D4B] shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#111827]">
                  AI-Assisted Websites
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Rapid, intelligent prototyping powered by Google AI Studio.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/90 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#C6A878]/20 flex items-center justify-center text-[#8C6D3B] shrink-0">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#111827]">
                  Business Website Design
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  High-trust corporate, boutique & service layouts that convert.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/90 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#111827]/10 flex items-center justify-center text-[#111827] shrink-0">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#111827]">
                  Website Mockups
                </h3>
                <p className="text-xs text-slate-600 mt-0.5">
                  Visual concepts & responsive previews crafted for entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Introduction to My Work */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-[#E7DFD5] p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#803D4B] font-semibold">
              Selected Website Concepts
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111827] tracking-tight">
              Crafted with Purpose, Deployed with Speed.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every website concept is designed to meet distinct industry standards—from warm aesthetic beauty salons to bold international business finance platforms and high-energy American fitness brands. Take a look at the published live experiences.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#803D4B] hover:text-[#632a35] group cursor-pointer"
              >
                <span>View all selected projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* 3 Featured Projects Preview Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS_DATA.map((proj) => (
              <div
                key={proj.id}
                className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#EAE3D9] bg-[#F8F6F2] hover:shadow-xl hover:border-[#803D4B]/30 transition-all duration-300"
              >
                {/* Screenshot Frame with Hover Effect */}
                <div
                  className="relative aspect-[9/16] max-h-72 overflow-hidden bg-stone-900 cursor-pointer flex items-center justify-center p-2 group/shot"
                  onClick={() => onOpenLightbox(proj.image, proj.title)}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover/shot:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/shot:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                    <span className="px-3 py-1.5 text-xs font-semibold bg-black/80 text-white rounded-lg border border-white/20 backdrop-blur-sm">
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] uppercase tracking-wider text-[#803D4B] font-semibold">
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">
                        LIVE
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-medium text-[#111827] mt-1.5 group-hover:text-[#803D4B] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {proj.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-white text-slate-600 border border-[#EAE3D9] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons: Live Demo, GitHub, Details */}
                  <div className="pt-3 border-t border-[#EAE3D9] space-y-2">
                    <div className="flex items-center gap-2">
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#803D4B] hover:bg-[#6b313d] text-white text-[11px] font-semibold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-white border border-[#EAE3D9] hover:bg-[#F3EFE9] text-slate-800 text-[11px] font-semibold uppercase tracking-wider transition-colors"
                          title="View Source on GitHub"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          <span>Code</span>
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectProject(proj.id)}
                      className="w-full text-center text-[11px] font-medium text-slate-500 hover:text-[#803D4B] py-1 cursor-pointer transition-colors"
                    >
                      View Case Study & Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#111827] text-white p-8 sm:p-12 lg:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#C6A878] font-semibold">
              Ready to elevate your online presence?
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F8F6F2] tracking-tight">
              Let’s turn your vision into a live website.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Whether you need an elegant boutique layout, a corporate finance showcase, or an energetic fitness landing page, I’m ready to collaborate.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#803D4B] hover:bg-[#974556] text-white text-sm font-semibold tracking-wide uppercase shadow-lg transition-colors cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
