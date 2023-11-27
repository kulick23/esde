import React from 'react';
import './App.css';

import Header from './components//Header/Header';
import News from './components/News/News';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';

import News_in from './components/News/News_in/News_in';

const App = (props) => {

  return (

    <div className='app-wrapper'>
      <Header />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News state={props.state.NewsPage} />} />
          <Route path="/news/:id" element={<News_in state={props.state.NewsPage}/>} />
        </Routes>
      </div>
    </div>

  );
}


export default App;
