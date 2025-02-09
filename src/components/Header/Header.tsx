import React from 'react';
import './header.css';
import hamburgerIcon from '../../Assets/Icons/Hamburger.svg';
import telegramIcon from '../../Assets/Icons/telegram.svg';
import instagramIcon from '../../Assets/Icons/instagram.svg';
import facebookIcon from '../../Assets/Icons/facebook.svg';
import logo from '../../Assets/Img/logo.png';

type HeaderProps = {
  onBurgerClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onBurgerClick }) => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__left--block">
          <p>Social media</p>
          <div className="header__line"></div>
          <a href="https://telegram.org/">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/">
            <img src={facebookIcon} alt="Facebook" />
          </a>
        </div>
      </div>
      <div className="header__container">
        <h1>Explore a Bachelor of Computer Science with us</h1>
        <div className="header__buttons">
          <button data-target="#portfolio">Home page</button>
          <button className="button__opacity" data-target="#about">
            News page
          </button>
        </div>
        <img src={logo} alt="logo" />
        </div>
      <div className="header__right">
        <button className="header__burger button__opacity" onClick={onBurgerClick}>
          <img src={hamburgerIcon} alt="Menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;