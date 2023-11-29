import React from 'react';
import s from './News_element.module.css'
import { NavLink } from 'react-router-dom';
const News_element = (props) => {
    const handleRemove = () => {
        props.removeNews(props.id)
    };
    return (
        <div className={s.desc}>
            <div className={s.item}> <img src={props.img} /> </div>
            <div className={s.text}>
                {props.name}
                <div>{props.date}</div>
            </div>
            <NavLink to={'/news/' + props.id} className={s.border}>Read</NavLink>
            <button onClick={handleRemove}>Remove</button>
           
        </div>
    )
}
export default News_element;
