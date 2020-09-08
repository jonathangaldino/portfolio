import * as Styled from './styles';
import Tech from './Tech';
import DownloadButton from '@components/DownloadButton';

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
    level: 0.55,
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
        <img src="/me.png" alt="Jonathan Galdino" />

        <Styled.TechSkill>
          <h3>Qualifications & Experiences</h3>

          {skills.map(skill => <Tech key={skill.name} level={skill.level} name={skill.name} />)}
        </Styled.TechSkill>
      </Styled.Middle>

      <Styled.Text>
        <h3>
          My name is Jonathan and I’m from Rio, Brazil. I started my career as a 
          freelancer. Now, I’m working at PlayerUm, a software company stablished in 
          Copacabana, Rio de Janeiro, as a back-end developer. In my daily routine I have the pleasure to work with Typescript and Javascript, GraphQL, Docker, 
          MySQL & MongoDB databases. I don't limit myself to a specific technology or ecosystem, I prefer learn what can help me achieve my goals. I'm gaming addicted.
        </h3>

        <DownloadButton text="Resume">
          <img src="/download.svg" alt="Download Icon" />
          <p>Resume</p>
        </DownloadButton>
      </Styled.Text>
    </Styled.Container>
  )
}

export default AboutMe;