
import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [welcomeText, setWelcomeText] = useState('');
  const welcomeMessage = 'Welcome to My Portfolio';

  useEffect(() => {
    let timeoutId;

    const typeOutWelcomeMessage = (i = 0) => {
      if (i <= welcomeMessage.length) {
        setWelcomeText(welcomeMessage.substring(0, i));
        timeoutId = setTimeout(() => {
          typeOutWelcomeMessage(i + 1);
        }, 100);
      }
    };

    typeOutWelcomeMessage();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="sidebar">
      <h1 className="welcome-text">{welcomeText}</h1>
    </div>
  );
};

export default Sidebar;
