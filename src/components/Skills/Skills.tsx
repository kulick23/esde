//// filepath: /c:/Users/Danila/Desktop/esde/src/components/Skills.tsx
import React from 'react';
import './skills.css';
import html5Icon from '../../Assets/Icons/html5.svg';
import css3Icon from '../../Assets/Icons/css3.svg';
import jsIcon from '../../Assets/Icons/JS.svg';
import jqueryIcon from '../../Assets/Icons/Jquery.svg';
import reactIcon from '../../Assets/Icons/React.svg';
import nodejsIcon from '../../Assets/Icons/Node.js.svg';
import mongodbIcon from '../../Assets/Icons/Mongo.db.svg';

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <h3 className="text-centre-circle">Навыки</h3>
      <h2>Что я использую в работе</h2>
      <div className="horizontal-bar line-centered"></div>
      <div className="skills__container">
        <div className="skill">
          <img src={html5Icon} alt="HTML5" />
          <h4>HTML5</h4>
          <small>Именно он создает каркас вашего сайта или приложения, а пятая версия позволит мне создавать более SEO-оптимизированную структуру вашего продукта</small>
        </div>
        <div className="skill">
          <img src={css3Icon} alt="CSS3" />
          <h4>CSS3</h4>
          <small>Этот язык стилей позволяет мне создавать абсолютно любой внешний вид вашего сайта или приложения. Все ограничивается только вашей фантазией!</small>
        </div>
        <div className="skill">
          <img src={jsIcon} alt="JavaScript" />
          <h4>JavaScript</h4>
          <small>Этот язык программирования позволяет оживить все что угодно: слайдеры, окна, подсказки, вкладки, получение данных от сервера и многое другое</small>
        </div>
        <div className="skill">
          <img src={jqueryIcon} alt="jQuery" />
          <h4>jQuery</h4>
          <small>Библиотека Jquery позволит ускорить разработку. Без необходимости интегрировать в проект мы её не будем, но навык работы с ней присутствует</small>
        </div>
        <div className="skill">
          <img src={reactIcon} alt="React" />
          <h4>React</h4>
          <small>Эта библиотека позволяет создавать web-приложения. Мы можем создать максимально интерактивный продукт именно под ваши цели</small>
        </div>
        <div className="skill">
          <img src={nodejsIcon} alt="Node.js" />
          <h4>Node.js</h4>
          <small>Эта платформа позволяет создавать бэкенд для вашего продукта - “мозги”, которые будут выполнять действия, которые пользователь не видит</small>
        </div>
        <div className="skill">
          <img src={mongodbIcon} alt="MongoDB" />
          <h4>MongoDB</h4>
          <small>Это нереляционная база данных, которая будет хранить данные вашего сайта или приложения</small>
        </div>
      </div>
      <div className="skills__progress">
        <div className="skills__bars">
          <h4 className="text-with-circle">Создание сайтов <span className="skills__percentage">100%</span></h4>
          <div className="skill__bar"><span style={{ width: '100%' }}></span></div>
        </div>
        <div className="skills__bars">
          <h4 className="text-with-circle">Создание приложений <span className="skills__percentage">85%</span></h4>
          <div className="skill__bar"><span style={{ width: '85%' }}></span></div>
        </div>
        <div className="skills__bars">
          <h4 className="text-with-circle">Работа с данными <span className="skills__percentage">90%</span></h4>
          <div className="skill__bar"><span style={{ width: '90%' }}></span></div>
        </div>
        <div className="skills__bars">
          <h4 className="text-with-circle">Креативность <span className="skills__percentage">70%</span></h4>
          <div className="skill__bar"><span style={{ width: '70%' }}></span></div>
        </div>
        <div className="skills__bars">
          <h4 className="text-with-circle">Создание дизайна <span className="skills__percentage">90%</span></h4>
          <div className="skill__bar"><span style={{ width: '90%' }}></span></div>
        </div>
        <div className="skills__bars">
          <h4 className="text-with-circle">Soft skills <span className="skills__percentage">95%</span></h4>
          <div className="skill__bar"><span style={{ width: '95%' }}></span></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;