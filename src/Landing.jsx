
import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./Landing.css";
import logo from "./assets/logo.png"; // import your logo image file
import BlankSpace from "./BlankSpace";



const Landing = () => {
  const [selectedIframe, setSelectedIframe] = React.useState(null);

  const handleMouseEnter = (index) => {
    setSelectedIframe(index);
  };

  const handleMouseLeave = () => {
    setSelectedIframe(null);
  };

  return (
    <div className="landing" id="about">
      
      <img src={logo} alt="logo" className="logo" />
      <h1 id="aboutMe"> About me </h1>
      <div className="landing-text">
      <p className="landing-text">
      Hi, my name is Austin and I am a full-stack web developer with a passion for solving problems with software. I have experience with a variety of technologies including Python, Javascript, C, HTML, CSS, React, and JSX. I am currently enrolled at Athabasca University in the Bachelor of Science in Computing and Information Systems degree, majoring in Computing Information Systems and minoring in Web Development.

Throughout my career, I have developed and maintained several operational websites, complete with features such as bookings, logins, and e-commerce. In addition to my web development skills, I have also written my own blockchain and programmed machine learning algorithms to profitably trade the forex markets. I am also in the process of developing a first person shooter game in Unity and have a strong interest in applying Python to hardware to automate tasks in my home.

In my spare time, I enjoy fishing, hockey, jiu jitsu, and reading. I am also a skilled user of Git version control and have studied UI/UX design. The website you are currently on was built by me using React and JSX, and you can check out all of the code on my GitHub repository. I have always been passionate about building things and turning ideas into reality, whether that be through my woodworking hobby or programming. I am a life-long learner and my biggest asset is my ability to teach myself anything I set my mind to. I am incredibly resourceful and am always able to break things down into their smallest pieces to achieve complicated feats that on their own seem daunting
      </p>
      </div>
      <BlankSpace height="150px" />
      <h1 id="aboutMe"> My Projects </h1>

      <CardGroup className="portfolio-cards">
        <div className="portfolio-cards" id="projects">
        <Card
          className={selectedIframe === 0 ? "selected" : ""}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <iframe
            src="https://www.zencleaningservicesyyc.com/"
            width="100%"
            height="100%"
            style={{ overflow: "scroll" }}
         
          />
          <Card.Body>
            <Card.Title id='P1header'>Zen Cleaning</Card.Title>
            <Card.Text id='P2text'>
              A site I built and maintain for a local cleaning company, The company had an existing site that had little to no UI/UX,
              I updated this and gave the site a more sleek and modern appearance while working closely with the own to ensure their style preference was met as well,
              3rd party booking system was embedded as well, allowing the company to offer online booking, resulting in a 30% bookin increase over the first 3 months.
            </Card.Text>
            <button id='buttonSite' onClick={() => window.open("https://www.zencleaningservicesyyc.com/", "_blank")}>
              Open site in new tab
            </button>
          </Card.Body>
        </Card>

        <Card
          className={selectedIframe === 1 ? "selected" : ""}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <iframe
            src="https://www.primalcanineraw.com/"
            width="100%"
            height="100%"
            style={{ overflow: "scroll" }}
          />
          <Card.Body>
            <Card.Title id='P1header'>Primal Canine</Card.Title>
            <Card.Text id='P2text'>
              An E-commerce site I built for my brick and mortar dog food company, My wife and I started this company 7 months ago, we have a Germand Shepherd,
              and we wanted to feed him the highest quality possible dog food, which was incredibly hard to source. So naturally we decided to fill the hole in the market and have
              been able to grow the company at steady and manageable rate, we are on track to do 80k in sales in our first year! The site allows customers to purchase dog food online,
              and we have a delivery service that delivers to the Calgary area. They can sign in and keep track of points and past purchases. It allows for a faitly hands off approach for both 
              the customers and us as the business owners.
            </Card.Text>
            <button id='buttonSite' onClick={() => window.open("https://www.primalcanineraw.com/", "_blank")}>
              Open site in new tab
            </button>
          </Card.Body>
        </Card>
        </div>
        <Card
          className={selectedIframe === 2 ? "selected" : ""}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <iframe
            src="https://austintvarga.wixsite.com/mysite"
            width="100%"
            height="100%"
            className={selectedIframe === 2 ? "selected scale-down" : ""}
            style={{ overflow: "scroll" }}
          />

          <Card.Body>
            <Card.Title id='P1header'>Syndicate Wealth Management</Card.Title>
            <Card.Text id='P2text'>
              A quick wix site thrown together for my investment fund company, just serving as a place holder, while I build a more permanent site. 
              While it is currently just a placeholder, the company is real and I am currently working on building a more permanent site within react, before 
              I launch the company, I am still adjusting some fine-tuning parameters within the model as well as adding some fail safes and live scraping. This will serve to 
              hedge against the possibility of an FTX type collapse taking any of the funds capital. Check back later for more info! 
              
            </Card.Text>
            <button id='buttonSite' onClick={() => window.open("https://austintvarga.wixsite.com/mysite", "_blank")}>
              Open site in new tab
            </button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Landing;
