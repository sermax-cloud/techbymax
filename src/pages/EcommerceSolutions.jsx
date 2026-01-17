import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicePage.css';

const EcommerceSolutions = () => {
    return (
        <div className="service-page">
            <SEO
                title="E-Commerce Solutions | TechByMax - Online Store Development in Ghana"
                description="Professional e-commerce development services in Ghana. Build your online store with payment integration, inventory management, and secure checkout. Start selling online today."
                keywords="e-commerce Ghana, online store development, payment integration, inventory management, online shop Ghana, e-commerce website"
                canonicalUrl="/services/ecommerce-solutions"
            />
            <Navbar />

            <section className="service-hero">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link> / <Link to="/#services">Services</Link> / <span>E-Commerce Solutions</span>
                    </nav>
                    <h1>E-Commerce Solutions</h1>
                    <p className="service-hero-desc">Launch your online store and start selling with powerful e-commerce platforms</p>
                </div>
            </section>

            <section className="service-content section-padding">
                <div className="container">
                    <div className="service-layout">
                        <div className="service-main">
                            <div className="service-intro">
                                <h2>Complete E-Commerce Solutions for Your Business</h2>
                                <p>Transform your business with a fully-featured online store that drives sales 24/7. We build custom e-commerce platforms that provide seamless shopping experiences and powerful management tools to grow your online business.</p>
                            </div>

                            <div className="service-features">
                                <h3>What We Offer</h3>
                                <div className="features-grid">
                                    <div className="feature-item">
                                        <div className="feature-icon">🛒</div>
                                        <h4>Online Stores</h4>
                                        <p>Full-featured e-commerce websites with product catalogs, shopping carts, and secure checkout systems.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">💳</div>
                                        <h4>Payment Integration</h4>
                                        <p>Seamless integration with popular payment gateways including mobile money, cards, and international payments.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">📦</div>
                                        <h4>Inventory Management</h4>
                                        <p>Real-time inventory tracking, stock alerts, and automated management to streamline your operations.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon">📊</div>
                                        <h4>Analytics & Reporting</h4>
                                        <p>Comprehensive sales reports, customer insights, and performance analytics to drive data-driven decisions.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-benefits">
                                <h3>Why Choose Our E-Commerce Solutions?</h3>
                                <ul className="benefits-list">
                                    <li>
                                        <strong>Mobile Commerce Ready:</strong> Optimized for mobile shopping with responsive design and fast checkout on any device.
                                    </li>
                                    <li>
                                        <strong>Secure Transactions:</strong> SSL encryption, PCI compliance, and secure payment processing to protect your customers' data.
                                    </li>
                                    <li>
                                        <strong>Local Payment Options:</strong> Integration with Ghana's popular payment methods including MTN Mobile Money, Vodafone Cash, and AirtelTigo Money.
                                    </li>
                                    <li>
                                        <strong>Scalable Platform:</strong> Built to grow with your business, from 10 products to 10,000+ products.
                                    </li>
                                    <li>
                                        <strong>Easy Product Management:</strong> Intuitive admin panel to add products, manage orders, and update inventory with ease.
                                    </li>
                                    <li>
                                        <strong>Marketing Tools:</strong> Built-in SEO, discount codes, email marketing integration, and promotional features.
                                    </li>
                                </ul>
                            </div>

                            <div className="service-process">
                                <h3>Our E-Commerce Development Process</h3>
                                <div className="process-steps">
                                    <div className="process-step">
                                        <div className="step-number">1</div>
                                        <h4>Business Analysis</h4>
                                        <p>We analyze your products, target market, and business model to create the perfect solution.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">2</div>
                                        <h4>Platform Setup</h4>
                                        <p>Configure your store with payment gateways, shipping options, and essential features.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">3</div>
                                        <h4>Design & Customization</h4>
                                        <p>Create a unique shopping experience that reflects your brand and converts visitors.</p>
                                    </div>
                                    <div className="process-step">
                                        <div className="step-number">4</div>
                                        <h4>Testing & Launch</h4>
                                        <p>Thorough testing of all features, payment flows, and user journeys before going live.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="service-cta">
                                <h3>Ready to Start Selling Online?</h3>
                                <p>Let's build an e-commerce platform that drives sales and grows your business.</p>
                                <Link to="/#contact" className="cta-button">Get a Free Quote</Link>
                            </div>
                        </div>

                        <aside className="service-sidebar">
                            <div className="sidebar-card">
                                <h4>All Services</h4>
                                <ul className="service-links">
                                    <li><Link to="/services/website-development">Website Development</Link></li>
                                    <li className="active"><Link to="/services/ecommerce-solutions">E-Commerce Solutions</Link></li>
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
                                    <li>✓ 3-6 week delivery</li>
                                    <li>✓ Payment integration</li>
                                    <li>✓ Mobile optimized</li>
                                    <li>✓ Inventory system</li>
                                    <li>✓ Admin dashboard</li>
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

export default EcommerceSolutions;
