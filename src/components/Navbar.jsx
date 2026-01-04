import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="TechByMax - High-Performance Digital Solutions" className="logo-img" />
        </Link>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {isHomePage ? (
            <>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)}>Process</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="btn btn-primary btn-sm" onClick={() => setMobileMenuOpen(false)}>
                Get a Quote
              </a>
            </>
          ) : (
            <>
              <Link to="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
              <Link to="/#process" onClick={() => setMobileMenuOpen(false)}>Process</Link>
              <Link to="/#about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/#contact" className="btn btn-primary btn-sm" onClick={() => setMobileMenuOpen(false)}>
                Get a Quote
              </Link>
            </>
          )}
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
