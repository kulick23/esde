import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewsPageElement.css'; 

interface NewsPageElementProps {
  id: number;
  img: string;
  date: string;
  name: string;
  type: string;
  removeNews: () => void;
}

const NewsPageElement: React.FC<NewsPageElementProps> = ({
  id,
  img,
  date,
  name,
  type,
  removeNews,
}) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="postCard">
      <img className="postCard--image" src={img} alt={name} />
      <div className="postCard__text">
        <small>{date}</small>
        <h3>{name}</h3>
        <p className="postCard__type">{type}</p>
        <div className="postCard__links">
          <button onClick={handleReadMore} className="postCard__readMore">
            Read More
          </button>
          <button onClick={removeNews} className="postCard__remove">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPageElement;