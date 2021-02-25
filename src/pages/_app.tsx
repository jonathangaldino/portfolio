import '@styles/fonts.css';

import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@styles/_globalStyles';
import dark from '@styles/themes/dark';

const MyApp = ({ pageProps, Component }: AppProps) => {
  return (
    <ThemeProvider theme={dark}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp;