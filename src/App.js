import React from 'react';

import './App.css';
import AboutMe from './AboutMe/AboutMe';
import HexBG from './Background/Background.jsx';


function App() {
  return (
    <div>
      <div className='BG'>
        <HexBG />
      </div>
      <AboutMe/>        
    </div>
  );
}

export default App;
