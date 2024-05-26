import React from 'react';
import SkillsLanguage from './SkillsLanguage';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-heading">
        Education & <span className="highlight">Skills</span>
      </h1>
      <div className="skills-grid">
        <div>
          <SkillsLanguage 
            skill1="Html"
            skill2="CSS"
            skill3="JavaScript"
            skill4="React Js"
            skill5="Next Js"
            level1="90%"
            level2="80%"
            level3="85%"
            level4="80%"
            level5="75%"
          />
        </div>
        <div>
          <SkillsLanguage 
            skill1="Flutter"
            skill2="Dart"
            skill3="Java"
            skill4="TypeScript"
            skill5="Python"
            level1="90%"
            level2="80%"
            level3="85%"
            level4="80%"
            level5="75%"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
