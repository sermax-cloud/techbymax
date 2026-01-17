import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicePage.css';

const WebsiteDevelopment = () => {
    return (
        <div className="service-page">
            <SEO
                title="Website Development Services | TechByMax - Custom Business Websites in Ghana"
                description="Professional website development services in Ghana. We build corporate websites, business sites, landing pages, and portfolios that drive results. Get a custom website today."
                keywords="website development Ghana, custom website design, business website, corporate website, web design Ghana, professional website"
                canonicalUrl="/services/website-development"
            />
            <Navbar />

            <section className="service-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link> / <Link to="/#services">Services</Link> / <span>Website Development</span>
                    </nav>
                    <h1>Website Development</h1>
                    <p className="service-hero-desc">Build a powerful online presence with custom websites designed to grow your business</p>
                </div>
            </section>

            <section className="service-content section-padding">
                <div className="container">
                    <div className="service-layout">
                        <div className="service-main">
                            <div className="service-intro">
                                <h2>Professional Website Development for Modern Businesses</h2>
                                <p>In today's digital-first world, your website is often the first impression potential customers have of your business. At TechByMax, we create stunning, high-performance websites that not only look great but drive real business results.</p>
                            </div>

                            <div className="service-features">
                                <h3>What We Offer</h3>
                                <div className="features-grid">
                                    <div className="feature-item">
                                        <div className="feature-icon">🏢</div>
                                        <h4>Corporate Websites</h4>
                                        <p>Professional websites that establish credibility and showcase your brand's value proposition to clients and partners.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">💼</div>
                                        <h4>Business Sites</h4>
                                        <p>Conversion-focused websites designed to generate leads, showcase services, and drive customer engagement.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">🚀</div>
                                        <h4>Landing Pages</h4>
                                        <p>High-converting landing pages optimized for specific campaigns, products, or services to maximize ROI.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">👤</div>
                                        <h4>Personal Portfolios</h4>
                                        <p>Stand out from the crowd with a unique portfolio website that showcases your work and personal brand.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-benefits">
                                <h3>Why Choose Our Website Development Services?</h3>
                                <ul className="benefits-list">
                                    <li>
                                        <strong>Mobile-First Design:</strong> Every website we build is fully responsive and optimized for all devices, ensuring a seamless experience for your users.
                                    </li>
                                    <li>
                                        <strong>SEO Optimized:</strong> Built with search engine optimization in mind from day one, helping you rank higher on Google and attract organic traffic.
                                    </li>
                                    <li>
                                        <strong>Fast Loading Speed:</strong> Optimized for performance with lightning-fast load times that keep visitors engaged and improve conversion rates.
                                    </li>
                                    <li>
                                        <strong>Custom Design:</strong> No templates. Every website is uniquely designed to match your brand identity and business goals.
                                    </li>
                                    <li>
                                        <strong>Easy to Manage:</strong> User-friendly content management systems that allow you to update your website without technical knowledge.
                                    </li>
                                    <li>
                                        <strong>Secure & Reliable:</strong> Industry-standard security measures and reliable hosting to keep your website safe and always accessible.
                                    </li>
                                </ul>
                            </div>

                            <div className="service-process">
                                <h3>Our Development Process</h3>
                                <div className="process-steps">
                                    <div className="process-step">
                                        <div className="step-number">1</div>
                                        <h4>Discovery & Planning</h4>
                                        <p>We start by understanding your business goals, target audience, and project requirements.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">2</div>
                                        <h4>Design & Prototyping</h4>
                                        <p>Our designers create mockups and prototypes that bring your vision to life.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">3</div>
                                        <h4>Development</h4>
                                        <p>We build your website using modern technologies and best practices for optimal performance.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">4</div>
                                        <h4>Testing & Launch</h4>
                                        <p>Rigorous testing ensures everything works perfectly before we launch your site to the world.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-cta">
                                <h3>Ready to Build Your Dream Website?</h3>
                                <p>Let's create a website that elevates your brand and drives business growth.</p>
                                <Link to="/#contact" className="cta-button">Get a Free Quote</Link>
                            </div>
                        </div>

                        <aside className="service-sidebar">
                            <div className="sidebar-card">
                                <h4>All Services</h4>
                                <ul className="service-links">
                                    <li className="active"><Link to="/services/website-development">Website Development</Link></li>
                                    <li><Link to="/services/ecommerce-solutions">E-Commerce Solutions</Link></li>
                                    <li><Link to="/services/web-applications">Web Applications</Link></li>
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
                                    <li>✓ 2-4 week delivery</li>
                                    <li>✓ Mobile responsive</li>
                                    <li>✓ SEO optimized</li>
                                    <li>✓ Free 30-day support</li>
                                    <li>✓ Custom design</li>
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

export default WebsiteDevelopment;
