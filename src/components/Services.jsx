import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const services = [
        {
            id: 1,
            title: "Web Design for Businesses",
            desc: "Corporate websites, Business sites, Landing pages, Personal portfolios.",
            icon: "💻",
            link: "/services/website-development"
        },
        {
            id: 2,
            title: "Website Development",
            desc: "Custom dashboards, Booking systems, Client portals, Admin panels.",
            icon: "⚙️",
            link: "/services/web-applications"
        },
        {
            id: 3,
            title: "E-Commerce Website Development",
            desc: "Online stores, Payment integration, Inventory management.",
            icon: "🛍️",
            link: "/services/ecommerce-solutions"
        },
        {
            id: 4,
            title: "Website Maintenance & Support",
            desc: "Updates, backups, speed optimization, and security monitoring.",
            icon: "🛠️",
            link: "/services/maintenance-support"
        },
        {
            id: 5,
            title: "SEO Optimization",
            desc: "On-page SEO, speed optimization, Google visibility setup.",
            icon: "📈",
            link: "/services/seo-performance"
        },
        {
            id: 6,
            title: "Website Redesign",
            desc: "Website redesign, Mobile-first layouts, Brand alignment.",
            icon: "🎨",
            link: "/services/ui-ux-design"
        }
    ];

    return (
        <section id="services" className="services section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Professional Web Design Services</h2>
                    <p>Comprehensive digital solutions tailored to your growth.</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className={`service-card reveal reveal-stagger-${(index % 3) + 1}`} key={service.id}>
                            <div className="service-icon-wrapper">
                                <span className="service-icon">{service.icon}</span>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <Link to={service.link} className="service-link">Learn more &rarr;</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
