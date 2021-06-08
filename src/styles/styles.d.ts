import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      texts: string;
      blue: string;
      textsInverse: string;
      skillbg: string;
    };
  }
}
