import React, { useState } from 'react';
import './contact.css';
import photo2 from '../../Assets/Img/photo2.webp';
import facebookIcon from '../../Assets/Icons/facebook.svg';
import telegramIcon from '../../Assets/Icons/telegram.svg';
import instagramIcon from '../../Assets/Icons/instagram.svg';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [privacy, setPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message, privacy });
  };

  return (
    <section id="contact">
      <img src={photo2} alt="Contact" className="contact__image" />
      <div className="contact__form">
        <h3 className="text-with-circle">Contacts</h3>
        <h2>Contact us</h2>
        <div className="horizontal-bar"></div>
        <p>In any way convenient for you:</p>
        <div className="contact__links">
          <a href="https://www.facebook.com/">
            <img className="contact__icon" src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://telegram.org/">
            <img className="contact__icon" src={telegramIcon} alt="Telegram" />
          </a>
          <a href="https://www.instagram.com/">
            <img
              className="contact__icon"
              src={instagramIcon}
              alt="Instagram"
            />
          </a>
        </div>
        <p>Or leave your details and we will write to you ourselves:</p>
        <form className="form__container" onSubmit={handleSubmit}>
          <div className="form__line">
            <div className="form__item">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                placeholder="John"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form__item">
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form__item">
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form__checkbox">
            <input
              type="checkbox"
              id="privacy"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              required
            />
            <small>
              I agree with <small className="blue-text">privacy policy</small>
            </small>
          </div>
          <button className="contact__button" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
