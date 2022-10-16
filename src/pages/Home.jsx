import React from 'react'
import Hero from '../components/Hero'

const Home = () => {

  const data = {
    name: 'Waleed bin kahlid',
    image: './iamges.hero'
  }
  return (


    <Hero {...data} />
  )
}

export default Home