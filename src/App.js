import React from 'react';
import './App.css';
import AboutMe from './AboutMe/AboutMe';
import BlankSpace from './BlankSpace';
import Header from './Header/Header';
import HexBG from './Background/Background.jsx';
import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';
import Portfolio from './Portfolio/index.js';
import Skills from './Skills/Skills';

function App() {
  return (
    <div>
      <div className='BG'>
      <HexBG />
      </div>
      <BlankSpace height={100} />
      <Logo />
      <Header />
      <AboutMe/>  
      <Portfolio/>   
      <Skills/>
      <BlankSpace height={900} />
  
    </div>
  );
}

export default App;
