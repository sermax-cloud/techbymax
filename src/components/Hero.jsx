import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Images related to web design / digital agency
    const images = [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // Team working
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // Web design mockup
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", // Mac setup
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"  // Analytics
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="hero">
            {/* Background Slider */}
            <div className="hero-slider">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Best web design and development agency in Ghana"
                        className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
                    />
                ))}
                <div className="slider-overlay"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content animate-fade-in">
                    <h1>
                        Best Web Design & <br />
                        <span className="text-gradient">Development Agency</span> <br />
                        in Ghana
                    </h1>
                    <p className="hero-subtext">
                        We help businesses in Ghana and beyond design, build, and launch modern websites that attract customers and drive real growth.
                    </p>
                    <div className="hero-actions">
                        <a href="#services" className="btn btn-primary">View Our Services</a>
                    </div>

                    <div className="trust-badge">
                        <span className="dot"></span> Trusted by SMEs & growing brands
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
