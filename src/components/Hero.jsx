import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAppConusmer } from '../context/AppContext';
import { Button } from './Button';

const Hero = () => {
  const Wrapper = styled.section`
    .container {
      padding: 1rem 3rem;
      line-height: 1.2;
    }
    
    .section-hero-data{
      margin-left:8rem;

    }

    .hero-top-data {
      text-transform: uppercase;
      font-size:1.2rem;
      color: ${({theme})=>theme.colors.helper}
    }

    .hero-heading {
      text-transform: uppercase;
      font-size:3rem;
    }

    .hero-para {
      max-width:60rem;
      text-transform: capitalize;
    }

    .section-hero-image{
      display: flex;
      justify-content:center;
      align-items: center;
    }

    .hero-img{
      max-width:90%;
      opacity:80%
    }
  `;
  const {name,image}= useAppConusmer()
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">this is me </p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            my name is {name}. i am react developer. i compleded my graduation from university of agriculture, faisalabad.
          </p>
          <NavLink to='/contact'><Button>Hire Me</Button></NavLink>
        </div>

        <div className="section-hero-image">
          <picture><img src={image}  alt='About pic' className="hero-img"/></picture>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
