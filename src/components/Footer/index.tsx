import React from 'react';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import * as S from './styles';

import launchImg from '../../assets/launch.png';

const Footer: React.FC = () => (
  <S.Container>
    <img src={launchImg} alt="Rocket icon" />

    <h1>Wanna hire me?</h1>

    <p>Looking for someone to help build and deliver software in your team?</p>

    <p>
      Reach me by dropping an
      <a href="mailto:job@galdino.dev">email</a>
. You can also find me on
      socials.
</p>

    <ul>
      <li>
        <a href="https://twitter.com/johnzballad">
          <FaTwitter size={22} id="twitter-icon" />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com/in/jonathangaldinodev/">
          <FaLinkedinIn size={22} id="linkedin-icon" />
        </a>
      </li>

      <li>
        <a href="https://github.com/jonathangaldino">
          <FaGithub size={22} id="github-icon" />
        </a>
      </li>
    </ul>
  </S.Container>
);

export default Footer;
