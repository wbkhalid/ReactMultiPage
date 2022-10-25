import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  const Wrapper = styled.section`
    padding: 1rem 0 1rem 0;


    .container {
      margin-top: 2rem;
      text-align: center;
      max-width: 30rem;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel free to contact us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27046.439121322896!2d72.68944780099602!3d32.074525511181236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392177e3b33ed763%3A0xf3ddf0f4562cf672!2sNew%20Satellite%20Town%2C%20Sargodha%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1666677152806!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="container">
        <form action="https://formspree.io/f/mrgdyerg" method="POST" className="contact-inputs">
          <input type="text" name="username" placeholder="username" required />
          <input type="email" name="Email" placeholder="Email" required />
          <textarea cols="50" rows="6" name="message" />
          <input type="submit" value="send" />
        </form>
      </div>
    </Wrapper>
  );
};

export default Contact;
