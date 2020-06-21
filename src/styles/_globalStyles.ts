import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: Saira, sans-serif;
  }

  body {
    background: '#FFF';
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.texts};
  }

  html, body, #__next {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
