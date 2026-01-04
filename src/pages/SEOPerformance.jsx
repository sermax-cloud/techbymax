import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicePage.css';

const SEOPerformance = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "SEO & Performance Optimization | TechByMax - Rank Higher in Ghana";

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Professional SEO and performance optimization services in Ghana. On-page SEO, speed optimization, and Google visibility setup to increase traffic and rankings.');
        }

        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', 'SEO Ghana, search engine optimization, speed optimization, Google ranking, on-page SEO, website performance, SEO services Ghana');
    }, []);

    return (
        <div className="service-page">
            <Navbar />

            <section className="service-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link> / <Link to="/#services">Services</Link> / <span>SEO & Performance</span>
                    </nav>
                    <h1>SEO & Performance</h1>
                    <p className="service-hero-desc">Boost your visibility and speed to attract more customers and rank higher on Google</p>
                </div>
            </section>

            <section className="service-content section-padding">
                <div className="container">
                    <div className="service-layout">
                        <div className="service-main">
                            <div className="service-intro">
                                <h2>Professional SEO & Performance Optimization</h2>
                                <p>Get found by customers searching for your services online. Our SEO and performance optimization services help you rank higher on Google, load faster, and convert more visitors into customers through data-driven strategies and technical excellence.</p>
                            </div>

                            <div className="service-features">
                                <h3>What We Offer</h3>
                                <div className="features-grid">
                                    <div className="feature-item">
                                        <div className="feature-icon">📝</div>
                                        <h4>On-Page SEO</h4>
                                        <p>Optimize content, meta tags, headings, and structure to improve search engine rankings.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">⚡</div>
                                        <h4>Speed Optimization</h4>
                                        <p>Improve loading times through image optimization, caching, and code optimization.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">🔍</div>
                                        <h4>Google Visibility Setup</h4>
                                        <p>Configure Google Search Console, Analytics, and Business Profile for maximum visibility.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">📊</div>
                                        <h4>Performance Monitoring</h4>
                                        <p>Track rankings, traffic, and performance metrics with detailed monthly reports.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-benefits">
                                <h3>Why Choose Our SEO Services?</h3>
                                <ul className="benefits-list">
                                    <li>
                                        <strong>Local SEO Expertise:</strong> Specialized knowledge of the Ghanaian market and local search optimization strategies.
                                    </li>
                                    <li>
                                        <strong>White-Hat Techniques:</strong> Ethical SEO practices that build sustainable, long-term rankings without risk of penalties.
                                    </li>
                                    <li>
                                        <strong>Technical Excellence:</strong> Deep technical optimization including schema markup, site architecture, and Core Web Vitals.
                                    </li>
                                    <li>
                                        <strong>Content Strategy:</strong> Keyword research and content recommendations to attract your target audience.
                                    </li>
                                    <li>
                                        <strong>Measurable Results:</strong> Clear metrics and reporting to track ROI and demonstrate tangible improvements.
                                    </li>
                                    <li>
                                        <strong>Competitive Analysis:</strong> Research your competitors' strategies to identify opportunities and stay ahead.
                                    </li>
                                </ul>
                            </div>

                            <div className="service-process">
                                <h3>Our SEO Process</h3>
                                <div className="process-steps">
                                    <div className="process-step">
                                        <div className="step-number">1</div>
                                        <h4>SEO Audit</h4>
                                        <p>Comprehensive analysis of your current SEO status, technical issues, and opportunities.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">2</div>
                                        <h4>Strategy Development</h4>
                                        <p>Create a customized SEO strategy based on your goals, industry, and competition.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">3</div>
                                        <h4>Implementation</h4>
                                        <p>Execute on-page optimizations, technical fixes, and performance improvements.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">4</div>
                                        <h4>Monitor & Refine</h4>
                                        <p>Continuous monitoring, testing, and refinement to improve results over time.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-cta">
                                <h3>Ready to Dominate Search Results?</h3>
                                <p>Let's boost your visibility and drive more organic traffic to your website.</p>
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
                                    <li><Link to="/services/ui-ux-design">UI/UX & Web Design</Link></li>
                                    <li><Link to="/services/maintenance-support">Maintenance & Support</Link></li>
                                    <li className="active"><Link to="/services/seo-performance">SEO & Performance</Link></li>
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
                                    <li>✓ 3-6 month plans</li>
                                    <li>✓ Monthly reporting</li>
                                    <li>✓ Local SEO focus</li>
                                    <li>✓ White-hat only</li>
                                    <li>✓ Guaranteed results</li>
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

export default SEOPerformance;
