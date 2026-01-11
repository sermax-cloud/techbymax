import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            title: "Results-Driven Web Design",
            desc: "Your website should be more than a design—it should convert. Our designs are optimized to attract visitors, engage them, and turn them into loyal customers.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Boosted Traffic & Visibility",
            desc: "With SEO-focused development, we ensure your website ranks higher in search engines, making it easier for your audience to find you in Ghana and beyond.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17 6H23V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "High-Impact Conversions",
            desc: "From call-to-action strategies to user-friendly layouts, we help you achieve increased sales, leads, and engagement rates.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Custom Solutions",
            desc: "Whether you're a corporate giant or a startup, our custom web solutions are designed to meet your unique business goals and deliver long-term success.",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7 6.30005L20 11.6L17.4 14.2C17.0267 14.5734 16.5204 14.7831 15.9925 14.7831C15.4646 14.7831 14.9583 14.5734 14.585 14.2L12 11.6L14.7 6.30005ZM14.7 6.30005L13.1 9.40005L10.5 6.80005C10.1267 6.42671 9.91693 5.92036 9.91693 5.3925C9.91693 4.86464 10.1267 4.35829 10.5 3.98495L11.5 2.98495C12.3 2.18495 13.6 2.18495 14.4 2.98495L15.4 3.98495C15.7734 4.35829 15.9831 4.86464 15.9831 5.3925C15.9831 5.92036 15.7734 6.42671 15.4 6.80005L14.7 6.30005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 11.6L9.30005 14.3L6.70005 19.6L4 16.9C3.62671 16.5267 3.41693 16.0204 3.41693 15.4925C3.41693 14.9646 3.62671 14.4583 4 14.085L4 11.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.3 17.3L11.7 19.9L6.30005 14.6L11.6 11.9L14.3 14.6C14.6734 14.9734 14.8831 15.4797 14.8831 16.0076C14.8831 16.5354 14.6734 17.0418 14.3 17.4151L14.3 17.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        }
    ];

    return (
        <section className="features section-padding" id="features">
            <div className="container">
                <div className="features-wrapper">
                    {/* Left Column: Content */}
                    <div className="features-content reveal">
                        <span className="subtitle">High-Impact Results</span>
                        <h2>Why Choose TechByMax</h2>
                        <p>
                            In today’s competitive digital landscape, your website isn’t just an online presence—it’s your most powerful tool to generate leads, increase traffic, and drive conversions.
                        </p>
                        <p>
                            At TechByMax, we craft tailored web solutions that address your pain points and deliver measurable results.
                        </p>
                        <a href="#contact" className="btn btn-primary mt-3">
                            More Why Choose Us
                        </a>
                    </div>

                    {/* Right Column: Grid Cards */}
                    <div className="features-grid">
                        {features.map((item, index) => (
                            <div className={`feature-card reveal reveal-stagger-${Math.min(index + 1, 4)}`} key={index}>
                                <div className="feature-icon-wrapper">
                                    <span className="feature-icon-svg">{item.icon}</span>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
