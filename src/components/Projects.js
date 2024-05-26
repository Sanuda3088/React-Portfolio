import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">
        Pro<span className="highlight">Ject</span>
      </h1>
      <div className="projects-grid">
        <div className="project-item">
          <img src="/images/pp1.jpg" alt="portfolio" className="project-image" />
        </div>
        <div className="project-item">
          <img src="/images/p5.jpg" alt="portfolio" className="project-image" />
        </div>
        <div className="project-item">
          <img src="/images/p4.jpg" alt="portfolio" className="project-image" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
