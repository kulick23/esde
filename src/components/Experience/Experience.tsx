//// filepath: /c:/Users/Danila/Desktop/esde/src/components/Experience.tsx
import React from 'react';
import './experience.css';
import universityIcon from '../Assets/Icons/University.svg';
import coursesIcon from '../Assets/Icons/Courses.svg';
import developerIcon from '../Assets/Icons/Developer.svg';
import designerIcon from '../Assets/Icons/designer.svg';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <h3 className="text-centre-circle">Опыт</h3>
      <h2>Чем я буду полезна</h2>
      <div className="horizontal-bar line-centered"></div>
      <div className="experience__block">
        <div className="experience__column">
          <h3>Образование</h3>
          <div className="experience__timeline">
            <div className="experience__item">
              <div className="experience__content">
                <div className="experience__icons">
                  <div className="text-with-circle"></div>
                  <img src={universityIcon} alt="University" className="experience__icon" />
                </div>
                <div>
                  <h4>МГТУ им. Н. Э. Баумана</h4>
                  <small>Диплом магистра | Москва (2014-2020)</small>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="experience__item">
              <div className="experience__content">
                <div className="experience__icons">
                  <div className="text-with-circle"></div>
                  <img src={coursesIcon} alt="Courses" className="experience__icon" />
                </div>
                <div>
                  <h4>Udemy</h4>
                  <small>Курсы по Web-разработке</small>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div className="experience__column">
          <h3>Опыт работы</h3>
          <div className="experience__timeline">
            <div className="experience__item">
              <div className="experience__content">
                <div className="experience__icons">
                  <div className="text-with-circle"></div>
                  <img src={developerIcon} alt="Developer" className="experience__icon" />
                </div>
                <div>
                  <h4>Front-End Developer</h4>
                  <small>EPAM | Москва (2018–2019)</small>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="experience__item">
              <div className="experience__content">
                <div className="experience__icons">
                  <div className="text-with-circle"></div>
                  <img src={designerIcon} alt="Design" className="experience__icon" />
                </div>
                <div>
                  <h4>UI/UX Designer</h4>
                  <small>Squad Team | Москва (2018)</small>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;