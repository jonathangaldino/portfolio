import * as Styled from './styles';
import Tech from '@components/AboutMe/Tech';
// import DownloadButton from '@components/DownloadButton';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  {
    name: 'NodeJS',
    level: 0.80,
  },
  {
    name: 'React',
    level: 0.70,
  },
  {
    name: 'React Native',
    level: 0.70,
  },
  {
    name: 'Typescript',
    level: 0.65,
  },
  {
    name: 'SQL & No-SQL databases',
    level: 0.8,
  },
  {
    name: 'GraphQL',
    level: 0.50,
  }
];


const AboutMe = () => {
  return (
    <Styled.Container>
      <h1>About Me</h1>

      <Styled.Middle>
        <img src="/me.webp" alt="Jonathan Galdino" />

        <Styled.TechSkill>
          <h3>Technologies &amp; Expertise</h3>

          {skills.map(skill => <Tech key={skill.name} level={skill.level} name={skill.name} />)}
        </Styled.TechSkill>
      </Styled.Middle>

      <Styled.Text>
        <h3>
          A young & bold Software Developer alocated in Rio de Janeiro, Brazil. I've been coding for the past 2 years, from the backend
          to the mobile world, I've touched and writed lines of code using different technologies and approachs.
        </h3>
        <h3>
          Other than that I like PC Gaming, my dogs and to relax at the beach &#x1F334;.
        </h3>

        <Styled.DownloadButton>
          <a href="/Jonathan-Resume.pdf" target="__blank">Open Professional Résumé</a>
        </Styled.DownloadButton>
      </Styled.Text>
    </Styled.Container>
  )
}

export default AboutMe;