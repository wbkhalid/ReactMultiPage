import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const Wrapper = styled.section`
    .contact-short {
      max-width: 60vw;
      margin: auto;
      padding: 2rem 10rem;
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 1rem;
      box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      transform: translateY(50%);
    }
    .contact-short-btn {
      justify-self: end;
      align-self: center;
    }
    footer {
      padding: 7rem 1rem 2rem 2rem;
      background-color: ${({ theme }) => theme.colors.footer_bg};

      h3 {
        color: ${({ theme }) => theme.colors.hr};
        margin-bottom: 2rem;
        
      }
      p {
        color: ${({ theme }) => theme.colors.white};
      }
      .footer-about {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .footer-subscribe {
        display: flex;
        flex-direction: column;
        align-items: center;
        .form {
          display: flex;
          flex-direction: column;
          padding: .5rem;
          gap:1rem
          
        }
      }

      .footer-social--icons {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        div {
          padding: 1rem;
          border-radius: 50%;
          border: 1px solid ${({ theme }) => theme.colors.white};
          .icons {
            color: ${({ theme }) => theme.colors.white};
            font-size: 1rem;
            position: relative;
          }
        }
      }
      .footer-bottom--section {
        padding-top: 1rem;
        hr {
          margin-bottom: 1rem;
          color: ${({ theme }) => theme.colors.hr};
          height: 0.1px;
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .contact-short {
        max-width: 95vw;
        padding: 2rem 0rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .contact-short-btn {
          text-align: center;
          justify-self: flex-start;
        }
      }
      footer .footer-bottom--section {
        padding-top: 3.2rem;
      }
    }
  `;
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="container grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink to="/">
              <Button className=" .contact-short-btn">Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>WBK Chaudhary</h3>
            <h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              recusandae expedita sit inventore voluptatem dolorem hic quisquam
              esse est pariatur ad dolore eveniet debitis natus, assumenda
              quidem. Omnis, asperiores rem!
            </h3>
          </div>
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#" className="form">
              <input type="email" placeholder="Email" required />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord />
              </div>
              <div>
                <FaInstagram />
              </div>
              <div>
                <FaYoutube />
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call us</h3>
            <h3>+92 3058995952</h3>
          </div>
        </div>

        {/* Bottom section */}

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid drid-two-column">
            <p>
              @{new Date().getFullYear()} WBK Chaudhary All Rights Resvered.
            </p>
            <div>
              <p>Privacy Policy</p>
              <p>trems and conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
