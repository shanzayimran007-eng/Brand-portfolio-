export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-creation',
    number: '01',
    title: 'AI-Assisted Website Creation',
    description:
      'Leveraging Google AI Studio to thoughtfully accelerate digital layouts, generate refined interface structures, and turn client ideas into live, custom web experiences.',
    icon: 'Sparkles',
    deliverables: [
      'Fast-track concept exploration',
      'Clean semantic code generation',
      'Interactive component assembly',
      'Tailored branding integration',
    ],
  },
  {
    id: 'business-design',
    number: '02',
    title: 'Business Website Design',
    description:
      'Professional corporate and boutique websites tailored to establish immediate credibility, build customer trust, and present commercial services with polish.',
    icon: 'Briefcase',
    deliverables: [
      'Strategic value proposition layouts',
      'Trust markers & social proof display',
      'Lead capture & appointment funnels',
      'Brand palette & typographic consistency',
    ],
  },
  {
    id: 'landing-pages',
    number: '03',
    title: 'Landing Page Design',
    description:
      'Focused, single-page digital experiences designed to showcase specific services, launch products, or convert paid traffic into qualified client inquiries.',
    icon: 'Layout',
    deliverables: [
      'Compelling split-screen heroes',
      'Action-oriented CTAs',
      'Feature breakdown sections',
      'Frictionless inquiry forms',
    ],
  },
  {
    id: 'multipage-websites',
    number: '04',
    title: 'Multi-Page Website Design',
    description:
      'Cohesive multi-page website architectures with unified navigation, interconnected pages, and organized content flow across all brand touchpoints.',
    icon: 'Layers',
    deliverables: [
      'Seamless multi-page routing',
      'Consistent headers & footers',
      'Dedicated About & Service pages',
      'Portfolio & case study showcases',
    ],
  },
  {
    id: 'mockup-design',
    number: '05',
    title: 'Website Mockup Design',
    description:
      'Visual mockup concepts and high-fidelity page previews that let business owners review their digital presence before launching publicly.',
    icon: 'Monitor',
    deliverables: [
      'High-fidelity digital mockups',
      'Responsive view simulations',
      'Colorway & typography previews',
      'Component spacing & style guides',
    ],
  },
  {
    id: 'responsive-layouts',
    number: '06',
    title: 'Responsive Website Layouts',
    description:
      'Fluid, mobile-optimized layouts rigorously tested to deliver natural readability and effortless navigation across smartphones, tablets, and large screens.',
    icon: 'Smartphone',
    deliverables: [
      'Mobile-first grid systems',
      'Touch-friendly navigation drawers',
      'Adaptive image scaling',
      'Zero-overflow layout precision',
    ],
  },
];

export const TOOLS_DATA = [
  {
    name: 'Google AI Studio',
    tagline: 'AI-assisted website creation',
    description:
      'Utilized to rapidly prototype interactive concepts, craft structured layouts, and iterate interface code with speed and creative flexibility.',
    badge: 'Core Creation Engine',
  },
  {
    name: 'Netlify',
    tagline: 'Website deployment and publishing',
    description:
      'Used to host, build, and deploy production-ready web experiences globally with SSL security, fast CDN delivery, and instant availability.',
    badge: 'Deployment Platform',
  },
];
