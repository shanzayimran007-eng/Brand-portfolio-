import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'services', label: 'Skills & Services' },
    { id: 'projects', label: 'My Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F6F2]/90 backdrop-blur-md border-b border-[#EAE3D9] transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single element wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left cursor-pointer transition-opacity"
            aria-label="Maham Imran Portfolio Home"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#111827] group-hover:text-[#803D4B] transition-colors whitespace-nowrap shrink-0">
              Maham Imran
            </span>
          </button>

          {/* Zone 2: 5 clean single-line nav links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-700"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 cursor-pointer transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#803D4B] font-semibold'
                      : 'text-slate-700 hover:text-[#111827]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#803D4B] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#803D4B] hover:bg-[#6b313d] text-white text-xs font-semibold tracking-wide uppercase shadow-sm hover:shadow transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-[#EAE3D9]/60 transition-colors focus:outline-none focus:ring-2 focus:ring-[#803D4B]"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EAE3D9] bg-[#F8F6F2] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#803D4B]/10 text-[#803D4B] font-semibold'
                      : 'text-slate-700 hover:bg-[#EAE3D9]/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs uppercase text-[#803D4B] font-bold">
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#803D4B] text-white text-sm font-semibold tracking-wide uppercase shadow-sm transition-all cursor-pointer"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
