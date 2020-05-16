import React from 'react';

import * as S from './styles';

interface Props {
  title: string;
  skills: string[];
  image: string;
}

const Skill: React.FC<Props> = ({ image, title, skills }) => (
  <S.Container>
    <img src={image} alt={`${title} logo`} />

    <h3>{title}</h3>

    <ul>
      {skills.map(s => (
        <li key={s}>{s}</li>
      ))}
    </ul>
  </S.Container>
);

export default Skill;
