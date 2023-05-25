import React from 'react';
import './AboutCard.css';

const AboutCard = ({ visible }) => {
  const cardClass = visible ? 'about-card visible' : 'about-card';

  return (
    <div className={cardClass}>
      <h2>Hi,</h2>
      <h3>I'm Austin,</h3>
      <p>
        Welcome to my website! I'm Austin, a dedicated machine learning engineer and software developer passionate about data science, problem solving, and machine learning. With a strong track record in various industries, I bring extensive expertise and a versatile skill set to each project.
        <br /><br />
        Throughout my career, I've successfully tackled diverse challenges. For instance, I've applied advanced machine learning techniques to optimize energy efficiency in commercial buildings and developed effective trading strategies for commodities and currency markets.
        <br /><br />
        My contributions extend beyond finance and trading. I've also leveraged machine learning algorithms to provide valuable insights and predictions in politics and finance, enhance fraud detection systems, bolster cybersecurity measures, and create efficient and secure web applications.
        <br /><br />
        As a co-founder of multiple companies and an experienced advisor, I've played an instrumental role in guiding teams towards success. I'm dedicated to constantly expanding my knowledge and seeking new opportunities to apply my skills in meaningful projects.
        <br /><br />
        In addition to machine learning, I possess a comprehensive understanding of various software engineering domains. This includes expertise in database design and optimization, API development, containerization using Docker, virtualization with VMs, and more.
        <br /><br />
        I'm enthusiastic about taking on new challenges and collaborating with fellow professionals who share my passion. If you're seeking an experienced machine learning engineer and software developer who can deliver exceptional results, I would be delighted to explore potential opportunities with you.
        <br /><br />
        Thank you for visiting my website, and I look forward to connecting with you soon.
        <br /><br />
        Austin
      </p>
    </div>
  );
};

export default AboutCard;
