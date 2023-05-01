import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import AboutCard from './AboutCard';
import EducationCard from './EducationCard';
import SkillsCard from './SkillsCard';
import InterestsCard from './InterestsCard';
import PythonProjectsCard from './PythonProjectsCard';
import WebProjectsCard from './WebProjectsCard';
import WebsiteCard from './WebsiteCard';
import PythonProjectCard from './PythonProjectsCard';
import PythonProjectsSelector from './PythonProjectsSelector';

const Navbar = () => {
  const [aboutCardVisible, setAboutCardVisible] = useState(false);
  const [educationCardVisible, setEducationCardVisible] = useState(false);
  const [skillsCardVisible, setSkillsCardVisible] = useState(false);
  const [interestsCardVisible, setInterestsCardVisible] = useState(false);
  const [pythonProjectsCardVisible, setPythonProjectsCardVisible] = useState(false);
  const [webProjectsCardVisible, setWebProjectsCardVisible] = useState(false);
  const [selectedSite, setSelectedSite] = useState(null);
  const [selectedPythonProject, setSelectedPythonProject] = useState(null);

  const toggleAboutCard = () => {
    setAboutCardVisible(!aboutCardVisible);
    setEducationCardVisible(false);
    setSkillsCardVisible(false);
    setInterestsCardVisible(false);
    setPythonProjectsCardVisible(false);
    setWebProjectsCardVisible(false);
    setSelectedSite(null);
  };

  const toggleEducationCard = () => {
    setEducationCardVisible(!educationCardVisible);
    setAboutCardVisible(false);
    setSkillsCardVisible(false);
    setInterestsCardVisible(false);
    setPythonProjectsCardVisible(false);
    setWebProjectsCardVisible(false);
    setSelectedSite(null);
  };

  const toggleSkillsCard = () => {
    setSkillsCardVisible(!skillsCardVisible);
    setAboutCardVisible(false);
    setEducationCardVisible(false);
    setInterestsCardVisible(false);
    setPythonProjectsCardVisible(false);
    setWebProjectsCardVisible(false);
    setSelectedSite(null);
  };

  const toggleInterestsCard = () => {
    setInterestsCardVisible(!interestsCardVisible);
    setAboutCardVisible(false);
    setEducationCardVisible(false);
    setSkillsCardVisible(false);
    setPythonProjectsCardVisible(false);
    setWebProjectsCardVisible(false);
    setSelectedSite(null);
  };

  const togglePythonProjectsCard = () => {
    setPythonProjectsCardVisible(!pythonProjectsCardVisible);
    setAboutCardVisible(false);
    setEducationCardVisible(false);
    setSkillsCardVisible(false);
    setInterestsCardVisible(false);
    setWebProjectsCardVisible(false);
    setSelectedSite(null);
  };

  const toggleWebProjectsCard = () => {
    setWebProjectsCardVisible(!webProjectsCardVisible);
    setAboutCardVisible(false);
    setEducationCardVisible(false);
    setSkillsCardVisible(false);
    setInterestsCardVisible(false);
    setPythonProjectsCardVisible(false);
  };

  const showSite = (siteNumber) => {
    setSelectedSite(siteNumber);
  };

  const showPythonProject = (projectNumber) => {
    setSelectedPythonProject(projectNumber);
  };

  
  return (
    <>
      <div className="navbar">
        <div className="navbar-header">
          <div>Austin</div>
          <div>Varga</div>
        </div>
        <ul className="navbar-items">
          <li onClick={toggleAboutCard}>About Me</li>
          <li onClick={toggleEducationCard}>Education</li>
          <li onClick={toggleSkillsCard}>Skills</li>
          <li       onClick={toggleInterestsCard}>Interests</li>
      <li onClick={togglePythonProjectsCard}>Python Projects</li>
      <li onClick={toggleWebProjectsCard}>Web Development Projects</li>
    </ul>
    <div className="social-icons">
      <a href="https://github.com/your_username" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://linkedin.com/in/your_username" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </div>
  <AboutCard visible={aboutCardVisible} />
  <EducationCard visible={educationCardVisible} />
  <SkillsCard visible={skillsCardVisible} />
  <InterestsCard visible={interestsCardVisible} />
    <PythonProjectsSelector
    visible={pythonProjectsCardVisible}
    onPythonProjectClick={showPythonProject}
  />


  <WebProjectsCard
    visible={webProjectsCardVisible}
    onSelectSite={showSite}
  />
  <WebsiteCard
    visible={selectedSite === 1}
    title="Syndicate Wealth Group"
    url="https://www.syndicatewealthgroup.ca/"
  />
  <WebsiteCard
    visible={selectedSite === 2}
    title="Zen Lash Pro"
    url="https://www.zenlashpro.ca/"
  />
  <WebsiteCard
    visible={selectedSite === 3}
    title="Primal Canine"
    url="https://www.primalcanineraw.com/"
  />
  <PythonProjectCard
    visible={selectedPythonProject === 1 && pythonProjectsCardVisible}
    title="Project 1 - Web Scraping Financial Data"
    technologies={['Python 3', 'HTTP requests', 'Beautiful Soup', 'CSV', 'Pandas', 're', 'Multiprocessing', 'Subprocess']}
    github="https://github.com/avarga1/FBS-Scraper/tree/main"
    videoUrl="https://www.youtube.com/embed/I23JX7AIau8"
  />
  <PythonProjectCard
    visible={selectedPythonProject === 2 && pythonProjectsCardVisible}
    title="Project 2 - Some Title"
    technologies={['Python', 'Technology1', 'Technology2']}
    github="https://github.com/your_username/project2"
    videoUrl="https://www.youtube.com/embed/your_video_id"
  />
  <PythonProjectCard
    visible={selectedPythonProject === 3 && pythonProjectsCardVisible}
    title="Project 3 - Another Title"
    technologies={['Python', 'Technology3', 'Technology4']}
    github="https://github.com/your_username/project3"
    videoUrl="https://www.youtube.com/embed/your_video_id"
  />
</>


  );
};

export default Navbar;