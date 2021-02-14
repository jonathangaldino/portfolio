import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    align-self: center;
    text-transform: uppercase;
    font-size: 48px;
    margin-top: 70px;
    margin-bottom: 110px;
  }  
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 350px;
    height: 350px;
    border-radius: 4px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;

    img {
      /* max-width: 300px; */
    }
  }
`;

export const Text = styled.div`
  margin-top: 85px;

  h3 {
    font-size: 18px;
    font-weight: normal;
    border: 0;
    line-height: 24px;
    text-rendering: optimizeLegibility;
    align-self: center;
    text-align: justify;
  }

  /* ${media.lessThan("medium")`
    width: 80vw;
  `} */
`;

export const TechSkill = styled.div`
  margin-left: 1.5%;
  h3 {
    margin-bottom: 20px;
  }

  @media (max-width: 1100px) {
    margin-top: 80px;
  }

  ${media.lessThan("small")`
    max-width: 350px;
  `}
`;

export const DownloadButton = styled.div`
  /* display: flex;
  align-self: center; */
  
  margin-top: 35px;  
  background: 50% 100% / 50% 50% no-repeat
              radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  /* font-size: 10vw; */
  font-family: "Source Sans Pro", sans-serif;
  animation: reveal 3000ms ease-in-out forwards 200ms,
             glow 2500ms linear infinite 2000ms;

  @keyframes reveal {
    80%{
      letter-spacing: 8px;
    }
    100% {
      background-size: 300% 300%;
    }
  }
  @keyframes glow {
    40% {
      text-shadow: 0 0 8px #fff;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.texts};
  }
`;

