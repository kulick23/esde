import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import About from './components/About/About.tsx';
import Skills from './components/Skills/Skills.tsx';
import Price from './components/Price/Price.tsx';
import Contact from './components/Contact/Contact.tsx';
import SideMenu from './components/SideMenu/SideMenu.tsx';
import NewsPage from './pages/NewsPage/NewsPage.tsx';
import NewsElement from './pages/NewsItemPage/NewsElement.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';

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
            <Route path="/news/:id" element={<NewsElement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;