import * as Styled from "./styles";

const AboutMe = () => {
  return (
    <Styled.Container>
      <h1>About Me</h1>

      <picture>
        {/* Use if possible */}
        <source type="image/webp" srcSet="/me.webp" />

        {/* Fallback */}
        <img alt="Jonathan's Photo" src="/me.png" />
      </picture>

      <h3>
        A young & bold Software Developer alocated in Rio de Janeiro, Brazil.
        I've been coding for the past 2 years, from the backend to the mobile
        world, I've touched and writed lines of code using different
        technologies and approachs. Besides that I like to play PC games, to
        build custom keyboards and to spent time with my dogs.
      </h3>

      <a href="/jonathan-galdino-resume.pdf" target="__blank">
        Click here to open my résumé
      </a>
    </Styled.Container>
  );
};

export default AboutMe;
