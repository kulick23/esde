import React from 'react';
import './about.css';
import photo1 from '../../Assets/Img/photo1.webp';
import webDevelopmentIcon from '../../Assets/Icons/web_development.svg';
import gameIcon from '../../Assets/Icons/design.svg';
import backIcon from '../../Assets/Icons/Developer.svg';

const About: React.FC = () => {
  return (
    <section id="about">
      <img src={photo1} alt="Team member" className="about__photo" />
      <div className="about__info">
        <h3 className="text-with-circle">About us</h3>
        <h2>Specialty Description</h2>
        <div className="horizontal-bar"></div>
        <div className="line"></div>
        <p>EPAM School of Digital Engineering (ESDE) is an experimental division of EPAM in which bachelor’s and master’s degree programs are offered in partnership with traditional universities or new types of educational institutions. Similar projects are already operating in Ukraine, Poland, Uzbekistan, and other countries. ESDE opened in Lithuania in partnership with the European Humanities University in 2022. Beginning with the first semester, students can choose one of three specializations – Java EE, .Net, or JavaScript/TypeScript.</p>
        <div className="about__blocks">
          <div className="about__block">
            <div className="about__icon">
              <div className="text-with-circle"></div>
              <img src={webDevelopmentIcon} alt="Web development" />
            </div>
            <div className="about__icon--text">
              <h4>JavaScript/TypeScript</h4>
              <small>front-end development </small>
            </div>
          </div>
          <div className="about__block">
            <div className="about__icon">
              <div className="text-with-circle"></div>
              <img className="about__icon" src={backIcon} alt="Back development" />
            </div>
            <div className="about__icon--text">
              <h4>Java EE</h4>
              <small>back-end development </small>
            </div>
          </div>
          <div className="about__block">
            <div className="about__icon">
              <div className="text-with-circle"></div>
              <img className="about__icon" src={gameIcon} alt="Design" />
            </div>
            <div className="about__icon--text">
              <h4>.Net</h4>
              <small>game development </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;