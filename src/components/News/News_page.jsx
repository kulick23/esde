import React, { useState } from 'react';
import s from './News_page.module.css'
import News_page_element from './News_page_elements/News_page_element';

const News_page = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        description: '',
        text: '',
        imageUrl: ''
    });
    const [selectedFilter, setSelectedFilter] = useState('all');

    let NewsItem = props.state.news
        .map(p => <News_page_element key={p.id} img={p.img} id={p.id} date={p.date} name={p.name} type={p.type} removeNews={props.removeNews} />)
        .reverse();
    let NewNewsName = React.createRef()
    let NewNewsDate = React.createRef()
    let NewNewsImg = React.createRef()
    let NewNewsDesc = React.createRef()
    let NewNewsText = React.createRef()
    let NewNewsType = React.createRef()

    const handleAddNewsClick = () => {
        setIsAdding(true);
    };

    const handleFormSubmit = (e) => {
        if (!formData.name || !formData.date || !formData.description || !formData.text || !formData.imageUrl) {
            alert('Please fill in all fields');
            return;
        }
        let name = NewNewsName.current.value
        let date = NewNewsDate.current.value
        let img = NewNewsImg.current.value
        let desc = NewNewsDesc.current.value
        let text = NewNewsText.current.value
        let type = NewNewsType.current.value
        props.addNews(name, type, date, img, desc, text)
        e.preventDefault();
        setIsAdding(false);
        setFormData({
            name: '',
            date: '',
            description: '',
            text: '',
            imageUrl: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    let filteredNews = NewsItem;
    if (selectedFilter !== 'all') {
        filteredNews = NewsItem.filter(item => item.props.type === selectedFilter);
    }

    return (
        <div>
            <div className={s.title}>
                News from EHU ESDE
                <div>
                    <select value={selectedFilter} onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="University">University</option>
                        <option value="Event">Event</option>
                        <option value="Project">Project</option>
                    </select>
                </div>
            </div>
            <hr></hr>
            <div className={s.news}>
                <button
                    className={s.add_news}
                    onClick={handleAddNewsClick}
                >
                    add news
                </button>
                {isAdding && (
                    <div className={s.overlay}>
                        <form onSubmit={handleFormSubmit} className={s.addNewsForm}>
                            <input ref={NewNewsName} type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
                            <input ref={NewNewsDate} type="text" name="date" value={formData.date} onChange={handleInputChange} placeholder="Date" />
                            <select ref={NewNewsType} name="type" value={formData.type} onChange={handleInputChange}>
                                <option value="University">University</option>
                                <option value="Event">Event</option>
                                <option value="Project">Project</option>
                            </select>
                            <textarea ref={NewNewsDesc} name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" />
                            <textarea ref={NewNewsText} name="text" value={formData.text} onChange={handleInputChange} placeholder="Text" />
                            <input ref={NewNewsImg} type="text" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} placeholder="Image URL" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
                {filteredNews}
            </div>
        </div>
    );
};

export default News_page;
