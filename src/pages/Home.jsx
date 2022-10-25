import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { useAppConusmer } from '../context/AppContext';
import Contact from './Contact';
import Services from './Services';

const Home = () => {
  const { updateHomePage } = useAppConusmer();

  useEffect(() => {
    updateHomePage();
  }, []);
  return (
    <>
      <Hero />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
