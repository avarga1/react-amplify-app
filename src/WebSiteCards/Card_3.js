import React from 'react';
import './WebsiteCard.css';

const WebsiteCard = ({ visible, title, url }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="website-card">
      <h2>{title}</h2>
      <iframe src={url} title={title} className="website-iframe"></iframe>
    </div>
  );
};

export default WebsiteCard;
