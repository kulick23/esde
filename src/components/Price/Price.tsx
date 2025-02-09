//// filepath: /c:/Users/Danila/Desktop/esde/src/components/Price/Price.tsx
import React from 'react';
import './price.css';

const Price: React.FC = () => {
  return (
    <section id="price">
      <h3 className="text-centre-circle">Tuition for applicants per semester</h3>
      <div className="horizontal-bar line-centered"></div>
      <div className="price__list">
        <div className="price__column">
          <div className="price__item">
            <div className="price__text">
              <h4>Full-time</h4>
              <p>€1600</p>
            </div>
            <small>on campus</small>
          </div>
          <div className="price__item">
            <div className="price__text">
              <h4>Full-time</h4>
              <p>€1600</p>
            </div>
            <small>online</small>
          </div>
        </div>
        <div className="price__column">
          <div className="price__item">
            <div className="price__text">
              <h4>Part-time</h4>
              <p>€1400</p>
            </div>
            <small>sessional</small>
          </div>
   
        </div>
      </div>
    </section>
  );
};

export default Price;