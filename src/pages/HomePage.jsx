import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';

import Introduction from '../components/Introduction';

function HomePage() {
    // Simple SEO setup & Scroll Animations
    useEffect(() => {
        // Force scroll to top on load
        window.scrollTo(0, 0);
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        document.title = "TechByMax | High-Performance Digital Solutions";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'TechByMax: Custom websites, web apps & digital solutions for businesses ready to scale in Ghana and beyond.');
        }

        // Scroll Animation Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach((el) => observer.observe(el));

        return () => reveals.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Introduction />
                <Features />
                <Services />
                <Projects />
                <About />
                <Team />
                <Process />
                <Testimonials />
                <Pricing />
                <FAQ />
                <Blog />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default HomePage;
