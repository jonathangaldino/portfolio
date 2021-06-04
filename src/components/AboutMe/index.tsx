import * as Styled from "./styles";

import skills from "./skills.data";

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
          <h3>Tools and Techs</h3>

          <div>
            {skills.map((skill) => (
              <span>{skill}</span>
            ))}
          </div>
        </Styled.TechSkill>
      </Styled.Middle>

      <Styled.Text>
        <h3>
          A young & bold Software Developer alocated in Rio de Janeiro, Brazil.
          I've been coding for the past 2 years, from the backend to the mobile
          world, I've touched and writed lines of code using different
          technologies and approachs. Besides that I like to play PC games, to
          build custom keyboards and to spent time with my dogs.
        </h3>

        <Styled.DownloadButton>
          <a href="/Jonathan-Resume.pdf" target="__blank">
            Open Résumé
          </a>
        </Styled.DownloadButton>
      </Styled.Text>
    </Styled.Container>
  );
};

export default AboutMe;
