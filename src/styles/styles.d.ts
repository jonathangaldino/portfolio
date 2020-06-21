import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      bgPrimary: string;
      bgSecondary: string;
      texts: string;
      iconsAndSocials: string;
    };
  }
}