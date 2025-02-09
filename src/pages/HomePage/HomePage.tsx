import React from 'react';
import About from '../../components/About/About.tsx';
import Skills from '../../components/Skills/Skills.tsx';
import Price from '../../components/Price/Price.tsx';
import Contact from '../../components/Contact/Contact.tsx';

const HomePage: React.FC = () => {
  return (
    <div>
      <About />
      <Skills />
      <Price />
      <Contact />
    </div>
  );
};

export default HomePage;