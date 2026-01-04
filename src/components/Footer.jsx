import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img src="/logo.png" alt="TechByMax" className="footer-logo-img" />
                        </a>
                        <p>Building High-Performance Websites That Grow Your Business. Custom digital solutions for scaling brands.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Web Development</a></li>
                            <li><a href="#services">E-Commerce</a></li>
                            <li><a href="#services">Web Applications</a></li>
                            <li><a href="#services">SEO & Performance</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#portfolio">Our Work</a></li>
                            <li><a href="#process">Process</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a href="#" aria-label="LinkedIn">LN</a>
                            <a href="#" aria-label="Twitter">TW</a>
                            <a href="#" aria-label="Instagram">IG</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} TechByMax. All rights reserved.</p>
                    <p>Building Digital Excellence</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
