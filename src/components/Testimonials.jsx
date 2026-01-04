import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "CEO, NexaGrowth",
            initials: "SJ",
            content: "TechByMax completely transformed our digital presence. Their attention to detail and ability to translate our complex requirements into a seamless user experience was outstanding. Our conversion rates have doubled since the launch.",
            stars: 5,
            delay: "reveal-stagger-1"
        },
        {
            id: 2,
            name: "David Asante",
            role: "Founder, AfroTech Solutions",
            initials: "DA",
            content: "Working with the team was a breeze. They didn't just build a website; they built a scalable platform that grows with our business. The performance optimization is incredible—our site loads instantly.",
            stars: 5,
            delay: "reveal-stagger-2"
        },
        {
            id: 3,
            name: "Michael K.",
            role: "Director of Ops, LogisticsPro",
            initials: "MK",
            content: "A truly premium service. From the initial consultation to the final deployment, the communication was clear and the delivery was on time. I highly recommend TechByMax to any business serious about growth.",
            stars: 5,
            delay: "reveal-stagger-3"
        }
    ];

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="container">
                <div className="testimonials-header reveal">
                    <h2>What Our Clients Say</h2>
                    <p>Trusted by ambitious brands and businesses across industries.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item) => (
                        <div key={item.id} className={`testimonial-card reveal ${item.delay}`}>
                            <div className="testimonial-stars">
                                {'★'.repeat(item.stars)}
                            </div>
                            <p className="testimonial-text">"{item.content}"</p>
                            <div className="testimonial-meta">
                                <div className="client-avatar">
                                    {item.initials}
                                </div>
                                <div className="client-info">
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
