import React from 'react';
import './EducationCard.css';

const EducationCard = ({ visible }) => {
    const cardClass = visible ? 'education-card visible' : 'education-card';
  
    return (
      <div className={cardClass}>
        <div className="text-container">
        <h2>Courses/Certificates:</h2>
        <h3>Data Science</h3>
        <ul>
          <li>Neural Networks and Deep Learning - Coursera</li>  
          <li>Introduction to Tensorflow for Artificial Intelligence - Coursera</li> 
          <li>Deep Learning and Computer Vision A-Z - Udemy</li>
          <li>Algorithmic Trading & Quantitative Analysis with Python - Udemy</li>
        </ul>
        <h3>Web Development</h3>
        <ul>
          <li>Introduction to Front-End Development - Coursera</li>
          <li>HTML and CSS in depth - Coursera</li>
          <li>React Basics - Coursera</li>
          <li>Advanced React - Coursera</li>
          <li>Programming with JavaScript - Coursera</li>
          <li>Git Version Control - Coursera</li>      
        </ul>
        <h3>Other</h3>
        <ul>
          <li>CS50 Introduction to Computer Science - Harvard-X</li>
          <li>CS50 Introduction to Artificial Intelligence with Python - Harvard-X</li>
          <li>CS50 Introduction to Programming with Python - Harvard-X</li>
          <li>Learn to Code in Python 3 - Udemy</li>
          <li>Learn Python Programming Masterclass - Udemy</li>
          <li>Blockchain A-Z - Udemy</li>
        
        </ul>

      </div>
      </div>
    );
  };

export default EducationCard;
