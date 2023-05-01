// WebDevProjectsCard.js
import React from 'react';
import './ProjectCards.css';

const WebDevProjectsCard = ({ visible }) => {
  return (
    <div className={`project-card ${visible ? 'active' : ''}`}>
      <h2>Web Development Projects</h2>
      <button>Site 1</button>
      <button>Site 2</button>
      <button>Site 3</button>
    </div>
  );
};

export default WebDevProjectsCard;
