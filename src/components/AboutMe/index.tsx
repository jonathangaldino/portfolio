import * as Styled from './styles';
import Tech from '@components/Tech';

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
    name: 'English',
    level: 0.75,
  }
];
  

const AboutMe = () => {
  return (
    <Styled.Container>
      <h1>About Me</h1>

      <Styled.Middle>
        <img src="/me.png" alt="Jonathan Galdino" />

        <Styled.TechSkill>
          <h3>My qualifications</h3>

          {skills.map(skill => <Tech level={skill.level} name={skill.name} />)}
        </Styled.TechSkill>
      </Styled.Middle>

      <Styled.Text>
        <h3>
          My name is Jonathan and I’m from Rio de Janeiro, Brazil. I work for small and medium sized agencies, as a 
          freelancer. Now, I’m working at PlayerUm, a software company stablished in 
          Copacabaca, Rio de Janeiro, as a back-end developer. In my daily routine I have the pleasure to work with Typescript and Javascript, GraphQL, Docker, 
          MySQL & MongoDB databases, I also have experience around Windows, Linux and OSX systems.
          I like to learn new techs and techniques that can help achieve code greatness. I am also good at FPS games.
        </h3>

        <Styled.Resume>
          <img src="/download.svg" alt="Download Icon" />
          <p>Download Resume</p>
        </Styled.Resume>
      </Styled.Text>
    </Styled.Container>
  )
}

export default AboutMe;