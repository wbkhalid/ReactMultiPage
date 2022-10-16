import React from 'react'
import Hero from '../components/Hero'

const Home = () => {

  const data = {
    name: 'Waleed bin kahlid',
    image: './images/hero.jpg',
  }
  return (


    <Hero {...data} />
  )
}

export default Home