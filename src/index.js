import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/State'
import { addNews, removeNews } from './redux/State';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addNews={addNews} removeNews={removeNews}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
