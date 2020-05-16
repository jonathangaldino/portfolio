import React from 'react';

import * as S from './styles';

import MeImg from '../../assets/me.png';

const Me: React.FC = () => (
  <S.Container>
    <img src={MeImg} alt="Jonathan Galdino" />

    <h1>Jonathan Galdino</h1>

    <h3>Node.js Back-end Developer & Fullstack Aspiring</h3>

    <hr />
  </S.Container>
);

export default Me;
