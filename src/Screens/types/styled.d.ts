import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    COLOR: {
      BACKGROUND: string;
      TEXT: string;
      GREEN: string;
      RED: string;
      WHITE: string;
    };
  }
}
