import React, { useState, useEffect } from 'react';
import { ProjectItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechStackGrid } from './components/TechStackGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#061320] text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-200 selection:bg-[#E5A00D] selection:text-slate-950 font-sans`}>
      {/* 1. Navigation Header with Logo */}
      <Navbar 
        onContactClick={scrollToContact} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />

      <main>
        {/* 2. Focused Minimal Hero with DreamObserver Logo */}
        <Hero 
          onContactClick={scrollToContact} 
        />

        {/* 3. Featured Projects Showcase (All 7 Specified Works) */}
        <ProjectsShowcase 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        {/* 4. Core Engineering Tech Stack */}
        <TechStackGrid />

        {/* 5. Direct Contact Channels */}
        <ContactSection />
      </main>

      {/* 6. Minimalist Studio Footer */}
      <Footer />

      {/* 7. Realistic Project Inspection Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
