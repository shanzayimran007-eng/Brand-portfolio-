export type PageId = 'home' | 'about' | 'services' | 'projects' | 'contact';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  theme: {
    bg: string;
    cardBg: string;
    text: string;
    border: string;
    accent: string;
    accentText: string;
    badgeBg: string;
    badgeText: string;
  };
  palette: {
    name: string;
    hex: string;
  }[];
  highlights: string[];
  techStack: string[];
  clientType: string;
  conceptGoals: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  projectType: string;
  budget: string;
  projectDetails: string;
}
