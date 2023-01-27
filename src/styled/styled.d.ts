import 'styled-components';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    font: {
      family: string;
    };
    colors: {
      main: string;
      background: string;
      error: string;
    };
  }
}
