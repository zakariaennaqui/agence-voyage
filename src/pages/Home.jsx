import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Offres from '../components/Offres';
import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <Offres />
      <ContactForm />
    </>
  );
};

export default Home;
