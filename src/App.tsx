import React from 'react';
import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';
import GlobalStyles from './styles/global';
import Portfolio from './pages/Portfolio';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <Portfolio />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
