import React from 'react';
import './SkillsLanguage.css';

const SkillsLanguage = ({ skill1, skill2, skill3, skill4, skill5, level1, level2, level3, level4, level5 }) => {
  return (
    <div>
      <div className="skill-container">
        <h1 className="skill-title">{skill1}</h1>
        <span className="skill-level" style={{ width: level1 }}></span>
      </div>

      <div className="skill-container">
        <h1 className="skill-title">{skill2}</h1>
        <span className="skill-level" style={{ width: level2 }}></span>
      </div>

      <div className="skill-container">
        <h1 className="skill-title">{skill3}</h1>
        <span className="skill-level" style={{ width: level3 }}></span>
      </div>

      <div className="skill-container">
        <h1 className="skill-title">{skill4}</h1>
        <span className="skill-level" style={{ width: level4 }}></span>
      </div>

      <div className="skill-container">
        <h1 className="skill-title">{skill5}</h1>
        <span className="skill-level" style={{ width: level5 }}></span>
      </div>
    </div>
  );
};

export default SkillsLanguage;
