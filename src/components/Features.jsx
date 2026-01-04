import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            title: "Business-Focused",
            desc: "Strategies designed to increase revenue and engagement.",
            icon: "💼"
        },
        {
            title: "Clean & Modern",
            desc: "Aesthetically pleasing designs that build trust.",
            icon: "✨"
        },
        {
            title: "Speed Optimized",
            desc: "Blazing fast load times for better SEO and UX.",
            icon: "⚡"
        },
        {
            title: "Affordable Pricing",
            desc: "Premium quality at Ghana-friendly rates.",
            icon: "🇬🇭"
        }
    ];

    return (
        <section className="features section-padding">
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2>Why TechByMax?</h2>
                    <p>We don't just build websites; we build digital assets.</p>
                </div>
                <div className="features-grid">
                    {features.map((item, index) => (
                        <div className={`feature-card reveal reveal-stagger-${Math.min(index + 1, 4)}`} key={index}>
                            <div className="feature-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
