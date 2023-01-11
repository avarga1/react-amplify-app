import './Global.css';
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Landing from './Landing';
import Contact from './Contact';
import BlankSpace from './BlankSpace';

// import your css file here

function App() {
  return (
    <div className="gray-bg">  
        <Header/>
        <Main />
        <Sidebar />
        <div id="home">
            <Landing />
        </div>
            <div id="about">
            {/* Your "About" component goes here */}
        </div>  
            <div id="projects">
            {/* Your "Projects" component goes here */}
        </div>
            <BlankSpace height="350px" />
            <div id="contact">
        <Contact />
        </div>
                
    </div>
  );
}

export default App;
