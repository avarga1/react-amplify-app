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
                Thanks for visiting! <br></br> <br></br>
                * Please note this site is in development, and is not yet fully responsive.
                The following issues are known, and will be addressed in the next release: <br></br>
                - Mobile layout is not yet fully optimized so site is best viewed on desktop. <br></br>
                - Backend is not yet fully implemented, so contact form is not yet functional. <br></br>
                </p>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;