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
import Contact from './Footer/Contact';


function App() {
  return (
    <div className="app-container">
        <div className="hexagons-container" style={{pointerEvents: "none"}}>
            <HexBG />
        </div>
        <NavBar />
        <div id="home"></div>
        <BlankSpace height={100} />
        <Logo />
        <div id="about"></div>
        <Header />
        <AboutMe />  
        <BlankSpace height={100} />
        <div id="projects"></div>
        <Portfolio/>   
        <BlankSpace height={300} />
        <Skills/>
        <BlankSpace height={900} />
        <Contact/>
        <div id="contact"></div>
    </div>
  );
}


export default App;
