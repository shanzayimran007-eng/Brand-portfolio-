import React from 'react';
import {
  Sparkles,
  Briefcase,
  Layout,
  Layers,
  Monitor,
  Smartphone,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_DATA, TOOLS_DATA } from '../data/servicesData';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForInquiry,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#803D4B]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#803D4B]" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#803D4B]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#803D4B]" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-[#803D4B]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#803D4B]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#803D4B]" />;
    }
  };

  const handleServiceClick = (serviceTitle: string) => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(serviceTitle);
    }
    onNavigate('contact');
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 pt-4 sm:pt-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#803D4B] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#803D4B]" />
          <span>Services & Capabilities</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#111827] tracking-tight font-normal">
          What I Can Create
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Thoughtfully crafted digital layouts and interactive website mockups designed to give small businesses, service providers, and startups an impressive digital presence.
        </p>
      </section>

      {/* 6 Premium Service Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#E7DFD5] shadow-xs hover:shadow-lg hover:border-[#803D4B]/40 transition-all duration-300"
            >
              <div className="space-y-5">
                {/* Icon & Service Number */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F8F6F2] border border-[#EAE3D9] flex items-center justify-center group-hover:bg-[#803D4B] group-hover:text-white transition-colors duration-200">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl font-medium text-[#111827] group-hover:text-[#803D4B] transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="pt-2 border-t border-[#F1EFEA] space-y-2">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">
                    What You Receive
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#803D4B] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="mt-6 pt-4 border-t border-[#EAE3D9]">
                <button
                  type="button"
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full flex items-center justify-between text-xs font-semibold text-[#803D4B] hover:text-[#642b36] transition-colors cursor-pointer"
                >
                  <span>Select for inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* "My Tools" Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-[#E7DFD5] p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="text-xs uppercase tracking-widest text-[#803D4B] font-semibold">
              Core Technical Foundation
            </div>
            <h2 className="font-serif text-3xl text-[#111827] tracking-tight">
              My Tools
            </h2>
            <p className="text-sm text-slate-600">
              The honest, reliable development stack used to build and deploy every project in my portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOOLS_DATA.map((tool, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#F8F6F2] border border-[#EAE3D9] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#803D4B]">
                      {tool.badge}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#111827]">
                    {tool.name}
                  </h3>
                  <div className="text-xs font-medium text-[#803D4B]">
                    {tool.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Central Call to Action Button */}
          <div className="mt-12 text-center pt-8 border-t border-[#EAE3D9]">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#803D4B] hover:bg-[#6b313d] text-white text-sm font-semibold tracking-wide uppercase shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
