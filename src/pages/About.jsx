import React,{useEffect} from 'react'
import Hero from '../components/Hero'
import { useAppConusmer } from '../context/AppContext';

const About = () => {
  const { updateAboutPage } = useAppConusmer();

  useEffect(() => {
    updateAboutPage();
  }, []);
  return (
    <Hero />
  )
  
}

export default About