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
        <img src="/me.png" alt="Jonathan Galdino" />

        <Styled.TechSkill>
          <h3>Technologies &amp; Expertise</h3>

          {skills.map(skill => <Tech key={skill.name} level={skill.level} name={skill.name} />)}
        </Styled.TechSkill>
      </Styled.Middle>

      <Styled.Text>
        <h3>
          My name is Jonathan and I’m a software engineer @ Midway, a Riachuelo company. Right now I'm trying to put my name out there as a freelancer.
          I had some experiences working for small and medium sized agencies in the past, I miss those old days.
        </h3>
        <h3>
          My background is around these abilities I mentioned before. I like gaming with friends, lo-fi and my dogs.
        </h3>

        {/* <DownloadButton text="Resume">
          <img src="/download.svg" alt="Download Icon" />
          <p>Resume</p>
        </DownloadButton> */}
      </Styled.Text>
    </Styled.Container>
  )
}

export default AboutMe;