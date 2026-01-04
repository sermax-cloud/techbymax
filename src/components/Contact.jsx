import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact section-padding">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info reveal">
                        <h2>Let's build something great together</h2>
                        <p className="contact-desc">
                            Ready to start your project? Tell us about your goals and we'll help you achieve them.
                        </p>

                        <div className="contact-methods">
                            <div className="method">
                                <span className="icon">📧</span>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>hello@techbymax.com</p>
                                </div>
                            </div>
                            <div className="method">
                                <span className="icon">📱</span>
                                <div>
                                    <h4>WhatsApp / Call</h4>
                                    <p>+233 24 000 0000</p>
                                </div>
                            </div>
                            <div className="method">
                                <span className="icon">📍</span>
                                <div>
                                    <h4>Location</h4>
                                    <p>Accra, Ghana (Remote Friendly)</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links mt-4">
                            {/* Social icons */}
                        </div>
                    </div>

                    <div className="contact-form-wrapper glass-panel reveal reveal-stagger-2">
                        <h3>Tell us about your project</h3>
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Service Interested In</label>
                                <select>
                                    <option>Website Development</option>
                                    <option>E-Commerce</option>
                                    <option>Web Application</option>
                                    <option>Maintenance</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="Project details..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
