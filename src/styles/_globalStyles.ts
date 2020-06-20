import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    color: ${props => props.theme.colors.text};
  }

  html, body {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
