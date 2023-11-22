import React from 'react';
import s from './News.module.css'
import News_element from './News_elements/News_element';

const News = (props) => {

    let NewsItem = props.state.news.map(p => <News_element img={p.img} id={p.id} date={p.date} name={p.name} />)



    return (
        <div>
            <div className={s.text}>News from EHU ESDE</div>
            <hr></hr>
            <div className={s.news}>{NewsItem}</div>


        </div>
    )
}

export default News;
