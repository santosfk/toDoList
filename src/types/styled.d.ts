import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    COLOR: {
      BACKGROUND: String;
      TEXT: String;
      GREEN: String;
      RED: String;
      WHITE: String;
    };
  }
}
