import { Container, Picture, Portrait, Network } from './profile.styles';

const Profile = () => (
  <Container>
    <Picture>
      <source type="image/webp" srcSet="/me.webp" />
      <img alt="Jonathan's Photo" src="/me.png" />
    </Picture>

    <Portrait>
      <h2>Jonathan Galdino</h2>
      <h3>Software Developer</h3>
      <h3><a href="https://manparvesh.com/">Midway</a></h3>
    </Portrait>

    <Network>
      <li>
        <a href="https://twitter.com/johnhashed" target="__blank">
          <img src="/twitter.svg" alt="Github a li" />
        </a>
      </li>

      <li>
        <a href="https://www.liedin.com/in/jonathangaldinodev/" target="__blank">
          <img src="/linkedin.svg" alt="Github a li" />
        </a>
      </li>

      <li>
        <a href="mailto:jonathangaldino@outlook.com">
          <img src="/mail.svg" alt="Github a li" />
        </a>
      </li>

      <li>
        <a href="https://github.com/jonathangaldino" target="__blank">
          <img src="/github.svg" alt="Github a li" />
        </a>
      </li>
    </Network>
  </Container>
)

export default Profile;