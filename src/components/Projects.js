import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container" id='projects'>
      <h1 className="projects-heading">
        Pro<span className="highlight">Jects</span>
      </h1>
      <div className="projects-grid">
        <div className="project-item">
          <img src="/images/pp1.jpg" alt="portfolio" className="project-image" />
        </div>
        <div className="project-item">
          <img src="/images/SGP.jpg" alt="portfolio" className="project-image" />
        </div>
        <div className="project-item">
          <img src="/images/coffeehouse.jpg" alt="portfolio" className="project-image" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
