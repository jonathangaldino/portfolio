import styled from 'styled-components';

export const Container = styled.section`
  background: ${props => props.theme.colors.bgPrimary};
  height: 395;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 0px;
`;

export const Heading = styled.div`
  margin-bottom: 20px;
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 36px;
  }

  p {
    margin-top: 15px;
    font-size: 14px;
    font-family: Kalam;
    margin: 0;
    margin-top: 10px;

  }
`;

export const Techs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 710px;
`;

export const Tech = styled.div`
  text-align: center;

  p {
    margin-top: 15px;
  }
`;

export const Circle = styled.div`
  background: ${props => props.theme.colors.iconsAndSocials};
  border-radius: 50%;
  width: 150px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80px;
    height: auto;
  }

  small {
    font-size: 13px;
    color: #00D8FF;
    margin-top: 2.5px;
  }
`;



