import React from 'react';
import './PythonProjectsCard.css';

const PythonProjectCard = ({ visible, title, technologies, github, videoUrl }) => {
  const visibilityClass = visible ? 'visible' : 'hidden';
  return (
    <div className={`python-project-card card ${visibilityClass}`}>
      <div className="card-header">{title}</div>
      <div className="technologies">
        Technologies: {technologies.join(', ')}
      </div>
      <div className="github">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub Repository
        </a>
      </div>
      <div className="video-container">
        <iframe
          title={title}
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PythonProjectCard;
