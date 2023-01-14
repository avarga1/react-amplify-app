import React from 'react';
import portfolioData from './data';
import './Mobile.css';

function MobilePortfolio() {
  return (

    <div className="mobile-portfolio-container">
      {portfolioData.map((site, index) => (
        <div className="mobile-portfolio-item" key={index}>
          <div className="mobile-portfolio-iframe-container">
              <div className="mobile-portfolio-iframe-bg"></div>
            <iframe src={site.url} title={site.name + " Site"}></iframe>
            <div className="mobile-portfolio-item-title">
              <h1>{site.title}</h1>
            </div>
            <div className="mobile-portfolio-item-description">
              <p>{site.description}</p>
            </div>
            <div className="mobile-portfolio-item-button">
              <a href={site.url} target="_blank">Open in new tab</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MobilePortfolio;
