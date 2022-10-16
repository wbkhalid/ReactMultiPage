import React from 'react'
import Hero from '../components/Hero'

const About = () => {
  const data = {
    name: 'WBK Chaudhary',
    image: "./images/about.jpg",
  }
  return (
    <Hero {...data} />
  )
  
}

export default About