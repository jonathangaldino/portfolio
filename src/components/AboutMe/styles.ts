import styled from 'styled-components';

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
`;