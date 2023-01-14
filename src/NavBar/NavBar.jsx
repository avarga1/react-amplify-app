import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }));
    }

    render() {
        return (
            <div className="navbar">
                <div className="logo-container">
                    <a href="https://github.com/avarga1" target="_blank" rel='noreferrer'><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/austin-varga-2611b9259/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a>
                    <a href="#" className="toggle-button" onClick={this.toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </a>
                </div>
                <div className={this.state.menuOpen ? 'navbar-links open' : 'navbar-links'}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBar;
