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
      success: string;
      black: string;
      white: string;
    };
  }
}

export interface IStyles {
  name?: string;
  focus?: boolean;
  success?: boolean;
  error?: boolean;
  disabled?: boolean;
  theme?: DefaultTheme;
  column?: boolean;
  zIndex?: number;
  check?: boolean;
  first?: boolean;
  open?: boolean;
}
