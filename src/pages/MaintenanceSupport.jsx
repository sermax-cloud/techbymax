import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicePage.css';

const MaintenanceSupport = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Website Maintenance & Support | TechByMax - Reliable Support in Ghana";

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Professional website maintenance and support services in Ghana. Updates, backups, speed optimization, security monitoring, and technical support to keep your site running smoothly.');
        }

        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', 'website maintenance Ghana, website support, speed optimization, security monitoring, website backup, technical support');
    }, []);

    return (
        <div className="service-page">
            <Navbar />

            <section className="service-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link> / <Link to="/#services">Services</Link> / <span>Maintenance & Support</span>
                    </nav>
                    <h1>Maintenance & Support</h1>
                    <p className="service-hero-desc">Keep your website secure, fast, and running smoothly with our expert support</p>
                </div>
            </section>

            <section className="service-content section-padding">
                <div className="container">
                    <div className="service-layout">
                        <div className="service-main">
                            <div className="service-intro">
                                <h2>Comprehensive Website Maintenance & Support</h2>
                                <p>Your website needs ongoing care to stay secure, fast, and effective. Our maintenance and support services ensure your site remains in peak condition, allowing you to focus on running your business while we handle the technical details.</p>
                            </div>

                            <div className="service-features">
                                <h3>What We Offer</h3>
                                <div className="features-grid">
                                    <div className="feature-item">
                                        <div className="feature-icon">🔄</div>
                                        <h4>Regular Updates</h4>
                                        <p>Keep your website current with the latest software, plugins, and security patches.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">💾</div>
                                        <h4>Automated Backups</h4>
                                        <p>Daily backups stored securely off-site, ensuring your data is always protected and recoverable.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">⚡</div>
                                        <h4>Speed Optimization</h4>
                                        <p>Continuous performance monitoring and optimization to maintain fast loading times.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">🔒</div>
                                        <h4>Security Monitoring</h4>
                                        <p>24/7 security scanning, malware detection, and proactive threat prevention.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-benefits">
                                <h3>Why Choose Our Maintenance Services?</h3>
                                <ul className="benefits-list">
                                    <li>
                                        <strong>Proactive Monitoring:</strong> We identify and fix issues before they impact your website or business operations.
                                    </li>
                                    <li>
                                        <strong>Priority Support:</strong> Fast response times with dedicated support channels for urgent issues.
                                    </li>
                                    <li>
                                        <strong>Regular Reports:</strong> Monthly reports detailing updates, performance metrics, and security status.
                                    </li>
                                    <li>
                                        <strong>Content Updates:</strong> Quick turnaround for content changes, image updates, and minor modifications.
                                    </li>
                                    <li>
                                        <strong>Uptime Guarantee:</strong> 99.9% uptime commitment with immediate response to any downtime.
                                    </li>
                                    <li>
                                        <strong>Cost-Effective:</strong> Predictable monthly pricing that's more affordable than hiring in-house staff.
                                    </li>
                                </ul>
                            </div>

                            <div className="service-process">
                                <h3>Our Maintenance Process</h3>
                                <div className="process-steps">
                                    <div className="process-step">
                                        <div className="step-number">1</div>
                                        <h4>Initial Audit</h4>
                                        <p>Comprehensive review of your website's current state, security, and performance.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">2</div>
                                        <h4>Setup & Optimization</h4>
                                        <p>Configure monitoring tools, backups, and implement initial optimizations.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">3</div>
                                        <h4>Ongoing Maintenance</h4>
                                        <p>Regular updates, monitoring, and proactive maintenance to keep everything running smoothly.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">4</div>
                                        <h4>Monthly Reporting</h4>
                                        <p>Detailed reports on all activities, performance metrics, and recommendations.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-cta">
                                <h3>Ready to Protect Your Website Investment?</h3>
                                <p>Let's ensure your website stays secure, fast, and always available.</p>
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
                                    <li className="active"><Link to="/services/maintenance-support">Maintenance & Support</Link></li>
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
                                    <li>✓ Monthly plans</li>
                                    <li>✓ Daily backups</li>
                                    <li>✓ 24/7 monitoring</li>
                                    <li>✓ Priority support</li>
                                    <li>✓ Monthly reports</li>
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

export default MaintenanceSupport;
