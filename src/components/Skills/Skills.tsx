import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import './skills.css';

const Skills: React.FC = () => {
  const [category, setCategory] = useState<
    'skillsFront' | 'skillsBack' | 'skillsGame'
  >('skillsFront');
  const skills = useSelector((state: RootState) => state.skills[category]);

  return (
    <section id="skills">
      <h3 className="text-centre-circle">Skills</h3>
      <h2>Skills you will learn</h2>
      <div className="horizontal-bar line-centered"></div>
      <div className="skills__buttons">
        <button
          className={category === 'skillsFront' ? '' : 'button__opacity'}
          onClick={() => setCategory('skillsFront')}
        >
          JS/TS
        </button>
        <button
          className={category === 'skillsBack' ? '' : 'button__opacity'}
          onClick={() => setCategory('skillsBack')}
        >
          Java EE
        </button>
        <button
          className={category === 'skillsGame' ? '' : 'button__opacity'}
          onClick={() => setCategory('skillsGame')}
        >
          .Net
        </button>
      </div>
      <div className="skills__container">
        {skills.map((skill) => (
          <div className="skill" key={skill.id}>
            <img src={skill.icon} alt={skill.name} />
            <h4>{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
