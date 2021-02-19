import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url('/fonts/Roboto-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Fjalla One';
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: url('/fonts/FjallaOne-Regular.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.texts};
    font-weight: normal;
    font-size: 16px;

    h1, h3, p {
      font-weight: normal;
    }
    
    h1 {
      font-family: 'Fjalla One', sans-serif;
    }
  }

  html, body, #__next {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
