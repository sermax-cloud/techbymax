import React from 'react';
import './Team.css';

// Import images directly
import maxwellImg from '../assets/team/Maxwell-Dela.jpg';
import princeImg from '../assets/team/Prince-Asare.jpg';
import eschImg from '../assets/team/Esch-Barnor.jpg';

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "Maxwell Dela",
            role: "Founder & Lead Engineer",
            image: maxwellImg,
            bio: "Visionary leader with a passion for scalable tech solutions."
        },
        {
            id: 2,
            name: "Prince Asare",
            role: "Project Manager",
            image: princeImg,
            bio: "Ensuring projects are delivered on time and exceed expectations."
        },
        {
            id: 3,
            name: "Esch Barnor",
            role: "Lead Designer",
            image: eschImg,
            bio: "Crafting intuitive and beautiful user experiences."
        }
    ];

    return (
        <section className="team section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Meet the Team</h2>
                    <p>The minds behind digital excellence.</p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className={`team-card reveal reveal-stagger-${index + 1}`} key={member.id}>
                            <div className="team-image-wrapper">
                                <img src={member.image} alt={member.name} className="team-image" loading="lazy" />
                            </div>
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <span className="team-role">{member.role}</span>
                                <p className="team-bio">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
