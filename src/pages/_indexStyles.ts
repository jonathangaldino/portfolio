import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
`;

export const Title = styled.h1`
  color: red;
  font-size: 50px;
`
export const Main = styled.main`
  height: 100%;
`;

export const WelcomeSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    margin-left: 100px;
    height: 220px;
    width: 450px;

    h1 {
      font-size: 28px;
      font-weight: bold;
    }

    p {
      font-size: 16px;
      font-weight: 500;
    }

    button {
      background: ${props => props.theme.colors.black};
      border-radius: 18px;
      height: 40px;
      width: 120px;
      color: #FFF;
      border: 0;
    }
  }


  img {
    border-top-left-radius: 199px;
    border-bottom-left-radius: 199px;
    height: 400px;
    width: auto;
    max-width: 750px;
  }
`;

export const PerksSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  height: 200px;
  /* background: blue; */

  margin-top: 80px;
`;

export const PerksHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 28px;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
    text-align: center;
  }
`;

export const Perks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  & > div {
    margin-right: 50px;
  }

  div:last-child() {
    margin-right: 0px;
  }
`;