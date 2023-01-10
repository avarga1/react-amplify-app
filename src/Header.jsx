import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
      <a href="https://github.com/avarga1" target="_blank"><i className="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/austin-varga-2611b9259/" target="_blank"><i className="fab fa-linkedin"></i></a>
      <a href="#home" target="_blank"><i className="fab fa-youtube"></i></a>
      <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>

      </div>
      
      <nav>
        <ul>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;