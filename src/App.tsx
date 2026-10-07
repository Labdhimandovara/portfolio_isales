import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Strengths } from './components/Strengths';
import { Experience } from './components/Experience';
import { SocialHouseFeature } from './components/SocialHouseFeature';
import { OutreachMetrics } from './components/OutreachMetrics';
import { Leadership } from './components/Leadership';
import { Achievements } from './components/Achievements';
import { WorkingStyle } from './components/WorkingStyle';
import { About } from './components/About';
import { Playground } from './components/Playground';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-ink selection:bg-warmYellow selection:text-ink">
      <Navbar onOpenResume={() => setResumeOpen(true)} />
      
      <main id="main-content">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Strengths />
        <Experience />
        <SocialHouseFeature />
        <OutreachMetrics />
        <Leadership />
        <Achievements />
        <WorkingStyle />
        <About />
        <Playground />
      </main>

      <Footer onOpenResume={() => setResumeOpen(true)} />
      
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};

export default App;
