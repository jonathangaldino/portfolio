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
    color: ${props => props.theme.colors.linen};
  }  
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
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

export const DownloadButton = styled.div`
  margin-top: 35px;
  display: inline-block;
  text-align: center;
  background: ${props => props.theme.colors.primary};
  color: red;
  font-weight: bold;
  padding: 1.18em 1em 1.03em;
  line-height: 1;
  border-radius: 0.3em;
  min-width: 8.23em;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;


  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
  }
`;

