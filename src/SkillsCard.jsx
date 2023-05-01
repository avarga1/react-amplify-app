import React, { useState } from 'react';
import './SkillsCard.css';

const SkillsCard = ({ visible }) => {
  const [activeList, setActiveList] = useState(null);
  const cardClass = visible ? 'skills-card visible' : 'skills-card';

  const handleListClick = (list) => {
    if (activeList === list) {
      setActiveList(null);
    } else {
      setActiveList(list);
    }
  };

  return (
    <div className={cardClass}>
      <h2>Skills</h2>
      { /* Add a key to each div to avoid rendering issues */ }
      <div className="skill-header" onClick={() => handleListClick("prog-langs")} key="prog-langs">
        <h4>Programming Languages</h4>
      </div>
      <div className={`skill-list ${activeList === "prog-langs" ? "active" : ""}`}>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>C</li>
        </ul>
      </div>

      <div className="skill-header" onClick={() => handleListClick("web-dev")}>
        <h4>Web Development</h4>
      </div>
      <div className={`skill-list ${activeList === "web-dev" ? "active" : ""}`}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JSX</li>
          <li>ReactJS</li>
          <li>Django</li>
          <li>Flask</li>
        </ul>
      </div>

      <div className="skill-header" onClick={() => handleListClick("databases")}>
        <h4>Databases</h4>
      </div>
      <div className={`skill-list ${activeList === "databases" ? "active" : ""}`}>
        <ul>
          <li>SQL</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
        </ul>
      </div>

      <div className="skill-header" onClick={() => handleListClick("ml-ai")}>
        <h4>Machine Learning and AI</h4>
      </div>
      <div className={`skill-list ${activeList === "ml-ai" ? "active" : ""}`}>
        <ul>
          <li>TensorFlow</li>
          <li>Keras</li>
          <li>PyTorch</li>
          <li>Scikit-learn</li>
          <li>OpenCV</li>
          <li>Azure AutoML</li>
        </ul>
      </div>

      <div className="skill-header" onClick={() => handleListClick("devops")}>
        <h4>DevOps</h4>
      </div>
      <div className={`skill-list ${activeList === "devops" ? "active" : ""}`}>
        <ul>
          <li>Git</li>
          <li>CLI</li>
          <li>Bash</li>
          <li>CMD</li>
          <li>PowerShell</li>
          <li>Docker</li>
          <li>Ubuntu</li>
          <li>Oracle VM</li>
        </ul>
      </div>

      <div className="skill-header" onClick={() => handleListClick("soft-skills")}>
        <h4>Soft Skills</h4>
      </div>
      <div className={`skill-list ${activeList === "soft-skills" ? "active" : ""}`}>
        <ul>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Problem-solving</li>
          <li>Adaptability</li>
          <li>Attention to detail</li>
          <li>Ability to self teach</li>
          <li>Self-reliant and resourceful</li>
        </ul>
      </div>
</div>


  );
};

export default SkillsCard;

