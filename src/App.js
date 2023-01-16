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

        <NavBar />
        <div id="home"></div>
        
        <Logo />
        <div id="about"></div>
        <Header />
        <AboutMe />  
       
        <div id="projects"></div>
        <Portfolio/>   

        <Skills/>
 
        <Contact/>
        <div id="contact"></div>
    </div>
  );
}


/*
        <div className="hexagons-container" style={{pointerEvents: "none"}}>
            <HexBG />
        </div>
        <BlankSpace height={100} />
*/


export default App;
