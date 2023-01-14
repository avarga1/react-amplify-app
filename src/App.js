
import React from 'react';
import './App.css';
import Header from './Header/Header';
import Contact from './Footer/Contact';
import NavBar from './NavBar/NavBar';
import BlankSpace from './BlankSpace';
import AboutMe from './AboutMe/AboutMe';
import Logo from './Logo/Logo';
import Background from './Background/Background';
import Portfolio from './Portfolio/index.js';
import SkillsList from './Skills/Skills';

function App() {
  return (
    <div className="gray-bg">  
        <Background />
        <NavBar />
        <Header />
        <Logo /> 
        <BlankSpace height="150px" />
        <AboutMe />
        <BlankSpace height="150px" />
        <h1 className="text-center">Projects: </h1>
        <Portfolio />
        <BlankSpace height="90vh" />
        <SkillsList />
        <BlankSpace height="850px" />
        <div id="contact">
            <Contact />
        </div>        
    </div>
  );
}

export default App

