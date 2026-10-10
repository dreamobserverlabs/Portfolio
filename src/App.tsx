import React, { useState } from 'react';
import { ProjectItem } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechStackGrid } from './components/TechStackGrid';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#061320] text-slate-100 selection:bg-[#E5A00D] selection:text-slate-950 font-sans">

      <Navbar onContactClick={scrollToContact} />

      <main>

        <Hero 
          onContactClick={scrollToContact} 
        />

        <ProjectsShowcase 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        <TechStackGrid />

        <ContactSection />
      </main>

      <Footer />

      <ProjectDetailModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
