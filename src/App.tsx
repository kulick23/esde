import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Header,
  SideMenu,
  About,
  Skills,
  Price,
  Contact,
} from './components/index.ts';
import { HomePage, NewsItemPage, NewsPage } from './pages/index.ts';
import './styles/style.css';

const App: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  return (
    <Router>
      <div>
        <Header onBurgerClick={toggleMenu} />
        <SideMenu isActive={isMenuActive} toggleMenu={toggleMenu} />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsItemPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
