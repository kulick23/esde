
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store.ts';
import { addNews, removeNews } from '../../store/features/news/newsSlice.ts';
import NewsPageElement from './NewsPageElement/NewsPageElement.tsx';
import './NewsPage.css';

const NewsPage: React.FC = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    description: '',
    text: '',
    imageUrl: '',
    type: 'University',
  });

  const news = useSelector((state: RootState) => state.news.news);
  const dispatch = useDispatch();

  const handleToggleAddNews = () => {
    setIsAdding(!isAdding);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.description || !formData.text || !formData.imageUrl) {
      alert('Please fill in all fields');
      return;
    }

    const textElement = React.createElement('div', null, 
      React.createElement('p', null, formData.text)
    );
  
    dispatch(addNews({
      ...formData,
      text: textElement 
    }));
  
    setIsAdding(false);
    setFormData({
      name: '',
      date: '',
      description: '',
      text: '',
      imageUrl: '',
      type: 'University',
    });
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="news__page">
      <h2>News</h2>
      <div className="horizontal-bar"></div>
      <div className="news">
        <button className="add_news" onClick={handleToggleAddNews}>
          {isAdding ? 'Close' : 'Add News'}
        </button>

        {isAdding && (
          <form onSubmit={handleFormSubmit} className="form">
            <div className="form_display">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Title"
              />
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                placeholder="Date"
              />
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleInputChange}
                placeholder="Image URL"
              />
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
              >
                <option value="University">University</option>
                <option value="Event">Event</option>
                <option value="Project">Project</option>
              </select>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Description"
              />
              <textarea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                placeholder="Text"
              />
            </div>
            <button className="form_button" type="submit">
              Submit
            </button>
          </form>
        )}

        <div className="news__items">
          {news.map(newsItem => (
            <NewsPageElement
              key={newsItem.id}
              {...newsItem}
              removeNews={() => dispatch(removeNews(newsItem.id))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;