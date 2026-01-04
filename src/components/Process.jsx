import React from 'react';
import './Process.css';

const Process = () => {
    const steps = [
        { num: '01', title: 'Discovery', desc: 'We understand your goals and requirements.' },
        { num: '02', title: 'Planning', desc: 'Strategy, structure, and timeline creation.' },
        { num: '03', title: 'Design', desc: 'Visual direction and user experience design.' },
        { num: '04', title: 'Development', desc: 'Coding your solution with clean, efficient code.' },
        { num: '05', title: 'Testing', desc: 'Rigorous quality assurance and performance checks.' },
        { num: '06', title: 'Launch', desc: 'Going live and providing ongoing support.' },
    ];

    return (
        <section id="process" className="process section-padding">
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2>Our Process</h2>
                    <p>A proven workflow to deliver excellence every time.</p>
                </div>

                <div className="process-flow">
                    {steps.map((step, index) => (
                        <div className={`process-step step-${index + 1} reveal reveal-stagger-${(index % 4) + 1}`} key={index}>
                            <div className="step-number">{step.num}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
