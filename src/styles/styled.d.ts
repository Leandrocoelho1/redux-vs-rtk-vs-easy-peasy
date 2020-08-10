import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dark: string;
      grayDark: string;
      grayMedium: string;
      grayLight: string;
      white: string;
    };
  }
}
