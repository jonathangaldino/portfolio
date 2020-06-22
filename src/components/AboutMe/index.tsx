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
    name: 'ReactJS',
    level: 0.70,
  },
  {
    name: 'React Native',
    level: 0.70,
  },
  {
    name: 'Git & Gitflow',
    level: 0.70,
  },
  {
    name: 'MySQL & PostgreSQL',
    level: 0.8,
  },
  {
    name: 'MongoDB & Redis',
    level: 0.65,
  }
];
  

const AboutMe = () => {
  return (
    <Styled.Container>
      <h1>About Me</h1>

      <Styled.Middle>
        <img src="/me.png" alt="Jonathan Galdino" />

        <Styled.TechSkill>
          <h3>My skills</h3>

          {skills.map(skill => <Tech level={skill.level} name={skill.name} />)}
        </Styled.TechSkill>
      </Styled.Middle>

      <Styled.Text>
        <h3>
          My name is Jonathan Galdino, I’m from Rio de Janeiro, Brazil. I work for small and medium sized agencies, as a 
          freelancer, providing software with excellence. Now, i’m working at PlayerUm, a software company stablished in 
          Rio, as a back-end developer. In my daily routine I have the pleasure to work with Typescript, GraphQL, Docker, 
          VSCode, Slack, Discord & Spotify, I also have experience around Windows, Linux and OSX systems. What you should 
          know about me is that i'm dedicated to be better, either professionally and personally, everyday.
        </h3>

        <Styled.Resume to>
          <img src="/download.svg" alt="Download Icon" />
          <p>Download Resume</p>
        </Styled.Resume>
      </Styled.Text>
    </Styled.Container>
  )
}

export default AboutMe;