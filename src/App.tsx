import React, { useState } from 'react';
import Header from './components/Header/Header.tsx';
import About from './components/About/About.tsx';
import Skills from './components/Skills/Skills.tsx';
import Price from './components/Price/Price.tsx';
import Contact from './components/Contact/Contact.tsx';
import SideMenu from './components/SideMenu/SideMenu.tsx';
import './styles/style.css';

const App: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  return (
    <div>
      <Header onBurgerClick={toggleMenu} />
      <SideMenu isActive={isMenuActive} toggleMenu={toggleMenu} />
      <main className="main">
        <About />
        <Skills />
        <Price />
        <Contact />
      </main>
    </div>
  );
};


export default App;