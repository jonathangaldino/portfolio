import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      red: string;
      black: string;
      text: string;
      blocks: {
        pink: string;
        blue: string;
        green: string;
        black: string;
      }
    };
  }
}