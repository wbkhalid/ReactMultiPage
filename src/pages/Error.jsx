import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../components/Button';

const Error = () => {
  const Wrapper = styled.section`
    padding: 4rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;

    .errorimage{
        opacity:.9
    }

    .btn{
        margin-top:4rem;
    }
  `;
  return (
    <Wrapper>
      <img src="./images/error.webp" className="errorimage" />
      <NavLink to="/">
        <Button className='btn'>Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

export default Error;
