import styled from 'styled-components';

export const Container = styled.section`
  background-color: #FFF;
  background-image: url("/background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  height: 100%;
  /* background: purple; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Me = styled.div`
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 72px;
    text-shadow: 0px 5px 0px #000;
  }

  strong {
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  margin-top: 55px;
  
  padding: 14px 84px;
  border-radius: 10px;
  border: 0;
  
  background: ${props => props.theme.colors.iconsAndSocials};
  
  color: ${props => props.theme.colors.texts};
  font-size: 16px;
  font-weight: bold;
`;
