import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Send, CheckCircle2, ArrowUpRight, Clock, ShieldCheck, AlertCircle } from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactPageProps {
  initialProjectType?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialProjectType }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    projectType: initialProjectType || 'Business Website Design',
    budget: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<InquiryFormData | null>(null);

  useEffect(() => {
    if (initialProjectType) {
      setFormData((prev) => ({ ...prev, projectType: initialProjectType }));
    }
  }, [initialProjectType]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectType.trim()) {
      newErrors.projectType = 'Please select a project type.';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Please provide a short description of your project.';
    } else if (formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = 'Please share at least 15 characters describing what you need.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Save inquiry to persistent client storage & simulate realistic API resolution
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('maham_portfolio_inquiries') || '[]');
        const newEntry = {
          ...formData,
          submittedAt: new Date().toISOString(),
          id: `INQ-${Date.now().toString(36).toUpperCase()}`,
        };
        stored.push(newEntry);
        localStorage.setItem('maham_portfolio_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage error:', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedInquiry({ ...formData });
      setFormData({
        fullName: '',
        email: '',
        projectType: 'Business Website Design',
        budget: '',
        projectDetails: '',
      });
    }, 700);
  };

  const resetForm = () => {
    setIsSuccess(false);
    setSubmittedInquiry(null);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 pt-4 sm:pt-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#803D4B] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#803D4B]" />
          <span>Inquiries & Collaboration</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#111827] tracking-tight font-normal">
          Let’s Create Something Great
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
          Have an idea for a business website or need a professional website mockup? Tell me about your project, and let’s explore how I can help.
        </p>
      </section>

      {/* Main Grid: Form on Left, Direct Contact Channels on Right */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form (col 1-7) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E7DFD5] p-6 sm:p-10 shadow-xs">
            {isSuccess ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#111827]">
                    Thank You, {submittedInquiry?.fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry for a <strong>{submittedInquiry?.projectType}</strong> has been received. I will review your requirements and respond via email within 24 to 48 hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F6F2] border border-[#EAE3D9] max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Clock className="w-4 h-4 text-[#803D4B]" />
                    <span>Average response time: Within 24 hours</span>
                  </div>
                  <div className="text-slate-500">
                    Need urgent feedback? Reach out directly via WhatsApp or email below.
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-xl border border-[#803D4B] text-[#803D4B] text-xs font-semibold uppercase tracking-wider hover:bg-[#803D4B]/5 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href="mailto:shanzayimran007@gmail.com"
                    className="px-6 py-2.5 rounded-xl bg-[#803D4B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#6b313d] transition-colors inline-flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Email Client</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl text-[#111827]">
                    Project Inquiry Form
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Please provide your project overview. All details are kept strictly confidential.
                  </p>
                </div>

                {/* Full Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Full Name <span className="text-[#803D4B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-xl border bg-[#F8F6F2] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#803D4B] transition-colors ${
                      errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-[#EAE3D9]'
                    }`}
                  />
                  {errors.fullName && (
                    <div className="flex items-center gap-1.5 text-xs text-red-600 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Email Address <span className="text-[#803D4B]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="name@business.com"
                    className={`w-full px-4 py-3 rounded-xl border bg-[#F8F6F2] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#803D4B] transition-colors ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#EAE3D9]'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1.5 text-xs text-red-600 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Project Type & Budget Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Project Type <span className="text-[#803D4B]">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE3D9] bg-[#F8F6F2] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#803D4B] transition-colors cursor-pointer"
                    >
                      <option value="Business Website Design">Business Website Design</option>
                      <option value="AI-Assisted Website Creation">AI-Assisted Website Creation</option>
                      <option value="Landing Page Design">Landing Page Design</option>
                      <option value="Multi-Page Website Design">Multi-Page Website Design</option>
                      <option value="Website Mockup Design">Website Mockup Design</option>
                      <option value="Responsive Website Layouts">Responsive Website Layouts</option>
                      <option value="Velora Beauty Salon Concept (Customized)">Velora Beauty Salon Concept</option>
                      <option value="Nexora Global Finance Concept (Customized)">Nexora Global Finance Concept</option>
                      <option value="IRONVAULT Fitness Concept (Customized)">IRONVAULT Fitness Concept</option>
                      <option value="Other Custom Project">Other Custom Project</option>
                    </select>
                  </div>

                  {/* Budget (Optional) */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="budget"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                    >
                      Budget Range <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-[#EAE3D9] bg-[#F8F6F2] text-sm text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#803D4B] transition-colors cursor-pointer"
                    >
                      <option value="">Select range...</option>
                      <option value="$150 – $300">$150 – $300 (Starter Mockup / Landing)</option>
                      <option value="$300 – $600">$300 – $600 (Complete Business Site)</option>
                      <option value="$600 – $1,200">$600 – $1,200 (Multi-Page Website)</option>
                      <option value="$1,200+">$1,200+ (Comprehensive Brand & Web)</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-700"
                  >
                    Project Details <span className="text-[#803D4B]">*</span>
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) =>
                      setFormData({ ...formData, projectDetails: e.target.value })
                    }
                    placeholder="Tell me about your business, the goals for your website, preferred styles or colors, and any timeline you have in mind..."
                    className={`w-full px-4 py-3 rounded-xl border bg-[#F8F6F2] text-sm text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#803D4B] transition-colors resize-y ${
                      errors.projectDetails ? 'border-red-400 bg-red-50/20' : 'border-[#EAE3D9]'
                    }`}
                  />
                  {errors.projectDetails && (
                    <div className="flex items-center gap-1.5 text-xs text-red-600 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.projectDetails}</span>
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#803D4B] hover:bg-[#6b313d] disabled:bg-slate-400 text-white text-sm font-semibold tracking-wide uppercase shadow-sm transition-colors cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Direct Freelance & Contact Information (col 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#E7DFD5] p-6 sm:p-8 space-y-6 shadow-xs">
              <div>
                <h3 className="font-serif text-xl font-medium text-[#111827]">
                  Direct Contact Channels
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Connect via your preferred freelance platform or direct messaging.
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Direct */}
                <a
                  href="mailto:shanzayimran007@gmail.com"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-[#F8F6F2] border border-[#EAE3D9] hover:border-[#803D4B] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#803D4B]/10 text-[#803D4B] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      Direct Email
                    </div>
                    <div className="text-sm font-medium text-[#111827] truncate group-hover:text-[#803D4B]">
                      shanzayimran007@gmail.com
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Open mail client anytime
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/?text=Hello%20Maham,%20I%20am%20interested%20in%20discussing%20a%20website%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-[#F8F6F2] border border-[#EAE3D9] hover:border-emerald-500 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      WhatsApp Chat
                    </div>
                    <div className="text-sm font-medium text-[#111827] group-hover:text-emerald-700">
                      Chat on WhatsApp
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Fast consultation & project chats
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                </a>

                {/* Fiverr */}
                <a
                  href="https://www.fiverr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 rounded-xl bg-[#F8F6F2] border border-[#EAE3D9] hover:border-emerald-500 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1DBF73]/15 text-[#1DBF73] font-bold text-sm flex items-center justify-center shrink-0">
                    fi
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                      Freelance Marketplace
                    </div>
                    <div className="text-sm font-medium text-[#111827] group-hover:text-emerald-700">
                      Fiverr Order & Inquiries
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Order protection & escrow
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                </a>
              </div>

              <div className="pt-4 border-t border-[#EAE3D9] space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#803D4B]" />
                  <span>Transparent project milestones & no surprise fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#803D4B]" />
                  <span>All websites previewed on live Netlify staging URLs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
