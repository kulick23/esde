import React from 'react';
import s from '../../Main/Main.module.css'

const News_element = (props) => {
  return (
    <div className={s.main}>
      <div className={s.secondary}>
        <div>
          <h1>{props.name}</h1>
          <p>{props.date}</p>
          <p>{props.desc}</p>
        </div>
        <img src={props.img} />
      </div>
      <p>{props.text}</p>
    </div>

  );
};

export default News_element;

