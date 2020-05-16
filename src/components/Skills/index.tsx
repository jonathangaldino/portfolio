import React from 'react';

import * as S from './styles';

import backendImg from '../../assets/backend.png';
import frontMobileImg from '../../assets/front-mobile.png';
import othersImg from '../../assets/others.png';
import Skill from '../Skill';

const Skills: React.FC = () => (
  <S.Container>
    <h3>
      I have 2+ years of experience with the set of tools and technical skills
      below.
    </h3>

    <div className="skills-group">
      <Skill
        title="Backend"
        skills={[
          'NodeJS',
          'Web frameworks (Express/Koa)',
          'SQL',
          'No-SQL',
          'Tests',
        ]}
        image={backendImg}
      />

      <Skill
        title="Frontend & Mobile"
        skills={[
          'ReactJS',
          'Redux / Flux',
          'CSS (LESS / Styled)',
          'React Native',
          'Responsive Design (mobile 1st)',
        ]}
        image={frontMobileImg}
      />

      <Skill
        title="Others"
        skills={[
          'Typescript',
          'Docker',
          'Git & Git flow',
          'CI/CD',
          'Scrum / Kanban',
        ]}
        image={othersImg}
      />
    </div>
  </S.Container>
);

export default Skills;
