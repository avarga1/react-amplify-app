import React, { useState } from 'react';
import './InterestsCard.css';

const InterestsCard = ({ visible }) => {
  const [activeList, setActiveList] = useState(null);
  const cardClass = visible ? 'interests-card visible' : 'interests-card';

  const handleListClick = (list) => {
    if (activeList === list) {
      setActiveList(null);
    } else {
      setActiveList(list);
    }
  };

  return (
    <div className={cardClass}>
      <h2>Interests</h2>

      <div className="interest-header" onClick={() => handleListClick('outdoor-sports')}>
        <h4>Outdoor Sports and Activities:</h4>
      </div>
      <div className={`interest-list ${activeList === 'outdoor-sports' ? 'active' : ''}`}>
        <ul>
          <li>Hiking</li>
          <li>Mountain biking</li>
          <li>Snowboarding</li>
          <li>Archery</li>
          <li>Fly fishing</li>
          <li>Hockey</li>
          <li>Football</li>
          <li>Jiu jitsu</li>
        </ul>
      </div>

      <div className="interest-header" onClick={() => handleListClick('arts-crafts')}>
        <h4>Hobbies:</h4>
      </div>
      <div className={`interest-list ${activeList === 'arts-crafts' ? 'active' : ''}`}>
        <ul>
          <li>Woodworking</li>
          <li>Sketching</li>
        </ul>
      </div>

      <div className="interest-header" onClick={() => handleListClick('tech-computing')}>
        <h4>Technology and Computing:</h4>
      </div>
      <div className={`interest-list ${activeList === 'tech-computing' ? 'active' : ''}`}>
        <ul>
          <li>Home automation IoT</li>
          <li>Ethical hacking</li>
          <li>Day-trading</li>
          <li>Blockchain</li>
          <li>Web3</li>
          <li>Crypto</li>
          <li>Crypto mining</li>
        </ul>
      </div>
    </div>
  );
};

export default InterestsCard;
