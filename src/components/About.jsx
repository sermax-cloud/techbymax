import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content reveal">
                        <h2>Who We Are</h2>
                        <p className="lead-text">
                            TechByMax is a forward-thinking digital agency focused on helping businesses succeed online.
                        </p>
                        <p>
                            We don't just write code; we build digital ecosystems that drive growth. From small startups to established brands, we partner with you to create solutions that are scalable, secure, and visually stunning.
                        </p>

                        <div className="mission-vision">
                            <div className="mv-item reveal reveal-stagger-1">
                                <h4>Our Mission</h4>
                                <p>Build digital solutions that convert.</p>
                            </div>
                            <div className="mv-item reveal reveal-stagger-2">
                                <h4>Our Vision</h4>
                                <p>Become a leading African tech agency.</p>
                            </div>
                        </div>

                        <div className="tech-stack reveal reveal-stagger-3">
                            <h4>Digital Solutions</h4>
                            <div className="stack-list">
                                <span>Web Development</span>
                                <span>Web Apps</span>
                                <span>SEO & Marketing</span>
                                <span>Branding</span>
                                <span>Consulting</span>
                            </div>
                        </div>


                    </div>

                    <div className="about-visual reveal">
                        <div className="image-stack">
                            <div className="stack-card card-1" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
                            <div className="stack-card card-2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
