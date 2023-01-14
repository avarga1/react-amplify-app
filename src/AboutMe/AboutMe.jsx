import React from "react";  
import "./AboutMe.css";


const AboutMe = () => {
    return (
        <div className="about-me">
        <div className="about-me-container">
            <div className="about-me-title">
            <h1>About Me</h1>
            </div>
            <div className="about-me-text">
                <p>
                Hi, I'm Austin. I am a software developer based in Calgary Alberta,
                I specialize in front end development, with a focus on ReactJS.
                While this is my main focus, I am also comfortable with back end and 
                full stack development. My other interests include machine learning,
                data science, mobile development, and game development. 
                Below are some examples of my work, as well as some of my skills.
                Thanks for visiting!
                </p>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;