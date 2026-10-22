import React from 'react';
import { ArrowRight, Palette, MessageSquare, Smartphone, BookOpen, Target, Sparkles, Check } from 'lucide-react';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenLightbox: (imageUrl: string, title: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenLightbox }) => {
  const coreValues = [
    {
      title: 'Creativity',
      icon: Palette,
      description:
        'Crafting distinct color palettes, elegant typographic pairings, and bespoke visual identities that reflect the unique personality of each business concept.',
    },
    {
      title: 'Clear Communication',
      icon: MessageSquare,
      description:
        'Listening attentively to client requirements, providing transparent progress updates, and ensuring layout structures communicate business value with total clarity.',
    },
    {
      title: 'Responsive Design',
      icon: Smartphone,
      description:
        'Ensuring every interface displays naturally across mobile screens, tablets, and desktops with balanced proportions, clear touch points, and fluid typography.',
    },
    {
      title: 'Continuous Learning',
      icon: BookOpen,
      description:
        'Constantly exploring modern web design methodologies, mastering AI-assisted workflows in Google AI Studio, and sharpening layout execution with every project.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 pt-4 sm:pt-8">
      {/* Hero & Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              <div
                aria-hidden="true"
                className="absolute -inset-2 rounded-2xl bg-[#C6A878]/30 blur-sm group-hover:blur-md transition-all duration-300"
              />
              <div className="relative rounded-xl overflow-hidden bg-white shadow-lg border border-[#E7DFD5]">
                <img
                  src="/assets/aistudio/IMG_20261022_145347_631_c48d5587.png"
                  alt="Maham Imran — Portrait"
                  className="w-full h-auto object-cover max-h-[480px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]"
                  onClick={() =>
                    onOpenLightbox(
                      '/assets/aistudio/IMG_20261022_145347_631_c48d5587.png',
                      'Maham Imran — Personal Portrait'
                    )
                  }
                />
                <div className="p-3 bg-white text-center text-xs text-slate-500 border-t border-[#EAE3D9]">
                  Maham Imran · AI Website Creator & Designer
                </div>
              </div>
            </div>
          </div>

          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#803D4B] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#803D4B]" />
              <span>Background & Journey</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight font-normal">
              A Little About Me
            </h1>

            {/* Exact Professional Introduction */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                I’m Maham Imran, an aspiring digital creator who has completed Intermediate education and is developing skills in AI-assisted website creation and website mockup design.
              </p>
              <p>
                I use Google AI Studio to assist with building website experiences and Netlify to deploy and publish websites. I enjoy combining creative layouts, thoughtful visual design, and clear navigation to create websites for businesses and entrepreneurs.
              </p>
              <p>
                My goal is to help small businesses, startups, and service providers present their ideas through attractive, professional digital experiences while continuing to grow my skills with every project.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#803D4B] hover:bg-[#6b313d] text-white text-xs font-semibold tracking-wide uppercase transition-colors cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#EAE3D9] bg-white hover:bg-[#F1EFEA] text-slate-800 text-xs font-semibold tracking-wide uppercase transition-colors cursor-pointer"
              >
                <span>View Portfolio Projects</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Four Elegant Core Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs uppercase tracking-widest text-[#803D4B] font-semibold">
            Principles & Work Ethic
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#111827] tracking-tight">
            How I Approach Every Design
          </h2>
          <p className="text-sm text-slate-600">
            Four guiding values that shape my creative process and client collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F8F6F2] border border-[#EAE3D9] flex items-center justify-center text-[#803D4B] group-hover:bg-[#803D4B] group-hover:text-white transition-colors duration-200">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* "My Goal" Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-[#E7DFD5] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#803D4B]">
                <Target className="w-4 h-4 text-[#803D4B]" />
                <span>My Goal</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#111827] tracking-tight">
                Empowering Businesses Through High-Standard Digital Presentations
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Whether a client is launching a new venture, opening a physical location, or redesigning an outdated site, my goal is to deliver an authentic, polished web experience that commands respect. By combining modern AI assistance with thoughtful layout design and instant Netlify deployment, I strive to make high-end website design accessible, fast, and transparent.
              </p>
              <div className="pt-2">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#803D4B]" />
                    <span>Real published sites on Netlify</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#803D4B]" />
                    <span>Clean modern aesthetics & typography</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#803D4B]" />
                    <span>Honest communication & rapid turnaround</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#803D4B]" />
                    <span>Tailored to your specific target audience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#F8F6F2] p-6 rounded-xl border border-[#EAE3D9] text-center space-y-4">
              <Sparkles className="w-8 h-8 text-[#C6A878] mx-auto" />
              <div className="font-serif text-lg text-[#111827]">
                Ready to collaborate?
              </div>
              <p className="text-xs text-slate-600">
                Let’s discuss your upcoming website, landing page, or mockup design.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#803D4B] hover:bg-[#6b313d] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Contact Maham</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
