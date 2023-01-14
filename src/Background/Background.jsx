import React from 'react';
import './Background.scss';

const Background = () => {
  return (
    <div className="hexagon-grid">
      {Array(100)
        .fill()
        .map((_, i) => (
          <div className="hexagon" key={i}>
            <div className="hexagon-line"></div>
          </div>
        ))}
    </div>
  );
};

export default Background;
