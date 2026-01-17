import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicePage.css';

const WebApplications = () => {
    return (
        <div className="service-page">
            <SEO
                title="Web Application Development | TechByMax - Custom Web Apps in Ghana"
                description="Professional web application development in Ghana. Custom dashboards, booking systems, client portals, and admin panels built with modern technologies."
                keywords="web application development, custom dashboard, booking system, client portal, admin panel, web app Ghana"
                canonicalUrl="/services/web-applications"
            />
            <Navbar />

            <section className="service-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link> / <Link to="/#services">Services</Link> / <span>Web Applications</span>
                    </nav>
                    <h1>Web Applications</h1>
                    <p className="service-hero-desc">Custom web applications that streamline operations and enhance productivity</p>
                </div>
            </section>

            <section className="service-content section-padding">
                <div className="container">
                    <div className="service-layout">
                        <div className="service-main">
                            <div className="service-intro">
                                <h2>Custom Web Applications for Modern Businesses</h2>
                                <p>Transform your business processes with powerful, custom-built web applications. We develop scalable solutions that automate workflows, improve efficiency, and provide valuable insights for data-driven decision making.</p>
                            </div>

                            <div className="service-features">
                                <h3>What We Offer</h3>
                                <div className="features-grid">
                                    <div className="feature-item">
                                        <div className="feature-icon">📊</div>
                                        <h4>Custom Dashboards</h4>
                                        <p>Interactive dashboards with real-time data visualization, analytics, and reporting capabilities.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">📅</div>
                                        <h4>Booking Systems</h4>
                                        <p>Automated scheduling and booking platforms with calendar integration and payment processing.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">👥</div>
                                        <h4>Client Portals</h4>
                                        <p>Secure portals for clients to access information, track projects, and communicate with your team.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">⚙️</div>
                                        <h4>Admin Panels</h4>
                                        <p>Comprehensive management systems to control content, users, and business operations efficiently.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-benefits">
                                <h3>Why Choose Our Web Application Services?</h3>
                                <ul className="benefits-list">
                                    <li>
                                        <strong>Tailored Solutions:</strong> Every application is custom-built to match your specific business requirements and workflows.
                                    </li>
                                    <li>
                                        <strong>Modern Technology:</strong> Built with cutting-edge frameworks like React, Node.js, and cloud infrastructure for optimal performance.
                                    </li>
                                    <li>
                                        <strong>Scalable Architecture:</strong> Designed to grow with your business, handling increased users and data without performance issues.
                                    </li>
                                    <li>
                                        <strong>User-Friendly Interface:</strong> Intuitive designs that require minimal training and maximize user adoption.
                                    </li>
                                    <li>
                                        <strong>Data Security:</strong> Enterprise-grade security measures to protect sensitive business and customer data.
                                    </li>
                                    <li>
                                        <strong>API Integration:</strong> Seamless integration with third-party services, payment gateways, and existing systems.
                                    </li>
                                </ul>
                            </div>

                            <div className="service-process">
                                <h3>Our Development Process</h3>
                                <div className="process-steps">
                                    <div className="process-step">
                                        <div className="step-number">1</div>
                                        <h4>Requirements Analysis</h4>
                                        <p>Deep dive into your business processes to identify pain points and opportunities.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">2</div>
                                        <h4>Architecture Design</h4>
                                        <p>Plan the technical architecture, database structure, and system integrations.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">3</div>
                                        <h4>Agile Development</h4>
                                        <p>Iterative development with regular demos and feedback loops to ensure alignment.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">4</div>
                                        <h4>Deployment & Training</h4>
                                        <p>Smooth deployment with comprehensive user training and documentation.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-cta">
                                <h3>Ready to Build Your Custom Web Application?</h3>
                                <p>Let's create a solution that transforms your business operations.</p>
                                <Link to="/#contact" className="cta-button">Get a Free Quote</Link>
                            </div>
                        </div>

                        <aside className="service-sidebar">
                            <div className="sidebar-card">
                                <h4>All Services</h4>
                                <ul className="service-links">
                                    <li><Link to="/services/website-development">Website Development</Link></li>
                                    <li><Link to="/services/ecommerce-solutions">E-Commerce Solutions</Link></li>
                                    <li className="active"><Link to="/services/web-applications">Web Applications</Link></li>
                                    <li><Link to="/services/ui-ux-design">UI/UX & Web Design</Link></li>
                                    <li><Link to="/services/maintenance-support">Maintenance & Support</Link></li>
                                    <li><Link to="/services/seo-performance">SEO & Performance</Link></li>
                                </ul>
                            </div>

                            <div className="sidebar-card cta-card">
                                <h4>Need Help?</h4>
                                <p>Our team is ready to discuss your project and provide expert guidance.</p>
                                <Link to="/#contact" className="sidebar-cta-btn">Contact Us</Link>
                            </div>

                            <div className="sidebar-card">
                                <h4>Quick Facts</h4>
                                <ul className="quick-facts">
                                    <li>✓ 4-8 week delivery</li>
                                    <li>✓ Custom features</li>
                                    <li>✓ Cloud hosting</li>
                                    <li>✓ API integration</li>
                                    <li>✓ Ongoing support</li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WebApplications;
