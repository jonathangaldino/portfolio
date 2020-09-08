import styled from 'styled-components';
import media from "styled-media-query";


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

  @media (max-width: 980px) {
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
  margin-left: 30px;

  h3 {
    margin-bottom: 20px;
  }

  @media (max-width: 980px) {
    margin-top: 80px;
  }

  ${media.lessThan("small")`
    max-width: 350px;
  `}
`;