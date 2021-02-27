import * as Styled from './styles';

import Profile from './Profile/profile.component';

const AboutMe = () => {
  return (
    <Styled.Container>
      <h1>Biography</h1>

      <Styled.Middle>
        <Profile />
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