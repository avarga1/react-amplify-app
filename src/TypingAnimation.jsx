import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text, speed = 100, className = '' }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        setVisibleText(visibleText + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{visibleText}</span>;
};

export default TypingAnimation;
