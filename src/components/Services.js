import React from 'react';
import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <p className="services-heading">My
                <span className="highlight">Services</span>
            </p>
            <div className="services-grid">
                <div className="service-card service-card-red">
                    <CodeBracketSquareIcon className="service-icon" />
                    <h1 className="service-title">Mobile Dev</h1>
                    <p className="service-description">
                        Mobile development is my passion and expertise. With Flutter as my primary tool, I craft stunning, high-performance applications that run seamlessly across both iOS and Android platforms.
                    </p>
                </div>
                <div className="service-card service-card-orange">
                    <RocketLaunchIcon className="service-icon" />
                    <h1 className="service-title">Web Dev</h1>
                    <p className="service-description">
                        Web development is where I bring ideas to life on the digital frontier. Using React.js and Next.js, I sculpt dynamic and responsive web applications that empower businesses and individuals alike.
                    </p>
                </div>
                <div className="service-card service-card-blue">
                    <CommandLineIcon className="service-icon" />
                    <h1 className="service-title">Fullstack</h1>
                    <p className="service-description">
                        As a fullstack developer, I excel in the dynamic convergence of front-end, back-end, and database technologies. I craft comprehensive solutions that transcend conventional boundaries.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
