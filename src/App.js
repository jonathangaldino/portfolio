import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { ThemeProvider } from "styled-components";

import dark from "./styles/themes/dark";

import Portfolio from "./pages/Portfolio";
import GlobalStyles from "./styles/GlobalStyles";

library.add(fab);

const App = () => (
  <ThemeProvider theme={dark}>
    <GlobalStyles />
    <Portfolio />
  </ThemeProvider>
);

export default App;
