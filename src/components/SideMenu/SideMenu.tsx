import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section: string) => {
    toggleMenu();

    if (location.pathname !== '/') {
      // If we're not on home page, navigate to home and then scroll
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      <nav className={`side__menu ${isActive ? 'active' : ''}`}>
        <button id="close-menu" onClick={toggleMenu}>
          <img className="side__menu--img" src={closeIcon} alt="Close" />
        </button>
        <div className="side__content">
          <ul className="side__list">
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleNavigation('about')}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleNavigation('skills')}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="price"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleNavigation('price')}
              >
                Price
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => handleNavigation('contact')}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="side__icons">
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
      </nav>
      <div
        className={`side__overlay ${isActive ? 'active' : ''}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default SideMenu;
