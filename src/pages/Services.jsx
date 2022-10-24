import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAppConusmer } from '../context/AppContext';
import { Button } from './../components/Button';

const Services = () => {
  const { services } = useAppConusmer();

  const Wrapper = styled.section`
    padding: 9rem 2rem;
    background-color: ${({ theme }) => theme.colors.bg};

    .container {
      max-width: 120rem;
    }
    figure {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s linear;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        transition: all 0.5s linear;
        cursor: pointer;
      }
      &:hover::after {
        width: 100%;
      }
      &:hover img {
        transform: scale(1.1);
      }
      img {
        max-width: 90%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear;
      }
    }

    .card-data {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .login {
      font-variant: small-caps;
      font-weight: 700;
    }
  `;

  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {services.map((elem) => {
          const { id, avatar_url, login, events_url } = elem;

          return (
            <div className="card" key={id}>
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-data">
                <h3 className="login">{login}</h3>
                <p>{events_url}</p>
                <NavLink to="/services">
                  <Button>Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Services;
