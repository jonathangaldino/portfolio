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

  ${media.lessThan("medium")`
    flex-direction: column;
    align-items: center;
  `}
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
`;


export const TechSkill = styled.div`
  h3 {
    margin-bottom: 20px;
  }

  ${media.lessThan("large")`
    margin-left: 30px;
  `}

  ${media.lessThan("medium")`
    margin-left: 0;
    margin-top: 100px;
  `}
`;