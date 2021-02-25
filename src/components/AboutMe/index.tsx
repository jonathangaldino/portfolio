import * as Styled from './styles';
import Tech from '@components/AboutMe/Tech';

import { skills } from './skills.data';

const AboutMe = () => {
  return (
    <Styled.Container>
      <h1>About Me</h1>

      <Styled.Middle>

        <picture>
          {/* Use if possible */}
          <source type="image/webp" srcSet="/me.webp" />

          {/* Fallback */}
          <img alt="Jonathan's Photo" src="/me.png" />
        </picture>

        <Styled.TechSkill>
          <h3>Technologies &amp; Expertise</h3>

          {skills.map(skill => <Tech key={skill.name} level={skill.level} name={skill.name} />)}
        </Styled.TechSkill>
      </Styled.Middle>

      <Styled.Text>
        <h3>
          A young & bold Software Developer alocated in Rio de Janeiro, Brazil. I've been coding for the past 2 years, from the backend
          to the mobile world, I've touched and writed lines of code using different technologies and approachs.
          Besides that I like to play PC games, to build custom keyboards, my dogs and to relax at the beach &#x1F334;.
        </h3>

        <Styled.DownloadButton>
          <a href="/Jonathan-Resume.pdf" target="__blank">Open Résumé</a>
        </Styled.DownloadButton>
      </Styled.Text>
    </Styled.Container>
  )
}

export default AboutMe;