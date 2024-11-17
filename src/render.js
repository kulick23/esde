import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addNews, removeNews } from './state/State';

export let renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addNews={addNews} removeNews={removeNews} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

