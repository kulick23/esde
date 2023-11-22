import React from 'react';
import s from './News_element.module.css'

const News_element = (props) => {
    return (
        <div className={s.desc}>
            <div className={s.item}> <img src={props.img} /> </div>
            <div className={s.text}>
                {props.name}
                <div>{props.date}</div>
            </div>
            <button className={s.border}>Read</button>
        </div>
    )
}
export default News_element