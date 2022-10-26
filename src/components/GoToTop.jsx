import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (windowScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => {
      window.removeEventListener('scroll', listenToScroll);
    };
  }, []);
  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .top-btn {
      font-size: 1.5rem;
      width: 3rem;
      height: 3rem;
      color: #fff;
      background-color: ${({ theme }) => theme.colors.btn};
      box-shadow: ${({ theme }) => theme.colors.shadow};
      border-radius: 50%;
      position: fixed;
      bottom: 10rem;
      right: 5rem;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &--icon {
        animation: gototop 1.2s linear infinite alternate-reverse;
      }
      @keyframes gototop {
        0% {
          transform: translateY(-0.2rem);
        }
        100% {
          transform: translateY(0.2rem);
        }
      }
    }
  `;
  return (
    <Wrapper>
      {isVisible && (
        <div className="top-btn" onClick={gotoTop}>
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

export default GoToTop;
