import React, { lazy, Suspense } from 'react';

import Navbar from './sections/navbar';
import IntroSection from "./sections/intro";

const AboutSection = lazy(() => import('./sections/about'));
const ExperienceSection = lazy(() => import('./sections/experience'));
const ProjectsSection = lazy(() => import('./sections/projects'));
const ContactSection = lazy(() => import('./sections/contact'));

const SectionFallback = () => <div className="min-h-screen" aria-hidden />;

const App = () => {
  return (
    <main className='max-w-100vw min-h-100vh mx-auto'>
      <Navbar />
      <IntroSection />
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
    </main>
  );
}

export default App;
