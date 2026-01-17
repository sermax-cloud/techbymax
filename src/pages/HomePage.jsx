import { useEffect } from 'react';
import SEO from '../components/SEO';
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
    // Scroll Animations
    useEffect(() => {
        // Force scroll to top on load
        window.scrollTo(0, 0);
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Scroll Animation Observer

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
            <SEO
                title="TechByMax | High-Performance Digital Solutions"
                description="TechByMax: Custom websites, web apps & digital solutions for businesses ready to scale in Ghana and beyond."
                canonicalUrl="/"
            />
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
