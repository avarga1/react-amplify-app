import React from 'react';
import portfolioData from './data';
import './Desktop.css';

function DesktopPortfolio() {
  return (
    <div className="portfolio-container">
      {portfolioData.map((site, index) => (

        <div className="portfolio-item" key={index}>
          <div className="portfolio-iframe-container">
            <iframe className="portfolio-iframe" src={site.url} title={site.name + " Site"}></iframe>
            <div className="portfolio-item-title">
              <h1>{site.title}</h1>
              <p>{site.description}</p>
            </div>
            <div className="portfolio-item-button">
   <a href={site.url} target="_blank" className="open-in-new-tab">Open in new tab</a>
 </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default DesktopPortfolio;
