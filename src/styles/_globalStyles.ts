import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #231f20;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.primary};
    font-weight: normal;
    font-size: 16px;

    h1, h3, p {
      font-weight: normal;
    }
    
    h1 {
      font-family: 'Fjalla One', sans-serif;
    }

    a {
      color: ${props => props.theme.colors.links};
      text-decoration: none;
    }
  }

  html, body, #__next {
    height: 100%;
  }

  button {
    cursor: pointer;
  }
`;
