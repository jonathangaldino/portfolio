import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  /* background: gray; */
  margin-top: 80px;
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
    font-size: 36px;
    margin-bottom: 60px;
    font-size: 48px;
  }

  h3 {
    font-size: 24px;
  }
`;

export const Content = styled.div`
  /* background: purple; */
`;

export const Projects = styled.div`
  margin-top: 60px;

  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  gap: 20px 0px;
`;

export const Github = styled.a`
  width: 190px;
  height: 45px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 100px;
  padding: 0px 20px;

  border-top-right-radius: 22.5px;
  border-bottom-right-radius: 22.5px;
  background: ${props => props.theme.colors.texts};

  text-decoration: none;



  img {
    width: 26px;
    height: 26px;

  }

  p {
    color: ${props => props.theme.colors.textsInverse};
  }
`;