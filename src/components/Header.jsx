import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

const Header = () => {
  const MainHeader = styled.header`
    padding: 0 5rem;
    height: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      height: auto;
      max-width: 7%;
    }
  `;
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./public/logo.webp" alt="logo" className="logo" />
      </NavLink>
      <Navbar />
   
    </MainHeader>
  );
};

export default Header;
