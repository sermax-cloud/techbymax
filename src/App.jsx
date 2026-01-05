import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import EcommerceSolutions from './pages/EcommerceSolutions';
import WebApplications from './pages/WebApplications';
import UIUXDesign from './pages/UIUXDesign';
import MaintenanceSupport from './pages/MaintenanceSupport';
import SEOPerformance from './pages/SEOPerformance';
import BlogPost from './pages/BlogPost';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <Router>
      <FloatingWhatsApp />
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
    </Router>
  );
}

export default App;
