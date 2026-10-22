/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageId, Project } from './types';
import { PROJECTS_DATA } from './data/projectsData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Sync page state with window hash if present
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'about', 'services', 'projects', 'contact'].includes(hash)) {
      return hash as PageId;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState<PageId>(getInitialPage);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [initialContactProjectType, setInitialContactProjectType] = useState<string>('');

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // All inspectable images in portfolio for smooth carousel navigation
  const lightboxImages = [
    {
      src: '/assets/aistudio/IMG_20261022_145347_631_c48d5587.png',
      title: 'Maham Imran — Personal Portrait in Burgundy Hijab',
      category: 'Creative Professional Portrait',
    },
    {
      src: '/assets/aistudio/Screenshot_20261022-145729_546b17e5.png',
      title: 'Velora Beauty Salon — Homepage Concept',
      category: 'Beauty & Wellness Website',
      liveUrl: 'https://dainty-hamster-b3d6af.netlify.app/',
    },
    {
      src: '/assets/aistudio/Screenshot_20261022-145800_c2b5dae1.png',
      title: 'Nexora Global Business Finance — Homepage Concept',
      category: 'Business & Finance Website',
      liveUrl: 'https://chimerical-kitsune-0ad0b1.netlify.app/',
    },
    {
      src: '/assets/aistudio/Screenshot_20261022-145824_1752c0f4.png',
      title: 'IRONVAULT - Fitness Website',
      category: 'Gym & Fitness Website',
      liveUrl: 'https://charming-praline-709b50.netlify.app',
    },
  ];

  // Handle Hash Change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'services', 'projects', 'contact'].includes(hash)) {
        setActivePage(hash as PageId);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (projectId: string) => {
    const found = PROJECTS_DATA.find((p) => p.id === projectId);
    if (found) {
      setSelectedProject(found);
    }
  };

  const handleOpenLightbox = (imageUrl: string, title: string) => {
    const foundIndex = lightboxImages.findIndex((item) => item.src === imageUrl);
    if (foundIndex !== -1) {
      setLightboxIndex(foundIndex);
    } else {
      setLightboxIndex(0);
    }
    setLightboxOpen(true);
  };

  const handleNavigateToContactWithService = (serviceName: string) => {
    setInitialContactProjectType(serviceName);
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#292929] font-sans">
      {/* Global Header */}
      <Header activePage={activePage} onNavigate={navigateTo} />

      {/* Main Content View with Dynamic Page Switch */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProject={handleSelectProject}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onSelectServiceForInquiry={handleNavigateToContactWithService}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage
            onSelectProject={handleSelectProject}
            onOpenLightbox={handleOpenLightbox}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage initialProjectType={initialContactProjectType} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Click-To-Enlarge Lightbox Viewer */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

      {/* Deep-Dive Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLightbox={handleOpenLightbox}
        onNavigateToContact={(category) => {
          setSelectedProject(null);
          handleNavigateToContactWithService(category);
        }}
      />
    </div>
  );
}
