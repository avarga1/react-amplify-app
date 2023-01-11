import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Landing from './Landing';
import Contact from './Contact';


import BlankSpace from './BlankSpace';

function App() {
  return (
    <div>  
        <Header/>
        <Main />
        <Sidebar />
        
        
        <Contact/>
    </div>
  );
}

export default App;
