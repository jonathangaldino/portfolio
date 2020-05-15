import React from 'react';
import { ThemeProvider } from 'styled-components';

import dark from './styles/themes/dark';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <ThemeProvider theme={dark}>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
