import React from 'react';
import './side.css';
import closeIcon from '../../Assets/Icons/Close.svg';
import telegramIcon from '../../Assets/Icons/telegram.svg';
import instagramIcon from '../../Assets/Icons/instagram.svg';
import facebookIcon from '../../Assets/Icons/facebook.svg';

type SideMenuProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

const SideMenu: React.FC<SideMenuProps> = ({ isActive, toggleMenu }) => {
  return (
    <>
      <nav className={`side__menu ${isActive ? 'active' : ''}`}>
        <button id="close-menu" onClick={toggleMenu}>
          <img className="side__menu--img" src={closeIcon} alt="Close" />
        </button>
        <div className="side__content">
          <ul className="side__list">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#price">Price</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="side__icons">
          <a href="https://telegram.org/"><img src={telegramIcon} alt="Telegram" /></a>
          <a href="https://www.instagram.com/"><img src={instagramIcon} alt="Instagram" /></a>
          <a href="https://www.facebook.com/"><img src={facebookIcon} alt="Facebook" /></a>
        </div>
      </nav>
      <div className={`side__overlay ${isActive ? 'active' : ''}`} onClick={toggleMenu}></div>
    </>
  );
};

export default SideMenu;