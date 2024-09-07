import { extendTheme } from "native-base";
import { colors } from "./colors";

export const customTheme = extendTheme({
  colors,
  fontConfig: {
    ShamSans: {
      100: {
        normal: "ShamSans",
      },
      200: {
        normal: "ShamSansAlternatives",
      },
    },
  },
  fonts: {
    heading: "ShamSans",
    body: "ShamSans",
    mono: "ShamSans",
  },
  config: {
    initialColorMode: "dark",
  },
});

type CustomThemeType = typeof customTheme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
