import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Lazy load components for performance
const Landing = lazy(() => import('./components/Landing'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback
const PageLoader = () => (
  <div style={{
    height: '100vh',
    width: '100vw',
    background: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#00F0FF',
    fontFamily: 'monospace'
  }}>
    <div className="antigravity">LOADING...</div>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Suspense fallback={<PageLoader />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;
