import React from 'react';
import SingleNewsPage from './News_in_component';

const News_in = (props) => {
    let currentURL = window.location.href;
    let lastPartOfURL = currentURL.substring(currentURL.lastIndexOf('/') + 1);
    let currentID = parseInt(lastPartOfURL);
    let filteredNews = props.state.news.filter(p => p.id === currentID);
    let NewsItem = filteredNews.map(p => <SingleNewsPage key={p.id} img={p.img} id={p.id} date={p.date} name={p.name} desc={p.desc} text={p.text} />)

    return (
        <div>
            <div>{NewsItem}</div>
        </div>
    )
}

export default News_in;

