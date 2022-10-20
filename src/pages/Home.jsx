import React,{useEffect} from 'react';
import Hero from '../components/Hero';
import { useAppConusmer } from '../context/AppContext';

const Home = () => {
  const { updateHomePage } = useAppConusmer();

  useEffect(() => {
    updateHomePage();
  }, []);
  return <Hero />;
};

export default Home;
