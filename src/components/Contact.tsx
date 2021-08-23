import React from 'react';
import styled from 'styled-components';

const Contact: React.FC = () => (
  <Container>

  <Header>
    <h1>Contact</h1>
    <p>
    Are you looking for someone to help build and deliver software?
    I'm always up for a challenge. Reach me out. I can help you.
    </p>
  </Header>

  <Socials>
    <Social href="https://twitter.com/johnhashed" target="__blank">
      <img src="/twitter.svg" alt="Github Social Link"  width="22" height="22" />
    </Social>
    <Social href="https://www.linkedin.com/in/jonathangaldinodev/" target="__blank">
      <img src="/linkedin.svg" alt="Github Social Link"  width="22" height="22" />
    </Social>
    <Social href="mailto:jonathangaldino@outlook.com">
      <img src="/mail.svg" alt="Github Social Link"  width="22" height="22" />
    </Social>
    <Social href="https://github.com/jonathangaldino" target="__blank">
      <img src="/github.svg" alt="Github Social Link" width="22" height="22" />
    </Social>
  </Socials>

  </Container>
)

const Container = styled.div`
  margin-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
    font-size: 36px;
    margin-bottom: 60px;
    font-size: 48px;
  }

  p {
    font-size: 16px;
    max-width: 450px;
    text-align: center;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 50px;
`;

const Social = styled.a`
  border-radius: 50%;
  background: #FFF;
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  
  margin-right: 15px;

  img {
    width: 22px;
    width: 22px;
  }
`;

export default Contact;
