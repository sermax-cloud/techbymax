import React from 'react';
import './Pricing.css';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            ideal: "Small business website",
            features: ["3–5 Pages", "Mobile Responsive", "Contact Form", "Standard SEO"]
        },
        {
            name: "Business",
            ideal: "Growing brands",
            features: ["Custom Design", "SEO Optimized", "CMS Integration", "Google Maps/Analytics", "Blog Section"],
            highlight: true
        },
        {
            name: "Premium",
            ideal: "E-commerce & Web Apps",
            features: ["Advanced Functionality", "E-commerce/Payment", "User Authentication", "API Integration", "Priority Support"]
        }
    ];

    return (
        <section className="pricing section-padding">
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2>Clear Pricing</h2>
                    <p>No hidden fees. Choose the package that suits you.</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div className={`pricing-card ${plan.highlight ? 'highlight' : ''} reveal reveal-stagger-${index + 1}`} key={index}>
                            <div className="card-header-price">
                                <h3>{plan.name}</h3>
                                <span className="ideal-for">{plan.ideal}</span>
                            </div>
                            <ul className="features-list">
                                {plan.features.map((feature, i) => (
                                    <li key={i}>✓ {feature}</li>
                                ))}
                            </ul>
                            <a href="#contact" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'} btn-full`}>
                                Choose Plan
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
