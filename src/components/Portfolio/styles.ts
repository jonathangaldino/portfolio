import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  /* align-self: center; */

  margin-top: 100px;
`;

export const Heading = styled.div`
  align-self: center;

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
  max-width: 870px;
  align-self: center;
`;

export const Projects = styled.div`
  margin-top: 60px;
  align-self: center;

  display: flex;
  flex-direction: row;
`;

export const Github = styled.a`
  width: 190px;
  height: 45px;


  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 35px;
  padding: 0px 20px;

  border-top-right-radius: 22.5px;
  border-bottom-right-radius: 22.5px;
  background: ${props => props.theme.colors.texts};

  img {
    width: 26px;
    height: 26px;

  }

  p {
    color: ${props => props.theme.colors.textsInverse};
  }
`;