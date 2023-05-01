import React from 'react';
import './PythonProjectsSelector.css';

const PythonProjectsSelector = ({ visible, onPythonProjectClick }) => {
  if (!visible) {
    return null;
  }

  const handleProjectClick = (projectNumber) => {
    onPythonProjectClick(projectNumber);
  };

  return (
    <div className="python-projects-selector">
      <h2>Select a Python Project</h2>
      <div className="python-projects-buttons">
        <button onClick={() => handleProjectClick(1)}>Project 1</button>
        <button onClick={() => handleProjectClick(2)}>Project 2</button>
        <button onClick={() => handleProjectClick(3)}>Project 3</button>
      </div>
    </div>
  );
  
};

export default PythonProjectsSelector;
