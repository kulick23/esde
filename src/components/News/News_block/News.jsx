import React from 'react';
import News_element from './News_element';

const News = (props) => {
    let currentURL = window.location.href;
    let lastPartOfURL = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    let currentID = parseInt(lastPartOfURL);
    let filteredNews = props.state.news.filter(p => p.id === currentID);
    let NewsItem = filteredNews.map(p => <News_element key={p.id} img={p.img} id={p.id} date={p.date} name={p.name} desc={p.desc} text={p.text} />)

    return (
        <div>
            <div>{NewsItem}</div>
        </div>
    )
}

export default News;

