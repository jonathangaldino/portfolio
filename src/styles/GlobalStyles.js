import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    font-family: 'Roboto';
    font-size: 14px;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
