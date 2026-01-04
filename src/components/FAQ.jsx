import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            q: "How long does a website take?",
            a: "Typical projects take 2-4 weeks. Larger web apps may take 6-12 weeks depending on complexity."
        },
        {
            q: "Do you offer maintenance?",
            a: "Yes! We offer ongoing support packages to ensure your site remains secure, fast, and up-to-date."
        },
        {
            q: "Can I update the site myself?",
            a: "Absolutely. We build with CMS integration (like WordPress) or provide admin dashboards so you can manage content easily."
        },
        {
            q: "Do you work with international clients?",
            a: "Yes, we work with clients globally. We are remote-friendly and use tools like Zoom and Slack for communication."
        },
        {
            q: "What payment methods do you accept?",
            a: "We accept Bank Transfer, Mobile Money, and international payments via card."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.q}</h3>
                                <span className="toggle-icon">{activeIndex === index ? '−' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
