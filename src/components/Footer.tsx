import React from 'react';
import { Mail, MessageCircle, ArrowUpRight, ExternalLink } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full bg-[#111827] text-white border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Title (col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl font-medium tracking-tight text-[#F8F6F2]">
              Maham Imran
            </span>
            <p className="text-[#C6A878] text-sm font-medium tracking-wide">
              AI Website Creator & Website Mockup Designer
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Crafting purposeful digital experiences with thoughtful design and modern AI-assisted tools. Helping businesses and entrepreneurs present their ideas with clarity, style, and confidence.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              Tools: Google AI Studio · Netlify Deployment
            </div>
          </div>

          {/* Quick Page Links (col 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Skills & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  My Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect / Freelance channels (col 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Freelance & Inquiries
            </div>
            <p className="text-xs text-slate-400 leading-normal">
              Available for freelance website creation, landing page mockups, and responsive redesigns.
            </p>

            <div className="space-y-2">
              <a
                href="mailto:shanzayimran007@gmail.com"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#C6A878] group-hover:scale-110 transition-transform" />
                <span className="truncate">shanzayimran007@gmail.com</span>
              </a>

              <a
                href="https://wa.me/?text=Hello%20Maham,%20I%20am%20interested%20in%20your%20website%20design%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Consultation</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href="https://www.fiverr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-white transition-colors group"
              >
                <span className="w-4 h-4 flex items-center justify-center font-bold text-xs bg-emerald-500 text-black rounded-sm">
                  fi
                </span>
                <span>Fiverr Freelance Services</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Maham Imran. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Built with Google AI Studio</span>
            <span aria-hidden="true">·</span>
            <span>Deployed on Netlify</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
