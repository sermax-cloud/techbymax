import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicePage.css';

const UIUXDesign = () => {
    return (
        <div className="service-page">
            <SEO
                title="UI/UX & Web Design Services | TechByMax - Professional Design in Ghana"
                description="Professional UI/UX and web design services in Ghana. Website redesign, mobile-first layouts, and brand-aligned designs that enhance user experience and drive conversions."
                keywords="UI UX design Ghana, web design, website redesign, mobile-first design, user experience, brand design Ghana"
                canonicalUrl="/services/ui-ux-design"
            />
            <Navbar />

            <section className="service-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link> / <Link to="/#services">Services</Link> / <span>UI/UX & Web Design</span>
                    </nav>
                    <h1>UI/UX & Web Design</h1>
                    <p className="service-hero-desc">Beautiful, user-centered designs that elevate your brand and engage your audience</p>
                </div>
            </section>

            <section className="service-content section-padding">
                <div className="container">
                    <div className="service-layout">
                        <div className="service-main">
                            <div className="service-intro">
                                <h2>Professional UI/UX Design Services</h2>
                                <p>Great design is more than aesthetics—it's about creating intuitive, engaging experiences that convert visitors into customers. Our design team combines creativity with data-driven insights to deliver designs that look stunning and perform exceptionally.</p>
                            </div>

                            <div className="service-features">
                                <h3>What We Offer</h3>
                                <div className="features-grid">
                                    <div className="feature-item">
                                        <div className="feature-icon">🎨</div>
                                        <h4>Website Redesign</h4>
                                        <p>Transform outdated websites into modern, high-performing digital experiences that reflect your brand.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">📱</div>
                                        <h4>Mobile-First Layouts</h4>
                                        <p>Responsive designs optimized for mobile devices, ensuring seamless experiences across all screen sizes.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">🎯</div>
                                        <h4>Brand Alignment</h4>
                                        <p>Designs that perfectly capture your brand identity and communicate your unique value proposition.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">✨</div>
                                        <h4>User Experience</h4>
                                        <p>Intuitive interfaces designed with user behavior research and best practices for maximum engagement.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-benefits">
                                <h3>Why Choose Our Design Services?</h3>
                                <ul className="benefits-list">
                                    <li>
                                        <strong>User-Centered Approach:</strong> Every design decision is based on user research, behavior analysis, and usability testing.
                                    </li>
                                    <li>
                                        <strong>Conversion Focused:</strong> Designs optimized to guide users toward desired actions and maximize conversion rates.
                                    </li>
                                    <li>
                                        <strong>Brand Consistency:</strong> Cohesive visual language across all touchpoints that strengthens brand recognition.
                                    </li>
                                    <li>
                                        <strong>Accessibility Standards:</strong> Inclusive designs that meet WCAG guidelines and work for all users.
                                    </li>
                                    <li>
                                        <strong>Modern Aesthetics:</strong> Contemporary design trends combined with timeless principles for lasting appeal.
                                    </li>
                                    <li>
                                        <strong>Iterative Process:</strong> Collaborative design process with multiple revisions to ensure perfect results.
                                    </li>
                                </ul>
                            </div>

                            <div className="service-process">
                                <h3>Our Design Process</h3>
                                <div className="process-steps">
                                    <div className="process-step">
                                        <div className="step-number">1</div>
                                        <h4>Research & Discovery</h4>
                                        <p>Understand your brand, audience, competitors, and business goals through comprehensive research.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">2</div>
                                        <h4>Wireframing</h4>
                                        <p>Create low-fidelity wireframes to establish structure, layout, and user flow.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">3</div>
                                        <h4>Visual Design</h4>
                                        <p>Develop high-fidelity mockups with colors, typography, imagery, and brand elements.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">4</div>
                                        <h4>Prototype & Test</h4>
                                        <p>Create interactive prototypes and conduct usability testing to refine the design.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-cta">
                                <h3>Ready to Transform Your Digital Presence?</h3>
                                <p>Let's create a design that captivates your audience and drives results.</p>
                                <Link to="/#contact" className="cta-button">Get a Free Quote</Link>
                            </div>
                        </div>

                        <aside className="service-sidebar">
                            <div className="sidebar-card">
                                <h4>All Services</h4>
                                <ul className="service-links">
                                    <li><Link to="/services/website-development">Website Development</Link></li>
                                    <li><Link to="/services/ecommerce-solutions">E-Commerce Solutions</Link></li>
                                    <li><Link to="/services/web-applications">Web Applications</Link></li>
                                    <li className="active"><Link to="/services/ui-ux-design">UI/UX & Web Design</Link></li>
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
                                    <li>✓ 1-3 week delivery</li>
                                    <li>✓ Multiple revisions</li>
                                    <li>✓ Brand alignment</li>
                                    <li>✓ Mobile-first</li>
                                    <li>✓ Source files included</li>
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

export default UIUXDesign;
