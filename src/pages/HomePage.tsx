import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';

const HomePage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Services />
    </div>
  );
};

export default HomePage;