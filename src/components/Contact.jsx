import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            // In development, use direct localhost to match the server port. 
            // In production, use relative path so it uses the hosting domain.
            const apiUrl = import.meta.env.DEV
                ? 'http://localhost:3000/api/contact'
                : '/api/contact';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            let result;
            const contentType = response.headers.get("content-type");

            try {
                if (contentType && contentType.includes("application/json")) {
                    result = await response.json();
                } else {
                    const text = await response.text();
                    console.error("Non-JSON response:", text);
                    throw new Error(`Server returned non-JSON response: ${text.substring(0, 50)}...`);
                }
            } catch (parseError) {
                console.error("Error parsing JSON:", parseError);
                // Try to read text if json() failed (though json() reads the stream, so this might fail if body used. 
                // But fetch body can typically only be read once.
                // If json() fails mid-stream, we can't read it again. 
                // However, the error 'Unexpected token' usually happens at the start.
                throw new Error("Received invalid JSON from server. Check console for details.");
            }

            if (result.success) {
                console.log("Email sent successfully:", result.data);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            } else {
                console.error("Server Error:", result.error);
                throw new Error(result.error || "Failed to send email");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setStatus('error');
            setErrorMessage(error.message || "Failed to connect to the server. Make sure the backend is running.");
        }
    };

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
                                    <p>info@techbymax.com</p>
                                </div>
                            </div>
                            <div className="method">
                                <span className="icon">📱</span>
                                <div>
                                    <h4>WhatsApp / Call</h4>
                                    <p>+233 24 294 3446</p>
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
                        <form onSubmit={sendEmail} className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="user_name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="user_email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label>Service Interested In</label>
                                <select name="service">
                                    <option>Website Development</option>
                                    <option>E-Commerce</option>
                                    <option>Web Application</option>
                                    <option>Maintenance</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" rows="4" placeholder="Project details..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-full" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
                            {status === 'error' && <p className="error-msg">Failed to send: {errorMessage}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
