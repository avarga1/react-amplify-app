import React, { useState } from 'react';
import './Skills.css';

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories] = useState([
        {
          name: "Programming Languages",
          skills: [
            { name: "JavaScript", logo: "fab fa-js-square" },
            { name: "PHP", logo: "fab fa-php" },
            { name: "C", logo: "fab fa-windows" },
            { name: "Python", logo: "fab fa-python" },
            { name: "MQL4", logo: "" }
          ]
        },
    {
      name: "Web Development",
      skills: [
        { name: "HTML", logo: "fab fa-html5" },
        { name: "CSS", logo: "fab fa-css3-alt" },
        { name: "SCSS", logo: "fab fa-sass" },
        { name: "JSX", logo: "fab fa-react" },
        { name: "Bootstrap", logo: "fab fa-bootstrap" },
        { name: "React.js", logo: "fab fa-react" },
        { name: "Node.js", logo: "fab fa-node-js" }
      ]
    },
    {
      name: "DevOps",
      skills: [
        { name: "GitHub", logo: "fab fa-github" },
        { name: "Git", logo: "fab fa-git-alt" },
        { name: "Version Control", logo: "fas fa-code-branch" },
        { name: "Ubuntu", logo: "fab fa-ubuntu" },
        { name: "Windows", logo: "fab fa-windows" },
        { name: "AWS Amplify", logo: "fab fa-aws" },
        { name: "AWS S3", logo: "fab fa-aws" },
        { name: "AWS CloudFront", logo: "fab fa-aws" },
        { name: "AWS Route53", logo: "fab fa-aws" },
        { name: "AWS EC2", logo: "fab fa-aws" },
        { name: "AWS Lambda", logo: "fab fa-aws" },
        { name: "AWS EC3", logo: "fab fa-aws" },
        { name: "AWS Canaary", logo: "fab fa-aws" },
      ]
    },
    {
        name: "Machine Learning and Data Science",
        skills: [
            { name: "NumPy", logo: "fab fa-python" },
            { name: "Pandas", logo: "fab fa-python" },
            { name: "Matplotlib", logo: "fab fa-python" },

            { name: "Seaborn", logo: "fab fa-python" },
            { name: "Scikit-Learn", logo: "fab fa-python" },
            { name: "TensorFlow", logo: "fab fa-python" },
            { name: "Keras", logo: "fab fa-python" },
            { name: "NLTK", logo: "fab fa-python" },
            { name: "OpenCV", logo: "fab fa-python" },
            { name: "Seaborn", logo: "fab fa-python" },
            { name: "Scikit-Learn", logo: "fab fa-python" },
            { name: "TensorFlow", logo: "fab fa-python" },
            { name: "Keras", logo: "fab fa-python" },
            { name: "PyTorch", logo: "fab fa-python" },
            { name: "NLTK", logo: "fab fa-python" },
            { name: "OpenCV", logo: "fab fa-python" },
            { name: "SciPy", logo: "fab fa-python" }
          ]
        }
      ]);
    
      return (
        <div className="skills-wrapper">
            <h1>Skills:</h1>
            <div className="skills-categories-container">
                {categories.map((category, index) => (
                    <div key={index} className={`category-container ${selectedCategory === category && 'active'}`} onClick={() => setSelectedCategory(category)}>
                        <div className={`category-name ${selectedCategory === category && 'active'}`}>{category.name}</div>
                        {selectedCategory === category && selectedCategory !== null && (
                            <ul className="category-list">
                                {category.skills.map((skill, index) => (
                                    <li key={index}>
                                        {skill.logo !== "" && <i className={`${skill.logo} skill-logo`}></i>}
                                        <span>{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
    
    
}

export default Skills;