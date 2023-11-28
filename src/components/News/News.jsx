import React, { useState } from 'react';
import s from './News.module.css'
import News_element from './News_elements/News_element';


const News = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        description: '',
        text: '',
        imageUrl: ''
    });

    let NewsItem = props.state.news
    .map(p => <News_element key={p.id} img={p.img} id={p.id} date={p.date} name={p.name} />)
    .reverse();
    let NewNewsName = React.createRef()
    let NewNewsDate = React.createRef()
    let NewNewsImg = React.createRef()
    let NewNewsDesc = React.createRef()
    let NewNewsText = React.createRef()


    const handleAddNewsClick = () => {
        setIsAdding(true);
    };

    const handleFormSubmit = (e) => {
        if (
            !formData.name ||
            !formData.date ||
            !formData.description ||
            !formData.text ||
            !formData.imageUrl
        ) {
            alert('Please fill in all fields');
            return;
        }
        let name = NewNewsName.current.value
        let date = NewNewsDate.current.value
        let img = NewNewsImg.current.value
        let desc = NewNewsDesc.current.value
        let text = NewNewsText.current.value
        props.addNews(name,date,img,desc,text)
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


    return (
        <div>
            <div className={s.text}>News from EHU ESDE</div>
            <hr></hr>
            <div className={s.news}>
                <button className={s.addnews} onClick={handleAddNewsClick}>add news</button>
                {isAdding && (
                    <div className={s.overlay}>
                        <form onSubmit={handleFormSubmit} className={s.addNewsForm}>
                            <input ref={NewNewsName} type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
                            <input ref={NewNewsDate} type="text" name="date" value={formData.date} onChange={handleInputChange} placeholder="Date" />
                            <textarea ref={NewNewsDesc} name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" />
                            <textarea ref={NewNewsText} name="text" value={formData.text} onChange={handleInputChange} placeholder="Text" />
                            <input ref={NewNewsImg} type="text" name="imageUrl" value={formData.imageUrl} onChange={handleInputChange} placeholder="Image URL" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                )}
                {NewsItem}
            </div>
        </div>
    );
};

export default News;
