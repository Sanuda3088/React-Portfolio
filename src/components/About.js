import React from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'; // Adjust the path as necessary
import './About.css';

const About = () => {
    return (
        <div className="container" id='about'>
            <div className="content">
                <div className="text-content">
                    <h1 className="title">ABOUT ME</h1>
                    <h2 className="subtitle">
                        Transforming <span className="highlight">Visions</span>
                    </h2>
                    <div className="description-container">
                        <span className="divider"></span>
                        <p className="description">
                            Embark on a journey through seamless digital realms, where beauty meets functionality. With expertise in Flutter, React.js, Next.js, Firebase, and MongoDB, I breathe life into captivating user experiences as a passionate fullstack developer.
                        </p>
                    </div>
                    <button className="download-button">
                        <p>Download CV</p>
                        <ArrowDownTrayIcon className="downloadicon" />
                    </button>
                </div>
                <div className="image-container">
                    <img src='./images/about.jpg' alt="user" className="image" />
                    <div className="image-overlay"></div>
                </div>
            </div>
        </div>
    );
};

export default About;
