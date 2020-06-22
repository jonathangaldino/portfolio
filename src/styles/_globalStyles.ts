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
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.texts};
    font-family: 'Fjalla One', sans-serif;
    font-weight: normal;
    font-size: 16px;

    h1, h3, p {
      font-weight: normal;
    }
  }

  html, body, #__next {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
