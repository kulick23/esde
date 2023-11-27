import React from 'react';
import s from '../../Main/Main.module.css'

const SingleNewsPage = (props) => {
    return (
      <div className={s.main}>
      <div className={s.mainseco}>
          <div>
              <h1>{props.name}</h1>
              <p>{props.date}</p>
              <p>{props.desc}</p>
          </div>
          <img className={s.mainseco__img} src={props.img} />
      </div>
          <p>{props.text}</p>
  </div>

    );
  };
  
  export default SingleNewsPage;

 