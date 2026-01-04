import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    // Number format: 233 (Ghana code) + number without leading 0
    // Input: 02442943446 -> We remove the first 0 and prepend 233
    // Result: 2332442943446
    const phoneNumber = "2332442943446";
    const message = "Hello! I would like to inquire about your digital services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            className="floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <span className="whatsapp-tooltip">Chat with us!</span>
            <svg width="35" height="35" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.1 6.441 2.1 11.9c0 1.742.455 3.45 1.321 4.953L2 22l5.255-1.377a9.84 9.84 0 0 0 4.737 1.216h.005c5.46 0 9.892-4.439 9.892-9.896a9.814 9.814 0 0 0-2.888-7.035zM11.996 19.342h-.005a8.122 8.122 0 0 1-4.145-1.138l-.297-.177-3.079.809.822-3.006-.192-.307A8.106 8.106 0 0 1 3.758 11.9c0-4.544 3.69-8.24 8.242-8.24 2.2 0 4.27 1.861 5.826 3.42 1.551 1.558 2.406 3.626 2.405 5.827 0 4.543-3.694 8.235-8.235 8.235zm4.514-6.173c-.247-.124-1.463-.723-1.69-.806-.226-.082-.391-.123-.556.124-.165.247-.64.805-.783.97-.144.165-.289.185-.536.062-.247-.124-1.045-.385-1.99-1.23-1.48-1.322-.977-1.69-2.062-.165-.248.165-.371.329-.516.124-.103.185-.186.289-.309.082-.124.041-.227-.021-.351-.062-.124-.556-1.34-0.762-1.835-.201-.484-.405-.418-.556-.426-.145-.008-.309-.01-.474-.01-.165 0-.433.062-.659.309-.227.247-.866.845-.866 2.061 0 1.216.886 2.392 1.01 2.556.124.165 1.745 2.665 4.227 3.737 2.482 1.072 2.482.714 2.936.673.453-.041 1.463-.598 1.669-1.175.207-.577.207-1.072.145-1.175-.062-.103-.227-.165-.474-.289z" />
            </svg>
        </a>
    );
};

export default FloatingWhatsApp;
