import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 55px;

  h3 {
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    width: 80%;
  }

  .skills-group {
    width: 80%;
    margin-top: 85px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    max-width: 1170px;

    @media (min-width: 875px) {
      justify-content: space-between;
      align-items: center;
    }

    div {
      margin-bottom: 55px;
    }
  }
`;
