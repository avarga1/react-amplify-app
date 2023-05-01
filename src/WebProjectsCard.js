import React from 'react';
import './WebProjectsCard.css';

const WebProjectsCard = ({ visible, onSelectSite }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="web-projects-card">
      <h2>Web Development Projects</h2>
      <div className="web-projects-buttons">
        <button onClick={() => onSelectSite(1)}>Site 1</button>
        <button onClick={() => onSelectSite(2)}>Site 2</button>
        <button onClick={() => onSelectSite(3)}>Site 3</button>
      </div>
    </div>
  );
};

export default WebProjectsCard;
