import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Rebrand",
            category: "E-Commerce",
            desc: "Complete overhaul of an online store increasing conversion by 40%.",
            image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "FinTech Dashboard",
            category: "Web Application",
            desc: "Secure and real-time financial tracking dashboard for a local startup.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Corporate Identity",
            category: "Website Development",
            desc: "Modern corporate website for a leading consulting firm in Accra.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Real Estate Portal",
            category: "Web App",
            desc: "Property listing platform with advanced filtering and map integration.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <section id="portfolio" className="projects section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our Work</h2>
                    <p>We build digital solutions that deliver real results.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className={`project-card reveal reveal-stagger-${index + 1}`} key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <span className="project-cat">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4 reveal">
                    <a href="#contact" className="btn btn-secondary">Start Your Project</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
