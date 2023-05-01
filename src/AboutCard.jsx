import React from 'react';
import './AboutCard.css';

const AboutCard = ({ visible }) => {
    const cardClass = visible ? 'about-card visible' : 'about-card';
  
    return (
      <div className={cardClass}>
        <h2>Hi,</h2>
        <h3>I'm Austin,</h3>
        <p>
          I am a self-taught software developer. I have worked in building automation and currently freelance in web development and python scripting.
        </p>
      </div>
    );
  };

export default AboutCard;
