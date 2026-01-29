import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Lazy load components
const SinglePagePortfolio = lazy(() => import('./components/SinglePagePortfolio'));

// Loading component - matches black theme
const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#000000',
    color: 'white'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(124, 58, 237, 0.2)',
      borderTop: '3px solid #a855f7',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  const location = useLocation();

  return (
    <div style={{ background: '#000000', minHeight: '100vh' }}>
      <Suspense fallback={<Loading />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<SinglePagePortfolio />} />
            <Route path="*" element={<SinglePagePortfolio />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  );
}

export default App;
