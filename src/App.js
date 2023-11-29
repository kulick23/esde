import React from 'react';
import './App.css';
import Header from './components//Header/Header';
import News_page from './components/News/News_page';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import News from './components/News/News_block/News';

const App = (props) => {

  return (

    <div className='app-wrapper'>
      <Header />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News_page state={props.state.NewsPage} addNews={props.addNews} removeNews={props.removeNews} />} />
          <Route path="/news/:id" element={<News state={props.state.NewsPage} />} />
        </Routes>
      </div>
    </div>

  );
}


export default App;
