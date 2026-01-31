import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AnalyticsTracker from './components/AnalyticsTracker';
import './App.css';

// Lazy loading pages for performance optimization
const HomePage = lazy(() => import('./pages/HomePage'));
const WebsiteDevelopment = lazy(() => import('./pages/WebsiteDevelopment'));
const EcommerceSolutions = lazy(() => import('./pages/EcommerceSolutions'));
const WebApplications = lazy(() => import('./pages/WebApplications'));
const UIUXDesign = lazy(() => import('./pages/UIUXDesign'));
const MaintenanceSupport = lazy(() => import('./pages/MaintenanceSupport'));
const SEOPerformance = lazy(() => import('./pages/SEOPerformance'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

const PageLoader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--primary-color)' }}>
    <div className="loader" style={{
      width: '40px',
      height: '40px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid var(--primary-color)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <FloatingWhatsApp />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/services/web-applications" element={<WebApplications />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/maintenance-support" element={<MaintenanceSupport />} />
          <Route path="/services/seo-performance" element={<SEOPerformance />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
