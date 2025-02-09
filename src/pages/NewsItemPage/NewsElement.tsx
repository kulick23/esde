import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import './NewsElement.css';

const NewsElement: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const news = useSelector((state: RootState) => state.news.news);
  const newsItem = id ? news.find(item => item.id === parseInt(id)) : undefined;

  if (!newsItem) {
    return <div>News not found</div>;
  }

  return (
    <div className="NewsItemPage__main">
      <div className="NewsItemPage__secondary">
        <div>
          <h1>{newsItem.name}</h1>
          <div className="horizontal-bar"></div>
          <p>{newsItem.date}</p>
          <p>{newsItem.desc}</p>
        </div>
        <img src={newsItem.img} alt={newsItem.name} />
      </div>
      <p>{newsItem.text}</p>
    </div>
  );
};

export default NewsElement;