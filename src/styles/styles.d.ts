import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      texts: string;
      textsInverse: string;
      skillbar: string;
      skillbarfulfilled: string;
    };
  }
}